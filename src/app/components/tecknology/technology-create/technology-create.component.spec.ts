import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyCreateComponent } from './technology-create.component';

describe('TechnologyCreateComponent', () => {
  let component: TechnologyCreateComponent;
  let fixture: ComponentFixture<TechnologyCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnologyCreateComponent]
    });
    fixture = TestBed.createComponent(TechnologyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
