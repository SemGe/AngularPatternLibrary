import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTextfieldComponent } from './button-textfield.component';

describe('ButtonTextfieldComponent', () => {
  let component: ButtonTextfieldComponent;
  let fixture: ComponentFixture<ButtonTextfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonTextfieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
