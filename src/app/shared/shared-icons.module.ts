import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocation, faLocationPin, faLongArrowAltRight, faPhone, faSearch, faSync } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class SharedIconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faSync,
      faSearch,
      faLongArrowAltRight, faLocationPin,
      faPhone
    );
  }
}
