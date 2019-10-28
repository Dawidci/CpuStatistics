import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCpuListComponent } from './show-cpu-list.component';

describe('ShowCpuListComponent', () => {
  let component: ShowCpuListComponent;
  let fixture: ComponentFixture<ShowCpuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCpuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCpuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
