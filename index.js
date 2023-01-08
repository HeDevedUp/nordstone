const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post('/calculate', (req, res) => {
  const { operator, operand1, operand2 } = req.body
  if (!operator || !operand1 || !operand2) {
    return res.status(400).send({ error: 'Invalid request' })
  }

  let result
  switch (operator) {
    case 'add':
      result = operand1 + operand2
      break
    case 'subtract':
      result = operand1 - operand2
      break
    case 'multiply':
      result = operand1 * operand2
      break
    case 'divide':
      if (operand2 === 0) {
        return res.status(400).send({ error: 'Cannot divide by zero' })
      }
      result = operand1 / operand2
      break
    default:
      return res.status(400).send({ error: 'Invalid operator' })
  }

  res.send({ result })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
