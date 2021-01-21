import { Injectable } from '@angular/core';
import Web3 from "web3";
import { address } from 'src/contracts_abis/ContractAddress.js';
import { voteHelperABI } from 'src/contracts_abis/VoteHelper.js';

@Injectable({
  providedIn: 'root'
})
export class VoteHelperService {
  web3js: any;
  accounts: any;
  voteHelper: any;

  constructor() { 
    this.web3js = new Web3(Web3.givenProvider); // create web3 instance
    this.voteHelper = new this.web3js.eth.Contract(voteHelperABI.abi, address);
  }
}
