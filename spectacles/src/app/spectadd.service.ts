import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Spectacles } from './spectacles/Spectacles';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpectAddService {
   _url="http://localhost:8089/spect/api/v1/insert";
  constructor(private http:HttpClient) { }
  add(body:Spectacles):Observable<Spectacles>{
   return this.http.post<Spectacles>(this._url,body);
  }
}
