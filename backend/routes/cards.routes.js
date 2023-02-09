const router = require('express').Router();
const { Card } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const cards = await Card.findAll();
    res.status(200).json(cards);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
