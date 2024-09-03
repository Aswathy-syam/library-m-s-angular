import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMemberComponent } from './details-member.component';

describe('DetailsMemberComponent', () => {
  let component: DetailsMemberComponent;
  let fixture: ComponentFixture<DetailsMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsMemberComponent]
    });
    fixture = TestBed.createComponent(DetailsMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
