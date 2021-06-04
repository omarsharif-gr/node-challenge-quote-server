// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Omars' Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

// '/quotes' route
app.get("/quotes", function (request, response) {
  response.send(`Here are the quotes: ${JSON.stringify(quotes)}` )
});

// '/quotes/random' route
app.get("/quotes/random", function (request, response) {
  let chosenQuote = JSON.stringify(pickFromArray(quotes))
  response.send(`Here is your random quote: ${(chosenQuote)}`)
})
app.get("/json", function (req, res) {
  let lat = req.query.lat;
  let lng = req.query.lng;
  res.send(`You searched for Lat: ${lat} and Lng: ${lng}`);
});
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


app.get("/search", function(request, response) {
  let word = request.query.word;
  console.log(word)
  let data, l;
  data = quotes;
    for (l in data) {
      let quote = `Quotes = ${data[l].quote} Author - ${data[l].author}`
      if ((quote.includes(word)) === true) {
        outputResult = JSON.stringify(quote);
        console.log(outputResult);
      }
      
    }

  response.send(`Here are a list of quotes that match the query parameters entered: ${outputResult}`);
  });

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT||3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
