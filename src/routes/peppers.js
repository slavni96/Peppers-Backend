var express = require('express'),
    router = express.Router();

var peppersContent = require("../data/peppers.json")

router
    .get("/", function (request, response) {
        return response.json(peppersContent);
    }
    );

router
    .get("/search", function (request, response) {
        var query = request.query.params;

        if (!query)
            return response.status(405);

        peppersContent = peppersContent.filter(function(pepper) {
            return (
                (pepper.name.indexOf(query) >= 0)
                || (pepper.description && pepper.description.indexOf(query) >= 0)
            )
          });
        
        return response.json(peppersContent);
    }
    );

module.exports = router;