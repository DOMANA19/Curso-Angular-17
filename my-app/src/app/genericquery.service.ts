import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericqueryService {

  constructor(
    private http:HttpClient) { 
    
  }
  getAll<T>():Promise<T>{
    return lastValueFrom(this.http.get<T>("https://didactic-enigma-jjgqpqq79x52p4v4-3000.app.github.dev/posts") )
  }
}
