import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate.service';
import { VoteService } from 'src/app/services/vote.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})

export class VoteComponent implements OnInit {

  public title : string = "Voter";
  public candidates: any[] = [];
  public notes = [];
  public invalidForm: boolean = false;
  private electionId: number;
  public isLoading: boolean = false;

  public possibleNotes = [
    "À rejeter", 
    "Insuffisant", 
    "Passable", 
    "Assez bien", 
    "Bien", 
    "Très bien", 
    "Excellent"
  ];


  constructor(
    private activatedRoute: ActivatedRoute, 
    private candidateService: CandidateService,
    private voteService: VoteService
    ) {}

  async ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.electionId = params['electionId'];
    });

    let candidateCount = await this.candidateService.getCandidatesCount(this.electionId);

    for (let count = 0; count < candidateCount; count++) {
      this.candidates.push(
        await this.candidateService.getCandidate(this.electionId, count)
      );
    }

    for (const i in this.candidates) {
      this.notes[i] = -1;
    }
  }

  changeCandidateNote(event, candidateId){
    this.notes[candidateId] = parseInt(event.target.value);
  }

  formIsValid(){

    this.invalidForm = true;

    if(this.candidates.length !== this.notes.length){
      this.invalidForm = true;
      return false;
    }

    for (const note of this.notes) {
      if(note === -1 || note === null) {
        this.invalidForm = true;
        return false;
      }
    }

    this.invalidForm = false;
    return true;
  }

  async submit(){

    if(this.formIsValid()){

      this.isLoading = true;
      let responseStatus = await this.voteService.voteToElection(this.electionId, this.notes);
      this.isLoading = false;
      if(responseStatus){
        alert("Votre vote a bien été pris en compte !");
        location.replace('/');
      }
      else{
        alert("Votre vote n'a pas pu être pris en compte, recommencez plus tard");
        location.replace('/');
      }
    }
  }
}
