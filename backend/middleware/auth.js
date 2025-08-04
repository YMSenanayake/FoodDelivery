import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;
    
    if (!token) {
        return res.json({ success: false, message: "Not Authorized Login Again" })
    }
    
    try {
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined in environment variables');
        }
        
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        
        if (!token_decode.id) {
            throw new Error('Invalid token: missing user ID');
        }
        
        if (!req.body) {
            req.body = {};
        }
        
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log('Auth Middleware Error:', error);
        res.json({ success: false, message: "Invalid token or authentication error" })
    }
}

export default authMiddleware;