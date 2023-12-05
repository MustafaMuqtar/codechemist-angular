import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { SubjectServiceService } from 'src/app/Services/subject-service.service';
import { TechnologyServiceService } from 'src/app/Services/technology-service.service';
import { IGetTechnology } from 'src/app/models/ICourseInterface';



@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css']
})
export class SubjectCreateComponent {

  public form!: FormGroup;
  technologyList: IGetTechnology[] = [];
  lessonId: number[] = []
  lessonName: null = null;
  isCreating: boolean = false

  constructor(private technologyService: TechnologyServiceService, private subjectService: SubjectServiceService,
     private router: Router, private activerouter: ActivatedRoute, 
     private fb: FormBuilder, private httpClient: HttpClient,  private authService: AuthenticationServiceService) { }
  ngOnInit(): void {

    if (!this.authService.isAdmin()) {
      this.router.navigate(['/'])

   }
    this.getTechnologyList()

    this.form = this.fb.group({
      title: [''],
      image: [null],


    })

  }

  file: any;

  createForm = this.fb.group(
    {
      title: '',
      content: File,


    })

 
  getTechnologyList() {
    this.technologyService.getAlltechnologies().subscribe((data) => {
      this.technologyList = data
    })


  }
  handleProfessorClick(): void {

    let formData: any = new FormData();
    this.lessonId.forEach(function (value) {
      formData.append("lessonId", value);
    });

    formData.append('title', this.createForm.value.title);
    formData.append('content', this.file);
    this.isCreating = true


    this.subjectService.postSubject(formData).subscribe((result) => {

      if (result) {
        this.router.navigate([''])
      }

    });


  }


  onFileSelect(event: any) {

    this.file = <File>event.target.files[0]

  }

  getLessonId(e: number) {
    this.lessonId.push(e);
  }

}