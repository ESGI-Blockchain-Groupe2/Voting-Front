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

  async getCandidateName(electionId: number, candidateId: number): Promise<string> {
    this.accounts = await this.web3js.eth.getAccounts(); 
    const candidateName = await this.candidateContract.methods.getCandidateName(electionId, candidateId).call({ from: this.accounts[0] });
    return candidateName;
  }

   /*
    function getCandidateAverageNote(uint _electionId, uint _candidateId) external view returns (uint) {
    function calculatePercentageOfNote(uint _electionId, uint _candidateId, uint _note) external view returns(uint){
   */
}
