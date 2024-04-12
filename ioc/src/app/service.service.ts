import { Inject, Injectable, inject } from '@angular/core';
import { URLAPI } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  a = 0;
  //urlApi = ''; //inject(URLAPI)
  constructor(
    @Inject(URLAPI) private urlApi:string
  ) {
    //this.urlApi = inject(URLAPI);
    //console.log("Service");
    console.log(this.urlApi)
    //this.writer();
   }
   writer(){
    this.urlApi = inject(URLAPI);
    console.log("Service");
    console.log(this.urlApi);
   }
}
