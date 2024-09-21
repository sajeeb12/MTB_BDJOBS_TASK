import { Component } from '@angular/core';
import { InstructionLeftComponent } from '../instruction-left/instruction-left.component';
import { InstructionMainComponent } from '../instruction-main/instruction-main.component';

@Component({
  selector: 'app-instruction-layout',
  standalone: true,
  imports: [InstructionLeftComponent,InstructionMainComponent],
  templateUrl: './instruction-layout.component.html',
  styleUrl: './instruction-layout.component.css'
})
export class InstructionLayoutComponent {

}
