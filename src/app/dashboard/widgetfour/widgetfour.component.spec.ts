import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetfourComponent } from './widgetfour.component';

describe('WidgetfourComponent', () => {
  let component: WidgetfourComponent;
  let fixture: ComponentFixture<WidgetfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetfourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
