// ============================================================
// seed.js - Seed Initial Sample Families
// ============================================================
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Child = require('./models/Child');

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to MongoDB.');

    // Clear existing records
    await User.deleteMany({});
    await Child.deleteMany({});

    // 1. Create Danish
    const danish = await User.create({
      firstName: 'Danish',
      lastName: 'Ahmed',
      email: 'danish@example.com',
      phone: '9876543210'
    });

    // 2. Add children to Danish: Aarav, Anaya, Riya
    await Child.create([
      { firstName: 'Aarav', lastName: 'Ahmed', age: 8, email: 'aarav@example.com', parentId: danish._id },
      { firstName: 'Anaya', lastName: 'Ahmed', age: 5, email: 'anaya@example.com', parentId: danish._id },
      { firstName: 'Riya', lastName: 'Ahmed', age: 3, email: 'riya@example.com', parentId: danish._id }
    ]);

    // 3. Create Sonu
    const sonu = await User.create({
      firstName: 'Sonu',
      lastName: 'Verma',
      email: 'sonu@example.com',
      phone: '9123456780'
    });

    // 4. Add children to Sonu: Rahul, Priya
    await Child.create([
      { firstName: 'Rahul', lastName: 'Verma', age: 10, email: 'rahul@example.com', parentId: sonu._id },
      { firstName: 'Priya', lastName: 'Verma', age: 7, email: 'priya@example.com', parentId: sonu._id }
    ]);

    console.log('✅ Successfully seeded Danish (3 children) and Sonu (2 children)!');
  } catch (err) {
    console.error('Seeding error:', err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

seed();
