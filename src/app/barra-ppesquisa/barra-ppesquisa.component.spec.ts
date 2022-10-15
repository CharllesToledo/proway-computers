import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPpesquisaComponent } from './barra-ppesquisa.component';

describe('BarraPpesquisaComponent', () => {
  let component: BarraPpesquisaComponent;
  let fixture: ComponentFixture<BarraPpesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraPpesquisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraPpesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
