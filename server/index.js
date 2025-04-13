const connectDB = require('./utils/mongoose');
const express = require('express');
const app = express();
const calendarRoutes = require('./routes/calendar');
require('dotenv').config();
connectDB(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use('/api', calendarRoutes); 


app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});