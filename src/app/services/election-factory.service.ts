import { Injectable } from '@angular/core';
import Web3 from "web3";
import { address } from 'src/contracts_abis/ContractAddress.js';
import { electionFactoryContractABI } from 'src/contracts_abis/ElectionFactory.js';

@Injectable({
  providedIn: 'root'
})
export class ElectionFactoryService {
  web3js: any;
  accounts: any;
  electionFactoryContract: any;

  constructor (){
    this.web3js = new Web3(Web3.givenProvider); // create web3 instance
    this.electionFactoryContract = new this.web3js.eth.Contract(electionFactoryContractABI.abi, address);
  }

  async createElection(title: string, candidateNames: string[]): Promise<number> {
    this.accounts = await this.web3js.eth.getAccounts(); 
    const response = await this.electionFactoryContract.methods.createElection(title, candidateNames).send({ from: this.accounts[0] });
    return response.status;
  }

  async getElection(id: number) { //Commence à 1
    this.accounts = await this.web3js.eth.getAccounts(); 
    const election = await this.electionFactoryContract.methods.elections(id).call({ from: this.accounts[0] });

    let formatedCreationDate = new Date(election.creationDate * 1000);
    let formatedClosingDate = new Date(election.closingDate * 1000);

    return {
      title: election.title,
      nbTotalVoters: election.totalVoters,
      isOpen: election.isOpen,
      creationDate: formatedCreationDate.toISOString().split("T")[0],
      closingDate: formatedClosingDate.toISOString().split("T")[0],
      candidatesCount: election.candidatesCount,
      winner: election.winner
    };
  }

  async getElectionCount(): Promise<number> {
    this.accounts = await this.web3js.eth.getAccounts(); 
    const electionCount = await this.electionFactoryContract.methods.electionsCount().call({ from: this.accounts[0] });
    return electionCount;
  }

  async addAdmin (userAddress: string) {
    this.accounts = await this.web3js.eth.getAccounts(); 
    let response = await this.electionFactoryContract.methods.addAdmin(userAddress).send({ from: this.accounts[0] });
    console.log(response);
    return response.status;
  }

  async deleteAdmin (userAddress: string) {
    this.accounts = await this.web3js.eth.getAccounts(); 
    let response = await this.electionFactoryContract.methods.deleteAdmin(userAddress).send({ from: this.accounts[0] });
    console.log(response);
    return response.status;
  }

  async isUserAdmin(): Promise<boolean> {
    this.accounts = await this.web3js.eth.getAccounts(); 
    const isUserAdmin = await this.electionFactoryContract.methods.isUserAdmin( this.accounts[0] ).call();
    return isUserAdmin;
  }
}