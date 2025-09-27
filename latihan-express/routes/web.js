import express from "express"
import * as profileController from "../controller/profileController.js"
import * as profileControllerbaru from "../controller/profileControllerbaru.js"

const web = express.Router()

web.get('/', (rwq, res) => {
    res.render('index')
})

web.get('/:username',profileController.publicProfile)

web.get('/profile/:username',profileControllerbaru.publicProfilebaru)
export default web