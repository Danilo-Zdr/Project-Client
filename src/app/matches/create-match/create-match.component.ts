import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/shared/match.service';
import { Match } from 'src/app/shared/match.model';
import { Location } from '@angular/common';
import { Team } from 'src/app/shared/team.model';
import { Type } from 'src/app/shared/type.model';
import { TeamService } from 'src/app/shared/team.service';
import { TypeService } from 'src/app/shared/type.service';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.css']
})
export class CreateMatchComponent implements OnInit {

  public teams: Team[];
  public types: Type[];
  public match = new Match();
  public submitted = false;

  constructor(
    private matchService: MatchService,
    private teamService: TeamService,
    private typeService: TypeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTeams();
    this.getTypes();
  }

    getTeams() {
   return this.teamService.getTeams()
    .subscribe(
      teams => {
       console.log(teams);
       this.teams = teams;
      });
  }

  getTypes() {
  return this.typeService.getTypes()
    .subscribe(
    types => {
      console.log(types);
      this.types = types;
    });
  }

  newMatch(): void {
    this.submitted = false;
    this.match = new Match();
  }

  addMatch() {
   this.submitted = true;
   this.save();
   window.location.reload();
  }

  goBack(): void {
    this.location.back();
  }

  public save(): void {
    this.matchService.addMatch(this.match)
    .subscribe();
  }
}
