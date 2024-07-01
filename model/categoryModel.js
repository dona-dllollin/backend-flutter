import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    gambar: {
        type: String
    },
    makanan: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    }]
});

export const Category = mongoose.model('Category', categorySchema)