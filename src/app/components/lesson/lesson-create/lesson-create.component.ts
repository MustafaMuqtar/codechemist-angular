import { Component } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IGetTechnology } from 'src/app/models/ICourseInterface';
import { LessonServiceService } from 'src/app/Services/lesson-service.service';
import { TechnologyServiceService } from 'src/app/Services/technology-service.service';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';



@Component({
  selector: 'app-lesson-create',
  templateUrl: './lesson-create.component.html',
  styleUrls: ['./lesson-create.component.css']
})
export class LessonCreateComponent {


  
  public form!: FormGroup;
  technologyList: IGetTechnology[] = [];
  technologyId: number[] =[]
  technologyName: null= null;
  isCreating: boolean = false

 

  constructor(private lessonService: LessonServiceService, private technologyService: TechnologyServiceService, private router: Router,
     private activerouter: ActivatedRoute, private fb: FormBuilder,
     private authService: AuthenticationServiceService) { }
  ngOnInit(): void {
    this.getTechnologyList()

    this.form = this.fb.group({
      title: [''],
  

    })

    if (!this.authService.isAdmin()) {
      this.router.navigate(['/'])

   }
  }

  createForm = this.fb.group(
    {
      title: '',

    })

    handleProfessorClick(): void {

      let formData: any = new FormData();
      this.technologyId.forEach(function (value) {
        formData.append("technologyId", value);
      });
  
      formData.append('title', this.createForm.value.title);
  
      this.isCreating = true

      this.lessonService.postLesson(formData).subscribe((result) => {
        if (result) {
          this.router.navigate(['/technology/detail/1'])
        }
  
      });
  
  
    }

    getTechnologiId(e: number) {
      this.technologyId.push(e);
    }

    getTechnologyList() {
      this.technologyService.getAlltechnologies().subscribe((data ) => {
        this.technologyList =data
      })
  
  
    }


}
