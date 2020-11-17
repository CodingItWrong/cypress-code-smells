const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
app.use(cors());

const router = express.Router();
router
  .route('/count')
  .get((req, res) => {
    setTimeout(() => {
      res.send({ count: 10 });
    }, 1000);
  });
router
  .route('/sessions/:id')
  .delete((req, res) => {
    setTimeout(() => {
      res.status(204);
      res.send();
    }, 1000);
  });

app.use(router);

const port = process.env.PORT || 3001;
const httpServer = http.createServer(app);
httpServer.listen(port, () => {
  console.log(`Express ready at http://localhost:${port}`);
});
