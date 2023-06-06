import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMenuComponent } from './angular-menu.component';



@NgModule({
  declarations: [
    AngularMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AngularMenuComponent
  ]
})
export class AngularMenuModule { }
