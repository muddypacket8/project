const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/submit-form', (req, res) => {
  // Insert form data into database here
  console.log(req.body);
  res.send('Form data received!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
