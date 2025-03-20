from models import db

class Product(db.Model):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)  # Changed from name to title
    description = db.Column(db.Text, nullable=True)
    file_path = db.Column(db.String(255), nullable=True)
    category = db.Column(db.String(100), nullable=True)
    price = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return f"<Product {self.title} - ${self.price}>"
