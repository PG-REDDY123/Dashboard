import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetthreeComponent } from './widgetthree.component';

describe('WidgetthreeComponent', () => {
  let component: WidgetthreeComponent;
  let fixture: ComponentFixture<WidgetthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetthreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
