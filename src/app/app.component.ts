import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users = ["Anil","Sam","Bruce","Tony"]
  name=''
  students= [
    {name:'Anil',age:20,email:'anil@gmail.com'},
    {name:'Sam',age:22,email:'sam@gmail.com'},
    {name:'Bruce',age:27,email:'bruce@gmail.com'},
    {name:'Tony',age:21,email:'tony@gmail.com'},
  ]

  getname(name:string){
   console.log(name)
  }
}