import UserModel from "../models/userModel.js";
import { jwtSignUtil } from "../utils/jwtSignUtil.js";
import {compare, hash} from "../utils/hashUtil.js";
import { request } from "express";


export const register = async (req, res) => {
    try {
        const request = req.body

        console.log(request);

        const hashPassword =await hash(request.password)
        
        await UserModel.create({
            username : request.username,
            email : request.email,
            password : hashPassword
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
        const request = req.body
        console.log(request);

        const user = await UserModel.findOne ({
            email : request.email
        })
        const isPasswordMatch = compare(request.password, user.password);
        //membandingkan user dengan database
        if (!isPasswordMatch) {
            res.status (404).json ({
                message : "User tidak di temukan",
                data : null
            })
        }


        // membandingkan password dengan database
        if(await compare(request.password, user.password)) {
            return res.status(200).json({
                message : "Login berhasil!",
                data : {
                    username : user.username,
                    email : user.email,
                    token : jwtSignUtil(user)
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