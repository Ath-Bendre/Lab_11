import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoTableComponent } from './todo-table/todo-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { ServService } from './serv.service';
import { HttpClientModule } from '@angular/common/http';
import { SpacexComponent } from './spacex/spacex.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoTableComponent,
    SpacexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [ServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
