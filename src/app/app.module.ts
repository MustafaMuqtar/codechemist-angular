import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutesModule } from './modules/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/acount/login/login.component';
import { RegisterComponent } from './components/acount/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/portfolio/index/index.component';

import { CourseListComponent } from './components/course/course-list/course-list.component';
import { CourseEditComponent } from './components/course/course-edit/course-edit.component';
import { CourseDetailComponent } from './components/course/course-detail/course-detail.component';
import { CourseCreateComponent } from './components/course/course-create/course-create.component';
import { SubjectCreateComponent } from './components/subject/subject-create/subject-create.component';
import { SubjectEditComponent } from './components/subject/subject-edit/subject-edit.component';
import { LessonCreateComponent } from './components/lesson/lesson-create/lesson-create.component';
import { LessonEditComponent } from './components/lesson/lesson-edit/lesson-edit.component';
import { ExerciseCreateComponent } from './components/exercise/exercise-create/exercise-create.component';
import { GameComponent } from './components/game/game.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    FooterComponent,
    VideoPlayerComponent,
    IndexComponent,
    CourseListComponent,
    CourseCreateComponent,
    CourseEditComponent,
    CourseDetailComponent,
    SubjectCreateComponent,
    SubjectEditComponent,
    LessonCreateComponent,
    LessonEditComponent,
    ExerciseCreateComponent,
    GameComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PdfViewerModule, 
    CommonModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
