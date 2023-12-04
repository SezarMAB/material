import { Routes } from '@angular/router';
import {ButtonsComponent} from "./buttons/buttons.component";
import {ChipsComponent} from "./chips/chips.component";
import {ThemTestComponent} from "./them-test/them-test.component";
import {BannersComponent} from "./banners/banners.component";
import {CheckRadioComponent} from "./check-radio/check-radio.component";
import {DatePComponent} from "./date-p/date-p.component";
import {TogleComponent} from "./togle/togle.component";
import {FormsComponent} from "./forms/forms.component";

export const routes: Routes = [
  {path: '', redirectTo: 'theme', pathMatch: 'full'},
  {path: 'buttons', component: ButtonsComponent},
  {path: 'chips', component: ChipsComponent},
  {path: 'theme', component: ThemTestComponent},
  {path: 'banners', component: BannersComponent},
  {path: 'check', component: CheckRadioComponent},
  {path:'dates', component: DatePComponent},
  {path: 'toggle', component: TogleComponent},
  {path: 'forms', component: FormsComponent},
];
