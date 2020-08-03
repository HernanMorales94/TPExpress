const express = require ("express")
const app = express()
app.listen(3030 ,() => console.log("Running LocalServer :OK!") )

const rutaHome = require ("./routes/home")
const rutaAutos = require ("./routes/autos")
//const rutaMarcas = require ("./routes/marcas")
const rutaSucursales = require ("./routes/sucursales")

app.use("/",rutaHome)
app.use("/autos",rutaAutos)
//app.use("/marcas",rutaMarcas)
app.use("/sucursales",rutaSucursales)


