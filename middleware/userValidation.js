const { User } = require('../models');

module.exports = async (req, res, next) => {
  const userId = req.header("userId");
  if (!userId) {
    return res.status(401).json({ auth: false, message: 'No token provided.' });
  }


  const validUser = await User.findOne({ where: { userId } });
  if (!validUser) {
    return res.status(403).json({ auth: false, message: 'Invalid User.' });
  }

   next();

  };