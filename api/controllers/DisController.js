module.exports = {
  hi: function (req, res) {
    console.log("Saying hi");
    return res.send("hey there!");
  },

  bye: function (req, res) {
    return res.redirect("http://www.sayonara.com");
  },

  allTimes: function (req, res) {
    var parkName = req.param("parkName", "mk");
    var times = DisService.getTimes(parkName);
    return res.send({timeData: times});
  },

  times: function (req, res) {
    var parkName = req.param("parkName", "mk");
    var times = DisService.getTimes(parkName);
    var onlyOpen = DisService.filterByOpen(times);
    var byWaitTime = DisService.sortByWaitTime(onlyOpen);
    return res.send(byWaitTime);
  },

  p: function (req, res) {
    var p = req.param("all", "TRUE");
    return res.send(p);
  },

  timesForPark: function (req, res) {
    var parkName = req.param("parkName", "mk");
    if(parkName == "favicon.ico")
        return res.send("favicon.ico")
    var showAllParam = req.param("a", "TRUE");
    console.log(req.allParams());
    console.log(showAllParam);
    console.log(typeof showAllParam);
    var showAll = showAllParam.indexOf("t") == 0;
    var allTimes = DisService.getTimes(parkName);
    var onlyOpen = DisService.filterByOpen(allTimes);
    var byWaitTime = DisService.sortByWaitTime(onlyOpen);
    // console.log(times);
    var dataSource = byWaitTime
    if(showAll) {
      dataSource = allTimes
    }
    return res.view("timesForPark", {title: parkName + " wait times", timeData: dataSource});
  }


};
