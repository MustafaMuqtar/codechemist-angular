import { Component } from '@angular/core';
import { LessonService } from 'src/app/Services/lessonService';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ITechnology } from 'src/app/models/technology';
import { technologyService } from 'src/app/Services/technologyService';
import { SharedDataService } from 'src/app/Services/shared-data.service';



@Component({
  selector: 'app-lesson-create',
  templateUrl: './lesson-create.component.html',
  styleUrls: ['./lesson-create.component.css']
})
export class LessonCreateComponent {


  
  public form!: FormGroup;
  technologyList: ITechnology[] = [];
  technologyId: number[] =[]
  technologyName: null= null;
  isCreating: boolean = false

 

  constructor(private lessonService: LessonService, private technologyService: technologyService, private router: Router,
     private activerouter: ActivatedRoute, private fb: FormBuilder,
     private sharedDataService: SharedDataService) { }
  ngOnInit(): void {
    this.getTechnologyList()

    this.form = this.fb.group({
      title: [''],
  

    })

    if (!this.sharedDataService.user) {
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
          this.router.navigate([''])
        }
  
      });
  
  
    }

    getTechnologiId(e: number) {
      this.technologyId.push(e);
      console.log(this.technologyId)
    }

    getTechnologyList() {
      this.technologyService.getAlltechnologies().subscribe((data ) => {
        this.technologyList =data
      })
  
  
    }


}
