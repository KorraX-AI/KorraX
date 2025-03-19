from flask import Blueprint, render_template
from flask_login import login_required, current_user
from models.subscription import Subscription
from models.product import Product

main = Blueprint("main", __name__)

@main.route("/dashboard")
@login_required
def dashboard():
    # Fetch subscribed products for the current user
    subscriptions = Subscription.query.filter_by(user_id=current_user.id).all()
    subscribed_products = [Product.query.get(sub.product_id) for sub in subscriptions]
    return render_template("dashboard.html", user=current_user, subscribed_products=subscribed_products)
