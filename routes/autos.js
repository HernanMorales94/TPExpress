const express = require ("express")
const router  = express.Router ()
const autoController = require("../controller/autosController")

router.get("/", autoController.index )

module.exports = router