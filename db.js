import { config } from "dotenv"
import mongoose from "mongoose"

config()

const connect = async () => await mongoose.connect(process.env.mongodb)
.then(() => console.log('berhasil terkoneksi'))
.catch((error) => console.log(error))

export {connect};