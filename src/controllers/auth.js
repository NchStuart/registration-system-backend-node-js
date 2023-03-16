import { User } from "../models/user.js";
import bcrypt from "bcryptjs";

function register(req, res) {
    const { email, password } = req.body;
    const salt = bcrypt.genSaltSync(12);
    const hashPassword = bcrypt.hashSync(password,salt);

    const userD = new User({ email: email.toLowerCase(), password: hashPassword });

    userD.save().then((aprove,reject) => {
        res.status(201).send(aprove)
    }).catch(err => {
        res.status(201).send({message: 'Erro'})
    });


}

export const AuthController = {
    register,
};

