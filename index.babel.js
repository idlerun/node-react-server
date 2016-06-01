require('log-timestamp');
import express from 'express';
import fs from 'fs';
import https from 'https';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import server from './src/server';

const app = express();
app.use(bodyParser.json());
app.use(morgan('[:date[iso]] :remote-addr ":method :url HTTP/:http-version" :status :res[content-length] ":user-agent"'));
server(app);
app.use('/', express.static(__dirname + '/public'));

const keysDir = process.env.KEYS_DIR || (__dirname + '/keys');
app.options = {
   key  : fs.readFileSync(keysDir + '/server.key'),
   cert : fs.readFileSync(keysDir + '/server.crt')
};

const port = process.env.PORT || 8443;
https.createServer(app.options, app).listen(port, function () {
   console.info('Listening at https://localhost:' + port);
});
