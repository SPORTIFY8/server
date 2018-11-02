const router = require('express').Router()
const controller = require('../controllers/ufcController')

//dibawah ini dihapus saja, hanya untuk test
router.get('/',(req,res)=>{
    res.status(200).json({
        message : 'welcome to ufc'
    })
})

router.get('/getChampions',controller.getChampions)
router.get('/getNews',controller.getNews)
router.get('/getEvents',controller.getEvents)
router.get('/getFighter/:id',controller.getFighter)

router.get('/')

module.exports = router;