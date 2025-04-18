import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.css'
})
export class MainFormComponent {
  router = inject(Router);

  
  personForm:FormGroup = new FormGroup({
    loginId:new FormControl('',[Validators.required,Validators.minLength(4)]),
    pass:new FormControl('',[Validators.required,Validators.minLength(4)])
  })
  initializedLoginId = '1234';
  initializedPass = '1234'

  formValue:any;
  onSave(){
     if (this.personForm.invalid) {
      this.personForm.markAllAsTouched();
    } else {
      this.checkCredentials();
    }
  }

  checkCredentials(){
    if(this.personForm.get('loginId')?.value == this.initializedLoginId && 
      this.personForm.get('pass')?.value == this.initializedPass){
        // alert('Login Successfull');
        localStorage.setItem('loginUser',this.personForm.get('loginId')?.value)
        this.router.navigateByUrl('instruction');
      }else{
        alert('Wrong Credentials')
      }
  }
  // const navigate = useNavigate();

  
  redirectToForget(){
    this.router.navigate(['/forget']);
  }

  // onSave1(){
  //   if(this.personForm.get('loginId')?.value == this.initializedLoginId && this.personForm.get('pass')?.value == this.initializedPass){
  //     alert('login Success');
  //     this.router.navigateByUrl('instruction')
  //   }else{
  //     alert('Wrong Credentials')
  //   }
  // }
}
