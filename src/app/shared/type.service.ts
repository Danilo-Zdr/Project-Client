import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Type } from './type.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TypeService {
    formData: Type;
  public typesUrl = 'http://localhost:8080/api/types';  // URL to web api
  constructor(
    public http: HttpClient
  ) { }

  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.typesUrl);
  }

  getType(id: number): Observable<Type> {
    const url = `${this.typesUrl}/${id}`;
    return this.http.get<Type>(url);
  }

  addType(type: Type): Observable<Type> {
    return this.http.post<Type>(this.typesUrl, type, httpOptions);
  }

  deleteType(type: Type | number): Observable<Type> {
    const id = typeof type === 'number' ? type : type.id;
    const url = `${this.typesUrl}/${id}`;

    return this.http.delete<Type>(url, httpOptions);
  }

  updateType(type: Type): Observable<any> {
    return this.http.put(this.typesUrl, type, httpOptions);
  }
}
