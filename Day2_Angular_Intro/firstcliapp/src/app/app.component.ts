import { Component } from '@angular/core';
import { Course} from './course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstcliapp';
  imageUrl:string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";
  courses:Course[]=[new Course("Java",234,'1 day',"pune"),
  new Course("#c++",600,'2 weeks','Goa'),
 new Course("c",555,'3 weeks','Mumbai')];
}
