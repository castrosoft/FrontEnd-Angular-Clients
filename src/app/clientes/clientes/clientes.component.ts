import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service'


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  //Forma alternativa
  /*
  constructor(private clienteService: ClienteService) { 
    this.clienteService = clienteService;
  }
  */

  ngOnInit(): void {
    //this.clientes = this.clienteService.getClientes();

    this.clienteService.getClientes().subscribe(
      (clientes) => this.clientes = clientes
    );
    
//Version extendida de la funcion anterior
    /*
        this.clienteService.getClientes().subscribe(
          function (clientes){
            this.clientes = clientes
          }
        );
    */

  }

}
