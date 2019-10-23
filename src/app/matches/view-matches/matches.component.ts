import { Component, OnInit } from '@angular/core';
import { Match } from '../../shared/match.model';
import { MatchService } from '../../shared/match.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  public matches: Match[];

  constructor(public matchService: MatchService) {}

  ngOnInit(): void {
    this.getMatches();
  }

  getMatches(): Subscription {
    return this.matchService.getMatches()
    .subscribe(
      matches => {
        console.log(matches);
        this.matches = matches;
      });
 }
}
