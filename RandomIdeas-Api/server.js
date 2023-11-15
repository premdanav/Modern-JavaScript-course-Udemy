const express = require('express')
require('dotenv').config();
const port = process.env.PORT || 5000;
const ideasRouter = require('./routes/ideas')
const connectDB = require('./config/db')


connectDB();
const app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/ideas', ideasRouter)

app.get('/', (req, res) => {
    res.send('welcome to app')
})


app.listen(port, () => console.log('server is listening on port ' + port))