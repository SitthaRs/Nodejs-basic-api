const mongoose = require('mongoose')
const util = require('util')
const auditModel = require('./audit.model')
const messageSchema = require('../config/message.schema')

class SysMsUserModel extends auditModel{
    constructor() {
        super();
        this.email = {
            type: String,
            unique: true,
            required: [true, util.format(messageSchema.SysMsUser.required, "Email") ],
            trim: true
        }

        this.username = {
            type: String,
            unique: true,
            required: [true, util.format(messageSchema.SysMsUser.required, "Username") ],
            trim: true
        }

        this.password = {
            type: String,
            required: [true, util.format(messageSchema.SysMsUser.required, "Password") ],
            trim: true
        }

        this.isActive = {
            type: Boolean,
            default: new Boolean(false)
        }

        this.timestamps
    }
}

// var blogSchema = new mongoose.Schema({
//     title:  String,
//     author: String,
//     body:   String,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//       votes: Number,
//       favs:  Number
//     }
//   });

// console.log(blogSchema)
// const sysMsUserModel = new SysMsUserModel()
// console.log(sysMsUserModel)

const sysMsUserModel = new SysMsUserModel()
const SysMsUser = new mongoose.Schema(sysMsUserModel)
// console.log(SysMsUser)
module.exports = mongoose.model('SysMsUser', SysMsUser)