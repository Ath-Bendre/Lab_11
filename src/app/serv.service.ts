import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServService {
  public list = [
    {"Serial":1,"ToDo":"Lab 9"},
    {"Serial":2,"ToDo":"Lab 10"},
    {"Serial":3,"ToDo":"Lab 11"},
    {"Serial":4,"ToDo":"Quiz"},
    {"Serial":5,"ToDo":"Assignment"}
  ]

  getTodo(){
    return this.list;
  }
  constructor() { }
}
