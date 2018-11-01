const router = require('express').Router()

//ini dihapus saja
router.get('/',(req,res)=>{
    res.status(200).json({
        message : 'welcome to sportdb'
    })
})

module.exports = router