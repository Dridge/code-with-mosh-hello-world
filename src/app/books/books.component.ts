import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title = "Must reads!"
  books;
  imageUrl;
  colSpan=2;

  constructor(service: BooksService) { 
    this.books = service.getBooksList();
    this.imageUrl = "https://osm.etsi.org/wikipub/images/thumb/d/db/Books.jpg/120px-Books.jpg";
  }
  ngOnInit(): void {
  }
}
