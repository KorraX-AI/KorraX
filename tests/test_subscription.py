import unittest
from app import create_app  # Import only create_app
from models import db  # Import db from models
from models.user import User
from models.product import Product
from models.subscription import Subscription

class SubscriptionTestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.app.config['TESTING'] = True
        self.app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
        self.client = self.app.test_client()

        with self.app.app_context():
            db.create_all()
            self.user = User(username='testuser', email='test@example.com')
            self.user.set_password('password')
            db.session.add(self.user)
            db.session.commit()

            self.product = Product(
                title="Test PDF",
                description="A test PDF document.",
                file_path="uploads/test.pdf",
                category="Test",
                price=9.99
            )
            db.session.add(self.product)
            db.session.commit()

    def tearDown(self):
        with self.app.app_context():
            db.session.remove()
            db.drop_all()

    def test_subscribe(self):
        with self.app.app_context():
            # Reattach the user and product instances to the session
            self.user = db.session.merge(self.user)
            self.product = db.session.merge(self.product)

            subscription = Subscription(user_id=self.user.id, product_id=self.product.id, email=self.user.email)
            db.session.add(subscription)
            db.session.commit()

            saved_subscription = Subscription.query.filter_by(user_id=self.user.id, product_id=self.product.id).first()
            self.assertIsNotNone(saved_subscription)
            self.assertEqual(saved_subscription.email, self.user.email)

if __name__ == '__main__':
    unittest.main()