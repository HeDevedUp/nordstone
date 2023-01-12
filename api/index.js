const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post('/calculate', (req, res) => {
  const { numberOne, numberTwo, operator } = req.body
  if (!operator || !numberOne || !numberTwo) {
    return res.status(400).send({ error: 'Invalid request' })
  }

  let result
  switch (operator) {
    case '+':
      result = numberOne + numberTwo
      break
    case '-':
      result = numberOne - numberTwo
      break
    case '*':
      result = numberOne * numberTwo
      break
    case '/':
      if (numberTwo === 0) {
        return res.status(400).send({ error: 'Cannot divide by zero' })
      }
      result = numberOne / numberTwo
      break
    default:
      return res.status(400).send({ error: 'Invalid operator' })
  }

  res.send({ result })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
