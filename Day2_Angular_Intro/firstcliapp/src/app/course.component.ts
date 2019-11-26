import {Component, Input} from '@angular/core';

@Component({
    selector: 'course',
    template: '<h2>{{name}}<h2>'
})

export class CourseComponent{
   @Input() name: string ="React"
}