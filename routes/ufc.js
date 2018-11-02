const router = require('express').Router()

//dibawah ini dihapus saja, hanya untuk test
router.get('/',(req,res)=>{
    res.status(200).json({
        message : 'welcome to ufc'
    })
})

module.exports = router;