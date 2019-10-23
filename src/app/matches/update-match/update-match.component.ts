import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
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
export class UpdateMatchComponent implements OnInit, OnDestroy, AfterViewInit {

  public teams: Team[];
  public types: Type[];
  public match = new Match() ;
  public submitted = false;
  public message: string;

  constructor(
    private matchService: MatchService,
    private teamService: TeamService,
    private typeService: TypeService,
    private route: ActivatedRoute,
    private location: Location
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

  ngAfterViewInit() {
  console.log('View loading complete.');
  }

  ngOnDestroy() {
    console.log('Destruction complete.');
  }
}
