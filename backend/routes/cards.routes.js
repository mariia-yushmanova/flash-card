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
  const { answer } = req.body;
  try {
    const card = await Card.findOne({ where: { id: req.body.id } });
    const user = await User.findOne({
      where: { id: req.session.userId },
    });

    if (card.answer.toLowerCase() === answer.toLowerCase()) {
      user.score += card.point;
      user.save();
      const newUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        score: user.score,
      };

      res.json({ user: newUser, message: 'success' });
    } else if (!user.score <= 0) {
      user.score -= card.point;
      user.save();
      const newUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        score: user.score,
      };
      res.json({ user: newUser, message: 'deny' });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
