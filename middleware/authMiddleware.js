import { User } from "../model/userModel.js";

export const authMiddleware = async (req, res, next) => {
    const token = req.get('Authorization');

    if(!token){
        res.status(401).json({
        msg: "Unauthorized"
        })
    } else {
        const user = await User.findOne({token})

        if (!user) {
            res.status(401).json({
                msg: "Unathorized"
            }).end();
            
        } else {
            req.user = user;
            next()
        }
    }

}