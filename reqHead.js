var express = require("express");
var app = express();

app.use(function(req, res) {

    var headerInfo = {
        'UserAgent': req.headers["user-agent"],
        'language': req.headers["accept-language"].slice(0, req.headers["accept-language"].indexOf(",")),
        'ip': req.connection.remoteAddress
    }
    res.end(JSON.stringify(headerInfo));

});

app.listen(8080);