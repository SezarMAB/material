import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {ThemeManager} from "../core/theme-manager.service";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-buttons',
  standalone: true,
    imports: [CommonModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

}
