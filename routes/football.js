const router = require('express').Router();
const footballController = require('../controllers/footballController.js')

router.get('/teams', footballController.getTeams)
router.get('/matches', footballController.getMatches)
router.get('/standings', footballController.getStandings)
router.get('/teams/:id', footballController.getDetailTeam)
router.get('/scorers', footballController.getTopScorer)

router.get('/scorers/:id', footballController.scorers)
router.get('/standings/:id', footballController.standings)
router.get('/matches/:id', footballController.getMatches)
module.exports = router