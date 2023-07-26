const usersQueries = {
  getAllUsers: `SELECT * FROM users`,
  getUserByEmail: `
        SELECT * FROM users
        WHERE email=$1`,
  getUserById: `
        SELECT * FROM users
        WHERE user_id=$1`,
  createUser: `
        INSERT INTO users(
            username, 
            email, 
            password, 
            logged)
        VALUES ($1, $2, $3, $4);`,
  deleteUser: `
        DELETE FROM users
        WHERE user_id=$1;`,
};

module.exports = usersQueries;