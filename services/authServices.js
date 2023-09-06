const loginService = async({ email, password }) => {
    try {
        // validate email and password
    return true
    } catch (error) {
        return false
    }
}

module.exports = {
    loginService
}