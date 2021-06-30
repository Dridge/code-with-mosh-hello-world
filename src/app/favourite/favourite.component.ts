import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit { 
  // Commented out code is my original attempt
  //icon
  isFavourite: boolean = false;
  // emptyStar =  "bi-star"
  // fullStar = "bi-star-fill"
  constructor() { 
    // this.icon = this.emptyStar;
  }

  onClick() {
    // this.icon = (this.isFavourite) ? this.emptyStar : this.fullStar;
    this.isFavourite = !this.isFavourite;
    console.log("Favorutie icon was clicked");
  }

  ngOnInit(): void {
  }

}
