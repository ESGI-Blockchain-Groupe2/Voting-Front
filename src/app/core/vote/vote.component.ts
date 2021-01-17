import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})

export class VoteComponent implements OnInit {

  public title : string = "Voter";
  public candidates = [];
  public notes = [];
  public invalidForm: boolean = false;

  public possibleNotes = [
    "À rejeter", 
    "Insuffisant", 
    "Passable", 
    "Assez bien", 
    "Bien", 
    "Très bien", 
    "Excellent"
  ];


  constructor() {
    this.candidates = [
      "Jean",
      "Eudes",
      "Marc",
      "Daniel"
    ]

    for (const i in this.candidates) {
      this.notes[i] = -1;
    }
   }

  ngOnInit(): void {
  }

  changeCandidateNote(event, candidateId){
    this.notes[candidateId] = parseInt(event.target.value);
    console.log(this.notes);
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

  submit(){

    if(this.formIsValid()){
      console.log("submit");
      console.log(this.notes);
    }
  }

}
