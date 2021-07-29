import { Component, Input, Output, EventEmitter} from '@angular/core';
import { LikeService } from '../like.service';

@Component({
  selector: 'like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent {
  @Input('isSelected') 
  isSelected: boolean = false;

  @Input('isHovered') 
  isHovered: boolean = false;

  @Input('likesCount') likesCount: number;

  @Output()
  mouseOverEvent = new EventEmitter();

  constructor(likeService: LikeService) {
    this.likesCount = likeService.getLikes("dummyText");
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.likesCount += this.isSelected ? 1 : -1
    console.log("Favourite icon was clicked");
    console.log("count is: " + this.likesCount)
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

}
