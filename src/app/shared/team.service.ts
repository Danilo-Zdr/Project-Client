import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from './team.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  public formData: Team;
  public teamsUrl = 'http://localhost:8080/api/teams';
  constructor(
    public http: HttpClient
  ) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsUrl);
  }

  getTeam(id: number): Observable<Team> {
    const url = `${this.teamsUrl}/${id}`;
    return this.http.get<Team>(url);
  }

  addTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(this.teamsUrl, team, httpOptions);
  }

  deleteTeam(team: Team | number): Observable<Team> {
    const id = typeof team === 'number' ? team : team.id;
    const url = `${this.teamsUrl}/${id}`;

    return this.http.delete<Team>(url, httpOptions);
  }

  updateTeam(team: Team): Observable<any> {
    return this.http.put(this.teamsUrl, team, httpOptions);
  }
}
