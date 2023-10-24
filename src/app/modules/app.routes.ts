import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { TechnologyDetailComponent } from "../components/tecknology/technology-detail/technology-detail.component";
import { TechnologyListComponent } from "../components/tecknology/technology-list/technology-list.component";
import { TechnologyCreateComponent } from "../components/tecknology/technology-create/technology-create.component";
import { TechnologyEditComponent } from "../components/tecknology/technology-edit/technology-edit.component";
import { LessonEditComponent } from "../components/lesson/lesson-edit/lesson-edit.component";
import { SubjectCreateComponent } from "../components/subject/subject-create/subject-create.component";
import { SubjectEditComponent } from "../components/subject/subject-edit/subject-edit.component";
import { LoginComponent } from "../components/acount/login/login.component";
import { RegisterComponent } from "../components/acount/register/register.component";
import { NotfoundComponent } from "../components/notfound/notfound.component";
import { LessonCreateComponent } from "../components/lesson/lesson-create/lesson-create.component";
import { TestComponent } from "../test/test.component";




const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
    { path: 'technology', component: TechnologyListComponent },
   { path: 'technology/create', component: TechnologyCreateComponent },
    { path: 'technology/edit/:id', component: TechnologyEditComponent },
   { path: 'technology/detail/:id', component: TechnologyDetailComponent },
   { path: 'lesson/create', component: LessonCreateComponent },
    { path: 'lesson/edit/:id', component: LessonEditComponent },
   { path: 'subject/create', component: SubjectCreateComponent },
    { path: 'subject/edit/:id', component: SubjectEditComponent },
    { path: 'test', component: TestComponent },
  { path: '**', component: NotfoundComponent },

]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutesModule { }
