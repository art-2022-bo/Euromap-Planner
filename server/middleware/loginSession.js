const loginSession = (req, res, next) => {
  if (req.session && req.session.userId) {
    const now = Date.now();
    const timeout = 30 * 60 * 1000;

    if (req.session.lastActivity && (now - req.session.lastActivity > timeout)) {
      req.session.destroy(() => {
        res.clearCookie('connect.sid');
        return res.status(401).json({ message: 'Logged out due to inactivity' });
      });
      return;
    }

    req.session.lastActivity = now;
  }
  next();
};

module.exports = { loginSession };