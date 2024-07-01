import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    noHp: {
        type: String,
    },
    
    password: {
        type: String,
        required: true
    },
    token: {
        type: String
    }
})

export const User = mongoose.model('User', userSchema);