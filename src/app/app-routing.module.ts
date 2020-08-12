import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import app components for routing
import { UserCartComponent } from "./user-cart/user-cart.component"
import { ProductListComponent } from "./product-list/product-list.component"
//---------------------


const routes: Routes = [
  { path: '', redirectTo: '/myCart', pathMatch: 'full' },
  { path: 'myCart', component: UserCartComponent},
  { path: 'productList', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
