import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulerRoutingModule } from './scheduler-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    SchedulerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SchedulerModule { }
