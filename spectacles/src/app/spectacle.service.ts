import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Spectacles} from './spectacles/Spectacles';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpectacleService {
  private _url="http://localhost:8089/spect/api/v1";
  constructor(private http:HttpClient){}
  getSpects():Observable<Spectacles[]>{
    return this.http.get<Spectacles[]>(this._url+'/getAll');
}
//update the data
update(body:Spectacles):Observable<Spectacles>{
  return this.http.put<Spectacles>(this._url+'/update',body);
} 
delete(id:Spectacles):Observable<Spectacles>{
  return this.http.delete<Spectacles>(this._url+'/delete'+'/'+id);
}
}
