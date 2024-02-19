import log from "./log.js";
import fs from "graceful-fs";

const getToken = () => {
    const apiKeysJson = fs.readFileSync("./apiKeys.json") || '{}';
    const apiKeys = JSON.parse(apiKeysJson);
    return apiKeys.bearerToken;
}

/**
 * API Authentication
 *
 * @param req
 * @param res
 * @param next
 */
export default function apiAuth(req, res, next) {
    if (!req.headers.authorization) {
        res.status(401);
        res.send('Access forbidden');
        log('Access forbidden: Request with missing authorization headers: ' + JSON.stringify(req.headers));
    } else {
        const reqToken = req.headers.authorization.replace(/:|\s|Bearer/g, '');
        const token = getToken();
        if (reqToken === token) {
            next();
        } else {
            res.status(401);
            res.send('Access forbidden');
            log('Access forbidden: Invalid authorization token: ' + reqToken);
        }
    }
}
