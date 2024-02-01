function requireUser(req, res, next) {
  if(!req.user)
  next({
  name: "Unauthorized User Error",
  message: "You must be logged in",
});
}
  next();
module.exports = {
  requireUser
}