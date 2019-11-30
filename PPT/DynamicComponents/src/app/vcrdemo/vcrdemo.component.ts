import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-vcrdemo',
  templateUrl: './vcrdemo.component.html',
  styleUrls: ['./vcrdemo.component.css']
})
export class VcrdemoComponent  {

  @ViewChild('tpl', { static:true} ) tpl;
  constructor(public  _vcr: ViewContainerRef) {
  }
  
  ngAfterViewInit() {
    console.log("hello")
    this._vcr.createEmbeddedView(this.tpl);
  }

}
