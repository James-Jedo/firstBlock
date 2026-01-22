import jwt from "jsonwebtoken";
export const generateToken = (userId, res) => {
    const {JWT_SECRET, } = process.env;
    if(!JWT_SECRET){
        throw new Error("JWT SECRET is not configured");
    }
const token = jwt.sign({userId},JWT_SECRET,{
    "expiresIn":"7d"
});
res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true, //accessible only by web server and also prevents cross-site scripting (XSS) attacks
    sameSite : "strict", //CSRF protection
    secure: process.env.NODE_ENV === "development" ? false : true //set to true in production (HTTPS)
});
return token;
};