import { Component } from '@angular/core';
import Web3 from "web3";
import { Web3ConnectionService } from './services/web3-connection.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public connectedToContract = false;

  constructor(private web3ConnectionService: Web3ConnectionService) { }

  async ngOnInit() {
    while(this.connectedToContract !== true){
      this.connectedToContract = await this.web3ConnectionService.connectAccount();
    }

    if(this.connectedToContract){
      let web3js = new Web3(Web3.givenProvider);
      var accounts = await web3js.eth.getAccounts(); 
      setInterval(function() {
        web3js.eth.getAccounts().then(res => {
          if ( res[0] !== accounts[0]) {
            accounts[0] = res[0];
            location.replace("/");
          }
        }).catch( _ => {
          location.replace("/");
        });
      }, 100);
    }
  }
}
