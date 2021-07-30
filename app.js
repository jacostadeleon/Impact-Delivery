import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017/impact-delivery';
const options = {useNewUrlParser: true, useCreateIndex: true};
const app = express();

//DB
mongoose.connect(uri, options).then(
    /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
    () => { console.log('Conectado a DB') },
    /** handle initial connection error */
    err => { console.log(err) }
);

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/user', require('./routes/user'));
app.use('/pack', require('./routes/pack'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
  console.log('Example app listening on port '+ app.get('puerto'));
});

