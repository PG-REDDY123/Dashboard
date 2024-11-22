import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetoneComponent } from './widgetone.component';

describe('WidgetoneComponent', () => {
  let component: WidgetoneComponent;
  let fixture: ComponentFixture<WidgetoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
