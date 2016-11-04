var Clarifai = require('../../node_modules/clarifai_node.js');
// Clarifai.initAPI(process.env.CLIENT_ID, process.env.CLIENT_SECRET);
Clarifai.initAPI("JYfyAgLIsxRDcK-kY1afF-mj6rURblEsxb47ifbo", "NVs8XaXW37_ChjebP28lOIq85TQLaWou9bgjqZm2");

// console.log("id: "+ process.env.CLIENT_ID)
// console.log("sec: " + process.env.CLIENT_SECRET)

// function resHandler(err, result) {
//   console.log("got res")
//   if(err != null) console.log(err)
//   var classes = result.results[0].result.tag.classes
//   console.log(classes)
// }
//
// function exampleTagSingleURL(url) {
//
//   var ourId = "train station 1"; // this is any string that identifies the image to your system
//
//   // Clarifai.setRequestTimeout( 100 ); // in ms - expect: force a timeout response
//   // Clarifai.setRequestTimeout( 100 ); // in ms - expect: ensure no timeout
//
//   Clarifai.tagURL( url , ourId, resHandler );
// }

module.exports = {
  classify: function (req, res) {
    console.log("clarifaing");
    var url = 'http://www.clarifai.com/img/metro-north.jpg';
    // exampleTagSingleURL(testImageURL)

    var retF = function(err, res){
      var str = result.results[0].result.tag.classes
      if(err) str = err
      return res.send(str);
    }

     return Clarifai.tagURL( url , url, retF );
  }
}
