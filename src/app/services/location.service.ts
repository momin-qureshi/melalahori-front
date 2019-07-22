import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {Location} from '../models/location';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { 
  }
  getCatalogue(){
    return this.http.get<Location[]>('http://localhost:3000/api/location').pipe();
  }
  getAlbum(id){
    return this.http.get<Location>('http://localhost:3000/api/album/'+id).pipe();
  }

  searchByFilter(type, tag, location){
    return this.http.get<Location[]>('http://localhost:3000/api/location/' + type + '/' + tag + '/' + location).pipe();
  }

  addToCatalogue(newItem: any){
    console.log(newItem);
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/location', newItem, {headers: headers});
  }

  addTag(newItem : any){
    console.log(newItem);
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/addTag', newItem, {headers: headers});
  }

  deleteItem(id){
    return this.http.delete('http://localhost:3000/api/location/'+id);
  }
}
