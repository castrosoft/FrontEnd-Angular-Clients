import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { DirectivaComponent } from './directiva/directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes/clientes.component';

import { RouterModule, Routes } from '@angular/router';
import { ClienteService } from './clientes/clientes/cliente.service';

import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/clientes/form.component'
import { FormsModule } from '@angular/forms'

const routes: Routes = [
  {path:'', redirectTo: '/clientes', pathMatch:'full'},
  {path:'directivas', component: DirectivaComponent},
  {path:'clientes', component: ClientesComponent},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes/form/:id', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
