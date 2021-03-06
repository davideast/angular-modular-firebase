import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardList } from './usercardlist.component';

describe('UsercardlistComponent', () => {
  let component: UserCardList;
  let fixture: ComponentFixture<UserCardList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
