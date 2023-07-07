var express = require('express');
var router = express.Router();

//Ruta de la apiZoom//
router.get('/apiZoom', apiZoomController.apiZomm)

module.exports = router;