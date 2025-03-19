**Prompt:**

You are tasked with creating a comprehensive e-commerce website specifically designed for selling view-only PDF documents. The project involves multiple components and files, utilizing the following technology stack:

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python
- **Database**: PostgreSQL

Your goal is to ensure seamless user experience and robust functionality. The website must include the following features:

1. **User Authentication**:
   - Allow users to register and log in.
   - Implement password hashing and secure session management.

2. **PDF Viewing**:
   - Develop a PDF viewer that allows users to view documents within the browser.
   - Ensure that downloading or printing of PDFs is disabled.

3. **Product Management**:
   - Create a backend system to upload, manage, and display PDF products.
   - Implement categorization and search functionality for easy navigation.

4. **Subscription System**:
   - Develop a subscription model that allows users to subscribe for access to a specific set of PDFs.
   - Include payment processing integration (e.g., Stripe or PayPal) for subscription payments.

5. **User Dashboard**:
   - Provide a user dashboard that displays subscribed PDFs and allows users to manage their subscription.
   - Include features for users to view their payment history and account settings.

6. **Responsive Design**:
   - Ensure the frontend is fully responsive and optimized for various devices (desktop, tablet, mobile).

7. **Security Measures**:
   - Implement proper security measures to protect user data and prevent unauthorized access to PDF files.

8. **Deployment**:
   - Outline steps for deploying the application on a web server, including database setup and environment configuration.

9. **Documentation**:
   - Create comprehensive documentation for the codebase, including setup instructions, API endpoints, and user guides.

Please provide a detailed plan for each component, including code snippets where applicable, and best practices for development and deployment.

KorraX/
│
├── app.py                     # Main application file
├── config.py                  # Configuration settings
├── requirements.txt           # Python dependencies
├── Procfile                   # Heroku deployment file
├── .env                       # Environment variables
├── .gitignore                 # Files to ignore in Git
│
├── templates/                 # HTML templates
│   ├── dashboard.html
│   ├── login.html
│   └── register.html
│
├── static/                    # Static files (CSS, JS, images)
│   ├── css/
│   ├── js/
│   └── images/
│
├── models/                    # Database models
│   ├── user.py
│   ├── product.py
│   └── subscription.py
│
├── routes/                    # Application routes
│   ├── auth.py                # Authentication routes
│   ├── product.py             # Product management routes
│   └── subscription.py         # Subscription management routes
│
└── tests/                     # Test cases
    ├── test_auth.py
    ├── test_product.py
    └── test_subscription.py