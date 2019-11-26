import {Component, Input} from '@angular/core';

@Component({
    selector: 'course',
    template: '<h2>{{name}}<h2>'
})

export class CourseComponent{
   @Input('courseName') name: string ="React" //here coursename is alias name from 'name' variable
}