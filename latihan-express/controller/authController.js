import UserModel from "../models/userModel.js";


export const register = async (req, res) => {
    try {
        const registerData = req.body

        console.log(registerData);

        const hashPassword = hash(registerData.password)

        await UserModel.create({
            username : registerData.username,
            email : registerData.email,
            password : registerData.password
        })

        res.status(201).json ({
            massage : "Berhasil register, silahkan login",
            data : null
        })
    }
    catch(e) {
        res.status(500).json ({
            massage : e.massage,
            data : null
        })
    }
}

export const login = async (req, res) => {
    try {
        const loginData = req.body



        const user = await UserModel.findOne ({
            email : loginData.email
        })
        //membandingkan user dengan database
        if (!user) {
            res.status (404).json ({
                message : "User tidak di temukan",
                data : null
            })
        }
        // membandingkan password dengan database
        if(user.password == loginData.password) {
            return res.status(200).json({
                message : "Login berhasil!",
                data : {
                    username : user.username,
                    email : user.email,
                    token : "TOKEN"
                }
            })
        }
         return res.status(401).json({
                message : "Login gagal",
                data : null
         })
    }

    catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
    }
}