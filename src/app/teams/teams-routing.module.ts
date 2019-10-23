import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsComponent } from './view-teams/teams.component';
import { UpdateTeamComponent } from './update-team/update-team.component';
import { CreateTeamComponent } from './create-team/create-team.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent
  },
  {
      path: ':id',
      component: UpdateTeamComponent
  },
  {
      path: 'create',
      component: CreateTeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
