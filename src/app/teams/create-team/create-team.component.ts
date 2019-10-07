import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/shared/team.service';
import { Team } from 'src/app/shared/team.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent {

  team = new Team();
  submitted = false;

  constructor(
    private teamService: TeamService,
    private location: Location
  ) { }

  newTeam(): void {
    this.submitted = false;
    this.team = new Team();
  }

 addTeam() {
   this.submitted = true;
   this.save();
   window.location.reload();
 }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    this.teamService.addTeam(this.team)
        .subscribe();
  }
}
