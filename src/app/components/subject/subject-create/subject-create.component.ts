import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from 'src/app/Services/shared-data.service';
import { SubjectService } from 'src/app/Services/subjectService';
import { technologyService } from 'src/app/Services/technologyService';
import { ITechnology } from 'src/app/models/technology';



@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css']
})
export class SubjectCreateComponent {

  public form!: FormGroup;
  technologyList: ITechnology[] = [];
  lessonId: number[] = []
  lessonName: null = null;
  isCreating: boolean = false

  constructor(private technologyService: technologyService, private subjectService: SubjectService,
     private router: Router, private activerouter: ActivatedRoute, 
     private fb: FormBuilder, private httpClient: HttpClient,  private sharedDataService: SharedDataService) { }
  ngOnInit(): void {

    if (!this.sharedDataService.user) {
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
    console.log(this.lessonId)
    console.log(e)
  }

}