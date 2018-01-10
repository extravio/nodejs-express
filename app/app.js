import express from 'express';

const app = express();
const port = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));
// app.set('view engine', 'ejs');

app.get('/', async function (req, res) {
    res.send('Hello world');
});

app.listen(port, function () {
    console.log('Running on ' + port + '...');
});
