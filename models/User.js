const { model, Schema } = require("mongoose");

const identificationSchema = new Schema({
  identificationType: {
    type: String,
    required: true,
    enum: [
      "US Voter Registration",
      "PR Voter Registration",
      "US Passport",
      "US License",
      "PR Licence",
    ],
  },
  identificationNumber: {
    type: String,
    required: true,
    // unique: true
  },
});

const addressSchema = new Schema({
    street: { type: String, trim: true },
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    zip: { type: String, trim: true }
  });

const userSchema = new Schema(
  {
    fullName: { type: String, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    userName: String,
    phoneNumber: String,
    address: addressSchema,
    identification: identificationSchema,
    volunteer: Boolean,
    donations: [{ type: Schema.Types.ObjectId, ref: "Donation" }],
    eventsAttended: [{ type: Schema.Types.ObjectId, ref: "Event" }],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
const Identification = model("Identification", identificationSchema);
const Address = model("Address", addressSchema);


module.exports = {
  User,
  Identification,
  Address
};
