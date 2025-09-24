import express from "express"

const web = express.Router()

web.get('/', (rwq, res) => {
    res.render('index')
})

web.get('/:username',(req, res) => {
    const username = req.params.username
    res.render('public-profile',{
        title : username,
        username : username,
        bio :`Hai semua!, aku `+username
    })

})


export default web