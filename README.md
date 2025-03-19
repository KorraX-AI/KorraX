# KorraX - View-Only PDF E-Commerce Platform

KorraX is a secure and user-friendly e-commerce platform designed for selling **view-only PDF documents**. It allows users to browse, subscribe, and view premium PDF content directly in their browser while ensuring that the documents cannot be downloaded or printed. Built with modern technologies, KorraX provides a seamless experience for both users and administrators.

---

## Key Features

- **User Authentication**: Secure registration and login with password hashing and session management.
- **PDF Viewer**: In-browser PDF viewing with download and print restrictions.
- **Product Management**: Upload, categorize, and search for PDF products.
- **Subscription System**: Subscription-based access to PDFs with payment integration (Stripe or PayPal).
- **User Dashboard**: Manage subscriptions, view PDFs, and access account settings.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Security**: Protect user data and prevent unauthorized access to PDFs.

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- Python 3.8 or higher
- PostgreSQL (for the database)
- Git (for cloning the repository)

---

### How to Clone the Repository

1. Open your terminal or command prompt.
2. Clone the repository using the following command:
   ```bash
   git clone https://github.com/KorraX-AI/KorraX.git
   ```
3. Navigate to the project directory:
   ```bash
   cd KorraX
   ```

---

### How to Run the Application

1. **Install Dependencies**:
   Install the required Python packages using `pip`:
   ```bash
   pip install -r requirements.txt
   ```

2. **Set Up Environment Variables**:
   Create a `.env` file in the project root and configure the following variables:
   ```
   FLASK_APP=app.py
   FLASK_ENV=development
   DATABASE_URL=postgresql://<username>:<password>@localhost/<database_name>
   SECRET_KEY=your_secret_key
   UPLOAD_FOLDER=static/uploads
   ```

3. **Initialize the Database**:
   Set up the database schema using Flask-Migrate:
   ```bash
   flask db init
   flask db migrate -m "Initial migration"
   flask db upgrade
   ```

4. **Run the Application**:
   Start the Flask development server:
   ```bash
   flask run
   ```
   The application will be available at `http://127.0.0.1:5000`.

---

## How to Use the Website

1. **Register and Login**:
   - Navigate to the registration page to create an account.
   - Log in using your credentials.

2. **Browse Products**:
   - Visit the "Products" page to explore available PDFs.
   - Use the search bar to find specific products.

3. **Subscribe to a Product**:
   - Select a product and subscribe to gain access.
   - Complete the payment process using Stripe or PayPal.

4. **View PDFs**:
   - Access subscribed PDFs from your dashboard.
   - View PDFs securely in the browser without download or print options.

5. **Manage Your Account**:
   - Use the dashboard to manage subscriptions and view payment history.

---

## Deployment Instructions

1. **Prepare for Deployment**:
   - Ensure all dependencies are listed in `requirements.txt`.
   - Configure the `Procfile` for deployment on platforms like Heroku.

2. **Deploy to Heroku**:
   ```bash
   heroku create
   git push heroku main
   heroku run flask db upgrade
   ```

3. **Access the Application**:
   - Open the Heroku URL provided after deployment.

---

## Contributing

We welcome contributions to KorraX! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push them to your forked repository:
   ```bash
   git commit -m "Add your message here"
   git push origin feature-name
   ```
4. Submit a pull request with a detailed description of your changes.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## Support

If you encounter any issues or have questions, feel free to open an issue on the [GitHub repository](https://github.com/KorraX-AI/KorraX) or contact us directly.

Happy coding!

