const express = require('express')
const config = require('./config/config');
const userRouter = require('./routers/user')
require('./db/db')
const port = config.port

const app = express()

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})