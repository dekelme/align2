const express = require("express");
const app = express();
const port = process.env.PORT || 8000;


const {router} = require("./routes/routePicture");
let cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/picture', router)

app.use((req, res, next) => {
    res.status(500).send('Something is broken!');
});

app.listen(port, () => console.log('Express server is running on port ', port));
