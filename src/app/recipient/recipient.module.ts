import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipientRoutingModule } from './recipient-routing.module';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    RecipientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RecipientModule { }
