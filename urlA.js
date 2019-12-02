// index.js

var server = require("./urlB");
var router = require("./urlC");

server.start(router.route);