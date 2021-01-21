import { Injectable } from '@angular/core';
import Web3 from "web3";
import { address } from 'src/contracts_abis/ContractAddress.js';
import { electionFactoryABI } from 'src/contracts_abis/ElectionFactory.js';

@Injectable({
  providedIn: 'root'
})
export class ElectionFactoryService {
  web3js: any;
  accounts: any;
  electionFactory: any;

  constructor (){
    this.web3js = new Web3(Web3.givenProvider); // create web3 instance
    this.electionFactory = new this.web3js.eth.Contract(electionFactoryABI.abi, address);
  }

  async createElection(title: string, candidateNames: string[]): Promise<number> {
    this.accounts = await this.web3js.eth.getAccounts(); 
    const electionId = await this.electionFactory.methods.createElection(title, candidateNames).send({ from: this.accounts[0] });
    return electionId;
  }

  async getElection(id: number) { //Commence à 1
    this.accounts = await this.web3js.eth.getAccounts(); 
    const election = await this.electionFactory.methods.elections(id).call({ from: this.accounts[0] });
    return election;
  }

  async getElectionCount(): Promise<number> {
    this.accounts = await this.web3js.eth.getAccounts(); 
    const electionCount = await this.electionFactory.methods.getElectionsCount().call({ from: this.accounts[0] });
    return electionCount;
  }
}