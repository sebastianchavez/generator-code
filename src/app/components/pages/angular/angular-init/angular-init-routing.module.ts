import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularInitComponent } from './angular-init.component';

const routes: Routes = [
  {
    path: '',
    component: AngularInitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularInitRoutingModule { }
