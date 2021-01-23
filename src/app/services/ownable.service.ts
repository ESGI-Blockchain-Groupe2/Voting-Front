import { Injectable } from '@angular/core';
import Web3 from "web3";
import { address } from 'src/contracts_abis/ContractAddress.js';
import { ownableContractABI } from 'src/contracts_abis/Ownable.js';

@Injectable({
  providedIn: 'root'
})
export class OwnableService {
  web3js: any;
  accounts: any;
  ownableContract: any;

  constructor() { 
    this.web3js = new Web3(Web3.givenProvider); // create web3 instance
    this.ownableContract = new this.web3js.eth.Contract(ownableContractABI.abi, address);
  }

  async isOwner(userAddress: string): Promise<boolean> {
    this.accounts = await this.web3js.eth.getAccounts(); 
    const response = await this.ownableContract.methods.owner().call({ from: this.accounts[0] });
    return response == userAddress;
  }

}
