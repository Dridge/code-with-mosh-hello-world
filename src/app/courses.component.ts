import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
        </div>
        <input id="email" [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    `
})
export class CoursesComponent implements OnInit {
    title = "List of courses";
    courses;
    isActive = true;
    email = "me@example.com";

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
    
    onSave($event: any) {
        $event.stopPropagation();
        console.log("button was clicked", $event);
        this.isActive=!this.isActive;
    }

    onDivClicked() {
        console.log("div was clicked");
    }

    onKeyUp() {
        console.log(this.email);
    }

    ngOnInit(): void {
    }
}