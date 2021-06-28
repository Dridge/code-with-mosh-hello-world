import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  icon
  isFullIcon: boolean = false;
  emptyStar =  "bi-star"
  fullStar = "bi-star-fill"
  constructor() { 
    this.icon = this.emptyStar;
  }

  onClicked() {
    this.icon = (this.isFullIcon) ? this.emptyStar : this.fullStar;
    this.isFullIcon = !this.isFullIcon;
    console.log("Favorutie icon was clicked");
  }

  ngOnInit(): void {
  }

}
