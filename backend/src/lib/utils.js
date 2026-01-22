import jwt from "jsonwebtoken";
export const generateToken = (userId, res) => {
const token = jwt.sign({userId}, process.env.JWT_SECRET,{
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