import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableElectionComponent } from './table-election.component';

describe('TableComponent', () => {
  let component: TableElectionComponent;
  let fixture: ComponentFixture<TableElectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableElectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
