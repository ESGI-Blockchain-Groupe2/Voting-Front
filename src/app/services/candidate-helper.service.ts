import { Injectable } from '@angular/core';
import Web3 from "web3";
import { address } from 'src/contracts_abis/ContractAddress.js';
import { candidateHelperABI } from 'src/contracts_abis/CandidateHelper.js';

@Injectable({
  providedIn: 'root'
})
export class CandidateHelperService {
  web3js: any;
  accounts: any;
  candidateHelper: any;

  constructor() {
    this.web3js = new Web3(Web3.givenProvider); // create web3 instance
    this.candidateHelper = new this.web3js.eth.Contract(candidateHelperABI.abi, address);
   }
}
