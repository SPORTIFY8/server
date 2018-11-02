const key = '2ddfa758c42a49f8bad3036c76ddad5f';
const request = require('request');
require('dotenv').config()
class FootballController {
    static getTeams(req, res) {
        var options = {
            url: `http://api.football-data.org/v2/competitions/2019/teams`,
            headers: {
                'User-Agent': 'request',
                'X-Auth-Token': key
            }
        };
        request(options, function(err, response, body) {
            if (err) {
                res.status(400).json({
                    message: err.message
                })
            } else {
                res.json(JSON.parse(body).teams)
            }
        })
    }
    static getMatches(req, res) {
        var options = {
            url: `http://api.football-data.org/v2/competitions/2019/matches`,
            headers: {
                'User-Agent': 'request',
                'X-Auth-Token': key
            }
        };
        request(options, function(err, response, body) {
            if (err) {
                res.status(400).json({
                    message: err.message
                })
            } else {
                res.json(JSON.parse(body).matches)
            }
        })
    }
    static getStandings(req, res) {
        var options = {
            url: `http://api.football-data.org/v2/competitions/2019/standings`,
            headers: {
                'User-Agent': 'request',
                'X-Auth-Token': key
            }
        };
        request(options, function(err, response, body) {
            if (err) {
                res.status(400).json({
                    message: err
                })
            } else {
                res.json(JSON.parse(body).standings[0].table)
            }
        })
    }
    static getDetailTeam(req, res) {
        var options = {
            url: `http://api.football-data.org/v2/teams/${req.params.id}`,
            headers: {
                'User-Agent': 'request',
                'X-Auth-Token': key
            }
        };
        request(options, function(err, response, body) {
            if (err) {
                res.status(400).json({
                    message: err.message
                })
            } else {
                res.json(JSON.parse(body))
            }
        })
    }
    static getTopScorer(req, res) {
        var options = {
            url: `http://api.football-data.org//v2/competitions/2019/scorers`,
            headers: {
                'User-Agent': 'request',
                'X-Auth-Token': key
            }
        };
        request(options, function(err, response, body) {
            if (err) {
                res.status(400).json({
                    message: err
                })
            } else {
                res.json(JSON.parse(body).scorers)
            }
        })
    }
    static scorers(req, res) {
        var options = {
            url: `http://api.football-data.org/v2/competitions/${req.params.id}/scorers`,
            headers: {
                'User-Agent': 'request',
                'X-Auth-Token': key
            }
        };
        request(options, function(err, response, body) {
            if (err) {
                res.status(400).json({
                    message: err
                })
            } else {
                res.json(JSON.parse(body).scorers)
            }
        })

    }
    static standings(req, res) {
        var options = {
            url: `http://api.football-data.org/v2/competitions/${req.params.id}/standings`,
            headers: {
                'User-Agent': 'request',
                'X-Auth-Token': key
            }
        };
        request(options, function(err, response, body) {
            if (err) {
                res.status(400).json({
                    message: err
                })
            } else {
                res.json(JSON.parse(body).standings[0].table)
            }
        })
    }
    static getMatches(req, res) {
        var options = {
            url: `http://api.football-data.org/v2/teams/${req.params.id}/matches`,
            headers: {
                'User-Agent': 'request',
                'X-Auth-Token': key
            }
        };
        request(options, function(err, response, body) {
            if (err) {
                res.status(400).json({
                    message: err
                })
            } else {
                let data = JSON.parse(body).matches
                const previous = data.filter(function(datum) { return datum.score.winner !== null });
                const next = data.filter(function(datum) { return datum.score.winner === null });
                res.json({
                    previous: previous,
                    next: next
                })
            }
        })
    }
}
module.exports = FootballController