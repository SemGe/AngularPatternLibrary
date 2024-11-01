import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCopilotComponent } from './dropdown-copilot.component';

describe('DropdownCopilotComponent', () => {
  let component: DropdownCopilotComponent;
  let fixture: ComponentFixture<DropdownCopilotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownCopilotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownCopilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
