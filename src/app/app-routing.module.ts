import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const routes: Routes = [
  { path: '', redirectTo: 'scheduler/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  BsDatepickerModule.forRoot()],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
