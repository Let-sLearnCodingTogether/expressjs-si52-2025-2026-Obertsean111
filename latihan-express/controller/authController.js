export const register = async (req, res) => {
    try {
        res.status(201).json ({
            massage : "Berhasil register, silahkan login",
            data : null
        })
    }
    catch(e) {
        es.status(500).json ({
            massage : "Berhasil register, silahkan login",
            data : null
        })
    }
}