import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorySearchInputComponent } from './repository-search-input.component';

describe('RepositorySearchInputComponent', () => {
  let component: RepositorySearchInputComponent;
  let fixture: ComponentFixture<RepositorySearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositorySearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorySearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
