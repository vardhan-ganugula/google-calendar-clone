const Event = require('../model/event.model'); 

const handleGetEvents = async (req, res) => {
    try {
        const events = await Event.find({});
        res.status(200).json(events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

const handleAddEvents = async (req, res) => {
    const { eventTitle, eventCategoryName, eventStartdate, eventEnddate } = req.body;
    if(!eventTitle || !eventCategoryName || !eventStartdate || !eventEnddate) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const newEvent = new Event({
            eventTitle,
            eventCategoryName,
            eventStartdate,
            eventEnddate,
        });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
        
    }
}

module.exports = {
    handleGetEvents,
    handleAddEvents
}