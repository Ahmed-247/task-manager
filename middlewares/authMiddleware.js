import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    try {
        const decoded = jwt.verify(token, "secret key");
        req.user = decoded; // Make sure this contains .userid
        next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid token" });
    }
};

export default authMiddleware;
