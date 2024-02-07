const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    fullName: { type: String, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, trim: true },
    userName: {type:String, trim:true},
    phoneNumber: {type:String, trim:true},
    address: {
      street: { type: String, trim: true, default: ""},
      city: { type: String, trim: true, default: "" },
      state: { type: String, trim: true, default: "" },
      zip: { type: String, trim: true, default: "" }
    },
    identification: {
      identificationType: {
        type: String,
        enum: [
          "US Voter Registration",
          "PR Voter Registration",
          "US Passport",
          "US License",
          "PR Licence"
        ],
      },
      identificationNumber: {
        type: String,
        default: ""
      },
    },
    volunteer: Boolean,
    donations: [{ type: Schema.Types.ObjectId, ref: "Donation" }],
    eventsAttended: [{ type: Schema.Types.ObjectId, ref: "Event" }],
  },
  {
    timestamps: true,
  }
);


module.exports = model("User", userSchema)
