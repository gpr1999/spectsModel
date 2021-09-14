import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpectaclesComponent } from './spectacles/spectacles.component';
import { AddspectaclesComponent } from './addspectacles/addspectacles.component';


const routes: Routes = [
  {path:'spectacles',component: SpectaclesComponent},
  {path:'addSpectacles',component: AddspectaclesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
