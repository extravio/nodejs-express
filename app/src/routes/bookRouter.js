import express from 'express';

var bookRouter = express.Router();

var books = [
    {
        Title: 'Title1',
        Author: 'Author1'
    },
    {
        Title: 'Title2',
        Author: 'Author2'
    },
    {
        Title: 'Title3',
        Author: 'Author3'
    },
    {
        Title: 'Title4',
        Author: 'Author4'
    },
];

bookRouter.route('/')
    .get(function (req, res) {
        res.render('bookList', {
            title: 'Books',
            nav: [{
                Link: '/Books',
                Text: 'Books'
            }, {
                Link: '/Authors',
                Text: 'Authors'
            }],
            books
        });
    });

bookRouter.route('/:id')
    .get(function (req, res) {
        var id = req.params.id;
        res.render('bookView', {
            title: books[id].Title,
            nav: [{
                Link: '/Books',
                Text: 'Books'
            }, {
                Link: '/Authors',
                Text: 'Authors'
            }],
            book: books[id]
        });
    });

export default bookRouter;