var express = require('express');
var router = express.Router();

const Volunteer = require('../models/Volunteer');

/* GET volunteer information */
router.get('/', function(req, res, next) {
    Volunteer.find({})
      .then((volunteers) => {
          console.log('Retrieved Volunteers ===> ', volunteers);
          res.json(volunteers);
      })
      .catch((error) => {
          console.error('Error while retrieving Volunteer ===> ', error);
          res.status(500).json({ error: 'Failed to retrieve Volunteers' });
      });
});
  
/* GET Volunteer information by id */
router.get('/:volunteerId', function(req, res, next) {
    const { volunteerId } = req.params;
  
    Volunteer.findById(volunteerId)
        .then((volunteer) => {
            console.log('Retrieved Volunteer ===> ', volunteer);
            res.json(volunteer);
        })
        .catch((error) => {
            console.error('Error while retrieving Volunteer ===> ', error);
            res.status(500).json({ error: 'Failed to retrieve Volunteer' });
        });
});
  
/* POST Volunteer information */
router.post('/', function(req, res, next) {
    Volunteer.create({
        user: req.body.user,
        phonebank: req.body.phonebank, 
        events : req.body.events, 
        fundraising: req.body.fundraising, 
        generalelectoralteam: req.body.generalelectoralteam, 
        fieldmarshall: req.body.fieldmarshall, 
        communications: req.body.communications
    })
        .then((createdVolunteer) => {
            console.log('Volunteer created ===> ', createdVolunteer);
            res.status(201).json(createdVolunteer);
        })
        .catch((error) => {
            console.error('Error while creating Volunteer ===> ', error);
            res.status(500).json({ error: 'Failed to create Volunteer' });
        });
});
  
/* PUT updated Volunteer information */
router.put('/:volunteerId', function(req, res, next) {
    const { volunteerId } = req.params;
  
    Volunteer.findByIdAndUpdate(volunteerId, req.body, { new: true })
        .then((updatedVolunteer) => {
            console.log('Volunteer updated ===> ', updatedVolunteer);
            res.status(200).json(updatedVolunteer)
        })
        .catch((error) => {
            console.log('Error while updating Volunteer ===> ', error);
            res.status(500).json({ error: 'Failed to update Volunteer' });
        });
});
  
/* DELETE Volunteer information */
router.delete('/:volunteerId', function(req, res, next) {
    const { volunteerId } = req.params;
  
      Volunteer.findByIdAndDelete(volunteerId)
        .then((deletedVolunteer) => {
            console.log('Volunteer deleted ===> ', deletedVolunteer);
            res.status(200).json(deletedVolunteer);
        })
        .catch((error) => {
            console.log('Error while deleting Volunteer ===> ', error);
            res.status(500).json({ error: 'Failed to delete Volunteer' });
        });
});

module.exports = router;