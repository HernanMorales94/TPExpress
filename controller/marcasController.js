let database  = require("../data/database")
module.exports = controller = {
    index: function(req, res){
        res.write("----Las Marcas de SuperAutos---- \n\n\n " )
        database.forEach(function(concesionaria) {
            res.write(concesionaria.marca +"\n " )
        })
        res.end()
        }
}