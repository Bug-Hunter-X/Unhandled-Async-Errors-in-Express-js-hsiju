const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
  someAsyncOperation()
    .then(() => res.send('Hello'))
    .catch(next);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
app.listen(3000, () => console.log('Server started'));

function someAsyncOperation() {
  // Simulate an asynchronous operation that may throw an error
  return new Promise((resolve, reject) => {
    const shouldFail = Math.random() < 0.5;  // Simulate failure 50% of the time
    if (shouldFail) {
      reject(new Error('Something went wrong'));
    } else {
      resolve();
    }
  });
}
