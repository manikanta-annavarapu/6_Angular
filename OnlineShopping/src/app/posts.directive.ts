import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[postStyle]'
})
export class PostsDirective {

  @Input() color:string = "lightyellow";
  constructor(public eleRef: ElementRef) { }

  ngOnInit(){
    this.eleRef.nativeElement.style.border = "2px solid red";
    this.eleRef.nativeElement.style.borderRadius = "5px";
    this.eleRef.nativeElement.style.padding = "10px";
    this.eleRef.nativeElement.style.margin = "20px";
    this.eleRef.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseenter') StyleOnMouseEnter(){
    this.eleRef.nativeElement.style.backgroundColor = "orange";
    this.eleRef.nativeElement.style.transform = "scale(1.05)";
    this.eleRef.nativeElement.style.cursor = "pointer";

  }

  @HostListener('mouseleave') StyleOnMouseLeaver(){
    this.eleRef.nativeElement.style.backgroundColor =this.color;
    this.eleRef.nativeElement.style.transform = "scale(1)";

    
  }

}
