const db = require('../database/db');

class UserRepository {
    findByEmail(email) {
        return db.users.find(u => u.email === email);
    }

    create(user) {
        const novoUser = { id: Date.now(), ...user };
        db.users.push(novoUser);
        return novoUser;
    }
}

module.exports = new UserRepository();
