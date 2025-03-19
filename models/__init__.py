from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Import models after db initialization to avoid circular imports
from models.user import User
from models.product import Product
from models.subscription import Subscription
