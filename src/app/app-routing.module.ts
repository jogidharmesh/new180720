import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreLocatorComponent } from './store-locator/store-locator.component';



const routes: Routes = [
   {path: '', redirectTo: '/home', pathMatch: 'full' },
   {path: 'store-locator'  ,component:StoreLocatorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
