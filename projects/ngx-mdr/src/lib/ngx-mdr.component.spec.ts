import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMdrComponent } from './ngx-mdr.component';

describe('NgxMdrComponent', () => {
  let component: NgxMdrComponent;
  let fixture: ComponentFixture<NgxMdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMdrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
