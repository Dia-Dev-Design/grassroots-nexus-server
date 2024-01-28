var express = require('express');
var router = express.Router();

const Event = require('../models/Event')

/* GET events information */
router.get('/', function(req, res, next) {
  Event.find({})
    .populate('attendees')
    .populate('volunteers')
    .populate('organizer')
    .then((events) => {
        console.log('Retrieved Events ===> ', events);
        res.json(events);
    })
    .catch((error) => {
        console.error('Error while retrieving events ===> ', error);
        res.status(500).json({ error: 'Failed to retrieve events' });
    });
});

/* GET event information by id */
router.get('/:eventId', function(req, res, next) {
    const { eventId } = req.params;

    Event.findById(eventId)
      .populate('attendees')
      .populate('volunteers')
      .populate('organizer')
      .then((event) => {
          console.log('Retrieved Event ===> ', event);
          res.json(event);
      })
      .catch((error) => {
          console.error('Error while retrieving event ===> ', error);
          res.status(500).json({ error: 'Failed to retrieve event' });
      });
});

/* POST event information */
router.get('/', function(req, res, next) {
    Event.create({
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        attendees: req.body.attendees,
        volunteers: req.body.volunteers,
        organizer: req.body.organizer
    })
      .then((createdEvent) => {
            console.log('Event created ===> ', createdEvent);
            res.status(201).json(createdEvent);
      })
      .catch((error) => {
            console.error('Error while creating event ===> ', error);
            res.status(500).json({ error: 'Failed to create event' });
      });
});

/* PUT updated event information */
router.put('/:eventId', function(req, res, next) {
    const { eventId } = req.params;

    Event.findByIdAndUpdate(eventId, req.body, { new: true })
        .then((updatedEvent) => {
            console.log('Event updated ===> ', updatedEvent);
            res.status(200).json(updatedEvent)
        })
        .catch((error) => {
            console.log('Error while updating event ===> ', error);
            res.status(500).json({ error: 'Failed to update event' });
        });
});

/* DELETE event information */
router.delete('/:eventId', function(req, res, next) {
    const { eventId } = req.params;

    Event.findByIdAndDelete(eventId)
        .then((deletedEvent) => {
            console.log('Event deleted ===> ', deletedEvent);
            res.status(200).json(deletedEvent);
        })
        .catch((error) => {
            console.log('Error while deleting event ===> ', error);
            res.status(500).json({ error: 'Failed to delete event' });
        });
});

module.exports = router;
