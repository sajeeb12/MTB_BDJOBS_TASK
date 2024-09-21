import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionMainComponent } from './instruction-main.component';

describe('InstructionMainComponent', () => {
  let component: InstructionMainComponent;
  let fixture: ComponentFixture<InstructionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructionMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
