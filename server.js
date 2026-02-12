require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db.js');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// AUTH ROUTES FOR REGISTER AND LOGIN
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes); // Users will hit /api/auth/register and /api/auth/login for authentication

// Database Connection
connectDB();

// Basic Route for testing
app.get('/', (req, res) => {
    res.send('ShoppyGlobe API is running...');
});

app.get('/products', productRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));