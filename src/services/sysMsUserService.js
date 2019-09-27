const sysMsUser = require('../models/sysMsUser.model.js')

const getSysMsUser = (callback) => {
    sysMsUser.find({}, (err, sysMsUser) => {
        if (err) {
            res.send(err);
        }

        callback(null, sysMsUser)
    });
}

const insertSysMsUser = (data, callback) => {
    data = {
        email: data.email,
        username: data.username,
        password: data.password,
        isActive: "false",
        createdBy: "admin",
    }

    const newSysMsUser = new sysMsUser(data);
    newSysMsUser.save((err, sysMsUser) => {
        if (err) {
            return callback(err)
        }

        callback(null ,sysMsUser)
    })
}

const updateSysMsUser = (req, callback) => {
    sysMsUser.findOneAndUpdate({
        _id: req.params.noteId
    }, req.body,
        (err, sysMsUser) => {
            if (err) {
                callback(err);
            }

            callback(null, sysMsUser);
        }
    );
}

const deleteNote = (req, callback) => {
    note.remove({
        _id: req.params.noteId
    }, (err) => {
        if (err) {
            callback(err);
        }

        callback(
            null ,
            { 
                message: `note ${req.params.noteId} successfully deleted`
            }
        );
    });
};

module.exports = {
    getSysMsUser,
    insertSysMsUser
}