import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-election',
  templateUrl: './create-election.component.html',
  styleUrls: ['./create-election.component.scss']
})
export class CreateElectionComponent implements OnInit {

  public title : string = "Créer une élection";
  public titleElection : string = "";
  public nbCandidates : number = 2;
  public candidateNames : string[] = [];
  public invalidForm: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  counter(i: number) {
    return new Array(i);
  }

  changeTitleElection(event){
    this.titleElection = event.target.value;
  }

  changeNbCandidates(event){
    this.nbCandidates = parseInt(event.target.value);
  }

  changeCandidateName(event, index){
    this.candidateNames[index] = event.target.value;

  }

  formIsValid(){

    this.invalidForm = true;

    if(this.titleElection.length === 0) {
      return false;
    }

    if(this.candidateNames.length !== this.nbCandidates){
      return false;
    }

    for (const name of this.candidateNames) {
      if(name.length === 0) {
        return false;
      }
    }

    this.invalidForm = false;
    return true;
  }

  submit(){

    if(this.formIsValid()){
      console.log("submit")
    }
  }

}
