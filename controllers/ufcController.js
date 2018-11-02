const request = require('request');

class Controller{
    static getChampions(req,res){
        let options = {
            uri : 'http://ufc-data-api.ufc.com/api/v3/us/fighters/title_holders'
        }
        request(options,function(err,response){
            if(err){
                res.status(500).json({
                    message : 'Internal Server Error'
                })
            }else{
                res.status(200).json(response)
            }
        })
    }

    static getNews(req,res){
        let options = {
            uri : 'http://ufc-data-api.ufc.com/api/v3/us/news'
        }
        request(options,function(err,response){
            if(err){
                res.status(500).json({
                    message : 'Internal Server Error'
                })
            }else{
                res.status(200).json(response)
            }
        })
    }


    static getEvents(req,res){
        let options = {
            uri : 'http://ufc-data-api.ufc.com/api/v3/us/events'
        }
        request(options,function(err,response){
            if(err){
                res.status(500).json({
                    message : 'Internal Server Error'
                })
            }else{
                res.status(200).json(response)
            }
        })
    }

    static getFighter(req,res){
        let options = {
            uri : `http://ufc-data-api.ufc.com/api/v3/us/fighters/${req.params.id}`
        }
        request(options,function(err,response){
            if(err){
                res.status(500).json({
                    message : 'Internal Server Error'
                })
            }else{
                res.status(200).json(response)
            }
        })
    }
}

module.exports = Controller