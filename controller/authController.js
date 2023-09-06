const { loginService } = require("../services/authServices")

const loginController = async (req, res, next) => {
    //validating req.body
    try {
        const result = await loginService('email', 'password')
        if (result) {
            res.status(200).json({ message: 'Login successful' })
        } else {
            res.status(401).json({ message: 'Login failed' })
        }
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const profileController = (req, res)=>{
    res.send('Profile page')
}

module.exports = { loginController, profileController }