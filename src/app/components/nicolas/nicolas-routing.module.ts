import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UsersComponent } from './users/users.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'perfil', component: UsersComponent},
  { path: 'agregarproductos', component: AddProductsComponent},
  { path: 'navegar', component: NavComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NicolasRoutingModule { }
