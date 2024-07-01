
import { Category } from '../model/categoryModel.js';

// menambah kategori
const post = async (req, res) => {
    const {nama, gambar} = req.body;

    try {
        if(!nama){
            return res.status(400).json({
                message: 'Required fields are missing'
            })
        }
        const kategori = new Category({ nama, gambar });
        await kategori.save();
        res.status(201).json(kategori);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}

//update kategori
const update = async (req, res) => {
    const{id} = req.params

    try {
        if(!req.body.nama){
            return res.status(400).json({
                msg: 'data nama harus diisi'
            }) 
        }

        const result = await Category.findByIdAndUpdate(id, req.body, {new: true})
        if(!result){
            return res.status(404).json({message: "Kategori tidak ditemukan"})
        }

        return res.status(200).send({msg: "data kategori telah diperbarui"})
        
    } catch (error) {
        console.log(error.massage);
        res.status(500).send({message: error.message})
    }
}

//menghapus kategori
const remove = async (req, res) => {
    try {
        const {id} = req.params
        const result = await Category.findByIdAndDelete(id)
        if(!result){
            return res.status(404).json({message: "Item not found"})
        }
        return res.status(200).json({message: `kategori dengan nama ${result.nama} telah dihapus`})
        } catch (error) {
        console.log(error.massage);
            res.status(500).send({message: error.message})
        }
}

// menampilkan semua kategori
const get = async (req, res) => {
    try {
        const kategori = await Category.find().populate('makanan');
        res.json(kategori);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}


export default {
    post,
    get,
    remove,
    update
}