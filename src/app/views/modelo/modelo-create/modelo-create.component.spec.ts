import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloCreateComponent } from './modelo-create.component';

describe('ModeloCreateComponent', () => {
  let component: ModeloCreateComponent;
  let fixture: ComponentFixture<ModeloCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
