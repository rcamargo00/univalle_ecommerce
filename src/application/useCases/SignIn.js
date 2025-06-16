class SignIn {
  constructor(userRepository, passwordHasher, tokenGenerator) {
    this.userRepository = userRepository;
    this.passwordHasher = passwordHasher;
    this.tokenGenerator = tokenGenerator;
  }
 
  async execute({ username, password }) {
    const user = await this.userRepository.findByUsername(username);
    if (!user) throw new Error('User not found');
    const isValid = await this.passwordHasher.compare(password, user.password);
    if (!isValid) throw new Error('Invalid password');
    const token = this.tokenGenerator.generate({ id: user._id, roles: user.roles });
    const refreshToken = this.tokenGenerator.generateRefreshToken({ id: user._id });
    return { user, token, refreshToken };
  }

  // FUNCIONALIDAD DE REFRESH TOKEN
  verifyRefreshToken(refreshToken) {
    try {
      return this.tokenGenerator.verifyRefreshToken(refreshToken);
    } catch (err) {
      throw new Error('Invalid or expired refresh token');
    }
  }
  async refreshToken(refreshToken) {
    const decoded = this.verifyRefreshToken(refreshToken);
    if (!decoded || !decoded.id) throw new Error('Invalid refresh token');
    const user = await this.userRepository.findById(decoded.id);
    if (!user) throw new Error('User not found');
    const accessToken = this.tokenGenerator.generate({ id: user._id, roles: user.roles });
    return { accessToken };
  }
}
 
module.exports = SignIn;