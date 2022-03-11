import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../shared/models/app/AppRoutes';
import { HomePageComponent } from './home/home-page/home-page.component';


const routes: Routes = [
  {
    path: AppRoutes.langing,
    component: HomePageComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
