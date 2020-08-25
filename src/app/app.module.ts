import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { DirectivaComponent } from './directiva/directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes/clientes.component';

import { RouterModule, Routes } from '@angular/router';
import { ClienteService } from './clientes/clientes/cliente.service';

const routes: Routes = [
  {path:'', redirectTo: '/clientes', pathMatch:'full'},
  {path:'directivas', component: DirectivaComponent},
  {path:'clientes', component: ClientesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
