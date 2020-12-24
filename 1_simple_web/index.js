const express = require('express');

const app = express();

app.get('/', (req, res) =>{
   res.send('Die there');
});

app.listen(8080, () =>{
    console.log('Listen on port 8080');
});