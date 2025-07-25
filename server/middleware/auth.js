import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    try {
        
        let token = req.header('Authorization');
        if (!token) {
            return res.status(403).send({ message: "Access denied. No"})
        }
        if (token.startsWith("Bearer ")){
            token = token.slice(7, token.length).trimLeft();
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();

    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}