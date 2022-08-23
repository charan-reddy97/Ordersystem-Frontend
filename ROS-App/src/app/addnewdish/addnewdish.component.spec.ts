import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewdishComponent } from './addnewdish.component';

describe('AddnewdishComponent', () => {
  let component: AddnewdishComponent;
  let fixture: ComponentFixture<AddnewdishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewdishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewdishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
