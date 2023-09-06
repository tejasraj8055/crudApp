


const protect = async (req, res, next) => {
    try {
        //validating request
        res.send('something went wrong')
    } catch (error) {
        return false
    }
}

module.exports = { protect }