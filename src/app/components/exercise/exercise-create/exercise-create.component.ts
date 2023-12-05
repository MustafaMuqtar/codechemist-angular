import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseService } from 'src/app/Services/exercise.service';
import { SharedDataService } from 'src/app/Services/shared-data.service';
import { SubjectServiceService } from 'src/app/Services/subject-service.service';
import { TechnologyServiceService } from 'src/app/Services/technology-service.service';
import { IGetTechnology } from 'src/app/models/ICourseInterface';

@Component({
  selector: 'app-exercise-create',
  templateUrl: './exercise-create.component.html',
  styleUrls: ['./exercise-create.component.css']
})
export class ExerciseCreateComponent {


  public form!: FormGroup;
  technologyList: IGetTechnology[] = [];
  subjectId: number[] = []
  subjectName: null = null;
  isCreating: boolean = false

  constructor(private technologyService: TechnologyServiceService, private exerciseService: ExerciseService,
     private router: Router, private activerouter: ActivatedRoute, 
     private fb: FormBuilder, private httpClient: HttpClient,  private sharedDataService: SharedDataService) { }
  ngOnInit(): void {

    if (!this.sharedDataService.user) {
      this.router.navigate(['/'])

   }
    this.getTechnologyList()

    this.form = this.fb.group({
      title: [''],
      pDFS: [null],


    })

  }

  file: any;

  createForm = this.fb.group(
    {
      title: '',
      pDFS: File,


    })

 
  getTechnologyList() {
    this.technologyService.getAlltechnologies().subscribe((data) => {
      this.technologyList = data
    })


  }
  handleProfessorClick(): void {

    let formData: any = new FormData();
    this.subjectId.forEach(function (value) {
      formData.append("subjectId", value);
    });

    formData.append('title', this.createForm.value.title);
    formData.append('pDF', this.file);
    this.isCreating = true


    this.exerciseService.postExercise(formData).subscribe((result) => {

      if (result) {
        this.router.navigate([''])
      }

    });


  }


  onFileSelect(event: any) {

    this.file = <File>event.target.files[0]

  }

  getSubjectId(e: number) {
    this.subjectId.push(e);
  }

}
