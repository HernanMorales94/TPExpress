let database  = require("../data/database")
module.exports = controller = {
    index: function(req, res){
        res.write("----SUCURSALES de SuperAutos---- \n\n\n " )
        database.forEach(function(concesionaria) {
            res.write(concesionaria.sucursal  +"\n " )
            res.write(concesionaria.direccion +"\n " )
            res.write(concesionaria.telefono  +"\n\n " )
        })
        res.end()
        },
        sucursal:function(req,res){
            let sucId =req.params.id;  
            database.forEach(function(concesionaria){
             if(concesionaria.sucursal.toLowerCase()== sucId.toLowerCase()){
                res.write(concesionaria.sucursal  +"\n" )
                res.write(concesionaria.direccion +"\n" )
                res.write(concesionaria.telefono  +"\n\n" )
                res.write( "Autos Disponibles" +"\n\n " )
                concesionaria.autos.forEach(function(auto){
                    res.write(auto.marca + "-- "+ auto.modelo +"-- "+ auto.anio + "\n")
                })
                res.write("\n")
                res.end("Cantidad de Autos Disponibles:" + concesionaria.autos.length)
                }
            }) 
            res.end("sucursal inexistente")  
        }
}
