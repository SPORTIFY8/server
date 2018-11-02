let request = require('request')

class sportdbController {
    static getDataCategory(req, res) {
        let url =''
        if(req.params.category === 'Premier') {
            url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
        } else if(req.params.category === 'NBA') {
            url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA`
        } else if(req.params.category === 'NFL') {
            url =`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NFL`
        }
        let options = {
            url: url,
            headers: {
                'User-Agent': 'request',
            }
        }
        request(options, function(err, response, body) {
            if(err) {
                console.log(err)
                res.status(500).json(
                    {
                        message: err.message,
                        note: 'Please see console log for further details'
                    })
            } else {
                let data = JSON.parse(body)
                res.status(200).json({teams: data.teams})
            }
            
        })
    }
    static filterData(req, res) {
        let url =''
        if(req.params.category === 'Premier') {
            url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
        } else if(req.params.category === 'NBA') {
            url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA`
        } else if(req.params.category === 'NFL') {
            url =`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NFL`
        }
        let options = {
            url: url,
            headers: {
                'User-Agent': 'request',
            }
        }
        request(options, function(err, response, body) {
            if(err) {
                console.log(err)
                res.status(500).json(
                    {
                        message: err.message,
                        note: 'Please see console log for further details'
                    })
            } else {
                let data = JSON.parse(body)
                let filteredData = data.teams.filter(result => result.strTeam == req.params.team)
                res.status(200).json({teams: filteredData})
            }
        })
    }
    static playerList(req, res) {
        let options = {
            url: `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${req.params.team}`,
            headers: {
                'User-Agent': 'request',
            }
        }
        request(options, function(err, response, body) {
            if(err) {
                console.log(err)
                res.status(500).json(
                    {
                        message: err.message,
                        note: 'Please see console log for further details'
                    })
            } else {
                let data = JSON.parse(body)
                // console.log(data.player)
                res.status(200).json({players: data.player})
            }
        })
    }
}

module.exports = sportdbController