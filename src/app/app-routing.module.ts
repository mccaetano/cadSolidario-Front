import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './scheduler/create/create.component';
import { EditComponent } from './scheduler/edit/edit.component';
import { IndexComponent } from './scheduler/index/index.component';
import { ViewComponent } from './scheduler/view/view.component';

const routes: Routes = [
  { path: 'scheduler', redirectTo: 'post/index', pathMatch: 'full'},
  { path: 'scheduler/index', component: IndexComponent },
  { path: 'scheduler/:id/view', component: ViewComponent },
  { path: 'scheduler/create', component: CreateComponent },
  { path: 'scheduler/:Id/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
