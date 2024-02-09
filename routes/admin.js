var express = require('express');
var router = express.Router();

const Admin = require('../models/Admin');

/* GET admin information */
router.get('/', function(req, res, next) {
    Admin.find({})
      .then((admins) => {
          console.log('Retrieved Admins ===> ', admins);
          res.json(admins);
      })
      .catch((error) => {
          console.error('Error while retrieving admin ===> ', error);
          res.status(500).json({ error: 'Failed to retrieve admins' });
      });
});
  
/* GET admin information by id */
router.get('/:adminId', function(req, res, next) {
    const { adminId } = req.params;
  
    Admin.findById(adminId)
        .then((admin) => {
            console.log('Retrieved Admin ===> ', admin);
            res.json(admin);
        })
        .catch((error) => {
            console.error('Error while retrieving admin ===> ', error);
            res.status(500).json({ error: 'Failed to retrieve admin' });
        });
});
  
/* POST admin information */
router.get('/', function(req, res, next) {
    Admin.create({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
        userName: req.body.userName
    })
        .then((createdAdmin) => {
            console.log('Admin created ===> ', createdAdmin);
            res.status(201).json(createdAdmin);
        })
        .catch((error) => {
            console.error('Error while creating admin ===> ', error);
            res.status(500).json({ error: 'Failed to create admin' });
        });
});
  
/* PUT updated admin information */
router.put('/:adminId', function(req, res, next) {
    const { adminId } = req.params;
  
    Admin.findByIdAndUpdate(adminId, req.body, { new: true })
        .then((updatedAdmin) => {
            console.log('Admin updated ===> ', updatedAdmin);
            res.status(200).json(updatedAdmin)
        })
        .catch((error) => {
            console.log('Error while updating admin ===> ', error);
            res.status(500).json({ error: 'Failed to update admin' });
        });
});
  
/* DELETE admin information */
router.delete('/:adminId', function(req, res, next) {
    const { adminId } = req.params;
  
      Admin.findByIdAndDelete(adminId)
        .then((deletedAdmin) => {
            console.log('Admin deleted ===> ', deletedAdmin);
            res.status(200).json(deletedAdmin);
        })
        .catch((error) => {
            console.log('Error while deleting admin ===> ', error);
            res.status(500).json({ error: 'Failed to delete admin' });
        });
});

module.exports = router;