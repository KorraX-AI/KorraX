from flask import Blueprint, render_template, request, redirect, url_for, flash
from models import db
from models.subscription import Subscription

bp = Blueprint('subscription', __name__)

@bp.route('/', methods=['GET'])
def subscription_list():
    subscriptions = Subscription.query.all()
    return render_template('subscriptions.html', subscriptions=subscriptions)

@bp.route('/subscribe', methods=['POST'])
def subscribe():
    email = request.form.get('email')

    if not email:
        flash("Email is required!", "danger")
        return redirect(url_for('subscription.subscription_list'))

    existing_subscription = Subscription.query.filter_by(email=email).first()
    if existing_subscription:
        flash("You are already subscribed!", "info")
        return redirect(url_for('subscription.subscription_list'))

    new_subscription = Subscription(email=email)
    db.session.add(new_subscription)
    db.session.commit()

    flash("Subscription successful!", "success")
    return redirect(url_for('subscription.subscription_list'))
