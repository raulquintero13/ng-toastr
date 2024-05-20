import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxComponent } from './ngx.component';

describe('NgxComponent', () => {
  let component: NgxComponent;
  let fixture: ComponentFixture<NgxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxComponent]
    });
    fixture = TestBed.createComponent(NgxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
