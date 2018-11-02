const router = require('express').Router()

router.get('/',(req,res)=>{
    res.status(200).json({
        message : 'welcome to sportify server'
    })
})

module.exports = router