import { Component, OnInit } from '@angular/core';
import { Match } from '../shared/match.model';
import { MatchService } from '../shared/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: Match[];


  constructor(public matchService: MatchService) {}

  ngOnInit(): void {
     this.getMatches();
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
