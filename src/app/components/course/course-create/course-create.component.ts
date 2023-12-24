import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; 
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CourseServiceService } from 'src/app/Services/course-service.service';


@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {


  public form!: FormGroup;
  isCreating: boolean = false


  constructor(private courseService: CourseServiceService, private router: Router, 
    private authService: AuthenticationServiceService, private fb: FormBuilder, private httpClient: HttpClient) { }
  ngOnInit(): void {

    this.form = this.fb.group({
      title: [''],
      image: [null],
      

    })
    if (!this.authService.isAdmin()) {
      this.router.navigate(['/'])

   }

  }

  file: any;

  createForm = this.fb.group(
    {
      title: '',
      image: File,


    })

  handleProfessorClick(): void {

    let formData: any = new FormData();


    formData.append('title', this.createForm.value.title);
    formData.append('image', this.file);

    this.isCreating = true

    this.courseService.postCourse(formData).subscribe((result) => {
      if (result) {
        this.router.navigate([''])
      }

    });


  }


  onFileSelect(event: any) {

    this.file = <File>event.target.files[0]

  }









}