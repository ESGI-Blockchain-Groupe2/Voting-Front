import { Component } from '@angular/core';
import { ContractService } from './services/contract.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public connectedToContract = false;

  constructor(private contractService: ContractService) { }

  async ngOnInit() {

    while(this.connectedToContract !== true){
      this.connectedToContract = await this.contractService.connectAccount();
      console.log(this.connectedToContract);
    }

    if(this.connectedToContract){
      console.log(await this.contractService.getGreeting());
    }

  }
}
