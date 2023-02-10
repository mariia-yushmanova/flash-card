const router = require('express').Router();
const { Card, User } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const cards = await Card.findAll();
    res.status(200).json(cards);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.put('/score', async (req, res) => {
  const { answer, id } = req.body;
  try {
    const card = await Card.findOne({ where: { id } });
    const user = await User.findOne({
      where: { id: 1 },
    });

    if (card.answer.toLowerCase() === answer.toLowerCase()) {
      user.score += card.point;
      user.save();

      res.json({ user });
    } else if (!user.score <= 0) {
      user.score -= card.point;
      user.save();
      res.json({ user });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
