import { Routes } from '@angular/router';
// import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
// import { LoginFormComponent } from './components/login-form/login-form.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { ForgetMainComponent } from './components/forget-main/forget-main.component';
import { MainComponent } from './components/main/main.component';
import { InstructionLayoutComponent } from './components/instruction-layout/instruction-layout.component';

export const routes: Routes = [
    {
        path:'',
        component:MainComponent
    },
    
    {
        path:'instruction',
        component:InstructionLayoutComponent
    },

    {
        path:'forget',
        component:ForgetMainComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
