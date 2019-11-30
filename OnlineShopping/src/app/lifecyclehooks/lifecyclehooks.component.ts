import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit,OnChanges, DoCheck {

  @Input() msg:string;
  constructor() {
    console.log("Inside Constructor : "+this.msg);
   }

  ngOnInit() {
    console.log("Inside ngOnInit : "+this.msg);
  }

  ngOnChanges(){
    console.log("Inside ngOnChanges : "+this.msg);
  }

  ngDoCheck() {
    console.log("Inside ngDoCheck : "+this.msg);
  }

  ngAfterContentInit() {
    console.log("Inside ngAfterContentInit : "+this.msg);
  }

}
