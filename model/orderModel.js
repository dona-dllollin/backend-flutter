import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
    }
});

const OrderSchema = new mongoose.Schema({
    namaPemesan: {
        type: String,
        required: true
    },
    noMeja: {
        type: String,
    },
    items: [ItemSchema],
    totalHarga: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["unpaid", "proses", "selesai"],
        default: "unpaid"

    }
});

export const Order = mongoose.model('Order', OrderSchema);
