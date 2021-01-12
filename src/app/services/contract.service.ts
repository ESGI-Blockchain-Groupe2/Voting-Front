import { Injectable } from '@angular/core';
import Web3 from "web3";
import { Subject } from 'rxjs';
import {votingAddress, votingABI} from 'src/voting_abi.js';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  web3js: any;
  provider: any;
  accounts: any;
  voting: any;

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


  async getGreeting() {
    this.web3js = new Web3(Web3.givenProvider); // create web3 instance
    this.accounts = await this.web3js.eth.getAccounts(); 
    
    this.voting = new this.web3js.eth.Contract(votingABI.abi, votingAddress);
    
    const helloworld = await this.voting.methods.getGreeting().call({ from: this.accounts[0] });
    

    return helloworld;
  }

}