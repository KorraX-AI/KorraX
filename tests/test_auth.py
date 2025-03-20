import unittest
from app import create_app  # Import only create_app
from models import db  # Import db from models
from models.user import User

class AuthTestCase(unittest.TestCase):
    def setUp(self):
        """Set up a clean database before each test"""
        self.app = create_app()
        self.app.config['TESTING'] = True
        self.app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
        self.client = self.app.test_client()

        with self.app.app_context():
            db.create_all()

    def tearDown(self):
        """Clean up database after each test"""
        with self.app.app_context():
            db.session.remove()
            db.drop_all()

    def test_register(self):
        """Test user registration"""
        response = self.client.post('/register', data={
            'username': 'testuser',
            'email': 'test@example.com',
            'password': 'testpassword'
        })
        self.assertEqual(response.status_code, 302)  # Redirects after registration

        with self.app.app_context():
            user = User.query.filter_by(email='test@example.com').first()
            self.assertIsNotNone(user)
            self.assertEqual(user.username, 'testuser')

    def test_login_logout(self):
        """Test login and logout functionality"""
        with self.app.app_context():
            # Check if the user already exists
            user = User.query.filter_by(username="testuser").first()
            if not user:
                user = User(username="testuser", email="test@example.com")  # Add email
                user.set_password("testpassword")
                db.session.add(user)
                db.session.commit()

        response = self.client.post('/login', data={
            'username': 'testuser',
            'password': 'testpassword'
        })
        self.assertEqual(response.status_code, 302)  # Redirects to dashboard

        response = self.client.get('/logout')
        self.assertEqual(response.status_code, 302)  # Redirects to login page

if __name__ == '__main__':
    unittest.main()
