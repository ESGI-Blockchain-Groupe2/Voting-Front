import { Component, Input, OnInit } from '@angular/core';
import { Election } from 'src/app/models/election';

@Component({
  selector: 'app-table-election',
  templateUrl: './table-election.component.html',
  styleUrls: ['./table-election.component.scss']
})
export class TableElectionComponent implements OnInit {

  @Input() public title: string;
  @Input() public elections: any[];

  constructor() {
  }

  ngOnInit(): void {
    console.table(this.elections)

  }
  

}
