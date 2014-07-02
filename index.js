'use strict';

var request = require('request'),
    express = require('express'),
    app = module.exports = express();

// static files
app.use('/s/uae/g/06/', express.static(__dirname));

// layouts
app.use(express.static('layouts'));

// proxy (optional)
// app.use(function (req, res) {
//     req.pipe(request('http://hao.uc.cn' + req.url)).pipe(res);
// });

app.listen(process.env.PORT || 8082);