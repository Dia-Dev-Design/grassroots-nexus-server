const { model, Schema } = require('mongoose')

const adminSchema = new Schema({

    fullName: String,
    email: String,
    password: String,
    userName: String

},
{
    timestamps: true
})

module.exports = model("Admin", adminSchema)