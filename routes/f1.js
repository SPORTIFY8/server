const router = require('express').Router()
const f1=require('../controllers/f1Controller')
//dibawah ini dihapus saja, hanya untuk test
router.get('/',(req,res)=>{
    res.status(200).json({
        message : 'welcome to f1'
    })
})
router.get('/:year/:round/results', f1.getResults)
router.get('/drivers/:search', f1.searchDriver)


module.exports = router;