import express from "express";
import { title } from "process";
import {
  getBooksByTitle,
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
app.get("/books",async (req, res) => {
  if (req.query.title) {
    const bookTitle = req.query.title as string;
    // const filteredTitle = books.filter((t) =>
    //   t.title.toLowerCase().startsWith(bookTitle.toLowerCase())
    // );

    const getBooks = await getBooksByTitle(bookTitle);
    res.json(getBooks);
  } else {
    res.json(await getAllBooks());
  }
});

// get book by id
app.get("/books/:id",async (req, res) => {
  const bookId = req.params.id;

  if (!bookId) {
    res.status(404);
  } else {
    res.json(await getBookById(Number(bookId))); //แปลงเลข(string) req.params.id ---> int
  }
});

app.post("/books",async (req, res) => {
  if (req.body) {
    const bookId = req.body.id;
    const books = await getAllBooks();
    const bookIndex = books.findIndex((b) => b.id === bookId);

    if (bookIndex !== -1) {
      res.json(await updateBook(req.body));
    } else {
      res.json(await addBook(req.body));
    }
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
