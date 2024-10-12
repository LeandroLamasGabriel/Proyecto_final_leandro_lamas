import express from "express"
import mongoose from "mongoose"
import userRouter from "./routes/products.router.js"
import handlebars from 'express-handlebars'
import __dirname from './utils.js'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

mongoose.connect("mongodb+srv://lean:12345@cluster0.ksq5r.mongodb.net/baseproyecto?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> {console.log("Conectado a la base de datos")})
.catch(error => console.error("Error en la conexion a la base de datos", error))

app.use("/", userRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})