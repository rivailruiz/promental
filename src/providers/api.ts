import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Api provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable(  )
export class ApiService {

  data: any;

  constructor(public http: Http) {
    // console.log('Hello Api Provider');
  }

  // POST de dados
   enviaDados(dados) {
   if (this.data) {
     // already loaded data
     return Promise.resolve(this.data);
   }

   // don't have the data yet
   return new Promise(resolve => {
     // We're using Angular HTTP provider to request the data,
     // then on the response, it'll map the JSON data to a parsed JS object.
     // Next, we process the data and resolve the promise with the new data.
     this.http.post('http://fipeapi.appspot.com/api/1/carros/marcas.json', dados)
       .map(res => res.json())
       .subscribe(data => {
         // we've got back the raw data, now generate the core schedule data
         // and save the data for later reference
         this.data = data;
         resolve(this.data);
       });
   });
 }



  // Get pergunta
   getPergunta() {
   if (this.data) {
     // already loaded data
     return Promise.resolve(this.data);
   }

   // don't have the data yet
   return new Promise(resolve => {
     // We're using Angular HTTP provider to request the data,
     // then on the response, it'll map the JSON data to a parsed JS object.
     // Next, we process the data and resolve the promise with the new data.
     this.http.get('http://localhost:3000/perguntas/')
       .map(res => res.json())
       .subscribe(data => {
         // we've got back the raw data, now generate the core schedule data
         // and save the data for later reference
         this.data = data;
         resolve(this.data);
       });
   });
 }
 

}
