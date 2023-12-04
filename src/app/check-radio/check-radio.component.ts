import {Component} from '@angular/core';
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-check-radio',
  standalone: true,
  imports: [MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule, MatCardModule, MatCheckboxModule, MatRadioModule,],
  templateUrl: './check-radio.component.html',
  styleUrl: './check-radio.component.scss'
})
export class CheckRadioComponent {


  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
}

