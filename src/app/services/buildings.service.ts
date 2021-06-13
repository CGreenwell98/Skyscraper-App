import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Building } from '../models/Building';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class BuildingsService {
  private apiUrl =
    'https://5e7ueo56jd.execute-api.eu-west-2.amazonaws.com/prod';

  constructor(private http: HttpClient) {}

  getBuildings(): Observable<Building[]> {
    return this.http
      .get<any>(`${this.apiUrl}/all-buildings`)
      .pipe(map((items) => items.Items));
  }

  // getBuilding(id: number): Observable<Building> {
  //   // return this.http.get<Building[]>(this.apiUrl).pipe(
  //   //   concatMap((items) => items.Item)
  //   // );
  // }

  searchBuildings(query: any): Observable<Building[]> {
    const params = new HttpParams().set('search', query).set('limit', '15');
    return this.http
      .get<any>(`${this.apiUrl}/all-buildings?${params}`)
      .pipe(map((items) => items.Items));
  }

  addBuilding(building: Building): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/building`,
      building,
      httpOptions
    );
  }
}
