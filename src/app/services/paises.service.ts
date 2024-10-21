import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private apiUrl = 'https://restcountries.com/v3.1/all';
  private regionUrl = 'https://restcountries.com/v3.1/region';
  private apiUrlbyName = 'https://restcountries.com/v3.1/name/{name}';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getByRegion(region: string): Observable<any> {
    const url = `${this.regionUrl}/${region}`;
    return this.http.get<any>(url);
  }

  getPaisporNombre(nombre: string): Observable<any> {
    return this.getData().pipe(
      map((paises: any[]) => {
        return paises.find(pais => pais.translations?.spa?.common.toLowerCase() === nombre.toLowerCase());
      })
    );
  }

}