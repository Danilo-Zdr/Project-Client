import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { ScorelineComponent } from './scoreline/scoreline.component';
import { TypeComponent } from './type/type.component';
import { CreateTeamComponent } from './teams/create-team/create-team.component';
import { UpdateTeamComponent } from './teams/update-team/update-team.component';
import { MatchesComponent } from './matches/matches.component';
import { CreateMatchComponent } from './matches/create-match/create-match.component';
import { UpdateMatchComponent } from './matches/update-match/update-match.component';
import { CreateScorelineComponent } from './scoreline/create-scoreline/create-scoreline.component';
import { UpdateScorelineComponent } from './scoreline/update-scoreline/update-scoreline.component';
import { CreateTypeComponent } from './type/create-type/create-type.component';
import { UpdateTypeComponent } from './type/update-type/update-type.component';


const routes: Routes = [
  {path: '', redirectTo: 'matches', pathMatch: 'full'},
  // Matches
  {path: 'matches', component: MatchesComponent},
  {path: 'matches/create', component: CreateMatchComponent},
  {path: 'matches/:id', component: UpdateMatchComponent},
  // ----------------------------------------------------------
  // Teams
  {path: 'teams', component: TeamsComponent},
  {path: 'teams/create', component: CreateTeamComponent},
  {path: 'teams/:id', component: UpdateTeamComponent},
    // ----------------------------------------------------------
  // Scorelines
  {path: 'scorelines', component: ScorelineComponent},
  {path: 'scorelines/create', component: CreateScorelineComponent},
  {path: 'scorelines/:id', component: UpdateScorelineComponent},
    // ----------------------------------------------------------
  // Match Types
  {path: 'types', component: TypeComponent},
  {path: 'types/create', component: CreateTypeComponent},
  {path: 'types/:id', component: UpdateTypeComponent},
    // ----------------------------------------------------------
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
