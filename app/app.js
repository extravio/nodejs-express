import express from 'express';
import bookRouter from './src/routes/bookRouter';

const app = express();
const port = 5000;

app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use('/Books', bookRouter);

app.get('/', async function (req, res) {
    res.render('index', {
        title: 'Storystrap',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }]
    });
});

app.listen(port, function () {
    console.log('Running on ' + port + '...');
});