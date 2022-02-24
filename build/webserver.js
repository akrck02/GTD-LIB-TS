const liveServer = require("live-server");
 
const params = {
    port: 5500, 
    host: "127.0.0.1",
    root: ".",
    open: false,
    wait: 1000, 
    logLevel: 2, 
    middleware: [function(req, res, next) { next(); }]
};
liveServer.start(params);