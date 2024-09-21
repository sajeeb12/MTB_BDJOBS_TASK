import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.css'
})
export class MainFormComponent {
  personForm:FormGroup = new FormGroup({
    loginId:new FormControl('',[Validators.required,Validators.minLength(4)]),
    pass:new FormControl('',[Validators.required,Validators.minLength(4)])
  })

  formValue:any;
  onSave(){
    // this.formValue = this.personForm.value;
     if (this.personForm.invalid) {
      // Mark all controls as touched if the form is invalid, so error messages show up
      this.personForm.markAllAsTouched();
    } else {
      // Process the form when valid (for example, log form data to console)
      console.log('Form Submitted!', this.personForm.value);
    }
  }
}
