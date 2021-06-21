import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'scheduler', redirectTo: 'scheduler/index/1', pathMatch: 'full'},
  { path: 'scheduler/index/:page', component: IndexComponent },
  { path: 'scheduler/:id/view', component: ViewComponent },
  { path: 'scheduler/create', component: CreateComponent },
  { path: 'scheduler/:Id/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulerRoutingModule { }
