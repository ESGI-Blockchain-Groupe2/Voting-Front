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
  "metadata": "{\"compiler\":{\"version\":\"0.7.0+commit.9e61f92b\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"addAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_candidateName\",\"type\":\"string\"}],\"name\":\"addCandidate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_title\",\"type\":\"string\"},{\"internalType\":\"string[]\",\"name\":\"_candidatesNames\",\"type\":\"string[]\"}],\"name\":\"createElection\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"deleteAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"elections\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"creationDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"closingDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalVoters\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"isOpen\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"candidatesCount\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"electionsCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"userAddress\",\"type\":\"address\"}],\"name\":\"isUserAdmin\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol\":\"ElectionFactory\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol\":{\"keccak256\":\"0x2543f5b375ccf859c893cf934b47a1adc76385e0414b386d5326f2095cdcbfa5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ec9e0e001fa346a82f6a7141ece6527f14a152d6d2b05f92e12fd4e48cd6d02a\",\"dweb:/ipfs/QmXdWYie9NXU6RPbkgG9ZkdLWRKXaMKj1DQuJAE34PkbNx\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol\":{\"keccak256\":\"0x7f1004825e1cc40d7b663e20d3be71ed9c64baf7f05eae9b115a4d4448c8fdcf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5d8ccf5e65c162aeabb1b5e804f7183d95be7a985d5466796025a39ede9cfa62\",\"dweb:/ipfs/QmNZR6izJaw2bC9aCAcVbtS1kE9YBWuuqoaryy8idA14ta\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600560008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610f73806100d96000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80637048027511610066578063704802751461013557806374d523a8146101515780638da5cb5b146101815780639a74c6951461019f578063f2fde38b146101bd57610093565b80631750a3d01461009857806327e1f7df146100b4578063349813b2146100d05780635e6fef0114610100575b600080fd5b6100b260048036038101906100ad9190610ba4565b6101d9565b005b6100ce60048036038101906100c99190610ae6565b610240565b005b6100ea60048036038101906100e59190610b0f565b6103bf565b6040516100f79190610dbc565b60405180910390f35b61011a60048036038101906101159190610b7b565b6105b7565b60405161012c96959493929190610d14565b60405180910390f35b61014f600480360381019061014a9190610ae6565b610698565b005b61016b60048036038101906101669190610ae6565b610788565b6040516101789190610cf9565b60405180910390f35b6101896107de565b6040516101969190610cde565b60405180910390f35b6101a7610802565b6040516101b49190610dbc565b60405180910390f35b6101d760048036038101906101d29190610ae6565b610808565b005b80600260008481526020019081526020016000206006016000600260008681526020019081526020016000206005016000815480929190600101919050558152602001908152602001600020600001908051906020019061023b929190610957565b505050565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146102d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102cb90610d7c565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610363576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035a90610d9c565b60405180910390fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60003360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610455576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044c90610d7c565b60405180910390fd5b600083519050600160008154809291906001019190505550600060026000600154815260200190815260200160002090508581600001908051906020019061049e929190610957565b504281600101819055506000816003018190555060018160040160006101000a81548160ff02191690831515021790555060005b82811015610506576104f96001548783815181106104ec57fe5b60200260200101516101d9565b80806001019150506104d2565b503360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600154935050505092915050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106635780601f1061063857610100808354040283529160200191610663565b820191906000526020600020905b81548152906001019060200180831161064657829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154905086565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151461072c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072390610d7c565b60405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461086057600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561089a57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061099857805160ff19168380011785556109c6565b828001600101855582156109c6579182015b828111156109c55782518255916020019190600101906109aa565b5b5090506109d391906109d7565b5090565b5b808211156109f05760008160009055506001016109d8565b5090565b600081359050610a0381610f0f565b92915050565b600082601f830112610a1a57600080fd5b8135610a2d610a2882610e04565b610dd7565b9150818183526020840193506020810190508360005b83811015610a735781358601610a598882610a7d565b845260208401935060208301925050600181019050610a43565b5050505092915050565b600082601f830112610a8e57600080fd5b8135610aa1610a9c82610e2c565b610dd7565b91508082526020830160208301858383011115610abd57600080fd5b610ac8838284610ebc565b50505092915050565b600081359050610ae081610f26565b92915050565b600060208284031215610af857600080fd5b6000610b06848285016109f4565b91505092915050565b60008060408385031215610b2257600080fd5b600083013567ffffffffffffffff811115610b3c57600080fd5b610b4885828601610a7d565b925050602083013567ffffffffffffffff811115610b6557600080fd5b610b7185828601610a09565b9150509250929050565b600060208284031215610b8d57600080fd5b6000610b9b84828501610ad1565b91505092915050565b60008060408385031215610bb757600080fd5b6000610bc585828601610ad1565b925050602083013567ffffffffffffffff811115610be257600080fd5b610bee85828601610a7d565b9150509250929050565b610c0181610e74565b82525050565b610c1081610e86565b82525050565b6000610c2182610e58565b610c2b8185610e63565b9350610c3b818560208601610ecb565b610c4481610efe565b840191505092915050565b6000610c5c601483610e63565b91507f596f7520617265206e6f7420616e2061646d696e0000000000000000000000006000830152602082019050919050565b6000610c9c601f83610e63565b91507f43616e6e6f742072656d6f7665206f776e65722066726f6d2061646d696e73006000830152602082019050919050565b610cd881610eb2565b82525050565b6000602082019050610cf36000830184610bf8565b92915050565b6000602082019050610d0e6000830184610c07565b92915050565b600060c0820190508181036000830152610d2e8189610c16565b9050610d3d6020830188610ccf565b610d4a6040830187610ccf565b610d576060830186610ccf565b610d646080830185610c07565b610d7160a0830184610ccf565b979650505050505050565b60006020820190508181036000830152610d9581610c4f565b9050919050565b60006020820190508181036000830152610db581610c8f565b9050919050565b6000602082019050610dd16000830184610ccf565b92915050565b6000604051905081810181811067ffffffffffffffff82111715610dfa57600080fd5b8060405250919050565b600067ffffffffffffffff821115610e1b57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff821115610e4357600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000610e7f82610e92565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610ee9578082015181840152602081019050610ece565b83811115610ef8576000848401525b50505050565b6000601f19601f8301169050919050565b610f1881610e74565b8114610f2357600080fd5b50565b610f2f81610eb2565b8114610f3a57600080fd5b5056fea2646970667358221220806f3531ae76876d9013b9477d3d2a55d84957049b31029fa048775cff9b81d264736f6c63430007000033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100935760003560e01c80637048027511610066578063704802751461013557806374d523a8146101515780638da5cb5b146101815780639a74c6951461019f578063f2fde38b146101bd57610093565b80631750a3d01461009857806327e1f7df146100b4578063349813b2146100d05780635e6fef0114610100575b600080fd5b6100b260048036038101906100ad9190610ba4565b6101d9565b005b6100ce60048036038101906100c99190610ae6565b610240565b005b6100ea60048036038101906100e59190610b0f565b6103bf565b6040516100f79190610dbc565b60405180910390f35b61011a60048036038101906101159190610b7b565b6105b7565b60405161012c96959493929190610d14565b60405180910390f35b61014f600480360381019061014a9190610ae6565b610698565b005b61016b60048036038101906101669190610ae6565b610788565b6040516101789190610cf9565b60405180910390f35b6101896107de565b6040516101969190610cde565b60405180910390f35b6101a7610802565b6040516101b49190610dbc565b60405180910390f35b6101d760048036038101906101d29190610ae6565b610808565b005b80600260008481526020019081526020016000206006016000600260008681526020019081526020016000206005016000815480929190600101919050558152602001908152602001600020600001908051906020019061023b929190610957565b505050565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146102d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102cb90610d7c565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610363576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035a90610d9c565b60405180910390fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60003360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610455576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044c90610d7c565b60405180910390fd5b600083519050600160008154809291906001019190505550600060026000600154815260200190815260200160002090508581600001908051906020019061049e929190610957565b504281600101819055506000816003018190555060018160040160006101000a81548160ff02191690831515021790555060005b82811015610506576104f96001548783815181106104ec57fe5b60200260200101516101d9565b80806001019150506104d2565b503360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600154935050505092915050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106635780601f1061063857610100808354040283529160200191610663565b820191906000526020600020905b81548152906001019060200180831161064657829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154905086565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151461072c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072390610d7c565b60405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461086057600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561089a57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061099857805160ff19168380011785556109c6565b828001600101855582156109c6579182015b828111156109c55782518255916020019190600101906109aa565b5b5090506109d391906109d7565b5090565b5b808211156109f05760008160009055506001016109d8565b5090565b600081359050610a0381610f0f565b92915050565b600082601f830112610a1a57600080fd5b8135610a2d610a2882610e04565b610dd7565b9150818183526020840193506020810190508360005b83811015610a735781358601610a598882610a7d565b845260208401935060208301925050600181019050610a43565b5050505092915050565b600082601f830112610a8e57600080fd5b8135610aa1610a9c82610e2c565b610dd7565b91508082526020830160208301858383011115610abd57600080fd5b610ac8838284610ebc565b50505092915050565b600081359050610ae081610f26565b92915050565b600060208284031215610af857600080fd5b6000610b06848285016109f4565b91505092915050565b60008060408385031215610b2257600080fd5b600083013567ffffffffffffffff811115610b3c57600080fd5b610b4885828601610a7d565b925050602083013567ffffffffffffffff811115610b6557600080fd5b610b7185828601610a09565b9150509250929050565b600060208284031215610b8d57600080fd5b6000610b9b84828501610ad1565b91505092915050565b60008060408385031215610bb757600080fd5b6000610bc585828601610ad1565b925050602083013567ffffffffffffffff811115610be257600080fd5b610bee85828601610a7d565b9150509250929050565b610c0181610e74565b82525050565b610c1081610e86565b82525050565b6000610c2182610e58565b610c2b8185610e63565b9350610c3b818560208601610ecb565b610c4481610efe565b840191505092915050565b6000610c5c601483610e63565b91507f596f7520617265206e6f7420616e2061646d696e0000000000000000000000006000830152602082019050919050565b6000610c9c601f83610e63565b91507f43616e6e6f742072656d6f7665206f776e65722066726f6d2061646d696e73006000830152602082019050919050565b610cd881610eb2565b82525050565b6000602082019050610cf36000830184610bf8565b92915050565b6000602082019050610d0e6000830184610c07565b92915050565b600060c0820190508181036000830152610d2e8189610c16565b9050610d3d6020830188610ccf565b610d4a6040830187610ccf565b610d576060830186610ccf565b610d646080830185610c07565b610d7160a0830184610ccf565b979650505050505050565b60006020820190508181036000830152610d9581610c4f565b9050919050565b60006020820190508181036000830152610db581610c8f565b9050919050565b6000602082019050610dd16000830184610ccf565b92915050565b6000604051905081810181811067ffffffffffffffff82111715610dfa57600080fd5b8060405250919050565b600067ffffffffffffffff821115610e1b57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff821115610e4357600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000610e7f82610e92565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610ee9578082015181840152602081019050610ece565b83811115610ef8576000848401525b50505050565b6000601f19601f8301169050919050565b610f1881610e74565b8114610f2357600080fd5b50565b610f2f81610eb2565b8114610f3a57600080fd5b5056fea2646970667358221220806f3531ae76876d9013b9477d3d2a55d84957049b31029fa048775cff9b81d264736f6c63430007000033",
  "immutableReferences": {},
  "sourceMap": "126:2216:1:-:0;;;168:55;;;;;;;;;;552:10:5;544:5;;:18;;;;;;;;;;;;;;;;;;212:4:1;193:9;:16;203:5;;;;;;;;;;;193:16;;;;;;;;;;;;;;;;:23;;;;;;;;;;;;;;;;;;126:2216;;;;;;",
  "deployedSourceMap": "126:2216:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2149:191;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1145:193;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1465:678;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;696:43;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;:::i;:::-;;;;;;;;1023:116;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1344:115;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;279:20:5;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;664:26:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;907:188:5;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2149:191:1;2319:14;2236:9;:22;2246:11;2236:22;;;;;;;;;;;:33;;:75;2270:9;:22;2280:11;2270:22;;;;;;;;;;;:38;;;:40;;;;;;;;;;;;2236:75;;;;;;;;;;;:80;;:97;;;;;;;;;;;;:::i;:::-;;2149:191;;:::o;1145:193::-;1205:10;970:4;943:31;;:9;:23;953:12;943:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;934:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1249:5:::1;::::0;::::1;;;;;;;;1235:19;;:10;:19;;;;1227:63;;;;;;;;;;;;:::i;:::-;;;;;;;;;1326:5;1300:9;:23;1310:12;1300:23;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;;;;;;;1145:193:::0;;:::o;1465:678::-;1583:4;1562:10;970:4;943:31;;:9;:23;953:12;943:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;934:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1599:17:::1;1619:16;:23;1599:43;;1652:14;;:16;;;;;;;;;;;;;1678:25;1706:9;:25;1716:14;;1706:25;;;;;;;;;;;1678:53;;1758:6;1741:8;:14;;:23;;;;;;;;;;;;:::i;:::-;;1798:15;1774:8;:21;;:39;;;;1846:1;1823:8;:20;;:24;;;;1875:4;1857:8;:15;;;:22;;;;;;;;;;;;;;;;;;1895:6;1890:114;1911:12;1907:1;:16;1890:114;;;1944:49;1957:14;;1973:16;1990:1;1973:19;;;;;;;;;;;;;;1944:12;:49::i;:::-;1925:3;;;;;;;1890:114;;;;2048:10;2014:15;:31;2030:14;;2014:31;;;;;;;;;;;;:44;;;;;;;;;;;;;;;;;;2103:1;2069:18;:30;2088:10;2069:30;;;;;;;;;;;;;;;;:35;;;;;;;;;;;2122:14;;2115:21;;;;1465:678:::0;;;;;:::o;696:43::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1023:116::-;1080:10;970:4;943:31;;:9;:23;953:12;943:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;934:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1128:4:::1;1102:9;:23;1112:12;1102:23;;;;;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;1023:116:::0;;:::o;1344:115::-;1408:4;1430:9;:22;1440:11;1430:22;;;;;;;;;;;;;;;;;;;;;;;;;1423:29;;1344:115;;;:::o;279:20:5:-;;;;;;;;;;;;:::o;664:26:1:-;;;;:::o;907:188:5:-;711:5;;;;;;;;;;697:19;;:10;:19;;;689:28;;;;;;1007:1:::1;987:22;;:8;:22;;;;979:31;;;::::0;::::1;;1053:8;1025:37;;1046:5;::::0;::::1;;;;;;;;1025:37;;;;;;;;;;;;1080:8;1072:5;::::0;:16:::1;;;;;;;;;;;;;;;;;;907:188:::0;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;5:130::-;;85:6;72:20;63:29;;97:33;124:5;97:33;:::i;:::-;57:78;;;;:::o;159:708::-;;286:3;279:4;271:6;267:17;263:27;253:2;;304:1;301;294:12;253:2;341:6;328:20;363:90;378:74;445:6;378:74;:::i;:::-;363:90;:::i;:::-;354:99;;470:5;495:6;488:5;481:21;525:4;517:6;513:17;503:27;;547:4;542:3;538:14;531:21;;600:6;633:1;618:243;643:6;640:1;637:13;618:243;;;726:3;713:17;705:6;701:30;750:47;793:3;781:10;750:47;:::i;:::-;745:3;738:60;821:4;816:3;812:14;805:21;;849:4;844:3;840:14;833:21;;675:186;665:1;662;658:9;653:14;;618:243;;;622:14;246:621;;;;;;;:::o;876:442::-;;978:3;971:4;963:6;959:17;955:27;945:2;;996:1;993;986:12;945:2;1033:6;1020:20;1055:65;1070:49;1112:6;1070:49;:::i;:::-;1055:65;:::i;:::-;1046:74;;1140:6;1133:5;1126:21;1176:4;1168:6;1164:17;1209:4;1202:5;1198:16;1244:3;1235:6;1230:3;1226:16;1223:25;1220:2;;;1261:1;1258;1251:12;1220:2;1271:41;1305:6;1300:3;1295;1271:41;:::i;:::-;938:380;;;;;;;:::o;1326:130::-;;1406:6;1393:20;1384:29;;1418:33;1445:5;1418:33;:::i;:::-;1378:78;;;;:::o;1463:241::-;;1567:2;1555:9;1546:7;1542:23;1538:32;1535:2;;;1583:1;1580;1573:12;1535:2;1618:1;1635:53;1680:7;1671:6;1660:9;1656:22;1635:53;:::i;:::-;1625:63;;1597:97;1529:175;;;;:::o;1711:628::-;;;1877:2;1865:9;1856:7;1852:23;1848:32;1845:2;;;1893:1;1890;1883:12;1845:2;1956:1;1945:9;1941:17;1928:31;1979:18;1971:6;1968:30;1965:2;;;2011:1;2008;2001:12;1965:2;2031:63;2086:7;2077:6;2066:9;2062:22;2031:63;:::i;:::-;2021:73;;1907:193;2159:2;2148:9;2144:18;2131:32;2183:18;2175:6;2172:30;2169:2;;;2215:1;2212;2205:12;2169:2;2235:88;2315:7;2306:6;2295:9;2291:22;2235:88;:::i;:::-;2225:98;;2110:219;1839:500;;;;;:::o;2346:241::-;;2450:2;2438:9;2429:7;2425:23;2421:32;2418:2;;;2466:1;2463;2456:12;2418:2;2501:1;2518:53;2563:7;2554:6;2543:9;2539:22;2518:53;:::i;:::-;2508:63;;2480:97;2412:175;;;;:::o;2594:472::-;;;2725:2;2713:9;2704:7;2700:23;2696:32;2693:2;;;2741:1;2738;2731:12;2693:2;2776:1;2793:53;2838:7;2829:6;2818:9;2814:22;2793:53;:::i;:::-;2783:63;;2755:97;2911:2;2900:9;2896:18;2883:32;2935:18;2927:6;2924:30;2921:2;;;2967:1;2964;2957:12;2921:2;2987:63;3042:7;3033:6;3022:9;3018:22;2987:63;:::i;:::-;2977:73;;2862:194;2687:379;;;;;:::o;3073:113::-;3156:24;3174:5;3156:24;:::i;:::-;3151:3;3144:37;3138:48;;:::o;3193:104::-;3270:21;3285:5;3270:21;:::i;:::-;3265:3;3258:34;3252:45;;:::o;3304:347::-;;3416:39;3449:5;3416:39;:::i;:::-;3467:71;3531:6;3526:3;3467:71;:::i;:::-;3460:78;;3543:52;3588:6;3583:3;3576:4;3569:5;3565:16;3543:52;:::i;:::-;3616:29;3638:6;3616:29;:::i;:::-;3611:3;3607:39;3600:46;;3396:255;;;;;:::o;3659:320::-;;3819:67;3883:2;3878:3;3819:67;:::i;:::-;3812:74;;3919:22;3915:1;3910:3;3906:11;3899:43;3970:2;3965:3;3961:12;3954:19;;3805:174;;;:::o;3988:331::-;;4148:67;4212:2;4207:3;4148:67;:::i;:::-;4141:74;;4248:33;4244:1;4239:3;4235:11;4228:54;4310:2;4305:3;4301:12;4294:19;;4134:185;;;:::o;4327:113::-;4410:24;4428:5;4410:24;:::i;:::-;4405:3;4398:37;4392:48;;:::o;4447:222::-;;4574:2;4563:9;4559:18;4551:26;;4588:71;4656:1;4645:9;4641:17;4632:6;4588:71;:::i;:::-;4545:124;;;;:::o;4676:210::-;;4797:2;4786:9;4782:18;4774:26;;4811:65;4873:1;4862:9;4858:17;4849:6;4811:65;:::i;:::-;4768:118;;;;:::o;4893:856::-;;5174:3;5163:9;5159:19;5151:27;;5225:9;5219:4;5215:20;5211:1;5200:9;5196:17;5189:47;5250:78;5323:4;5314:6;5250:78;:::i;:::-;5242:86;;5339:72;5407:2;5396:9;5392:18;5383:6;5339:72;:::i;:::-;5422;5490:2;5479:9;5475:18;5466:6;5422:72;:::i;:::-;5505;5573:2;5562:9;5558:18;5549:6;5505:72;:::i;:::-;5588:67;5650:3;5639:9;5635:19;5626:6;5588:67;:::i;:::-;5666:73;5734:3;5723:9;5719:19;5710:6;5666:73;:::i;:::-;5145:604;;;;;;;;;:::o;5756:416::-;;5956:2;5945:9;5941:18;5933:26;;6006:9;6000:4;5996:20;5992:1;5981:9;5977:17;5970:47;6031:131;6157:4;6031:131;:::i;:::-;6023:139;;5927:245;;;:::o;6179:416::-;;6379:2;6368:9;6364:18;6356:26;;6429:9;6423:4;6419:20;6415:1;6404:9;6400:17;6393:47;6454:131;6580:4;6454:131;:::i;:::-;6446:139;;6350:245;;;:::o;6602:222::-;;6729:2;6718:9;6714:18;6706:26;;6743:71;6811:1;6800:9;6796:17;6787:6;6743:71;:::i;:::-;6700:124;;;;:::o;6831:256::-;;6893:2;6887:9;6877:19;;6931:4;6923:6;6919:17;7030:6;7018:10;7015:22;6994:18;6982:10;6979:34;6976:62;6973:2;;;7051:1;7048;7041:12;6973:2;7071:10;7067:2;7060:22;6871:216;;;;:::o;7094:314::-;;7263:18;7255:6;7252:30;7249:2;;;7295:1;7292;7285:12;7249:2;7330:4;7322:6;7318:17;7310:25;;7393:4;7387;7383:15;7375:23;;7186:222;;;:::o;7415:322::-;;7559:18;7551:6;7548:30;7545:2;;;7591:1;7588;7581:12;7545:2;7658:4;7654:9;7647:4;7639:6;7635:17;7631:33;7623:41;;7722:4;7716;7712:15;7704:23;;7482:255;;;:::o;7744:122::-;;7838:5;7832:12;7822:22;;7803:63;;;:::o;7874:163::-;;7989:6;7984:3;7977:19;8026:4;8021:3;8017:14;8002:29;;7970:67;;;;:::o;8045:91::-;;8107:24;8125:5;8107:24;:::i;:::-;8096:35;;8090:46;;;:::o;8143:85::-;;8216:5;8209:13;8202:21;8191:32;;8185:43;;;:::o;8235:121::-;;8308:42;8301:5;8297:54;8286:65;;8280:76;;;:::o;8363:72::-;;8425:5;8414:16;;8408:27;;;:::o;8443:145::-;8524:6;8519:3;8514;8501:30;8580:1;8571:6;8566:3;8562:16;8555:27;8494:94;;;:::o;8597:268::-;8662:1;8669:101;8683:6;8680:1;8677:13;8669:101;;;8759:1;8754:3;8750:11;8744:18;8740:1;8735:3;8731:11;8724:39;8705:2;8702:1;8698:10;8693:15;;8669:101;;;8785:6;8782:1;8779:13;8776:2;;;8850:1;8841:6;8836:3;8832:16;8825:27;8776:2;8646:219;;;;:::o;8873:97::-;;8961:2;8957:7;8952:2;8945:5;8941:14;8937:28;8927:38;;8921:49;;;:::o;8978:117::-;9047:24;9065:5;9047:24;:::i;:::-;9040:5;9037:35;9027:2;;9086:1;9083;9076:12;9027:2;9021:74;:::o;9102:117::-;9171:24;9189:5;9171:24;:::i;:::-;9164:5;9161:35;9151:2;;9210:1;9207;9200:12;9151:2;9145:74;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >= 0.7.0 < 0.8.0;\npragma experimental ABIEncoderV2;\n\nimport \"./ownable.sol\";\n\ncontract ElectionFactory is Ownable {\n    constructor () {\n        listAdmin[owner] = true;\n    }\n\n    struct Election {\n        string title;\n        uint256 creationDate;\n        uint closingDate;\n        uint totalVoters;\n        bool isOpen;\n\n        uint candidatesCount;\n        mapping (uint => Candidate) candidates;\n        mapping (address => bool) voters;\n        uint[] winners;\n    }\n\n    struct Candidate {\n        string name;\n        mapping (uint => uint) notes;\n        uint percent;\n        uint averageNote;\n    }\n    uint public electionsCount;\n    mapping (uint => Election) public elections;\n\n    mapping (uint => address) electionToOwner;\n    mapping (address => uint) ownerElectionCount;\n    mapping (address => bool) listAdmin;\n\n    modifier isAdmin(address _userAddress) {\n        require (listAdmin[_userAddress] == true, \"You are not an admin\");\n        _;\n    }\n\n    function addAdmin(address _userAddress) external isAdmin(msg.sender) {\n        listAdmin[_userAddress] = true;\n    }\n\n    function deleteAdmin(address _userAddress) external isAdmin(msg.sender) {\n        require(msg.sender != owner, \"Cannot remove owner from admins\");\n        listAdmin[_userAddress] = false;\n    }\n\n    function isUserAdmin(address userAddress) external view returns(bool){\n        return listAdmin[userAddress];\n    }\n\n    function createElection(string memory _title, string[] memory _candidatesNames) external isAdmin(msg.sender) returns (uint) {\n        uint nbCandidates = _candidatesNames.length;\n        electionsCount++;\n        Election storage election = elections[electionsCount];\n        election.title = _title;\n        election.creationDate = block.timestamp;\n        election.totalVoters = 0;\n        election.isOpen = true;\n\n        for (uint i = 0; i < nbCandidates; i++) {\n            addCandidate(electionsCount, _candidatesNames[i]);\n        }\n\n        electionToOwner[electionsCount] = msg.sender;\n\n        ownerElectionCount[msg.sender] += 1;\n\n        return electionsCount;\n    }\n\n    function addCandidate(uint _electionId, string memory _candidateName) public {\n        elections[_electionId].candidates[elections[_electionId].candidatesCount++].name = _candidateName;\n    }\n}\n",
  "sourcePath": "C:\\Users\\acham\\Applications\\ESGI\\Blockchain\\Projet\\Voting-SmartContract-Truffled\\contracts\\ElectionFactory.sol",
  "ast": {
    "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol",
    "exportedSymbols": {
      "ElectionFactory": [
        490
      ]
    },
    "id": 491,
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
        "scope": 491,
        "sourceUnit": 1041,
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
              "referencedDeclaration": 1040,
              "src": "154:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$1040",
                "typeString": "contract Ownable"
              }
            },
            "id": 248,
            "nodeType": "InheritanceSpecifier",
            "src": "154:7:1"
          }
        ],
        "contractDependencies": [
          1040
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 490,
        "linearizedBaseContracts": [
          490,
          1040
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
                        "referencedDeclaration": 311,
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
                        "referencedDeclaration": 984,
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
            "scope": 490,
            "src": "168:55:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "canonicalName": "ElectionFactory.Election",
            "id": 282,
            "members": [
              {
                "constant": false,
                "id": 260,
                "mutability": "mutable",
                "name": "title",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 282,
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
                "scope": 282,
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
                "scope": 282,
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
                "scope": 282,
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
                "scope": 282,
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
                "scope": 282,
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
                "scope": 282,
                "src": "411:38:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$293_storage_$",
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
                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$293_storage_$",
                    "typeString": "mapping(uint256 => struct ElectionFactory.Candidate)"
                  },
                  "valueType": {
                    "contractScope": null,
                    "id": 272,
                    "name": "Candidate",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 293,
                    "src": "428:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Candidate_$293_storage_ptr",
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
                "scope": 282,
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
                "scope": 282,
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
              }
            ],
            "name": "Election",
            "nodeType": "StructDefinition",
            "scope": 490,
            "src": "229:293:1",
            "visibility": "public"
          },
          {
            "canonicalName": "ElectionFactory.Candidate",
            "id": 293,
            "members": [
              {
                "constant": false,
                "id": 284,
                "mutability": "mutable",
                "name": "name",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 293,
                "src": "555:11:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 283,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "555:6:1",
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
                "id": 288,
                "mutability": "mutable",
                "name": "notes",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 293,
                "src": "576:28:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                  "typeString": "mapping(uint256 => uint256)"
                },
                "typeName": {
                  "id": 287,
                  "keyType": {
                    "id": 285,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "585:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "576:22:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                    "typeString": "mapping(uint256 => uint256)"
                  },
                  "valueType": {
                    "id": 286,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "593:4:1",
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
                "id": 290,
                "mutability": "mutable",
                "name": "percent",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 293,
                "src": "614:12:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 289,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "614:4:1",
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
                "id": 292,
                "mutability": "mutable",
                "name": "averageNote",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 293,
                "src": "636:16:1",
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
                  "src": "636:4:1",
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
            "scope": 490,
            "src": "528:131:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "9a74c695",
            "id": 295,
            "mutability": "mutable",
            "name": "electionsCount",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 490,
            "src": "664:26:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 294,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "664:4:1",
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
            "id": 299,
            "mutability": "mutable",
            "name": "elections",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 490,
            "src": "696:43:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
              "typeString": "mapping(uint256 => struct ElectionFactory.Election)"
            },
            "typeName": {
              "id": 298,
              "keyType": {
                "id": 296,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "705:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "696:26:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                "typeString": "mapping(uint256 => struct ElectionFactory.Election)"
              },
              "valueType": {
                "contractScope": null,
                "id": 297,
                "name": "Election",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 282,
                "src": "713:8:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Election_$282_storage_ptr",
                  "typeString": "struct ElectionFactory.Election"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 303,
            "mutability": "mutable",
            "name": "electionToOwner",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 490,
            "src": "746:41:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
              "typeString": "mapping(uint256 => address)"
            },
            "typeName": {
              "id": 302,
              "keyType": {
                "id": 300,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "755:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "746:25:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "valueType": {
                "id": 301,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "763:7:1",
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
            "id": 307,
            "mutability": "mutable",
            "name": "ownerElectionCount",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 490,
            "src": "793:44:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 306,
              "keyType": {
                "id": 304,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "802:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "793:25:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 305,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "813:4:1",
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
            "id": 311,
            "mutability": "mutable",
            "name": "listAdmin",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 490,
            "src": "843:35:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 310,
              "keyType": {
                "id": 308,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "852:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "843:25:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueType": {
                "id": 309,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "863:4:1",
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
              "id": 325,
              "nodeType": "Block",
              "src": "924:93:1",
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
                        "id": 320,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 316,
                            "name": "listAdmin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 311,
                            "src": "943:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 318,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 317,
                            "name": "_userAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 313,
                            "src": "953:12:1",
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
                          "src": "943:23:1",
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
                          "id": 319,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "970:4:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "943:31:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "596f7520617265206e6f7420616e2061646d696e",
                        "id": 321,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "976:22:1",
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
                      "id": 315,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "934:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 322,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "934:65:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 323,
                  "nodeType": "ExpressionStatement",
                  "src": "934:65:1"
                },
                {
                  "id": 324,
                  "nodeType": "PlaceholderStatement",
                  "src": "1009:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 326,
            "name": "isAdmin",
            "nodeType": "ModifierDefinition",
            "overrides": null,
            "parameters": {
              "id": 314,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 313,
                  "mutability": "mutable",
                  "name": "_userAddress",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 326,
                  "src": "902:20:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 312,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "902:7:1",
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
              "src": "901:22:1"
            },
            "src": "885:132:1",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 341,
              "nodeType": "Block",
              "src": "1092:47:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 339,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 335,
                        "name": "listAdmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 311,
                        "src": "1102:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 337,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 336,
                        "name": "_userAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 328,
                        "src": "1112:12:1",
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
                      "src": "1102:23:1",
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
                      "id": 338,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1128:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1102:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 340,
                  "nodeType": "ExpressionStatement",
                  "src": "1102:30:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "70480275",
            "id": 342,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 331,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "1080:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 332,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1080:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  }
                ],
                "id": 333,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 330,
                  "name": "isAdmin",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 326,
                  "src": "1072:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1072:19:1"
              }
            ],
            "name": "addAdmin",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 329,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 328,
                  "mutability": "mutable",
                  "name": "_userAddress",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 342,
                  "src": "1041:20:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 327,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1041:7:1",
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
              "src": "1040:22:1"
            },
            "returnParameters": {
              "id": 334,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1092:0:1"
            },
            "scope": 490,
            "src": "1023:116:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 365,
              "nodeType": "Block",
              "src": "1217:121:1",
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
                        "id": 355,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 352,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "1235:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 353,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1235:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 354,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 984,
                          "src": "1249:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1235:19:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "43616e6e6f742072656d6f7665206f776e65722066726f6d2061646d696e73",
                        "id": 356,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1256:33:1",
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
                      "id": 351,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1227:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1227:63:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 358,
                  "nodeType": "ExpressionStatement",
                  "src": "1227:63:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 363,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 359,
                        "name": "listAdmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 311,
                        "src": "1300:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 361,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 360,
                        "name": "_userAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 344,
                        "src": "1310:12:1",
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
                      "src": "1300:23:1",
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
                      "id": 362,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1326:5:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "1300:31:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 364,
                  "nodeType": "ExpressionStatement",
                  "src": "1300:31:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "27e1f7df",
            "id": 366,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 347,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "1205:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 348,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1205:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  }
                ],
                "id": 349,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 346,
                  "name": "isAdmin",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 326,
                  "src": "1197:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1197:19:1"
              }
            ],
            "name": "deleteAdmin",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 345,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 344,
                  "mutability": "mutable",
                  "name": "_userAddress",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 366,
                  "src": "1166:20:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 343,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1166:7:1",
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
              "src": "1165:22:1"
            },
            "returnParameters": {
              "id": 350,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1217:0:1"
            },
            "scope": 490,
            "src": "1145:193:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 377,
              "nodeType": "Block",
              "src": "1413:46:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 373,
                      "name": "listAdmin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 311,
                      "src": "1430:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 375,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 374,
                      "name": "userAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 368,
                      "src": "1440:11:1",
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
                    "src": "1430:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 372,
                  "id": 376,
                  "nodeType": "Return",
                  "src": "1423:29:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "74d523a8",
            "id": 378,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isUserAdmin",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 369,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 368,
                  "mutability": "mutable",
                  "name": "userAddress",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 378,
                  "src": "1365:19:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 367,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1365:7:1",
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
              "src": "1364:21:1"
            },
            "returnParameters": {
              "id": 372,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 371,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 378,
                  "src": "1408:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 370,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1408:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1407:6:1"
            },
            "scope": 490,
            "src": "1344:115:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 466,
              "nodeType": "Block",
              "src": "1589:554:1",
              "statements": [
                {
                  "assignments": [
                    393
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 393,
                      "mutability": "mutable",
                      "name": "nbCandidates",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 466,
                      "src": "1599:17:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 392,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1599:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 396,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 394,
                      "name": "_candidatesNames",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 383,
                      "src": "1619:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                        "typeString": "string memory[] memory"
                      }
                    },
                    "id": 395,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1619:23:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1599:43:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 398,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "1652:16:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 397,
                      "name": "electionsCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 295,
                      "src": "1652:14:1",
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
                  "id": 399,
                  "nodeType": "ExpressionStatement",
                  "src": "1652:16:1"
                },
                {
                  "assignments": [
                    401
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 401,
                      "mutability": "mutable",
                      "name": "election",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 466,
                      "src": "1678:25:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Election_$282_storage_ptr",
                        "typeString": "struct ElectionFactory.Election"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 400,
                        "name": "Election",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 282,
                        "src": "1678:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$282_storage_ptr",
                          "typeString": "struct ElectionFactory.Election"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 405,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 402,
                      "name": "elections",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 299,
                      "src": "1706:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                        "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                      }
                    },
                    "id": 404,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 403,
                      "name": "electionsCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 295,
                      "src": "1716:14:1",
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
                    "src": "1706:25:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Election_$282_storage",
                      "typeString": "struct ElectionFactory.Election storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1678:53:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 410,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 406,
                        "name": "election",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 401,
                        "src": "1741:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$282_storage_ptr",
                          "typeString": "struct ElectionFactory.Election storage pointer"
                        }
                      },
                      "id": 408,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "title",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 260,
                      "src": "1741:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 409,
                      "name": "_title",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 380,
                      "src": "1758:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1741:23:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 411,
                  "nodeType": "ExpressionStatement",
                  "src": "1741:23:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 417,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 412,
                        "name": "election",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 401,
                        "src": "1774:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$282_storage_ptr",
                          "typeString": "struct ElectionFactory.Election storage pointer"
                        }
                      },
                      "id": 414,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "creationDate",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 262,
                      "src": "1774:21:1",
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
                        "id": 415,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "1798:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 416,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1798:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1774:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 418,
                  "nodeType": "ExpressionStatement",
                  "src": "1774:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 423,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 419,
                        "name": "election",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 401,
                        "src": "1823:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$282_storage_ptr",
                          "typeString": "struct ElectionFactory.Election storage pointer"
                        }
                      },
                      "id": 421,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "totalVoters",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 266,
                      "src": "1823:20:1",
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
                      "id": 422,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1846:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1823:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 424,
                  "nodeType": "ExpressionStatement",
                  "src": "1823:24:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 429,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 425,
                        "name": "election",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 401,
                        "src": "1857:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$282_storage_ptr",
                          "typeString": "struct ElectionFactory.Election storage pointer"
                        }
                      },
                      "id": 427,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "isOpen",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 268,
                      "src": "1857:15:1",
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
                      "id": 428,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1875:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1857:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 430,
                  "nodeType": "ExpressionStatement",
                  "src": "1857:22:1"
                },
                {
                  "body": {
                    "id": 448,
                    "nodeType": "Block",
                    "src": "1930:74:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 442,
                              "name": "electionsCount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 295,
                              "src": "1957:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 443,
                                "name": "_candidatesNames",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 383,
                                "src": "1973:16:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                  "typeString": "string memory[] memory"
                                }
                              },
                              "id": 445,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 444,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 432,
                                "src": "1990:1:1",
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
                              "src": "1973:19:1",
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
                            "id": 441,
                            "name": "addCandidate",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 489,
                            "src": "1944:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (uint256,string memory)"
                            }
                          },
                          "id": 446,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1944:49:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 447,
                        "nodeType": "ExpressionStatement",
                        "src": "1944:49:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 437,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 435,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 432,
                      "src": "1907:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 436,
                      "name": "nbCandidates",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 393,
                      "src": "1911:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1907:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 449,
                  "initializationExpression": {
                    "assignments": [
                      432
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 432,
                        "mutability": "mutable",
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 449,
                        "src": "1895:6:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 431,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1895:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 434,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 433,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1904:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1895:10:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 439,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1925:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 438,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 432,
                        "src": "1925:1:1",
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
                    "id": 440,
                    "nodeType": "ExpressionStatement",
                    "src": "1925:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "1890:114:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 455,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 450,
                        "name": "electionToOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 303,
                        "src": "2014:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 452,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 451,
                        "name": "electionsCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 295,
                        "src": "2030:14:1",
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
                      "src": "2014:31:1",
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
                        "id": 453,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "2048:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 454,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2048:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "2014:44:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 456,
                  "nodeType": "ExpressionStatement",
                  "src": "2014:44:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 462,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 457,
                        "name": "ownerElectionCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 307,
                        "src": "2069:18:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 460,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 458,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2088:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 459,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2088:10:1",
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
                      "src": "2069:30:1",
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
                      "id": 461,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2103:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2069:35:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 463,
                  "nodeType": "ExpressionStatement",
                  "src": "2069:35:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 464,
                    "name": "electionsCount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 295,
                    "src": "2122:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 391,
                  "id": 465,
                  "nodeType": "Return",
                  "src": "2115:21:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "349813b2",
            "id": 467,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 386,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "1562:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 387,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1562:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  }
                ],
                "id": 388,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 385,
                  "name": "isAdmin",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 326,
                  "src": "1554:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1554:19:1"
              }
            ],
            "name": "createElection",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 384,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 380,
                  "mutability": "mutable",
                  "name": "_title",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 467,
                  "src": "1489:20:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 379,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1489:6:1",
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
                  "id": 383,
                  "mutability": "mutable",
                  "name": "_candidatesNames",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 467,
                  "src": "1511:32:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 381,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1511:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 382,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1511:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1488:56:1"
            },
            "returnParameters": {
              "id": 391,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 390,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 467,
                  "src": "1583:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 389,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1583:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1582:6:1"
            },
            "scope": 490,
            "src": "1465:678:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 488,
              "nodeType": "Block",
              "src": "2226:114:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 486,
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
                              "id": 474,
                              "name": "elections",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 299,
                              "src": "2236:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                                "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                              }
                            },
                            "id": 476,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 475,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 469,
                              "src": "2246:11:1",
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
                            "src": "2236:22:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Election_$282_storage",
                              "typeString": "struct ElectionFactory.Election storage ref"
                            }
                          },
                          "id": 477,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "candidates",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 274,
                          "src": "2236:33:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$293_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Candidate storage ref)"
                          }
                        },
                        "id": 483,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 482,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "2270:40:1",
                          "subExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 478,
                                "name": "elections",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 299,
                                "src": "2270:9:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                                  "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                }
                              },
                              "id": 480,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 479,
                                "name": "_electionId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 469,
                                "src": "2280:11:1",
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
                              "src": "2270:22:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Election_$282_storage",
                                "typeString": "struct ElectionFactory.Election storage ref"
                              }
                            },
                            "id": 481,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "candidatesCount",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 270,
                            "src": "2270:38:1",
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
                        "src": "2236:75:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Candidate_$293_storage",
                          "typeString": "struct ElectionFactory.Candidate storage ref"
                        }
                      },
                      "id": 484,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "name",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 284,
                      "src": "2236:80:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 485,
                      "name": "_candidateName",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 471,
                      "src": "2319:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "2236:97:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 487,
                  "nodeType": "ExpressionStatement",
                  "src": "2236:97:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "1750a3d0",
            "id": 489,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addCandidate",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 472,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 469,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 489,
                  "src": "2171:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 468,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2171:4:1",
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
                  "id": 471,
                  "mutability": "mutable",
                  "name": "_candidateName",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 489,
                  "src": "2189:28:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 470,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2189:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2170:48:1"
            },
            "returnParameters": {
              "id": 473,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2226:0:1"
            },
            "scope": 490,
            "src": "2149:191:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 491,
        "src": "126:2216:1"
      }
    ],
    "src": "32:2311:1"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol",
      "exportedSymbols": {
        "ElectionFactory": [
          490
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
          "SourceUnit": 1041,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol",
          "file": "./ownable.sol",
          "scope": 491,
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
            1040
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            490,
            1040
          ],
          "name": "ElectionFactory",
          "scope": 491
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
                  "referencedDeclaration": 1040,
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
              "scope": 490,
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
                                  "referencedDeclaration": 311,
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
                                  "referencedDeclaration": 984,
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
              "scope": 490,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "title",
                  "overrides": null,
                  "scope": 282,
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
                  "scope": 282,
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
                  "scope": 282,
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
                  "scope": 282,
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
                  "scope": 282,
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
                  "scope": 282,
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
                  "scope": 282,
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
                          "referencedDeclaration": 293,
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
                  "scope": 282,
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
                  "scope": 282,
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
              }
            ],
            "id": 282,
            "name": "StructDefinition",
            "src": "229:293:1"
          },
          {
            "attributes": {
              "canonicalName": "ElectionFactory.Candidate",
              "name": "Candidate",
              "scope": 490,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "name",
                  "overrides": null,
                  "scope": 293,
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
                    "id": 283,
                    "name": "ElementaryTypeName",
                    "src": "555:6:1"
                  }
                ],
                "id": 284,
                "name": "VariableDeclaration",
                "src": "555:11:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "notes",
                  "overrides": null,
                  "scope": 293,
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
                        "id": 285,
                        "name": "ElementaryTypeName",
                        "src": "585:4:1"
                      },
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 286,
                        "name": "ElementaryTypeName",
                        "src": "593:4:1"
                      }
                    ],
                    "id": 287,
                    "name": "Mapping",
                    "src": "576:22:1"
                  }
                ],
                "id": 288,
                "name": "VariableDeclaration",
                "src": "576:28:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "percent",
                  "overrides": null,
                  "scope": 293,
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
                    "id": 289,
                    "name": "ElementaryTypeName",
                    "src": "614:4:1"
                  }
                ],
                "id": 290,
                "name": "VariableDeclaration",
                "src": "614:12:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "averageNote",
                  "overrides": null,
                  "scope": 293,
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
                    "src": "636:4:1"
                  }
                ],
                "id": 292,
                "name": "VariableDeclaration",
                "src": "636:16:1"
              }
            ],
            "id": 293,
            "name": "StructDefinition",
            "src": "528:131:1"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "9a74c695",
              "mutability": "mutable",
              "name": "electionsCount",
              "overrides": null,
              "scope": 490,
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
                "id": 294,
                "name": "ElementaryTypeName",
                "src": "664:4:1"
              }
            ],
            "id": 295,
            "name": "VariableDeclaration",
            "src": "664:26:1"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "5e6fef01",
              "mutability": "mutable",
              "name": "elections",
              "overrides": null,
              "scope": 490,
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
                    "id": 296,
                    "name": "ElementaryTypeName",
                    "src": "705:4:1"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Election",
                      "referencedDeclaration": 282,
                      "type": "struct ElectionFactory.Election"
                    },
                    "id": 297,
                    "name": "UserDefinedTypeName",
                    "src": "713:8:1"
                  }
                ],
                "id": 298,
                "name": "Mapping",
                "src": "696:26:1"
              }
            ],
            "id": 299,
            "name": "VariableDeclaration",
            "src": "696:43:1"
          },
          {
            "attributes": {
              "constant": false,
              "mutability": "mutable",
              "name": "electionToOwner",
              "overrides": null,
              "scope": 490,
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
                    "id": 300,
                    "name": "ElementaryTypeName",
                    "src": "755:4:1"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "stateMutability": "nonpayable",
                      "type": "address"
                    },
                    "id": 301,
                    "name": "ElementaryTypeName",
                    "src": "763:7:1"
                  }
                ],
                "id": 302,
                "name": "Mapping",
                "src": "746:25:1"
              }
            ],
            "id": 303,
            "name": "VariableDeclaration",
            "src": "746:41:1"
          },
          {
            "attributes": {
              "constant": false,
              "mutability": "mutable",
              "name": "ownerElectionCount",
              "overrides": null,
              "scope": 490,
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
                    "id": 304,
                    "name": "ElementaryTypeName",
                    "src": "802:7:1"
                  },
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 305,
                    "name": "ElementaryTypeName",
                    "src": "813:4:1"
                  }
                ],
                "id": 306,
                "name": "Mapping",
                "src": "793:25:1"
              }
            ],
            "id": 307,
            "name": "VariableDeclaration",
            "src": "793:44:1"
          },
          {
            "attributes": {
              "constant": false,
              "mutability": "mutable",
              "name": "listAdmin",
              "overrides": null,
              "scope": 490,
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
                    "id": 308,
                    "name": "ElementaryTypeName",
                    "src": "852:7:1"
                  },
                  {
                    "attributes": {
                      "name": "bool",
                      "type": "bool"
                    },
                    "id": 309,
                    "name": "ElementaryTypeName",
                    "src": "863:4:1"
                  }
                ],
                "id": 310,
                "name": "Mapping",
                "src": "843:25:1"
              }
            ],
            "id": 311,
            "name": "VariableDeclaration",
            "src": "843:35:1"
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
                      "scope": 326,
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
                        "id": 312,
                        "name": "ElementaryTypeName",
                        "src": "902:7:1"
                      }
                    ],
                    "id": 313,
                    "name": "VariableDeclaration",
                    "src": "902:20:1"
                  }
                ],
                "id": 314,
                "name": "ParameterList",
                "src": "901:22:1"
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
                            "id": 315,
                            "name": "Identifier",
                            "src": "934:7:1"
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
                                      "referencedDeclaration": 311,
                                      "type": "mapping(address => bool)",
                                      "value": "listAdmin"
                                    },
                                    "id": 316,
                                    "name": "Identifier",
                                    "src": "943:9:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 313,
                                      "type": "address",
                                      "value": "_userAddress"
                                    },
                                    "id": 317,
                                    "name": "Identifier",
                                    "src": "953:12:1"
                                  }
                                ],
                                "id": 318,
                                "name": "IndexAccess",
                                "src": "943:23:1"
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
                                "id": 319,
                                "name": "Literal",
                                "src": "970:4:1"
                              }
                            ],
                            "id": 320,
                            "name": "BinaryOperation",
                            "src": "943:31:1"
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
                            "id": 321,
                            "name": "Literal",
                            "src": "976:22:1"
                          }
                        ],
                        "id": 322,
                        "name": "FunctionCall",
                        "src": "934:65:1"
                      }
                    ],
                    "id": 323,
                    "name": "ExpressionStatement",
                    "src": "934:65:1"
                  },
                  {
                    "id": 324,
                    "name": "PlaceholderStatement",
                    "src": "1009:1:1"
                  }
                ],
                "id": 325,
                "name": "Block",
                "src": "924:93:1"
              }
            ],
            "id": 326,
            "name": "ModifierDefinition",
            "src": "885:132:1"
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
              "scope": 490,
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
                      "scope": 342,
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
                        "id": 327,
                        "name": "ElementaryTypeName",
                        "src": "1041:7:1"
                      }
                    ],
                    "id": 328,
                    "name": "VariableDeclaration",
                    "src": "1041:20:1"
                  }
                ],
                "id": 329,
                "name": "ParameterList",
                "src": "1040:22:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 334,
                "name": "ParameterList",
                "src": "1092:0:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 326,
                      "type": "modifier (address)",
                      "value": "isAdmin"
                    },
                    "id": 330,
                    "name": "Identifier",
                    "src": "1072:7:1"
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
                        "id": 331,
                        "name": "Identifier",
                        "src": "1080:3:1"
                      }
                    ],
                    "id": 332,
                    "name": "MemberAccess",
                    "src": "1080:10:1"
                  }
                ],
                "id": 333,
                "name": "ModifierInvocation",
                "src": "1072:19:1"
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
                                  "referencedDeclaration": 311,
                                  "type": "mapping(address => bool)",
                                  "value": "listAdmin"
                                },
                                "id": 335,
                                "name": "Identifier",
                                "src": "1102:9:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 328,
                                  "type": "address",
                                  "value": "_userAddress"
                                },
                                "id": 336,
                                "name": "Identifier",
                                "src": "1112:12:1"
                              }
                            ],
                            "id": 337,
                            "name": "IndexAccess",
                            "src": "1102:23:1"
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
                            "id": 338,
                            "name": "Literal",
                            "src": "1128:4:1"
                          }
                        ],
                        "id": 339,
                        "name": "Assignment",
                        "src": "1102:30:1"
                      }
                    ],
                    "id": 340,
                    "name": "ExpressionStatement",
                    "src": "1102:30:1"
                  }
                ],
                "id": 341,
                "name": "Block",
                "src": "1092:47:1"
              }
            ],
            "id": 342,
            "name": "FunctionDefinition",
            "src": "1023:116:1"
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
              "scope": 490,
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
                      "scope": 366,
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
                        "id": 343,
                        "name": "ElementaryTypeName",
                        "src": "1166:7:1"
                      }
                    ],
                    "id": 344,
                    "name": "VariableDeclaration",
                    "src": "1166:20:1"
                  }
                ],
                "id": 345,
                "name": "ParameterList",
                "src": "1165:22:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 350,
                "name": "ParameterList",
                "src": "1217:0:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 326,
                      "type": "modifier (address)",
                      "value": "isAdmin"
                    },
                    "id": 346,
                    "name": "Identifier",
                    "src": "1197:7:1"
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
                        "id": 347,
                        "name": "Identifier",
                        "src": "1205:3:1"
                      }
                    ],
                    "id": 348,
                    "name": "MemberAccess",
                    "src": "1205:10:1"
                  }
                ],
                "id": 349,
                "name": "ModifierInvocation",
                "src": "1197:19:1"
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
                            "id": 351,
                            "name": "Identifier",
                            "src": "1227:7:1"
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
                                    "id": 352,
                                    "name": "Identifier",
                                    "src": "1235:3:1"
                                  }
                                ],
                                "id": 353,
                                "name": "MemberAccess",
                                "src": "1235:10:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 984,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 354,
                                "name": "Identifier",
                                "src": "1249:5:1"
                              }
                            ],
                            "id": 355,
                            "name": "BinaryOperation",
                            "src": "1235:19:1"
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
                            "id": 356,
                            "name": "Literal",
                            "src": "1256:33:1"
                          }
                        ],
                        "id": 357,
                        "name": "FunctionCall",
                        "src": "1227:63:1"
                      }
                    ],
                    "id": 358,
                    "name": "ExpressionStatement",
                    "src": "1227:63:1"
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
                                  "referencedDeclaration": 311,
                                  "type": "mapping(address => bool)",
                                  "value": "listAdmin"
                                },
                                "id": 359,
                                "name": "Identifier",
                                "src": "1300:9:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 344,
                                  "type": "address",
                                  "value": "_userAddress"
                                },
                                "id": 360,
                                "name": "Identifier",
                                "src": "1310:12:1"
                              }
                            ],
                            "id": 361,
                            "name": "IndexAccess",
                            "src": "1300:23:1"
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
                            "id": 362,
                            "name": "Literal",
                            "src": "1326:5:1"
                          }
                        ],
                        "id": 363,
                        "name": "Assignment",
                        "src": "1300:31:1"
                      }
                    ],
                    "id": 364,
                    "name": "ExpressionStatement",
                    "src": "1300:31:1"
                  }
                ],
                "id": 365,
                "name": "Block",
                "src": "1217:121:1"
              }
            ],
            "id": 366,
            "name": "FunctionDefinition",
            "src": "1145:193:1"
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
              "scope": 490,
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
                      "scope": 378,
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
                        "id": 367,
                        "name": "ElementaryTypeName",
                        "src": "1365:7:1"
                      }
                    ],
                    "id": 368,
                    "name": "VariableDeclaration",
                    "src": "1365:19:1"
                  }
                ],
                "id": 369,
                "name": "ParameterList",
                "src": "1364:21:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 378,
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
                        "id": 370,
                        "name": "ElementaryTypeName",
                        "src": "1408:4:1"
                      }
                    ],
                    "id": 371,
                    "name": "VariableDeclaration",
                    "src": "1408:4:1"
                  }
                ],
                "id": 372,
                "name": "ParameterList",
                "src": "1407:6:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 372
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
                              "referencedDeclaration": 311,
                              "type": "mapping(address => bool)",
                              "value": "listAdmin"
                            },
                            "id": 373,
                            "name": "Identifier",
                            "src": "1430:9:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 368,
                              "type": "address",
                              "value": "userAddress"
                            },
                            "id": 374,
                            "name": "Identifier",
                            "src": "1440:11:1"
                          }
                        ],
                        "id": 375,
                        "name": "IndexAccess",
                        "src": "1430:22:1"
                      }
                    ],
                    "id": 376,
                    "name": "Return",
                    "src": "1423:29:1"
                  }
                ],
                "id": 377,
                "name": "Block",
                "src": "1413:46:1"
              }
            ],
            "id": 378,
            "name": "FunctionDefinition",
            "src": "1344:115:1"
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
              "scope": 490,
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
                      "scope": 467,
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
                        "id": 379,
                        "name": "ElementaryTypeName",
                        "src": "1489:6:1"
                      }
                    ],
                    "id": 380,
                    "name": "VariableDeclaration",
                    "src": "1489:20:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_candidatesNames",
                      "overrides": null,
                      "scope": 467,
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
                            "id": 381,
                            "name": "ElementaryTypeName",
                            "src": "1511:6:1"
                          }
                        ],
                        "id": 382,
                        "name": "ArrayTypeName",
                        "src": "1511:8:1"
                      }
                    ],
                    "id": 383,
                    "name": "VariableDeclaration",
                    "src": "1511:32:1"
                  }
                ],
                "id": 384,
                "name": "ParameterList",
                "src": "1488:56:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 467,
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
                        "id": 389,
                        "name": "ElementaryTypeName",
                        "src": "1583:4:1"
                      }
                    ],
                    "id": 390,
                    "name": "VariableDeclaration",
                    "src": "1583:4:1"
                  }
                ],
                "id": 391,
                "name": "ParameterList",
                "src": "1582:6:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 326,
                      "type": "modifier (address)",
                      "value": "isAdmin"
                    },
                    "id": 385,
                    "name": "Identifier",
                    "src": "1554:7:1"
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
                        "id": 386,
                        "name": "Identifier",
                        "src": "1562:3:1"
                      }
                    ],
                    "id": 387,
                    "name": "MemberAccess",
                    "src": "1562:10:1"
                  }
                ],
                "id": 388,
                "name": "ModifierInvocation",
                "src": "1554:19:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        393
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "nbCandidates",
                          "overrides": null,
                          "scope": 466,
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
                            "id": 392,
                            "name": "ElementaryTypeName",
                            "src": "1599:4:1"
                          }
                        ],
                        "id": 393,
                        "name": "VariableDeclaration",
                        "src": "1599:17:1"
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
                              "referencedDeclaration": 383,
                              "type": "string memory[] memory",
                              "value": "_candidatesNames"
                            },
                            "id": 394,
                            "name": "Identifier",
                            "src": "1619:16:1"
                          }
                        ],
                        "id": 395,
                        "name": "MemberAccess",
                        "src": "1619:23:1"
                      }
                    ],
                    "id": 396,
                    "name": "VariableDeclarationStatement",
                    "src": "1599:43:1"
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
                              "referencedDeclaration": 295,
                              "type": "uint256",
                              "value": "electionsCount"
                            },
                            "id": 397,
                            "name": "Identifier",
                            "src": "1652:14:1"
                          }
                        ],
                        "id": 398,
                        "name": "UnaryOperation",
                        "src": "1652:16:1"
                      }
                    ],
                    "id": 399,
                    "name": "ExpressionStatement",
                    "src": "1652:16:1"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        401
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "election",
                          "overrides": null,
                          "scope": 466,
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
                              "referencedDeclaration": 282,
                              "type": "struct ElectionFactory.Election"
                            },
                            "id": 400,
                            "name": "UserDefinedTypeName",
                            "src": "1678:8:1"
                          }
                        ],
                        "id": 401,
                        "name": "VariableDeclaration",
                        "src": "1678:25:1"
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
                              "referencedDeclaration": 299,
                              "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                              "value": "elections"
                            },
                            "id": 402,
                            "name": "Identifier",
                            "src": "1706:9:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 295,
                              "type": "uint256",
                              "value": "electionsCount"
                            },
                            "id": 403,
                            "name": "Identifier",
                            "src": "1716:14:1"
                          }
                        ],
                        "id": 404,
                        "name": "IndexAccess",
                        "src": "1706:25:1"
                      }
                    ],
                    "id": 405,
                    "name": "VariableDeclarationStatement",
                    "src": "1678:53:1"
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
                                  "referencedDeclaration": 401,
                                  "type": "struct ElectionFactory.Election storage pointer",
                                  "value": "election"
                                },
                                "id": 406,
                                "name": "Identifier",
                                "src": "1741:8:1"
                              }
                            ],
                            "id": 408,
                            "name": "MemberAccess",
                            "src": "1741:14:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 380,
                              "type": "string memory",
                              "value": "_title"
                            },
                            "id": 409,
                            "name": "Identifier",
                            "src": "1758:6:1"
                          }
                        ],
                        "id": 410,
                        "name": "Assignment",
                        "src": "1741:23:1"
                      }
                    ],
                    "id": 411,
                    "name": "ExpressionStatement",
                    "src": "1741:23:1"
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
                                  "referencedDeclaration": 401,
                                  "type": "struct ElectionFactory.Election storage pointer",
                                  "value": "election"
                                },
                                "id": 412,
                                "name": "Identifier",
                                "src": "1774:8:1"
                              }
                            ],
                            "id": 414,
                            "name": "MemberAccess",
                            "src": "1774:21:1"
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
                                "id": 415,
                                "name": "Identifier",
                                "src": "1798:5:1"
                              }
                            ],
                            "id": 416,
                            "name": "MemberAccess",
                            "src": "1798:15:1"
                          }
                        ],
                        "id": 417,
                        "name": "Assignment",
                        "src": "1774:39:1"
                      }
                    ],
                    "id": 418,
                    "name": "ExpressionStatement",
                    "src": "1774:39:1"
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
                                  "referencedDeclaration": 401,
                                  "type": "struct ElectionFactory.Election storage pointer",
                                  "value": "election"
                                },
                                "id": 419,
                                "name": "Identifier",
                                "src": "1823:8:1"
                              }
                            ],
                            "id": 421,
                            "name": "MemberAccess",
                            "src": "1823:20:1"
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
                            "id": 422,
                            "name": "Literal",
                            "src": "1846:1:1"
                          }
                        ],
                        "id": 423,
                        "name": "Assignment",
                        "src": "1823:24:1"
                      }
                    ],
                    "id": 424,
                    "name": "ExpressionStatement",
                    "src": "1823:24:1"
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
                                  "referencedDeclaration": 401,
                                  "type": "struct ElectionFactory.Election storage pointer",
                                  "value": "election"
                                },
                                "id": 425,
                                "name": "Identifier",
                                "src": "1857:8:1"
                              }
                            ],
                            "id": 427,
                            "name": "MemberAccess",
                            "src": "1857:15:1"
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
                            "id": 428,
                            "name": "Literal",
                            "src": "1875:4:1"
                          }
                        ],
                        "id": 429,
                        "name": "Assignment",
                        "src": "1857:22:1"
                      }
                    ],
                    "id": 430,
                    "name": "ExpressionStatement",
                    "src": "1857:22:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            432
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "mutability": "mutable",
                              "name": "i",
                              "overrides": null,
                              "scope": 449,
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
                                "id": 431,
                                "name": "ElementaryTypeName",
                                "src": "1895:4:1"
                              }
                            ],
                            "id": 432,
                            "name": "VariableDeclaration",
                            "src": "1895:6:1"
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
                            "id": 433,
                            "name": "Literal",
                            "src": "1904:1:1"
                          }
                        ],
                        "id": 434,
                        "name": "VariableDeclarationStatement",
                        "src": "1895:10:1"
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
                              "referencedDeclaration": 432,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 435,
                            "name": "Identifier",
                            "src": "1907:1:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 393,
                              "type": "uint256",
                              "value": "nbCandidates"
                            },
                            "id": 436,
                            "name": "Identifier",
                            "src": "1911:12:1"
                          }
                        ],
                        "id": 437,
                        "name": "BinaryOperation",
                        "src": "1907:16:1"
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
                                  "referencedDeclaration": 432,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 438,
                                "name": "Identifier",
                                "src": "1925:1:1"
                              }
                            ],
                            "id": 439,
                            "name": "UnaryOperation",
                            "src": "1925:3:1"
                          }
                        ],
                        "id": 440,
                        "name": "ExpressionStatement",
                        "src": "1925:3:1"
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
                                      "referencedDeclaration": 489,
                                      "type": "function (uint256,string memory)",
                                      "value": "addCandidate"
                                    },
                                    "id": 441,
                                    "name": "Identifier",
                                    "src": "1944:12:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 295,
                                      "type": "uint256",
                                      "value": "electionsCount"
                                    },
                                    "id": 442,
                                    "name": "Identifier",
                                    "src": "1957:14:1"
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
                                          "referencedDeclaration": 383,
                                          "type": "string memory[] memory",
                                          "value": "_candidatesNames"
                                        },
                                        "id": 443,
                                        "name": "Identifier",
                                        "src": "1973:16:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 432,
                                          "type": "uint256",
                                          "value": "i"
                                        },
                                        "id": 444,
                                        "name": "Identifier",
                                        "src": "1990:1:1"
                                      }
                                    ],
                                    "id": 445,
                                    "name": "IndexAccess",
                                    "src": "1973:19:1"
                                  }
                                ],
                                "id": 446,
                                "name": "FunctionCall",
                                "src": "1944:49:1"
                              }
                            ],
                            "id": 447,
                            "name": "ExpressionStatement",
                            "src": "1944:49:1"
                          }
                        ],
                        "id": 448,
                        "name": "Block",
                        "src": "1930:74:1"
                      }
                    ],
                    "id": 449,
                    "name": "ForStatement",
                    "src": "1890:114:1"
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
                                  "referencedDeclaration": 303,
                                  "type": "mapping(uint256 => address)",
                                  "value": "electionToOwner"
                                },
                                "id": 450,
                                "name": "Identifier",
                                "src": "2014:15:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 295,
                                  "type": "uint256",
                                  "value": "electionsCount"
                                },
                                "id": 451,
                                "name": "Identifier",
                                "src": "2030:14:1"
                              }
                            ],
                            "id": 452,
                            "name": "IndexAccess",
                            "src": "2014:31:1"
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
                                "id": 453,
                                "name": "Identifier",
                                "src": "2048:3:1"
                              }
                            ],
                            "id": 454,
                            "name": "MemberAccess",
                            "src": "2048:10:1"
                          }
                        ],
                        "id": 455,
                        "name": "Assignment",
                        "src": "2014:44:1"
                      }
                    ],
                    "id": 456,
                    "name": "ExpressionStatement",
                    "src": "2014:44:1"
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
                                  "referencedDeclaration": 307,
                                  "type": "mapping(address => uint256)",
                                  "value": "ownerElectionCount"
                                },
                                "id": 457,
                                "name": "Identifier",
                                "src": "2069:18:1"
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
                                    "id": 458,
                                    "name": "Identifier",
                                    "src": "2088:3:1"
                                  }
                                ],
                                "id": 459,
                                "name": "MemberAccess",
                                "src": "2088:10:1"
                              }
                            ],
                            "id": 460,
                            "name": "IndexAccess",
                            "src": "2069:30:1"
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
                            "id": 461,
                            "name": "Literal",
                            "src": "2103:1:1"
                          }
                        ],
                        "id": 462,
                        "name": "Assignment",
                        "src": "2069:35:1"
                      }
                    ],
                    "id": 463,
                    "name": "ExpressionStatement",
                    "src": "2069:35:1"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 391
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 295,
                          "type": "uint256",
                          "value": "electionsCount"
                        },
                        "id": 464,
                        "name": "Identifier",
                        "src": "2122:14:1"
                      }
                    ],
                    "id": 465,
                    "name": "Return",
                    "src": "2115:21:1"
                  }
                ],
                "id": 466,
                "name": "Block",
                "src": "1589:554:1"
              }
            ],
            "id": 467,
            "name": "FunctionDefinition",
            "src": "1465:678:1"
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
              "scope": 490,
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
                      "scope": 489,
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
                        "id": 468,
                        "name": "ElementaryTypeName",
                        "src": "2171:4:1"
                      }
                    ],
                    "id": 469,
                    "name": "VariableDeclaration",
                    "src": "2171:16:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_candidateName",
                      "overrides": null,
                      "scope": 489,
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
                        "id": 470,
                        "name": "ElementaryTypeName",
                        "src": "2189:6:1"
                      }
                    ],
                    "id": 471,
                    "name": "VariableDeclaration",
                    "src": "2189:28:1"
                  }
                ],
                "id": 472,
                "name": "ParameterList",
                "src": "2170:48:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 473,
                "name": "ParameterList",
                "src": "2226:0:1"
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
                              "referencedDeclaration": 284,
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
                                              "referencedDeclaration": 299,
                                              "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                              "value": "elections"
                                            },
                                            "id": 474,
                                            "name": "Identifier",
                                            "src": "2236:9:1"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 469,
                                              "type": "uint256",
                                              "value": "_electionId"
                                            },
                                            "id": 475,
                                            "name": "Identifier",
                                            "src": "2246:11:1"
                                          }
                                        ],
                                        "id": 476,
                                        "name": "IndexAccess",
                                        "src": "2236:22:1"
                                      }
                                    ],
                                    "id": 477,
                                    "name": "MemberAccess",
                                    "src": "2236:33:1"
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
                                                  "referencedDeclaration": 299,
                                                  "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                  "value": "elections"
                                                },
                                                "id": 478,
                                                "name": "Identifier",
                                                "src": "2270:9:1"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 469,
                                                  "type": "uint256",
                                                  "value": "_electionId"
                                                },
                                                "id": 479,
                                                "name": "Identifier",
                                                "src": "2280:11:1"
                                              }
                                            ],
                                            "id": 480,
                                            "name": "IndexAccess",
                                            "src": "2270:22:1"
                                          }
                                        ],
                                        "id": 481,
                                        "name": "MemberAccess",
                                        "src": "2270:38:1"
                                      }
                                    ],
                                    "id": 482,
                                    "name": "UnaryOperation",
                                    "src": "2270:40:1"
                                  }
                                ],
                                "id": 483,
                                "name": "IndexAccess",
                                "src": "2236:75:1"
                              }
                            ],
                            "id": 484,
                            "name": "MemberAccess",
                            "src": "2236:80:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 471,
                              "type": "string memory",
                              "value": "_candidateName"
                            },
                            "id": 485,
                            "name": "Identifier",
                            "src": "2319:14:1"
                          }
                        ],
                        "id": 486,
                        "name": "Assignment",
                        "src": "2236:97:1"
                      }
                    ],
                    "id": 487,
                    "name": "ExpressionStatement",
                    "src": "2236:97:1"
                  }
                ],
                "id": 488,
                "name": "Block",
                "src": "2226:114:1"
              }
            ],
            "id": 489,
            "name": "FunctionDefinition",
            "src": "2149:191:1"
          }
        ],
        "id": 490,
        "name": "ContractDefinition",
        "src": "126:2216:1"
      }
    ],
    "id": 491,
    "name": "SourceUnit",
    "src": "32:2311:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.7.0+commit.9e61f92b.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.3",
  "updatedAt": "2021-01-23T13:33:04.680Z",
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