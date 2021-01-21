import { Injectable } from '@angular/core';
import Web3 from "web3";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Web3ConnectionService {
  web3js: any;
  provider: any;
  accounts: any;

  private accountStatusSource = new Subject<any>();
  accountStatus$ = this.accountStatusSource.asObservable();

  constructor() {
  }

  async connectAccount(): Promise<boolean> {

    if(Web3.givenProvider === null){
      confirm("Pour utiliser ce site vous devez installer l'extension MetaMask.");
      return false;
    }
    else{
      this.web3js = new Web3(Web3.givenProvider); // create web3 instance
      this.accounts = await this.web3js.eth.getAccounts(); 
      if(this.accounts.length === 0){
        confirm("Pour utiliser ce site vous devez votre compte MetaMask à ce site.\n Sur MetaMask, déroulez le menu à droite, puis cliquez sur 'Connected sites', puis cliquez sur 'Manually connect to current site'' ");
        return false;
      }
      this.accountStatusSource.next(this.accounts)
      return true;
    }
  }
}