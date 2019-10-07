import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/shared/match.model';
import { MatchService } from 'src/app/shared/match.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Team } from 'src/app/shared/team.model';
import { Type } from 'src/app/shared/type.model';
import { TeamService } from 'src/app/shared/team.service';
import { TypeService } from 'src/app/shared/type.service';

@Component({
  selector: 'app-update-match',
  templateUrl: './update-match.component.html',
  styleUrls: ['./update-match.component.css']
})
export class UpdateMatchComponent implements OnInit {

  teams: Team[];
  types: Type[];

  match = new Match() ;
  submitted = false;
  message: string;

  constructor(
    public matchService: MatchService,
    public teamService: TeamService,
    public typeService: TypeService,
    public route: ActivatedRoute,
    public location: Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.matchService.getMatch(id)
    .subscribe(match => this.match = match);
    this.getTeams();
    this.getTypes();
  }

  update(): void {
    this.submitted = true;
    this.matchService.updateMatch(this.match)
        .subscribe(() => this.message = 'Match Updated Successfully!');
  }

  delete(): void {
    this.submitted = true;
    this.matchService.deleteMatch(this.match.id)
        .subscribe(() => this.message = 'Match Deleted Successfully!');
  }

  goBack(): void {
    this.location.back();
  }

  getTeams() {
    return this.teamService.getTeams()
               .subscribe(
                 teams => {
                  console.log(teams);
                  this.teams = teams;
                 }
                );
 }

 getTypes() {
   return this.typeService.getTypes()
              .subscribe(
                types => {
                 console.log(types);
                 this.types = types;
                }
               );
 }
}
