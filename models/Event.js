const { model, Schema } = require('mongoose')

const eventSchema = new Schema({

    title: String,
    description: String,
    location: Object,
    startTime: Date,
    endTime: Date,
    attendees: [{type: Schema.Types.ObjectId, ref: "User"}],
    volunteers: [{type: Schema.Types.ObjectId, ref: "User"}],
    organizer: {type: Schema.Types.ObjectId, ref: "Admin"}

},
{
    timestamps: true
})

module.exports = model("Event", eventSchema)

// Title
// Description
// Location
// Start Time
// End Time
// Attendees (List of users attending)
// Volunteers: [(User Reference)]
// Organizer (Reference to Admin model)