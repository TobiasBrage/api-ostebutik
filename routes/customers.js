module.exports = (server) => {
    server.get('/customers', function (req, res, next) {
        res.send({"kundenr":"ef22", "navn":"Tobias Brage"});
        return next();
    });
};