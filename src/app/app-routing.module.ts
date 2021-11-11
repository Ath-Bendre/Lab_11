import { SpacexComponent } from './spacex/spacex.component';

import { TodoTableComponent } from './todo-table/todo-table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [

  {path:'list',component:TodoListComponent},
  {path:'table',component:TodoTableComponent},
  {path:'spacex',component:SpacexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
