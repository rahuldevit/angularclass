import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflixMainComponent } from './netflix-main.component';

describe('NetflixMainComponent', () => {
  let component: NetflixMainComponent;
  let fixture: ComponentFixture<NetflixMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetflixMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetflixMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
