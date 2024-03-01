import { Routes } from '@angular/router';
import { ChildComponent } from './component/child/child.component';
import { DemoComponent } from './component/demo/demo.component';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RegisterComponent } from './component/register/register.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent,children:[{path:'child',component:ChildComponent}] },
    { path: 'demo', component: DemoComponent },
    
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
