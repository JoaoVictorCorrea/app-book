import { Component } from '@angular/core';
import { Book } from '../../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  book: Book = {} as Book;
  isUpdate: boolean = false;
  idCount: number = 5;

  books: Book[] = [
    {
      id: 1,
      title: "Java 24 horas",
      author: "João Corrêa",
      price: 40.50
    },
    {
      id: 2,
      title: "Angular 24 horas",
      author: "Robson Junior",
      price: 36.50
    },
    {
      id: 3,
      title: "AWS 24 horas",
      author: "Beatriz Clara",
      price: 43.25
    },
    {
      id: 4,
      title: "JavaScript 24 horas",
      author: "Igor Chaves",
      price: 18.00
    }
  ];

  saveBook() {

    if (!this.isUpdate) {
      this.book.id = this.idCount;
      this.idCount++;
      this.books.push(this.book);
    }

    this.book = {} as Book;
    this.isUpdate = false;
  }

  update(selectedBook: Book) {
    this.book = selectedBook;
    this.isUpdate = true;
  }

  remove(book: Book) {
    this.books = this.books.filter(b => b !== book);
  }
}
