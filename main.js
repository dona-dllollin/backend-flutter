import { config } from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { connect } from './db.js'
import router from './routes/route.js'
import path from 'path'
import uploadImage from "./controller/uploadGambar.js";
import cors from "cors"



config()
connect()


const app = express()

app.use(cors())
app.use('/uploads', express.static(path.join(uploadImage.__dirname, '../uploads')));
app.use(express.json())

app.use(router)

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT} PORT`)
})
