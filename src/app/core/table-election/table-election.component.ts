import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Election } from 'src/app/models/election';

@Component({
  selector: 'app-table-election',
  templateUrl: './table-election.component.html',
  styleUrls: ['./table-election.component.scss']
})
export class TableElectionComponent implements OnInit {

  public title: string = "Liste des élections disponibles";
  public elections: any[];


  constructor(private router: Router) {
  }

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

  createElection() {
    this.router.navigateByUrl('/admin-election');
  }

  manageAdmin(){
    this.router.navigateByUrl('/manage-admin');
  }

  vote(){
    this.router.navigateByUrl('/vote');
  }

  seeResults(){
    this.router.navigateByUrl('/results');
  }

  closeElection(){
    //appeler la fonction du contrat
  }

  

}
