import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFormComponent } from './auto-form.component';

describe('AutoFormComponent', () => {
  let component: AutoFormComponent;
  let fixture: ComponentFixture<AutoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
