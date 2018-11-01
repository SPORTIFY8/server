const router = require('express').Router()

//ini dihapus saja nanti
router.get('/',(req,res)=>{
    res.status(200).json({
        message : 'welcome to football'
    })
})

module.exports = router