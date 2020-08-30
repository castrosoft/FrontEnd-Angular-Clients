import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service'
import Swal from 'sweetalert2';



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

  delete(cliente: Cliente): void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: `Are you sure to delete client ${cliente.nombre} ${cliente.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.clienteService.delete(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli !== cliente)
            Swal.fire(
              'Cliente eliminado!',
              `Cliente ${cliente.nombre} eliminado con exito`,
              'success'
            )
          } 
        )
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } 
    })
  }

}
