import { Component } from '@angular/core';
import { Book } from '../../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  book: Book = {
    id: 1,
    title: "Angular",
    author: "João Corrêa",
    price: 50.00
  };
}
