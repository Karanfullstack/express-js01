const ErrorHandler = require("../errors/ErrorHandler");

function apikey(req, res, next) {
  const api_key = "1234567";
  const userApiKey = req.query.api_key;
  if (userApiKey && userApiKey === api_key) {
    next();
  } else {
    // res.json({message: "Not Allowed"});
    next(ErrorHandler.forbiddenError());
  }
}

module.exports = apikey;
