import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    firstName: String,
    lastName: String,
    password: String,
    avatar: String,
    admin: Boolean
});

export const User = mongoose.model('User',userSchema);
