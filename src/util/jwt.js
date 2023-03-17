import jsonwebtoken from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../constants.js";

function createAccessToken(user) {
    const expToken = new Date();
    expToken.setHours(expToken.getHours() + 24);

    const payload = {
        token_type: 'accessToken',
        user_id: user._id,
        iat: Date.now(),
        exp: expToken.getTime()
    };

    return jsonwebtoken.sign(payload, JWT_SECRET_KEY);
}

function createRefreshToken() {}

function decodedToken() {}

function hasExpiredToken() {}

export const JWT = {
    createAccessToken,
    createRefreshToken,
    decodedToken,
    hasExpiredToken,
};
