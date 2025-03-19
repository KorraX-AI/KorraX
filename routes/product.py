import os
from werkzeug.utils import secure_filename
from flask import current_app
from flask import Blueprint, render_template, request, redirect, url_for, flash
from flask_login import login_required, current_user
from models import db
from models.product import Product
from models.subscription import Subscription

bp = Blueprint('product', __name__)

@bp.route('/', methods=['GET'])
def product_list():
    search_query = request.args.get('search', '').strip()
    if search_query:
        products = Product.query.filter(Product.name.ilike(f"%{search_query}%")).all()
    else:
        products = Product.query.all()
    return render_template('products.html', products=products)

@bp.route('/add', methods=['GET', 'POST'])
def add_product():
    if request.method == 'POST':
        name = request.form.get('name')
        price = request.form.get('price')
        description = request.form.get('description')
        category = request.form.get('category')
        file = request.files.get('file')

        if not name or not price or not file:
            flash("Name, price, and file are required!", "danger")
            return redirect(url_for('product.add_product'))

        # Save the uploaded file
        filename = secure_filename(file.filename)
        file_path = os.path.join(current_app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        new_product = Product(
            name=name,
            price=float(price),
            description=description,
            category=category,
            file_path=f"uploads/{filename}"
        )
        db.session.add(new_product)
        db.session.commit()

        flash('Product added successfully!', 'success')
        return redirect(url_for('product.product_list'))

    return render_template('add_product.html')

@bp.route('/view/<int:product_id>', methods=['GET'])
def view_product(product_id):
    product = Product.query.get_or_404(product_id)
    return render_template('view_product.html', product=product)

@bp.route('/pdf/<int:product_id>', methods=['GET'])
@login_required
def serve_pdf(product_id):
    product = Product.query.get_or_404(product_id)

    # Check if the user is subscribed to the product
    subscription = Subscription.query.filter_by(user_id=current_user.id, product_id=product_id).first()
    if not subscription:
        flash("You do not have access to this PDF.", "danger")
        return redirect(url_for('product.product_list'))

    if not product.file_path:
        flash("PDF not available for this product.", "danger")
        return redirect(url_for('product.product_list'))

    return render_template('pdf_viewer.html', product=product)
