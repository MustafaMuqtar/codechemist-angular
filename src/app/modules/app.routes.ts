import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { TechnologyDetailComponent } from "../components/tecknology/technology-detail/technology-detail.component";




const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'technology/detail', component: TechnologyDetailComponent },
  //  { path: 'login', component: LogInComponent },
  //  { path: 'register', component: RegisterComponent },
  //  { path: 'product', component: ProductIndexComponent },
  //  { path: 'product/create', component: ProductCreateComponent },
  //  { path: 'product/edit/:id', component: ProductEditComponent },
  //  { path: 'product/details/:id', component: ProductDetailsComponent },
  //  { path: '**', component: NotFoundComponent },

]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutesmodule { }
