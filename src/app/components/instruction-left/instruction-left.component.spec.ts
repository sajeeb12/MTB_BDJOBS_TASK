import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionLeftComponent } from './instruction-left.component';

describe('InstructionLeftComponent', () => {
  let component: InstructionLeftComponent;
  let fixture: ComponentFixture<InstructionLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructionLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructionLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
