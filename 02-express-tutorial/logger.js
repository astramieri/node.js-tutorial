const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // WARNING:
  // you must pass it on to the next middleware
  // unless you are terminating the whole cycle (res.send)
  console.log(req.user);
  next();
};

module.exports = logger;
