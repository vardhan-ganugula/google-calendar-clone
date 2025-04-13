const {Schema,model} = require('mongoose'); 

const eventSchema = new Schema({
    eventTitle: {
        type: String,
        required: true,
    },
    eventCategoryName: {
        type: String,
        required: true,
    },
    eventStartdate: {
        type: String,
        required: true,
    },
    eventEnddate: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
}, { timestamps: true });

const Events = model('event', eventSchema);
module.exports = Events;