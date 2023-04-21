import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflixHeaderComponent } from './netflix-header.component';

describe('NetflixHeaderComponent', () => {
  let component: NetflixHeaderComponent;
  let fixture: ComponentFixture<NetflixHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetflixHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetflixHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
