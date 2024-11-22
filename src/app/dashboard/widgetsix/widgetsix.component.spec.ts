import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsixComponent } from './widgetsix.component';

describe('WidgetsixComponent', () => {
  let component: WidgetsixComponent;
  let fixture: ComponentFixture<WidgetsixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetsixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
