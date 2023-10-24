import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; 
import { technologyService } from 'src/app/Services/technologyService';


@Component({
  selector: 'app-technology-create',
  templateUrl: './technology-create.component.html',
  styleUrls: ['./technology-create.component.css']
})
export class TechnologyCreateComponent implements OnInit {


  public form!: FormGroup;
  isCreating: boolean = false


  constructor(private technologyService: technologyService, private router: Router, private activerouter: ActivatedRoute, private fb: FormBuilder, private httpClient: HttpClient) { }
  ngOnInit(): void {

    this.form = this.fb.group({
      title: [''],
      image: [null],


    })

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
    formData.append('image', this.file, this.createForm.value.image);

    this.isCreating = true

    this.technologyService.postTechnology(formData).subscribe((result) => {
      if (result) {
        this.router.navigate([''])
      }

    });


  }


  onFileSelect(event: any) {

    this.file = <File>event.target.files[0]

  }









}