const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const db = require('./config/db');
const userRoute = require('./routes/user.route');
const catagoryRoute = require('./routes/catagory.route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

db();

app.get('/', (req, res) => {
    res.json({ message: 'DigiShop API is running' });
});

app.use('/api/users',userRoute);
app.use('/api/catagory',catagoryRoute);

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})

// module.exports = app;
