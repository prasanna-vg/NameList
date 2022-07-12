import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NamerService {

  constructor(private http:HttpClient) { }

  getNames(){
    return this.http.get('http://localhost:3000/api/names').pipe(map(res => res));
    //return this.http.get('api/names').pipe(map(res => res));
  }

  addName(newName: any){
    var httpHeader = new HttpHeaders();
    httpHeader.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/name',newName,{headers:httpHeader}).pipe(map(res => res));
    //return this.http.post('api/name',newName,{headers:httpHeader}).pipe(map(res => res));
  }

  deleteName(id: any){
    return this.http.delete('http://localhost:3000/api/name/'+id).pipe(map(res => res));
    //return this.http.delete('api/name/'+id).pipe(map(res => res));
  }
}
