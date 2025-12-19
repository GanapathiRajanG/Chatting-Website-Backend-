const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./Models/userModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas');
  createAdmin();
}).catch(err => {
  console.error('Connection failed:', err.message);
  process.exit(1);
});

async function createAdmin() {
  try {
    const adminExists = await User.findOne({ email: 'admin@chat.com' });
    
    if (adminExists) {
      console.log('Admin user already exists!');
      process.exit(0);
    }
    
    const admin = await User.create({
      name: 'Admin',
      email: 'admin@chat.com',
      password: 'admin123',
      confirmPassword: 'admin123',
      role: 'admin'
    });
    
    console.log('Admin user created successfully!');
    console.log('Email: admin@chat.com');
    console.log('Password: admin123');
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin:', error.message);
    process.exit(1);
  }
}