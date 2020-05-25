const express = require('express')

const dotenv = require('dotenv')
const connectDB  = require('./config/db')
const app = express()
app.use(express.json())
const usersRouter = require('./routes/users')
const productRouter = require('./routes/prodcuts')

dotenv.config({ path: './config/config.env'})
const PORT = process.env.PORT || 5000
connectDB();

app.get('/', function (req, res) {
    res.send('root')
})
app.use('/api/v1/users', usersRouter)

app.use('/api/v1/products', productRouter)

app.listen(PORT , () => console.log(`App is running on http://localhost:${PORT}`))