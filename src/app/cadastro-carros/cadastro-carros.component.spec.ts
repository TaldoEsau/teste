import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCarrosComponent } from './cadastro-carros.component';

describe('CadastroCarrosComponent', () => {
  let component: CadastroCarrosComponent;
  let fixture: ComponentFixture<CadastroCarrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroCarrosComponent]
    });
    fixture = TestBed.createComponent(CadastroCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
