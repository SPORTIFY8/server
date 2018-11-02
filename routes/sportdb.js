const router = require('express').Router()
const Controller = require('../controllers/sportdbController.js')

// router.get('/', Controller.getData)
router.get('/:category', Controller.getDataCategory)
router.get('/players/:team', Controller.playerList)
router.get('/:category/:team', Controller.filterData)


module.exports = router