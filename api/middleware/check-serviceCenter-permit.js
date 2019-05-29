const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.decode(token);
    try {
        if (decoded.role === process.env.SER_VICE) {

            next();
        } else {
            throw Error;
        }
    } catch{
        return res.status(401).json({
            message: 'Permission Failed'
        });
    }
}