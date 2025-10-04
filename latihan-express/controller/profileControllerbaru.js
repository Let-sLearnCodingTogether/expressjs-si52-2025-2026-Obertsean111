export const publicProfilebaru = (req, res) => {
    const username = req.params.username
    res.render('index1',{
        title : username,
        username : username,
        bio :`Hai semua!, aku `+username
    })  
}

