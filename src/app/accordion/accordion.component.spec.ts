import { TestBed } from '@angular/core/testing';
import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionComponent], // Hier importieren wir die Komponente als standalone
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AccordionComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
