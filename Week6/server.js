var express = require("express")
const path = require('path'); // Make sure to include this
var app = express()
var port = process.env.port || 3002;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// GET endpoint to add two numbers using query parameters
app.get('/add', (req, res) => {
    const { a, b } = req.query;
  
    const x = Number(a);
    const y = Number(b);
  
    if (a === undefined || b === undefined) {
      return res.status(400).send('Missing parameters "a" and/or "b".');
    }
    if (Number.isNaN(x) || Number.isNaN(y)) {
      return res.status(400).send('Parameters must be numbers.');
    }
  
    const sum = x + y;
    return res.status(200).send(`The sum of ${x} and ${y} is: ${sum}`);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});