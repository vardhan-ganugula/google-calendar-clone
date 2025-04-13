const { handleGetEvents, handleAddEvents } = require('../controllers/calendar');
const express = require('express'); 
const router = express.Router(); 




router.get('/get-events', handleGetEvents);
router.post('/add-event', handleAddEvents); 




module.exports = router;


