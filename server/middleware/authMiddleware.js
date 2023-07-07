const jwt = require("jsonwebtoken")
const middleware = async(req,res,next)=>{ 
    try{
        const verifyToken = jwt.verify(req.headers.token, process.env.JWT_SECRET)
        req.userId = verifyToken.id
        next()
    }catch(error){
        res.status(400).json({ msg: `unvalid token ${error}` });
    }
}
module.exports = middleware