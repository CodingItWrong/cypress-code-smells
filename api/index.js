const express = require('express');
const http = require('http');
const cors = require('cors');
const todoRouter = require('./routes/todos');
const sessionRouter = require('./routes/sessions');

const app = express();
app.use(cors());

app.use('/todos', todoRouter);
app.use('/sessions', sessionRouter);

const port = process.env.PORT || 3001;
const httpServer = http.createServer(app);
httpServer.listen(port, () => {
  console.log(`Express ready at http://localhost:${port}`);
});
