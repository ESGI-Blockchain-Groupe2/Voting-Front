import { Injectable } from '@angular/core';
import Web3 from "web3";
import { address } from 'src/contracts_abis/ContractAddress.js';
import { voteContractABI } from 'src/contracts_abis/Vote.js';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  web3js: any;
  accounts: any;
  voteContract: any;

  constructor() { 
    this.web3js = new Web3(Web3.givenProvider); // create web3 instance
    this.voteContract = new this.web3js.eth.Contract(voteContractABI.abi, address);
  }

  async voteToElection(electionId: number, notes: number[]): Promise<number> {
    this.accounts = await this.web3js.eth.getAccounts(); 
    const response = await this.voteContract.methods.voteToElection(electionId, notes).send({ from: this.accounts[0] });
    return response.status;
  }

  async userAlreadyVote(electionId: number): Promise<boolean> {
    this.accounts = await this.web3js.eth.getAccounts(); 
    const response = await this.voteContract.methods.hasAlreadyVoted(electionId).call({ from: this.accounts[0] });
    return response;
  }
}
