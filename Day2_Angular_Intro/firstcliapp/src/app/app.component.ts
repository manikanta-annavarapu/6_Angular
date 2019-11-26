import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstcliapp';
  course1:any={name:"c#",price:250};
  course2:any={name:"#c++",price:600};
  course3:any={name:"c",price:555};
}
