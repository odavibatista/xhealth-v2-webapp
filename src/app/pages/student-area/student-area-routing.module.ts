import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAreaComponent } from './student-area.component';

const routes: Routes = [{ path: '', component: StudentAreaComponent, title: 'XHealth - Área do Aluno' }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentAreaRoutingModule { }