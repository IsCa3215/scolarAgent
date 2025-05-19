const express = require('express');
const{ fetchEvents } = require('../controller/eventsControlles');
const router = express.Router();

router.get('/fetchEvents', fetchEvents)

module.exports = router;
