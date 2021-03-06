var APIBase = require("apibase-client");
var client = new APIBase({
    baseUrl: 'http://johnsd.cse.unsw.edu.au:3000'
});


var GET_SQL = '70971c8b-c141-4c4c-8a1d-792fb5113493';
module.exports = function(source, resourceType, cb) {
  client.invokeOperation(GET_SQL, source, null, null, function(err, result) {

     result = JSON.parse(result.body);
      var searchResults = {};
      searchResults.query = result["q"];
      searchResults.results = [];
      result["results"].forEach( function (arrayItem) {
          var x = {};
          x.title = arrayItem["title"];
          x.snippet = arrayItem["snippet"];
          searchResults.results.push(x);
      });
      cb(err, searchResults);
  });
};
