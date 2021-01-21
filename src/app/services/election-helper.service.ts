import { Injectable } from '@angular/core';
import Web3 from "web3";
import { address } from 'src/contracts_abis/ContractAddress.js';
import { electionHelperABI } from 'src/contracts_abis/ElectionHelper.js';

@Injectable({
  providedIn: 'root'
})
export class ElectionHelperService {
  web3js: any;
  accounts: any;
  electionHelper: any;

  constructor() { 
    this.web3js = new Web3(Web3.givenProvider); // create web3 instance
    this.electionHelper = new this.web3js.eth.Contract(electionHelperABI.abi, address);
  }
}
