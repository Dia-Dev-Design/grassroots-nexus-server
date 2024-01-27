const { model, Schema } = require('mongoose')

const userSchema = new Schema({

    fullName: {type: String, trim: true},
    email: {type: String, required: true, trim: true},
    password: {type: String, required: true, trim: true},
    userName: String,
    phoneNumber: String,
    address: Object,
    voterRegistrationNumber: String,
    driversLicenseNumber: String,
    volunteer: Boolean,
    donations: [{type: Schema.Types.ObjectId, ref: "Donation"}],
    eventsAttended: [{type: Schema.Types.ObjectId, ref: "Event"}]

},
{
    timestamps: true
})

module.exports = model("User", userSchema)