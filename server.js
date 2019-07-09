const express = require('express');
const path = require('path');
const PORT = 5000; // localhost:5000

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

// When I need form data, I need to setup Express to grab that data
// Add extra functionality to Express
// This allows us to use request.body on routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This loads the React index page
app.get('/', (req, res) => {
  // Make sure React is loaded when the user visits the root url
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.post('/info', (req, res) => {
  console.log(req.body);
  // Save a user's contact info or something else to your database
  res.send({ message: 'Contact saved successfully!' });
})

// app.get('/test', (req, res) => {
//   res.send('You got this from the backend!');
// });


app.listen(PORT, () => console.log('Listening on port %s', PORT));