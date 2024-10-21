import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private apiUrl = 'https://api.github.com/users/claudioeberle';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getAvatarUrl(): Observable<string> {
    return this.getData().pipe(
      map(data => data.avatar_url)
    );
  }

  getBio(): Observable<string> {
    return this.getData().pipe(
      map(data => data.bio)
    );
  }

  getName(): Observable<string> {
    return this.getData().pipe(
      map(data => data.name)
    );
  }
}
