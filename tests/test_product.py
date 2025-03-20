import unittest
import io
from app import create_app  # Import only create_app
from models import db  # Import db from models
from models.product import Product
from models.user import User  # Import User model

class ProductTestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.app.config['TESTING'] = True
        self.app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
        self.client = self.app.test_client()

        with self.app.app_context():
            db.create_all()
            self.user = User(username="admin", email="admin@example.com", is_admin=True)  # Create admin user
            self.user.set_password("adminpassword")
            db.session.add(self.user)

            self.product = Product(
                title="Test Product",
                description="A test product",
                file_path="/files/test.pdf",
                category="Test",
                price=10.0
            )
            db.session.add(self.product)
            db.session.commit()

    def tearDown(self):
        with self.app.app_context():
            db.session.remove()
            db.drop_all()

    def test_add_product(self):
        """Test adding a new product"""
        with self.app.app_context():
            product = Product(
                title="Test PDF",  # Changed from name to title
                description="A sample PDF",
                file_path="/files/sample.pdf",
                category="Education",
                price=9.99
            )
            db.session.add(product)
            db.session.commit()

            # Retrieve the product with the title "Test PDF"
            saved_product = Product.query.filter_by(title="Test PDF").first()
            self.assertIsNotNone(saved_product)
            self.assertEqual(saved_product.title, "Test PDF")  # Changed from name to title
            self.assertEqual(saved_product.description, "A sample PDF")
            self.assertEqual(saved_product.file_path, "/files/sample.pdf")
            self.assertEqual(saved_product.category, "Education")
            self.assertEqual(saved_product.price, 9.99)

    def test_add_product_as_admin(self):
        """Test adding a product as an admin user"""
        with self.app.app_context():
            self.user.is_admin = True
            db.session.commit()

            response = self.client.post('/add', data={
                'name': 'Admin Product',
                'price': 19.99,
                'description': 'Admin-only product',
                'category': 'Admin',
                'file': (io.BytesIO(b"dummy content"), 'test.pdf')  # Use io.BytesIO for in-memory file
            })
            self.assertEqual(response.status_code, 302)  # Redirect after success

    def test_view_product_without_subscription(self):
        """Test viewing a product without a subscription"""
        with self.app.app_context():
            # Reattach the product instance to the session
            self.product = db.session.merge(self.product)

            response = self.client.get(f'/view/{self.product.id}')
            self.assertEqual(response.status_code, 302)  # Redirect to product list

if __name__ == '__main__':
    unittest.main()