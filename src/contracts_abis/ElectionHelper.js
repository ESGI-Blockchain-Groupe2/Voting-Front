export const electionHelperContractABI = {
  "contractName": "ElectionHelper",
  "abi": [
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
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_electionId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_candidateId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_noteId",
          "type": "uint256"
        }
      ],
      "name": "addNote",
      "outputs": [],
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
          "internalType": "uint256",
          "name": "_candidateId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_note",
          "type": "uint256"
        }
      ],
      "name": "calculatePercentageOfNote",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_electionId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_candidateId",
          "type": "uint256"
        }
      ],
      "name": "computeAverageNote",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_electionId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_candidateId",
          "type": "uint256"
        }
      ],
      "name": "getCandidate",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_electionId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_candidateId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_noteId",
          "type": "uint256"
        }
      ],
      "name": "getCandidateNote",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_electionId",
          "type": "uint256"
        }
      ],
      "name": "getCandidatesCount",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_electionId",
          "type": "uint256"
        }
      ],
      "name": "incrementVoters",
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
          "internalType": "uint256",
          "name": "_electionId",
          "type": "uint256"
        }
      ],
      "name": "endElection",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_electionId",
          "type": "uint256"
        }
      ],
      "name": "getElectionTitle",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_electionId",
          "type": "uint256"
        }
      ],
      "name": "getElectionStatus",
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
          "internalType": "uint256",
          "name": "_electionId",
          "type": "uint256"
        }
      ],
      "name": "getElectionWinner",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_electionId",
          "type": "uint256"
        }
      ],
      "name": "addVoter",
      "outputs": [],
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
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "getOneFirstRoundWinner",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_electionId",
          "type": "uint256"
        }
      ],
      "name": "getFirstRoundWinners",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_electionId",
          "type": "uint256"
        }
      ],
      "name": "computeResult",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_electionId",
          "type": "uint256"
        }
      ],
      "name": "computeCandidatesAverageNote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_electionId",
          "type": "uint256"
        }
      ],
      "name": "computeFirstRoundWinners",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_electionId",
          "type": "uint256"
        }
      ],
      "name": "computeFinalRoundWinner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.7.0+commit.9e61f92b\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"addAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_candidateName\",\"type\":\"string\"}],\"name\":\"addCandidate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_noteId\",\"type\":\"uint256\"}],\"name\":\"addNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"addVoter\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_note\",\"type\":\"uint256\"}],\"name\":\"calculatePercentageOfNote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"computeAverageNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeCandidatesAverageNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeFinalRoundWinner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeFirstRoundWinners\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeResult\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_title\",\"type\":\"string\"},{\"internalType\":\"string[]\",\"name\":\"_candidatesNames\",\"type\":\"string[]\"}],\"name\":\"createElection\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"deleteAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"elections\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"creationDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"closingDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalVoters\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"isOpen\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"candidatesCount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"winner\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"electionsCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"endElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"getCandidate\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_noteId\",\"type\":\"uint256\"}],\"name\":\"getCandidateNote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getCandidatesCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionStatus\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionTitle\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionWinner\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getFirstRoundWinners\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"}],\"name\":\"getOneFirstRoundWinner\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"incrementVoters\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"userAddress\",\"type\":\"address\"}],\"name\":\"isUserAdmin\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol\":\"ElectionHelper\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Candidate.sol\":{\"keccak256\":\"0x52d89b6f9a5d2c22104d8f090f446f41dc184f58ef0ea7d506d49a2d040ccd28\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://dea9346bfae0da013fd9b79345beeb639f75449ad46f6726053b04714887d118\",\"dweb:/ipfs/QmcbgNcwp1NG67WPRF12ugtpKYsf1HQcxWcHZ1aHZd55hU\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol\":{\"keccak256\":\"0xce6751d48384d436adae7ede503e293aef6c33f25dc3c27f80ee01419166efc4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://06d99d3abb2c0a1ddeeab27ca5ce4c6699a2dc50053bf48e170c9ee1f9256bdb\",\"dweb:/ipfs/Qmbh2ovDKNRdchUgeLjo8f7tkESLu1sxyvZTqsQswMPL5H\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol\":{\"keccak256\":\"0x57b58313951c20ec7741dbfb1e7d17a658998df4199603706ea1413d6a3d7d41\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e6b967ccd12912c7dd85b88e167f07c28a66c81f2f2e020557fb551e13da9cc3\",\"dweb:/ipfs/QmaunG12zPety2gSKKBwSDSb4xyEb2VsBYzDkYh5hcZGDr\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol\":{\"keccak256\":\"0x7f1004825e1cc40d7b663e20d3be71ed9c64baf7f05eae9b115a4d4448c8fdcf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5d8ccf5e65c162aeabb1b5e804f7183d95be7a985d5466796025a39ede9cfa62\",\"dweb:/ipfs/QmNZR6izJaw2bC9aCAcVbtS1kE9YBWuuqoaryy8idA14ta\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600560008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550612075806100d96000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80637bb1541d116100f9578063cd015c3211610097578063d8f7a0bb11610071578063d8f7a0bb14610506578063e62c6ac514610522578063e76f6b5814610552578063f2fde38b14610582576101a9565b8063cd015c32146104b2578063cd08bca0146104ce578063cd62d5dd146104ea576101a9565b80639c98bcbb116100d35780639c98bcbb1461042e578063ab6cb0491461044a578063b12b1a7d14610466578063be4d823e14610496576101a9565b80637bb1541d146103d65780638da5cb5b146103f25780639a74c69514610410576101a9565b80633a0b35b7116101665780634d94fc6a116101405780634d94fc6a146103245780635e6fef0114610354578063704802751461038a57806374d523a8146103a6576101a9565b80633a0b35b7146102925780633ee95f00146102c25780634bd46448146102f2576101a9565b80631750a3d0146101ae5780631aaa5246146101ca57806324785b9e146101e657806327e1f7df14610216578063337fa14614610232578063349813b214610262575b600080fd5b6101c860048036038101906101c39190611a96565b61059e565b005b6101e460048036038101906101df9190611a44565b610605565b005b61020060048036038101906101fb9190611a44565b61062e565b60405161020d9190611d1d565b60405180910390f35b610230600480360381019061022b91906119af565b61065b565b005b61024c60048036038101906102479190611b26565b6107da565b6040516102599190611e4e565b60405180910390f35b61027c600480360381019061027791906119d8565b610821565b6040516102899190611e4e565b60405180910390f35b6102ac60048036038101906102a79190611b26565b610a19565b6040516102b99190611e4e565b60405180910390f35b6102dc60048036038101906102d79190611a44565b610aa9565b6040516102e99190611e4e565b60405180910390f35b61030c60048036038101906103079190611aea565b610ac9565b60405161031b93929190611d5a565b60405180910390f35b61033e60048036038101906103399190611a44565b610bb1565b60405161034b9190611d38565b60405180910390f35b61036e60048036038101906103699190611a44565b610c69565b6040516103819796959493929190611d98565b60405180910390f35b6103a4600480360381019061039f91906119af565b610d50565b005b6103c060048036038101906103bb91906119af565b610e40565b6040516103cd9190611d1d565b60405180910390f35b6103f060048036038101906103eb9190611a44565b610e96565b005b6103fa610fd6565b6040516104079190611ce0565b60405180910390f35b610418610ffa565b6040516104259190611e4e565b60405180910390f35b61044860048036038101906104439190611a44565b611000565b005b610464600480360381019061045f9190611a44565b6110eb565b005b610480600480360381019061047b9190611a44565b611127565b60405161048d9190611cfb565b60405180910390f35b6104b060048036038101906104ab9190611a44565b611195565b005b6104cc60048036038101906104c79190611a44565b61122b565b005b6104e860048036038101906104e39190611b26565b611393565b005b61050460048036038101906104ff9190611aea565b6113e3565b005b610520600480360381019061051b9190611a44565b6115cd565b005b61053c60048036038101906105379190611a44565b611645565b6040516105499190611e4e565b60405180910390f35b61056c60048036038101906105679190611aea565b611665565b6040516105799190611e4e565b60405180910390f35b61059c600480360381019061059791906119af565b61169b565b005b8060026000848152602001908152602001600020600601600060026000868152602001908152602001600020600501600081548092919060010191905055815260200190815260200160002060000190805190602001906106009291906117ea565b505050565b600260008281526020019081526020016000206003016000815480929190600101919050555050565b60006002600083815260200190815260200160002060040160009054906101000a900460ff169050919050565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146106ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e690611e0e565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561077e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077590611e2e565b60405180910390fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600060026000858152602001908152602001600020600601600084815260200190815260200160002060010160008381526020019081526020016000205490509392505050565b60003360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146108b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ae90611e0e565b60405180910390fd5b60008351905060016000815480929190600101919050555060006002600060015481526020019081526020016000209050858160000190805190602001906109009291906117ea565b504281600101819055506000816003018190555060018160040160006101000a81548160ff02191690831515021790555060005b828110156109685761095b60015487838151811061094e57fe5b602002602001015161059e565b8080600101915050610934565b503360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600154935050505092915050565b600080600260008681526020019081526020016000206006016000858152602001908152602001600020600101600084815260200190815260200160002054905060006064820290506000600260008881526020019081526020016000206003015490506000811415610a925760009350505050610aa2565b808281610a9b57fe5b0493505050505b9392505050565b600060026000838152602001908152602001600020600501549050919050565b6060600080600060026000878152602001908152602001600020600601600086815260200190815260200160002090508060000181600201548260030154828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b9c5780601f10610b7157610100808354040283529160200191610b9c565b820191906000526020600020905b815481529060010190602001808311610b7f57829003601f168201915b50505050509250935093509350509250925092565b6060600260008381526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c5d5780601f10610c3257610100808354040283529160200191610c5d565b820191906000526020600020905b815481529060010190602001808311610c4057829003601f168201915b50505050509050919050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d155780601f10610cea57610100808354040283529160200191610d15565b820191906000526020600020905b815481529060010190602001808311610cf857829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154908060090154905087565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610de4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ddb90611e0e565b60405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b6002600084815260200190815260200160002060080180549050811015610fd1576000600260008581526020019081526020016000206006016000600260008781526020019081526020016000206008018481548110610efa57fe5b906000526020600020015481526020019081526020016000206002015490506000821415610f7057809250600260008581526020019081526020016000206008018281548110610f4657fe5b90600052602060002001546002600086815260200190815260200160002060090181905550610fc3565b82811115610fc257809250600260008581526020019081526020016000206008018281548110610f9c57fe5b906000526020600020015460026000868152602001908152602001600020600901819055505b5b508080600101915050610e9e565b505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514611094576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108b90611e0e565b60405180910390fd5b60006002600084815260200190815260200160002060040160006101000a81548160ff0219169083151502179055504260026000848152602001908152602001600020600201819055506110e782611195565b5050565b60005b60026000838152602001908152602001600020600501548110156111235761111682826113e3565b80806001019150506110ee565b5050565b60606002600083815260200190815260200160002060080180548060200260200160405190810160405280929190818152602001828054801561118957602002820191906000526020600020905b815481526020019060010190808311611175575b50505050509050919050565b61119e816110eb565b6111a78161122b565b6111b081610e96565b6001600260008381526020019081526020016000206008018054905011156111e0576111db81610e96565b611228565b6002600082815260200190815260200160002060080160008154811061120257fe5b906000526020600020015460026000838152602001908152602001600020600901819055505b50565b6000805b600260008481526020019081526020016000206005015481101561138e57600260008481526020019081526020016000206006016000828152602001908152602001600020600301548214156112c15760026000848152602001908152602001600020600801819080600181540180825580915050600190039060005260206000200160009091909190915055611381565b6002600084815260200190815260200160002060060160008281526020019081526020016000206003015482101561138057600260008481526020019081526020016000206008016000611315919061186a565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301549150600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150555b5b808060010191505061122f565b505050565b600260008481526020019081526020016000206006016000838152602001908152602001600020600101600082815260200190815260200160002060008154809291906001019190505550505050565b600060026000848152602001908152602001600020600301541415611437576000600260008481526020019081526020016000206006016000838152602001908152602001600020600301819055506115c9565b6000600690505b603260026000858152602001908152602001600020600601600084815260200190815260200160002060020154116115c7573073ffffffffffffffffffffffffffffffffffffffff16633a0b35b78484846040518463ffffffff1660e01b81526004016114ad93929190611e69565b60206040518083038186803b1580156114c557600080fd5b505afa1580156114d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114fd9190611a6d565b600260008581526020019081526020016000206006016000848152602001908152602001600020600201540160026000858152602001908152602001600020600601600084815260200190815260200160002060020181905550603260026000858152602001908152602001600020600601600084815260200190815260200160002060020154106115b95780600260008581526020019081526020016000206006016000848152602001908152602001600020600301819055505b80806001900391505061143e565b505b5050565b60016002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061164281610605565b50565b600060026000838152602001908152602001600020600901549050919050565b600060026000848152602001908152602001600020600801828154811061168857fe5b9060005260206000200154905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146116f357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561172d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061182b57805160ff1916838001178555611859565b82800160010185558215611859579182015b8281111561185857825182559160200191906001019061183d565b5b509050611866919061188b565b5090565b5080546000825590600052602060002090810190611888919061188b565b50565b5b808211156118a457600081600090555060010161188c565b5090565b6000813590506118b781612011565b92915050565b600082601f8301126118ce57600080fd5b81356118e16118dc82611ecd565b611ea0565b9150818183526020840193506020810190508360005b83811015611927578135860161190d8882611931565b8452602084019350602083019250506001810190506118f7565b5050505092915050565b600082601f83011261194257600080fd5b813561195561195082611ef5565b611ea0565b9150808252602083016020830185838301111561197157600080fd5b61197c838284611fbe565b50505092915050565b60008135905061199481612028565b92915050565b6000815190506119a981612028565b92915050565b6000602082840312156119c157600080fd5b60006119cf848285016118a8565b91505092915050565b600080604083850312156119eb57600080fd5b600083013567ffffffffffffffff811115611a0557600080fd5b611a1185828601611931565b925050602083013567ffffffffffffffff811115611a2e57600080fd5b611a3a858286016118bd565b9150509250929050565b600060208284031215611a5657600080fd5b6000611a6484828501611985565b91505092915050565b600060208284031215611a7f57600080fd5b6000611a8d8482850161199a565b91505092915050565b60008060408385031215611aa957600080fd5b6000611ab785828601611985565b925050602083013567ffffffffffffffff811115611ad457600080fd5b611ae085828601611931565b9150509250929050565b60008060408385031215611afd57600080fd5b6000611b0b85828601611985565b9250506020611b1c85828601611985565b9150509250929050565b600080600060608486031215611b3b57600080fd5b6000611b4986828701611985565b9350506020611b5a86828701611985565b9250506040611b6b86828701611985565b9150509250925092565b6000611b818383611cc2565b60208301905092915050565b611b9681611f76565b82525050565b6000611ba782611f31565b611bb18185611f54565b9350611bbc83611f21565b8060005b83811015611bed578151611bd48882611b75565b9750611bdf83611f47565b925050600181019050611bc0565b5085935050505092915050565b611c0381611f88565b82525050565b6000611c1482611f3c565b611c1e8185611f65565b9350611c2e818560208601611fcd565b611c3781612000565b840191505092915050565b6000611c4f601483611f65565b91507f596f7520617265206e6f7420616e2061646d696e0000000000000000000000006000830152602082019050919050565b6000611c8f601f83611f65565b91507f43616e6e6f742072656d6f7665206f776e65722066726f6d2061646d696e73006000830152602082019050919050565b611ccb81611fb4565b82525050565b611cda81611fb4565b82525050565b6000602082019050611cf56000830184611b8d565b92915050565b60006020820190508181036000830152611d158184611b9c565b905092915050565b6000602082019050611d326000830184611bfa565b92915050565b60006020820190508181036000830152611d528184611c09565b905092915050565b60006060820190508181036000830152611d748186611c09565b9050611d836020830185611cd1565b611d906040830184611cd1565b949350505050565b600060e0820190508181036000830152611db2818a611c09565b9050611dc16020830189611cd1565b611dce6040830188611cd1565b611ddb6060830187611cd1565b611de86080830186611bfa565b611df560a0830185611cd1565b611e0260c0830184611cd1565b98975050505050505050565b60006020820190508181036000830152611e2781611c42565b9050919050565b60006020820190508181036000830152611e4781611c82565b9050919050565b6000602082019050611e636000830184611cd1565b92915050565b6000606082019050611e7e6000830186611cd1565b611e8b6020830185611cd1565b611e986040830184611cd1565b949350505050565b6000604051905081810181811067ffffffffffffffff82111715611ec357600080fd5b8060405250919050565b600067ffffffffffffffff821115611ee457600080fd5b602082029050602081019050919050565b600067ffffffffffffffff821115611f0c57600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611f8182611f94565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611feb578082015181840152602081019050611fd0565b83811115611ffa576000848401525b50505050565b6000601f19601f8301169050919050565b61201a81611f76565b811461202557600080fd5b50565b61203181611fb4565b811461203c57600080fd5b5056fea2646970667358221220fdb3150f4a83e4b3c9212ccc38e5df286468c485016b0b854aeea6e55217d6fd64736f6c63430007000033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101a95760003560e01c80637bb1541d116100f9578063cd015c3211610097578063d8f7a0bb11610071578063d8f7a0bb14610506578063e62c6ac514610522578063e76f6b5814610552578063f2fde38b14610582576101a9565b8063cd015c32146104b2578063cd08bca0146104ce578063cd62d5dd146104ea576101a9565b80639c98bcbb116100d35780639c98bcbb1461042e578063ab6cb0491461044a578063b12b1a7d14610466578063be4d823e14610496576101a9565b80637bb1541d146103d65780638da5cb5b146103f25780639a74c69514610410576101a9565b80633a0b35b7116101665780634d94fc6a116101405780634d94fc6a146103245780635e6fef0114610354578063704802751461038a57806374d523a8146103a6576101a9565b80633a0b35b7146102925780633ee95f00146102c25780634bd46448146102f2576101a9565b80631750a3d0146101ae5780631aaa5246146101ca57806324785b9e146101e657806327e1f7df14610216578063337fa14614610232578063349813b214610262575b600080fd5b6101c860048036038101906101c39190611a96565b61059e565b005b6101e460048036038101906101df9190611a44565b610605565b005b61020060048036038101906101fb9190611a44565b61062e565b60405161020d9190611d1d565b60405180910390f35b610230600480360381019061022b91906119af565b61065b565b005b61024c60048036038101906102479190611b26565b6107da565b6040516102599190611e4e565b60405180910390f35b61027c600480360381019061027791906119d8565b610821565b6040516102899190611e4e565b60405180910390f35b6102ac60048036038101906102a79190611b26565b610a19565b6040516102b99190611e4e565b60405180910390f35b6102dc60048036038101906102d79190611a44565b610aa9565b6040516102e99190611e4e565b60405180910390f35b61030c60048036038101906103079190611aea565b610ac9565b60405161031b93929190611d5a565b60405180910390f35b61033e60048036038101906103399190611a44565b610bb1565b60405161034b9190611d38565b60405180910390f35b61036e60048036038101906103699190611a44565b610c69565b6040516103819796959493929190611d98565b60405180910390f35b6103a4600480360381019061039f91906119af565b610d50565b005b6103c060048036038101906103bb91906119af565b610e40565b6040516103cd9190611d1d565b60405180910390f35b6103f060048036038101906103eb9190611a44565b610e96565b005b6103fa610fd6565b6040516104079190611ce0565b60405180910390f35b610418610ffa565b6040516104259190611e4e565b60405180910390f35b61044860048036038101906104439190611a44565b611000565b005b610464600480360381019061045f9190611a44565b6110eb565b005b610480600480360381019061047b9190611a44565b611127565b60405161048d9190611cfb565b60405180910390f35b6104b060048036038101906104ab9190611a44565b611195565b005b6104cc60048036038101906104c79190611a44565b61122b565b005b6104e860048036038101906104e39190611b26565b611393565b005b61050460048036038101906104ff9190611aea565b6113e3565b005b610520600480360381019061051b9190611a44565b6115cd565b005b61053c60048036038101906105379190611a44565b611645565b6040516105499190611e4e565b60405180910390f35b61056c60048036038101906105679190611aea565b611665565b6040516105799190611e4e565b60405180910390f35b61059c600480360381019061059791906119af565b61169b565b005b8060026000848152602001908152602001600020600601600060026000868152602001908152602001600020600501600081548092919060010191905055815260200190815260200160002060000190805190602001906106009291906117ea565b505050565b600260008281526020019081526020016000206003016000815480929190600101919050555050565b60006002600083815260200190815260200160002060040160009054906101000a900460ff169050919050565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146106ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e690611e0e565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561077e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077590611e2e565b60405180910390fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600060026000858152602001908152602001600020600601600084815260200190815260200160002060010160008381526020019081526020016000205490509392505050565b60003360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146108b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ae90611e0e565b60405180910390fd5b60008351905060016000815480929190600101919050555060006002600060015481526020019081526020016000209050858160000190805190602001906109009291906117ea565b504281600101819055506000816003018190555060018160040160006101000a81548160ff02191690831515021790555060005b828110156109685761095b60015487838151811061094e57fe5b602002602001015161059e565b8080600101915050610934565b503360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600154935050505092915050565b600080600260008681526020019081526020016000206006016000858152602001908152602001600020600101600084815260200190815260200160002054905060006064820290506000600260008881526020019081526020016000206003015490506000811415610a925760009350505050610aa2565b808281610a9b57fe5b0493505050505b9392505050565b600060026000838152602001908152602001600020600501549050919050565b6060600080600060026000878152602001908152602001600020600601600086815260200190815260200160002090508060000181600201548260030154828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b9c5780601f10610b7157610100808354040283529160200191610b9c565b820191906000526020600020905b815481529060010190602001808311610b7f57829003601f168201915b50505050509250935093509350509250925092565b6060600260008381526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c5d5780601f10610c3257610100808354040283529160200191610c5d565b820191906000526020600020905b815481529060010190602001808311610c4057829003601f168201915b50505050509050919050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d155780601f10610cea57610100808354040283529160200191610d15565b820191906000526020600020905b815481529060010190602001808311610cf857829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154908060090154905087565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610de4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ddb90611e0e565b60405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b6002600084815260200190815260200160002060080180549050811015610fd1576000600260008581526020019081526020016000206006016000600260008781526020019081526020016000206008018481548110610efa57fe5b906000526020600020015481526020019081526020016000206002015490506000821415610f7057809250600260008581526020019081526020016000206008018281548110610f4657fe5b90600052602060002001546002600086815260200190815260200160002060090181905550610fc3565b82811115610fc257809250600260008581526020019081526020016000206008018281548110610f9c57fe5b906000526020600020015460026000868152602001908152602001600020600901819055505b5b508080600101915050610e9e565b505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514611094576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108b90611e0e565b60405180910390fd5b60006002600084815260200190815260200160002060040160006101000a81548160ff0219169083151502179055504260026000848152602001908152602001600020600201819055506110e782611195565b5050565b60005b60026000838152602001908152602001600020600501548110156111235761111682826113e3565b80806001019150506110ee565b5050565b60606002600083815260200190815260200160002060080180548060200260200160405190810160405280929190818152602001828054801561118957602002820191906000526020600020905b815481526020019060010190808311611175575b50505050509050919050565b61119e816110eb565b6111a78161122b565b6111b081610e96565b6001600260008381526020019081526020016000206008018054905011156111e0576111db81610e96565b611228565b6002600082815260200190815260200160002060080160008154811061120257fe5b906000526020600020015460026000838152602001908152602001600020600901819055505b50565b6000805b600260008481526020019081526020016000206005015481101561138e57600260008481526020019081526020016000206006016000828152602001908152602001600020600301548214156112c15760026000848152602001908152602001600020600801819080600181540180825580915050600190039060005260206000200160009091909190915055611381565b6002600084815260200190815260200160002060060160008281526020019081526020016000206003015482101561138057600260008481526020019081526020016000206008016000611315919061186a565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301549150600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150555b5b808060010191505061122f565b505050565b600260008481526020019081526020016000206006016000838152602001908152602001600020600101600082815260200190815260200160002060008154809291906001019190505550505050565b600060026000848152602001908152602001600020600301541415611437576000600260008481526020019081526020016000206006016000838152602001908152602001600020600301819055506115c9565b6000600690505b603260026000858152602001908152602001600020600601600084815260200190815260200160002060020154116115c7573073ffffffffffffffffffffffffffffffffffffffff16633a0b35b78484846040518463ffffffff1660e01b81526004016114ad93929190611e69565b60206040518083038186803b1580156114c557600080fd5b505afa1580156114d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114fd9190611a6d565b600260008581526020019081526020016000206006016000848152602001908152602001600020600201540160026000858152602001908152602001600020600601600084815260200190815260200160002060020181905550603260026000858152602001908152602001600020600601600084815260200190815260200160002060020154106115b95780600260008581526020019081526020016000206006016000848152602001908152602001600020600301819055505b80806001900391505061143e565b505b5050565b60016002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061164281610605565b50565b600060026000838152602001908152602001600020600901549050919050565b600060026000848152602001908152602001600020600801828154811061168857fe5b9060005260206000200154905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146116f357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561172d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061182b57805160ff1916838001178555611859565b82800160010185558215611859579182015b8281111561185857825182559160200191906001019061183d565b5b509050611866919061188b565b5090565b5080546000825590600052602060002090810190611888919061188b565b50565b5b808211156118a457600081600090555060010161188c565b5090565b6000813590506118b781612011565b92915050565b600082601f8301126118ce57600080fd5b81356118e16118dc82611ecd565b611ea0565b9150818183526020840193506020810190508360005b83811015611927578135860161190d8882611931565b8452602084019350602083019250506001810190506118f7565b5050505092915050565b600082601f83011261194257600080fd5b813561195561195082611ef5565b611ea0565b9150808252602083016020830185838301111561197157600080fd5b61197c838284611fbe565b50505092915050565b60008135905061199481612028565b92915050565b6000815190506119a981612028565b92915050565b6000602082840312156119c157600080fd5b60006119cf848285016118a8565b91505092915050565b600080604083850312156119eb57600080fd5b600083013567ffffffffffffffff811115611a0557600080fd5b611a1185828601611931565b925050602083013567ffffffffffffffff811115611a2e57600080fd5b611a3a858286016118bd565b9150509250929050565b600060208284031215611a5657600080fd5b6000611a6484828501611985565b91505092915050565b600060208284031215611a7f57600080fd5b6000611a8d8482850161199a565b91505092915050565b60008060408385031215611aa957600080fd5b6000611ab785828601611985565b925050602083013567ffffffffffffffff811115611ad457600080fd5b611ae085828601611931565b9150509250929050565b60008060408385031215611afd57600080fd5b6000611b0b85828601611985565b9250506020611b1c85828601611985565b9150509250929050565b600080600060608486031215611b3b57600080fd5b6000611b4986828701611985565b9350506020611b5a86828701611985565b9250506040611b6b86828701611985565b9150509250925092565b6000611b818383611cc2565b60208301905092915050565b611b9681611f76565b82525050565b6000611ba782611f31565b611bb18185611f54565b9350611bbc83611f21565b8060005b83811015611bed578151611bd48882611b75565b9750611bdf83611f47565b925050600181019050611bc0565b5085935050505092915050565b611c0381611f88565b82525050565b6000611c1482611f3c565b611c1e8185611f65565b9350611c2e818560208601611fcd565b611c3781612000565b840191505092915050565b6000611c4f601483611f65565b91507f596f7520617265206e6f7420616e2061646d696e0000000000000000000000006000830152602082019050919050565b6000611c8f601f83611f65565b91507f43616e6e6f742072656d6f7665206f776e65722066726f6d2061646d696e73006000830152602082019050919050565b611ccb81611fb4565b82525050565b611cda81611fb4565b82525050565b6000602082019050611cf56000830184611b8d565b92915050565b60006020820190508181036000830152611d158184611b9c565b905092915050565b6000602082019050611d326000830184611bfa565b92915050565b60006020820190508181036000830152611d528184611c09565b905092915050565b60006060820190508181036000830152611d748186611c09565b9050611d836020830185611cd1565b611d906040830184611cd1565b949350505050565b600060e0820190508181036000830152611db2818a611c09565b9050611dc16020830189611cd1565b611dce6040830188611cd1565b611ddb6060830187611cd1565b611de86080830186611bfa565b611df560a0830185611cd1565b611e0260c0830184611cd1565b98975050505050505050565b60006020820190508181036000830152611e2781611c42565b9050919050565b60006020820190508181036000830152611e4781611c82565b9050919050565b6000602082019050611e636000830184611cd1565b92915050565b6000606082019050611e7e6000830186611cd1565b611e8b6020830185611cd1565b611e986040830184611cd1565b949350505050565b6000604051905081810181811067ffffffffffffffff82111715611ec357600080fd5b8060405250919050565b600067ffffffffffffffff821115611ee457600080fd5b602082029050602081019050919050565b600067ffffffffffffffff821115611f0c57600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611f8182611f94565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611feb578082015181840152602081019050611fd0565b83811115611ffa576000848401525b50505050565b6000601f19601f8301169050919050565b61201a81611f76565b811461202557600080fd5b50565b61203181611fb4565b811461203c57600080fd5b5056fea2646970667358221220fdb3150f4a83e4b3c9212ccc38e5df286468c485016b0b854aeea6e55217d6fd64736f6c63430007000033",
  "immutableReferences": {},
  "sourceMap": "185:3077:2:-:0;;;;;;;;;;;;;552:10:5;544:5;;:18;;;;;;;;;;;;;;;;;;212:4:1;193:9;:16;203:5;;;;;;;;;;;193:16;;;;;;;;;;;;;;;;:23;;;;;;;;;;;;;;;;;;185:3077:2;;;;;;",
  "deployedSourceMap": "185:3077:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2170:191:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;342:104:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;609:125:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1166:193:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;879:190:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1486:678:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1075:406:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;736:137;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;452:278;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;471:132:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;717:43:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;;:::i;:::-;;;;;;;;1044:116;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1365:115;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2604:656:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;279:20:5;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;685:26:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;245:220:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1772:203;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1181:136;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1323:443;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1981:617;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;179:157:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1487:738;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;873:146:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;740:127;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1025:150;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;907:188:5;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2170:191:1;2340:14;2257:9;:22;2267:11;2257:22;;;;;;;;;;;:33;;:75;2291:9;:22;2301:11;2291:22;;;;;;;;;;;:38;;;:40;;;;;;;;;;;;2257:75;;;;;;;;;;;:80;;:97;;;;;;;;;;;;:::i;:::-;;2170:191;;:::o;342:104:0:-;402:9;:22;412:11;402:22;;;;;;;;;;;:34;;;:37;;;;;;;;;;;;;342:104;:::o;609:125:2:-;675:4;698:9;:22;708:11;698:22;;;;;;;;;;;:29;;;;;;;;;;;;691:36;;609:125;;;:::o;1166:193:1:-;1226:10;991:4;964:31;;:9;:23;974:12;964:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;955:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1270:5:::1;::::0;::::1;;;;;;;;1256:19;;:10;:19;;;;1248:63;;;;;;;;;;;;:::i;:::-;;;;;;;;;1347:5;1321:9;:23;1331:12;1321:23;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;;;;;;;1166:193:::0;;:::o;879:190:0:-;977:4;1000:9;:22;1010:11;1000:22;;;;;;;;;;;:33;;:47;1034:12;1000:47;;;;;;;;;;;:53;;:62;1054:7;1000:62;;;;;;;;;;;;993:69;;879:190;;;;;:::o;1486:678:1:-;1604:4;1583:10;991:4;964:31;;:9;:23;974:12;964:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;955:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1620:17:::1;1640:16;:23;1620:43;;1673:14;;:16;;;;;;;;;;;;;1699:25;1727:9;:25;1737:14;;1727:25;;;;;;;;;;;1699:53;;1779:6;1762:8;:14;;:23;;;;;;;;;;;;:::i;:::-;;1819:15;1795:8;:21;;:39;;;;1867:1;1844:8;:20;;:24;;;;1896:4;1878:8;:15;;;:22;;;;;;;;;;;;;;;;;;1916:6;1911:114;1932:12;1928:1;:16;1911:114;;;1965:49;1978:14;;1994:16;2011:1;1994:19;;;;;;;;;;;;;;1965:12;:49::i;:::-;1946:3;;;;;;;1911:114;;;;2069:10;2035:15;:31;2051:14;;2035:31;;;;;;;;;;;;:44;;;;;;;;;;;;;;;;;;2124:1;2090:18;:30;2109:10;2090:30;;;;;;;;;;;;;;;;:35;;;;;;;;;;;2143:14;;2136:21;;;;1486:678:::0;;;;;:::o;1075:406:0:-;1181:4;1196:9;1208;:22;1218:11;1208:22;;;;;;;;;;;:33;;:47;1242:12;1208:47;;;;;;;;;;;:53;;:60;1262:5;1208:60;;;;;;;;;;;;1196:72;;1278:15;1303:3;1296:4;:10;1278:28;;1316:16;1335:9;:22;1345:11;1335:22;;;;;;;;;;;:34;;;1316:53;;1398:1;1383:11;:16;1379:55;;;1422:1;1415:8;;;;;;;1379:55;1463:11;1450:10;:24;;;;;;1443:31;;;;;1075:406;;;;;;:::o;736:137::-;805:4;828:9;:22;838:11;828:22;;;;;;;;;;;:38;;;821:45;;736:137;;;:::o;452:278::-;534:13;549:4;555;571:27;601:9;:22;611:11;601:22;;;;;;;;;;;:33;;:47;635:12;601:47;;;;;;;;;;;571:77;;666:9;:14;;682:9;:17;;;701:9;:21;;;658:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;452:278;;;;;:::o;471:132:2:-;536:13;568:9;:22;578:11;568:22;;;;;;;;;;;:28;;561:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;471:132;;;:::o;717:43:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1044:116::-;1101:10;991:4;964:31;;:9;:23;974:12;964:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;955:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1149:4:::1;1123:9;:23;1133:12;1123:23;;;;;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;1044:116:::0;;:::o;1365:115::-;1429:4;1451:9;:22;1461:11;1451:22;;;;;;;;;;;;;;;;;;;;;;;;;1444:29;;1365:115;;;:::o;2604:656:2:-;2672:18;2704:6;2713:1;2704:10;;2700:554;2720:9;:22;2730:11;2720:22;;;;;;;;;;;:30;;:37;;;;2716:1;:41;2700:554;;;2777:19;2799:9;:22;2809:11;2799:22;;;;;;;;;;;:33;;:68;2833:9;:22;2843:11;2833:22;;;;;;;;;;;:30;;2864:1;2833:33;;;;;;;;;;;;;;;;2799:68;;;;;;;;;;;:76;;;2777:98;;2897:1;2892;:6;2889:355;;;2933:14;2917:30;;2997:9;:22;3007:11;2997:22;;;;;;;;;;;:30;;3028:1;2997:33;;;;;;;;;;;;;;;;2965:9;:22;2975:11;2965:22;;;;;;;;;;;:29;;:65;;;;2889:355;;;3084:13;3067:14;:30;3063:181;;;3132:14;3116:30;;3196:9;:22;3206:11;3196:22;;;;;;;;;;;:30;;3227:1;3196:33;;;;;;;;;;;;;;;;3164:9;:22;3174:11;3164:22;;;;;;;;;;;:29;;:65;;;;3063:181;2889:355;2700:554;2759:3;;;;;;;2700:554;;;;2604:656;;:::o;279:20:5:-;;;;;;;;;;;;:::o;685:26:1:-;;;;:::o;245:220:2:-;301:10;991:4:1;964:31;;:9;:23;974:12;964:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;955:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;355:5:2::1;323:9;:22;333:11;323:22;;;;;;;;;;;:29;;;:37;;;;;;;;;;;;;;;;;;407:15;370:9;:22;380:11;370:22;;;;;;;;;;;:34;;:52;;;;432:26;446:11;432:13;:26::i;:::-;245:220:::0;;:::o;1772:203::-;1850:6;1845:124;1866:9;:22;1876:11;1866:22;;;;;;;;;;;:38;;;1862:1;:42;1845:124;;;1924:34;1943:11;1956:1;1924:18;:34::i;:::-;1906:3;;;;;;;1845:124;;;;1772:203;:::o;1181:136::-;1249:13;1280:9;:22;1290:11;1280:22;;;;;;;;;;;:30;;1273:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1181:136;;;:::o;1323:443::-;1381:41;1410:11;1381:28;:41::i;:::-;1433:37;1458:11;1433:24;:37::i;:::-;1481:36;1505:11;1481:23;:36::i;:::-;1570:1;1530:9;:22;1540:11;1530:22;;;;;;;;;;;:30;;:37;;;;:41;1527:233;;;1586:36;1610:11;1586:23;:36::i;:::-;1527:233;;;1716:9;:22;1726:11;1716:22;;;;;;;;;;;:30;;1747:1;1716:33;;;;;;;;;;;;;;;;1684:9;:22;1694:11;1684:22;;;;;;;;;;;:29;;:65;;;;1527:233;1323:443;:::o;1981:617::-;2050:15;2083:6;2079:513;2099:9;:22;2109:11;2099:22;;;;;;;;;;;:38;;;2095:1;:42;2079:513;;;2174:9;:22;2184:11;2174:22;;;;;;;;;;;:33;;:36;2208:1;2174:36;;;;;;;;;;;:48;;;2160:10;:62;2157:425;;;2241:9;:22;2251:11;2241:22;;;;;;;;;;;:30;;2277:1;2241:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2157:425;;;2328:9;:22;2338:11;2328:22;;;;;;;;;;;:33;;:36;2362:1;2328:36;;;;;;;;;;;:48;;;2315:10;:61;2312:270;;;2402:9;:22;2412:11;2402:22;;;;;;;;;;;:30;;;2395:37;;;;:::i;:::-;2463:9;:22;2473:11;2463:22;;;;;;;;;;;:33;;:36;2497:1;2463:36;;;;;;;;;;;:48;;;2450:61;;2529:9;:22;2539:11;2529:22;;;;;;;;;;;:30;;2565:1;2529:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2312:270;2157:425;2139:3;;;;;;;2079:513;;;;1981:617;;:::o;179:157:0:-;264:9;:22;274:11;264:22;;;;;;;;;;;:33;;:47;298:12;264:47;;;;;;;;;;;:53;;:62;318:7;264:62;;;;;;;;;;;;:65;;;;;;;;;;;;;179:157;;;:::o;1487:738::-;1611:1;1573:9;:22;1583:11;1573:22;;;;;;;;;;;:34;;;:39;1569:650;;;1690:1;1628:9;:22;1638:11;1628:22;;;;;;;;;;;:33;;:47;1662:12;1628:47;;;;;;;;;;;:59;;:63;;;;1569:650;;;1735:6;1744:1;1735:10;;1730:479;1806:2;1747:9;:22;1757:11;1747:22;;;;;;;;;;;:33;;:47;1781:12;1747:47;;;;;;;;;;;:55;;;:61;1730:479;;1948:4;:30;;;1979:11;1992:12;2006:1;1948:60;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1890:9;:22;1900:11;1890:22;;;;;;;;;;;:33;;:47;1924:12;1890:47;;;;;;;;;;;:55;;;:118;1832:9;:22;1842:11;1832:22;;;;;;;;;;;:33;;:47;1866:12;1832:47;;;;;;;;;;;:55;;:176;;;;2088:2;2029:9;:22;2039:11;2029:22;;;;;;;;;;;:33;;:47;2063:12;2029:47;;;;;;;;;;;:55;;;:61;2026:169;;2175:1;2113:9;:22;2123:11;2113:22;;;;;;;;;;;:33;;:47;2147:12;2113:47;;;;;;;;;;;:59;;:63;;;;2026:169;1810:3;;;;;;;;1730:479;;;;1569:650;1487:738;;:::o;873:146:2:-;970:4;926:9;:22;936:11;926:22;;;;;;;;;;;:29;;:41;956:10;926:41;;;;;;;;;;;;;;;;:48;;;;;;;;;;;;;;;;;;984:28;1000:11;984:15;:28::i;:::-;873:146;:::o;740:127::-;808:4;831:9;:22;841:11;831:22;;;;;;;;;;;:29;;;824:36;;740:127;;;:::o;1025:150::-;1108:4;1130:9;:22;1140:11;1130:22;;;;;;;;;;;:30;;1161:6;1130:38;;;;;;;;;;;;;;;;1123:45;;1025:150;;;;:::o;907:188:5:-;711:5;;;;;;;;;;697:19;;:10;:19;;;689:28;;;;;;1007:1:::1;987:22;;:8;:22;;;;979:31;;;::::0;::::1;;1053:8;1025:37;;1046:5;::::0;::::1;;;;;;;;1025:37;;;;;;;;;;;;1080:8;1072:5;::::0;:16:::1;;;;;;;;;;;;;;;;;;907:188:::0;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;5:130::-;;85:6;72:20;63:29;;97:33;124:5;97:33;:::i;:::-;57:78;;;;:::o;159:708::-;;286:3;279:4;271:6;267:17;263:27;253:2;;304:1;301;294:12;253:2;341:6;328:20;363:90;378:74;445:6;378:74;:::i;:::-;363:90;:::i;:::-;354:99;;470:5;495:6;488:5;481:21;525:4;517:6;513:17;503:27;;547:4;542:3;538:14;531:21;;600:6;633:1;618:243;643:6;640:1;637:13;618:243;;;726:3;713:17;705:6;701:30;750:47;793:3;781:10;750:47;:::i;:::-;745:3;738:60;821:4;816:3;812:14;805:21;;849:4;844:3;840:14;833:21;;675:186;665:1;662;658:9;653:14;;618:243;;;622:14;246:621;;;;;;;:::o;876:442::-;;978:3;971:4;963:6;959:17;955:27;945:2;;996:1;993;986:12;945:2;1033:6;1020:20;1055:65;1070:49;1112:6;1070:49;:::i;:::-;1055:65;:::i;:::-;1046:74;;1140:6;1133:5;1126:21;1176:4;1168:6;1164:17;1209:4;1202:5;1198:16;1244:3;1235:6;1230:3;1226:16;1223:25;1220:2;;;1261:1;1258;1251:12;1220:2;1271:41;1305:6;1300:3;1295;1271:41;:::i;:::-;938:380;;;;;;;:::o;1326:130::-;;1406:6;1393:20;1384:29;;1418:33;1445:5;1418:33;:::i;:::-;1378:78;;;;:::o;1463:134::-;;1547:6;1541:13;1532:22;;1559:33;1586:5;1559:33;:::i;:::-;1526:71;;;;:::o;1604:241::-;;1708:2;1696:9;1687:7;1683:23;1679:32;1676:2;;;1724:1;1721;1714:12;1676:2;1759:1;1776:53;1821:7;1812:6;1801:9;1797:22;1776:53;:::i;:::-;1766:63;;1738:97;1670:175;;;;:::o;1852:628::-;;;2018:2;2006:9;1997:7;1993:23;1989:32;1986:2;;;2034:1;2031;2024:12;1986:2;2097:1;2086:9;2082:17;2069:31;2120:18;2112:6;2109:30;2106:2;;;2152:1;2149;2142:12;2106:2;2172:63;2227:7;2218:6;2207:9;2203:22;2172:63;:::i;:::-;2162:73;;2048:193;2300:2;2289:9;2285:18;2272:32;2324:18;2316:6;2313:30;2310:2;;;2356:1;2353;2346:12;2310:2;2376:88;2456:7;2447:6;2436:9;2432:22;2376:88;:::i;:::-;2366:98;;2251:219;1980:500;;;;;:::o;2487:241::-;;2591:2;2579:9;2570:7;2566:23;2562:32;2559:2;;;2607:1;2604;2597:12;2559:2;2642:1;2659:53;2704:7;2695:6;2684:9;2680:22;2659:53;:::i;:::-;2649:63;;2621:97;2553:175;;;;:::o;2735:263::-;;2850:2;2838:9;2829:7;2825:23;2821:32;2818:2;;;2866:1;2863;2856:12;2818:2;2901:1;2918:64;2974:7;2965:6;2954:9;2950:22;2918:64;:::i;:::-;2908:74;;2880:108;2812:186;;;;:::o;3005:472::-;;;3136:2;3124:9;3115:7;3111:23;3107:32;3104:2;;;3152:1;3149;3142:12;3104:2;3187:1;3204:53;3249:7;3240:6;3229:9;3225:22;3204:53;:::i;:::-;3194:63;;3166:97;3322:2;3311:9;3307:18;3294:32;3346:18;3338:6;3335:30;3332:2;;;3378:1;3375;3368:12;3332:2;3398:63;3453:7;3444:6;3433:9;3429:22;3398:63;:::i;:::-;3388:73;;3273:194;3098:379;;;;;:::o;3484:366::-;;;3605:2;3593:9;3584:7;3580:23;3576:32;3573:2;;;3621:1;3618;3611:12;3573:2;3656:1;3673:53;3718:7;3709:6;3698:9;3694:22;3673:53;:::i;:::-;3663:63;;3635:97;3763:2;3781:53;3826:7;3817:6;3806:9;3802:22;3781:53;:::i;:::-;3771:63;;3742:98;3567:283;;;;;:::o;3857:491::-;;;;3995:2;3983:9;3974:7;3970:23;3966:32;3963:2;;;4011:1;4008;4001:12;3963:2;4046:1;4063:53;4108:7;4099:6;4088:9;4084:22;4063:53;:::i;:::-;4053:63;;4025:97;4153:2;4171:53;4216:7;4207:6;4196:9;4192:22;4171:53;:::i;:::-;4161:63;;4132:98;4261:2;4279:53;4324:7;4315:6;4304:9;4300:22;4279:53;:::i;:::-;4269:63;;4240:98;3957:391;;;;;:::o;4356:173::-;;4443:46;4485:3;4477:6;4443:46;:::i;:::-;4518:4;4513:3;4509:14;4495:28;;4436:93;;;;:::o;4537:113::-;4620:24;4638:5;4620:24;:::i;:::-;4615:3;4608:37;4602:48;;:::o;4688:690::-;;4833:54;4881:5;4833:54;:::i;:::-;4900:86;4979:6;4974:3;4900:86;:::i;:::-;4893:93;;5007:56;5057:5;5007:56;:::i;:::-;5083:7;5111:1;5096:260;5121:6;5118:1;5115:13;5096:260;;;5188:6;5182:13;5209:63;5268:3;5253:13;5209:63;:::i;:::-;5202:70;;5289:60;5342:6;5289:60;:::i;:::-;5279:70;;5153:203;5143:1;5140;5136:9;5131:14;;5096:260;;;5100:14;5369:3;5362:10;;4812:566;;;;;;;:::o;5386:104::-;5463:21;5478:5;5463:21;:::i;:::-;5458:3;5451:34;5445:45;;:::o;5497:347::-;;5609:39;5642:5;5609:39;:::i;:::-;5660:71;5724:6;5719:3;5660:71;:::i;:::-;5653:78;;5736:52;5781:6;5776:3;5769:4;5762:5;5758:16;5736:52;:::i;:::-;5809:29;5831:6;5809:29;:::i;:::-;5804:3;5800:39;5793:46;;5589:255;;;;;:::o;5852:320::-;;6012:67;6076:2;6071:3;6012:67;:::i;:::-;6005:74;;6112:22;6108:1;6103:3;6099:11;6092:43;6163:2;6158:3;6154:12;6147:19;;5998:174;;;:::o;6181:331::-;;6341:67;6405:2;6400:3;6341:67;:::i;:::-;6334:74;;6441:33;6437:1;6432:3;6428:11;6421:54;6503:2;6498:3;6494:12;6487:19;;6327:185;;;:::o;6520:103::-;6593:24;6611:5;6593:24;:::i;:::-;6588:3;6581:37;6575:48;;:::o;6630:113::-;6713:24;6731:5;6713:24;:::i;:::-;6708:3;6701:37;6695:48;;:::o;6750:222::-;;6877:2;6866:9;6862:18;6854:26;;6891:71;6959:1;6948:9;6944:17;6935:6;6891:71;:::i;:::-;6848:124;;;;:::o;6979:370::-;;7156:2;7145:9;7141:18;7133:26;;7206:9;7200:4;7196:20;7192:1;7181:9;7177:17;7170:47;7231:108;7334:4;7325:6;7231:108;:::i;:::-;7223:116;;7127:222;;;;:::o;7356:210::-;;7477:2;7466:9;7462:18;7454:26;;7491:65;7553:1;7542:9;7538:17;7529:6;7491:65;:::i;:::-;7448:118;;;;:::o;7573:310::-;;7720:2;7709:9;7705:18;7697:26;;7770:9;7764:4;7760:20;7756:1;7745:9;7741:17;7734:47;7795:78;7868:4;7859:6;7795:78;:::i;:::-;7787:86;;7691:192;;;;:::o;7890:532::-;;8093:2;8082:9;8078:18;8070:26;;8143:9;8137:4;8133:20;8129:1;8118:9;8114:17;8107:47;8168:78;8241:4;8232:6;8168:78;:::i;:::-;8160:86;;8257:72;8325:2;8314:9;8310:18;8301:6;8257:72;:::i;:::-;8340;8408:2;8397:9;8393:18;8384:6;8340:72;:::i;:::-;8064:358;;;;;;:::o;8429:968::-;;8738:3;8727:9;8723:19;8715:27;;8789:9;8783:4;8779:20;8775:1;8764:9;8760:17;8753:47;8814:78;8887:4;8878:6;8814:78;:::i;:::-;8806:86;;8903:72;8971:2;8960:9;8956:18;8947:6;8903:72;:::i;:::-;8986;9054:2;9043:9;9039:18;9030:6;8986:72;:::i;:::-;9069;9137:2;9126:9;9122:18;9113:6;9069:72;:::i;:::-;9152:67;9214:3;9203:9;9199:19;9190:6;9152:67;:::i;:::-;9230:73;9298:3;9287:9;9283:19;9274:6;9230:73;:::i;:::-;9314;9382:3;9371:9;9367:19;9358:6;9314:73;:::i;:::-;8709:688;;;;;;;;;;:::o;9404:416::-;;9604:2;9593:9;9589:18;9581:26;;9654:9;9648:4;9644:20;9640:1;9629:9;9625:17;9618:47;9679:131;9805:4;9679:131;:::i;:::-;9671:139;;9575:245;;;:::o;9827:416::-;;10027:2;10016:9;10012:18;10004:26;;10077:9;10071:4;10067:20;10063:1;10052:9;10048:17;10041:47;10102:131;10228:4;10102:131;:::i;:::-;10094:139;;9998:245;;;:::o;10250:222::-;;10377:2;10366:9;10362:18;10354:26;;10391:71;10459:1;10448:9;10444:17;10435:6;10391:71;:::i;:::-;10348:124;;;;:::o;10479:444::-;;10662:2;10651:9;10647:18;10639:26;;10676:71;10744:1;10733:9;10729:17;10720:6;10676:71;:::i;:::-;10758:72;10826:2;10815:9;10811:18;10802:6;10758:72;:::i;:::-;10841;10909:2;10898:9;10894:18;10885:6;10841:72;:::i;:::-;10633:290;;;;;;:::o;10930:256::-;;10992:2;10986:9;10976:19;;11030:4;11022:6;11018:17;11129:6;11117:10;11114:22;11093:18;11081:10;11078:34;11075:62;11072:2;;;11150:1;11147;11140:12;11072:2;11170:10;11166:2;11159:22;10970:216;;;;:::o;11193:314::-;;11362:18;11354:6;11351:30;11348:2;;;11394:1;11391;11384:12;11348:2;11429:4;11421:6;11417:17;11409:25;;11492:4;11486;11482:15;11474:23;;11285:222;;;:::o;11514:322::-;;11658:18;11650:6;11647:30;11644:2;;;11690:1;11687;11680:12;11644:2;11757:4;11753:9;11746:4;11738:6;11734:17;11730:33;11722:41;;11821:4;11815;11811:15;11803:23;;11581:255;;;:::o;11843:151::-;;11929:3;11921:11;;11967:4;11962:3;11958:14;11950:22;;11915:79;;;:::o;12001:137::-;;12110:5;12104:12;12094:22;;12075:63;;;:::o;12145:122::-;;12239:5;12233:12;12223:22;;12204:63;;;:::o;12274:108::-;;12372:4;12367:3;12363:14;12355:22;;12349:33;;;:::o;12390:178::-;;12520:6;12515:3;12508:19;12557:4;12552:3;12548:14;12533:29;;12501:67;;;;:::o;12577:163::-;;12692:6;12687:3;12680:19;12729:4;12724:3;12720:14;12705:29;;12673:67;;;;:::o;12748:91::-;;12810:24;12828:5;12810:24;:::i;:::-;12799:35;;12793:46;;;:::o;12846:85::-;;12919:5;12912:13;12905:21;12894:32;;12888:43;;;:::o;12938:121::-;;13011:42;13004:5;13000:54;12989:65;;12983:76;;;:::o;13066:72::-;;13128:5;13117:16;;13111:27;;;:::o;13146:145::-;13227:6;13222:3;13217;13204:30;13283:1;13274:6;13269:3;13265:16;13258:27;13197:94;;;:::o;13300:268::-;13365:1;13372:101;13386:6;13383:1;13380:13;13372:101;;;13462:1;13457:3;13453:11;13447:18;13443:1;13438:3;13434:11;13427:39;13408:2;13405:1;13401:10;13396:15;;13372:101;;;13488:6;13485:1;13482:13;13479:2;;;13553:1;13544:6;13539:3;13535:16;13528:27;13479:2;13349:219;;;;:::o;13576:97::-;;13664:2;13660:7;13655:2;13648:5;13644:14;13640:28;13630:38;;13624:49;;;:::o;13681:117::-;13750:24;13768:5;13750:24;:::i;:::-;13743:5;13740:35;13730:2;;13789:1;13786;13779:12;13730:2;13724:74;:::o;13805:117::-;13874:24;13892:5;13874:24;:::i;:::-;13867:5;13864:35;13854:2;;13913:1;13910;13903:12;13854:2;13848:74;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >= 0.7.0 < 0.8.0;\npragma experimental ABIEncoderV2;\n\nimport './Candidate.sol';\nimport \"./ownable.sol\";\nimport \"./ElectionFactory.sol\";\n\n\ncontract ElectionHelper is ElectionFactory, Candidate {\n    function endElection(uint _electionId) external isAdmin(msg.sender) {\n        elections[_electionId].isOpen = false;\n        elections[_electionId].closingDate = block.timestamp;\n        computeResult(_electionId);\n    }\n\n    function getElectionTitle(uint _electionId) public view returns (string memory) {\n        return elections[_electionId].title;\n    }\n\n    function getElectionStatus(uint _electionId) public view returns (bool) {\n        return elections[_electionId].isOpen;\n    }\n\n    function getElectionWinner(uint _electionId) external view returns (uint) {\n        return elections[_electionId].winner;\n    }\n\n    function addVoter(uint _electionId) public {\n        elections[_electionId].voters[msg.sender] = true;\n        incrementVoters(_electionId);\n    }\n\n    function getOneFirstRoundWinner(uint _electionId, uint _index) public view returns(uint){\n        return elections[_electionId].winners[_index];\n    }\n\n    function getFirstRoundWinners(uint _electionId) public view returns(uint[] memory){\n        return elections[_electionId].winners;\n    }\n\n    function computeResult(uint _electionId) public {\n        computeCandidatesAverageNote(_electionId);\n\n        computeFirstRoundWinners(_electionId);\n\n        computeFinalRoundWinner(_electionId);\n        if(elections[_electionId].winners.length > 1){\n            computeFinalRoundWinner(_electionId);\n        }\n        else { // Default case if tie\n            elections[_electionId].winner = elections[_electionId].winners[0];\n        }\n    }\n\n    function computeCandidatesAverageNote(uint _electionId) public {\n        for (uint i = 0; i < elections[_electionId].candidatesCount; i++){\n            computeAverageNote(_electionId, i);\n        }\n    }\n\n    function computeFirstRoundWinners(uint _electionId) public {\n        uint higherNote = 0;\n        for(uint i = 0; i < elections[_electionId].candidatesCount; i++){\n            if(higherNote == elections[_electionId].candidates[i].averageNote){\n                elections[_electionId].winners.push(i);\n            }\n            else if(higherNote < elections[_electionId].candidates[i].averageNote){\n                delete elections[_electionId].winners;\n                higherNote = elections[_electionId].candidates[i].averageNote;\n                elections[_electionId].winners.push(i);\n            }\n        }\n    }\n\n    function computeFinalRoundWinner(uint _electionId) public {\n        uint higherPercent;\n        for(uint i = 0; i < elections[_electionId].winners.length; i++){\n            uint currentPercent = elections[_electionId].candidates[elections[_electionId].winners[i]].percent;\n            if(i == 0){\n                higherPercent = currentPercent;\n                elections[_electionId].winner = elections[_electionId].winners[i];\n            }\n            else if (currentPercent > higherPercent){\n                higherPercent = currentPercent;\n                elections[_electionId].winner = elections[_electionId].winners[i];\n            }\n        }\n    }\n}\n",
  "sourcePath": "C:\\Users\\acham\\Applications\\ESGI\\Blockchain\\Projet\\Voting-SmartContract-Truffled\\contracts\\ElectionHelper.sol",
  "ast": {
    "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol",
    "exportedSymbols": {
      "ElectionHelper": [
        853
      ]
    },
    "id": 854,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 494,
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
        "src": "32:33:2"
      },
      {
        "id": 495,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "66:33:2"
      },
      {
        "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Candidate.sol",
        "file": "./Candidate.sol",
        "id": 496,
        "nodeType": "ImportDirective",
        "scope": 854,
        "sourceUnit": 243,
        "src": "101:25:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol",
        "file": "./ownable.sol",
        "id": 497,
        "nodeType": "ImportDirective",
        "scope": 854,
        "sourceUnit": 1040,
        "src": "127:23:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol",
        "file": "./ElectionFactory.sol",
        "id": 498,
        "nodeType": "ImportDirective",
        "scope": 854,
        "sourceUnit": 493,
        "src": "151:31:2",
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
              "id": 499,
              "name": "ElectionFactory",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 492,
              "src": "212:15:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ElectionFactory_$492",
                "typeString": "contract ElectionFactory"
              }
            },
            "id": 500,
            "nodeType": "InheritanceSpecifier",
            "src": "212:15:2"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 501,
              "name": "Candidate",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 242,
              "src": "229:9:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Candidate_$242",
                "typeString": "contract Candidate"
              }
            },
            "id": 502,
            "nodeType": "InheritanceSpecifier",
            "src": "229:9:2"
          }
        ],
        "contractDependencies": [
          242,
          492,
          1039
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 853,
        "linearizedBaseContracts": [
          853,
          242,
          492,
          1039
        ],
        "name": "ElectionHelper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 530,
              "nodeType": "Block",
              "src": "313:152:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 516,
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
                          "id": 511,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 301,
                          "src": "323:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 513,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 512,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 504,
                          "src": "333:11:2",
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
                        "src": "323:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$284_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 514,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "isOpen",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 268,
                      "src": "323:29:2",
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
                      "id": 515,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "355:5:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "323:37:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 517,
                  "nodeType": "ExpressionStatement",
                  "src": "323:37:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 524,
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
                          "id": 518,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 301,
                          "src": "370:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 520,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 519,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 504,
                          "src": "380:11:2",
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
                        "src": "370:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$284_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 521,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "closingDate",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 264,
                      "src": "370:34:2",
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
                        "id": 522,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "407:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 523,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "407:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "370:52:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 525,
                  "nodeType": "ExpressionStatement",
                  "src": "370:52:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 527,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 504,
                        "src": "446:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 526,
                      "name": "computeResult",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 665,
                      "src": "432:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 528,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "432:26:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 529,
                  "nodeType": "ExpressionStatement",
                  "src": "432:26:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "9c98bcbb",
            "id": 531,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 507,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "301:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 508,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "301:10:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  }
                ],
                "id": 509,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 506,
                  "name": "isAdmin",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 328,
                  "src": "293:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "293:19:2"
              }
            ],
            "name": "endElection",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 505,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 504,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 531,
                  "src": "266:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 503,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "266:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "265:18:2"
            },
            "returnParameters": {
              "id": 510,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "313:0:2"
            },
            "scope": 853,
            "src": "245:220:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 543,
              "nodeType": "Block",
              "src": "551:52:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 538,
                        "name": "elections",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 301,
                        "src": "568:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                        }
                      },
                      "id": 540,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 539,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 533,
                        "src": "578:11:2",
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
                      "src": "568:22:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Election_$284_storage",
                        "typeString": "struct ElectionFactory.Election storage ref"
                      }
                    },
                    "id": 541,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "title",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 260,
                    "src": "568:28:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 537,
                  "id": 542,
                  "nodeType": "Return",
                  "src": "561:35:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "4d94fc6a",
            "id": 544,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getElectionTitle",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 534,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 533,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 544,
                  "src": "497:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 532,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "497:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "496:18:2"
            },
            "returnParameters": {
              "id": 537,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 536,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 544,
                  "src": "536:13:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 535,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "536:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "535:15:2"
            },
            "scope": 853,
            "src": "471:132:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 556,
              "nodeType": "Block",
              "src": "681:53:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 551,
                        "name": "elections",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 301,
                        "src": "698:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                        }
                      },
                      "id": 553,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 552,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 546,
                        "src": "708:11:2",
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
                      "src": "698:22:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Election_$284_storage",
                        "typeString": "struct ElectionFactory.Election storage ref"
                      }
                    },
                    "id": 554,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "isOpen",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 268,
                    "src": "698:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 550,
                  "id": 555,
                  "nodeType": "Return",
                  "src": "691:36:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "24785b9e",
            "id": 557,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getElectionStatus",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 547,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 546,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 557,
                  "src": "636:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 545,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "636:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "635:18:2"
            },
            "returnParameters": {
              "id": 550,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 549,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 557,
                  "src": "675:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 548,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "675:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "674:6:2"
            },
            "scope": 853,
            "src": "609:125:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 569,
              "nodeType": "Block",
              "src": "814:53:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 564,
                        "name": "elections",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 301,
                        "src": "831:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                        }
                      },
                      "id": 566,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 565,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 559,
                        "src": "841:11:2",
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
                      "src": "831:22:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Election_$284_storage",
                        "typeString": "struct ElectionFactory.Election storage ref"
                      }
                    },
                    "id": 567,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "winner",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 283,
                    "src": "831:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 563,
                  "id": 568,
                  "nodeType": "Return",
                  "src": "824:36:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "e62c6ac5",
            "id": 570,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getElectionWinner",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 560,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 559,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 570,
                  "src": "767:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 558,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "767:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "766:18:2"
            },
            "returnParameters": {
              "id": 563,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 562,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 570,
                  "src": "808:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 561,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "808:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "807:6:2"
            },
            "scope": 853,
            "src": "740:127:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 589,
              "nodeType": "Block",
              "src": "916:103:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 583,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 575,
                            "name": "elections",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 301,
                            "src": "926:9:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                              "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                            }
                          },
                          "id": 577,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 576,
                            "name": "_electionId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 572,
                            "src": "936:11:2",
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
                          "src": "926:22:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Election_$284_storage",
                            "typeString": "struct ElectionFactory.Election storage ref"
                          }
                        },
                        "id": 578,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "voters",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 278,
                        "src": "926:29:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 581,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 579,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "956:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 580,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "956:10:2",
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
                      "src": "926:41:2",
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
                      "id": 582,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "970:4:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "926:48:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 584,
                  "nodeType": "ExpressionStatement",
                  "src": "926:48:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 586,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 572,
                        "src": "1000:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 585,
                      "name": "incrementVoters",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38,
                      "src": "984:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 587,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "984:28:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 588,
                  "nodeType": "ExpressionStatement",
                  "src": "984:28:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "d8f7a0bb",
            "id": 590,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addVoter",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 573,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 572,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 590,
                  "src": "891:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 571,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "891:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "890:18:2"
            },
            "returnParameters": {
              "id": 574,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "916:0:2"
            },
            "scope": 853,
            "src": "873:146:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 606,
              "nodeType": "Block",
              "src": "1113:62:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 599,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 301,
                          "src": "1130:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 601,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 600,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 592,
                          "src": "1140:11:2",
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
                        "src": "1130:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$284_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 602,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "winners",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 281,
                      "src": "1130:30:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 604,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 603,
                      "name": "_index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 594,
                      "src": "1161:6:2",
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
                    "src": "1130:38:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 598,
                  "id": 605,
                  "nodeType": "Return",
                  "src": "1123:45:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "e76f6b58",
            "id": 607,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getOneFirstRoundWinner",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 595,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 592,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 607,
                  "src": "1057:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 591,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1057:4:2",
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
                  "id": 594,
                  "mutability": "mutable",
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 607,
                  "src": "1075:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 593,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1075:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1056:31:2"
            },
            "returnParameters": {
              "id": 598,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 597,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 607,
                  "src": "1108:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 596,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1108:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1107:6:2"
            },
            "scope": 853,
            "src": "1025:150:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 620,
              "nodeType": "Block",
              "src": "1263:54:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 615,
                        "name": "elections",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 301,
                        "src": "1280:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                        }
                      },
                      "id": 617,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 616,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 609,
                        "src": "1290:11:2",
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
                      "src": "1280:22:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Election_$284_storage",
                        "typeString": "struct ElectionFactory.Election storage ref"
                      }
                    },
                    "id": 618,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "winners",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 281,
                    "src": "1280:30:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 614,
                  "id": 619,
                  "nodeType": "Return",
                  "src": "1273:37:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "b12b1a7d",
            "id": 621,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getFirstRoundWinners",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 610,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 609,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 621,
                  "src": "1211:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 608,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1211:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1210:18:2"
            },
            "returnParameters": {
              "id": 614,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 613,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 621,
                  "src": "1249:13:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 611,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1249:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 612,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1249:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1248:15:2"
            },
            "scope": 853,
            "src": "1181:136:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 664,
              "nodeType": "Block",
              "src": "1371:395:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 627,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 623,
                        "src": "1410:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 626,
                      "name": "computeCandidatesAverageNote",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 691,
                      "src": "1381:28:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 628,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1381:41:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 629,
                  "nodeType": "ExpressionStatement",
                  "src": "1381:41:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 631,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 623,
                        "src": "1458:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 630,
                      "name": "computeFirstRoundWinners",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 770,
                      "src": "1433:24:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 632,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1433:37:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 633,
                  "nodeType": "ExpressionStatement",
                  "src": "1433:37:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 635,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 623,
                        "src": "1505:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 634,
                      "name": "computeFinalRoundWinner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 852,
                      "src": "1481:23:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 636,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1481:36:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 637,
                  "nodeType": "ExpressionStatement",
                  "src": "1481:36:2"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 644,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 638,
                            "name": "elections",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 301,
                            "src": "1530:9:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                              "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                            }
                          },
                          "id": 640,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 639,
                            "name": "_electionId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 623,
                            "src": "1540:11:2",
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
                          "src": "1530:22:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Election_$284_storage",
                            "typeString": "struct ElectionFactory.Election storage ref"
                          }
                        },
                        "id": 641,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "winners",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 281,
                        "src": "1530:30:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 642,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1530:37:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 643,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1570:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1530:41:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 662,
                    "nodeType": "Block",
                    "src": "1647:113:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 660,
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
                                "id": 650,
                                "name": "elections",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 301,
                                "src": "1684:9:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                                  "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                }
                              },
                              "id": 652,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 651,
                                "name": "_electionId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 623,
                                "src": "1694:11:2",
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
                              "src": "1684:22:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Election_$284_storage",
                                "typeString": "struct ElectionFactory.Election storage ref"
                              }
                            },
                            "id": 653,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "winner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 283,
                            "src": "1684:29:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 654,
                                  "name": "elections",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 301,
                                  "src": "1716:9:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                                    "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                  }
                                },
                                "id": 656,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 655,
                                  "name": "_electionId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 623,
                                  "src": "1726:11:2",
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
                                "src": "1716:22:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Election_$284_storage",
                                  "typeString": "struct ElectionFactory.Election storage ref"
                                }
                              },
                              "id": 657,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "winners",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 281,
                              "src": "1716:30:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 659,
                            "indexExpression": {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 658,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1747:1:2",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1716:33:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1684:65:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 661,
                        "nodeType": "ExpressionStatement",
                        "src": "1684:65:2"
                      }
                    ]
                  },
                  "id": 663,
                  "nodeType": "IfStatement",
                  "src": "1527:233:2",
                  "trueBody": {
                    "id": 649,
                    "nodeType": "Block",
                    "src": "1572:61:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 646,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 623,
                              "src": "1610:11:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 645,
                            "name": "computeFinalRoundWinner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 852,
                            "src": "1586:23:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 647,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1586:36:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 648,
                        "nodeType": "ExpressionStatement",
                        "src": "1586:36:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "functionSelector": "be4d823e",
            "id": 665,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeResult",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 624,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 623,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 665,
                  "src": "1346:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 622,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1346:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1345:18:2"
            },
            "returnParameters": {
              "id": 625,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1371:0:2"
            },
            "scope": 853,
            "src": "1323:443:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 690,
              "nodeType": "Block",
              "src": "1835:140:2",
              "statements": [
                {
                  "body": {
                    "id": 688,
                    "nodeType": "Block",
                    "src": "1910:59:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 684,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 667,
                              "src": "1943:11:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 685,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 671,
                              "src": "1956:1:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 683,
                            "name": "computeAverageNote",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 241,
                            "src": "1924:18:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256)"
                            }
                          },
                          "id": 686,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1924:34:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 687,
                        "nodeType": "ExpressionStatement",
                        "src": "1924:34:2"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 679,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 674,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 671,
                      "src": "1862:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 675,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 301,
                          "src": "1866:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 677,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 676,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 667,
                          "src": "1876:11:2",
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
                        "src": "1866:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$284_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 678,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "candidatesCount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 270,
                      "src": "1866:38:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1862:42:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 689,
                  "initializationExpression": {
                    "assignments": [
                      671
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 671,
                        "mutability": "mutable",
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 689,
                        "src": "1850:6:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 670,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1850:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 673,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 672,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1859:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1850:10:2"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 681,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1906:3:2",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 680,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 671,
                        "src": "1906:1:2",
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
                    "id": 682,
                    "nodeType": "ExpressionStatement",
                    "src": "1906:3:2"
                  },
                  "nodeType": "ForStatement",
                  "src": "1845:124:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "ab6cb049",
            "id": 691,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeCandidatesAverageNote",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 668,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 667,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 691,
                  "src": "1810:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 666,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1810:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1809:18:2"
            },
            "returnParameters": {
              "id": 669,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1835:0:2"
            },
            "scope": 853,
            "src": "1772:203:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 769,
              "nodeType": "Block",
              "src": "2040:558:2",
              "statements": [
                {
                  "assignments": [
                    697
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 697,
                      "mutability": "mutable",
                      "name": "higherNote",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 769,
                      "src": "2050:15:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 696,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2050:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 699,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 698,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2068:1:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2050:19:2"
                },
                {
                  "body": {
                    "id": 767,
                    "nodeType": "Block",
                    "src": "2143:449:2",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 721,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 713,
                            "name": "higherNote",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 697,
                            "src": "2160:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 714,
                                    "name": "elections",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 301,
                                    "src": "2174:9:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                                      "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                    }
                                  },
                                  "id": 716,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 715,
                                    "name": "_electionId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 693,
                                    "src": "2184:11:2",
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
                                  "src": "2174:22:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Election_$284_storage",
                                    "typeString": "struct ElectionFactory.Election storage ref"
                                  }
                                },
                                "id": 717,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "candidates",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 274,
                                "src": "2174:33:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$295_storage_$",
                                  "typeString": "mapping(uint256 => struct ElectionFactory.Candidate storage ref)"
                                }
                              },
                              "id": 719,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 718,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 701,
                                "src": "2208:1:2",
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
                              "src": "2174:36:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Candidate_$295_storage",
                                "typeString": "struct ElectionFactory.Candidate storage ref"
                              }
                            },
                            "id": 720,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "averageNote",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 294,
                            "src": "2174:48:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2160:62:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "condition": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 739,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 731,
                              "name": "higherNote",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 697,
                              "src": "2315:10:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 732,
                                      "name": "elections",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 301,
                                      "src": "2328:9:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                                        "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                      }
                                    },
                                    "id": 734,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 733,
                                      "name": "_electionId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 693,
                                      "src": "2338:11:2",
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
                                    "src": "2328:22:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Election_$284_storage",
                                      "typeString": "struct ElectionFactory.Election storage ref"
                                    }
                                  },
                                  "id": 735,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "candidates",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 274,
                                  "src": "2328:33:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$295_storage_$",
                                    "typeString": "mapping(uint256 => struct ElectionFactory.Candidate storage ref)"
                                  }
                                },
                                "id": 737,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 736,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 701,
                                  "src": "2362:1:2",
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
                                "src": "2328:36:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Candidate_$295_storage",
                                  "typeString": "struct ElectionFactory.Candidate storage ref"
                                }
                              },
                              "id": 738,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "averageNote",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 294,
                              "src": "2328:48:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2315:61:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": null,
                          "id": 765,
                          "nodeType": "IfStatement",
                          "src": "2312:270:2",
                          "trueBody": {
                            "id": 764,
                            "nodeType": "Block",
                            "src": "2377:205:2",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 744,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "UnaryOperation",
                                  "operator": "delete",
                                  "prefix": true,
                                  "src": "2395:37:2",
                                  "subExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "id": 740,
                                        "name": "elections",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 301,
                                        "src": "2402:9:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                        }
                                      },
                                      "id": 742,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 741,
                                        "name": "_electionId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 693,
                                        "src": "2412:11:2",
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
                                      "src": "2402:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Election_$284_storage",
                                        "typeString": "struct ElectionFactory.Election storage ref"
                                      }
                                    },
                                    "id": 743,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "memberName": "winners",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 281,
                                    "src": "2402:30:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                      "typeString": "uint256[] storage ref"
                                    }
                                  },
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 745,
                                "nodeType": "ExpressionStatement",
                                "src": "2395:37:2"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 754,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "argumentTypes": null,
                                    "id": 746,
                                    "name": "higherNote",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 697,
                                    "src": "2450:10:2",
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
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "expression": {
                                          "argumentTypes": null,
                                          "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 747,
                                            "name": "elections",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 301,
                                            "src": "2463:9:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                                              "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                            }
                                          },
                                          "id": 749,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 748,
                                            "name": "_electionId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 693,
                                            "src": "2473:11:2",
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
                                          "src": "2463:22:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Election_$284_storage",
                                            "typeString": "struct ElectionFactory.Election storage ref"
                                          }
                                        },
                                        "id": 750,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "candidates",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 274,
                                        "src": "2463:33:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$295_storage_$",
                                          "typeString": "mapping(uint256 => struct ElectionFactory.Candidate storage ref)"
                                        }
                                      },
                                      "id": 752,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 751,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 701,
                                        "src": "2497:1:2",
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
                                      "src": "2463:36:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Candidate_$295_storage",
                                        "typeString": "struct ElectionFactory.Candidate storage ref"
                                      }
                                    },
                                    "id": 753,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "averageNote",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 294,
                                    "src": "2463:48:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "2450:61:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 755,
                                "nodeType": "ExpressionStatement",
                                "src": "2450:61:2"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 761,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 701,
                                      "src": "2565:1:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "id": 756,
                                          "name": "elections",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 301,
                                          "src": "2529:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                          }
                                        },
                                        "id": 758,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 757,
                                          "name": "_electionId",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 693,
                                          "src": "2539:11:2",
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
                                        "src": "2529:22:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_Election_$284_storage",
                                          "typeString": "struct ElectionFactory.Election storage ref"
                                        }
                                      },
                                      "id": 759,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "winners",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 281,
                                      "src": "2529:30:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                        "typeString": "uint256[] storage ref"
                                      }
                                    },
                                    "id": 760,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "push",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2529:35:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$__$",
                                      "typeString": "function (uint256)"
                                    }
                                  },
                                  "id": 762,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2529:38:2",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 763,
                                "nodeType": "ExpressionStatement",
                                "src": "2529:38:2"
                              }
                            ]
                          }
                        },
                        "id": 766,
                        "nodeType": "IfStatement",
                        "src": "2157:425:2",
                        "trueBody": {
                          "id": 730,
                          "nodeType": "Block",
                          "src": "2223:71:2",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 727,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 701,
                                    "src": "2277:1:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "id": 722,
                                        "name": "elections",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 301,
                                        "src": "2241:9:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                        }
                                      },
                                      "id": 724,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 723,
                                        "name": "_electionId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 693,
                                        "src": "2251:11:2",
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
                                      "src": "2241:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Election_$284_storage",
                                        "typeString": "struct ElectionFactory.Election storage ref"
                                      }
                                    },
                                    "id": 725,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "winners",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 281,
                                    "src": "2241:30:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                      "typeString": "uint256[] storage ref"
                                    }
                                  },
                                  "id": 726,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "push",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2241:35:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$__$",
                                    "typeString": "function (uint256)"
                                  }
                                },
                                "id": 728,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2241:38:2",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 729,
                              "nodeType": "ExpressionStatement",
                              "src": "2241:38:2"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 709,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 704,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 701,
                      "src": "2095:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 705,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 301,
                          "src": "2099:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 707,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 706,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 693,
                          "src": "2109:11:2",
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
                        "src": "2099:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$284_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 708,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "candidatesCount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 270,
                      "src": "2099:38:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2095:42:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 768,
                  "initializationExpression": {
                    "assignments": [
                      701
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 701,
                        "mutability": "mutable",
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 768,
                        "src": "2083:6:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 700,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2083:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 703,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 702,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2092:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2083:10:2"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 711,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2139:3:2",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 710,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 701,
                        "src": "2139:1:2",
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
                    "id": 712,
                    "nodeType": "ExpressionStatement",
                    "src": "2139:3:2"
                  },
                  "nodeType": "ForStatement",
                  "src": "2079:513:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "cd015c32",
            "id": 770,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeFirstRoundWinners",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 694,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 693,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 770,
                  "src": "2015:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 692,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2015:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2014:18:2"
            },
            "returnParameters": {
              "id": 695,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2040:0:2"
            },
            "scope": 853,
            "src": "1981:617:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 851,
              "nodeType": "Block",
              "src": "2662:598:2",
              "statements": [
                {
                  "assignments": [
                    776
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 776,
                      "mutability": "mutable",
                      "name": "higherPercent",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 851,
                      "src": "2672:18:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 775,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2672:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 777,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2672:18:2"
                },
                {
                  "body": {
                    "id": 849,
                    "nodeType": "Block",
                    "src": "2763:491:2",
                    "statements": [
                      {
                        "assignments": [
                          793
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 793,
                            "mutability": "mutable",
                            "name": "currentPercent",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 849,
                            "src": "2777:19:2",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 792,
                              "name": "uint",
                              "nodeType": "ElementaryTypeName",
                              "src": "2777:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 806,
                        "initialValue": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 794,
                                  "name": "elections",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 301,
                                  "src": "2799:9:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                                    "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                  }
                                },
                                "id": 796,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 795,
                                  "name": "_electionId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 772,
                                  "src": "2809:11:2",
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
                                "src": "2799:22:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Election_$284_storage",
                                  "typeString": "struct ElectionFactory.Election storage ref"
                                }
                              },
                              "id": 797,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "candidates",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 274,
                              "src": "2799:33:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$295_storage_$",
                                "typeString": "mapping(uint256 => struct ElectionFactory.Candidate storage ref)"
                              }
                            },
                            "id": 804,
                            "indexExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 798,
                                    "name": "elections",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 301,
                                    "src": "2833:9:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                                      "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                    }
                                  },
                                  "id": 800,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 799,
                                    "name": "_electionId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 772,
                                    "src": "2843:11:2",
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
                                  "src": "2833:22:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Election_$284_storage",
                                    "typeString": "struct ElectionFactory.Election storage ref"
                                  }
                                },
                                "id": 801,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "winners",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 281,
                                "src": "2833:30:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                  "typeString": "uint256[] storage ref"
                                }
                              },
                              "id": 803,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 802,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 779,
                                "src": "2864:1:2",
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
                              "src": "2833:33:2",
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
                            "src": "2799:68:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Candidate_$295_storage",
                              "typeString": "struct ElectionFactory.Candidate storage ref"
                            }
                          },
                          "id": 805,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "percent",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 292,
                          "src": "2799:76:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2777:98:2"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 809,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 807,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 779,
                            "src": "2892:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 808,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2897:1:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "2892:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "condition": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 829,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 827,
                              "name": "currentPercent",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 793,
                              "src": "3067:14:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 828,
                              "name": "higherPercent",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 776,
                              "src": "3084:13:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3067:30:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": null,
                          "id": 847,
                          "nodeType": "IfStatement",
                          "src": "3063:181:2",
                          "trueBody": {
                            "id": 846,
                            "nodeType": "Block",
                            "src": "3098:146:2",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 832,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "argumentTypes": null,
                                    "id": 830,
                                    "name": "higherPercent",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 776,
                                    "src": "3116:13:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "argumentTypes": null,
                                    "id": 831,
                                    "name": "currentPercent",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 793,
                                    "src": "3132:14:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "3116:30:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 833,
                                "nodeType": "ExpressionStatement",
                                "src": "3116:30:2"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 844,
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
                                        "id": 834,
                                        "name": "elections",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 301,
                                        "src": "3164:9:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                        }
                                      },
                                      "id": 836,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 835,
                                        "name": "_electionId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 772,
                                        "src": "3174:11:2",
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
                                      "src": "3164:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Election_$284_storage",
                                        "typeString": "struct ElectionFactory.Election storage ref"
                                      }
                                    },
                                    "id": 837,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "memberName": "winner",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 283,
                                    "src": "3164:29:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "id": 838,
                                          "name": "elections",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 301,
                                          "src": "3196:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                          }
                                        },
                                        "id": 840,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 839,
                                          "name": "_electionId",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 772,
                                          "src": "3206:11:2",
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
                                        "src": "3196:22:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_Election_$284_storage",
                                          "typeString": "struct ElectionFactory.Election storage ref"
                                        }
                                      },
                                      "id": 841,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "winners",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 281,
                                      "src": "3196:30:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                        "typeString": "uint256[] storage ref"
                                      }
                                    },
                                    "id": 843,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 842,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 779,
                                      "src": "3227:1:2",
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
                                    "src": "3196:33:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "3164:65:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 845,
                                "nodeType": "ExpressionStatement",
                                "src": "3164:65:2"
                              }
                            ]
                          }
                        },
                        "id": 848,
                        "nodeType": "IfStatement",
                        "src": "2889:355:2",
                        "trueBody": {
                          "id": 826,
                          "nodeType": "Block",
                          "src": "2899:146:2",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 812,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 810,
                                  "name": "higherPercent",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 776,
                                  "src": "2917:13:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "id": 811,
                                  "name": "currentPercent",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 793,
                                  "src": "2933:14:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2917:30:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 813,
                              "nodeType": "ExpressionStatement",
                              "src": "2917:30:2"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 824,
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
                                      "id": 814,
                                      "name": "elections",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 301,
                                      "src": "2965:9:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                                        "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                      }
                                    },
                                    "id": 816,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 815,
                                      "name": "_electionId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 772,
                                      "src": "2975:11:2",
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
                                    "src": "2965:22:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Election_$284_storage",
                                      "typeString": "struct ElectionFactory.Election storage ref"
                                    }
                                  },
                                  "id": 817,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberName": "winner",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 283,
                                  "src": "2965:29:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "id": 818,
                                        "name": "elections",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 301,
                                        "src": "2997:9:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                        }
                                      },
                                      "id": 820,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 819,
                                        "name": "_electionId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 772,
                                        "src": "3007:11:2",
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
                                      "src": "2997:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Election_$284_storage",
                                        "typeString": "struct ElectionFactory.Election storage ref"
                                      }
                                    },
                                    "id": 821,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "winners",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 281,
                                    "src": "2997:30:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                      "typeString": "uint256[] storage ref"
                                    }
                                  },
                                  "id": 823,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 822,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 779,
                                    "src": "3028:1:2",
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
                                  "src": "2997:33:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2965:65:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 825,
                              "nodeType": "ExpressionStatement",
                              "src": "2965:65:2"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 788,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 782,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 779,
                      "src": "2716:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 783,
                            "name": "elections",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 301,
                            "src": "2720:9:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                              "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                            }
                          },
                          "id": 785,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 784,
                            "name": "_electionId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 772,
                            "src": "2730:11:2",
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
                          "src": "2720:22:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Election_$284_storage",
                            "typeString": "struct ElectionFactory.Election storage ref"
                          }
                        },
                        "id": 786,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "winners",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 281,
                        "src": "2720:30:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 787,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2720:37:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2716:41:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 850,
                  "initializationExpression": {
                    "assignments": [
                      779
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 779,
                        "mutability": "mutable",
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 850,
                        "src": "2704:6:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 778,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2704:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 781,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 780,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2713:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2704:10:2"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 790,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2759:3:2",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 789,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 779,
                        "src": "2759:1:2",
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
                    "id": 791,
                    "nodeType": "ExpressionStatement",
                    "src": "2759:3:2"
                  },
                  "nodeType": "ForStatement",
                  "src": "2700:554:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "7bb1541d",
            "id": 852,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeFinalRoundWinner",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 773,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 772,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 852,
                  "src": "2637:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 771,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2637:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2636:18:2"
            },
            "returnParameters": {
              "id": 774,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2662:0:2"
            },
            "scope": 853,
            "src": "2604:656:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 854,
        "src": "185:3077:2"
      }
    ],
    "src": "32:3231:2"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol",
      "exportedSymbols": {
        "ElectionHelper": [
          853
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
        "id": 494,
        "name": "PragmaDirective",
        "src": "32:33:2"
      },
      {
        "attributes": {
          "literals": [
            "experimental",
            "ABIEncoderV2"
          ]
        },
        "id": 495,
        "name": "PragmaDirective",
        "src": "66:33:2"
      },
      {
        "attributes": {
          "SourceUnit": 243,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Candidate.sol",
          "file": "./Candidate.sol",
          "scope": 854,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 496,
        "name": "ImportDirective",
        "src": "101:25:2"
      },
      {
        "attributes": {
          "SourceUnit": 1040,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol",
          "file": "./ownable.sol",
          "scope": 854,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 497,
        "name": "ImportDirective",
        "src": "127:23:2"
      },
      {
        "attributes": {
          "SourceUnit": 493,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol",
          "file": "./ElectionFactory.sol",
          "scope": 854,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 498,
        "name": "ImportDirective",
        "src": "151:31:2"
      },
      {
        "attributes": {
          "abstract": false,
          "contractDependencies": [
            242,
            492,
            1039
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            853,
            242,
            492,
            1039
          ],
          "name": "ElectionHelper",
          "scope": 854
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
                  "name": "ElectionFactory",
                  "referencedDeclaration": 492,
                  "type": "contract ElectionFactory"
                },
                "id": 499,
                "name": "UserDefinedTypeName",
                "src": "212:15:2"
              }
            ],
            "id": 500,
            "name": "InheritanceSpecifier",
            "src": "212:15:2"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Candidate",
                  "referencedDeclaration": 242,
                  "type": "contract Candidate"
                },
                "id": 501,
                "name": "UserDefinedTypeName",
                "src": "229:9:2"
              }
            ],
            "id": 502,
            "name": "InheritanceSpecifier",
            "src": "229:9:2"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "9c98bcbb",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "endElection",
              "overrides": null,
              "scope": 853,
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
                      "name": "_electionId",
                      "overrides": null,
                      "scope": 531,
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
                        "id": 503,
                        "name": "ElementaryTypeName",
                        "src": "266:4:2"
                      }
                    ],
                    "id": 504,
                    "name": "VariableDeclaration",
                    "src": "266:16:2"
                  }
                ],
                "id": 505,
                "name": "ParameterList",
                "src": "265:18:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 510,
                "name": "ParameterList",
                "src": "313:0:2"
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
                    "id": 506,
                    "name": "Identifier",
                    "src": "293:7:2"
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
                        "id": 507,
                        "name": "Identifier",
                        "src": "301:3:2"
                      }
                    ],
                    "id": 508,
                    "name": "MemberAccess",
                    "src": "301:10:2"
                  }
                ],
                "id": 509,
                "name": "ModifierInvocation",
                "src": "293:19:2"
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
                              "member_name": "isOpen",
                              "referencedDeclaration": 268,
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
                                    "id": 511,
                                    "name": "Identifier",
                                    "src": "323:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 504,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 512,
                                    "name": "Identifier",
                                    "src": "333:11:2"
                                  }
                                ],
                                "id": 513,
                                "name": "IndexAccess",
                                "src": "323:22:2"
                              }
                            ],
                            "id": 514,
                            "name": "MemberAccess",
                            "src": "323:29:2"
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
                            "id": 515,
                            "name": "Literal",
                            "src": "355:5:2"
                          }
                        ],
                        "id": 516,
                        "name": "Assignment",
                        "src": "323:37:2"
                      }
                    ],
                    "id": 517,
                    "name": "ExpressionStatement",
                    "src": "323:37:2"
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
                              "member_name": "closingDate",
                              "referencedDeclaration": 264,
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
                                    "id": 518,
                                    "name": "Identifier",
                                    "src": "370:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 504,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 519,
                                    "name": "Identifier",
                                    "src": "380:11:2"
                                  }
                                ],
                                "id": 520,
                                "name": "IndexAccess",
                                "src": "370:22:2"
                              }
                            ],
                            "id": 521,
                            "name": "MemberAccess",
                            "src": "370:34:2"
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
                                "id": 522,
                                "name": "Identifier",
                                "src": "407:5:2"
                              }
                            ],
                            "id": 523,
                            "name": "MemberAccess",
                            "src": "407:15:2"
                          }
                        ],
                        "id": 524,
                        "name": "Assignment",
                        "src": "370:52:2"
                      }
                    ],
                    "id": 525,
                    "name": "ExpressionStatement",
                    "src": "370:52:2"
                  },
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
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 665,
                              "type": "function (uint256)",
                              "value": "computeResult"
                            },
                            "id": 526,
                            "name": "Identifier",
                            "src": "432:13:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 504,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 527,
                            "name": "Identifier",
                            "src": "446:11:2"
                          }
                        ],
                        "id": 528,
                        "name": "FunctionCall",
                        "src": "432:26:2"
                      }
                    ],
                    "id": 529,
                    "name": "ExpressionStatement",
                    "src": "432:26:2"
                  }
                ],
                "id": 530,
                "name": "Block",
                "src": "313:152:2"
              }
            ],
            "id": 531,
            "name": "FunctionDefinition",
            "src": "245:220:2"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "4d94fc6a",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getElectionTitle",
              "overrides": null,
              "scope": 853,
              "stateMutability": "view",
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
                      "scope": 544,
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
                        "id": 532,
                        "name": "ElementaryTypeName",
                        "src": "497:4:2"
                      }
                    ],
                    "id": 533,
                    "name": "VariableDeclaration",
                    "src": "497:16:2"
                  }
                ],
                "id": 534,
                "name": "ParameterList",
                "src": "496:18:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 544,
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
                        "id": 535,
                        "name": "ElementaryTypeName",
                        "src": "536:6:2"
                      }
                    ],
                    "id": 536,
                    "name": "VariableDeclaration",
                    "src": "536:13:2"
                  }
                ],
                "id": 537,
                "name": "ParameterList",
                "src": "535:15:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 537
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "title",
                          "referencedDeclaration": 260,
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
                                "id": 538,
                                "name": "Identifier",
                                "src": "568:9:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 533,
                                  "type": "uint256",
                                  "value": "_electionId"
                                },
                                "id": 539,
                                "name": "Identifier",
                                "src": "578:11:2"
                              }
                            ],
                            "id": 540,
                            "name": "IndexAccess",
                            "src": "568:22:2"
                          }
                        ],
                        "id": 541,
                        "name": "MemberAccess",
                        "src": "568:28:2"
                      }
                    ],
                    "id": 542,
                    "name": "Return",
                    "src": "561:35:2"
                  }
                ],
                "id": 543,
                "name": "Block",
                "src": "551:52:2"
              }
            ],
            "id": 544,
            "name": "FunctionDefinition",
            "src": "471:132:2"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "24785b9e",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getElectionStatus",
              "overrides": null,
              "scope": 853,
              "stateMutability": "view",
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
                      "scope": 557,
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
                        "id": 545,
                        "name": "ElementaryTypeName",
                        "src": "636:4:2"
                      }
                    ],
                    "id": 546,
                    "name": "VariableDeclaration",
                    "src": "636:16:2"
                  }
                ],
                "id": 547,
                "name": "ParameterList",
                "src": "635:18:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 557,
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
                        "id": 548,
                        "name": "ElementaryTypeName",
                        "src": "675:4:2"
                      }
                    ],
                    "id": 549,
                    "name": "VariableDeclaration",
                    "src": "675:4:2"
                  }
                ],
                "id": 550,
                "name": "ParameterList",
                "src": "674:6:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 550
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "isOpen",
                          "referencedDeclaration": 268,
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
                                "id": 551,
                                "name": "Identifier",
                                "src": "698:9:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 546,
                                  "type": "uint256",
                                  "value": "_electionId"
                                },
                                "id": 552,
                                "name": "Identifier",
                                "src": "708:11:2"
                              }
                            ],
                            "id": 553,
                            "name": "IndexAccess",
                            "src": "698:22:2"
                          }
                        ],
                        "id": 554,
                        "name": "MemberAccess",
                        "src": "698:29:2"
                      }
                    ],
                    "id": 555,
                    "name": "Return",
                    "src": "691:36:2"
                  }
                ],
                "id": 556,
                "name": "Block",
                "src": "681:53:2"
              }
            ],
            "id": 557,
            "name": "FunctionDefinition",
            "src": "609:125:2"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "e62c6ac5",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getElectionWinner",
              "overrides": null,
              "scope": 853,
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
                      "name": "_electionId",
                      "overrides": null,
                      "scope": 570,
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
                        "id": 558,
                        "name": "ElementaryTypeName",
                        "src": "767:4:2"
                      }
                    ],
                    "id": 559,
                    "name": "VariableDeclaration",
                    "src": "767:16:2"
                  }
                ],
                "id": 560,
                "name": "ParameterList",
                "src": "766:18:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 570,
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
                        "id": 561,
                        "name": "ElementaryTypeName",
                        "src": "808:4:2"
                      }
                    ],
                    "id": 562,
                    "name": "VariableDeclaration",
                    "src": "808:4:2"
                  }
                ],
                "id": 563,
                "name": "ParameterList",
                "src": "807:6:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 563
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "winner",
                          "referencedDeclaration": 283,
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
                                "id": 564,
                                "name": "Identifier",
                                "src": "831:9:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 559,
                                  "type": "uint256",
                                  "value": "_electionId"
                                },
                                "id": 565,
                                "name": "Identifier",
                                "src": "841:11:2"
                              }
                            ],
                            "id": 566,
                            "name": "IndexAccess",
                            "src": "831:22:2"
                          }
                        ],
                        "id": 567,
                        "name": "MemberAccess",
                        "src": "831:29:2"
                      }
                    ],
                    "id": 568,
                    "name": "Return",
                    "src": "824:36:2"
                  }
                ],
                "id": 569,
                "name": "Block",
                "src": "814:53:2"
              }
            ],
            "id": 570,
            "name": "FunctionDefinition",
            "src": "740:127:2"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "d8f7a0bb",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "addVoter",
              "overrides": null,
              "scope": 853,
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
                      "scope": 590,
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
                        "id": 571,
                        "name": "ElementaryTypeName",
                        "src": "891:4:2"
                      }
                    ],
                    "id": 572,
                    "name": "VariableDeclaration",
                    "src": "891:16:2"
                  }
                ],
                "id": 573,
                "name": "ParameterList",
                "src": "890:18:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 574,
                "name": "ParameterList",
                "src": "916:0:2"
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
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "voters",
                                  "referencedDeclaration": 278,
                                  "type": "mapping(address => bool)"
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
                                        "id": 575,
                                        "name": "Identifier",
                                        "src": "926:9:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 572,
                                          "type": "uint256",
                                          "value": "_electionId"
                                        },
                                        "id": 576,
                                        "name": "Identifier",
                                        "src": "936:11:2"
                                      }
                                    ],
                                    "id": 577,
                                    "name": "IndexAccess",
                                    "src": "926:22:2"
                                  }
                                ],
                                "id": 578,
                                "name": "MemberAccess",
                                "src": "926:29:2"
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
                                    "id": 579,
                                    "name": "Identifier",
                                    "src": "956:3:2"
                                  }
                                ],
                                "id": 580,
                                "name": "MemberAccess",
                                "src": "956:10:2"
                              }
                            ],
                            "id": 581,
                            "name": "IndexAccess",
                            "src": "926:41:2"
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
                            "id": 582,
                            "name": "Literal",
                            "src": "970:4:2"
                          }
                        ],
                        "id": 583,
                        "name": "Assignment",
                        "src": "926:48:2"
                      }
                    ],
                    "id": 584,
                    "name": "ExpressionStatement",
                    "src": "926:48:2"
                  },
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
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 38,
                              "type": "function (uint256)",
                              "value": "incrementVoters"
                            },
                            "id": 585,
                            "name": "Identifier",
                            "src": "984:15:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 572,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 586,
                            "name": "Identifier",
                            "src": "1000:11:2"
                          }
                        ],
                        "id": 587,
                        "name": "FunctionCall",
                        "src": "984:28:2"
                      }
                    ],
                    "id": 588,
                    "name": "ExpressionStatement",
                    "src": "984:28:2"
                  }
                ],
                "id": 589,
                "name": "Block",
                "src": "916:103:2"
              }
            ],
            "id": 590,
            "name": "FunctionDefinition",
            "src": "873:146:2"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "e76f6b58",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getOneFirstRoundWinner",
              "overrides": null,
              "scope": 853,
              "stateMutability": "view",
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
                      "scope": 607,
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
                        "id": 591,
                        "name": "ElementaryTypeName",
                        "src": "1057:4:2"
                      }
                    ],
                    "id": 592,
                    "name": "VariableDeclaration",
                    "src": "1057:16:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_index",
                      "overrides": null,
                      "scope": 607,
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
                        "id": 593,
                        "name": "ElementaryTypeName",
                        "src": "1075:4:2"
                      }
                    ],
                    "id": 594,
                    "name": "VariableDeclaration",
                    "src": "1075:11:2"
                  }
                ],
                "id": 595,
                "name": "ParameterList",
                "src": "1056:31:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 607,
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
                        "id": 596,
                        "name": "ElementaryTypeName",
                        "src": "1108:4:2"
                      }
                    ],
                    "id": 597,
                    "name": "VariableDeclaration",
                    "src": "1108:4:2"
                  }
                ],
                "id": 598,
                "name": "ParameterList",
                "src": "1107:6:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 598
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
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
                              "member_name": "winners",
                              "referencedDeclaration": 281,
                              "type": "uint256[] storage ref"
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
                                    "id": 599,
                                    "name": "Identifier",
                                    "src": "1130:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 592,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 600,
                                    "name": "Identifier",
                                    "src": "1140:11:2"
                                  }
                                ],
                                "id": 601,
                                "name": "IndexAccess",
                                "src": "1130:22:2"
                              }
                            ],
                            "id": 602,
                            "name": "MemberAccess",
                            "src": "1130:30:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 594,
                              "type": "uint256",
                              "value": "_index"
                            },
                            "id": 603,
                            "name": "Identifier",
                            "src": "1161:6:2"
                          }
                        ],
                        "id": 604,
                        "name": "IndexAccess",
                        "src": "1130:38:2"
                      }
                    ],
                    "id": 605,
                    "name": "Return",
                    "src": "1123:45:2"
                  }
                ],
                "id": 606,
                "name": "Block",
                "src": "1113:62:2"
              }
            ],
            "id": 607,
            "name": "FunctionDefinition",
            "src": "1025:150:2"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "b12b1a7d",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getFirstRoundWinners",
              "overrides": null,
              "scope": 853,
              "stateMutability": "view",
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
                      "scope": 621,
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
                        "id": 608,
                        "name": "ElementaryTypeName",
                        "src": "1211:4:2"
                      }
                    ],
                    "id": 609,
                    "name": "VariableDeclaration",
                    "src": "1211:16:2"
                  }
                ],
                "id": 610,
                "name": "ParameterList",
                "src": "1210:18:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 621,
                      "stateVariable": false,
                      "storageLocation": "memory",
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
                            "id": 611,
                            "name": "ElementaryTypeName",
                            "src": "1249:4:2"
                          }
                        ],
                        "id": 612,
                        "name": "ArrayTypeName",
                        "src": "1249:6:2"
                      }
                    ],
                    "id": 613,
                    "name": "VariableDeclaration",
                    "src": "1249:13:2"
                  }
                ],
                "id": 614,
                "name": "ParameterList",
                "src": "1248:15:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 614
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "winners",
                          "referencedDeclaration": 281,
                          "type": "uint256[] storage ref"
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
                                "id": 615,
                                "name": "Identifier",
                                "src": "1280:9:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 609,
                                  "type": "uint256",
                                  "value": "_electionId"
                                },
                                "id": 616,
                                "name": "Identifier",
                                "src": "1290:11:2"
                              }
                            ],
                            "id": 617,
                            "name": "IndexAccess",
                            "src": "1280:22:2"
                          }
                        ],
                        "id": 618,
                        "name": "MemberAccess",
                        "src": "1280:30:2"
                      }
                    ],
                    "id": 619,
                    "name": "Return",
                    "src": "1273:37:2"
                  }
                ],
                "id": 620,
                "name": "Block",
                "src": "1263:54:2"
              }
            ],
            "id": 621,
            "name": "FunctionDefinition",
            "src": "1181:136:2"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "be4d823e",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "computeResult",
              "overrides": null,
              "scope": 853,
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
                      "scope": 665,
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
                        "id": 622,
                        "name": "ElementaryTypeName",
                        "src": "1346:4:2"
                      }
                    ],
                    "id": 623,
                    "name": "VariableDeclaration",
                    "src": "1346:16:2"
                  }
                ],
                "id": 624,
                "name": "ParameterList",
                "src": "1345:18:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 625,
                "name": "ParameterList",
                "src": "1371:0:2"
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
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 691,
                              "type": "function (uint256)",
                              "value": "computeCandidatesAverageNote"
                            },
                            "id": 626,
                            "name": "Identifier",
                            "src": "1381:28:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 623,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 627,
                            "name": "Identifier",
                            "src": "1410:11:2"
                          }
                        ],
                        "id": 628,
                        "name": "FunctionCall",
                        "src": "1381:41:2"
                      }
                    ],
                    "id": 629,
                    "name": "ExpressionStatement",
                    "src": "1381:41:2"
                  },
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
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 770,
                              "type": "function (uint256)",
                              "value": "computeFirstRoundWinners"
                            },
                            "id": 630,
                            "name": "Identifier",
                            "src": "1433:24:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 623,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 631,
                            "name": "Identifier",
                            "src": "1458:11:2"
                          }
                        ],
                        "id": 632,
                        "name": "FunctionCall",
                        "src": "1433:37:2"
                      }
                    ],
                    "id": 633,
                    "name": "ExpressionStatement",
                    "src": "1433:37:2"
                  },
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
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 852,
                              "type": "function (uint256)",
                              "value": "computeFinalRoundWinner"
                            },
                            "id": 634,
                            "name": "Identifier",
                            "src": "1481:23:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 623,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 635,
                            "name": "Identifier",
                            "src": "1505:11:2"
                          }
                        ],
                        "id": 636,
                        "name": "FunctionCall",
                        "src": "1481:36:2"
                      }
                    ],
                    "id": 637,
                    "name": "ExpressionStatement",
                    "src": "1481:36:2"
                  },
                  {
                    "children": [
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
                          "operator": ">",
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
                              "member_name": "length",
                              "referencedDeclaration": null,
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
                                  "member_name": "winners",
                                  "referencedDeclaration": 281,
                                  "type": "uint256[] storage ref"
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
                                        "id": 638,
                                        "name": "Identifier",
                                        "src": "1530:9:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 623,
                                          "type": "uint256",
                                          "value": "_electionId"
                                        },
                                        "id": 639,
                                        "name": "Identifier",
                                        "src": "1540:11:2"
                                      }
                                    ],
                                    "id": 640,
                                    "name": "IndexAccess",
                                    "src": "1530:22:2"
                                  }
                                ],
                                "id": 641,
                                "name": "MemberAccess",
                                "src": "1530:30:2"
                              }
                            ],
                            "id": 642,
                            "name": "MemberAccess",
                            "src": "1530:37:2"
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
                            "id": 643,
                            "name": "Literal",
                            "src": "1570:1:2"
                          }
                        ],
                        "id": 644,
                        "name": "BinaryOperation",
                        "src": "1530:41:2"
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
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 852,
                                      "type": "function (uint256)",
                                      "value": "computeFinalRoundWinner"
                                    },
                                    "id": 645,
                                    "name": "Identifier",
                                    "src": "1586:23:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 623,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 646,
                                    "name": "Identifier",
                                    "src": "1610:11:2"
                                  }
                                ],
                                "id": 647,
                                "name": "FunctionCall",
                                "src": "1586:36:2"
                              }
                            ],
                            "id": 648,
                            "name": "ExpressionStatement",
                            "src": "1586:36:2"
                          }
                        ],
                        "id": 649,
                        "name": "Block",
                        "src": "1572:61:2"
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
                                      "member_name": "winner",
                                      "referencedDeclaration": 283,
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
                                            "id": 650,
                                            "name": "Identifier",
                                            "src": "1684:9:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 623,
                                              "type": "uint256",
                                              "value": "_electionId"
                                            },
                                            "id": 651,
                                            "name": "Identifier",
                                            "src": "1694:11:2"
                                          }
                                        ],
                                        "id": 652,
                                        "name": "IndexAccess",
                                        "src": "1684:22:2"
                                      }
                                    ],
                                    "id": 653,
                                    "name": "MemberAccess",
                                    "src": "1684:29:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
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
                                          "member_name": "winners",
                                          "referencedDeclaration": 281,
                                          "type": "uint256[] storage ref"
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
                                                "id": 654,
                                                "name": "Identifier",
                                                "src": "1716:9:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 623,
                                                  "type": "uint256",
                                                  "value": "_electionId"
                                                },
                                                "id": 655,
                                                "name": "Identifier",
                                                "src": "1726:11:2"
                                              }
                                            ],
                                            "id": 656,
                                            "name": "IndexAccess",
                                            "src": "1716:22:2"
                                          }
                                        ],
                                        "id": 657,
                                        "name": "MemberAccess",
                                        "src": "1716:30:2"
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
                                        "id": 658,
                                        "name": "Literal",
                                        "src": "1747:1:2"
                                      }
                                    ],
                                    "id": 659,
                                    "name": "IndexAccess",
                                    "src": "1716:33:2"
                                  }
                                ],
                                "id": 660,
                                "name": "Assignment",
                                "src": "1684:65:2"
                              }
                            ],
                            "id": 661,
                            "name": "ExpressionStatement",
                            "src": "1684:65:2"
                          }
                        ],
                        "id": 662,
                        "name": "Block",
                        "src": "1647:113:2"
                      }
                    ],
                    "id": 663,
                    "name": "IfStatement",
                    "src": "1527:233:2"
                  }
                ],
                "id": 664,
                "name": "Block",
                "src": "1371:395:2"
              }
            ],
            "id": 665,
            "name": "FunctionDefinition",
            "src": "1323:443:2"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "ab6cb049",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "computeCandidatesAverageNote",
              "overrides": null,
              "scope": 853,
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
                      "scope": 691,
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
                        "id": 666,
                        "name": "ElementaryTypeName",
                        "src": "1810:4:2"
                      }
                    ],
                    "id": 667,
                    "name": "VariableDeclaration",
                    "src": "1810:16:2"
                  }
                ],
                "id": 668,
                "name": "ParameterList",
                "src": "1809:18:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 669,
                "name": "ParameterList",
                "src": "1835:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            671
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "mutability": "mutable",
                              "name": "i",
                              "overrides": null,
                              "scope": 689,
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
                                "id": 670,
                                "name": "ElementaryTypeName",
                                "src": "1850:4:2"
                              }
                            ],
                            "id": 671,
                            "name": "VariableDeclaration",
                            "src": "1850:6:2"
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
                            "id": 672,
                            "name": "Literal",
                            "src": "1859:1:2"
                          }
                        ],
                        "id": 673,
                        "name": "VariableDeclarationStatement",
                        "src": "1850:10:2"
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
                              "referencedDeclaration": 671,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 674,
                            "name": "Identifier",
                            "src": "1862:1:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
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
                                    "id": 675,
                                    "name": "Identifier",
                                    "src": "1866:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 667,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 676,
                                    "name": "Identifier",
                                    "src": "1876:11:2"
                                  }
                                ],
                                "id": 677,
                                "name": "IndexAccess",
                                "src": "1866:22:2"
                              }
                            ],
                            "id": 678,
                            "name": "MemberAccess",
                            "src": "1866:38:2"
                          }
                        ],
                        "id": 679,
                        "name": "BinaryOperation",
                        "src": "1862:42:2"
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
                                  "referencedDeclaration": 671,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 680,
                                "name": "Identifier",
                                "src": "1906:1:2"
                              }
                            ],
                            "id": 681,
                            "name": "UnaryOperation",
                            "src": "1906:3:2"
                          }
                        ],
                        "id": 682,
                        "name": "ExpressionStatement",
                        "src": "1906:3:2"
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
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 241,
                                      "type": "function (uint256,uint256)",
                                      "value": "computeAverageNote"
                                    },
                                    "id": 683,
                                    "name": "Identifier",
                                    "src": "1924:18:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 667,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 684,
                                    "name": "Identifier",
                                    "src": "1943:11:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 671,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 685,
                                    "name": "Identifier",
                                    "src": "1956:1:2"
                                  }
                                ],
                                "id": 686,
                                "name": "FunctionCall",
                                "src": "1924:34:2"
                              }
                            ],
                            "id": 687,
                            "name": "ExpressionStatement",
                            "src": "1924:34:2"
                          }
                        ],
                        "id": 688,
                        "name": "Block",
                        "src": "1910:59:2"
                      }
                    ],
                    "id": 689,
                    "name": "ForStatement",
                    "src": "1845:124:2"
                  }
                ],
                "id": 690,
                "name": "Block",
                "src": "1835:140:2"
              }
            ],
            "id": 691,
            "name": "FunctionDefinition",
            "src": "1772:203:2"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "cd015c32",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "computeFirstRoundWinners",
              "overrides": null,
              "scope": 853,
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
                      "scope": 770,
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
                        "id": 692,
                        "name": "ElementaryTypeName",
                        "src": "2015:4:2"
                      }
                    ],
                    "id": 693,
                    "name": "VariableDeclaration",
                    "src": "2015:16:2"
                  }
                ],
                "id": 694,
                "name": "ParameterList",
                "src": "2014:18:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 695,
                "name": "ParameterList",
                "src": "2040:0:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        697
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "higherNote",
                          "overrides": null,
                          "scope": 769,
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
                            "id": 696,
                            "name": "ElementaryTypeName",
                            "src": "2050:4:2"
                          }
                        ],
                        "id": 697,
                        "name": "VariableDeclaration",
                        "src": "2050:15:2"
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
                        "id": 698,
                        "name": "Literal",
                        "src": "2068:1:2"
                      }
                    ],
                    "id": 699,
                    "name": "VariableDeclarationStatement",
                    "src": "2050:19:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            701
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "mutability": "mutable",
                              "name": "i",
                              "overrides": null,
                              "scope": 768,
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
                                "id": 700,
                                "name": "ElementaryTypeName",
                                "src": "2083:4:2"
                              }
                            ],
                            "id": 701,
                            "name": "VariableDeclaration",
                            "src": "2083:6:2"
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
                            "id": 702,
                            "name": "Literal",
                            "src": "2092:1:2"
                          }
                        ],
                        "id": 703,
                        "name": "VariableDeclarationStatement",
                        "src": "2083:10:2"
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
                              "referencedDeclaration": 701,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 704,
                            "name": "Identifier",
                            "src": "2095:1:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
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
                                    "id": 705,
                                    "name": "Identifier",
                                    "src": "2099:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 693,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 706,
                                    "name": "Identifier",
                                    "src": "2109:11:2"
                                  }
                                ],
                                "id": 707,
                                "name": "IndexAccess",
                                "src": "2099:22:2"
                              }
                            ],
                            "id": 708,
                            "name": "MemberAccess",
                            "src": "2099:38:2"
                          }
                        ],
                        "id": 709,
                        "name": "BinaryOperation",
                        "src": "2095:42:2"
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
                                  "referencedDeclaration": 701,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 710,
                                "name": "Identifier",
                                "src": "2139:1:2"
                              }
                            ],
                            "id": 711,
                            "name": "UnaryOperation",
                            "src": "2139:3:2"
                          }
                        ],
                        "id": 712,
                        "name": "ExpressionStatement",
                        "src": "2139:3:2"
                      },
                      {
                        "children": [
                          {
                            "children": [
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
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 697,
                                      "type": "uint256",
                                      "value": "higherNote"
                                    },
                                    "id": 713,
                                    "name": "Identifier",
                                    "src": "2160:10:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "averageNote",
                                      "referencedDeclaration": 294,
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
                                                    "id": 714,
                                                    "name": "Identifier",
                                                    "src": "2174:9:2"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 693,
                                                      "type": "uint256",
                                                      "value": "_electionId"
                                                    },
                                                    "id": 715,
                                                    "name": "Identifier",
                                                    "src": "2184:11:2"
                                                  }
                                                ],
                                                "id": 716,
                                                "name": "IndexAccess",
                                                "src": "2174:22:2"
                                              }
                                            ],
                                            "id": 717,
                                            "name": "MemberAccess",
                                            "src": "2174:33:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 701,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 718,
                                            "name": "Identifier",
                                            "src": "2208:1:2"
                                          }
                                        ],
                                        "id": 719,
                                        "name": "IndexAccess",
                                        "src": "2174:36:2"
                                      }
                                    ],
                                    "id": 720,
                                    "name": "MemberAccess",
                                    "src": "2174:48:2"
                                  }
                                ],
                                "id": 721,
                                "name": "BinaryOperation",
                                "src": "2160:62:2"
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
                                                }
                                              ],
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "push",
                                              "referencedDeclaration": null,
                                              "type": "function (uint256)"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "member_name": "winners",
                                                  "referencedDeclaration": 281,
                                                  "type": "uint256[] storage ref"
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
                                                        "id": 722,
                                                        "name": "Identifier",
                                                        "src": "2241:9:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 693,
                                                          "type": "uint256",
                                                          "value": "_electionId"
                                                        },
                                                        "id": 723,
                                                        "name": "Identifier",
                                                        "src": "2251:11:2"
                                                      }
                                                    ],
                                                    "id": 724,
                                                    "name": "IndexAccess",
                                                    "src": "2241:22:2"
                                                  }
                                                ],
                                                "id": 725,
                                                "name": "MemberAccess",
                                                "src": "2241:30:2"
                                              }
                                            ],
                                            "id": 726,
                                            "name": "MemberAccess",
                                            "src": "2241:35:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 701,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 727,
                                            "name": "Identifier",
                                            "src": "2277:1:2"
                                          }
                                        ],
                                        "id": 728,
                                        "name": "FunctionCall",
                                        "src": "2241:38:2"
                                      }
                                    ],
                                    "id": 729,
                                    "name": "ExpressionStatement",
                                    "src": "2241:38:2"
                                  }
                                ],
                                "id": 730,
                                "name": "Block",
                                "src": "2223:71:2"
                              },
                              {
                                "attributes": {
                                  "falseBody": null
                                },
                                "children": [
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
                                          "referencedDeclaration": 697,
                                          "type": "uint256",
                                          "value": "higherNote"
                                        },
                                        "id": 731,
                                        "name": "Identifier",
                                        "src": "2315:10:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "averageNote",
                                          "referencedDeclaration": 294,
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
                                                        "id": 732,
                                                        "name": "Identifier",
                                                        "src": "2328:9:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 693,
                                                          "type": "uint256",
                                                          "value": "_electionId"
                                                        },
                                                        "id": 733,
                                                        "name": "Identifier",
                                                        "src": "2338:11:2"
                                                      }
                                                    ],
                                                    "id": 734,
                                                    "name": "IndexAccess",
                                                    "src": "2328:22:2"
                                                  }
                                                ],
                                                "id": 735,
                                                "name": "MemberAccess",
                                                "src": "2328:33:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 701,
                                                  "type": "uint256",
                                                  "value": "i"
                                                },
                                                "id": 736,
                                                "name": "Identifier",
                                                "src": "2362:1:2"
                                              }
                                            ],
                                            "id": 737,
                                            "name": "IndexAccess",
                                            "src": "2328:36:2"
                                          }
                                        ],
                                        "id": 738,
                                        "name": "MemberAccess",
                                        "src": "2328:48:2"
                                      }
                                    ],
                                    "id": 739,
                                    "name": "BinaryOperation",
                                    "src": "2315:61:2"
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
                                              "operator": "delete",
                                              "prefix": true,
                                              "type": "tuple()"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": true,
                                                  "member_name": "winners",
                                                  "referencedDeclaration": 281,
                                                  "type": "uint256[] storage ref"
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
                                                        "id": 740,
                                                        "name": "Identifier",
                                                        "src": "2402:9:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 693,
                                                          "type": "uint256",
                                                          "value": "_electionId"
                                                        },
                                                        "id": 741,
                                                        "name": "Identifier",
                                                        "src": "2412:11:2"
                                                      }
                                                    ],
                                                    "id": 742,
                                                    "name": "IndexAccess",
                                                    "src": "2402:22:2"
                                                  }
                                                ],
                                                "id": 743,
                                                "name": "MemberAccess",
                                                "src": "2402:30:2"
                                              }
                                            ],
                                            "id": 744,
                                            "name": "UnaryOperation",
                                            "src": "2395:37:2"
                                          }
                                        ],
                                        "id": 745,
                                        "name": "ExpressionStatement",
                                        "src": "2395:37:2"
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
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 697,
                                                  "type": "uint256",
                                                  "value": "higherNote"
                                                },
                                                "id": 746,
                                                "name": "Identifier",
                                                "src": "2450:10:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "member_name": "averageNote",
                                                  "referencedDeclaration": 294,
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
                                                                "id": 747,
                                                                "name": "Identifier",
                                                                "src": "2463:9:2"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 693,
                                                                  "type": "uint256",
                                                                  "value": "_electionId"
                                                                },
                                                                "id": 748,
                                                                "name": "Identifier",
                                                                "src": "2473:11:2"
                                                              }
                                                            ],
                                                            "id": 749,
                                                            "name": "IndexAccess",
                                                            "src": "2463:22:2"
                                                          }
                                                        ],
                                                        "id": 750,
                                                        "name": "MemberAccess",
                                                        "src": "2463:33:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 701,
                                                          "type": "uint256",
                                                          "value": "i"
                                                        },
                                                        "id": 751,
                                                        "name": "Identifier",
                                                        "src": "2497:1:2"
                                                      }
                                                    ],
                                                    "id": 752,
                                                    "name": "IndexAccess",
                                                    "src": "2463:36:2"
                                                  }
                                                ],
                                                "id": 753,
                                                "name": "MemberAccess",
                                                "src": "2463:48:2"
                                              }
                                            ],
                                            "id": 754,
                                            "name": "Assignment",
                                            "src": "2450:61:2"
                                          }
                                        ],
                                        "id": 755,
                                        "name": "ExpressionStatement",
                                        "src": "2450:61:2"
                                      },
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
                                                    }
                                                  ],
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "member_name": "push",
                                                  "referencedDeclaration": null,
                                                  "type": "function (uint256)"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "member_name": "winners",
                                                      "referencedDeclaration": 281,
                                                      "type": "uint256[] storage ref"
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
                                                            "id": 756,
                                                            "name": "Identifier",
                                                            "src": "2529:9:2"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 693,
                                                              "type": "uint256",
                                                              "value": "_electionId"
                                                            },
                                                            "id": 757,
                                                            "name": "Identifier",
                                                            "src": "2539:11:2"
                                                          }
                                                        ],
                                                        "id": 758,
                                                        "name": "IndexAccess",
                                                        "src": "2529:22:2"
                                                      }
                                                    ],
                                                    "id": 759,
                                                    "name": "MemberAccess",
                                                    "src": "2529:30:2"
                                                  }
                                                ],
                                                "id": 760,
                                                "name": "MemberAccess",
                                                "src": "2529:35:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 701,
                                                  "type": "uint256",
                                                  "value": "i"
                                                },
                                                "id": 761,
                                                "name": "Identifier",
                                                "src": "2565:1:2"
                                              }
                                            ],
                                            "id": 762,
                                            "name": "FunctionCall",
                                            "src": "2529:38:2"
                                          }
                                        ],
                                        "id": 763,
                                        "name": "ExpressionStatement",
                                        "src": "2529:38:2"
                                      }
                                    ],
                                    "id": 764,
                                    "name": "Block",
                                    "src": "2377:205:2"
                                  }
                                ],
                                "id": 765,
                                "name": "IfStatement",
                                "src": "2312:270:2"
                              }
                            ],
                            "id": 766,
                            "name": "IfStatement",
                            "src": "2157:425:2"
                          }
                        ],
                        "id": 767,
                        "name": "Block",
                        "src": "2143:449:2"
                      }
                    ],
                    "id": 768,
                    "name": "ForStatement",
                    "src": "2079:513:2"
                  }
                ],
                "id": 769,
                "name": "Block",
                "src": "2040:558:2"
              }
            ],
            "id": 770,
            "name": "FunctionDefinition",
            "src": "1981:617:2"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "7bb1541d",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "computeFinalRoundWinner",
              "overrides": null,
              "scope": 853,
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
                      "scope": 852,
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
                        "id": 771,
                        "name": "ElementaryTypeName",
                        "src": "2637:4:2"
                      }
                    ],
                    "id": 772,
                    "name": "VariableDeclaration",
                    "src": "2637:16:2"
                  }
                ],
                "id": 773,
                "name": "ParameterList",
                "src": "2636:18:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 774,
                "name": "ParameterList",
                "src": "2662:0:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        776
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "higherPercent",
                          "overrides": null,
                          "scope": 851,
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
                            "id": 775,
                            "name": "ElementaryTypeName",
                            "src": "2672:4:2"
                          }
                        ],
                        "id": 776,
                        "name": "VariableDeclaration",
                        "src": "2672:18:2"
                      }
                    ],
                    "id": 777,
                    "name": "VariableDeclarationStatement",
                    "src": "2672:18:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            779
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "mutability": "mutable",
                              "name": "i",
                              "overrides": null,
                              "scope": 850,
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
                                "id": 778,
                                "name": "ElementaryTypeName",
                                "src": "2704:4:2"
                              }
                            ],
                            "id": 779,
                            "name": "VariableDeclaration",
                            "src": "2704:6:2"
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
                            "id": 780,
                            "name": "Literal",
                            "src": "2713:1:2"
                          }
                        ],
                        "id": 781,
                        "name": "VariableDeclarationStatement",
                        "src": "2704:10:2"
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
                              "referencedDeclaration": 779,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 782,
                            "name": "Identifier",
                            "src": "2716:1:2"
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
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "winners",
                                  "referencedDeclaration": 281,
                                  "type": "uint256[] storage ref"
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
                                        "id": 783,
                                        "name": "Identifier",
                                        "src": "2720:9:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 772,
                                          "type": "uint256",
                                          "value": "_electionId"
                                        },
                                        "id": 784,
                                        "name": "Identifier",
                                        "src": "2730:11:2"
                                      }
                                    ],
                                    "id": 785,
                                    "name": "IndexAccess",
                                    "src": "2720:22:2"
                                  }
                                ],
                                "id": 786,
                                "name": "MemberAccess",
                                "src": "2720:30:2"
                              }
                            ],
                            "id": 787,
                            "name": "MemberAccess",
                            "src": "2720:37:2"
                          }
                        ],
                        "id": 788,
                        "name": "BinaryOperation",
                        "src": "2716:41:2"
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
                                  "referencedDeclaration": 779,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 789,
                                "name": "Identifier",
                                "src": "2759:1:2"
                              }
                            ],
                            "id": 790,
                            "name": "UnaryOperation",
                            "src": "2759:3:2"
                          }
                        ],
                        "id": 791,
                        "name": "ExpressionStatement",
                        "src": "2759:3:2"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                793
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "mutability": "mutable",
                                  "name": "currentPercent",
                                  "overrides": null,
                                  "scope": 849,
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
                                    "id": 792,
                                    "name": "ElementaryTypeName",
                                    "src": "2777:4:2"
                                  }
                                ],
                                "id": 793,
                                "name": "VariableDeclaration",
                                "src": "2777:19:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "percent",
                                  "referencedDeclaration": 292,
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
                                                "id": 794,
                                                "name": "Identifier",
                                                "src": "2799:9:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 772,
                                                  "type": "uint256",
                                                  "value": "_electionId"
                                                },
                                                "id": 795,
                                                "name": "Identifier",
                                                "src": "2809:11:2"
                                              }
                                            ],
                                            "id": 796,
                                            "name": "IndexAccess",
                                            "src": "2799:22:2"
                                          }
                                        ],
                                        "id": 797,
                                        "name": "MemberAccess",
                                        "src": "2799:33:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
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
                                              "member_name": "winners",
                                              "referencedDeclaration": 281,
                                              "type": "uint256[] storage ref"
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
                                                    "id": 798,
                                                    "name": "Identifier",
                                                    "src": "2833:9:2"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 772,
                                                      "type": "uint256",
                                                      "value": "_electionId"
                                                    },
                                                    "id": 799,
                                                    "name": "Identifier",
                                                    "src": "2843:11:2"
                                                  }
                                                ],
                                                "id": 800,
                                                "name": "IndexAccess",
                                                "src": "2833:22:2"
                                              }
                                            ],
                                            "id": 801,
                                            "name": "MemberAccess",
                                            "src": "2833:30:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 779,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 802,
                                            "name": "Identifier",
                                            "src": "2864:1:2"
                                          }
                                        ],
                                        "id": 803,
                                        "name": "IndexAccess",
                                        "src": "2833:33:2"
                                      }
                                    ],
                                    "id": 804,
                                    "name": "IndexAccess",
                                    "src": "2799:68:2"
                                  }
                                ],
                                "id": 805,
                                "name": "MemberAccess",
                                "src": "2799:76:2"
                              }
                            ],
                            "id": 806,
                            "name": "VariableDeclarationStatement",
                            "src": "2777:98:2"
                          },
                          {
                            "children": [
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
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 779,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 807,
                                    "name": "Identifier",
                                    "src": "2892:1:2"
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
                                    "id": 808,
                                    "name": "Literal",
                                    "src": "2897:1:2"
                                  }
                                ],
                                "id": 809,
                                "name": "BinaryOperation",
                                "src": "2892:6:2"
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
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 776,
                                              "type": "uint256",
                                              "value": "higherPercent"
                                            },
                                            "id": 810,
                                            "name": "Identifier",
                                            "src": "2917:13:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 793,
                                              "type": "uint256",
                                              "value": "currentPercent"
                                            },
                                            "id": 811,
                                            "name": "Identifier",
                                            "src": "2933:14:2"
                                          }
                                        ],
                                        "id": 812,
                                        "name": "Assignment",
                                        "src": "2917:30:2"
                                      }
                                    ],
                                    "id": 813,
                                    "name": "ExpressionStatement",
                                    "src": "2917:30:2"
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
                                              "member_name": "winner",
                                              "referencedDeclaration": 283,
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
                                                    "id": 814,
                                                    "name": "Identifier",
                                                    "src": "2965:9:2"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 772,
                                                      "type": "uint256",
                                                      "value": "_electionId"
                                                    },
                                                    "id": 815,
                                                    "name": "Identifier",
                                                    "src": "2975:11:2"
                                                  }
                                                ],
                                                "id": 816,
                                                "name": "IndexAccess",
                                                "src": "2965:22:2"
                                              }
                                            ],
                                            "id": 817,
                                            "name": "MemberAccess",
                                            "src": "2965:29:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
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
                                                  "member_name": "winners",
                                                  "referencedDeclaration": 281,
                                                  "type": "uint256[] storage ref"
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
                                                        "id": 818,
                                                        "name": "Identifier",
                                                        "src": "2997:9:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 772,
                                                          "type": "uint256",
                                                          "value": "_electionId"
                                                        },
                                                        "id": 819,
                                                        "name": "Identifier",
                                                        "src": "3007:11:2"
                                                      }
                                                    ],
                                                    "id": 820,
                                                    "name": "IndexAccess",
                                                    "src": "2997:22:2"
                                                  }
                                                ],
                                                "id": 821,
                                                "name": "MemberAccess",
                                                "src": "2997:30:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 779,
                                                  "type": "uint256",
                                                  "value": "i"
                                                },
                                                "id": 822,
                                                "name": "Identifier",
                                                "src": "3028:1:2"
                                              }
                                            ],
                                            "id": 823,
                                            "name": "IndexAccess",
                                            "src": "2997:33:2"
                                          }
                                        ],
                                        "id": 824,
                                        "name": "Assignment",
                                        "src": "2965:65:2"
                                      }
                                    ],
                                    "id": 825,
                                    "name": "ExpressionStatement",
                                    "src": "2965:65:2"
                                  }
                                ],
                                "id": 826,
                                "name": "Block",
                                "src": "2899:146:2"
                              },
                              {
                                "attributes": {
                                  "falseBody": null
                                },
                                "children": [
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
                                      "operator": ">",
                                      "type": "bool"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 793,
                                          "type": "uint256",
                                          "value": "currentPercent"
                                        },
                                        "id": 827,
                                        "name": "Identifier",
                                        "src": "3067:14:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 776,
                                          "type": "uint256",
                                          "value": "higherPercent"
                                        },
                                        "id": 828,
                                        "name": "Identifier",
                                        "src": "3084:13:2"
                                      }
                                    ],
                                    "id": 829,
                                    "name": "BinaryOperation",
                                    "src": "3067:30:2"
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
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 776,
                                                  "type": "uint256",
                                                  "value": "higherPercent"
                                                },
                                                "id": 830,
                                                "name": "Identifier",
                                                "src": "3116:13:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 793,
                                                  "type": "uint256",
                                                  "value": "currentPercent"
                                                },
                                                "id": 831,
                                                "name": "Identifier",
                                                "src": "3132:14:2"
                                              }
                                            ],
                                            "id": 832,
                                            "name": "Assignment",
                                            "src": "3116:30:2"
                                          }
                                        ],
                                        "id": 833,
                                        "name": "ExpressionStatement",
                                        "src": "3116:30:2"
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
                                                  "member_name": "winner",
                                                  "referencedDeclaration": 283,
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
                                                        "id": 834,
                                                        "name": "Identifier",
                                                        "src": "3164:9:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 772,
                                                          "type": "uint256",
                                                          "value": "_electionId"
                                                        },
                                                        "id": 835,
                                                        "name": "Identifier",
                                                        "src": "3174:11:2"
                                                      }
                                                    ],
                                                    "id": 836,
                                                    "name": "IndexAccess",
                                                    "src": "3164:22:2"
                                                  }
                                                ],
                                                "id": 837,
                                                "name": "MemberAccess",
                                                "src": "3164:29:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
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
                                                      "member_name": "winners",
                                                      "referencedDeclaration": 281,
                                                      "type": "uint256[] storage ref"
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
                                                            "id": 838,
                                                            "name": "Identifier",
                                                            "src": "3196:9:2"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 772,
                                                              "type": "uint256",
                                                              "value": "_electionId"
                                                            },
                                                            "id": 839,
                                                            "name": "Identifier",
                                                            "src": "3206:11:2"
                                                          }
                                                        ],
                                                        "id": 840,
                                                        "name": "IndexAccess",
                                                        "src": "3196:22:2"
                                                      }
                                                    ],
                                                    "id": 841,
                                                    "name": "MemberAccess",
                                                    "src": "3196:30:2"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 779,
                                                      "type": "uint256",
                                                      "value": "i"
                                                    },
                                                    "id": 842,
                                                    "name": "Identifier",
                                                    "src": "3227:1:2"
                                                  }
                                                ],
                                                "id": 843,
                                                "name": "IndexAccess",
                                                "src": "3196:33:2"
                                              }
                                            ],
                                            "id": 844,
                                            "name": "Assignment",
                                            "src": "3164:65:2"
                                          }
                                        ],
                                        "id": 845,
                                        "name": "ExpressionStatement",
                                        "src": "3164:65:2"
                                      }
                                    ],
                                    "id": 846,
                                    "name": "Block",
                                    "src": "3098:146:2"
                                  }
                                ],
                                "id": 847,
                                "name": "IfStatement",
                                "src": "3063:181:2"
                              }
                            ],
                            "id": 848,
                            "name": "IfStatement",
                            "src": "2889:355:2"
                          }
                        ],
                        "id": 849,
                        "name": "Block",
                        "src": "2763:491:2"
                      }
                    ],
                    "id": 850,
                    "name": "ForStatement",
                    "src": "2700:554:2"
                  }
                ],
                "id": 851,
                "name": "Block",
                "src": "2662:598:2"
              }
            ],
            "id": 852,
            "name": "FunctionDefinition",
            "src": "2604:656:2"
          }
        ],
        "id": 853,
        "name": "ContractDefinition",
        "src": "185:3077:2"
      }
    ],
    "id": 854,
    "name": "SourceUnit",
    "src": "32:3231:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.7.0+commit.9e61f92b.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.3",
  "updatedAt": "2021-01-22T16:32:52.559Z",
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