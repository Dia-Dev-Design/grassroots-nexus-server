const { Schema, model } = require('mongoose');

const donorSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    identificationInfo: { type: String, required: true },
    donations: [{ type: Schema.Types.ObjectId, ref: 'Donation' }],
    totalDonationAmount: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = model("Donor", donorSchema);

 