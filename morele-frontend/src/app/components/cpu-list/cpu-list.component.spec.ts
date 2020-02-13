import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuListComponent } from './cpu-list.component';

describe('CpuListComponent', () => {
  let component: CpuListComponent;
  let fixture: ComponentFixture<CpuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
