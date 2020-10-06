const express = require('express');

const sessionRouter = express.Router();
sessionRouter.route('/:id').delete(destroySession);

async function destroySession(req, res) {
  setTimeout(() => {
    res.status(204);
    res.send();
  }, 1000);
}

module.exports = sessionRouter;
