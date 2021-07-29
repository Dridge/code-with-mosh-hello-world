import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit {
  @Input('isSelected') 
  isSelected: boolean = false;

  @Input('isHovered') 
  isHovered: boolean = false;

  @Output()
  mouseOverEvent = new EventEmitter();

  constructor() { 

  }

  onClick() {
    this.isSelected = !this.isSelected;
    console.log("Favourite icon was clicked");
  }

  onHover() {
    console.log("Favourite icon hovered on");
    this.isHovered = !this.isHovered
    this.mouseOverEvent.emit({newValue: this.isHovered});
  }

  onHoverOff() {
    console.log("Favourite icon hovered off");
    this.isHovered = !this.isHovered
    this.mouseOverEvent.emit({newValue: this.isHovered});
  }

  ngOnInit(): void {
  }

}
