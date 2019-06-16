import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizaComponent } from './localiza.component';

describe('LocalizaComponent', () => {
  let component: LocalizaComponent;
  let fixture: ComponentFixture<LocalizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
