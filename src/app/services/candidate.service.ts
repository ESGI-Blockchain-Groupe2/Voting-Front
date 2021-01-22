import { Injectable } from '@angular/core';
import Web3 from "web3";
import { address } from 'src/contracts_abis/ContractAddress.js';
import { candidateContractABI } from 'src/contracts_abis/Candidate.js';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  web3js: any;
  accounts: any;
  candidateContract: any;

  constructor() {
    this.web3js = new Web3(Web3.givenProvider); // create web3 instance
    this.candidateContract = new this.web3js.eth.Contract(candidateContractABI.abi, address);
   }

   async getCandidatesCount(electionId: number): Promise<number> {
    this.accounts = await this.web3js.eth.getAccounts(); 
    const candidateCount = await this.candidateContract.methods.getCandidatesCount(electionId).call({ from: this.accounts[0] });
    return candidateCount;
  }

  async getCandidate(electionId: number, candidateId: number): Promise<any> {
    this.accounts = await this.web3js.eth.getAccounts(); 
    const candidate = await this.candidateContract.methods.getCandidate(electionId, candidateId).call({ from: this.accounts[0] });
    return {
      name: candidate[0],
      avgNote: candidate[2],
      percent: candidate[1]
    };
  }

  async calculatePercentageOfNote(electionId: number, candidateId: number, note: number): Promise<number> {
    this.accounts = await this.web3js.eth.getAccounts(); 
    const percent = await this.candidateContract.methods.calculatePercentageOfNote(electionId, candidateId, note).call({ from: this.accounts[0] });
    return percent;
  }
}
