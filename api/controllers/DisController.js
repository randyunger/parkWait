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
    return res.send(times);
  },

  times: function (req, res) {
    var parkName = req.param("parkName", "mk");
    var times = DisService.getTimes(parkName);
    var onlyOpen = DisService.filterByOpen(times);
    var byWaitTime = DisService.sortByWaitTime(onlyOpen);
    return res.send(byWaitTime);
  }
};
