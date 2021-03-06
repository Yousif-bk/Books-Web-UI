import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationModule } from './translation.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentLayoutComponent } from './components/layout/content-layout/content-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentLayoutComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    RouterModule,
  ]
})
export class SharedModule { }
