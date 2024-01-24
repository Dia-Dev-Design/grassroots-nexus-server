const { model, Schema } = require('mongoose')

const donationSchema = new Schema({
    amount: Number,
    donor: {type: Schema.Types.ObjectId, ref: 'User'},
    date: {type: Date, default: Date.now},
    paymentMethod: String,
    receipt: String
},
{
    timestamps: true
})

module.exports = model("Donation", donationSchema)