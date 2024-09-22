import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [],
  templateUrl: './left.component.html',
  styleUrl: './left.component.css'
})
export class LeftComponent {
  router = inject(Router);
  redirectToLogin(){
    this.router.navigate(['/login']);
  }
}
