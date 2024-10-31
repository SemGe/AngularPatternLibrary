import { TestBed } from '@angular/core/testing';
import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownComponent], // Hier importieren wir die Komponente als standalone
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DropdownComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
