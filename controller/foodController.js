import {Food} from '../model/foodModel.js'
import {Category} from '../model/categoryModel.js'

// tambah data makanan
const post = async (req, res) => {
    const { nama, harga, gambar, deskripsi, jumlah, categoryId } = req.body;
    try {

        const makanan = new Food({ nama, harga, gambar, deskripsi, jumlah, kategori: categoryId });
        await makanan.save();

        // Update related categories
        await Category.updateMany(
            { _id: { $in: categoryId } },
            { $push: { makanan: makanan._id } }
        );

        res.status(201).json(makanan);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error', err.message);
    }
}

// mendapatkan semua makanan
const get = async (req, res) => {
    try {
        const makanan = await Food.find().populate('kategori', 'nama');
        res.status(200).json(makanan);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error', err.message);
    }
}

// mendapatkan makanan berdasarkan kategori

const getByCategory = async (req, res) => {

    const {categoryId} = req.params

    try {
        const makanan = await Food.find({kategori: categoryId}).populate('kategori', 'nama')
        res.status(200).json(makanan)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

// update makanan
const put = async (req, res) => {
    const {foodId} = req.params
    const { nama, harga, gambar, deskripsi, jumlah, categoryId } = req.body;
    try { 
        const result = await Food.findByIdAndUpdate(foodId, { nama, harga, gambar, deskripsi, jumlah, kategori: categoryId }, {new: true})

         // Hapus ID makanan dari semua kategori yang tidak ada dalam categoryId baru
         await Category.updateMany(
            { makanan: result._id, _id: { $nin: categoryId } },
            { $pull: { makanan: result._id } }
        );

        // Update related categories
        await Category.updateMany(
            { _id: { $in: categoryId } },
            { $addToSet: { makanan: result._id } }
        );
        if(!result){
            return res.status(404).json({message: "Food not found"})
        }
        return res.status(200).send({
            message: "food updated"
        })
        
    } catch (error) {
        console.log(error.massage);
        res.status(500).send({message: error.message})
    }

}

// delete makanan
const remove = async (req, res) => {
try {
    const {foodId} = req.params
    const result = await Food.findByIdAndDelete(foodId)
    if(!result){
        return res.status(404).json({message: "Item not found"})
    }
    return res.status(200).json({message: `menu dengan nama ${result.nama} telah dihapus`})
    } catch (error) {
    console.log(error.massage);
        res.status(500).send({message: error.message})
    }
}

// mendapatkan detail makanan
const getById = async (req, res) => {
    try {
        const {foodId} =  req.params
        const food = await Food.findById(foodId).populate('kategori', 'nama')
        return res.status(200).json(food)
    } catch (error) {
        console.log(error.massage);
        res.status(500).send({message: error.message})
    }
}

export default {
    post,
    get,
    put,
    getByCategory,
    remove,
    getById

}