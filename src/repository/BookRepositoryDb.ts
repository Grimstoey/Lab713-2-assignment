import * as db from "../db";
import Book from "../models/Book";



export async function getAllBooks(): Promise<Book[]> {
  const result = await db.query('SELECT * FROM books')
  return result.rows
}


export async function getBooksByTitle(title: string): Promise<Book[]> {
  const result = await db.query(
    'SELECT * FROM books WHERE lower(title) LIKE $1',
    [`${title.toLowerCase()}%`]
  )


  return result.rows
}

export async function getBookById(id: number): Promise<Book | undefined> {
  const result = await db.query('SELECT * FROM books WHERE id = $1', [id])

  console.log(result);
  return result.rows[0]
}

export async function addBook(newBook: Book): Promise<Book> {
  const { title, author_name, description, groups } = newBook
  const result = await db.query(
    'INSERT INTO books (title, author_name, description, groups) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, author_name, description, groups]
  )
  return result.rows[0]
}

export async function updateBook(book: Book): Promise<Book> {
  const { id, title, author_name, description, groups } = book
  const result = await db.query(
    'UPDATE books SET title = $2, author_name = $3, description = $4, groups = $5 WHERE id = $1 RETURNING *',
    [id, title, author_name, description, groups]
  )
  return result.rows[0]
}