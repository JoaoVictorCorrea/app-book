import { Component } from '@angular/core';
import { Book } from '../../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  newBook: Book = {} as Book;

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
}
