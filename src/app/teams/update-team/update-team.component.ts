import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/team.model';
import { TeamService } from 'src/app/shared/team.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit {

  team = new Team() ;
  submitted = false;
  message: string;

  constructor(
    public teamService: TeamService,
    public route: ActivatedRoute,
    public location: Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getTeam(id)
      .subscribe(team => this.team = team);
  }

  update(): void {
    this.submitted = true;
    this.teamService.updateTeam(this.team)
        .subscribe(() => this.message = 'Team Updated Successfully!');
  }

  delete(): void {
    this.submitted = true;
    this.teamService.deleteTeam(this.team.id)
        .subscribe(() => this.message = 'Team Deleted Successfully!');
  }

  goBack(): void {
    this.location.back();
  }
}
