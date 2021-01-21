import { Component } from '@angular/core';
import { $ } from 'protractor';
import { ElectionFactoryService } from './services/election-factory.service';
import { Web3ConnectionService } from './services/web3-connection.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public connectedToContract = false;

  constructor(private web3ConnectionService: Web3ConnectionService, private electionFactoryService: ElectionFactoryService) { }

  async ngOnInit() {

    while(this.connectedToContract !== true){
      this.connectedToContract = await this.web3ConnectionService.connectAccount();
      console.log(this.connectedToContract);
    }

    /*if(this.connectedToContract){
      console.log(await this.electionFactoryService.createElection());
    }*/
    /*if(this.connectedToContract){
      console.log("reponse");
      console.log(await this.electionFactoryService.getElectionCount());
    }*/
    /*if(this.connectedToContract){
      console.log("reponse");
      console.log(await this.electionFactoryService.getElection());
    }*/

  }
}
