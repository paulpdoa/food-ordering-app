const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 8000;

app.use(cors());

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});