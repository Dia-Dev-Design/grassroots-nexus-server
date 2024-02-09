const { model, Schema } = require('mongoose')

const userSchema = new Schema({

    fullName: String,
    email: String,
    password: String,
    userName: String,
    phoneNumber: String,
    address: Object,
    //voterRegistrationNumber: String,
    //driversLicenseNumber: String,
    volunteer: { type: Schema.Types.ObjectId, ref: 'Volunteer' },
    donor: { type: Schema.Types.ObjectId, ref: 'Donor' },
    donations: [{type: Schema.Types.ObjectId, ref: "Donation"}],
    eventsAttended: [{type: Schema.Types.ObjectId, ref: "Event"}]

},
{
    timestamps: true
})

module.exports = model("User", userSchema)