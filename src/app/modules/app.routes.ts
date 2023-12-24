import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { CourseDetailComponent } from "../components/course/course-detail/course-detail.component";
import { CourseListComponent } from "../components/course/course-list/course-list.component";
import { CourseCreateComponent } from "../components/course/course-create/course-create.component";
import { CourseEditComponent } from "../components/course/course-edit/course-edit.component";
import { LessonEditComponent } from "../components/lesson/lesson-edit/lesson-edit.component";
import { SubjectCreateComponent } from "../components/subject/subject-create/subject-create.component";
import { SubjectEditComponent } from "../components/subject/subject-edit/subject-edit.component";
import { LoginComponent } from "../components/acount/login/login.component";
import { RegisterComponent } from "../components/acount/register/register.component";
import { NotfoundComponent } from "../components/notfound/notfound.component";
import { LessonCreateComponent } from "../components/lesson/lesson-create/lesson-create.component";
import { ExerciseCreateComponent } from "../components/exercise/exercise-create/exercise-create.component";
import { IndexComponent } from "../components/portfolio/index/index.component";




const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
    { path: 'course', component: CourseListComponent },
   { path: 'course/create', component: CourseCreateComponent },
    { path: 'course/edit/:id', component: CourseEditComponent },
   { path: 'course/detail/:id', component: CourseDetailComponent },
   { path: 'lesson/create', component: LessonCreateComponent },
   { path: 'exercise/create', component: ExerciseCreateComponent },
    { path: 'lesson/edit/:id', component: LessonEditComponent },
   { path: 'subject/create', component: SubjectCreateComponent },
    { path: 'subject/edit/:id', component: SubjectEditComponent },
    { path: 'portfolio', component: IndexComponent },

  { path: '**', component: NotfoundComponent },

]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutesModule { }
