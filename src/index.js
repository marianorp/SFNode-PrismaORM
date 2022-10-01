// Modulos
const express = require('express')
const app = express()
const morgan = require('morgan')


const PORT = process.env.PORT || 3000


// Importar rutas
const v1UsersRoute = require("./v1/routes/users.js")
const v1PostRoute = require("./v1/routes/post.js")
const v1CategoriesRoute = require('./v1/routes/categories.js')


// Middlewares
app.use(express.json())
app.use(morgan("dev"))


// Rutas
app.use("/api/v1/users", v1UsersRoute)
app.use("/api/v1/post", v1PostRoute)
app.use('/api/v1/categories', v1CategoriesRoute)


// Server 
app.listen(PORT, () =>{
    console.log(`Servidor en el puerto: ${PORT}`)
})