var connector = require('./index.js');
var SOURCE = {
    "q": "hello"
};

var TARGET_RESOURCE_TYPE = "Yooz.ir Search Results";

connector(SOURCE, TARGET_RESOURCE_TYPE, function (err, result) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(result);
});
