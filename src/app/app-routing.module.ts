import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultGroupComponent } from './result-group/result-group.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"result",component:ResultComponent},
  {path:"result-group",component:ResultGroupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
