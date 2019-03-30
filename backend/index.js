const express = require("express");
const app = express();
const port = process.env.PORT || 4200;

// Enabling CORS as we want to communicate with the server.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Authorization, Content-Type, Accept"
  );
  next();
});

app.use(express.static(__dirname + "/dist"));

// Always send the index.html file. Angular's routing is handling the diffe$
// url. That way, the page reload works when done with the browser.
app.get("/*", function(request, response, next) {
  response.sendFile("index.html", {
    root: __dirname + "/dist"
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
