const pool = require("../utils/db_pgsql");
const usersQueries = require("../queries/usersQueries");

const getAllUsers = async () => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(usersQueries.getAllUsers);
    result = data.rows;
    console.log(result);
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const getUserByEmail = async (email) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(usersQueries.getUserByEmail, [email]);
    result = data.rows;
    console.log(result);
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    client.release();
  }
  return result;
};

const getUserById = async (user_id) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(usersQueries.getUserById, [user_id]);
    result = data.rows;
    console.log(result);
  } catch (error) {
    console.log("Ha habido un error");
    console.log(error);
    throw error;
  } finally {
    client.release();
  }
  return result;
};

const createUser = async (user) => {
  let client, result;
  const { username, email, password } = user;
  try {
    client = await pool.connect();
    const data = await client.query(usersQueries.createUser, [
      username,
      email,
      password,
      false,
    ]);
    result = data.rows;
    console.log(`User with email ${email} created`);
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const deleteUser = async (user_id)=> {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(
            usersQueries.deleteUser,
            [user_id]
        );
        result = data.rows;
        console.log(`User with id ${user_id} deleted`);
    } catch(err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

// const newUser = {
//     username: "lolo",
//     email: "lolo@gmail.com",
//     password: "lolo@gmail.com"
// }
// getAllUsers();
// getUserByEmail("pepe@pepe.com");
// getUserById(2);
// createUser(newUser);
// deleteUser(3);

module.exports = {
    getAllUsers,
    getUserByEmail,
    getUserById,
    createUser,
    deleteUser
}
