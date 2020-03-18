import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
const baseUrl = "http://localhost:3000/api/"

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  constructor(private http: HttpClient) {  }


public execute (api,params): Observable<object> { 
    return this.http.get(baseUrl+api,{params});
  }

}
