import { Injectable } from '@angular/core';
import Web3 from "web3";
import { address } from 'src/contracts_abis/ContractAddress.js';
import { electionHelperContractABI } from 'src/contracts_abis/ElectionHelper.js';

@Injectable({
  providedIn: 'root'
})
export class ElectionHelperService {
  web3js: any;
  accounts: any;
  electionHelperContract: any;

  constructor() { 
    this.web3js = new Web3(Web3.givenProvider); // create web3 instance
    this.electionHelperContract = new this.web3js.eth.Contract(electionHelperContractABI.abi, address);
  }

  async endElection(electionId: number) {
    this.accounts = await this.web3js.eth.getAccounts(); 
    await this.electionHelperContract.methods.endElection(electionId).send({ from: this.accounts[0] });
  }

  async getElectionWinners(electionId: number): Promise<string[]> {
    this.accounts = await this.web3js.eth.getAccounts(); 
    const winnersId = await this.electionHelperContract.methods.getElectionWinners(electionId).call({ from: this.accounts[0] });
    return winnersId;
  }
}
