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
    // const filteredTitle = books.filter((t) =>
    //   t.title.toLowerCase().startsWith(bookTitle.toLowerCase())
    // );

    const getBooks = getBookByTitle(bookTitle);
    res.json(getBooks);
  } else {
    res.json(getAllBooks());
  }
});

// get book by id
app.get("/books/:id", (req, res) => {
  const bookId = req.params.id;

  if (!bookId) {
    res.status(404);
  } else {
    res.json(getBookById(Number(bookId))); //แปลงเลข(string) req.params.id ---> int
  }
});

app.post("/books", (req, res) => {
  if (req.body) {
    const bookId = req.body.id;
    const bookIndex = getAllBooks().findIndex((b) => b.id === bookId);
    console.log(bookIndex);

    if (bookIndex !== -1) {
      res.json(updateBook(req.body));
    } else {
      res.json(addBook(req.body));
    }
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
