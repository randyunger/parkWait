module.exports = {
  hi: function (req, res) {
    console.log("Saying hi");
    return res.send("hey there!");
  },

  bye: function (req, res) {
    return res.redirect("http://www.sayonara.com");
  },

  times: function (req, res) {
    var times = DisService.getTimes("mk");
    return res.send(times);
  }
};
