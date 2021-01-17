import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.scss']
})
export class ManageAdminComponent implements OnInit {

  public title : string = "Gérer les administrateurs";
  public address : string = "";
  public invalidForm: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeAddress(event){
    this.address = event.target.value;
  }

  formIsValid(){

    this.invalidForm = true;

    if(this.address.length === 0) {
      return false;
    }

    this.invalidForm = false;
    return true;
  }

  submitDelete(){

    if(this.formIsValid()){
      console.log("submit")
    }
  }

  submitAdd(){

    if(this.formIsValid()){
      console.log("submit")
    }
  }

}
