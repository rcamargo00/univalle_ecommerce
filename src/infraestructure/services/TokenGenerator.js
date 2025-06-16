const jwt = require('jsonwebtoken');
const config = require('../../config');

class TokenGenerator {
  generate(payload) {
    return jwt.sign(
      { id: payload.id, roles: payload.roles },
      config.jwtSecret,
      { expiresIn: '1h' }
    );
  }

  // FUNCIONALIDAD DE REFRESH TOKEN
  generateRefreshToken(payload) {
    return jwt.sign(
      { id: payload.id },
      config.jwtRefreshSecret,
      { expiresIn: '10h' }
    );
  }
  verifyRefreshToken(token) {
    return jwt.verify(token, config.jwtRefreshSecret);
  }
}

module.exports = TokenGenerator;