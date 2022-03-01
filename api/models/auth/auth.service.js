const User = require("./Auth.model");
const bcrypt = require("bcrypt");

class AuthService {

    static async registerUser(credentials) {

        const users = User.findAll();

        const exists = (await users).some(u => u.username === credentials.username);

        if (exists) {
            throw new Error(`User with username: ${credentials.username} already exists.`)
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(credentials.password, salt);

        return User.create({...credentials, password: hashedPassword});
    }

    static async loginUser(credentials) {

        const user = await User.findByPk(credentials.id);
      
          const validPassword = await bcrypt.compare(
            credentials.password,
            user.password
          );
      
          if (!validPassword) {
            throw new Error(`Invalid password`)
          };
      
          return user;
    }
}
    
module.exports = AuthService;