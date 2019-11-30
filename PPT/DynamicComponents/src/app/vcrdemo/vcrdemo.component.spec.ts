import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcrdemoComponent } from './vcrdemo.component';

describe('VcrdemoComponent', () => {
  let component: VcrdemoComponent;
  let fixture: ComponentFixture<VcrdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcrdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcrdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
