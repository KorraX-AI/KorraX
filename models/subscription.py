from models import db
from models.product import Product

class Subscription(db.Model):
    __tablename__ = "subscriptions"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)
    email = db.Column(db.String(255), unique=False, nullable=True)

    product = db.relationship("Product", backref="subscriptions")

    def __repr__(self):
        return f"<Subscription User {self.user_id} -> Product {self.product_id}>"
