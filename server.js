const express = require('express')
const app = express()
const authRouter = require('./routes/authRoute')


app.use('/api/auth', authRouter)

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message })

})
app.listen(3000, () => {
    console.log('Server is running on port 3000')
}
)