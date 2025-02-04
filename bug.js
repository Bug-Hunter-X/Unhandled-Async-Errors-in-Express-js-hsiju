const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello');
  }).catch(err => {
    // Error handling missing, Express.js won't handle it properly
    console.error(err);
  });
});
app.listen(3000, () => console.log('Server started'));