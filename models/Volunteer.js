const { model, Schema } = require('mongoose')

const volunteerSchema = new Schema({

    user: [{type: Schema.Types.ObjectId, ref: "User"}],
    phonebank: Boolean, 
    events : Boolean, 
    fundraising: Boolean, 
    generalelectoralteam: Boolean, 
    fieldmarshall: Boolean, 
    communications: Boolean

},
{
    timestamps: true
})

module.exports = model("Volunteer", volunteerSchema)