import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstcliapp';
  imageUrl:string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";
  course1:any={name:"c#",price:250,duration:'1 week',city:'pune'};
  course2:any={name:"#c++",price:600,duration:'2 weeks',city:'Goa'};
  course3:any={name:"c",price:555,duration:'3 weeks',city:'Mumbai'};
}
