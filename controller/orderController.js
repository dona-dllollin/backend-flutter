import {Order} from '../model/orderModel.js'
import {Food} from '../model/foodModel.js'

// Create a new order
const post = async (req, res) => {
    const { namaPemesan, noMeja, items, status } = req.body;

    if (!namaPemesan || !items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ msg: 'Data yang diperlukan tidak lengkap atau tidak valid' });
    }

    try {
        // Calculate total price
        let totalHarga = 0;
        for (let item of items) {
            const makanan = await Food.findOne({nama: item.nama});
            if (makanan) {
                item.nama = makanan.nama;
                item.harga = makanan.harga;
                item.total = makanan.harga * item.quantity
                totalHarga += item.total;
                if(makanan.jumlah > 0){
                    if(item.quantity <= makanan.jumlah){
                        makanan.jumlah -= item.quantity
                        await makanan.save()
                    }else {
                        return res.status(401).json({ msg: `stok ${makanan.nama} tidak mencukupi` });
                    }
                } else {
                    return res.status(402).json({ msg: `stok ${makanan.nama} sudah habis` });

                }

            } else {
                return res.status(404).json({ msg: `Makanan dengan ID ${item.makananId} tidak ditemukan` });
            }
        }

        const order = new Order({
            namaPemesan,
            noMeja,
            status,
            items,
            totalHarga
        });

        await order.save();
        res.status(200).json(order);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

// Get all orders
const get =  async (req, res) => {
    try {
        let query = {};

        if (req.query.status) {
            if (req.query.status === 'unpaid') {
                query.status = 'unpaid';
            } else if (req.query.status === 'proses') {
                query.status = 'proses';
            } else if (req.query.status === 'selesai') {
                query.status = 'selesai';
            }
        }
        const orders = await Order.find(query);
        res.json(orders);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};


// update status order
const updateStatus = async (req, res) => {

    const {id} = req.params;
    const {status} = req.body;

    try {
        const order = await Order.findById(id);

        if(!order){
            return res.status(404).json({ msg: 'Order tidak ditemukan' });
        }
        order.status = status;
        await order.save();
        res.json({msg: `status orderan telah diubah menjadi ${order.status}`}); 


    } catch (error) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}

// mendapatkan orderan by id
const getById = async (req, res) => {
    const {id} = req.params;
    try {
        const order = await Order.findById(id);

        if (!order){
            return res.status(404).json({msg: "maaf, data order tidak ditemukan"})
        }

        res.status(201).json(order)
        
    } catch (error) {
        
    }
}



export default{
    post,
    get,
    updateStatus,
    getById
}
