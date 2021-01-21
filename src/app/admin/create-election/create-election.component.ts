import { Component, OnInit } from '@angular/core';
import { ElectionFactoryService } from 'src/app/services/election-factory.service';

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
  public isLoading: boolean = false;

  constructor(private electionFactoryService : ElectionFactoryService) { }

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

  async submit(){
    if(this.formIsValid()){
      this.isLoading = true;
      let responseStatus = await this.electionFactoryService.createElection(this.titleElection, this.candidateNames);
      this.isLoading = false;
      if(responseStatus){
        alert("Votre élection à bien été créee !");
        location.replace('/');
      }
      else{
        alert("La création a échouée, recommencez plus tard");
        location.replace('/');
      }
    }
  }

}
