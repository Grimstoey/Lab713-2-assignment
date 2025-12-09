import express from "express";
const app = express();
app.use(express.json());
const port = 3000;

interface Books {
  id: number;
  title: string;
  author_name: string;
  desciption: string;
  groups: string;
}

const books: Books[] = [
  {
    id: 1,
    title: "The Silent Forest",
    author_name: "Laura Greene",
    desciption:
      "A mystery novel set in a quiet town surrounded by ancient woods.",
    groups: "Mystery",
  },
  {
    id: 2,
    title: "Journey Beyond Stars",
    author_name: "Kenji Morita",
    desciption:
      "A sci-fi adventure following a crew exploring distant galaxies.",
    groups: "Science Fiction",
  },
  {
    id: 3,
    title: "Whispers of the Past",
    author_name: "Maria Thompson",
    desciption:
      "A historical drama about uncovering long-buried family secrets.",
    groups: "Historical",
  },
  {
    id: 4,
    title: "Cooking with Heart",
    author_name: "Somchai Rattanakorn",
    desciption:
      "A cookbook filled with wholesome recipes and stories behind each dish.",
    groups: "Cooking",
  },
  {
    id: 5,
    title: "Mindful Living",
    author_name: "Elena Cruz",
    desciption: "A guide to mindfulness practices for everyday life.",
    groups: "Self-Help",
  },
  {
    id: 6,
    title: "Legends of the Sapphire Kingdom",
    author_name: "Adrian Blake",
    desciption:
      "A fantasy epic about heroes uniting to save their kingdom from darkness.",
    groups: "Fantasy",
  },
];

app.get("/books", (req, res) => {
  if (req.query.title) {
    const bookTitle = req.query.title as string;
    const filteredTitle = books.filter((t) =>
      t.title.toLowerCase().startsWith(bookTitle.toLowerCase())
    );
    res.json(filteredTitle);
  } else {
    res.json(books);
  }
});

app.get("/books/:id", (req, res) => {
  if (req.params.id) {
    const bookId = req.params.id;
    const findId = books.find((b) => b.id.toString() === bookId?.toString());

    res.json(findId);
  } else {
    res.status(404);
  }
});

app.post("/books", (req, res) => {
  if (req.body.id) {
    const bookId = req.body.id;
    const bookById = books.findIndex((b) => b.id === bookId);

    if (bookById !== -1) {
      books[bookById] = req.body;
      res.json(books[bookById]);
      return;
    }
  }

  const newBook: Books = req.body;
  newBook.id = books.length + 1;
  books.push(newBook);
  res.json(newBook);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
