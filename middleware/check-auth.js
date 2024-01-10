const jwt = require ("jsonwebtoken");

function checkAuth ( req, res , next){
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token , "secret");
        req.userData = decoded;
        next();
    }catch(e){
        return res.status(401).json({
           'message' : "unauthorization token expire",
           'error' : e  
        });
    }
}

module.exports = {
    checkAuth: checkAuth
}