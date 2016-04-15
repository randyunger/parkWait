module.exports = {

  sortByWaitTime: function (waitTimes){
    var op = waitTimes.sort(function(rideA, rideB){
      return rideA.waitTime - rideB.waitTime;
    });
    return op;
  }

  ,filterByOpen: function (waitTimes){
    var op = waitTimes.filter(function(ride){
      if(ride.status === "Operating") return true;
      else return false;
    });
    return op;
  }

  ,getTimes: function (parkName){
    if(parkName == "mk") return mkTimes;
    else return caTimes;
  }

  , kickoff: function(timeout) {
    var mk = function(){
      DisService.fetchTimes("mk");
      setTimeout(mk, timeout)
    }

    var ca = function(){
      DisService.fetchTimes("ca")
      setTimeout(ca, timeout)
    }
    mk()
    ca()
  }

  ,fetchTimes: function (parkName) {
    console.log("Fetching times for " + parkName);
    var parkApi;
    if(parkName == "mk") parkApi = mk;
    else parkApi = ca;

    parkApi.GetWaitTimes(function(err, data) {
      if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);

      if(parkName == "mk") mkTimes = data;
      else caTimes = data;
      // console.log(JSON.stringify(data, null, 2));
    });
  }


};

var mkTimes = null;
var caTimes = null;

var DisneyAPI = require("wdwjs");
var ca = new DisneyAPI.DisneylandCaliforniaAdventure();
var mk = new DisneyAPI.DisneylandMagicKingdom();
