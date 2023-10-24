import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TechnologyListComponent } from './components/tecknology/technology-list/technology-list.component';
import { TechnologyDetailComponent } from './components/tecknology/technology-detail/technology-detail.component';
import { AppRoutesModule } from './modules/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TechnologyCreateComponent } from './components/tecknology/technology-create/technology-create.component';
import { LessonCreateComponent } from './components/lesson/lesson-create/lesson-create.component';
import { LessonEditComponent } from './components/lesson/lesson-edit/lesson-edit.component';
import { TechnologyEditComponent } from './components/tecknology/technology-edit/technology-edit.component';
import { SubjectCreateComponent } from './components/subject/subject-create/subject-create.component';
import { SubjectEditComponent } from './components/subject/subject-edit/subject-edit.component';
import { LoginComponent } from './components/acount/login/login.component';
import { RegisterComponent } from './components/acount/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestComponent } from './test/test.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TechnologyListComponent,
    TechnologyDetailComponent,
    TechnologyCreateComponent,
    LessonCreateComponent,
    LessonEditComponent,
    TechnologyEditComponent,
    SubjectCreateComponent,
    SubjectEditComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    FooterComponent,
    TestComponent,
    VideoPlayerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule      

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
