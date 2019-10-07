import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from './match.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MatchService {
    formData: Match;
  public matchesUrl = 'http://localhost:8080/api/matches';  // URL to web api
  constructor(
    public http: HttpClient
  ) { }

  getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.matchesUrl);
  }

  getMatch(id: number): Observable<Match> {
    const url = `${this.matchesUrl}/${id}`;
    return this.http.get<Match>(url);
  }

  addMatch(match: Match): Observable<Match> {
    return this.http.post<Match>(this.matchesUrl, match, httpOptions);
  }

  deleteMatch(match: Match | number): Observable<Match> {
    const id = typeof match === 'number' ? match : match.id;
    const url = `${this.matchesUrl}/${id}`;

    return this.http.delete<Match>(url, httpOptions);
  }

  updateMatch(match: Match): Observable<any> {
    return this.http.put(this.matchesUrl, match, httpOptions);
  }
}
