import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MatchService } from './shared/match.service';
import { ScorelineService } from './shared/scoreline.service';
import { MatchesComponent } from './matches/matches.component';
import { TeamsComponent } from './teams/teams.component';
import { TypeComponent } from './type/type.component';
import { ScorelineComponent } from './scoreline/scoreline.component';
import { CreateScorelineComponent } from './scoreline/create-scoreline/create-scoreline.component';
import { UpdateScorelineComponent } from './scoreline/update-scoreline/update-scoreline.component';
import { CreateMatchComponent } from './matches/create-match/create-match.component';
import { UpdateMatchComponent } from './matches/update-match/update-match.component';
import { CreateTypeComponent } from './type/create-type/create-type.component';
import { UpdateTypeComponent } from './type/update-type/update-type.component';
import { CreateTeamComponent } from './teams/create-team/create-team.component';
import { UpdateTeamComponent } from './teams/update-team/update-team.component';
import { NavComponent } from './nav/nav.component';
import { TypeService } from './shared/type.service';
import { TeamService } from './shared/team.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    TeamsComponent,
    TypeComponent,
    ScorelineComponent,
    CreateScorelineComponent,
    UpdateScorelineComponent,
    CreateMatchComponent,
    UpdateMatchComponent,
    CreateTypeComponent,
    UpdateTypeComponent,
    CreateTeamComponent,
    UpdateTeamComponent,
    NavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [MatchService, ScorelineService, TypeService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
