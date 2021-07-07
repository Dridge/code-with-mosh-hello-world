import { SummaryPipe } from './summary.pipe';
import { BooksService } from './books.service';
import { BooksComponent } from './books/books.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitlecaseInputComponent } from './titlecase-input/titlecase-input.component';
import { TitlecaseCustomPipe } from './titlecase-custom.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeButtonComponent } from './like-button/like-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    BooksComponent,
    SummaryPipe,
    FavouriteComponent,
    TitlecaseInputComponent,
    TitlecaseCustomPipe,
    PanelComponent,
    LikeButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
