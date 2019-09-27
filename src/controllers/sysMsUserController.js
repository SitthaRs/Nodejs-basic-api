const sysMsUserService = require('../services/sysMsUserService')

const index = async (req, res) => {
    try {
        sysMsUserService.getSysMsUser((err, data) => {
            if(err) {
                res.status(400).send(err)
            }

            res.status(200).send(data)
        })
    } catch (e) {
        res.status(400).send(e)
    }
}

const save = async (req, res) => {
    try {
        sysMsUserService.insertSysMsUser(req.body, (err, data) => {
            if(err) {
                res.status(400).send(err)
            }

            res.status(200).send(data)
        })

        
    } catch (e) {
        res.status(400).send(e)
    }
}


module.exports = {
    index,
    save
}