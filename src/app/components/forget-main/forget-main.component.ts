import { Component } from '@angular/core';
import { ForgetPassComponent } from '../forget-pass/forget-pass.component';
import { LeftComponent } from '../left/left.component';

@Component({
  selector: 'app-forget-main',
  standalone: true,
  imports: [ForgetPassComponent,LeftComponent],
  templateUrl: './forget-main.component.html',
  styleUrl: './forget-main.component.css'
})
export class ForgetMainComponent {

}
