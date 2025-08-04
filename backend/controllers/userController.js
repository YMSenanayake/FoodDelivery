import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

//login user
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    
    // Add input validation
    if (!email || !password) {
        return res.json({success: false, message: "Email and password are required"});
    }
    
    try {
        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({success: false, message: "User doesn't exist"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({success: false, message: "Invalid credentials"});
        }

        const token = createToken(user._id);
        res.json({success: true, token});

    } catch (error) {
        console.error("Login error:", error.message);
        console.error("Full error:", error);
        res.json({success: false, message: `Login error: ${error.message}`});
    }
}

const createToken = (id) => {
    // Check if JWT_SECRET exists
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET environment variable is not defined");
    }
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

//register user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    
    // Add input validation
    if (!name || !email || !password) {
        return res.json({success: false, message: "Name, email, and password are required"});
    }
    
    try {
        //checking if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        //validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token });

    } catch (error) {
        console.error("Registration error:", error.message);
        console.error("Full error:", error);
        
        // Handle specific MongoDB errors
        if (error.code === 11000) {
            return res.json({ success: false, message: "Email already exists" });
        }
        
        if (error.name === 'ValidationError') {
            return res.json({ success: false, message: `Validation error: ${error.message}` });
        }
        
        res.json({ success: false, message: `Registration error: ${error.message}` });
    }
}

export { loginUser, registerUser };