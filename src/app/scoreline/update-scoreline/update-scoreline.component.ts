import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Scoreline } from 'src/app/shared/scoreline.model';
import { ScorelineService } from 'src/app/shared/scoreline.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Match } from 'src/app/shared/match.model';
import { MatchService } from 'src/app/shared/match.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-scoreline',
  templateUrl: './update-scoreline.component.html',
  styleUrls: ['./update-scoreline.component.css']
})
export class UpdateScorelineComponent implements OnInit, OnDestroy, AfterViewInit {

  public scoreline = new Scoreline();
  public matches: Match[];
  public submitted = false;
  public message: string;
  public id: number;

  constructor(
    private scorelineService: ScorelineService,
    private matchService: MatchService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.scorelineService.getScoreline(id)
    .subscribe(scoreline => this.scoreline = scoreline);
    this.getMatches();
  }

  update(): void {
    this.submitted = true;
    this.scorelineService.updateScoreline(this.scoreline)
    .subscribe(() => this.message = 'Scoreline Updated Successfully!');
  }

  delete(): void {
    this.submitted = true;
    this.scorelineService.deleteScoreline(this.scoreline.id)
    .subscribe(() => this.message = 'Scoreline Deleted Successfully!');
  }

  goBack(): void {
    this.location.back();
  }

  getMatches(): Subscription {
    return this.matchService.getMatches()
    .subscribe(
      matches => {
        console.log(matches);
        this.matches = matches;
      });
 }

 ngAfterViewInit(): void {
    console.log('View loading complete.');
 }

 ngOnDestroy(): void {
    console.log('Destruction complete.');
 }
}
