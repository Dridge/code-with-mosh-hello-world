import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
    styles: [
    `
    @import "~bootstrap-icons/font/bootstrap-icons.css";
    .bi {
        color: green;
    }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavouriteComponent { 
  @Input('is-favourite')
  isSelected: boolean = false;

  @Output('change')
  change = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    console.log("Favourite icon was clicked");
    this.change.emit({ newValue: this.isSelected });
  }
}

export interface FavouriteChangedEventArgs {
  newValue: boolean;
}
