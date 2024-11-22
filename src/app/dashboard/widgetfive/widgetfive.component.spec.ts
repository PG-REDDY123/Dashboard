import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetfiveComponent } from './widgetfive.component';

describe('WidgetfiveComponent', () => {
  let component: WidgetfiveComponent;
  let fixture: ComponentFixture<WidgetfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetfiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
