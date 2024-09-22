import { Routes } from '@angular/router';
// import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
// import { LoginFormComponent } from './components/login-form/login-form.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { ForgetMainComponent } from './components/forget-main/forget-main.component';
import { MainComponent } from './components/main/main.component';
import { InstructionLayoutComponent } from './components/instruction-layout/instruction-layout.component';
import { AppComponent } from './app.component';
import { authGuard } from './service/auth.guard';

export const routes: Routes = [
    {
        path:'login',
        component:MainComponent
    },
    
    {
        path:'instruction',
        component:InstructionLayoutComponent,
        canActivate:[authGuard]
    },

    {
        path:'forget',
        component:ForgetMainComponent
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    },
];
