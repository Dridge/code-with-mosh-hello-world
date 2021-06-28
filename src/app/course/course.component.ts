import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course = {
    title: "The Complete Angular Course",
    rating: 4.89,
    students: 2010,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
