import express from "express"

const web = express.Router()

web.get('/', (rwq, res) => {
    res.render('index')
})

web.get('/:username',(req, res) => {
    res.render('public-profile')
})

export default web