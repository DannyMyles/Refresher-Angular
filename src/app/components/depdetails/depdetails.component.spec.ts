import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepdetailsComponent } from './depdetails.component';

describe('DepdetailsComponent', () => {
  let component: DepdetailsComponent;
  let fixture: ComponentFixture<DepdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
