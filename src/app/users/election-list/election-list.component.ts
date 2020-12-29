import { Component, OnInit } from '@angular/core';
import { Election } from 'src/app/models/election';

@Component({
  selector: 'app-election-list',
  templateUrl: './election-list.component.html',
  styleUrls: ['./election-list.component.scss']
})
export class ElectionListComponent implements OnInit {

  elections: any[];

  constructor() { }

  ngOnInit(): void {
    this.elections = [
      {
        title: "test",
        nbTotalVoters: 3,
        isOpen: true,
        creationDate: "12-12-2020",
        expiresAfter: "12-12-2020",
      },
      {
        title: "test2",
        nbTotalVoters: 32,
        isOpen: false,
        creationDate: "12-12-2020",
        expiresAfter: "12-12-2020",
      },
      {
        title: "test2",
        nbTotalVoters: 32,
        isOpen: false,
        creationDate: "12-12-2020",
        expiresAfter: "12-12-2020",
      },
      {
        title: "test2",
        nbTotalVoters: 32,
        isOpen: false,
        creationDate: "12-12-2020",
        expiresAfter: "12-12-2020",
      },
      {
        title: "test2",
        nbTotalVoters: 32,
        isOpen: false,
        creationDate: "12-12-2020",
        expiresAfter: "12-12-2020",
      },
    ];
  }

}
