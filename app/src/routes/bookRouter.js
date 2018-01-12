import express from 'express';

let bookRouter = express.Router();

const books = [
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

let router = (nav) => {

    bookRouter.route('/')
        .get(function (req, res) {
            res.render('bookList', {
                title: 'Books',
                nav,
                books
            });
        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title: books[id].Title,
                nav,
                book: books[id]
            });
        });

    return bookRouter;
}

export default router;