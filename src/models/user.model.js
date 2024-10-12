import mongoose from "mongoose"

const userCollection = "Usarios"

const userSchema = new mongoose.Schema({
    nombre: String,
    stock: Number,
    categoria: String,
    precio: Number
})

const userModel = mongoose.model(userCollection, userSchema)

export default userModel