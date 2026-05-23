import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListaUsuariosComponent } from './lista.usuarios/lista.usuarios.component';
import { FormularioUsuariosComponent } from './formulario-usuarios/formulario-usuarios.component';

@NgModule({
  declarations: [
    ListaUsuariosComponent,
    FormularioUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ],
  exports: [
    FormularioUsuariosComponent 
  ]
})
export class UsuariosModule { }
