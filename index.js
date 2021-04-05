const express = require('express');
const app = express();

const port = 8000;

app.listen(port, function(err){
    if(err){
        console.log(`Error starting the server : ${err}`);
        return;
    }
    console.log(`Server is up and running on port: ${port}`)
})
