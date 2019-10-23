import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScorelineComponent } from './view-scorelines/scoreline.component';
import { UpdateScorelineComponent } from './update-scoreline/update-scoreline.component';
import { CreateScorelineComponent } from './create-scoreline/create-scoreline.component';

const routes: Routes = [
  {
    path: '',
    component: ScorelineComponent
  },
  {
      path: ':id',
      component: UpdateScorelineComponent
  },
  {
      path: 'create',
      component: CreateScorelineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScorelineRoutingModule { }
