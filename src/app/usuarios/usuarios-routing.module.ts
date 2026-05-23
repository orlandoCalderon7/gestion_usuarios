import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista.usuarios/lista.usuarios.component';

const routes: Routes = [
  { path: '', component: ListaUsuariosComponent } // Ruta por defecto del módulo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
