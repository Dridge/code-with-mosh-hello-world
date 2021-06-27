import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }
  getBooksList() {
    return [
      "Narrative of the Life of Frederick Douglass", 
      "Goodnight Moon", 
      "You Are (A Comedy) Special", 
      "Puppy Love Dot To Dot"
    ];
  }
}
