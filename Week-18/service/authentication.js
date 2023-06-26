
/*

If we go by this path then it will be statefull implementation. As server is maintaining a state.
But if server crashes at some point then even if cookies hold the sessionId, still it will ask to login again to send
request to /users url.

const sessionIdToUserMap = new Map();
function setUser(id, user){
    sessionIdToUserMap.set(id,user);
}

function getUser(id){
    return sessionIdToUserMap.get(id);
}


module.exports = {
    setUser,
    getUser,
}

*/

const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key'; // Replace with your own secret key

function generateToken(user) {
  const payload = { userId: user._id, email: user.email};

  // Generate a JWT token with the payload and secret key
  const token = jwt.sign(payload, secretKey);

  return token;
}

function authenticate(req, res, next) {
  // Retrieve the token from the cookie or request headers
  const token = req.cookies.uid || req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Verify and decode the token using the secret key
    const decoded = jwt.verify(token, secretKey);

    // Retrieve the user ID from the decoded token and attach it to the request object
    req.userId = decoded.userId;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
}

module.exports = {
  generateToken,
  authenticate,
};
