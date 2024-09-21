import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionLayoutComponent } from './instruction-layout.component';

describe('InstructionLayoutComponent', () => {
  let component: InstructionLayoutComponent;
  let fixture: ComponentFixture<InstructionLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructionLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
