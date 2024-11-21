import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const register = async (req,res) => {
    try {
        const {name,email,password} = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success : false,
                message : "All fields are required"
            })
        }
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({
                success : false,
                message : "User already exists with this email"
            })
        }

        const hashedPassword = await bcrypt.hash(password,10);

        await User.create({
            name,
            email,
            password : hashedPassword
        });

        return res.status(201).json({
            success : true,
            message : "Account created successfully!"
        })

    } catch (error) {
        return res.status(500).json({
            success : false,
            message : error?.message || "failed to register"
        })
    }
}


export const login = (req,res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : error?.message || "failed to login!"
        })
    }
}