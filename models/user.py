from flask_login import UserMixin
from models import db
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model, UserMixin):
    __tablename__ = "users"  # ✅ FIXED: Use "users" to match the DB table name

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)  # Add is_admin field

    def set_password(self, password):
        """Hashes and sets the password."""
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        """Verifies the hashed password."""
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return f"<User {self.username}>"
