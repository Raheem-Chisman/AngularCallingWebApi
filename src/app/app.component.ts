import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface TodoItem  {
  id: number;
  name: string;
  isComplete:boolean;
}

@Component(
  {  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {    
  todoItems: TodoItem[]= [];   
    constructor(private http: HttpClient) { }  
  async onclickme(){
    await this.http.get('http://b2cwebapirestendpoint.azurewebsites.net/api/TodoItems')      
    .toPromise().then(p=>this.todoItems = JSON.parse(JSON.stringify(p)));          
  }
}


