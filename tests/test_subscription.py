import unittest
from app import app, db
from models.user import User
from models.product import Product
from models.subscription import Subscription

class SubscriptionTestCase(unittest.TestCase):
    def setUp(self):
        app.config['TESTING'] = True
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
        self.client = app.test_client()

        with app.app_context():
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
        with app.app_context():
            db.session.remove()
            db.drop_all()

    def test_subscribe(self):
        with app.app_context():
            subscription = Subscription(user_id=self.user.id, product_id=self.product.id, email=self.user.email)
            db.session.add(subscription)
            db.session.commit()

            saved_subscription = Subscription.query.filter_by(user_id=self.user.id, product_id=self.product.id).first()
            self.assertIsNotNone(saved_subscription)
            self.assertEqual(saved_subscription.email, self.user.email)

if __name__ == '__main__':
    unittest.main()