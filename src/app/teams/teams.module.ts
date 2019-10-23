import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsRoutingModule } from './teams-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TeamsComponent } from './view-teams/teams.component';
import { UpdateTeamComponent } from './update-team/update-team.component';
import { CreateTeamComponent } from './create-team/create-team.component';

@NgModule({
  imports: [
    CommonModule,
    TeamsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TeamsComponent, UpdateTeamComponent, CreateTeamComponent]

})
export class TeamsModule { }
