import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Building } from '../models/Building';
import { filter, concatMap } from 'rxjs/operators';

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
}
