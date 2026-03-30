const dotenv = require('dotenv');
const connectDB = require('../config/db');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

dotenv.config();

const run = async () => {
    await connectDB();

    try {
        const name = 'Nitesh GIri';
        const email = 'nitesh@gmail.com';
        const plainPassword = '12345678';

        const hashedPassword = await bcrypt.hash(plainPassword, 10);

        let user = await User.findOne({ email });

        if (user) {
            user.name = name;
            user.password = hashedPassword;
            user.role = 'admin';
            user.isApproved = true;
            await user.save();
            console.log(`Updated existing user to admin: ${email}`);
        } else {
            user = await User.create({
                name,
                email,
                password: hashedPassword,
                role: 'admin',
                isApproved: true
            });
            console.log(`Created new admin user: ${email}`);
        }
    } catch (error) {
        console.error('Error creating admin user:', error);
    } finally {
        await mongoose.connection.close();
        process.exit(0);
    }
};

run();
