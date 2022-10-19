import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeplistComponent } from './deplist.component';

describe('DeplistComponent', () => {
  let component: DeplistComponent;
  let fixture: ComponentFixture<DeplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeplistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
