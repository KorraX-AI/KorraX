import unittest
from app import app, db
from models.user import User

class AuthTestCase(unittest.TestCase):
    def setUp(self):
        """Set up a clean database before each test"""
        app.config['TESTING'] = True
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
        self.client = app.test_client()
        
        with app.app_context():
            db.create_all()

    def tearDown(self):
        """Clean up database after each test"""
        with app.app_context():
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

        with app.app_context():
            user = User.query.filter_by(email='test@example.com').first()
            self.assertIsNotNone(user)
            self.assertEqual(user.username, 'testuser')

    def test_login_logout(self):
        """Test login and logout functionality"""
        with app.app_context():
            user = User(username="testuser")
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
