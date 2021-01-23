import { Component, OnInit } from '@angular/core';
import { ElectionFactoryService } from 'src/app/services/election-factory.service';
import { OwnableService } from 'src/app/services/ownable.service';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.scss']
})
export class ManageAdminComponent implements OnInit {

  public title : string = "Gérer les administrateurs";
  public address : string = "";
  public invalidForm: boolean = false;
  public isLoadingDelete: boolean = false;
  public isLoadingCreate: boolean = false;

  constructor(
    private electionFactoryService: ElectionFactoryService,
    private ownableService: OwnableService
    ) { }

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

  async submitDelete(){

    let isOwner = await this.ownableService.isOwner(this.address);

    if(isOwner){
      alert("Vous ne pouvez pas supprimer le propriétaire de l'application");
    }
    else{
      if(this.formIsValid()){
        this.isLoadingDelete = true;
        let responseStatus = await this.electionFactoryService.deleteAdmin(this.address);
        this.isLoadingDelete = false;
        if(responseStatus){
          alert("Cet utilisateur n'est plus administrateur !");
          location.replace('/');
        }
        else{
          alert("L'action a échouée, recommencez plus tard");
          location.replace('/');
        }
      }
    }
  }

  async submitAdd(){
    if(this.formIsValid()){
      this.isLoadingCreate = true;
      let responseStatus = await this.electionFactoryService.addAdmin(this.address);
      this.isLoadingCreate = false;
      if(responseStatus){
        alert("Cet utilisateur est désormais administrateur !");
        location.replace('/');
      }
      else{
        alert("L'action a échouée, recommencez plus tard");
        location.replace('/');
      }
    }
  }

}
