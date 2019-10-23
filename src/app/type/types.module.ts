import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypesRoutingModule } from './types-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TypeComponent } from './view-types/type.component';
import { UpdateTypeComponent } from './update-type/update-type.component';
import { CreateTypeComponent } from './create-type/create-type.component';

@NgModule({
  imports: [
    CommonModule,
    TypesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TypeComponent, UpdateTypeComponent, CreateTypeComponent]

})
export class TypesModule { }
