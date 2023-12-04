import {Component} from '@angular/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {JsonPipe} from "@angular/common";


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-date-p',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    JsonPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './date-p.component.html',
  styleUrl: './date-p.component.scss'
})
export class DatePComponent {
  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}
