import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoReadmeComponent } from './repo-readme.component';

describe('RepoReadmeComponent', () => {
  let component: RepoReadmeComponent;
  let fixture: ComponentFixture<RepoReadmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoReadmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoReadmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
