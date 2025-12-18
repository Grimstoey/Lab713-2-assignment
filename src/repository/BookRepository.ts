import  type Book from "../models/Book"


const books: Book[] = [
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

export async function getBooksByTitle(title: string): Promise<Book[]> {
  const filteredTitle = books.filter((b) =>
    b.title.toLowerCase().startsWith(title.toLowerCase())
  );
  return filteredTitle;
}

export async function getAllBooks(): Promise<Book[]> {
  return books;
}

export async function getBookById(id: number): Promise<Book | undefined> {
  return books.find((b) => b.id === id);
}

export async function addBook(newBook: Book): Promise<Book> {
  newBook.id = books.length + 1;
  books.push(newBook);
  return newBook;
}

export async function updateBook(reqBook: Book): Promise<Book> {
  const books = await getAllBooks()
  const bookId = reqBook.id;
  const bookIndex = books.findIndex((b) => b.id === bookId);

  books[bookIndex] = reqBook;
  return books[bookIndex];
}