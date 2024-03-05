import { Routes } from '@angular/router';
import { AddProductComponent } from './component/add-product/add-product.component';
import { ChildComponent } from './component/child/child.component';
import { DemoComponent } from './component/demo/demo.component';
import { DisplayProductsComponent } from './component/display-products/display-products.component';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RegisterComponent } from './component/register/register.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent, children: [{ path: 'child', component: ChildComponent }] },
    { path: 'demo', component: DemoComponent },
    { path: 'products', component: DisplayProductsComponent },
    { path: 'product', component: AddProductComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
