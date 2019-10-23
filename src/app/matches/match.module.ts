import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchRoutingModule } from './match-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatchesComponent } from './view-matches/matches.component';
import { UpdateMatchComponent } from './update-match/update-match.component';
import { CreateMatchComponent } from './create-match/create-match.component';

@NgModule({
  imports: [
    CommonModule,
    MatchRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MatchesComponent, UpdateMatchComponent, CreateMatchComponent]

})
export class MatchModule { }
