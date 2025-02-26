# KorraX

A website
Creating a complete portfolio and e-commerce website with PDF viewing and a subscription system is a large project that involves multiple files and components. Below, I will provide a simplified structure with example code snippets for each part of the application. This will include both the frontend (using React) and backend (using Node.js with Express). 

### Project Structure

```
/KorraX
│
├── /client                  # Frontend (React)
│   ├── /public
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── /src
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components
│   │   │   ├── Navbar.js
│   │   │   ├── Portfolio.js
│   │   │   ├── PDFViewer.js
│   │   │   ├── Subscription.js
│   │   │   └── ContactForm.js
│   │   ├── context
│   │   │   └── AuthContext.js
│   │   ├── pages
│   │   │   ├── Home.js
│   │   │   ├── Product.js
│   │   │   └── MyAccount.js
│   │   └── styles.css
│   └── package.json
│
├── /server                  # Backend (Node.js)
│   ├── /config
│   │   └── db.js
│   ├── /controllers
│   │   ├── authController.js
│   │   ├── pdfController.js
│   │   └── subscriptionController.js
│   ├── /models
│   │   ├── User.js
│   │   ├── PDF.js
│   │   └── Subscription.js
│   ├── /routes
│   │   ├── authRoutes.js
│   │   ├── pdfRoutes.js
│   │   └── subscriptionRoutes.js
│   ├── /middleware
│   │   └── authMiddleware.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

### Frontend Code (React)

#### 1. `client/src/index.js`
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';

ReactDOM.render(<App />, document.getElementById('root'));
```

#### 2. `client/src/App.js`
```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './components/Portfolio';
import Product from './pages/Product';
import MyAccount from './pages/MyAccount';
import Subscription from './components/Subscription';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/product/:id" component={Product} />
        <Route path="/my-account" component={MyAccount} />
        <Route path="/subscription" component={Subscription} />
        <Route path="/contact" component={ContactForm} />
      </Switch>
    </Router>
  );
};

export default App;
```

#### 3. `client/src/components/Navbar.js`
```javascript
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/subscription">Subscription</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
```

#### 4. `client/src/components/PDFViewer.js`
```javascript
import React from 'react';
import { Document, Page } from 'react-pdf';

const PDFViewer = ({ pdfUrl }) => {
  return (
    <Document file={pdfUrl}>
      <Page pageNumber={1} />
    </Document>
  );
};

export default PDFViewer;
```

#### 5. `client/src/pages/Home.js`
```javascript
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my work and subscribe for exclusive content.</p>
    </div>
  );
};

export default Home;
```

### Backend Code (Node.js)

#### 1. `server/server.js`
```javascript
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const pdfRoutes = require('./routes/pdfRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/portfolio-ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/auth', authRoutes);
app.use('/api/pdfs', pdfRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

#### 2. `server/models/User.js`
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  subscription: { type: mongoose.Schema.Types.ObjectId, ref: 'Subscription' },
});

module.exports = mongoose.model('User ', userSchema);
```

#### 3. `server/routes/authRoutes.js`
```javascript
const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;
```

#### 4. `server/controllers/authController.js`
```javascript
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();
  res.status(201).json({ message: 'User  registered successfully' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
  res.json({ token });
};
```

### Additional Files

You will need to create additional files for the PDF management, subscription management, and other components as outlined in the project structure. 

### Dependencies

Make sure to install the necessary dependencies for both the frontend and backend:

#### Frontend (React)
```bash
cd client
npm install react-router-dom react-pdf
```

#### Backend (Node.js)
```bash
cd server
npm install express mongoose bcrypt jsonwebtoken cors
```

### Running the Application

1. **Start the Backend**:
   ```bash
   cd server
   node server.js
   ```

2. **Start the Frontend**:
   ```bash
   cd client
   npm start
   ```

### Conclusion

This is a simplified version of the code structure for your portfolio and e-commerce website. You will need to expand upon this by adding more features, error handling, and security measures (like input validation and sanitization). Additionally, you will need to implement the PDF upload and management functionality, as well as the
