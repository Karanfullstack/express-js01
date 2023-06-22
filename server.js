const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname)+ '/index.html');
});

app.get('/about', (req, res)=>{
    res.sendFile(path.resolve(__dirname)+ '/about.html');
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));





