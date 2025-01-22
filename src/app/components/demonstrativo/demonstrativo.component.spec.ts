import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstrativoComponent } from './demonstrativo.component';

describe('DemonstrativoComponent', () => {
  let component: DemonstrativoComponent;
  let fixture: ComponentFixture<DemonstrativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemonstrativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemonstrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
