export const electionFactoryContractABI = {
  "contractName": "ElectionFactory",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "elections",
      "outputs": [
        {
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "creationDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "closingDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalVoters",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isOpen",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "candidatesCount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "winner",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "electionsCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "addAdmin",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "deleteAdmin",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "isUserAdmin",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_title",
          "type": "string"
        },
        {
          "internalType": "string[]",
          "name": "_candidatesNames",
          "type": "string[]"
        }
      ],
      "name": "createElection",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_electionId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_candidateName",
          "type": "string"
        }
      ],
      "name": "addCandidate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.7.0+commit.9e61f92b\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"addAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_candidateName\",\"type\":\"string\"}],\"name\":\"addCandidate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_title\",\"type\":\"string\"},{\"internalType\":\"string[]\",\"name\":\"_candidatesNames\",\"type\":\"string[]\"}],\"name\":\"createElection\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"deleteAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"elections\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"creationDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"closingDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalVoters\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"isOpen\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"candidatesCount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"winner\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"electionsCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"userAddress\",\"type\":\"address\"}],\"name\":\"isUserAdmin\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol\":\"ElectionFactory\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol\":{\"keccak256\":\"0xce6751d48384d436adae7ede503e293aef6c33f25dc3c27f80ee01419166efc4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://06d99d3abb2c0a1ddeeab27ca5ce4c6699a2dc50053bf48e170c9ee1f9256bdb\",\"dweb:/ipfs/Qmbh2ovDKNRdchUgeLjo8f7tkESLu1sxyvZTqsQswMPL5H\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol\":{\"keccak256\":\"0x7f1004825e1cc40d7b663e20d3be71ed9c64baf7f05eae9b115a4d4448c8fdcf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5d8ccf5e65c162aeabb1b5e804f7183d95be7a985d5466796025a39ede9cfa62\",\"dweb:/ipfs/QmNZR6izJaw2bC9aCAcVbtS1kE9YBWuuqoaryy8idA14ta\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600560008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610f88806100d96000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80637048027511610066578063704802751461013657806374d523a8146101525780638da5cb5b146101825780639a74c695146101a0578063f2fde38b146101be57610093565b80631750a3d01461009857806327e1f7df146100b4578063349813b2146100d05780635e6fef0114610100575b600080fd5b6100b260048036038101906100ad9190610bab565b6101da565b005b6100ce60048036038101906100c99190610aed565b610241565b005b6100ea60048036038101906100e59190610b16565b6103c0565b6040516100f79190610dd1565b60405180910390f35b61011a60048036038101906101159190610b82565b6105b8565b60405161012d9796959493929190610d1b565b60405180910390f35b610150600480360381019061014b9190610aed565b61069f565b005b61016c60048036038101906101679190610aed565b61078f565b6040516101799190610d00565b60405180910390f35b61018a6107e5565b6040516101979190610ce5565b60405180910390f35b6101a8610809565b6040516101b59190610dd1565b60405180910390f35b6101d860048036038101906101d39190610aed565b61080f565b005b80600260008481526020019081526020016000206006016000600260008681526020019081526020016000206005016000815480929190600101919050558152602001908152602001600020600001908051906020019061023c92919061095e565b505050565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146102d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102cc90610d91565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610364576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035b90610db1565b60405180910390fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60003360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610456576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044d90610d91565b60405180910390fd5b600083519050600160008154809291906001019190505550600060026000600154815260200190815260200160002090508581600001908051906020019061049f92919061095e565b504281600101819055506000816003018190555060018160040160006101000a81548160ff02191690831515021790555060005b82811015610507576104fa6001548783815181106104ed57fe5b60200260200101516101da565b80806001019150506104d3565b503360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600154935050505092915050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106645780601f1061063957610100808354040283529160200191610664565b820191906000526020600020905b81548152906001019060200180831161064757829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154908060090154905087565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610733576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072a90610d91565b60405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461086757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108a157600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061099f57805160ff19168380011785556109cd565b828001600101855582156109cd579182015b828111156109cc5782518255916020019190600101906109b1565b5b5090506109da91906109de565b5090565b5b808211156109f75760008160009055506001016109df565b5090565b600081359050610a0a81610f24565b92915050565b600082601f830112610a2157600080fd5b8135610a34610a2f82610e19565b610dec565b9150818183526020840193506020810190508360005b83811015610a7a5781358601610a608882610a84565b845260208401935060208301925050600181019050610a4a565b5050505092915050565b600082601f830112610a9557600080fd5b8135610aa8610aa382610e41565b610dec565b91508082526020830160208301858383011115610ac457600080fd5b610acf838284610ed1565b50505092915050565b600081359050610ae781610f3b565b92915050565b600060208284031215610aff57600080fd5b6000610b0d848285016109fb565b91505092915050565b60008060408385031215610b2957600080fd5b600083013567ffffffffffffffff811115610b4357600080fd5b610b4f85828601610a84565b925050602083013567ffffffffffffffff811115610b6c57600080fd5b610b7885828601610a10565b9150509250929050565b600060208284031215610b9457600080fd5b6000610ba284828501610ad8565b91505092915050565b60008060408385031215610bbe57600080fd5b6000610bcc85828601610ad8565b925050602083013567ffffffffffffffff811115610be957600080fd5b610bf585828601610a84565b9150509250929050565b610c0881610e89565b82525050565b610c1781610e9b565b82525050565b6000610c2882610e6d565b610c328185610e78565b9350610c42818560208601610ee0565b610c4b81610f13565b840191505092915050565b6000610c63601483610e78565b91507f596f7520617265206e6f7420616e2061646d696e0000000000000000000000006000830152602082019050919050565b6000610ca3601f83610e78565b91507f43616e6e6f742072656d6f7665206f776e65722066726f6d2061646d696e73006000830152602082019050919050565b610cdf81610ec7565b82525050565b6000602082019050610cfa6000830184610bff565b92915050565b6000602082019050610d156000830184610c0e565b92915050565b600060e0820190508181036000830152610d35818a610c1d565b9050610d446020830189610cd6565b610d516040830188610cd6565b610d5e6060830187610cd6565b610d6b6080830186610c0e565b610d7860a0830185610cd6565b610d8560c0830184610cd6565b98975050505050505050565b60006020820190508181036000830152610daa81610c56565b9050919050565b60006020820190508181036000830152610dca81610c96565b9050919050565b6000602082019050610de66000830184610cd6565b92915050565b6000604051905081810181811067ffffffffffffffff82111715610e0f57600080fd5b8060405250919050565b600067ffffffffffffffff821115610e3057600080fd5b602082029050602081019050919050565b600067ffffffffffffffff821115610e5857600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000610e9482610ea7565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610efe578082015181840152602081019050610ee3565b83811115610f0d576000848401525b50505050565b6000601f19601f8301169050919050565b610f2d81610e89565b8114610f3857600080fd5b50565b610f4481610ec7565b8114610f4f57600080fd5b5056fea26469706673582212208d187d132106ef75d1dfe83f8ac7b212ba02c8b67bbaf1de12d6514c6b4cb39164736f6c63430007000033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100935760003560e01c80637048027511610066578063704802751461013657806374d523a8146101525780638da5cb5b146101825780639a74c695146101a0578063f2fde38b146101be57610093565b80631750a3d01461009857806327e1f7df146100b4578063349813b2146100d05780635e6fef0114610100575b600080fd5b6100b260048036038101906100ad9190610bab565b6101da565b005b6100ce60048036038101906100c99190610aed565b610241565b005b6100ea60048036038101906100e59190610b16565b6103c0565b6040516100f79190610dd1565b60405180910390f35b61011a60048036038101906101159190610b82565b6105b8565b60405161012d9796959493929190610d1b565b60405180910390f35b610150600480360381019061014b9190610aed565b61069f565b005b61016c60048036038101906101679190610aed565b61078f565b6040516101799190610d00565b60405180910390f35b61018a6107e5565b6040516101979190610ce5565b60405180910390f35b6101a8610809565b6040516101b59190610dd1565b60405180910390f35b6101d860048036038101906101d39190610aed565b61080f565b005b80600260008481526020019081526020016000206006016000600260008681526020019081526020016000206005016000815480929190600101919050558152602001908152602001600020600001908051906020019061023c92919061095e565b505050565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146102d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102cc90610d91565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610364576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035b90610db1565b60405180910390fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60003360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610456576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044d90610d91565b60405180910390fd5b600083519050600160008154809291906001019190505550600060026000600154815260200190815260200160002090508581600001908051906020019061049f92919061095e565b504281600101819055506000816003018190555060018160040160006101000a81548160ff02191690831515021790555060005b82811015610507576104fa6001548783815181106104ed57fe5b60200260200101516101da565b80806001019150506104d3565b503360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600154935050505092915050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106645780601f1061063957610100808354040283529160200191610664565b820191906000526020600020905b81548152906001019060200180831161064757829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154908060090154905087565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610733576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072a90610d91565b60405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461086757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108a157600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061099f57805160ff19168380011785556109cd565b828001600101855582156109cd579182015b828111156109cc5782518255916020019190600101906109b1565b5b5090506109da91906109de565b5090565b5b808211156109f75760008160009055506001016109df565b5090565b600081359050610a0a81610f24565b92915050565b600082601f830112610a2157600080fd5b8135610a34610a2f82610e19565b610dec565b9150818183526020840193506020810190508360005b83811015610a7a5781358601610a608882610a84565b845260208401935060208301925050600181019050610a4a565b5050505092915050565b600082601f830112610a9557600080fd5b8135610aa8610aa382610e41565b610dec565b91508082526020830160208301858383011115610ac457600080fd5b610acf838284610ed1565b50505092915050565b600081359050610ae781610f3b565b92915050565b600060208284031215610aff57600080fd5b6000610b0d848285016109fb565b91505092915050565b60008060408385031215610b2957600080fd5b600083013567ffffffffffffffff811115610b4357600080fd5b610b4f85828601610a84565b925050602083013567ffffffffffffffff811115610b6c57600080fd5b610b7885828601610a10565b9150509250929050565b600060208284031215610b9457600080fd5b6000610ba284828501610ad8565b91505092915050565b60008060408385031215610bbe57600080fd5b6000610bcc85828601610ad8565b925050602083013567ffffffffffffffff811115610be957600080fd5b610bf585828601610a84565b9150509250929050565b610c0881610e89565b82525050565b610c1781610e9b565b82525050565b6000610c2882610e6d565b610c328185610e78565b9350610c42818560208601610ee0565b610c4b81610f13565b840191505092915050565b6000610c63601483610e78565b91507f596f7520617265206e6f7420616e2061646d696e0000000000000000000000006000830152602082019050919050565b6000610ca3601f83610e78565b91507f43616e6e6f742072656d6f7665206f776e65722066726f6d2061646d696e73006000830152602082019050919050565b610cdf81610ec7565b82525050565b6000602082019050610cfa6000830184610bff565b92915050565b6000602082019050610d156000830184610c0e565b92915050565b600060e0820190508181036000830152610d35818a610c1d565b9050610d446020830189610cd6565b610d516040830188610cd6565b610d5e6060830187610cd6565b610d6b6080830186610c0e565b610d7860a0830185610cd6565b610d8560c0830184610cd6565b98975050505050505050565b60006020820190508181036000830152610daa81610c56565b9050919050565b60006020820190508181036000830152610dca81610c96565b9050919050565b6000602082019050610de66000830184610cd6565b92915050565b6000604051905081810181811067ffffffffffffffff82111715610e0f57600080fd5b8060405250919050565b600067ffffffffffffffff821115610e3057600080fd5b602082029050602081019050919050565b600067ffffffffffffffff821115610e5857600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000610e9482610ea7565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610efe578082015181840152602081019050610ee3565b83811115610f0d576000848401525b50505050565b6000601f19601f8301169050919050565b610f2d81610e89565b8114610f3857600080fd5b50565b610f4481610ec7565b8114610f4f57600080fd5b5056fea26469706673582212208d187d132106ef75d1dfe83f8ac7b212ba02c8b67bbaf1de12d6514c6b4cb39164736f6c63430007000033",
  "immutableReferences": {},
  "sourceMap": "126:2237:1:-:0;;;168:55;;;;;;;;;;552:10:5;544:5;;:18;;;;;;;;;;;;;;;;;;212:4:1;193:9;:16;203:5;;;;;;;;;;;193:16;;;;;;;;;;;;;;;;:23;;;;;;;;;;;;;;;;;;126:2237;;;;;;",
  "deployedSourceMap": "126:2237:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2170:191;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1166:193;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1486:678;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;717:43;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;;:::i;:::-;;;;;;;;1044:116;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1365:115;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;279:20:5;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;685:26:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;907:188:5;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2170:191:1;2340:14;2257:9;:22;2267:11;2257:22;;;;;;;;;;;:33;;:75;2291:9;:22;2301:11;2291:22;;;;;;;;;;;:38;;;:40;;;;;;;;;;;;2257:75;;;;;;;;;;;:80;;:97;;;;;;;;;;;;:::i;:::-;;2170:191;;:::o;1166:193::-;1226:10;991:4;964:31;;:9;:23;974:12;964:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;955:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1270:5:::1;::::0;::::1;;;;;;;;1256:19;;:10;:19;;;;1248:63;;;;;;;;;;;;:::i;:::-;;;;;;;;;1347:5;1321:9;:23;1331:12;1321:23;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;;;;;;;1166:193:::0;;:::o;1486:678::-;1604:4;1583:10;991:4;964:31;;:9;:23;974:12;964:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;955:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1620:17:::1;1640:16;:23;1620:43;;1673:14;;:16;;;;;;;;;;;;;1699:25;1727:9;:25;1737:14;;1727:25;;;;;;;;;;;1699:53;;1779:6;1762:8;:14;;:23;;;;;;;;;;;;:::i;:::-;;1819:15;1795:8;:21;;:39;;;;1867:1;1844:8;:20;;:24;;;;1896:4;1878:8;:15;;;:22;;;;;;;;;;;;;;;;;;1916:6;1911:114;1932:12;1928:1;:16;1911:114;;;1965:49;1978:14;;1994:16;2011:1;1994:19;;;;;;;;;;;;;;1965:12;:49::i;:::-;1946:3;;;;;;;1911:114;;;;2069:10;2035:15;:31;2051:14;;2035:31;;;;;;;;;;;;:44;;;;;;;;;;;;;;;;;;2124:1;2090:18;:30;2109:10;2090:30;;;;;;;;;;;;;;;;:35;;;;;;;;;;;2143:14;;2136:21;;;;1486:678:::0;;;;;:::o;717:43::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1044:116::-;1101:10;991:4;964:31;;:9;:23;974:12;964:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;955:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1149:4:::1;1123:9;:23;1133:12;1123:23;;;;;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;1044:116:::0;;:::o;1365:115::-;1429:4;1451:9;:22;1461:11;1451:22;;;;;;;;;;;;;;;;;;;;;;;;;1444:29;;1365:115;;;:::o;279:20:5:-;;;;;;;;;;;;:::o;685:26:1:-;;;;:::o;907:188:5:-;711:5;;;;;;;;;;697:19;;:10;:19;;;689:28;;;;;;1007:1:::1;987:22;;:8;:22;;;;979:31;;;::::0;::::1;;1053:8;1025:37;;1046:5;::::0;::::1;;;;;;;;1025:37;;;;;;;;;;;;1080:8;1072:5;::::0;:16:::1;;;;;;;;;;;;;;;;;;907:188:::0;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;5:130::-;;85:6;72:20;63:29;;97:33;124:5;97:33;:::i;:::-;57:78;;;;:::o;159:708::-;;286:3;279:4;271:6;267:17;263:27;253:2;;304:1;301;294:12;253:2;341:6;328:20;363:90;378:74;445:6;378:74;:::i;:::-;363:90;:::i;:::-;354:99;;470:5;495:6;488:5;481:21;525:4;517:6;513:17;503:27;;547:4;542:3;538:14;531:21;;600:6;633:1;618:243;643:6;640:1;637:13;618:243;;;726:3;713:17;705:6;701:30;750:47;793:3;781:10;750:47;:::i;:::-;745:3;738:60;821:4;816:3;812:14;805:21;;849:4;844:3;840:14;833:21;;675:186;665:1;662;658:9;653:14;;618:243;;;622:14;246:621;;;;;;;:::o;876:442::-;;978:3;971:4;963:6;959:17;955:27;945:2;;996:1;993;986:12;945:2;1033:6;1020:20;1055:65;1070:49;1112:6;1070:49;:::i;:::-;1055:65;:::i;:::-;1046:74;;1140:6;1133:5;1126:21;1176:4;1168:6;1164:17;1209:4;1202:5;1198:16;1244:3;1235:6;1230:3;1226:16;1223:25;1220:2;;;1261:1;1258;1251:12;1220:2;1271:41;1305:6;1300:3;1295;1271:41;:::i;:::-;938:380;;;;;;;:::o;1326:130::-;;1406:6;1393:20;1384:29;;1418:33;1445:5;1418:33;:::i;:::-;1378:78;;;;:::o;1463:241::-;;1567:2;1555:9;1546:7;1542:23;1538:32;1535:2;;;1583:1;1580;1573:12;1535:2;1618:1;1635:53;1680:7;1671:6;1660:9;1656:22;1635:53;:::i;:::-;1625:63;;1597:97;1529:175;;;;:::o;1711:628::-;;;1877:2;1865:9;1856:7;1852:23;1848:32;1845:2;;;1893:1;1890;1883:12;1845:2;1956:1;1945:9;1941:17;1928:31;1979:18;1971:6;1968:30;1965:2;;;2011:1;2008;2001:12;1965:2;2031:63;2086:7;2077:6;2066:9;2062:22;2031:63;:::i;:::-;2021:73;;1907:193;2159:2;2148:9;2144:18;2131:32;2183:18;2175:6;2172:30;2169:2;;;2215:1;2212;2205:12;2169:2;2235:88;2315:7;2306:6;2295:9;2291:22;2235:88;:::i;:::-;2225:98;;2110:219;1839:500;;;;;:::o;2346:241::-;;2450:2;2438:9;2429:7;2425:23;2421:32;2418:2;;;2466:1;2463;2456:12;2418:2;2501:1;2518:53;2563:7;2554:6;2543:9;2539:22;2518:53;:::i;:::-;2508:63;;2480:97;2412:175;;;;:::o;2594:472::-;;;2725:2;2713:9;2704:7;2700:23;2696:32;2693:2;;;2741:1;2738;2731:12;2693:2;2776:1;2793:53;2838:7;2829:6;2818:9;2814:22;2793:53;:::i;:::-;2783:63;;2755:97;2911:2;2900:9;2896:18;2883:32;2935:18;2927:6;2924:30;2921:2;;;2967:1;2964;2957:12;2921:2;2987:63;3042:7;3033:6;3022:9;3018:22;2987:63;:::i;:::-;2977:73;;2862:194;2687:379;;;;;:::o;3073:113::-;3156:24;3174:5;3156:24;:::i;:::-;3151:3;3144:37;3138:48;;:::o;3193:104::-;3270:21;3285:5;3270:21;:::i;:::-;3265:3;3258:34;3252:45;;:::o;3304:347::-;;3416:39;3449:5;3416:39;:::i;:::-;3467:71;3531:6;3526:3;3467:71;:::i;:::-;3460:78;;3543:52;3588:6;3583:3;3576:4;3569:5;3565:16;3543:52;:::i;:::-;3616:29;3638:6;3616:29;:::i;:::-;3611:3;3607:39;3600:46;;3396:255;;;;;:::o;3659:320::-;;3819:67;3883:2;3878:3;3819:67;:::i;:::-;3812:74;;3919:22;3915:1;3910:3;3906:11;3899:43;3970:2;3965:3;3961:12;3954:19;;3805:174;;;:::o;3988:331::-;;4148:67;4212:2;4207:3;4148:67;:::i;:::-;4141:74;;4248:33;4244:1;4239:3;4235:11;4228:54;4310:2;4305:3;4301:12;4294:19;;4134:185;;;:::o;4327:113::-;4410:24;4428:5;4410:24;:::i;:::-;4405:3;4398:37;4392:48;;:::o;4447:222::-;;4574:2;4563:9;4559:18;4551:26;;4588:71;4656:1;4645:9;4641:17;4632:6;4588:71;:::i;:::-;4545:124;;;;:::o;4676:210::-;;4797:2;4786:9;4782:18;4774:26;;4811:65;4873:1;4862:9;4858:17;4849:6;4811:65;:::i;:::-;4768:118;;;;:::o;4893:968::-;;5202:3;5191:9;5187:19;5179:27;;5253:9;5247:4;5243:20;5239:1;5228:9;5224:17;5217:47;5278:78;5351:4;5342:6;5278:78;:::i;:::-;5270:86;;5367:72;5435:2;5424:9;5420:18;5411:6;5367:72;:::i;:::-;5450;5518:2;5507:9;5503:18;5494:6;5450:72;:::i;:::-;5533;5601:2;5590:9;5586:18;5577:6;5533:72;:::i;:::-;5616:67;5678:3;5667:9;5663:19;5654:6;5616:67;:::i;:::-;5694:73;5762:3;5751:9;5747:19;5738:6;5694:73;:::i;:::-;5778;5846:3;5835:9;5831:19;5822:6;5778:73;:::i;:::-;5173:688;;;;;;;;;;:::o;5868:416::-;;6068:2;6057:9;6053:18;6045:26;;6118:9;6112:4;6108:20;6104:1;6093:9;6089:17;6082:47;6143:131;6269:4;6143:131;:::i;:::-;6135:139;;6039:245;;;:::o;6291:416::-;;6491:2;6480:9;6476:18;6468:26;;6541:9;6535:4;6531:20;6527:1;6516:9;6512:17;6505:47;6566:131;6692:4;6566:131;:::i;:::-;6558:139;;6462:245;;;:::o;6714:222::-;;6841:2;6830:9;6826:18;6818:26;;6855:71;6923:1;6912:9;6908:17;6899:6;6855:71;:::i;:::-;6812:124;;;;:::o;6943:256::-;;7005:2;6999:9;6989:19;;7043:4;7035:6;7031:17;7142:6;7130:10;7127:22;7106:18;7094:10;7091:34;7088:62;7085:2;;;7163:1;7160;7153:12;7085:2;7183:10;7179:2;7172:22;6983:216;;;;:::o;7206:314::-;;7375:18;7367:6;7364:30;7361:2;;;7407:1;7404;7397:12;7361:2;7442:4;7434:6;7430:17;7422:25;;7505:4;7499;7495:15;7487:23;;7298:222;;;:::o;7527:322::-;;7671:18;7663:6;7660:30;7657:2;;;7703:1;7700;7693:12;7657:2;7770:4;7766:9;7759:4;7751:6;7747:17;7743:33;7735:41;;7834:4;7828;7824:15;7816:23;;7594:255;;;:::o;7856:122::-;;7950:5;7944:12;7934:22;;7915:63;;;:::o;7986:163::-;;8101:6;8096:3;8089:19;8138:4;8133:3;8129:14;8114:29;;8082:67;;;;:::o;8157:91::-;;8219:24;8237:5;8219:24;:::i;:::-;8208:35;;8202:46;;;:::o;8255:85::-;;8328:5;8321:13;8314:21;8303:32;;8297:43;;;:::o;8347:121::-;;8420:42;8413:5;8409:54;8398:65;;8392:76;;;:::o;8475:72::-;;8537:5;8526:16;;8520:27;;;:::o;8555:145::-;8636:6;8631:3;8626;8613:30;8692:1;8683:6;8678:3;8674:16;8667:27;8606:94;;;:::o;8709:268::-;8774:1;8781:101;8795:6;8792:1;8789:13;8781:101;;;8871:1;8866:3;8862:11;8856:18;8852:1;8847:3;8843:11;8836:39;8817:2;8814:1;8810:10;8805:15;;8781:101;;;8897:6;8894:1;8891:13;8888:2;;;8962:1;8953:6;8948:3;8944:16;8937:27;8888:2;8758:219;;;;:::o;8985:97::-;;9073:2;9069:7;9064:2;9057:5;9053:14;9049:28;9039:38;;9033:49;;;:::o;9090:117::-;9159:24;9177:5;9159:24;:::i;:::-;9152:5;9149:35;9139:2;;9198:1;9195;9188:12;9139:2;9133:74;:::o;9214:117::-;9283:24;9301:5;9283:24;:::i;:::-;9276:5;9273:35;9263:2;;9322:1;9319;9312:12;9263:2;9257:74;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >= 0.7.0 < 0.8.0;\npragma experimental ABIEncoderV2;\n\nimport \"./ownable.sol\";\n\ncontract ElectionFactory is Ownable {\n    constructor () {\n        listAdmin[owner] = true;\n    }\n\n    struct Election {\n        string title;\n        uint256 creationDate;\n        uint closingDate;\n        uint totalVoters;\n        bool isOpen;\n\n        uint candidatesCount;\n        mapping (uint => Candidate) candidates;\n        mapping (address => bool) voters;\n        uint[] winners;\n        uint winner;\n    }\n\n    struct Candidate {\n        string name;\n        mapping (uint => uint) notes;\n        uint percent;\n        uint averageNote;\n    }\n    uint public electionsCount;\n    mapping (uint => Election) public elections;\n\n    mapping (uint => address) electionToOwner;\n    mapping (address => uint) ownerElectionCount;\n    mapping (address => bool) listAdmin;\n\n    modifier isAdmin(address _userAddress) {\n        require (listAdmin[_userAddress] == true, \"You are not an admin\");\n        _;\n    }\n\n    function addAdmin(address _userAddress) external isAdmin(msg.sender) {\n        listAdmin[_userAddress] = true;\n    }\n\n    function deleteAdmin(address _userAddress) external isAdmin(msg.sender) {\n        require(msg.sender != owner, \"Cannot remove owner from admins\");\n        listAdmin[_userAddress] = false;\n    }\n\n    function isUserAdmin(address userAddress) external view returns(bool){\n        return listAdmin[userAddress];\n    }\n\n    function createElection(string memory _title, string[] memory _candidatesNames) external isAdmin(msg.sender) returns (uint) {\n        uint nbCandidates = _candidatesNames.length;\n        electionsCount++;\n        Election storage election = elections[electionsCount];\n        election.title = _title;\n        election.creationDate = block.timestamp;\n        election.totalVoters = 0;\n        election.isOpen = true;\n\n        for (uint i = 0; i < nbCandidates; i++) {\n            addCandidate(electionsCount, _candidatesNames[i]);\n        }\n\n        electionToOwner[electionsCount] = msg.sender;\n\n        ownerElectionCount[msg.sender] += 1;\n\n        return electionsCount;\n    }\n\n    function addCandidate(uint _electionId, string memory _candidateName) public {\n        elections[_electionId].candidates[elections[_electionId].candidatesCount++].name = _candidateName;\n    }\n}\n",
  "sourcePath": "C:\\Users\\acham\\Applications\\ESGI\\Blockchain\\Projet\\Voting-SmartContract-Truffled\\contracts\\ElectionFactory.sol",
  "ast": {
    "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol",
    "exportedSymbols": {
      "ElectionFactory": [
        492
      ]
    },
    "id": 493,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 244,
        "literals": [
          "solidity",
          ">=",
          "0.7",
          ".0",
          "<",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:33:1"
      },
      {
        "id": 245,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "66:33:1"
      },
      {
        "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol",
        "file": "./ownable.sol",
        "id": 246,
        "nodeType": "ImportDirective",
        "scope": 493,
        "sourceUnit": 1040,
        "src": "101:23:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 247,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1039,
              "src": "154:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$1039",
                "typeString": "contract Ownable"
              }
            },
            "id": 248,
            "nodeType": "InheritanceSpecifier",
            "src": "154:7:1"
          }
        ],
        "contractDependencies": [
          1039
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 492,
        "linearizedBaseContracts": [
          492,
          1039
        ],
        "name": "ElectionFactory",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 257,
              "nodeType": "Block",
              "src": "183:40:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 255,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 251,
                        "name": "listAdmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 313,
                        "src": "193:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 253,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 252,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 983,
                        "src": "203:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "193:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 254,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "212:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "193:23:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 256,
                  "nodeType": "ExpressionStatement",
                  "src": "193:23:1"
                }
              ]
            },
            "documentation": null,
            "id": 258,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 249,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "180:2:1"
            },
            "returnParameters": {
              "id": 250,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "183:0:1"
            },
            "scope": 492,
            "src": "168:55:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "canonicalName": "ElectionFactory.Election",
            "id": 284,
            "members": [
              {
                "constant": false,
                "id": 260,
                "mutability": "mutable",
                "name": "title",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 284,
                "src": "255:12:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 259,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "255:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 262,
                "mutability": "mutable",
                "name": "creationDate",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 284,
                "src": "277:20:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 261,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "277:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 264,
                "mutability": "mutable",
                "name": "closingDate",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 284,
                "src": "307:16:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 263,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "307:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 266,
                "mutability": "mutable",
                "name": "totalVoters",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 284,
                "src": "333:16:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 265,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "333:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 268,
                "mutability": "mutable",
                "name": "isOpen",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 284,
                "src": "359:11:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 267,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "359:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 270,
                "mutability": "mutable",
                "name": "candidatesCount",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 284,
                "src": "381:20:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 269,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "381:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 274,
                "mutability": "mutable",
                "name": "candidates",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 284,
                "src": "411:38:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$295_storage_$",
                  "typeString": "mapping(uint256 => struct ElectionFactory.Candidate)"
                },
                "typeName": {
                  "id": 273,
                  "keyType": {
                    "id": 271,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "420:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "411:27:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$295_storage_$",
                    "typeString": "mapping(uint256 => struct ElectionFactory.Candidate)"
                  },
                  "valueType": {
                    "contractScope": null,
                    "id": 272,
                    "name": "Candidate",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 295,
                    "src": "428:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Candidate_$295_storage_ptr",
                      "typeString": "struct ElectionFactory.Candidate"
                    }
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 278,
                "mutability": "mutable",
                "name": "voters",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 284,
                "src": "459:32:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "typeName": {
                  "id": 277,
                  "keyType": {
                    "id": 275,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "468:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "459:25:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                    "typeString": "mapping(address => bool)"
                  },
                  "valueType": {
                    "id": 276,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "479:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 281,
                "mutability": "mutable",
                "name": "winners",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 284,
                "src": "501:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 279,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "501:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 280,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "501:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                    "typeString": "uint256[]"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 283,
                "mutability": "mutable",
                "name": "winner",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 284,
                "src": "525:11:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 282,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "525:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Election",
            "nodeType": "StructDefinition",
            "scope": 492,
            "src": "229:314:1",
            "visibility": "public"
          },
          {
            "canonicalName": "ElectionFactory.Candidate",
            "id": 295,
            "members": [
              {
                "constant": false,
                "id": 286,
                "mutability": "mutable",
                "name": "name",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 295,
                "src": "576:11:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 285,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "576:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 290,
                "mutability": "mutable",
                "name": "notes",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 295,
                "src": "597:28:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                  "typeString": "mapping(uint256 => uint256)"
                },
                "typeName": {
                  "id": 289,
                  "keyType": {
                    "id": 287,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "606:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "597:22:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                    "typeString": "mapping(uint256 => uint256)"
                  },
                  "valueType": {
                    "id": 288,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "614:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 292,
                "mutability": "mutable",
                "name": "percent",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 295,
                "src": "635:12:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 291,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "635:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 294,
                "mutability": "mutable",
                "name": "averageNote",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 295,
                "src": "657:16:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 293,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "657:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Candidate",
            "nodeType": "StructDefinition",
            "scope": 492,
            "src": "549:131:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "9a74c695",
            "id": 297,
            "mutability": "mutable",
            "name": "electionsCount",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 492,
            "src": "685:26:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 296,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "685:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "5e6fef01",
            "id": 301,
            "mutability": "mutable",
            "name": "elections",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 492,
            "src": "717:43:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
              "typeString": "mapping(uint256 => struct ElectionFactory.Election)"
            },
            "typeName": {
              "id": 300,
              "keyType": {
                "id": 298,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "726:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "717:26:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                "typeString": "mapping(uint256 => struct ElectionFactory.Election)"
              },
              "valueType": {
                "contractScope": null,
                "id": 299,
                "name": "Election",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 284,
                "src": "734:8:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Election_$284_storage_ptr",
                  "typeString": "struct ElectionFactory.Election"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 305,
            "mutability": "mutable",
            "name": "electionToOwner",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 492,
            "src": "767:41:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
              "typeString": "mapping(uint256 => address)"
            },
            "typeName": {
              "id": 304,
              "keyType": {
                "id": 302,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "776:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "767:25:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "valueType": {
                "id": 303,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "784:7:1",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 309,
            "mutability": "mutable",
            "name": "ownerElectionCount",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 492,
            "src": "814:44:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 308,
              "keyType": {
                "id": 306,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "823:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "814:25:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 307,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "834:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 313,
            "mutability": "mutable",
            "name": "listAdmin",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 492,
            "src": "864:35:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 312,
              "keyType": {
                "id": 310,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "873:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "864:25:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueType": {
                "id": 311,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "884:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 327,
              "nodeType": "Block",
              "src": "945:93:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 322,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 318,
                            "name": "listAdmin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 313,
                            "src": "964:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 320,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 319,
                            "name": "_userAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 315,
                            "src": "974:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "964:23:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 321,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "991:4:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "964:31:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "596f7520617265206e6f7420616e2061646d696e",
                        "id": 323,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "997:22:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_632c1d5253c4622016d88515a7d58ab330f27aba90f2712c9f2c51792f895a09",
                          "typeString": "literal_string \"You are not an admin\""
                        },
                        "value": "You are not an admin"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_632c1d5253c4622016d88515a7d58ab330f27aba90f2712c9f2c51792f895a09",
                          "typeString": "literal_string \"You are not an admin\""
                        }
                      ],
                      "id": 317,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "955:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 324,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "955:65:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 325,
                  "nodeType": "ExpressionStatement",
                  "src": "955:65:1"
                },
                {
                  "id": 326,
                  "nodeType": "PlaceholderStatement",
                  "src": "1030:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 328,
            "name": "isAdmin",
            "nodeType": "ModifierDefinition",
            "overrides": null,
            "parameters": {
              "id": 316,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 315,
                  "mutability": "mutable",
                  "name": "_userAddress",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 328,
                  "src": "923:20:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 314,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "923:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "922:22:1"
            },
            "src": "906:132:1",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 343,
              "nodeType": "Block",
              "src": "1113:47:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 341,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 337,
                        "name": "listAdmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 313,
                        "src": "1123:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 339,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 338,
                        "name": "_userAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 330,
                        "src": "1133:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1123:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 340,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1149:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1123:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 342,
                  "nodeType": "ExpressionStatement",
                  "src": "1123:30:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "70480275",
            "id": 344,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 333,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "1101:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 334,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1101:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  }
                ],
                "id": 335,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 332,
                  "name": "isAdmin",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 328,
                  "src": "1093:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1093:19:1"
              }
            ],
            "name": "addAdmin",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 331,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 330,
                  "mutability": "mutable",
                  "name": "_userAddress",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 344,
                  "src": "1062:20:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 329,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1062:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1061:22:1"
            },
            "returnParameters": {
              "id": 336,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1113:0:1"
            },
            "scope": 492,
            "src": "1044:116:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 367,
              "nodeType": "Block",
              "src": "1238:121:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 357,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 354,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "1256:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 355,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1256:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 356,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 983,
                          "src": "1270:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1256:19:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "43616e6e6f742072656d6f7665206f776e65722066726f6d2061646d696e73",
                        "id": 358,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1277:33:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f727c8215621b68eeb21ac843447ce990a08bc0ace8dc02ba600ffdc0f3fc6b9",
                          "typeString": "literal_string \"Cannot remove owner from admins\""
                        },
                        "value": "Cannot remove owner from admins"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f727c8215621b68eeb21ac843447ce990a08bc0ace8dc02ba600ffdc0f3fc6b9",
                          "typeString": "literal_string \"Cannot remove owner from admins\""
                        }
                      ],
                      "id": 353,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1248:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 359,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1248:63:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 360,
                  "nodeType": "ExpressionStatement",
                  "src": "1248:63:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 365,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 361,
                        "name": "listAdmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 313,
                        "src": "1321:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 363,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 362,
                        "name": "_userAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 346,
                        "src": "1331:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1321:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 364,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1347:5:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "1321:31:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 366,
                  "nodeType": "ExpressionStatement",
                  "src": "1321:31:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "27e1f7df",
            "id": 368,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 349,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "1226:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 350,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1226:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  }
                ],
                "id": 351,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 348,
                  "name": "isAdmin",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 328,
                  "src": "1218:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1218:19:1"
              }
            ],
            "name": "deleteAdmin",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 347,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 346,
                  "mutability": "mutable",
                  "name": "_userAddress",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 368,
                  "src": "1187:20:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 345,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1187:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1186:22:1"
            },
            "returnParameters": {
              "id": 352,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1238:0:1"
            },
            "scope": 492,
            "src": "1166:193:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 379,
              "nodeType": "Block",
              "src": "1434:46:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 375,
                      "name": "listAdmin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 313,
                      "src": "1451:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 377,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 376,
                      "name": "userAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 370,
                      "src": "1461:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1451:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 374,
                  "id": 378,
                  "nodeType": "Return",
                  "src": "1444:29:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "74d523a8",
            "id": 380,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isUserAdmin",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 371,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 370,
                  "mutability": "mutable",
                  "name": "userAddress",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 380,
                  "src": "1386:19:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 369,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1386:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1385:21:1"
            },
            "returnParameters": {
              "id": 374,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 373,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 380,
                  "src": "1429:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 372,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1429:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1428:6:1"
            },
            "scope": 492,
            "src": "1365:115:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 468,
              "nodeType": "Block",
              "src": "1610:554:1",
              "statements": [
                {
                  "assignments": [
                    395
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 395,
                      "mutability": "mutable",
                      "name": "nbCandidates",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 468,
                      "src": "1620:17:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 394,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1620:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 398,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 396,
                      "name": "_candidatesNames",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 385,
                      "src": "1640:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                        "typeString": "string memory[] memory"
                      }
                    },
                    "id": 397,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1640:23:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1620:43:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 400,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "1673:16:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 399,
                      "name": "electionsCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 297,
                      "src": "1673:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 401,
                  "nodeType": "ExpressionStatement",
                  "src": "1673:16:1"
                },
                {
                  "assignments": [
                    403
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 403,
                      "mutability": "mutable",
                      "name": "election",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 468,
                      "src": "1699:25:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Election_$284_storage_ptr",
                        "typeString": "struct ElectionFactory.Election"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 402,
                        "name": "Election",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 284,
                        "src": "1699:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$284_storage_ptr",
                          "typeString": "struct ElectionFactory.Election"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 407,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 404,
                      "name": "elections",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 301,
                      "src": "1727:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                        "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                      }
                    },
                    "id": 406,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 405,
                      "name": "electionsCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 297,
                      "src": "1737:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1727:25:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Election_$284_storage",
                      "typeString": "struct ElectionFactory.Election storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1699:53:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 412,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 408,
                        "name": "election",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 403,
                        "src": "1762:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$284_storage_ptr",
                          "typeString": "struct ElectionFactory.Election storage pointer"
                        }
                      },
                      "id": 410,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "title",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 260,
                      "src": "1762:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 411,
                      "name": "_title",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 382,
                      "src": "1779:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1762:23:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 413,
                  "nodeType": "ExpressionStatement",
                  "src": "1762:23:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 419,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 414,
                        "name": "election",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 403,
                        "src": "1795:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$284_storage_ptr",
                          "typeString": "struct ElectionFactory.Election storage pointer"
                        }
                      },
                      "id": 416,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "creationDate",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 262,
                      "src": "1795:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 417,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "1819:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 418,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1819:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1795:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 420,
                  "nodeType": "ExpressionStatement",
                  "src": "1795:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 425,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 421,
                        "name": "election",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 403,
                        "src": "1844:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$284_storage_ptr",
                          "typeString": "struct ElectionFactory.Election storage pointer"
                        }
                      },
                      "id": 423,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "totalVoters",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 266,
                      "src": "1844:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 424,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1867:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1844:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 426,
                  "nodeType": "ExpressionStatement",
                  "src": "1844:24:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 431,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 427,
                        "name": "election",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 403,
                        "src": "1878:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$284_storage_ptr",
                          "typeString": "struct ElectionFactory.Election storage pointer"
                        }
                      },
                      "id": 429,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "isOpen",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 268,
                      "src": "1878:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 430,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1896:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1878:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 432,
                  "nodeType": "ExpressionStatement",
                  "src": "1878:22:1"
                },
                {
                  "body": {
                    "id": 450,
                    "nodeType": "Block",
                    "src": "1951:74:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 444,
                              "name": "electionsCount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 297,
                              "src": "1978:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 445,
                                "name": "_candidatesNames",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 385,
                                "src": "1994:16:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                  "typeString": "string memory[] memory"
                                }
                              },
                              "id": 447,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 446,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 434,
                                "src": "2011:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1994:19:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 443,
                            "name": "addCandidate",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 491,
                            "src": "1965:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (uint256,string memory)"
                            }
                          },
                          "id": 448,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1965:49:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 449,
                        "nodeType": "ExpressionStatement",
                        "src": "1965:49:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 439,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 437,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 434,
                      "src": "1928:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 438,
                      "name": "nbCandidates",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 395,
                      "src": "1932:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1928:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 451,
                  "initializationExpression": {
                    "assignments": [
                      434
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 434,
                        "mutability": "mutable",
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 451,
                        "src": "1916:6:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 433,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1916:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 436,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 435,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1925:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1916:10:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 441,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1946:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 440,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 434,
                        "src": "1946:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 442,
                    "nodeType": "ExpressionStatement",
                    "src": "1946:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "1911:114:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 457,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 452,
                        "name": "electionToOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 305,
                        "src": "2035:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 454,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 453,
                        "name": "electionsCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 297,
                        "src": "2051:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2035:31:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 455,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "2069:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 456,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2069:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "2035:44:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 458,
                  "nodeType": "ExpressionStatement",
                  "src": "2035:44:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 464,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 459,
                        "name": "ownerElectionCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 309,
                        "src": "2090:18:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 462,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 460,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2109:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 461,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2109:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2090:30:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 463,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2124:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2090:35:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 465,
                  "nodeType": "ExpressionStatement",
                  "src": "2090:35:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 466,
                    "name": "electionsCount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 297,
                    "src": "2143:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 393,
                  "id": 467,
                  "nodeType": "Return",
                  "src": "2136:21:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "349813b2",
            "id": 469,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 388,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "1583:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 389,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1583:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  }
                ],
                "id": 390,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 387,
                  "name": "isAdmin",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 328,
                  "src": "1575:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1575:19:1"
              }
            ],
            "name": "createElection",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 386,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 382,
                  "mutability": "mutable",
                  "name": "_title",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 469,
                  "src": "1510:20:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 381,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1510:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 385,
                  "mutability": "mutable",
                  "name": "_candidatesNames",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 469,
                  "src": "1532:32:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 383,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1532:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 384,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1532:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1509:56:1"
            },
            "returnParameters": {
              "id": 393,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 392,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 469,
                  "src": "1604:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 391,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1604:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1603:6:1"
            },
            "scope": 492,
            "src": "1486:678:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 490,
              "nodeType": "Block",
              "src": "2247:114:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 488,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 476,
                              "name": "elections",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 301,
                              "src": "2257:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                                "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                              }
                            },
                            "id": 478,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 477,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 471,
                              "src": "2267:11:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2257:22:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Election_$284_storage",
                              "typeString": "struct ElectionFactory.Election storage ref"
                            }
                          },
                          "id": 479,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "candidates",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 274,
                          "src": "2257:33:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$295_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Candidate storage ref)"
                          }
                        },
                        "id": 485,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 484,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "2291:40:1",
                          "subExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 480,
                                "name": "elections",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 301,
                                "src": "2291:9:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                                  "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                }
                              },
                              "id": 482,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 481,
                                "name": "_electionId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 471,
                                "src": "2301:11:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2291:22:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Election_$284_storage",
                                "typeString": "struct ElectionFactory.Election storage ref"
                              }
                            },
                            "id": 483,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "candidatesCount",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 270,
                            "src": "2291:38:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2257:75:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Candidate_$295_storage",
                          "typeString": "struct ElectionFactory.Candidate storage ref"
                        }
                      },
                      "id": 486,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "name",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 286,
                      "src": "2257:80:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 487,
                      "name": "_candidateName",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 473,
                      "src": "2340:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "2257:97:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 489,
                  "nodeType": "ExpressionStatement",
                  "src": "2257:97:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "1750a3d0",
            "id": 491,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addCandidate",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 474,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 471,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 491,
                  "src": "2192:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 470,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2192:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 473,
                  "mutability": "mutable",
                  "name": "_candidateName",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 491,
                  "src": "2210:28:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 472,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2210:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2191:48:1"
            },
            "returnParameters": {
              "id": 475,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2247:0:1"
            },
            "scope": 492,
            "src": "2170:191:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 493,
        "src": "126:2237:1"
      }
    ],
    "src": "32:2332:1"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol",
      "exportedSymbols": {
        "ElectionFactory": [
          492
        ]
      },
      "license": "MIT"
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            ">=",
            "0.7",
            ".0",
            "<",
            "0.8",
            ".0"
          ]
        },
        "id": 244,
        "name": "PragmaDirective",
        "src": "32:33:1"
      },
      {
        "attributes": {
          "literals": [
            "experimental",
            "ABIEncoderV2"
          ]
        },
        "id": 245,
        "name": "PragmaDirective",
        "src": "66:33:1"
      },
      {
        "attributes": {
          "SourceUnit": 1040,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol",
          "file": "./ownable.sol",
          "scope": 493,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 246,
        "name": "ImportDirective",
        "src": "101:23:1"
      },
      {
        "attributes": {
          "abstract": false,
          "contractDependencies": [
            1039
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            492,
            1039
          ],
          "name": "ElectionFactory",
          "scope": 493
        },
        "children": [
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Ownable",
                  "referencedDeclaration": 1039,
                  "type": "contract Ownable"
                },
                "id": 247,
                "name": "UserDefinedTypeName",
                "src": "154:7:1"
              }
            ],
            "id": 248,
            "name": "InheritanceSpecifier",
            "src": "154:7:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": true,
              "kind": "constructor",
              "modifiers": [
                null
              ],
              "name": "",
              "overrides": null,
              "scope": 492,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 249,
                "name": "ParameterList",
                "src": "180:2:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 250,
                "name": "ParameterList",
                "src": "183:0:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 313,
                                  "type": "mapping(address => bool)",
                                  "value": "listAdmin"
                                },
                                "id": 251,
                                "name": "Identifier",
                                "src": "193:9:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 983,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 252,
                                "name": "Identifier",
                                "src": "203:5:1"
                              }
                            ],
                            "id": 253,
                            "name": "IndexAccess",
                            "src": "193:16:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 254,
                            "name": "Literal",
                            "src": "212:4:1"
                          }
                        ],
                        "id": 255,
                        "name": "Assignment",
                        "src": "193:23:1"
                      }
                    ],
                    "id": 256,
                    "name": "ExpressionStatement",
                    "src": "193:23:1"
                  }
                ],
                "id": 257,
                "name": "Block",
                "src": "183:40:1"
              }
            ],
            "id": 258,
            "name": "FunctionDefinition",
            "src": "168:55:1"
          },
          {
            "attributes": {
              "canonicalName": "ElectionFactory.Election",
              "name": "Election",
              "scope": 492,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "title",
                  "overrides": null,
                  "scope": 284,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 259,
                    "name": "ElementaryTypeName",
                    "src": "255:6:1"
                  }
                ],
                "id": 260,
                "name": "VariableDeclaration",
                "src": "255:12:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "creationDate",
                  "overrides": null,
                  "scope": 284,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 261,
                    "name": "ElementaryTypeName",
                    "src": "277:7:1"
                  }
                ],
                "id": 262,
                "name": "VariableDeclaration",
                "src": "277:20:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "closingDate",
                  "overrides": null,
                  "scope": 284,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 263,
                    "name": "ElementaryTypeName",
                    "src": "307:4:1"
                  }
                ],
                "id": 264,
                "name": "VariableDeclaration",
                "src": "307:16:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "totalVoters",
                  "overrides": null,
                  "scope": 284,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 265,
                    "name": "ElementaryTypeName",
                    "src": "333:4:1"
                  }
                ],
                "id": 266,
                "name": "VariableDeclaration",
                "src": "333:16:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "isOpen",
                  "overrides": null,
                  "scope": 284,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "bool",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bool",
                      "type": "bool"
                    },
                    "id": 267,
                    "name": "ElementaryTypeName",
                    "src": "359:4:1"
                  }
                ],
                "id": 268,
                "name": "VariableDeclaration",
                "src": "359:11:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "candidatesCount",
                  "overrides": null,
                  "scope": 284,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 269,
                    "name": "ElementaryTypeName",
                    "src": "381:4:1"
                  }
                ],
                "id": 270,
                "name": "VariableDeclaration",
                "src": "381:20:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "candidates",
                  "overrides": null,
                  "scope": 284,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "mapping(uint256 => struct ElectionFactory.Candidate)",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "type": "mapping(uint256 => struct ElectionFactory.Candidate)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 271,
                        "name": "ElementaryTypeName",
                        "src": "420:4:1"
                      },
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Candidate",
                          "referencedDeclaration": 295,
                          "type": "struct ElectionFactory.Candidate"
                        },
                        "id": 272,
                        "name": "UserDefinedTypeName",
                        "src": "428:9:1"
                      }
                    ],
                    "id": 273,
                    "name": "Mapping",
                    "src": "411:27:1"
                  }
                ],
                "id": 274,
                "name": "VariableDeclaration",
                "src": "411:38:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "voters",
                  "overrides": null,
                  "scope": 284,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "mapping(address => bool)",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "type": "mapping(address => bool)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 275,
                        "name": "ElementaryTypeName",
                        "src": "468:7:1"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 276,
                        "name": "ElementaryTypeName",
                        "src": "479:4:1"
                      }
                    ],
                    "id": 277,
                    "name": "Mapping",
                    "src": "459:25:1"
                  }
                ],
                "id": 278,
                "name": "VariableDeclaration",
                "src": "459:32:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "winners",
                  "overrides": null,
                  "scope": 284,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256[]",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "length": null,
                      "type": "uint256[]"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 279,
                        "name": "ElementaryTypeName",
                        "src": "501:4:1"
                      }
                    ],
                    "id": 280,
                    "name": "ArrayTypeName",
                    "src": "501:6:1"
                  }
                ],
                "id": 281,
                "name": "VariableDeclaration",
                "src": "501:14:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "winner",
                  "overrides": null,
                  "scope": 284,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 282,
                    "name": "ElementaryTypeName",
                    "src": "525:4:1"
                  }
                ],
                "id": 283,
                "name": "VariableDeclaration",
                "src": "525:11:1"
              }
            ],
            "id": 284,
            "name": "StructDefinition",
            "src": "229:314:1"
          },
          {
            "attributes": {
              "canonicalName": "ElectionFactory.Candidate",
              "name": "Candidate",
              "scope": 492,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "name",
                  "overrides": null,
                  "scope": 295,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 285,
                    "name": "ElementaryTypeName",
                    "src": "576:6:1"
                  }
                ],
                "id": 286,
                "name": "VariableDeclaration",
                "src": "576:11:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "notes",
                  "overrides": null,
                  "scope": 295,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "mapping(uint256 => uint256)",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "type": "mapping(uint256 => uint256)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 287,
                        "name": "ElementaryTypeName",
                        "src": "606:4:1"
                      },
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 288,
                        "name": "ElementaryTypeName",
                        "src": "614:4:1"
                      }
                    ],
                    "id": 289,
                    "name": "Mapping",
                    "src": "597:22:1"
                  }
                ],
                "id": 290,
                "name": "VariableDeclaration",
                "src": "597:28:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "percent",
                  "overrides": null,
                  "scope": 295,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 291,
                    "name": "ElementaryTypeName",
                    "src": "635:4:1"
                  }
                ],
                "id": 292,
                "name": "VariableDeclaration",
                "src": "635:12:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "averageNote",
                  "overrides": null,
                  "scope": 295,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 293,
                    "name": "ElementaryTypeName",
                    "src": "657:4:1"
                  }
                ],
                "id": 294,
                "name": "VariableDeclaration",
                "src": "657:16:1"
              }
            ],
            "id": 295,
            "name": "StructDefinition",
            "src": "549:131:1"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "9a74c695",
              "mutability": "mutable",
              "name": "electionsCount",
              "overrides": null,
              "scope": 492,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 296,
                "name": "ElementaryTypeName",
                "src": "685:4:1"
              }
            ],
            "id": 297,
            "name": "VariableDeclaration",
            "src": "685:26:1"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "5e6fef01",
              "mutability": "mutable",
              "name": "elections",
              "overrides": null,
              "scope": 492,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => struct ElectionFactory.Election)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => struct ElectionFactory.Election)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 298,
                    "name": "ElementaryTypeName",
                    "src": "726:4:1"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Election",
                      "referencedDeclaration": 284,
                      "type": "struct ElectionFactory.Election"
                    },
                    "id": 299,
                    "name": "UserDefinedTypeName",
                    "src": "734:8:1"
                  }
                ],
                "id": 300,
                "name": "Mapping",
                "src": "717:26:1"
              }
            ],
            "id": 301,
            "name": "VariableDeclaration",
            "src": "717:43:1"
          },
          {
            "attributes": {
              "constant": false,
              "mutability": "mutable",
              "name": "electionToOwner",
              "overrides": null,
              "scope": 492,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => address)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => address)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 302,
                    "name": "ElementaryTypeName",
                    "src": "776:4:1"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "stateMutability": "nonpayable",
                      "type": "address"
                    },
                    "id": 303,
                    "name": "ElementaryTypeName",
                    "src": "784:7:1"
                  }
                ],
                "id": 304,
                "name": "Mapping",
                "src": "767:25:1"
              }
            ],
            "id": 305,
            "name": "VariableDeclaration",
            "src": "767:41:1"
          },
          {
            "attributes": {
              "constant": false,
              "mutability": "mutable",
              "name": "ownerElectionCount",
              "overrides": null,
              "scope": 492,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => uint256)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 306,
                    "name": "ElementaryTypeName",
                    "src": "823:7:1"
                  },
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 307,
                    "name": "ElementaryTypeName",
                    "src": "834:4:1"
                  }
                ],
                "id": 308,
                "name": "Mapping",
                "src": "814:25:1"
              }
            ],
            "id": 309,
            "name": "VariableDeclaration",
            "src": "814:44:1"
          },
          {
            "attributes": {
              "constant": false,
              "mutability": "mutable",
              "name": "listAdmin",
              "overrides": null,
              "scope": 492,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => bool)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => bool)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 310,
                    "name": "ElementaryTypeName",
                    "src": "873:7:1"
                  },
                  {
                    "attributes": {
                      "name": "bool",
                      "type": "bool"
                    },
                    "id": 311,
                    "name": "ElementaryTypeName",
                    "src": "884:4:1"
                  }
                ],
                "id": 312,
                "name": "Mapping",
                "src": "864:25:1"
              }
            ],
            "id": 313,
            "name": "VariableDeclaration",
            "src": "864:35:1"
          },
          {
            "attributes": {
              "documentation": null,
              "name": "isAdmin",
              "overrides": null,
              "virtual": false,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_userAddress",
                      "overrides": null,
                      "scope": 328,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 314,
                        "name": "ElementaryTypeName",
                        "src": "923:7:1"
                      }
                    ],
                    "id": 315,
                    "name": "VariableDeclaration",
                    "src": "923:20:1"
                  }
                ],
                "id": 316,
                "name": "ParameterList",
                "src": "922:22:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_632c1d5253c4622016d88515a7d58ab330f27aba90f2712c9f2c51792f895a09",
                                  "typeString": "literal_string \"You are not an admin\""
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 317,
                            "name": "Identifier",
                            "src": "955:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 313,
                                      "type": "mapping(address => bool)",
                                      "value": "listAdmin"
                                    },
                                    "id": 318,
                                    "name": "Identifier",
                                    "src": "964:9:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 315,
                                      "type": "address",
                                      "value": "_userAddress"
                                    },
                                    "id": 319,
                                    "name": "Identifier",
                                    "src": "974:12:1"
                                  }
                                ],
                                "id": 320,
                                "name": "IndexAccess",
                                "src": "964:23:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "74727565",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "true"
                                },
                                "id": 321,
                                "name": "Literal",
                                "src": "991:4:1"
                              }
                            ],
                            "id": 322,
                            "name": "BinaryOperation",
                            "src": "964:31:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "596f7520617265206e6f7420616e2061646d696e",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"You are not an admin\"",
                              "value": "You are not an admin"
                            },
                            "id": 323,
                            "name": "Literal",
                            "src": "997:22:1"
                          }
                        ],
                        "id": 324,
                        "name": "FunctionCall",
                        "src": "955:65:1"
                      }
                    ],
                    "id": 325,
                    "name": "ExpressionStatement",
                    "src": "955:65:1"
                  },
                  {
                    "id": 326,
                    "name": "PlaceholderStatement",
                    "src": "1030:1:1"
                  }
                ],
                "id": 327,
                "name": "Block",
                "src": "945:93:1"
              }
            ],
            "id": 328,
            "name": "ModifierDefinition",
            "src": "906:132:1"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "70480275",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "addAdmin",
              "overrides": null,
              "scope": 492,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_userAddress",
                      "overrides": null,
                      "scope": 344,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 329,
                        "name": "ElementaryTypeName",
                        "src": "1062:7:1"
                      }
                    ],
                    "id": 330,
                    "name": "VariableDeclaration",
                    "src": "1062:20:1"
                  }
                ],
                "id": 331,
                "name": "ParameterList",
                "src": "1061:22:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 336,
                "name": "ParameterList",
                "src": "1113:0:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 328,
                      "type": "modifier (address)",
                      "value": "isAdmin"
                    },
                    "id": 332,
                    "name": "Identifier",
                    "src": "1093:7:1"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "member_name": "sender",
                      "referencedDeclaration": null,
                      "type": "address payable"
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": -15,
                          "type": "msg",
                          "value": "msg"
                        },
                        "id": 333,
                        "name": "Identifier",
                        "src": "1101:3:1"
                      }
                    ],
                    "id": 334,
                    "name": "MemberAccess",
                    "src": "1101:10:1"
                  }
                ],
                "id": 335,
                "name": "ModifierInvocation",
                "src": "1093:19:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 313,
                                  "type": "mapping(address => bool)",
                                  "value": "listAdmin"
                                },
                                "id": 337,
                                "name": "Identifier",
                                "src": "1123:9:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 330,
                                  "type": "address",
                                  "value": "_userAddress"
                                },
                                "id": 338,
                                "name": "Identifier",
                                "src": "1133:12:1"
                              }
                            ],
                            "id": 339,
                            "name": "IndexAccess",
                            "src": "1123:23:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 340,
                            "name": "Literal",
                            "src": "1149:4:1"
                          }
                        ],
                        "id": 341,
                        "name": "Assignment",
                        "src": "1123:30:1"
                      }
                    ],
                    "id": 342,
                    "name": "ExpressionStatement",
                    "src": "1123:30:1"
                  }
                ],
                "id": 343,
                "name": "Block",
                "src": "1113:47:1"
              }
            ],
            "id": 344,
            "name": "FunctionDefinition",
            "src": "1044:116:1"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "27e1f7df",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "deleteAdmin",
              "overrides": null,
              "scope": 492,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_userAddress",
                      "overrides": null,
                      "scope": 368,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 345,
                        "name": "ElementaryTypeName",
                        "src": "1187:7:1"
                      }
                    ],
                    "id": 346,
                    "name": "VariableDeclaration",
                    "src": "1187:20:1"
                  }
                ],
                "id": 347,
                "name": "ParameterList",
                "src": "1186:22:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 352,
                "name": "ParameterList",
                "src": "1238:0:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 328,
                      "type": "modifier (address)",
                      "value": "isAdmin"
                    },
                    "id": 348,
                    "name": "Identifier",
                    "src": "1218:7:1"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "member_name": "sender",
                      "referencedDeclaration": null,
                      "type": "address payable"
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": -15,
                          "type": "msg",
                          "value": "msg"
                        },
                        "id": 349,
                        "name": "Identifier",
                        "src": "1226:3:1"
                      }
                    ],
                    "id": 350,
                    "name": "MemberAccess",
                    "src": "1226:10:1"
                  }
                ],
                "id": 351,
                "name": "ModifierInvocation",
                "src": "1218:19:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_f727c8215621b68eeb21ac843447ce990a08bc0ace8dc02ba600ffdc0f3fc6b9",
                                  "typeString": "literal_string \"Cannot remove owner from admins\""
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 353,
                            "name": "Identifier",
                            "src": "1248:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address payable"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": -15,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 354,
                                    "name": "Identifier",
                                    "src": "1256:3:1"
                                  }
                                ],
                                "id": 355,
                                "name": "MemberAccess",
                                "src": "1256:10:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 983,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 356,
                                "name": "Identifier",
                                "src": "1270:5:1"
                              }
                            ],
                            "id": 357,
                            "name": "BinaryOperation",
                            "src": "1256:19:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "43616e6e6f742072656d6f7665206f776e65722066726f6d2061646d696e73",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Cannot remove owner from admins\"",
                              "value": "Cannot remove owner from admins"
                            },
                            "id": 358,
                            "name": "Literal",
                            "src": "1277:33:1"
                          }
                        ],
                        "id": 359,
                        "name": "FunctionCall",
                        "src": "1248:63:1"
                      }
                    ],
                    "id": 360,
                    "name": "ExpressionStatement",
                    "src": "1248:63:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 313,
                                  "type": "mapping(address => bool)",
                                  "value": "listAdmin"
                                },
                                "id": 361,
                                "name": "Identifier",
                                "src": "1321:9:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 346,
                                  "type": "address",
                                  "value": "_userAddress"
                                },
                                "id": 362,
                                "name": "Identifier",
                                "src": "1331:12:1"
                              }
                            ],
                            "id": 363,
                            "name": "IndexAccess",
                            "src": "1321:23:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "66616c7365",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "false"
                            },
                            "id": 364,
                            "name": "Literal",
                            "src": "1347:5:1"
                          }
                        ],
                        "id": 365,
                        "name": "Assignment",
                        "src": "1321:31:1"
                      }
                    ],
                    "id": 366,
                    "name": "ExpressionStatement",
                    "src": "1321:31:1"
                  }
                ],
                "id": 367,
                "name": "Block",
                "src": "1238:121:1"
              }
            ],
            "id": 368,
            "name": "FunctionDefinition",
            "src": "1166:193:1"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "74d523a8",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "isUserAdmin",
              "overrides": null,
              "scope": 492,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "userAddress",
                      "overrides": null,
                      "scope": 380,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 369,
                        "name": "ElementaryTypeName",
                        "src": "1386:7:1"
                      }
                    ],
                    "id": 370,
                    "name": "VariableDeclaration",
                    "src": "1386:19:1"
                  }
                ],
                "id": 371,
                "name": "ParameterList",
                "src": "1385:21:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 380,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 372,
                        "name": "ElementaryTypeName",
                        "src": "1429:4:1"
                      }
                    ],
                    "id": 373,
                    "name": "VariableDeclaration",
                    "src": "1429:4:1"
                  }
                ],
                "id": 374,
                "name": "ParameterList",
                "src": "1428:6:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 374
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 313,
                              "type": "mapping(address => bool)",
                              "value": "listAdmin"
                            },
                            "id": 375,
                            "name": "Identifier",
                            "src": "1451:9:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 370,
                              "type": "address",
                              "value": "userAddress"
                            },
                            "id": 376,
                            "name": "Identifier",
                            "src": "1461:11:1"
                          }
                        ],
                        "id": 377,
                        "name": "IndexAccess",
                        "src": "1451:22:1"
                      }
                    ],
                    "id": 378,
                    "name": "Return",
                    "src": "1444:29:1"
                  }
                ],
                "id": 379,
                "name": "Block",
                "src": "1434:46:1"
              }
            ],
            "id": 380,
            "name": "FunctionDefinition",
            "src": "1365:115:1"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "349813b2",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "createElection",
              "overrides": null,
              "scope": 492,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_title",
                      "overrides": null,
                      "scope": 469,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 381,
                        "name": "ElementaryTypeName",
                        "src": "1510:6:1"
                      }
                    ],
                    "id": 382,
                    "name": "VariableDeclaration",
                    "src": "1510:20:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_candidatesNames",
                      "overrides": null,
                      "scope": 469,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string[]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "string[]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string"
                            },
                            "id": 383,
                            "name": "ElementaryTypeName",
                            "src": "1532:6:1"
                          }
                        ],
                        "id": 384,
                        "name": "ArrayTypeName",
                        "src": "1532:8:1"
                      }
                    ],
                    "id": 385,
                    "name": "VariableDeclaration",
                    "src": "1532:32:1"
                  }
                ],
                "id": 386,
                "name": "ParameterList",
                "src": "1509:56:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 469,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 391,
                        "name": "ElementaryTypeName",
                        "src": "1604:4:1"
                      }
                    ],
                    "id": 392,
                    "name": "VariableDeclaration",
                    "src": "1604:4:1"
                  }
                ],
                "id": 393,
                "name": "ParameterList",
                "src": "1603:6:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 328,
                      "type": "modifier (address)",
                      "value": "isAdmin"
                    },
                    "id": 387,
                    "name": "Identifier",
                    "src": "1575:7:1"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "member_name": "sender",
                      "referencedDeclaration": null,
                      "type": "address payable"
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": -15,
                          "type": "msg",
                          "value": "msg"
                        },
                        "id": 388,
                        "name": "Identifier",
                        "src": "1583:3:1"
                      }
                    ],
                    "id": 389,
                    "name": "MemberAccess",
                    "src": "1583:10:1"
                  }
                ],
                "id": 390,
                "name": "ModifierInvocation",
                "src": "1575:19:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        395
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "nbCandidates",
                          "overrides": null,
                          "scope": 468,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 394,
                            "name": "ElementaryTypeName",
                            "src": "1620:4:1"
                          }
                        ],
                        "id": 395,
                        "name": "VariableDeclaration",
                        "src": "1620:17:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "length",
                          "referencedDeclaration": null,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 385,
                              "type": "string memory[] memory",
                              "value": "_candidatesNames"
                            },
                            "id": 396,
                            "name": "Identifier",
                            "src": "1640:16:1"
                          }
                        ],
                        "id": 397,
                        "name": "MemberAccess",
                        "src": "1640:23:1"
                      }
                    ],
                    "id": 398,
                    "name": "VariableDeclarationStatement",
                    "src": "1620:43:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "++",
                          "prefix": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 297,
                              "type": "uint256",
                              "value": "electionsCount"
                            },
                            "id": 399,
                            "name": "Identifier",
                            "src": "1673:14:1"
                          }
                        ],
                        "id": 400,
                        "name": "UnaryOperation",
                        "src": "1673:16:1"
                      }
                    ],
                    "id": 401,
                    "name": "ExpressionStatement",
                    "src": "1673:16:1"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        403
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "election",
                          "overrides": null,
                          "scope": 468,
                          "stateVariable": false,
                          "storageLocation": "storage",
                          "type": "struct ElectionFactory.Election",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Election",
                              "referencedDeclaration": 284,
                              "type": "struct ElectionFactory.Election"
                            },
                            "id": 402,
                            "name": "UserDefinedTypeName",
                            "src": "1699:8:1"
                          }
                        ],
                        "id": 403,
                        "name": "VariableDeclaration",
                        "src": "1699:25:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "struct ElectionFactory.Election storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 301,
                              "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                              "value": "elections"
                            },
                            "id": 404,
                            "name": "Identifier",
                            "src": "1727:9:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 297,
                              "type": "uint256",
                              "value": "electionsCount"
                            },
                            "id": 405,
                            "name": "Identifier",
                            "src": "1737:14:1"
                          }
                        ],
                        "id": 406,
                        "name": "IndexAccess",
                        "src": "1727:25:1"
                      }
                    ],
                    "id": 407,
                    "name": "VariableDeclarationStatement",
                    "src": "1699:53:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "member_name": "title",
                              "referencedDeclaration": 260,
                              "type": "string storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 403,
                                  "type": "struct ElectionFactory.Election storage pointer",
                                  "value": "election"
                                },
                                "id": 408,
                                "name": "Identifier",
                                "src": "1762:8:1"
                              }
                            ],
                            "id": 410,
                            "name": "MemberAccess",
                            "src": "1762:14:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 382,
                              "type": "string memory",
                              "value": "_title"
                            },
                            "id": 411,
                            "name": "Identifier",
                            "src": "1779:6:1"
                          }
                        ],
                        "id": 412,
                        "name": "Assignment",
                        "src": "1762:23:1"
                      }
                    ],
                    "id": 413,
                    "name": "ExpressionStatement",
                    "src": "1762:23:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "member_name": "creationDate",
                              "referencedDeclaration": 262,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 403,
                                  "type": "struct ElectionFactory.Election storage pointer",
                                  "value": "election"
                                },
                                "id": 414,
                                "name": "Identifier",
                                "src": "1795:8:1"
                              }
                            ],
                            "id": 416,
                            "name": "MemberAccess",
                            "src": "1795:21:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "timestamp",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": -4,
                                  "type": "block",
                                  "value": "block"
                                },
                                "id": 417,
                                "name": "Identifier",
                                "src": "1819:5:1"
                              }
                            ],
                            "id": 418,
                            "name": "MemberAccess",
                            "src": "1819:15:1"
                          }
                        ],
                        "id": 419,
                        "name": "Assignment",
                        "src": "1795:39:1"
                      }
                    ],
                    "id": 420,
                    "name": "ExpressionStatement",
                    "src": "1795:39:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "member_name": "totalVoters",
                              "referencedDeclaration": 266,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 403,
                                  "type": "struct ElectionFactory.Election storage pointer",
                                  "value": "election"
                                },
                                "id": 421,
                                "name": "Identifier",
                                "src": "1844:8:1"
                              }
                            ],
                            "id": 423,
                            "name": "MemberAccess",
                            "src": "1844:20:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 424,
                            "name": "Literal",
                            "src": "1867:1:1"
                          }
                        ],
                        "id": 425,
                        "name": "Assignment",
                        "src": "1844:24:1"
                      }
                    ],
                    "id": 426,
                    "name": "ExpressionStatement",
                    "src": "1844:24:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "member_name": "isOpen",
                              "referencedDeclaration": 268,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 403,
                                  "type": "struct ElectionFactory.Election storage pointer",
                                  "value": "election"
                                },
                                "id": 427,
                                "name": "Identifier",
                                "src": "1878:8:1"
                              }
                            ],
                            "id": 429,
                            "name": "MemberAccess",
                            "src": "1878:15:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 430,
                            "name": "Literal",
                            "src": "1896:4:1"
                          }
                        ],
                        "id": 431,
                        "name": "Assignment",
                        "src": "1878:22:1"
                      }
                    ],
                    "id": 432,
                    "name": "ExpressionStatement",
                    "src": "1878:22:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            434
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "mutability": "mutable",
                              "name": "i",
                              "overrides": null,
                              "scope": 451,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint256",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 433,
                                "name": "ElementaryTypeName",
                                "src": "1916:4:1"
                              }
                            ],
                            "id": 434,
                            "name": "VariableDeclaration",
                            "src": "1916:6:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 435,
                            "name": "Literal",
                            "src": "1925:1:1"
                          }
                        ],
                        "id": 436,
                        "name": "VariableDeclarationStatement",
                        "src": "1916:10:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 434,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 437,
                            "name": "Identifier",
                            "src": "1928:1:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 395,
                              "type": "uint256",
                              "value": "nbCandidates"
                            },
                            "id": 438,
                            "name": "Identifier",
                            "src": "1932:12:1"
                          }
                        ],
                        "id": 439,
                        "name": "BinaryOperation",
                        "src": "1928:16:1"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 434,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 440,
                                "name": "Identifier",
                                "src": "1946:1:1"
                              }
                            ],
                            "id": 441,
                            "name": "UnaryOperation",
                            "src": "1946:3:1"
                          }
                        ],
                        "id": 442,
                        "name": "ExpressionStatement",
                        "src": "1946:3:1"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        {
                                          "typeIdentifier": "t_string_memory_ptr",
                                          "typeString": "string memory"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 491,
                                      "type": "function (uint256,string memory)",
                                      "value": "addCandidate"
                                    },
                                    "id": 443,
                                    "name": "Identifier",
                                    "src": "1965:12:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 297,
                                      "type": "uint256",
                                      "value": "electionsCount"
                                    },
                                    "id": 444,
                                    "name": "Identifier",
                                    "src": "1978:14:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "string memory"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 385,
                                          "type": "string memory[] memory",
                                          "value": "_candidatesNames"
                                        },
                                        "id": 445,
                                        "name": "Identifier",
                                        "src": "1994:16:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 434,
                                          "type": "uint256",
                                          "value": "i"
                                        },
                                        "id": 446,
                                        "name": "Identifier",
                                        "src": "2011:1:1"
                                      }
                                    ],
                                    "id": 447,
                                    "name": "IndexAccess",
                                    "src": "1994:19:1"
                                  }
                                ],
                                "id": 448,
                                "name": "FunctionCall",
                                "src": "1965:49:1"
                              }
                            ],
                            "id": 449,
                            "name": "ExpressionStatement",
                            "src": "1965:49:1"
                          }
                        ],
                        "id": 450,
                        "name": "Block",
                        "src": "1951:74:1"
                      }
                    ],
                    "id": 451,
                    "name": "ForStatement",
                    "src": "1911:114:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 305,
                                  "type": "mapping(uint256 => address)",
                                  "value": "electionToOwner"
                                },
                                "id": 452,
                                "name": "Identifier",
                                "src": "2035:15:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 297,
                                  "type": "uint256",
                                  "value": "electionsCount"
                                },
                                "id": 453,
                                "name": "Identifier",
                                "src": "2051:14:1"
                              }
                            ],
                            "id": 454,
                            "name": "IndexAccess",
                            "src": "2035:31:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": -15,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 455,
                                "name": "Identifier",
                                "src": "2069:3:1"
                              }
                            ],
                            "id": 456,
                            "name": "MemberAccess",
                            "src": "2069:10:1"
                          }
                        ],
                        "id": 457,
                        "name": "Assignment",
                        "src": "2035:44:1"
                      }
                    ],
                    "id": 458,
                    "name": "ExpressionStatement",
                    "src": "2035:44:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "+=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 309,
                                  "type": "mapping(address => uint256)",
                                  "value": "ownerElectionCount"
                                },
                                "id": 459,
                                "name": "Identifier",
                                "src": "2090:18:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address payable"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": -15,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 460,
                                    "name": "Identifier",
                                    "src": "2109:3:1"
                                  }
                                ],
                                "id": 461,
                                "name": "MemberAccess",
                                "src": "2109:10:1"
                              }
                            ],
                            "id": 462,
                            "name": "IndexAccess",
                            "src": "2090:30:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "31",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 1",
                              "value": "1"
                            },
                            "id": 463,
                            "name": "Literal",
                            "src": "2124:1:1"
                          }
                        ],
                        "id": 464,
                        "name": "Assignment",
                        "src": "2090:35:1"
                      }
                    ],
                    "id": 465,
                    "name": "ExpressionStatement",
                    "src": "2090:35:1"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 393
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 297,
                          "type": "uint256",
                          "value": "electionsCount"
                        },
                        "id": 466,
                        "name": "Identifier",
                        "src": "2143:14:1"
                      }
                    ],
                    "id": 467,
                    "name": "Return",
                    "src": "2136:21:1"
                  }
                ],
                "id": 468,
                "name": "Block",
                "src": "1610:554:1"
              }
            ],
            "id": 469,
            "name": "FunctionDefinition",
            "src": "1486:678:1"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "1750a3d0",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "addCandidate",
              "overrides": null,
              "scope": 492,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_electionId",
                      "overrides": null,
                      "scope": 491,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 470,
                        "name": "ElementaryTypeName",
                        "src": "2192:4:1"
                      }
                    ],
                    "id": 471,
                    "name": "VariableDeclaration",
                    "src": "2192:16:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_candidateName",
                      "overrides": null,
                      "scope": 491,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 472,
                        "name": "ElementaryTypeName",
                        "src": "2210:6:1"
                      }
                    ],
                    "id": 473,
                    "name": "VariableDeclaration",
                    "src": "2210:28:1"
                  }
                ],
                "id": 474,
                "name": "ParameterList",
                "src": "2191:48:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 475,
                "name": "ParameterList",
                "src": "2247:0:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "member_name": "name",
                              "referencedDeclaration": 286,
                              "type": "string storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct ElectionFactory.Candidate storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "candidates",
                                      "referencedDeclaration": 274,
                                      "type": "mapping(uint256 => struct ElectionFactory.Candidate storage ref)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct ElectionFactory.Election storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 301,
                                              "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                              "value": "elections"
                                            },
                                            "id": 476,
                                            "name": "Identifier",
                                            "src": "2257:9:1"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 471,
                                              "type": "uint256",
                                              "value": "_electionId"
                                            },
                                            "id": 477,
                                            "name": "Identifier",
                                            "src": "2267:11:1"
                                          }
                                        ],
                                        "id": 478,
                                        "name": "IndexAccess",
                                        "src": "2257:22:1"
                                      }
                                    ],
                                    "id": 479,
                                    "name": "MemberAccess",
                                    "src": "2257:33:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "++",
                                      "prefix": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": true,
                                          "member_name": "candidatesCount",
                                          "referencedDeclaration": 270,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "struct ElectionFactory.Election storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 301,
                                                  "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                  "value": "elections"
                                                },
                                                "id": 480,
                                                "name": "Identifier",
                                                "src": "2291:9:1"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 471,
                                                  "type": "uint256",
                                                  "value": "_electionId"
                                                },
                                                "id": 481,
                                                "name": "Identifier",
                                                "src": "2301:11:1"
                                              }
                                            ],
                                            "id": 482,
                                            "name": "IndexAccess",
                                            "src": "2291:22:1"
                                          }
                                        ],
                                        "id": 483,
                                        "name": "MemberAccess",
                                        "src": "2291:38:1"
                                      }
                                    ],
                                    "id": 484,
                                    "name": "UnaryOperation",
                                    "src": "2291:40:1"
                                  }
                                ],
                                "id": 485,
                                "name": "IndexAccess",
                                "src": "2257:75:1"
                              }
                            ],
                            "id": 486,
                            "name": "MemberAccess",
                            "src": "2257:80:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 473,
                              "type": "string memory",
                              "value": "_candidateName"
                            },
                            "id": 487,
                            "name": "Identifier",
                            "src": "2340:14:1"
                          }
                        ],
                        "id": 488,
                        "name": "Assignment",
                        "src": "2257:97:1"
                      }
                    ],
                    "id": 489,
                    "name": "ExpressionStatement",
                    "src": "2257:97:1"
                  }
                ],
                "id": 490,
                "name": "Block",
                "src": "2247:114:1"
              }
            ],
            "id": 491,
            "name": "FunctionDefinition",
            "src": "2170:191:1"
          }
        ],
        "id": 492,
        "name": "ContractDefinition",
        "src": "126:2237:1"
      }
    ],
    "id": 493,
    "name": "SourceUnit",
    "src": "32:2332:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.7.0+commit.9e61f92b.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.3",
  "updatedAt": "2021-01-22T16:32:52.554Z",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "transferOwnership(address)": {
        "details": "Allows the current owner to transfer control of the contract to a newOwner.",
        "params": {
          "newOwner": "The address to transfer ownership to."
        }
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
};