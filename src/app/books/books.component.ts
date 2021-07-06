import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';
import { FavouriteChangedEventArgs } from '../favourite/favourite.component';

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

  post = {
    isFavourite: true
  }

  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs) {
    console.log("I changed! I'm favourite?", eventArgs.newValue)
  }

  ngOnInit(): void {
  }
}
