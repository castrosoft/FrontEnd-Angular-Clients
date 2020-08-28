import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

private urlEndPoint: string = "http://localhost:8080/api/clientes";

private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  
 // getClientes(): Cliente[]{ 
//   return CLIENTES};
//  }
  
  getClientes(): Observable<Cliente[]>{
    //return of (CLIENTES);

    //Opcion 1 (optima). Debo castear porque me devuelve un Observable de tipo any (generico)
    return this.http.get<Cliente[]>(this.urlEndPoint);


    //Opcion 2
    /*
    return this.http.get(this.urlEndPoint).pipe(
      map( response => response as Cliente[])
    );
    */

    
    //Opcion 3, version larga de la 2
    /*
    return this.http.get(this.urlEndPoint).pipe(
      map( function(response) { return response as Cliente[]})
    );
    */
  }

  
  /**
   * 
   * @param cliente :objeto Cliente JSON
   * @returns: el objeto cliente que se creo en el API Rest
   */
  create(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders})
  }

}
