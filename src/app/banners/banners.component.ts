import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BannerComponent} from "../banner/banner.component";

@Component({
  selector: 'app-banners',
  standalone: true,
    imports: [CommonModule, BannerComponent],
  templateUrl: './banners.component.html',
  styleUrl: './banners.component.scss'
})
export class BannersComponent {

}
