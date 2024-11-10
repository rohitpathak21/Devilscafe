import { User } from "../models/user.js";
export const newUser = async (req, res, next) => {
    try {
        const { name, email, photo, gender, role, _id, dob } = req.body;
        const user = await User.create({
            name,
            email,
            photo,
            gender,
            role,
            _id,
            dob,
        });
        return res.status(200).json({
            success: true,
            message: `Welcome ${user.name}`,
        });
    }
    catch (error) {
        console.error("Error creating user:", error); // Log the error for debugging
        return res.status(500).json({
            success: false,
            message: `An error occurred. Please try again later.`,
        });
    }
};
