import multer from "multer";
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Konversi import.meta.url menjadi __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Konfigurasi penyimpanan file menggunakan Multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, path.join(__dirname, '../uploads')); // Menyimpan file di folder 'uploads/'
    },
    filename: function(req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // Menyimpan file dengan nama unik
    }
})

  const upload = multer({ storage: storage});


  //endpoint
  const uploadGambar =  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: 'File gambar tidak ditemukan!' });
    }

    
    // const imagePath = req.file.path; // Path dari file yang diupload
    
    // Disini Anda bisa menyimpan imagePath ke database atau merespons dengan imagePath
    res.status(200).json({ imagePath: `/uploads/${req.file.filename}` });
  };

  export default {
    uploadGambar,
    upload,
    __dirname
  }