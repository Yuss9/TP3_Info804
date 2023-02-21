
//serve document with express

const express = require('express');
const app = express();
const http = require("http").Server(app);

const port = 5000;

app.use(express.static(__dirname, ""));

app.get('/q1', function (req, res) {
    res.sendFile(__dirname + "/question-1.html");
});
app.get('/q2',function (req,res){
    res.sendFile(__dirname + "/question-2.html");
})

http.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});




