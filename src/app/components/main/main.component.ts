import { Component } from '@angular/core';
// import { LoginFormComponent } from '../login-form/login-form.component';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';
import { MainFormComponent } from '../main-form/main-form.component';
import { NoticeComponent } from '../notice/notice.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainFormComponent,LeftSidebarComponent,NoticeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
