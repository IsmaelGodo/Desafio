const jwt = require("jsonwebtoken");
require("dotenv").config();

const tokenSecret = '23e0206a3b4af2759080b45d86d05185891ef08d687180a18bd653fd756ff2bcabdb63d94dd9880308abfaea24ff0b506323019166bcefff1300c3f603dc51c3'

const users = [
    {
        username: 'lolo',
        password: 'lolo@lolo.com'
    },
    {
        username: 'pepe',
        password: 'pepe@pepe.com'
    }
]

const getToken = (req, res) => {
    const {username, password} = req.body;

    const user = users.find((u)=>{
        return u.username === username && u.password === password;
    })

    if (user) {
        const token = jwt.sign(
            {username: user.username},
            tokenSecret,
            {
                expiresIn: '7d'
            }
        )

        res
        .status(201)
        .cookie("access-token", token, {
            // httpOnly: true,
            samesite: "lax",
          })
        .json({
            message: "User logged",
            token
        })
    } else {
        res.send("Incorrect user or password");
    }
}

module.exports = {
    getToken
}