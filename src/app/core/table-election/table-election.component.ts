import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Election } from 'src/app/models/election';
import { ElectionFactoryService } from 'src/app/services/election-factory.service';
import { ElectionHelperService } from 'src/app/services/election-helper.service';

@Component({
  selector: 'app-table-election',
  templateUrl: './table-election.component.html',
  styleUrls: ['./table-election.component.scss']
})
export class TableElectionComponent implements OnInit {

  public title: string = "Liste des élections disponibles";
  public elections: any[] = [];
  public userIsAdmin: boolean = false;$
  public isLoading: boolean = false;


  constructor(
    private router: Router, 
    private electionFactoryService : ElectionFactoryService,
    private electionHelperService: ElectionHelperService
    ) {
  }

  async ngOnInit(): Promise<void> {
    this.userIsAdmin = await this.electionFactoryService.isUserAdmin();

    let electionCount = await this.electionFactoryService.getElectionCount();

    for (let count = 1; count <= electionCount; count++) {
      let election = await this.electionFactoryService.getElection(count);
      this.elections.push(election);
    }
  }

  createElection() {
    this.router.navigateByUrl('/admin-election');
  }

  manageAdmin(){
    this.router.navigateByUrl('/manage-admin');
  }

  vote(electionId){
    this.router.navigate(['/vote'], {queryParams: {electionId: electionId}});
  }

  seeResults(electionId){
    this.router.navigate(['/results'], {queryParams: {electionId: electionId}});
  }

  async closeElection(electionId){
    this.isLoading = true;
    await this.electionHelperService.endElection(electionId);
    location.reload();
    this.isLoading = false;
  }
}
