const express = require('express');
const app = express();

const PORT = 3000;
const router = require("./router");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', router);
function onStart(){
    console.log(`Server running on port ${PORT}`);
}

app.listen(PORT, onStart);

module.exports = app;