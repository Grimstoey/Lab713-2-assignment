import express from "express";
import { title } from "process";
import {
  getBookByTitle,
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
} from "./services/BookService";

const app = express();
app.use(express.json());
const port = 3000;

///////// book api

// get book by title or get all
app.get("/books", (req, res) => {
  if (req.query.title) {
    const bookTitle = req.query.title as string;

    getBookByTitle(bookTitle).then((books) => res.json(books));
  } else {
    getAllBooks().then((books) => res.json(books));
  }
});

// get book by id
app.get("/books/:id", (req, res) => {
  const bookId = req.params.id;

  if (!bookId) {
    res.status(404);
  } else {
    getBookById(Number(bookId)).then((book) => res.json(book));
    // res.json(getBookById(Number(bookId))); //แปลงเลข(string) req.params.id ---> int
  }
});

app.post("/books", (req, res) => {
  if (req.body?.id) {
    const bookId = req.body.id;
    getAllBooks().then((books) => {
      const bookIndex = books.findIndex((b) => b.id === bookId);

      if (bookIndex !== -1) {
        updateBook(req.body).then((book) => res.json(book));
      } else {
        console.log(bookIndex);
        return res.sendStatus(404);
      }
    });
  } else {
    addBook(req.body).then((book) => res.json(book));
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
