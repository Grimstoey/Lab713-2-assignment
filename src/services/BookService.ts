import type Book from "../models/Book";
import * as repo from "../repository/BookRepositoryDb"


export async function getBooksByTitle(title: string): Promise<Book[]> {
  return repo.getBooksByTitle(title)
}

export async function getAllBooks(): Promise<Book[]> {
  return repo.getAllBooks()
}

export async function getBookById(id: number): Promise<Book | undefined> {
  return repo.getBookById(id)
}

export async function addBook(newBook: Book): Promise<Book> {
  return repo.addBook(newBook)
}

export async function updateBook(book: Book): Promise<Book> {
  return repo.updateBook(book)
}