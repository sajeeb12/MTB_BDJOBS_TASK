import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instruction-left',
  standalone: true,
  imports: [],
  templateUrl: './instruction-left.component.html',
  styleUrl: './instruction-left.component.css'
})
export class InstructionLeftComponent {
  router = inject(Router)
  logOut(){
    localStorage.removeItem('loginUser');
    this.router.navigateByUrl('login');
  }
}
