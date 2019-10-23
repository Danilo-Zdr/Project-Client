import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { TeamService } from 'src/app/shared/team.service';
import { Team } from '../../shared/team.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  public teams: Team[];

  constructor(public teamService: TeamService) {}

  ngOnInit(): void {
     this.getTeams();
  }

  getTeams() {
    return this.teamService.getTeams()
    .subscribe(
      teams => {
        console.log(teams);
        this.teams = teams;
        });
 }
}
