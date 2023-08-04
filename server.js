const express = require('express');
const app = express();
const javascriptObfuscator = require('javascript-obfuscator');

app.use(express.json());

app.post('/obfuscate', function (req, res) {
    if(req.body.code) {
        const obfuscationResult = javascriptObfuscator.obfuscate(req.body.code);
        res.send({obfuscated: obfuscationResult.getObfuscatedCode()});
    } else {
        res.status(400).send({error: 'No code provided for obfuscation'});
    }
});

app.listen(3000, function () {
  console.log('Obfuscation API listening on port 3000!');
});