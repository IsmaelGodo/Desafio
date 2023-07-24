const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

const apiRoutes = require('./routes/apiRoutes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get('/', (req, res) =>{
    res.send('funciona')
})
app.use('/api/',apiRoutes);


const server= app.listen(port, () => {
    console.log(`Puerto funcionando en el siguiente enlace: http://localhost:${port}`)
})

module.exports = server;