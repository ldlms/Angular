import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogControlCenterComponent } from './blog-control-center.component';

describe('BlogControlCenterComponent', () => {
  let component: BlogControlCenterComponent;
  let fixture: ComponentFixture<BlogControlCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogControlCenterComponent]
    });
    fixture = TestBed.createComponent(BlogControlCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
