let database  = require("../data/database")
module.exports = controller = {
    index: function(req, res){
        res.write("----Estos son los autos de SuperAutos----\n\n" )
         database.forEach(concesionaria=>{
            res.write("\n\n")
             res.write(concesionaria.sucursal + "\n")
             res.write("\n\n")
              concesionaria.autos.forEach(auto=>{
               res.write(auto.marca + "--" + auto.modelo + "\n" )
          })
        })
        res.end()
     }
}