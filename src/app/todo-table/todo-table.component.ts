import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {
  public temp:any = []
  constructor(public todoInfo: ServService) { }

  ngOnInit(): void {
    this.temp = this.todoInfo.getTodo();
  }

}
