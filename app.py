from flask import Flask, render_template
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_migrate import Migrate
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

# Flask extensions
bcrypt = Bcrypt()
login_manager = LoginManager()
migrate = Migrate()

def create_app():
    app = Flask(__name__)

    # Load configurations from config.py
    from config import Config
    app.config.from_object(Config)

    # Set secret key from environment variable
    app.secret_key = os.getenv("SECRET_KEY", "fallback-secret-key")  # Change fallback for production!

    # Set upload folder
    app.config['UPLOAD_FOLDER'] = os.path.join(os.getcwd(), 'static', 'uploads')
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

    # Initialize database and extensions
    from models import db  # Import db from models
    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)
    migrate.init_app(app, db)

    login_manager.login_view = "auth.login"

    # Load user function for Flask-Login
    from models.user import User

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    # Register blueprints
    from routes.auth import bp as auth_bp
    from routes.product import bp as product_bp
    from routes.subscription import bp as subscription_bp
    from routes.main import main as main_bp

    app.register_blueprint(auth_bp)
    app.register_blueprint(product_bp)
    app.register_blueprint(subscription_bp)
    app.register_blueprint(main_bp)

    @app.route("/")
    def home():
        return render_template("home.html")

    @app.route("/subscriptions")
    def subscriptions():
        return render_template("subscription.html")

    return app


# Run the application
if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
