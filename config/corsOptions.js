const allowedOrigins = require('./allowedOrigins')

const corsOptions = {
  origin: (origin, callback) => {
    //if the domain (origin) is in the white list
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
      //null: Indicates that there is no error.
      //true: Authorizes the request by indicating that the origin is valid.
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
