import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <div *ngIf="courses.length > 0; then courseList else noCourses"></div>
        <ng-template #courseList>
            <ul>
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>
            </ul>
        </ng-template>
        <ng-template #noCourses>
            <ul>
                No courses yet!
            </ul>
        </ng-template>
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
        </div>
        <input id="email" [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
        <p>
        {{ text | summary: 96}}
        </p>
    `
})
export class CoursesComponent implements OnInit {
    title = "List of courses";
    courses;
    isActive = true;
    email = "me@example.com";
    text = `
LONG TXT possibly because with Ivy, the rendering engine needs to access the properties before hand which in this case would not be possible due to the event's nature. – Michael D Apr 16 at 10:51

Are you using Ivy? Most possibly it's due to AOT.

Nevertheless, there are multiple solutions.

    Send the event

<input type="text" (change) = "setNewUserName($event)"/>

export class UsersListComponent {
setNewUserName (event: any): void {
    console.log('setNewUserName', event.target.value)
}
}

    Use a template reference variable

<input #userName type="text" (change) = "setNewUserName(userName.value)"/>

export class UsersListComponent {
setNewUserName (userName : string): void {
    console.log('setNewUserName', userName)
}
}

Use a template-driven or reactive form to get the input value. IMO this would be the most elegant approach of the three.
    `

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