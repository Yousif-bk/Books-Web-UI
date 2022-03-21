import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LangingComponent } from './home/langing/langing.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeIconsModule } from './home-icons.module';
import { SharedIconsModule } from '../shared/shared-icons.module';



@NgModule({
  declarations: [
    HomePageComponent,
    LangingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeIconsModule,
    SharedIconsModule
  ]
})
export class HomeModule { }
