import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
 count=0
 /*handleIncrement(){
  this.count=this.count+1
 }
 handleDecrement(){
  this.count=this.count-1
 }
 reset(){
  this.count=0
 }
*/
 handleCounter(val:string){
if (val=='minus'){
  if(this.count==0){
    this.count=0
  }
  else{
  this.count=this.count-1
}
}
else if (val=='plus'){
  this.count=this.count+1
}
else{
  this.count=0
}
 }
}
