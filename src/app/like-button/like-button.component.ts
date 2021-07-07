import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit {
  isSelected: boolean = false;

  constructor() { 

  }

  onClick() {
    this.isSelected = !this.isSelected;
    console.log("Favourite icon was clicked");
  }

  onHover() {
    console.log("Favourite icon hovered on");
  }

  onHoverOff() {
    console.log("Favourite icon hovered off");
  }

  ngOnInit(): void {
  }

}
