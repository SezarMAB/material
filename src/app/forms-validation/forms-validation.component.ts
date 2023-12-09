import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CommonModule} from "@angular/common";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-forms-validation',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './forms-validation.component.html',
  styleUrl: './forms-validation.component.scss'
})
export class FormsValidationComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    'email':new FormControl(null,[Validators.required,Validators.email])
  });
  post?: string;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.formGroup = new FormGroup({
    //   'email':new FormControl(null,[Validators.required,Validators.email])
    // });
  }

  getErrorEmail() {
    return this.formGroup.get('email')?.hasError('required') ? 'Field is required' :
      this.formGroup.get('email')?.hasError('email') ? 'Not a valid email address' : '';
  }

  onSubmit(post: string) {
    this.post = post;
  }

}
