import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
 name=""
 displayName=""
 email=""
 getName(event:Event){
  this.name=(event.target as HTMLInputElement).value
  
 }

 showName(){
  this.displayName=this.name;
 }

 setName(){
  this.name ="sam"
 }
 getEmail(val:string){
console.log(val);
this.email=val;
 }

 setEmail(){
  this.email ="bisarwal@gmail.com"
 }
}