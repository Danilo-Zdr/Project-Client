import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchesComponent } from './view-matches/matches.component';
import { UpdateMatchComponent } from './update-match/update-match.component';
import { CreateMatchComponent } from './create-match/create-match.component';

const routes: Routes = [
  {
    path: '',
    component: MatchesComponent
  },
  {
      path: ':id',
      component: UpdateMatchComponent
  },
  {
      path: 'create',
      component: CreateMatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
