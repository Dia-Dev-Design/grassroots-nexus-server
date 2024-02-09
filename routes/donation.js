var express = require('express');
var router = express.Router();

const Donation = require('../models/Donation');

/* GET donation information */
router.get('/', function(req, res, next) {
    Donation.find({})
        .populate('donor')
        .then((donations) => {
            console.log('Retrieved Donations ===> ', donations);
            res.json(donations);
        })
        .catch((error) => {
            console.error('Error while retrieving donations ===> ', error);
            res.status(500).json({ error: 'Failed to retrieve donations' });
        });
});

/* GET donation information by id */
router.get('/:donationId', function(req, res, next) {
    const { donationId } = req.params;

    Donation.findById(donationId)
        .populate('donor')
        .then((donation) => {
            console.log('Retrieved Donation ===> ', donation);
            res.json(donation);
        })
        .catch((error) => {
            console.error('Error while retrieving donation ===> ', error);
            res.status(500).json({ error: 'Failed to retrieve donation' });
        })
});

/* POST donation information */
router.post('/', function(req, res, next){
    Donation.create({
        amount: req.body.amount,
        donor: req.body.donor,
        date: req.body.date,
        paymentMethod: req.body.paymentMethod,
        receipt: req.body.receipt
    })
        .then((createdDonation) => {
            console.log('Donation created ===> ', createdDonation);
            res.status(201).json(createdDonation);
        })
        .catch((error) => {
            console.error('Error while creating donation ===> ', error);
            res.status(500).json({ error: 'Failed to create donation' });
        });
});

/* PUT updated donation information */
router.put('/:donationId', function(req, res, next) {
    const { donationId } = req.params;

    Donation.findByIdAndUpdate(donationId, req.body, { new: true })
        .then((updatedDonation) => {
            console.log('Donation updated ===>', updatedDonation);
            res.status(200).json(updatedDonation);
        })
        .catch((error) => {
            console.error('Error while updating donation ===> ', error);
            res.status(500).json({ error: 'Failed to update donation' });
        });
});

/* DELETE donation information */
router.delete('/:donationId', function(req, res, next) {
    const { donationId } = req.params;

    Donation.findByIdAndDelete(donationId)
        .then((deletedDonation) => {
            console.log('Donation deleted ===> ', deletedDonation);
            res.status(200).json(deletedDonation);
        })
        .catch((error) => {
            console.log('Error while deleting donation ===> ', error);
            res.status(500).json({ error: 'Failed to delete donation' });
        });
})

module.exports = router;