var router = require("express").Router();

router["get"]("/", function(request, response)
{
    response.send("put api docs here?");
});

router.use("/youtube", require("./youtube.router.v2.js"));

module.exports = router;
