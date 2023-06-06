import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularInitComponent } from './angular-init.component';

describe('AngularInitComponent', () => {
  let component: AngularInitComponent;
  let fixture: ComponentFixture<AngularInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularInitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
