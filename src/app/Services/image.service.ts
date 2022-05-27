import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url:string = "https://jsonplaceholder.typicode.com/photos";
  constructor(private http:HttpClient) { }
  Image(){
    return this.http.get(this.url);
  }
}
