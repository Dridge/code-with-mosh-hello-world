import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'titlecase-input',
  templateUrl: './titlecase-input.component.html',
  styleUrls: ['./titlecase-input.component.css']
})
export class TitlecaseInputComponent implements OnInit {
  titleDisplayed: String = "";

  constructor() { }

  ngOnInit(): void {
  }

  setTitleCaseText(titleInput: String) {
    this.titleDisplayed = titleInput;
  }
}
