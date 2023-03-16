const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

// Get our quotes array from quotes.json

router.get("/", function (request, response) {
  const quotesFile = fs.readFileSync("./data/quotes.json");
  const quotesArray = JSON.parse(quotesFile);
  const mappedQuotes = quotesArray.map((quote) => {
    const triviaQuotes = {
      id: quote.id,
      character: quote.character,
      quote: quote.quote,
      episode: quote.episode,
    };
    return triviaQuotes;
  });
  response.json(mappedQuotes);
});

// Get id that matches the request and return it

router.get(":id", function (request, response) {
  const quotesFile = fs.readFileSync("./data/quotes.json");
  const quotesArray = JSON.parse(quotesFile);
  const quotesWithId = quotesArray.find((quote) => {
    return quote.id === request.params.id;
  });
  if (!quotesWithId) {
    response.status(404);
    response.json([]);
    return;
  }
  response.json([quotesWithId]);
});

module.exports = router;
