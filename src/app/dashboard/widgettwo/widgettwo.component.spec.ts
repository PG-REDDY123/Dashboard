import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgettwoComponent } from './widgettwo.component';

describe('WidgettwoComponent', () => {
  let component: WidgettwoComponent;
  let fixture: ComponentFixture<WidgettwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgettwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgettwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
