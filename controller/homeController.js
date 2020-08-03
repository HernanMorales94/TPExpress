let database  = require("../data/database")
module.exports = controller = {
    index: function(req, res){
        res.write("----Bienvenidos a SuperAutos---- \n\n " )
        res.write("----Nuestras Sucursales---- \n\n " )
        database.forEach(function(concesionaria) {
            res.write( concesionaria.sucursal +"\n " )
        })
        res.end()
        }
}

