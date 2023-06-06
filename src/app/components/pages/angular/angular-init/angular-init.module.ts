import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularInitRoutingModule } from './angular-init-routing.module';
import { AngularInitComponent } from './angular-init.component';
import { AngularMenuModule } from 'src/app/components/common/angular-menu/angular-menu.module';


@NgModule({
  declarations: [
    AngularInitComponent
  ],
  imports: [
    AngularMenuModule,
    CommonModule,
    AngularInitRoutingModule
  ]
})
export class AngularInitModule { }
