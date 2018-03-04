let { User } = require('../models');

module.exports = {

  async indexAction (req, res, next)  {
    try {
      let users = await User.findAll({order: [['createdAt', 'DESC']]});
      res.json(users);
    } catch (e) {
      res.json(e);
    }
  },

  async postAction (req, res, next) {
    let { firstName, lastName, email } = req.body;
    try {
      return User.create({firstName, lastName, email})
      .then(() => res.status(201).redirect('/'));
    } catch (e) {
      res.json(e);
    }
  }
}
