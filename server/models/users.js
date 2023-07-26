const pool = require('../utils/db_pgsql');
const usersQueries = require('../models/queries');

const getAllUsers = async ()=> {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(usersQueries.getAllUsers);
        result = data.rows;
        console.log(result);
    } catch(err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

const getUserByEmail = async (email)=> {
    let client, result
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
}
const getUserById = async (user_id)=> {
    let client, result
    try {
        client = await pool.connect();
        const data = await client.query(usersQueries.getUserById, [user_id]);
        result = data.rows;
        console.log(result);
    } catch (error) {
        console.log('Ha habido un error');
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
}


getAllUsers();