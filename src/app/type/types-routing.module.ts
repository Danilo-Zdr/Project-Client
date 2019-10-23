import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeComponent } from './view-types/type.component';
import { UpdateTypeComponent } from './update-type/update-type.component';
import { CreateTypeComponent } from './create-type/create-type.component';

const routes: Routes = [
  {
    path: '',
    component: TypeComponent
  },
  {
      path: ':id',
      component: UpdateTypeComponent
  },
  {
      path: 'create',
      component: CreateTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypesRoutingModule { }
