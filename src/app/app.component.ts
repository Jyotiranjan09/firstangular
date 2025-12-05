import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // selector: '.app-root',
  // selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // intrerpolation
  title = 'firstangular';


  // property binding
  imageurl='assets/image.pnghhjhbjjjjjjjjjjjjjjjjjjjjj'


  //event binding
    showMessage(){
    alert('Button clicked!');
  }

  //two way data binding
  name:any="";

  // Structural Directives
  // *ngIf
  message=true;

  //*ngFor
  fruits=["Apple","Banana","Mango"];

  //*ngSwitch
  day="Monday";

  //attribute directive
  isHighlighted=true;
  textColor='blue';

}
