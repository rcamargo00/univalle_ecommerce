class AuthController {
  constructor(signInUseCase) {
    this.signInUseCase = signInUseCase;
  }
 
  async signIn(req, res, next) {
    try {
      const { username, password } = req.body;
      const { user, token, refreshToken } = await this.signInUseCase.execute({ username, password });
      delete user.password;
      res.json({ user, token, refreshToken });
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  }

  // FUNCIONALIDAD DE REFRESH TOKEN
  async refreshToken(req, res) {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(400).json({ message: 'Refresh token required' });

    try {
      const { accessToken } = await this.signInUseCase.refreshToken(refreshToken);
      if (!accessToken) return res.status(401).json({ message: 'Invalid or expired refresh token' });
      res.json({ accessToken });
    } catch (err) {
      return res.status(401).json({ message: 'Invalid or expired refresh token' });
    }
  }
}
 
module.exports = AuthController;
 
 