import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Building } from '../models/Building';
import { filter, concatMap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class BuildingsService {
  private apiUrl = 'http://localhost:5000/buildings';

  constructor(private http: HttpClient) {}

  getBuildings(): Observable<Building[]> {
    return this.http.get<Building[]>(this.apiUrl);
  }

  getBuilding(id: number): Observable<Building> {
    return this.http.get<Building[]>(this.apiUrl).pipe(
      concatMap((items) => items),
      filter((item) => item.id === id)
    );
  }

  searchBuildings(query: any): Observable<Building[]> {
    return this.http
      .get<Building[]>(this.apiUrl)
      .pipe(
        map((items) =>
          items.filter((item) => item.name.toLowerCase().includes(query))
        )
      );
  }

  addBuilding(building: Building): Observable<Building> {
    return this.http.post<Building>(this.apiUrl, building, httpOptions);
  }
}
