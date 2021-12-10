import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStatComponent } from './create-stat/create-stat.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'createStat', component: CreateStatComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
