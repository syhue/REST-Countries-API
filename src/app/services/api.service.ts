import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  route = "https://restcountries.eu/rest/v2/";

  getData(): Observable<any[]>{
 
    return this.http.get<any[]>(this.route)
  }

  getRegion(region: string) {

    return this.http.get(this.route + 'region/'+ region)
  }
  
  getName(name: string) {
    
    return this.http.get(this.route + 'name/'+ name)
  }
}
