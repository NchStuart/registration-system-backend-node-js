import { User } from "../models/user.js";
import bcrypt from "bcryptjs";

function register(req, res) {
    const { email, password } = req.body;
    const salt = bcrypt.genSaltSync(12);
    const hashPassword = bcrypt.hashSync(password, salt);

    const userD = new User({
        email: email.toLowerCase(),
        password: hashPassword,
    });

    userD
        .save()
        .then((aprove, reject) => {
            res.status(201).send(aprove);
        })
        .catch((err) => {
            res.status(201).send({ message: "Erro" });
        });
}

function login(req, res) {
    const { email, password } = req.body;
    const emailLowerCase = email.toLowerCase();

    User.findOne({ email: emailLowerCase }).then((userStorage, err) => {
        if (err) {
            res.status(500).send({ msg: "Erro de servidor!" });
        } else {
            if (userStorage.email == emailLowerCase) {
                bcrypt.compare(
                    password,
                    userStorage.password,
                    (byCryptErr, result) => {
                        if (byCryptErr) {
                            res.status(500).send({ msg: "Erro de servidor!" });
                        } else if (!result) {
                            res.status(400).send({
                                msg: "Senha invalida!",
                            });
                        } else {
                            res.status(200).send({
                                msg: "Usuario logado com sucesso!",
                            });
                        }
                    }
                );
            }
        }
    }).catch(err => {
        if(err) {
            res.status(400).send({
                msg: "Email invalido!",
            });
        }
    });
}

function refreshAccessToken(req,res) {

}

export const AuthController = {
    login,
    register,
    refreshAccessToken,
};
