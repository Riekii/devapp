import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(
    private http: HttpClient
  ) { }

  public endpoint: String

  private extractData(res: Response): any {
    const body = res;
    return body;
  }

  getURL(url): Observable<any> {
    return this.http.get(url).pipe(
      map(this.extractData)
    );
  }


}
