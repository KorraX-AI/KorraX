import unittest
from app import app, db
from models.product import Product

class ProductTestCase(unittest.TestCase):
    def setUp(self):
        app.config['TESTING'] = True
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
        self.client = app.test_client()

        with app.app_context():
            db.create_all()

    def tearDown(self):
        with app.app_context():
            db.session.remove()
            db.drop_all()

    def test_add_product(self):
        """Test adding a new product"""
        with app.app_context():
            product = Product(
                name="Test PDF",
                description="A sample PDF",
                file_path="/files/sample.pdf",
                category="Education",
                price=9.99
            )
            db.session.add(product)
            db.session.commit()

            saved_product = Product.query.first()
            self.assertEqual(saved_product.name, "Test PDF")
            self.assertEqual(saved_product.description, "A sample PDF")
            self.assertEqual(saved_product.file_path, "/files/sample.pdf")
            self.assertEqual(saved_product.category, "Education")
            self.assertEqual(saved_product.price, 9.99)

if __name__ == '__main__':
    unittest.main()
