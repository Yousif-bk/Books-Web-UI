import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LangingComponent } from './home/langing/langing.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomePageComponent,
    LangingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
