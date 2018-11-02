const request = require('request');

class f1 {
  static getResults (req,res) {
    const options={
      year: req.params.year.trim(),
      round: req.params.round.trim()
    }
    const endpoint=`http://ergast.com/api/f1/${options.year}/${options.round}/results.json`
    request(endpoint, function (err,data){
      if(err) res.send(err);
      else {
        res.status(200).send(JSON.parse(data.body).MRData.RaceTable.Races)
      }

    })
  }
  static searchDriver (req,res) {
    console.log('sdfdsfsfdsfdsfdsf')
    const driver=req.params.search;
    const endpoint=`http://ergast.com/api/f1/drivers/${driver}/driverStandings.json`
    request(endpoint, function (err,data){
      if(err) res.send(err);
      else {
        res.status(200).send(JSON.parse(data.body).MRData.StandingsTable.StandingsLists)
      }
    })
  }
}
module.exports=f1