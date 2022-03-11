import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App_Routes } from './app.routes';

const routes: Routes = App_Routes
// const routes: Routes = [
//   {
//     path: "",
//     component: HomePageComponent
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
