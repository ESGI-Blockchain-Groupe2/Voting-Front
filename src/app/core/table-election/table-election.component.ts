import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate.service';
import { ElectionFactoryService } from 'src/app/services/election-factory.service';
import { ElectionHelperService } from 'src/app/services/election-helper.service';
import { VoteService } from 'src/app/services/vote.service';

@Component({
  selector: 'app-table-election',
  templateUrl: './table-election.component.html',
  styleUrls: ['./table-election.component.scss']
})
export class TableElectionComponent implements OnInit {

  public title: string = "Liste des élections disponibles";
  public elections: any[] = [];
  public userIsAdmin: boolean = false;
  public isLoading: number = -1;
  public secondTourLoader: boolean = false;


  constructor(
    private router: Router, 
    private electionFactoryService : ElectionFactoryService,
    private electionHelperService: ElectionHelperService,
    private voteService: VoteService,
    private candidateService: CandidateService
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

  async vote(electionId){

    let alreadyVote = await this.voteService.userAlreadyVote(electionId);

    if(alreadyVote){
      alert("Vous avez déjà voté à cette élection");
    }
    else {
      this.router.navigate(['/vote'], {queryParams: {electionId: electionId}});
    }
  }

  seeResults(electionId){
    this.router.navigate(['/results'], {queryParams: {electionId: electionId}});
  }

  async closeElection(electionId){
    this.isLoading = electionId;
    await this.electionHelperService.endElection(electionId);

    let winnersId = await this.electionHelperService.getElectionWinners(electionId);
    
    if (winnersId.length > 1){
      let r = confirm("Il y a plusieurs vainqueurs ex aequo pour cette élection, voulez vous créer un second tour ?");
      if (r == true) {
        this.secondTourLoader = true;
        this.isLoading = -1;
        let winnersNames = [];

        for (const winnerId in winnersId) {
          let w = await this.candidateService.getCandidate(electionId, parseInt(winnerId, 10))
          winnersNames.push(w.name);
        }
        await this.electionFactoryService.createElection(this.elections[parseInt(electionId, 10)-1].title + " | Second tour", winnersNames);
        
        alert("Second tour crée !");
        this.secondTourLoader = false;
        location.reload();

      } else {
        location.reload();
        this.isLoading = -1;
      } 
    }
    else{
      location.reload();
      this.isLoading = -1;
    }
  }
}
