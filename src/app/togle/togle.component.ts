import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MatSlideToggleModule,
  _MatSlideToggleRequiredValidatorModule,
} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-togle',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    FormsModule,
    _MatSlideToggleRequiredValidatorModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './togle.component.html',
  styleUrl: './togle.component.scss'
})
export class TogleComponent {
  isChecked = true;
  formGroup = this._formBuilder.group({
    enableWifi: '',
    acceptTerms: ['', Validators.requiredTrue],
  });

  constructor(private _formBuilder: FormBuilder) {}

  alertFormValues(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
  }
}
