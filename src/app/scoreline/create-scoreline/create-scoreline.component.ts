import { Component, OnInit } from '@angular/core';
import { ScorelineService } from 'src/app/shared/scoreline.service';
import { Scoreline } from 'src/app/shared/scoreline.model';
import { Location } from '@angular/common';
import { Match } from 'src/app/shared/match.model';
import { MatchService } from 'src/app/shared/match.service';

@Component({
  selector: 'app-create-scoreline',
  templateUrl: './create-scoreline.component.html',
  styleUrls: ['./create-scoreline.component.css']
})
export class CreateScorelineComponent implements OnInit {

  matches: Match[];
  scoreline = new Scoreline();
  submitted = false;

  constructor(
    public scorelineService: ScorelineService,
    public matchService: MatchService,
    public location: Location
  ) { }

  ngOnInit(): void {
    this.getMatches();
  }

  newScoreline(): void {
    this.submitted = false;
    this.scoreline = new Scoreline();
  }

 addScoreline() {
   this.submitted = true;
   this.save();
   window.location.reload();
 }

  goBack(): void {
    this.location.back();
  }

  public save(): void {
    this.scorelineService.addScoreline(this.scoreline)
        .subscribe();
  }

  getMatches() {
    return this.matchService.getMatches()
               .subscribe(
                 matches => {
                  console.log(matches);
                  this.matches = matches;
                 }
                );
 }

}
