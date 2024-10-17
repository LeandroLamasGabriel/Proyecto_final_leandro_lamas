import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

const userCollection = "Usarios"

const userSchema = new mongoose.Schema({
    nombre: String,
    stock: Number,
    categoria: String,
    precio: Number
})

userSchema.plugin(mongoosePaginate)
const userModel = mongoose.model(userCollection, userSchema)

export default userModel