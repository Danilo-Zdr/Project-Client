import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Team } from 'src/app/shared/team.model';
import { TeamService } from 'src/app/shared/team.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit, OnDestroy, AfterViewInit {

  public team = new Team() ;
  public submitted = false;
  public message: string;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private location: Location
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

  ngAfterViewInit() {
    console.log('View loading complete.');
  }

  ngOnDestroy() {
    console.log('Destruction complete.');
  }

}
