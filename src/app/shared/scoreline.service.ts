import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Scoreline } from './scoreline.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ScorelineService {
    public formData: Scoreline;
    public scorelinesUrl = 'http://localhost:8080/api/scorelines';
    constructor(
      public http: HttpClient
    ) { }

  getScorelines(): Observable<Scoreline[]> {
    return this.http.get<Scoreline[]>(this.scorelinesUrl);
  }

  getScoreline(id: number): Observable<Scoreline> {
    const url = `${this.scorelinesUrl}/${id}`;
    return this.http.get<Scoreline>(url);
  }

  addScoreline(scoreline: Scoreline): Observable<Scoreline> {
    return this.http.post<Scoreline>(this.scorelinesUrl, scoreline, httpOptions);
  }

  deleteScoreline(scoreline: Scoreline | number): Observable<Scoreline> {
    const id = typeof scoreline === 'number' ? scoreline : scoreline.id;
    const url = `${this.scorelinesUrl}/${id}`;

    return this.http.delete<Scoreline>(url, httpOptions);
  }

  updateScoreline(scoreline: Scoreline): Observable<any> {
    return this.http.put(this.scorelinesUrl, scoreline, httpOptions);
  }
}
