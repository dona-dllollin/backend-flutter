import express from "express";
import uploadImage from "../controller/uploadGambar.js";
import foodController from "../controller/foodController.js";
import categoryController from "../controller/categoryController.js";
import orderController from "../controller/orderController.js";
import userController from "../controller/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = new express.Router()

// Unathorized API

// upload gambar
router.post('/uploadGambar',uploadImage.upload.single('gambar'), uploadImage.uploadGambar)

//route makanan
router.get('/api/makanan', foodController.get)
router.get('/api/makanan/:foodId', foodController.getById)
router.get('/api/makanan/kategori/:categoryId', foodController.getByCategory)

//route kategori
router.get('/api/kategori', categoryController.get)
router.get('/api/kategori/:id', categoryController.getById)



//route order
router.post('/api/order', orderController.post)
router.get('/api/order/:id', orderController.getById)
router.get('/api/order', orderController.get)



// route user
router.post('/api/auth/registrasi', userController.registrasi)
router.post('/api/auth/login', userController.login)


// Authorize API

router.use(authMiddleware);

// user logout
router.delete('/api/auth/logout', userController.logout)
router.get('/api/user', userController.get)

// Update Order
router.put('/api/order/:id', orderController.updateStatus)

// Food Api
router.post('/api/makanan', foodController.post) //tambah
router.put('/api/makanan/edit/:foodId', foodController.put) //edit
router.delete('/api/makanan/hapus/:foodId', foodController.remove) //delete

// Category Api
router.delete('/api/kategori/hapus/:id', categoryController.remove) //delete
router.put('/api/kategori/edit/:id', categoryController.update) //update
router.post('/api/kategori', categoryController.post) // tambah











export default router  