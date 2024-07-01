import mongoose from "mongoose";

const foodSchema = mongoose.Schema(
    {
        nama: {type: String, required: true},
        harga: {type: Number, required:true},
        gambar: {type: String, require:true},
        deskripsi: {type: String, required:true},
        jumlah: {type: Number},
        kategori: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        }]

    }
)

export const Food = mongoose.model('Food', foodSchema)