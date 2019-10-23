import { Component, OnInit } from '@angular/core';
import { ScorelineService } from '../../shared/scoreline.service';
import { Scoreline } from '../../shared/scoreline.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-scoreline',
  templateUrl: './scoreline.component.html',
  styleUrls: ['./scoreline.component.css']
})
export class ScorelineComponent implements OnInit {

  public scorelines: Scoreline[];

  constructor(public scorelineService: ScorelineService) {}

  ngOnInit(): void {
     this.getScorelines();
  }

  getScorelines(): Subscription {
    return this.scorelineService.getScorelines()
    .subscribe(
      scorelines => {
      console.log(scorelines);
      this.scorelines = scorelines;
    });
 }
}
