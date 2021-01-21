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
      "name": "getCandidateAverageNote",
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
      "name": "getCandidateName",
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
  "metadata": "{\"compiler\":{\"version\":\"0.7.0+commit.9e61f92b\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"addAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_candidateName\",\"type\":\"string\"}],\"name\":\"addCandidate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_noteId\",\"type\":\"uint256\"}],\"name\":\"addNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"addVoter\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_note\",\"type\":\"uint256\"}],\"name\":\"calculatePercentageOfNote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"computeAverageNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeCandidatesAverageNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeFinalRoundWinner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeFirstRoundWinners\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeResult\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_title\",\"type\":\"string\"},{\"internalType\":\"string[]\",\"name\":\"_candidatesNames\",\"type\":\"string[]\"}],\"name\":\"createElection\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"deleteAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"elections\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"creationDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"closingDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalVoters\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"isOpen\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"candidatesCount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"winner\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"electionsCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"endElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"getCandidateAverageNote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"getCandidateName\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_noteId\",\"type\":\"uint256\"}],\"name\":\"getCandidateNote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getCandidatesCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionStatus\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionTitle\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionWinner\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getFirstRoundWinners\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"}],\"name\":\"getOneFirstRoundWinner\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"incrementVoters\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"userAddress\",\"type\":\"address\"}],\"name\":\"isUserAdmin\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol\":\"ElectionHelper\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Candidate.sol\":{\"keccak256\":\"0x47126df3010fdec3398cc6d1f9013873014edf23c57160050b3ce566a990eb59\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d9c0cd3ead97872c34364b65664869d398767468ca61ede8890e763d94942ee4\",\"dweb:/ipfs/QmWRwZvM1PdNQ5Z8hBhJDvtVfgEP3zfgkCUWfVRFWuqhmr\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol\":{\"keccak256\":\"0xce6751d48384d436adae7ede503e293aef6c33f25dc3c27f80ee01419166efc4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://06d99d3abb2c0a1ddeeab27ca5ce4c6699a2dc50053bf48e170c9ee1f9256bdb\",\"dweb:/ipfs/Qmbh2ovDKNRdchUgeLjo8f7tkESLu1sxyvZTqsQswMPL5H\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol\":{\"keccak256\":\"0x57b58313951c20ec7741dbfb1e7d17a658998df4199603706ea1413d6a3d7d41\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e6b967ccd12912c7dd85b88e167f07c28a66c81f2f2e020557fb551e13da9cc3\",\"dweb:/ipfs/QmaunG12zPety2gSKKBwSDSb4xyEb2VsBYzDkYh5hcZGDr\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol\":{\"keccak256\":\"0x7f1004825e1cc40d7b663e20d3be71ed9c64baf7f05eae9b115a4d4448c8fdcf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5d8ccf5e65c162aeabb1b5e804f7183d95be7a985d5466796025a39ede9cfa62\",\"dweb:/ipfs/QmNZR6izJaw2bC9aCAcVbtS1kE9YBWuuqoaryy8idA14ta\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600560008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061209a806100d96000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c80639a74c695116100f9578063cd08bca011610097578063e62c6ac511610071578063e62c6ac51461053b578063e76f6b581461056b578063e936ed301461059b578063f2fde38b146105cb576101c4565b8063cd08bca0146104e7578063cd62d5dd14610503578063d8f7a0bb1461051f576101c4565b8063b024419e116100d3578063b024419e1461044f578063b12b1a7d1461047f578063be4d823e146104af578063cd015c32146104cb576101c4565b80639a74c695146103f95780639c98bcbb14610417578063ab6cb04914610433576101c4565b80633ee95f00116101665780637048027511610140578063704802751461037357806374d523a81461038f5780637bb1541d146103bf5780638da5cb5b146103db576101c4565b80633ee95f00146102dd5780634d94fc6a1461030d5780635e6fef011461033d576101c4565b806327e1f7df116101a257806327e1f7df14610231578063337fa1461461024d578063349813b21461027d5780633a0b35b7146102ad576101c4565b80631750a3d0146101c95780631aaa5246146101e557806324785b9e14610201575b600080fd5b6101e360048036038101906101de9190611af9565b6105e7565b005b6101ff60048036038101906101fa9190611aa7565b61064e565b005b61021b60048036038101906102169190611aa7565b610677565b6040516102289190611d80565b60405180910390f35b61024b60048036038101906102469190611a12565b6106a4565b005b61026760048036038101906102629190611b89565b610823565b6040516102749190611e73565b60405180910390f35b61029760048036038101906102929190611a3b565b61086a565b6040516102a49190611e73565b60405180910390f35b6102c760048036038101906102c29190611b89565b610a62565b6040516102d49190611e73565b60405180910390f35b6102f760048036038101906102f29190611aa7565b610af2565b6040516103049190611e73565b60405180910390f35b61032760048036038101906103229190611aa7565b610b12565b6040516103349190611d9b565b60405180910390f35b61035760048036038101906103529190611aa7565b610bca565b60405161036a9796959493929190611dbd565b60405180910390f35b61038d60048036038101906103889190611a12565b610cb1565b005b6103a960048036038101906103a49190611a12565b610da1565b6040516103b69190611d80565b60405180910390f35b6103d960048036038101906103d49190611aa7565b610df7565b005b6103e3610f37565b6040516103f09190611d43565b60405180910390f35b610401610f5b565b60405161040e9190611e73565b60405180910390f35b610431600480360381019061042c9190611aa7565b610f61565b005b61044d60048036038101906104489190611aa7565b61104c565b005b61046960048036038101906104649190611b4d565b611088565b6040516104769190611d9b565b60405180910390f35b61049960048036038101906104949190611aa7565b611155565b6040516104a69190611d5e565b60405180910390f35b6104c960048036038101906104c49190611aa7565b6111c3565b005b6104e560048036038101906104e09190611aa7565b611259565b005b61050160048036038101906104fc9190611b89565b6113c1565b005b61051d60048036038101906105189190611b4d565b611411565b005b61053960048036038101906105349190611aa7565b6115fb565b005b61055560048036038101906105509190611aa7565b611673565b6040516105629190611e73565b60405180910390f35b61058560048036038101906105809190611b4d565b611693565b6040516105929190611e73565b60405180910390f35b6105b560048036038101906105b09190611b4d565b6116c9565b6040516105c29190611e73565b60405180910390f35b6105e560048036038101906105e09190611a12565b6116fe565b005b80600260008481526020019081526020016000206006016000600260008681526020019081526020016000206005016000815480929190600101919050558152602001908152602001600020600001908051906020019061064992919061184d565b505050565b600260008281526020019081526020016000206003016000815480929190600101919050555050565b60006002600083815260200190815260200160002060040160009054906101000a900460ff169050919050565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610738576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072f90611e33565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156107c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107be90611e53565b60405180910390fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600060026000858152602001908152602001600020600601600084815260200190815260200160002060010160008381526020019081526020016000205490509392505050565b60003360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610900576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f790611e33565b60405180910390fd5b600083519050600160008154809291906001019190505550600060026000600154815260200190815260200160002090508581600001908051906020019061094992919061184d565b504281600101819055506000816003018190555060018160040160006101000a81548160ff02191690831515021790555060005b828110156109b1576109a460015487838151811061099757fe5b60200260200101516105e7565b808060010191505061097d565b503360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600154935050505092915050565b600080600260008681526020019081526020016000206006016000858152602001908152602001600020600101600084815260200190815260200160002054905060006064820290506000600260008881526020019081526020016000206003015490506000811415610adb5760009350505050610aeb565b808281610ae457fe5b0493505050505b9392505050565b600060026000838152602001908152602001600020600501549050919050565b6060600260008381526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bbe5780601f10610b9357610100808354040283529160200191610bbe565b820191906000526020600020905b815481529060010190602001808311610ba157829003601f168201915b50505050509050919050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c765780601f10610c4b57610100808354040283529160200191610c76565b820191906000526020600020905b815481529060010190602001808311610c5957829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154908060090154905087565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610d45576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3c90611e33565b60405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b6002600084815260200190815260200160002060080180549050811015610f32576000600260008581526020019081526020016000206006016000600260008781526020019081526020016000206008018481548110610e5b57fe5b906000526020600020015481526020019081526020016000206002015490506000821415610ed157809250600260008581526020019081526020016000206008018281548110610ea757fe5b90600052602060002001546002600086815260200190815260200160002060090181905550610f24565b82811115610f2357809250600260008581526020019081526020016000206008018281548110610efd57fe5b906000526020600020015460026000868152602001908152602001600020600901819055505b5b508080600101915050610dff565b505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610ff5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fec90611e33565b60405180910390fd5b60006002600084815260200190815260200160002060040160006101000a81548160ff021916908315150217905550426002600084815260200190815260200160002060020181905550611048826111c3565b5050565b60005b6002600083815260200190815260200160002060050154811015611084576110778282611411565b808060010191505061104f565b5050565b60606002600084815260200190815260200160002060060160008381526020019081526020016000206000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111485780601f1061111d57610100808354040283529160200191611148565b820191906000526020600020905b81548152906001019060200180831161112b57829003601f168201915b5050505050905092915050565b6060600260008381526020019081526020016000206008018054806020026020016040519081016040528092919081815260200182805480156111b757602002820191906000526020600020905b8154815260200190600101908083116111a3575b50505050509050919050565b6111cc8161104c565b6111d581611259565b6111de81610df7565b60016002600083815260200190815260200160002060080180549050111561120e5761120981610df7565b611256565b6002600082815260200190815260200160002060080160008154811061123057fe5b906000526020600020015460026000838152602001908152602001600020600901819055505b50565b6000805b60026000848152602001908152602001600020600501548110156113bc57600260008481526020019081526020016000206006016000828152602001908152602001600020600301548214156112ef57600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150556113af565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301548210156113ae5760026000848152602001908152602001600020600801600061134391906118cd565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301549150600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150555b5b808060010191505061125d565b505050565b600260008481526020019081526020016000206006016000838152602001908152602001600020600101600082815260200190815260200160002060008154809291906001019190505550505050565b600060026000848152602001908152602001600020600301541415611465576000600260008481526020019081526020016000206006016000838152602001908152602001600020600301819055506115f7565b6000600690505b603260026000858152602001908152602001600020600601600084815260200190815260200160002060020154116115f5573073ffffffffffffffffffffffffffffffffffffffff16633a0b35b78484846040518463ffffffff1660e01b81526004016114db93929190611e8e565b60206040518083038186803b1580156114f357600080fd5b505afa158015611507573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061152b9190611ad0565b600260008581526020019081526020016000206006016000848152602001908152602001600020600201540160026000858152602001908152602001600020600601600084815260200190815260200160002060020181905550603260026000858152602001908152602001600020600601600084815260200190815260200160002060020154106115e75780600260008581526020019081526020016000206006016000848152602001908152602001600020600301819055505b80806001900391505061146c565b505b5050565b60016002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506116708161064e565b50565b600060026000838152602001908152602001600020600901549050919050565b60006002600084815260200190815260200160002060080182815481106116b657fe5b9060005260206000200154905092915050565b600060026000848152602001908152602001600020600601600083815260200190815260200160002060030154905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461175657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561179057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061188e57805160ff19168380011785556118bc565b828001600101855582156118bc579182015b828111156118bb5782518255916020019190600101906118a0565b5b5090506118c991906118ee565b5090565b50805460008255906000526020600020908101906118eb91906118ee565b50565b5b808211156119075760008160009055506001016118ef565b5090565b60008135905061191a81612036565b92915050565b600082601f83011261193157600080fd5b813561194461193f82611ef2565b611ec5565b9150818183526020840193506020810190508360005b8381101561198a57813586016119708882611994565b84526020840193506020830192505060018101905061195a565b5050505092915050565b600082601f8301126119a557600080fd5b81356119b86119b382611f1a565b611ec5565b915080825260208301602083018583830111156119d457600080fd5b6119df838284611fe3565b50505092915050565b6000813590506119f78161204d565b92915050565b600081519050611a0c8161204d565b92915050565b600060208284031215611a2457600080fd5b6000611a328482850161190b565b91505092915050565b60008060408385031215611a4e57600080fd5b600083013567ffffffffffffffff811115611a6857600080fd5b611a7485828601611994565b925050602083013567ffffffffffffffff811115611a9157600080fd5b611a9d85828601611920565b9150509250929050565b600060208284031215611ab957600080fd5b6000611ac7848285016119e8565b91505092915050565b600060208284031215611ae257600080fd5b6000611af0848285016119fd565b91505092915050565b60008060408385031215611b0c57600080fd5b6000611b1a858286016119e8565b925050602083013567ffffffffffffffff811115611b3757600080fd5b611b4385828601611994565b9150509250929050565b60008060408385031215611b6057600080fd5b6000611b6e858286016119e8565b9250506020611b7f858286016119e8565b9150509250929050565b600080600060608486031215611b9e57600080fd5b6000611bac868287016119e8565b9350506020611bbd868287016119e8565b9250506040611bce868287016119e8565b9150509250925092565b6000611be48383611d25565b60208301905092915050565b611bf981611f9b565b82525050565b6000611c0a82611f56565b611c148185611f79565b9350611c1f83611f46565b8060005b83811015611c50578151611c378882611bd8565b9750611c4283611f6c565b925050600181019050611c23565b5085935050505092915050565b611c6681611fad565b82525050565b6000611c7782611f61565b611c818185611f8a565b9350611c91818560208601611ff2565b611c9a81612025565b840191505092915050565b6000611cb2601483611f8a565b91507f596f7520617265206e6f7420616e2061646d696e0000000000000000000000006000830152602082019050919050565b6000611cf2601f83611f8a565b91507f43616e6e6f742072656d6f7665206f776e65722066726f6d2061646d696e73006000830152602082019050919050565b611d2e81611fd9565b82525050565b611d3d81611fd9565b82525050565b6000602082019050611d586000830184611bf0565b92915050565b60006020820190508181036000830152611d788184611bff565b905092915050565b6000602082019050611d956000830184611c5d565b92915050565b60006020820190508181036000830152611db58184611c6c565b905092915050565b600060e0820190508181036000830152611dd7818a611c6c565b9050611de66020830189611d34565b611df36040830188611d34565b611e006060830187611d34565b611e0d6080830186611c5d565b611e1a60a0830185611d34565b611e2760c0830184611d34565b98975050505050505050565b60006020820190508181036000830152611e4c81611ca5565b9050919050565b60006020820190508181036000830152611e6c81611ce5565b9050919050565b6000602082019050611e886000830184611d34565b92915050565b6000606082019050611ea36000830186611d34565b611eb06020830185611d34565b611ebd6040830184611d34565b949350505050565b6000604051905081810181811067ffffffffffffffff82111715611ee857600080fd5b8060405250919050565b600067ffffffffffffffff821115611f0957600080fd5b602082029050602081019050919050565b600067ffffffffffffffff821115611f3157600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611fa682611fb9565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612010578082015181840152602081019050611ff5565b8381111561201f576000848401525b50505050565b6000601f19601f8301169050919050565b61203f81611f9b565b811461204a57600080fd5b50565b61205681611fd9565b811461206157600080fd5b5056fea2646970667358221220226da31a09d87577162a4a05daa9e0c470b324c818c92a341606db12f9d4a19e64736f6c63430007000033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101c45760003560e01c80639a74c695116100f9578063cd08bca011610097578063e62c6ac511610071578063e62c6ac51461053b578063e76f6b581461056b578063e936ed301461059b578063f2fde38b146105cb576101c4565b8063cd08bca0146104e7578063cd62d5dd14610503578063d8f7a0bb1461051f576101c4565b8063b024419e116100d3578063b024419e1461044f578063b12b1a7d1461047f578063be4d823e146104af578063cd015c32146104cb576101c4565b80639a74c695146103f95780639c98bcbb14610417578063ab6cb04914610433576101c4565b80633ee95f00116101665780637048027511610140578063704802751461037357806374d523a81461038f5780637bb1541d146103bf5780638da5cb5b146103db576101c4565b80633ee95f00146102dd5780634d94fc6a1461030d5780635e6fef011461033d576101c4565b806327e1f7df116101a257806327e1f7df14610231578063337fa1461461024d578063349813b21461027d5780633a0b35b7146102ad576101c4565b80631750a3d0146101c95780631aaa5246146101e557806324785b9e14610201575b600080fd5b6101e360048036038101906101de9190611af9565b6105e7565b005b6101ff60048036038101906101fa9190611aa7565b61064e565b005b61021b60048036038101906102169190611aa7565b610677565b6040516102289190611d80565b60405180910390f35b61024b60048036038101906102469190611a12565b6106a4565b005b61026760048036038101906102629190611b89565b610823565b6040516102749190611e73565b60405180910390f35b61029760048036038101906102929190611a3b565b61086a565b6040516102a49190611e73565b60405180910390f35b6102c760048036038101906102c29190611b89565b610a62565b6040516102d49190611e73565b60405180910390f35b6102f760048036038101906102f29190611aa7565b610af2565b6040516103049190611e73565b60405180910390f35b61032760048036038101906103229190611aa7565b610b12565b6040516103349190611d9b565b60405180910390f35b61035760048036038101906103529190611aa7565b610bca565b60405161036a9796959493929190611dbd565b60405180910390f35b61038d60048036038101906103889190611a12565b610cb1565b005b6103a960048036038101906103a49190611a12565b610da1565b6040516103b69190611d80565b60405180910390f35b6103d960048036038101906103d49190611aa7565b610df7565b005b6103e3610f37565b6040516103f09190611d43565b60405180910390f35b610401610f5b565b60405161040e9190611e73565b60405180910390f35b610431600480360381019061042c9190611aa7565b610f61565b005b61044d60048036038101906104489190611aa7565b61104c565b005b61046960048036038101906104649190611b4d565b611088565b6040516104769190611d9b565b60405180910390f35b61049960048036038101906104949190611aa7565b611155565b6040516104a69190611d5e565b60405180910390f35b6104c960048036038101906104c49190611aa7565b6111c3565b005b6104e560048036038101906104e09190611aa7565b611259565b005b61050160048036038101906104fc9190611b89565b6113c1565b005b61051d60048036038101906105189190611b4d565b611411565b005b61053960048036038101906105349190611aa7565b6115fb565b005b61055560048036038101906105509190611aa7565b611673565b6040516105629190611e73565b60405180910390f35b61058560048036038101906105809190611b4d565b611693565b6040516105929190611e73565b60405180910390f35b6105b560048036038101906105b09190611b4d565b6116c9565b6040516105c29190611e73565b60405180910390f35b6105e560048036038101906105e09190611a12565b6116fe565b005b80600260008481526020019081526020016000206006016000600260008681526020019081526020016000206005016000815480929190600101919050558152602001908152602001600020600001908051906020019061064992919061184d565b505050565b600260008281526020019081526020016000206003016000815480929190600101919050555050565b60006002600083815260200190815260200160002060040160009054906101000a900460ff169050919050565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610738576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072f90611e33565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156107c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107be90611e53565b60405180910390fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600060026000858152602001908152602001600020600601600084815260200190815260200160002060010160008381526020019081526020016000205490509392505050565b60003360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610900576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f790611e33565b60405180910390fd5b600083519050600160008154809291906001019190505550600060026000600154815260200190815260200160002090508581600001908051906020019061094992919061184d565b504281600101819055506000816003018190555060018160040160006101000a81548160ff02191690831515021790555060005b828110156109b1576109a460015487838151811061099757fe5b60200260200101516105e7565b808060010191505061097d565b503360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600154935050505092915050565b600080600260008681526020019081526020016000206006016000858152602001908152602001600020600101600084815260200190815260200160002054905060006064820290506000600260008881526020019081526020016000206003015490506000811415610adb5760009350505050610aeb565b808281610ae457fe5b0493505050505b9392505050565b600060026000838152602001908152602001600020600501549050919050565b6060600260008381526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bbe5780601f10610b9357610100808354040283529160200191610bbe565b820191906000526020600020905b815481529060010190602001808311610ba157829003601f168201915b50505050509050919050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c765780601f10610c4b57610100808354040283529160200191610c76565b820191906000526020600020905b815481529060010190602001808311610c5957829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154908060090154905087565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610d45576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3c90611e33565b60405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b6002600084815260200190815260200160002060080180549050811015610f32576000600260008581526020019081526020016000206006016000600260008781526020019081526020016000206008018481548110610e5b57fe5b906000526020600020015481526020019081526020016000206002015490506000821415610ed157809250600260008581526020019081526020016000206008018281548110610ea757fe5b90600052602060002001546002600086815260200190815260200160002060090181905550610f24565b82811115610f2357809250600260008581526020019081526020016000206008018281548110610efd57fe5b906000526020600020015460026000868152602001908152602001600020600901819055505b5b508080600101915050610dff565b505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610ff5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fec90611e33565b60405180910390fd5b60006002600084815260200190815260200160002060040160006101000a81548160ff021916908315150217905550426002600084815260200190815260200160002060020181905550611048826111c3565b5050565b60005b6002600083815260200190815260200160002060050154811015611084576110778282611411565b808060010191505061104f565b5050565b60606002600084815260200190815260200160002060060160008381526020019081526020016000206000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111485780601f1061111d57610100808354040283529160200191611148565b820191906000526020600020905b81548152906001019060200180831161112b57829003601f168201915b5050505050905092915050565b6060600260008381526020019081526020016000206008018054806020026020016040519081016040528092919081815260200182805480156111b757602002820191906000526020600020905b8154815260200190600101908083116111a3575b50505050509050919050565b6111cc8161104c565b6111d581611259565b6111de81610df7565b60016002600083815260200190815260200160002060080180549050111561120e5761120981610df7565b611256565b6002600082815260200190815260200160002060080160008154811061123057fe5b906000526020600020015460026000838152602001908152602001600020600901819055505b50565b6000805b60026000848152602001908152602001600020600501548110156113bc57600260008481526020019081526020016000206006016000828152602001908152602001600020600301548214156112ef57600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150556113af565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301548210156113ae5760026000848152602001908152602001600020600801600061134391906118cd565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301549150600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150555b5b808060010191505061125d565b505050565b600260008481526020019081526020016000206006016000838152602001908152602001600020600101600082815260200190815260200160002060008154809291906001019190505550505050565b600060026000848152602001908152602001600020600301541415611465576000600260008481526020019081526020016000206006016000838152602001908152602001600020600301819055506115f7565b6000600690505b603260026000858152602001908152602001600020600601600084815260200190815260200160002060020154116115f5573073ffffffffffffffffffffffffffffffffffffffff16633a0b35b78484846040518463ffffffff1660e01b81526004016114db93929190611e8e565b60206040518083038186803b1580156114f357600080fd5b505afa158015611507573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061152b9190611ad0565b600260008581526020019081526020016000206006016000848152602001908152602001600020600201540160026000858152602001908152602001600020600601600084815260200190815260200160002060020181905550603260026000858152602001908152602001600020600601600084815260200190815260200160002060020154106115e75780600260008581526020019081526020016000206006016000848152602001908152602001600020600301819055505b80806001900391505061146c565b505b5050565b60016002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506116708161064e565b50565b600060026000838152602001908152602001600020600901549050919050565b60006002600084815260200190815260200160002060080182815481106116b657fe5b9060005260206000200154905092915050565b600060026000848152602001908152602001600020600601600083815260200190815260200160002060030154905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461175657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561179057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061188e57805160ff19168380011785556118bc565b828001600101855582156118bc579182015b828111156118bb5782518255916020019190600101906118a0565b5b5090506118c991906118ee565b5090565b50805460008255906000526020600020908101906118eb91906118ee565b50565b5b808211156119075760008160009055506001016118ef565b5090565b60008135905061191a81612036565b92915050565b600082601f83011261193157600080fd5b813561194461193f82611ef2565b611ec5565b9150818183526020840193506020810190508360005b8381101561198a57813586016119708882611994565b84526020840193506020830192505060018101905061195a565b5050505092915050565b600082601f8301126119a557600080fd5b81356119b86119b382611f1a565b611ec5565b915080825260208301602083018583830111156119d457600080fd5b6119df838284611fe3565b50505092915050565b6000813590506119f78161204d565b92915050565b600081519050611a0c8161204d565b92915050565b600060208284031215611a2457600080fd5b6000611a328482850161190b565b91505092915050565b60008060408385031215611a4e57600080fd5b600083013567ffffffffffffffff811115611a6857600080fd5b611a7485828601611994565b925050602083013567ffffffffffffffff811115611a9157600080fd5b611a9d85828601611920565b9150509250929050565b600060208284031215611ab957600080fd5b6000611ac7848285016119e8565b91505092915050565b600060208284031215611ae257600080fd5b6000611af0848285016119fd565b91505092915050565b60008060408385031215611b0c57600080fd5b6000611b1a858286016119e8565b925050602083013567ffffffffffffffff811115611b3757600080fd5b611b4385828601611994565b9150509250929050565b60008060408385031215611b6057600080fd5b6000611b6e858286016119e8565b9250506020611b7f858286016119e8565b9150509250929050565b600080600060608486031215611b9e57600080fd5b6000611bac868287016119e8565b9350506020611bbd868287016119e8565b9250506040611bce868287016119e8565b9150509250925092565b6000611be48383611d25565b60208301905092915050565b611bf981611f9b565b82525050565b6000611c0a82611f56565b611c148185611f79565b9350611c1f83611f46565b8060005b83811015611c50578151611c378882611bd8565b9750611c4283611f6c565b925050600181019050611c23565b5085935050505092915050565b611c6681611fad565b82525050565b6000611c7782611f61565b611c818185611f8a565b9350611c91818560208601611ff2565b611c9a81612025565b840191505092915050565b6000611cb2601483611f8a565b91507f596f7520617265206e6f7420616e2061646d696e0000000000000000000000006000830152602082019050919050565b6000611cf2601f83611f8a565b91507f43616e6e6f742072656d6f7665206f776e65722066726f6d2061646d696e73006000830152602082019050919050565b611d2e81611fd9565b82525050565b611d3d81611fd9565b82525050565b6000602082019050611d586000830184611bf0565b92915050565b60006020820190508181036000830152611d788184611bff565b905092915050565b6000602082019050611d956000830184611c5d565b92915050565b60006020820190508181036000830152611db58184611c6c565b905092915050565b600060e0820190508181036000830152611dd7818a611c6c565b9050611de66020830189611d34565b611df36040830188611d34565b611e006060830187611d34565b611e0d6080830186611c5d565b611e1a60a0830185611d34565b611e2760c0830184611d34565b98975050505050505050565b60006020820190508181036000830152611e4c81611ca5565b9050919050565b60006020820190508181036000830152611e6c81611ce5565b9050919050565b6000602082019050611e886000830184611d34565b92915050565b6000606082019050611ea36000830186611d34565b611eb06020830185611d34565b611ebd6040830184611d34565b949350505050565b6000604051905081810181811067ffffffffffffffff82111715611ee857600080fd5b8060405250919050565b600067ffffffffffffffff821115611f0957600080fd5b602082029050602081019050919050565b600067ffffffffffffffff821115611f3157600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611fa682611fb9565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612010578082015181840152602081019050611ff5565b8381111561201f576000848401525b50505050565b6000601f19601f8301169050919050565b61203f81611f9b565b811461204a57600080fd5b50565b61205681611fd9565b811461206157600080fd5b5056fea2646970667358221220226da31a09d87577162a4a05daa9e0c470b324c818c92a341606db12f9d4a19e64736f6c63430007000033",
  "immutableReferences": {},
  "sourceMap": "185:3077:2:-:0;;;;;;;;;;;;;552:10:5;544:5;;:18;;;;;;;;;;;;;;;;;;212:4:1;193:9;:16;203:5;;;;;;;;;;;193:16;;;;;;;;;;;;;;;;:23;;;;;;;;;;;;;;;;;;185:3077:2;;;;;;",
  "deployedSourceMap": "185:3077:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2170:191:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;342:104:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;609:125:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1166:193:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;778:190:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1486:678:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1162:406:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;635:137;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;471:132:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;717:43:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;;:::i;:::-;;;;;;;;1044:116;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1365:115;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2604:656:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;279:20:5;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;685:26:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;245:220:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1772:203;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;452:177:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1181:136:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1323:443;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1981:617;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;179:157:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1574:738;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;873:146:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;740:127;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1025:150;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;974:182:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;907:188:5;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2170:191:1;2340:14;2257:9;:22;2267:11;2257:22;;;;;;;;;;;:33;;:75;2291:9;:22;2301:11;2291:22;;;;;;;;;;;:38;;;:40;;;;;;;;;;;;2257:75;;;;;;;;;;;:80;;:97;;;;;;;;;;;;:::i;:::-;;2170:191;;:::o;342:104:0:-;402:9;:22;412:11;402:22;;;;;;;;;;;:34;;;:37;;;;;;;;;;;;;342:104;:::o;609:125:2:-;675:4;698:9;:22;708:11;698:22;;;;;;;;;;;:29;;;;;;;;;;;;691:36;;609:125;;;:::o;1166:193:1:-;1226:10;991:4;964:31;;:9;:23;974:12;964:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;955:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1270:5:::1;::::0;::::1;;;;;;;;1256:19;;:10;:19;;;;1248:63;;;;;;;;;;;;:::i;:::-;;;;;;;;;1347:5;1321:9;:23;1331:12;1321:23;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;;;;;;;1166:193:::0;;:::o;778:190:0:-;876:4;899:9;:22;909:11;899:22;;;;;;;;;;;:33;;:47;933:12;899:47;;;;;;;;;;;:53;;:62;953:7;899:62;;;;;;;;;;;;892:69;;778:190;;;;;:::o;1486:678:1:-;1604:4;1583:10;991:4;964:31;;:9;:23;974:12;964:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;955:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1620:17:::1;1640:16;:23;1620:43;;1673:14;;:16;;;;;;;;;;;;;1699:25;1727:9;:25;1737:14;;1727:25;;;;;;;;;;;1699:53;;1779:6;1762:8;:14;;:23;;;;;;;;;;;;:::i;:::-;;1819:15;1795:8;:21;;:39;;;;1867:1;1844:8;:20;;:24;;;;1896:4;1878:8;:15;;;:22;;;;;;;;;;;;;;;;;;1916:6;1911:114;1932:12;1928:1;:16;1911:114;;;1965:49;1978:14;;1994:16;2011:1;1994:19;;;;;;;;;;;;;;1965:12;:49::i;:::-;1946:3;;;;;;;1911:114;;;;2069:10;2035:15;:31;2051:14;;2035:31;;;;;;;;;;;;:44;;;;;;;;;;;;;;;;;;2124:1;2090:18;:30;2109:10;2090:30;;;;;;;;;;;;;;;;:35;;;;;;;;;;;2143:14;;2136:21;;;;1486:678:::0;;;;;:::o;1162:406:0:-;1268:4;1283:9;1295;:22;1305:11;1295:22;;;;;;;;;;;:33;;:47;1329:12;1295:47;;;;;;;;;;;:53;;:60;1349:5;1295:60;;;;;;;;;;;;1283:72;;1365:15;1390:3;1383:4;:10;1365:28;;1403:16;1422:9;:22;1432:11;1422:22;;;;;;;;;;;:34;;;1403:53;;1485:1;1470:11;:16;1466:55;;;1509:1;1502:8;;;;;;;1466:55;1550:11;1537:10;:24;;;;;;1530:31;;;;;1162:406;;;;;;:::o;635:137::-;704:4;727:9;:22;737:11;727:22;;;;;;;;;;;:38;;;720:45;;635:137;;;:::o;471:132:2:-;536:13;568:9;:22;578:11;568:22;;;;;;;;;;;:28;;561:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;471:132;;;:::o;717:43:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1044:116::-;1101:10;991:4;964:31;;:9;:23;974:12;964:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;955:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1149:4:::1;1123:9;:23;1133:12;1123:23;;;;;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;1044:116:::0;;:::o;1365:115::-;1429:4;1451:9;:22;1461:11;1451:22;;;;;;;;;;;;;;;;;;;;;;;;;1444:29;;1365:115;;;:::o;2604:656:2:-;2672:18;2704:6;2713:1;2704:10;;2700:554;2720:9;:22;2730:11;2720:22;;;;;;;;;;;:30;;:37;;;;2716:1;:41;2700:554;;;2777:19;2799:9;:22;2809:11;2799:22;;;;;;;;;;;:33;;:68;2833:9;:22;2843:11;2833:22;;;;;;;;;;;:30;;2864:1;2833:33;;;;;;;;;;;;;;;;2799:68;;;;;;;;;;;:76;;;2777:98;;2897:1;2892;:6;2889:355;;;2933:14;2917:30;;2997:9;:22;3007:11;2997:22;;;;;;;;;;;:30;;3028:1;2997:33;;;;;;;;;;;;;;;;2965:9;:22;2975:11;2965:22;;;;;;;;;;;:29;;:65;;;;2889:355;;;3084:13;3067:14;:30;3063:181;;;3132:14;3116:30;;3196:9;:22;3206:11;3196:22;;;;;;;;;;;:30;;3227:1;3196:33;;;;;;;;;;;;;;;;3164:9;:22;3174:11;3164:22;;;;;;;;;;;:29;;:65;;;;3063:181;2889:355;2700:554;2759:3;;;;;;;2700:554;;;;2604:656;;:::o;279:20:5:-;;;;;;;;;;;;:::o;685:26:1:-;;;;:::o;245:220:2:-;301:10;991:4:1;964:31;;:9;:23;974:12;964:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;955:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;355:5:2::1;323:9;:22;333:11;323:22;;;;;;;;;;;:29;;;:37;;;;;;;;;;;;;;;;;;407:15;370:9;:22;380:11;370:22;;;;;;;;;;;:34;;:52;;;;432:26;446:11;432:13;:26::i;:::-;245:220:::0;;:::o;1772:203::-;1850:6;1845:124;1866:9;:22;1876:11;1866:22;;;;;;;;;;;:38;;;1862:1;:42;1845:124;;;1924:34;1943:11;1956:1;1924:18;:34::i;:::-;1906:3;;;;;;;1845:124;;;;1772:203;:::o;452:177:0:-;538:13;570:9;:22;580:11;570:22;;;;;;;;;;;:33;;:47;604:12;570:47;;;;;;;;;;;:52;;563:59;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;452:177;;;;:::o;1181:136:2:-;1249:13;1280:9;:22;1290:11;1280:22;;;;;;;;;;;:30;;1273:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1181:136;;;:::o;1323:443::-;1381:41;1410:11;1381:28;:41::i;:::-;1433:37;1458:11;1433:24;:37::i;:::-;1481:36;1505:11;1481:23;:36::i;:::-;1570:1;1530:9;:22;1540:11;1530:22;;;;;;;;;;;:30;;:37;;;;:41;1527:233;;;1586:36;1610:11;1586:23;:36::i;:::-;1527:233;;;1716:9;:22;1726:11;1716:22;;;;;;;;;;;:30;;1747:1;1716:33;;;;;;;;;;;;;;;;1684:9;:22;1694:11;1684:22;;;;;;;;;;;:29;;:65;;;;1527:233;1323:443;:::o;1981:617::-;2050:15;2083:6;2079:513;2099:9;:22;2109:11;2099:22;;;;;;;;;;;:38;;;2095:1;:42;2079:513;;;2174:9;:22;2184:11;2174:22;;;;;;;;;;;:33;;:36;2208:1;2174:36;;;;;;;;;;;:48;;;2160:10;:62;2157:425;;;2241:9;:22;2251:11;2241:22;;;;;;;;;;;:30;;2277:1;2241:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2157:425;;;2328:9;:22;2338:11;2328:22;;;;;;;;;;;:33;;:36;2362:1;2328:36;;;;;;;;;;;:48;;;2315:10;:61;2312:270;;;2402:9;:22;2412:11;2402:22;;;;;;;;;;;:30;;;2395:37;;;;:::i;:::-;2463:9;:22;2473:11;2463:22;;;;;;;;;;;:33;;:36;2497:1;2463:36;;;;;;;;;;;:48;;;2450:61;;2529:9;:22;2539:11;2529:22;;;;;;;;;;;:30;;2565:1;2529:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2312:270;2157:425;2139:3;;;;;;;2079:513;;;;1981:617;;:::o;179:157:0:-;264:9;:22;274:11;264:22;;;;;;;;;;;:33;;:47;298:12;264:47;;;;;;;;;;;:53;;:62;318:7;264:62;;;;;;;;;;;;:65;;;;;;;;;;;;;179:157;;;:::o;1574:738::-;1698:1;1660:9;:22;1670:11;1660:22;;;;;;;;;;;:34;;;:39;1656:650;;;1777:1;1715:9;:22;1725:11;1715:22;;;;;;;;;;;:33;;:47;1749:12;1715:47;;;;;;;;;;;:59;;:63;;;;1656:650;;;1822:6;1831:1;1822:10;;1817:479;1893:2;1834:9;:22;1844:11;1834:22;;;;;;;;;;;:33;;:47;1868:12;1834:47;;;;;;;;;;;:55;;;:61;1817:479;;2035:4;:30;;;2066:11;2079:12;2093:1;2035:60;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1977:9;:22;1987:11;1977:22;;;;;;;;;;;:33;;:47;2011:12;1977:47;;;;;;;;;;;:55;;;:118;1919:9;:22;1929:11;1919:22;;;;;;;;;;;:33;;:47;1953:12;1919:47;;;;;;;;;;;:55;;:176;;;;2175:2;2116:9;:22;2126:11;2116:22;;;;;;;;;;;:33;;:47;2150:12;2116:47;;;;;;;;;;;:55;;;:61;2113:169;;2262:1;2200:9;:22;2210:11;2200:22;;;;;;;;;;;:33;;:47;2234:12;2200:47;;;;;;;;;;;:59;;:63;;;;2113:169;1897:3;;;;;;;;1817:479;;;;1656:650;1574:738;;:::o;873:146:2:-;970:4;926:9;:22;936:11;926:22;;;;;;;;;;;:29;;:41;956:10;926:41;;;;;;;;;;;;;;;;:48;;;;;;;;;;;;;;;;;;984:28;1000:11;984:15;:28::i;:::-;873:146;:::o;740:127::-;808:4;831:9;:22;841:11;831:22;;;;;;;;;;;:29;;;824:36;;740:127;;;:::o;1025:150::-;1108:4;1130:9;:22;1140:11;1130:22;;;;;;;;;;;:30;;1161:6;1130:38;;;;;;;;;;;;;;;;1123:45;;1025:150;;;;:::o;974:182:0:-;1067:4;1090:9;:22;1100:11;1090:22;;;;;;;;;;;:33;;:47;1124:12;1090:47;;;;;;;;;;;:59;;;1083:66;;974:182;;;;:::o;907:188:5:-;711:5;;;;;;;;;;697:19;;:10;:19;;;689:28;;;;;;1007:1:::1;987:22;;:8;:22;;;;979:31;;;::::0;::::1;;1053:8;1025:37;;1046:5;::::0;::::1;;;;;;;;1025:37;;;;;;;;;;;;1080:8;1072:5;::::0;:16:::1;;;;;;;;;;;;;;;;;;907:188:::0;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;5:130::-;;85:6;72:20;63:29;;97:33;124:5;97:33;:::i;:::-;57:78;;;;:::o;159:708::-;;286:3;279:4;271:6;267:17;263:27;253:2;;304:1;301;294:12;253:2;341:6;328:20;363:90;378:74;445:6;378:74;:::i;:::-;363:90;:::i;:::-;354:99;;470:5;495:6;488:5;481:21;525:4;517:6;513:17;503:27;;547:4;542:3;538:14;531:21;;600:6;633:1;618:243;643:6;640:1;637:13;618:243;;;726:3;713:17;705:6;701:30;750:47;793:3;781:10;750:47;:::i;:::-;745:3;738:60;821:4;816:3;812:14;805:21;;849:4;844:3;840:14;833:21;;675:186;665:1;662;658:9;653:14;;618:243;;;622:14;246:621;;;;;;;:::o;876:442::-;;978:3;971:4;963:6;959:17;955:27;945:2;;996:1;993;986:12;945:2;1033:6;1020:20;1055:65;1070:49;1112:6;1070:49;:::i;:::-;1055:65;:::i;:::-;1046:74;;1140:6;1133:5;1126:21;1176:4;1168:6;1164:17;1209:4;1202:5;1198:16;1244:3;1235:6;1230:3;1226:16;1223:25;1220:2;;;1261:1;1258;1251:12;1220:2;1271:41;1305:6;1300:3;1295;1271:41;:::i;:::-;938:380;;;;;;;:::o;1326:130::-;;1406:6;1393:20;1384:29;;1418:33;1445:5;1418:33;:::i;:::-;1378:78;;;;:::o;1463:134::-;;1547:6;1541:13;1532:22;;1559:33;1586:5;1559:33;:::i;:::-;1526:71;;;;:::o;1604:241::-;;1708:2;1696:9;1687:7;1683:23;1679:32;1676:2;;;1724:1;1721;1714:12;1676:2;1759:1;1776:53;1821:7;1812:6;1801:9;1797:22;1776:53;:::i;:::-;1766:63;;1738:97;1670:175;;;;:::o;1852:628::-;;;2018:2;2006:9;1997:7;1993:23;1989:32;1986:2;;;2034:1;2031;2024:12;1986:2;2097:1;2086:9;2082:17;2069:31;2120:18;2112:6;2109:30;2106:2;;;2152:1;2149;2142:12;2106:2;2172:63;2227:7;2218:6;2207:9;2203:22;2172:63;:::i;:::-;2162:73;;2048:193;2300:2;2289:9;2285:18;2272:32;2324:18;2316:6;2313:30;2310:2;;;2356:1;2353;2346:12;2310:2;2376:88;2456:7;2447:6;2436:9;2432:22;2376:88;:::i;:::-;2366:98;;2251:219;1980:500;;;;;:::o;2487:241::-;;2591:2;2579:9;2570:7;2566:23;2562:32;2559:2;;;2607:1;2604;2597:12;2559:2;2642:1;2659:53;2704:7;2695:6;2684:9;2680:22;2659:53;:::i;:::-;2649:63;;2621:97;2553:175;;;;:::o;2735:263::-;;2850:2;2838:9;2829:7;2825:23;2821:32;2818:2;;;2866:1;2863;2856:12;2818:2;2901:1;2918:64;2974:7;2965:6;2954:9;2950:22;2918:64;:::i;:::-;2908:74;;2880:108;2812:186;;;;:::o;3005:472::-;;;3136:2;3124:9;3115:7;3111:23;3107:32;3104:2;;;3152:1;3149;3142:12;3104:2;3187:1;3204:53;3249:7;3240:6;3229:9;3225:22;3204:53;:::i;:::-;3194:63;;3166:97;3322:2;3311:9;3307:18;3294:32;3346:18;3338:6;3335:30;3332:2;;;3378:1;3375;3368:12;3332:2;3398:63;3453:7;3444:6;3433:9;3429:22;3398:63;:::i;:::-;3388:73;;3273:194;3098:379;;;;;:::o;3484:366::-;;;3605:2;3593:9;3584:7;3580:23;3576:32;3573:2;;;3621:1;3618;3611:12;3573:2;3656:1;3673:53;3718:7;3709:6;3698:9;3694:22;3673:53;:::i;:::-;3663:63;;3635:97;3763:2;3781:53;3826:7;3817:6;3806:9;3802:22;3781:53;:::i;:::-;3771:63;;3742:98;3567:283;;;;;:::o;3857:491::-;;;;3995:2;3983:9;3974:7;3970:23;3966:32;3963:2;;;4011:1;4008;4001:12;3963:2;4046:1;4063:53;4108:7;4099:6;4088:9;4084:22;4063:53;:::i;:::-;4053:63;;4025:97;4153:2;4171:53;4216:7;4207:6;4196:9;4192:22;4171:53;:::i;:::-;4161:63;;4132:98;4261:2;4279:53;4324:7;4315:6;4304:9;4300:22;4279:53;:::i;:::-;4269:63;;4240:98;3957:391;;;;;:::o;4356:173::-;;4443:46;4485:3;4477:6;4443:46;:::i;:::-;4518:4;4513:3;4509:14;4495:28;;4436:93;;;;:::o;4537:113::-;4620:24;4638:5;4620:24;:::i;:::-;4615:3;4608:37;4602:48;;:::o;4688:690::-;;4833:54;4881:5;4833:54;:::i;:::-;4900:86;4979:6;4974:3;4900:86;:::i;:::-;4893:93;;5007:56;5057:5;5007:56;:::i;:::-;5083:7;5111:1;5096:260;5121:6;5118:1;5115:13;5096:260;;;5188:6;5182:13;5209:63;5268:3;5253:13;5209:63;:::i;:::-;5202:70;;5289:60;5342:6;5289:60;:::i;:::-;5279:70;;5153:203;5143:1;5140;5136:9;5131:14;;5096:260;;;5100:14;5369:3;5362:10;;4812:566;;;;;;;:::o;5386:104::-;5463:21;5478:5;5463:21;:::i;:::-;5458:3;5451:34;5445:45;;:::o;5497:347::-;;5609:39;5642:5;5609:39;:::i;:::-;5660:71;5724:6;5719:3;5660:71;:::i;:::-;5653:78;;5736:52;5781:6;5776:3;5769:4;5762:5;5758:16;5736:52;:::i;:::-;5809:29;5831:6;5809:29;:::i;:::-;5804:3;5800:39;5793:46;;5589:255;;;;;:::o;5852:320::-;;6012:67;6076:2;6071:3;6012:67;:::i;:::-;6005:74;;6112:22;6108:1;6103:3;6099:11;6092:43;6163:2;6158:3;6154:12;6147:19;;5998:174;;;:::o;6181:331::-;;6341:67;6405:2;6400:3;6341:67;:::i;:::-;6334:74;;6441:33;6437:1;6432:3;6428:11;6421:54;6503:2;6498:3;6494:12;6487:19;;6327:185;;;:::o;6520:103::-;6593:24;6611:5;6593:24;:::i;:::-;6588:3;6581:37;6575:48;;:::o;6630:113::-;6713:24;6731:5;6713:24;:::i;:::-;6708:3;6701:37;6695:48;;:::o;6750:222::-;;6877:2;6866:9;6862:18;6854:26;;6891:71;6959:1;6948:9;6944:17;6935:6;6891:71;:::i;:::-;6848:124;;;;:::o;6979:370::-;;7156:2;7145:9;7141:18;7133:26;;7206:9;7200:4;7196:20;7192:1;7181:9;7177:17;7170:47;7231:108;7334:4;7325:6;7231:108;:::i;:::-;7223:116;;7127:222;;;;:::o;7356:210::-;;7477:2;7466:9;7462:18;7454:26;;7491:65;7553:1;7542:9;7538:17;7529:6;7491:65;:::i;:::-;7448:118;;;;:::o;7573:310::-;;7720:2;7709:9;7705:18;7697:26;;7770:9;7764:4;7760:20;7756:1;7745:9;7741:17;7734:47;7795:78;7868:4;7859:6;7795:78;:::i;:::-;7787:86;;7691:192;;;;:::o;7890:968::-;;8199:3;8188:9;8184:19;8176:27;;8250:9;8244:4;8240:20;8236:1;8225:9;8221:17;8214:47;8275:78;8348:4;8339:6;8275:78;:::i;:::-;8267:86;;8364:72;8432:2;8421:9;8417:18;8408:6;8364:72;:::i;:::-;8447;8515:2;8504:9;8500:18;8491:6;8447:72;:::i;:::-;8530;8598:2;8587:9;8583:18;8574:6;8530:72;:::i;:::-;8613:67;8675:3;8664:9;8660:19;8651:6;8613:67;:::i;:::-;8691:73;8759:3;8748:9;8744:19;8735:6;8691:73;:::i;:::-;8775;8843:3;8832:9;8828:19;8819:6;8775:73;:::i;:::-;8170:688;;;;;;;;;;:::o;8865:416::-;;9065:2;9054:9;9050:18;9042:26;;9115:9;9109:4;9105:20;9101:1;9090:9;9086:17;9079:47;9140:131;9266:4;9140:131;:::i;:::-;9132:139;;9036:245;;;:::o;9288:416::-;;9488:2;9477:9;9473:18;9465:26;;9538:9;9532:4;9528:20;9524:1;9513:9;9509:17;9502:47;9563:131;9689:4;9563:131;:::i;:::-;9555:139;;9459:245;;;:::o;9711:222::-;;9838:2;9827:9;9823:18;9815:26;;9852:71;9920:1;9909:9;9905:17;9896:6;9852:71;:::i;:::-;9809:124;;;;:::o;9940:444::-;;10123:2;10112:9;10108:18;10100:26;;10137:71;10205:1;10194:9;10190:17;10181:6;10137:71;:::i;:::-;10219:72;10287:2;10276:9;10272:18;10263:6;10219:72;:::i;:::-;10302;10370:2;10359:9;10355:18;10346:6;10302:72;:::i;:::-;10094:290;;;;;;:::o;10391:256::-;;10453:2;10447:9;10437:19;;10491:4;10483:6;10479:17;10590:6;10578:10;10575:22;10554:18;10542:10;10539:34;10536:62;10533:2;;;10611:1;10608;10601:12;10533:2;10631:10;10627:2;10620:22;10431:216;;;;:::o;10654:314::-;;10823:18;10815:6;10812:30;10809:2;;;10855:1;10852;10845:12;10809:2;10890:4;10882:6;10878:17;10870:25;;10953:4;10947;10943:15;10935:23;;10746:222;;;:::o;10975:322::-;;11119:18;11111:6;11108:30;11105:2;;;11151:1;11148;11141:12;11105:2;11218:4;11214:9;11207:4;11199:6;11195:17;11191:33;11183:41;;11282:4;11276;11272:15;11264:23;;11042:255;;;:::o;11304:151::-;;11390:3;11382:11;;11428:4;11423:3;11419:14;11411:22;;11376:79;;;:::o;11462:137::-;;11571:5;11565:12;11555:22;;11536:63;;;:::o;11606:122::-;;11700:5;11694:12;11684:22;;11665:63;;;:::o;11735:108::-;;11833:4;11828:3;11824:14;11816:22;;11810:33;;;:::o;11851:178::-;;11981:6;11976:3;11969:19;12018:4;12013:3;12009:14;11994:29;;11962:67;;;;:::o;12038:163::-;;12153:6;12148:3;12141:19;12190:4;12185:3;12181:14;12166:29;;12134:67;;;;:::o;12209:91::-;;12271:24;12289:5;12271:24;:::i;:::-;12260:35;;12254:46;;;:::o;12307:85::-;;12380:5;12373:13;12366:21;12355:32;;12349:43;;;:::o;12399:121::-;;12472:42;12465:5;12461:54;12450:65;;12444:76;;;:::o;12527:72::-;;12589:5;12578:16;;12572:27;;;:::o;12607:145::-;12688:6;12683:3;12678;12665:30;12744:1;12735:6;12730:3;12726:16;12719:27;12658:94;;;:::o;12761:268::-;12826:1;12833:101;12847:6;12844:1;12841:13;12833:101;;;12923:1;12918:3;12914:11;12908:18;12904:1;12899:3;12895:11;12888:39;12869:2;12866:1;12862:10;12857:15;;12833:101;;;12949:6;12946:1;12943:13;12940:2;;;13014:1;13005:6;13000:3;12996:16;12989:27;12940:2;12810:219;;;;:::o;13037:97::-;;13125:2;13121:7;13116:2;13109:5;13105:14;13101:28;13091:38;;13085:49;;;:::o;13142:117::-;13211:24;13229:5;13211:24;:::i;:::-;13204:5;13201:35;13191:2;;13250:1;13247;13240:12;13191:2;13185:74;:::o;13266:117::-;13335:24;13353:5;13335:24;:::i;:::-;13328:5;13325:35;13315:2;;13374:1;13371;13364:12;13315:2;13309:74;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >= 0.7.0 < 0.8.0;\npragma experimental ABIEncoderV2;\n\nimport './Candidate.sol';\nimport \"./ownable.sol\";\nimport \"./ElectionFactory.sol\";\n\n\ncontract ElectionHelper is ElectionFactory, Candidate {\n    function endElection(uint _electionId) external isAdmin(msg.sender) {\n        elections[_electionId].isOpen = false;\n        elections[_electionId].closingDate = block.timestamp;\n        computeResult(_electionId);\n    }\n\n    function getElectionTitle(uint _electionId) public view returns (string memory) {\n        return elections[_electionId].title;\n    }\n\n    function getElectionStatus(uint _electionId) public view returns (bool) {\n        return elections[_electionId].isOpen;\n    }\n\n    function getElectionWinner(uint _electionId) external view returns (uint) {\n        return elections[_electionId].winner;\n    }\n\n    function addVoter(uint _electionId) public {\n        elections[_electionId].voters[msg.sender] = true;\n        incrementVoters(_electionId);\n    }\n\n    function getOneFirstRoundWinner(uint _electionId, uint _index) public view returns(uint){\n        return elections[_electionId].winners[_index];\n    }\n\n    function getFirstRoundWinners(uint _electionId) public view returns(uint[] memory){\n        return elections[_electionId].winners;\n    }\n\n    function computeResult(uint _electionId) public {\n        computeCandidatesAverageNote(_electionId);\n\n        computeFirstRoundWinners(_electionId);\n\n        computeFinalRoundWinner(_electionId);\n        if(elections[_electionId].winners.length > 1){\n            computeFinalRoundWinner(_electionId);\n        }\n        else { // Default case if tie\n            elections[_electionId].winner = elections[_electionId].winners[0];\n        }\n    }\n\n    function computeCandidatesAverageNote(uint _electionId) public {\n        for (uint i = 0; i < elections[_electionId].candidatesCount; i++){\n            computeAverageNote(_electionId, i);\n        }\n    }\n\n    function computeFirstRoundWinners(uint _electionId) public {\n        uint higherNote = 0;\n        for(uint i = 0; i < elections[_electionId].candidatesCount; i++){\n            if(higherNote == elections[_electionId].candidates[i].averageNote){\n                elections[_electionId].winners.push(i);\n            }\n            else if(higherNote < elections[_electionId].candidates[i].averageNote){\n                delete elections[_electionId].winners;\n                higherNote = elections[_electionId].candidates[i].averageNote;\n                elections[_electionId].winners.push(i);\n            }\n        }\n    }\n\n    function computeFinalRoundWinner(uint _electionId) public {\n        uint higherPercent;\n        for(uint i = 0; i < elections[_electionId].winners.length; i++){\n            uint currentPercent = elections[_electionId].candidates[elections[_electionId].winners[i]].percent;\n            if(i == 0){\n                higherPercent = currentPercent;\n                elections[_electionId].winner = elections[_electionId].winners[i];\n            }\n            else if (currentPercent > higherPercent){\n                higherPercent = currentPercent;\n                elections[_electionId].winner = elections[_electionId].winners[i];\n            }\n        }\n    }\n}\n",
  "sourcePath": "C:\\Users\\acham\\Applications\\ESGI\\Blockchain\\Projet\\Voting-SmartContract-Truffled\\contracts\\ElectionHelper.sol",
  "ast": {
    "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol",
    "exportedSymbols": {
      "ElectionHelper": [
        858
      ]
    },
    "id": 859,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 499,
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
        "id": 500,
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
        "id": 501,
        "nodeType": "ImportDirective",
        "scope": 859,
        "sourceUnit": 248,
        "src": "101:25:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol",
        "file": "./ownable.sol",
        "id": 502,
        "nodeType": "ImportDirective",
        "scope": 859,
        "sourceUnit": 1045,
        "src": "127:23:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol",
        "file": "./ElectionFactory.sol",
        "id": 503,
        "nodeType": "ImportDirective",
        "scope": 859,
        "sourceUnit": 498,
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
              "id": 504,
              "name": "ElectionFactory",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 497,
              "src": "212:15:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ElectionFactory_$497",
                "typeString": "contract ElectionFactory"
              }
            },
            "id": 505,
            "nodeType": "InheritanceSpecifier",
            "src": "212:15:2"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 506,
              "name": "Candidate",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 247,
              "src": "229:9:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Candidate_$247",
                "typeString": "contract Candidate"
              }
            },
            "id": 507,
            "nodeType": "InheritanceSpecifier",
            "src": "229:9:2"
          }
        ],
        "contractDependencies": [
          247,
          497,
          1044
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 858,
        "linearizedBaseContracts": [
          858,
          247,
          497,
          1044
        ],
        "name": "ElectionHelper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 535,
              "nodeType": "Block",
              "src": "313:152:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 521,
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
                          "id": 516,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 306,
                          "src": "323:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 518,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 517,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 509,
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
                          "typeIdentifier": "t_struct$_Election_$289_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 519,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "isOpen",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 273,
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
                      "id": 520,
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
                  "id": 522,
                  "nodeType": "ExpressionStatement",
                  "src": "323:37:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 529,
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
                          "id": 523,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 306,
                          "src": "370:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 525,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 524,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 509,
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
                          "typeIdentifier": "t_struct$_Election_$289_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 526,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "closingDate",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 269,
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
                        "id": 527,
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
                      "id": 528,
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
                  "id": 530,
                  "nodeType": "ExpressionStatement",
                  "src": "370:52:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 532,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 509,
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
                      "id": 531,
                      "name": "computeResult",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 670,
                      "src": "432:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 533,
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
                  "id": 534,
                  "nodeType": "ExpressionStatement",
                  "src": "432:26:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "9c98bcbb",
            "id": 536,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 512,
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
                    "id": 513,
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
                "id": 514,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 511,
                  "name": "isAdmin",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 333,
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
              "id": 510,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 509,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 536,
                  "src": "266:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 508,
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
              "id": 515,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "313:0:2"
            },
            "scope": 858,
            "src": "245:220:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 548,
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
                        "id": 543,
                        "name": "elections",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 306,
                        "src": "568:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                        }
                      },
                      "id": 545,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 544,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 538,
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
                        "typeIdentifier": "t_struct$_Election_$289_storage",
                        "typeString": "struct ElectionFactory.Election storage ref"
                      }
                    },
                    "id": 546,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "title",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 265,
                    "src": "568:28:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 542,
                  "id": 547,
                  "nodeType": "Return",
                  "src": "561:35:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "4d94fc6a",
            "id": 549,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getElectionTitle",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 539,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 538,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 549,
                  "src": "497:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 537,
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
              "id": 542,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 541,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 549,
                  "src": "536:13:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 540,
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
            "scope": 858,
            "src": "471:132:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 561,
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
                        "id": 556,
                        "name": "elections",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 306,
                        "src": "698:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                        }
                      },
                      "id": 558,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 557,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 551,
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
                        "typeIdentifier": "t_struct$_Election_$289_storage",
                        "typeString": "struct ElectionFactory.Election storage ref"
                      }
                    },
                    "id": 559,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "isOpen",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 273,
                    "src": "698:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 555,
                  "id": 560,
                  "nodeType": "Return",
                  "src": "691:36:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "24785b9e",
            "id": 562,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getElectionStatus",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 552,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 551,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 562,
                  "src": "636:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 550,
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
              "id": 555,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 554,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 562,
                  "src": "675:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 553,
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
            "scope": 858,
            "src": "609:125:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 574,
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
                        "id": 569,
                        "name": "elections",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 306,
                        "src": "831:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                        }
                      },
                      "id": 571,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 570,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 564,
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
                        "typeIdentifier": "t_struct$_Election_$289_storage",
                        "typeString": "struct ElectionFactory.Election storage ref"
                      }
                    },
                    "id": 572,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "winner",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 288,
                    "src": "831:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 568,
                  "id": 573,
                  "nodeType": "Return",
                  "src": "824:36:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "e62c6ac5",
            "id": 575,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getElectionWinner",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 565,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 564,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 575,
                  "src": "767:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 563,
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
              "id": 568,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 567,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 575,
                  "src": "808:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 566,
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
            "scope": 858,
            "src": "740:127:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 594,
              "nodeType": "Block",
              "src": "916:103:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 588,
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
                            "id": 580,
                            "name": "elections",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 306,
                            "src": "926:9:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                              "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                            }
                          },
                          "id": 582,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 581,
                            "name": "_electionId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 577,
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
                            "typeIdentifier": "t_struct$_Election_$289_storage",
                            "typeString": "struct ElectionFactory.Election storage ref"
                          }
                        },
                        "id": 583,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "voters",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 283,
                        "src": "926:29:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 586,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 584,
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
                        "id": 585,
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
                      "id": 587,
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
                  "id": 589,
                  "nodeType": "ExpressionStatement",
                  "src": "926:48:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 591,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 577,
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
                      "id": 590,
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
                    "id": 592,
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
                  "id": 593,
                  "nodeType": "ExpressionStatement",
                  "src": "984:28:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "d8f7a0bb",
            "id": 595,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addVoter",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 578,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 577,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 595,
                  "src": "891:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 576,
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
              "id": 579,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "916:0:2"
            },
            "scope": 858,
            "src": "873:146:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 611,
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
                          "id": 604,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 306,
                          "src": "1130:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 606,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 605,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 597,
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
                          "typeIdentifier": "t_struct$_Election_$289_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 607,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "winners",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 286,
                      "src": "1130:30:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 609,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 608,
                      "name": "_index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 599,
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
                  "functionReturnParameters": 603,
                  "id": 610,
                  "nodeType": "Return",
                  "src": "1123:45:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "e76f6b58",
            "id": 612,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getOneFirstRoundWinner",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 600,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 597,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 612,
                  "src": "1057:16:2",
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
                  "id": 599,
                  "mutability": "mutable",
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 612,
                  "src": "1075:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 598,
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
              "id": 603,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 602,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 612,
                  "src": "1108:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 601,
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
            "scope": 858,
            "src": "1025:150:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 625,
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
                        "id": 620,
                        "name": "elections",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 306,
                        "src": "1280:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                        }
                      },
                      "id": 622,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 621,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 614,
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
                        "typeIdentifier": "t_struct$_Election_$289_storage",
                        "typeString": "struct ElectionFactory.Election storage ref"
                      }
                    },
                    "id": 623,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "winners",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 286,
                    "src": "1280:30:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 619,
                  "id": 624,
                  "nodeType": "Return",
                  "src": "1273:37:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "b12b1a7d",
            "id": 626,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getFirstRoundWinners",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 615,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 614,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 626,
                  "src": "1211:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 613,
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
              "id": 619,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 618,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 626,
                  "src": "1249:13:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 616,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1249:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 617,
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
            "scope": 858,
            "src": "1181:136:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 669,
              "nodeType": "Block",
              "src": "1371:395:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 632,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 628,
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
                      "id": 631,
                      "name": "computeCandidatesAverageNote",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 696,
                      "src": "1381:28:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 633,
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
                  "id": 634,
                  "nodeType": "ExpressionStatement",
                  "src": "1381:41:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 636,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 628,
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
                      "id": 635,
                      "name": "computeFirstRoundWinners",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 775,
                      "src": "1433:24:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 637,
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
                  "id": 638,
                  "nodeType": "ExpressionStatement",
                  "src": "1433:37:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 640,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 628,
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
                      "id": 639,
                      "name": "computeFinalRoundWinner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 857,
                      "src": "1481:23:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 641,
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
                  "id": 642,
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
                    "id": 649,
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
                            "id": 643,
                            "name": "elections",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 306,
                            "src": "1530:9:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                              "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                            }
                          },
                          "id": 645,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 644,
                            "name": "_electionId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 628,
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
                            "typeIdentifier": "t_struct$_Election_$289_storage",
                            "typeString": "struct ElectionFactory.Election storage ref"
                          }
                        },
                        "id": 646,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "winners",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 286,
                        "src": "1530:30:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 647,
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
                      "id": 648,
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
                    "id": 667,
                    "nodeType": "Block",
                    "src": "1647:113:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 665,
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
                                "id": 655,
                                "name": "elections",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 306,
                                "src": "1684:9:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                                  "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                }
                              },
                              "id": 657,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 656,
                                "name": "_electionId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 628,
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
                                "typeIdentifier": "t_struct$_Election_$289_storage",
                                "typeString": "struct ElectionFactory.Election storage ref"
                              }
                            },
                            "id": 658,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "winner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 288,
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
                                  "id": 659,
                                  "name": "elections",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 306,
                                  "src": "1716:9:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                                    "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                  }
                                },
                                "id": 661,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 660,
                                  "name": "_electionId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 628,
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
                                  "typeIdentifier": "t_struct$_Election_$289_storage",
                                  "typeString": "struct ElectionFactory.Election storage ref"
                                }
                              },
                              "id": 662,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "winners",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 286,
                              "src": "1716:30:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 664,
                            "indexExpression": {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 663,
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
                        "id": 666,
                        "nodeType": "ExpressionStatement",
                        "src": "1684:65:2"
                      }
                    ]
                  },
                  "id": 668,
                  "nodeType": "IfStatement",
                  "src": "1527:233:2",
                  "trueBody": {
                    "id": 654,
                    "nodeType": "Block",
                    "src": "1572:61:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 651,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 628,
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
                            "id": 650,
                            "name": "computeFinalRoundWinner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 857,
                            "src": "1586:23:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 652,
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
                        "id": 653,
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
            "id": 670,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeResult",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 629,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 628,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 670,
                  "src": "1346:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 627,
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
              "id": 630,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1371:0:2"
            },
            "scope": 858,
            "src": "1323:443:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 695,
              "nodeType": "Block",
              "src": "1835:140:2",
              "statements": [
                {
                  "body": {
                    "id": 693,
                    "nodeType": "Block",
                    "src": "1910:59:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 689,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 672,
                              "src": "1943:11:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 690,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 676,
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
                            "id": 688,
                            "name": "computeAverageNote",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 246,
                            "src": "1924:18:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256)"
                            }
                          },
                          "id": 691,
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
                        "id": 692,
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
                    "id": 684,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 679,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 676,
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
                          "id": 680,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 306,
                          "src": "1866:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 682,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 681,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 672,
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
                          "typeIdentifier": "t_struct$_Election_$289_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 683,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "candidatesCount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 275,
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
                  "id": 694,
                  "initializationExpression": {
                    "assignments": [
                      676
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 676,
                        "mutability": "mutable",
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 694,
                        "src": "1850:6:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 675,
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
                    "id": 678,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 677,
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
                      "id": 686,
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
                        "id": 685,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 676,
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
                    "id": 687,
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
            "id": 696,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeCandidatesAverageNote",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 673,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 672,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 696,
                  "src": "1810:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 671,
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
              "id": 674,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1835:0:2"
            },
            "scope": 858,
            "src": "1772:203:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 774,
              "nodeType": "Block",
              "src": "2040:558:2",
              "statements": [
                {
                  "assignments": [
                    702
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 702,
                      "mutability": "mutable",
                      "name": "higherNote",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 774,
                      "src": "2050:15:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 701,
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
                  "id": 704,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 703,
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
                    "id": 772,
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
                          "id": 726,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 718,
                            "name": "higherNote",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 702,
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
                                    "id": 719,
                                    "name": "elections",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 306,
                                    "src": "2174:9:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                                      "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                    }
                                  },
                                  "id": 721,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 720,
                                    "name": "_electionId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 698,
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
                                    "typeIdentifier": "t_struct$_Election_$289_storage",
                                    "typeString": "struct ElectionFactory.Election storage ref"
                                  }
                                },
                                "id": 722,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "candidates",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 279,
                                "src": "2174:33:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$300_storage_$",
                                  "typeString": "mapping(uint256 => struct ElectionFactory.Candidate storage ref)"
                                }
                              },
                              "id": 724,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 723,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 706,
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
                                "typeIdentifier": "t_struct$_Candidate_$300_storage",
                                "typeString": "struct ElectionFactory.Candidate storage ref"
                              }
                            },
                            "id": 725,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "averageNote",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 299,
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
                            "id": 744,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 736,
                              "name": "higherNote",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 702,
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
                                      "id": 737,
                                      "name": "elections",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 306,
                                      "src": "2328:9:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                                        "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                      }
                                    },
                                    "id": 739,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 738,
                                      "name": "_electionId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 698,
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
                                      "typeIdentifier": "t_struct$_Election_$289_storage",
                                      "typeString": "struct ElectionFactory.Election storage ref"
                                    }
                                  },
                                  "id": 740,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "candidates",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 279,
                                  "src": "2328:33:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$300_storage_$",
                                    "typeString": "mapping(uint256 => struct ElectionFactory.Candidate storage ref)"
                                  }
                                },
                                "id": 742,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 741,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 706,
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
                                  "typeIdentifier": "t_struct$_Candidate_$300_storage",
                                  "typeString": "struct ElectionFactory.Candidate storage ref"
                                }
                              },
                              "id": 743,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "averageNote",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 299,
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
                          "id": 770,
                          "nodeType": "IfStatement",
                          "src": "2312:270:2",
                          "trueBody": {
                            "id": 769,
                            "nodeType": "Block",
                            "src": "2377:205:2",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 749,
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
                                        "id": 745,
                                        "name": "elections",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 306,
                                        "src": "2402:9:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                        }
                                      },
                                      "id": 747,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 746,
                                        "name": "_electionId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 698,
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
                                        "typeIdentifier": "t_struct$_Election_$289_storage",
                                        "typeString": "struct ElectionFactory.Election storage ref"
                                      }
                                    },
                                    "id": 748,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "memberName": "winners",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 286,
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
                                "id": 750,
                                "nodeType": "ExpressionStatement",
                                "src": "2395:37:2"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 759,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "argumentTypes": null,
                                    "id": 751,
                                    "name": "higherNote",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 702,
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
                                            "id": 752,
                                            "name": "elections",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 306,
                                            "src": "2463:9:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                                              "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                            }
                                          },
                                          "id": 754,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 753,
                                            "name": "_electionId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 698,
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
                                            "typeIdentifier": "t_struct$_Election_$289_storage",
                                            "typeString": "struct ElectionFactory.Election storage ref"
                                          }
                                        },
                                        "id": 755,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "candidates",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 279,
                                        "src": "2463:33:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$300_storage_$",
                                          "typeString": "mapping(uint256 => struct ElectionFactory.Candidate storage ref)"
                                        }
                                      },
                                      "id": 757,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 756,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 706,
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
                                        "typeIdentifier": "t_struct$_Candidate_$300_storage",
                                        "typeString": "struct ElectionFactory.Candidate storage ref"
                                      }
                                    },
                                    "id": 758,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "averageNote",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 299,
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
                                "id": 760,
                                "nodeType": "ExpressionStatement",
                                "src": "2450:61:2"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 766,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 706,
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
                                          "id": 761,
                                          "name": "elections",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 306,
                                          "src": "2529:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                          }
                                        },
                                        "id": 763,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 762,
                                          "name": "_electionId",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 698,
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
                                          "typeIdentifier": "t_struct$_Election_$289_storage",
                                          "typeString": "struct ElectionFactory.Election storage ref"
                                        }
                                      },
                                      "id": 764,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "winners",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 286,
                                      "src": "2529:30:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                        "typeString": "uint256[] storage ref"
                                      }
                                    },
                                    "id": 765,
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
                                  "id": 767,
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
                                "id": 768,
                                "nodeType": "ExpressionStatement",
                                "src": "2529:38:2"
                              }
                            ]
                          }
                        },
                        "id": 771,
                        "nodeType": "IfStatement",
                        "src": "2157:425:2",
                        "trueBody": {
                          "id": 735,
                          "nodeType": "Block",
                          "src": "2223:71:2",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 732,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 706,
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
                                        "id": 727,
                                        "name": "elections",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 306,
                                        "src": "2241:9:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                        }
                                      },
                                      "id": 729,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 728,
                                        "name": "_electionId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 698,
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
                                        "typeIdentifier": "t_struct$_Election_$289_storage",
                                        "typeString": "struct ElectionFactory.Election storage ref"
                                      }
                                    },
                                    "id": 730,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "winners",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 286,
                                    "src": "2241:30:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                      "typeString": "uint256[] storage ref"
                                    }
                                  },
                                  "id": 731,
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
                                "id": 733,
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
                              "id": 734,
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
                    "id": 714,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 709,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 706,
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
                          "id": 710,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 306,
                          "src": "2099:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 712,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 711,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 698,
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
                          "typeIdentifier": "t_struct$_Election_$289_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 713,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "candidatesCount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 275,
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
                  "id": 773,
                  "initializationExpression": {
                    "assignments": [
                      706
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 706,
                        "mutability": "mutable",
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 773,
                        "src": "2083:6:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 705,
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
                    "id": 708,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 707,
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
                      "id": 716,
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
                        "id": 715,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 706,
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
                    "id": 717,
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
            "id": 775,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeFirstRoundWinners",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 698,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 775,
                  "src": "2015:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 697,
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
              "id": 700,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2040:0:2"
            },
            "scope": 858,
            "src": "1981:617:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 856,
              "nodeType": "Block",
              "src": "2662:598:2",
              "statements": [
                {
                  "assignments": [
                    781
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 781,
                      "mutability": "mutable",
                      "name": "higherPercent",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 856,
                      "src": "2672:18:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 780,
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
                  "id": 782,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2672:18:2"
                },
                {
                  "body": {
                    "id": 854,
                    "nodeType": "Block",
                    "src": "2763:491:2",
                    "statements": [
                      {
                        "assignments": [
                          798
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 798,
                            "mutability": "mutable",
                            "name": "currentPercent",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 854,
                            "src": "2777:19:2",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 797,
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
                        "id": 811,
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
                                  "id": 799,
                                  "name": "elections",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 306,
                                  "src": "2799:9:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                                    "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                  }
                                },
                                "id": 801,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 800,
                                  "name": "_electionId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 777,
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
                                  "typeIdentifier": "t_struct$_Election_$289_storage",
                                  "typeString": "struct ElectionFactory.Election storage ref"
                                }
                              },
                              "id": 802,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "candidates",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 279,
                              "src": "2799:33:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$300_storage_$",
                                "typeString": "mapping(uint256 => struct ElectionFactory.Candidate storage ref)"
                              }
                            },
                            "id": 809,
                            "indexExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 803,
                                    "name": "elections",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 306,
                                    "src": "2833:9:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                                      "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                    }
                                  },
                                  "id": 805,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 804,
                                    "name": "_electionId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 777,
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
                                    "typeIdentifier": "t_struct$_Election_$289_storage",
                                    "typeString": "struct ElectionFactory.Election storage ref"
                                  }
                                },
                                "id": 806,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "winners",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 286,
                                "src": "2833:30:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                  "typeString": "uint256[] storage ref"
                                }
                              },
                              "id": 808,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 807,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 784,
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
                              "typeIdentifier": "t_struct$_Candidate_$300_storage",
                              "typeString": "struct ElectionFactory.Candidate storage ref"
                            }
                          },
                          "id": 810,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "percent",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 297,
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
                          "id": 814,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 812,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 784,
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
                            "id": 813,
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
                            "id": 834,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 832,
                              "name": "currentPercent",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 798,
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
                              "id": 833,
                              "name": "higherPercent",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 781,
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
                          "id": 852,
                          "nodeType": "IfStatement",
                          "src": "3063:181:2",
                          "trueBody": {
                            "id": 851,
                            "nodeType": "Block",
                            "src": "3098:146:2",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 837,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "argumentTypes": null,
                                    "id": 835,
                                    "name": "higherPercent",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 781,
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
                                    "id": 836,
                                    "name": "currentPercent",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 798,
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
                                "id": 838,
                                "nodeType": "ExpressionStatement",
                                "src": "3116:30:2"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 849,
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
                                        "id": 839,
                                        "name": "elections",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 306,
                                        "src": "3164:9:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                        }
                                      },
                                      "id": 841,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 840,
                                        "name": "_electionId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 777,
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
                                        "typeIdentifier": "t_struct$_Election_$289_storage",
                                        "typeString": "struct ElectionFactory.Election storage ref"
                                      }
                                    },
                                    "id": 842,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "memberName": "winner",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 288,
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
                                          "id": 843,
                                          "name": "elections",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 306,
                                          "src": "3196:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                          }
                                        },
                                        "id": 845,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 844,
                                          "name": "_electionId",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 777,
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
                                          "typeIdentifier": "t_struct$_Election_$289_storage",
                                          "typeString": "struct ElectionFactory.Election storage ref"
                                        }
                                      },
                                      "id": 846,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "winners",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 286,
                                      "src": "3196:30:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                        "typeString": "uint256[] storage ref"
                                      }
                                    },
                                    "id": 848,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 847,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 784,
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
                                "id": 850,
                                "nodeType": "ExpressionStatement",
                                "src": "3164:65:2"
                              }
                            ]
                          }
                        },
                        "id": 853,
                        "nodeType": "IfStatement",
                        "src": "2889:355:2",
                        "trueBody": {
                          "id": 831,
                          "nodeType": "Block",
                          "src": "2899:146:2",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 817,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 815,
                                  "name": "higherPercent",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 781,
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
                                  "id": 816,
                                  "name": "currentPercent",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 798,
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
                              "id": 818,
                              "nodeType": "ExpressionStatement",
                              "src": "2917:30:2"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 829,
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
                                      "id": 819,
                                      "name": "elections",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 306,
                                      "src": "2965:9:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                                        "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                      }
                                    },
                                    "id": 821,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 820,
                                      "name": "_electionId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 777,
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
                                      "typeIdentifier": "t_struct$_Election_$289_storage",
                                      "typeString": "struct ElectionFactory.Election storage ref"
                                    }
                                  },
                                  "id": 822,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberName": "winner",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 288,
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
                                        "id": 823,
                                        "name": "elections",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 306,
                                        "src": "2997:9:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                        }
                                      },
                                      "id": 825,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 824,
                                        "name": "_electionId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 777,
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
                                        "typeIdentifier": "t_struct$_Election_$289_storage",
                                        "typeString": "struct ElectionFactory.Election storage ref"
                                      }
                                    },
                                    "id": 826,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "winners",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 286,
                                    "src": "2997:30:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                      "typeString": "uint256[] storage ref"
                                    }
                                  },
                                  "id": 828,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 827,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 784,
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
                              "id": 830,
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
                    "id": 793,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 787,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 784,
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
                            "id": 788,
                            "name": "elections",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 306,
                            "src": "2720:9:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                              "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                            }
                          },
                          "id": 790,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 789,
                            "name": "_electionId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 777,
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
                            "typeIdentifier": "t_struct$_Election_$289_storage",
                            "typeString": "struct ElectionFactory.Election storage ref"
                          }
                        },
                        "id": 791,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "winners",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 286,
                        "src": "2720:30:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 792,
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
                  "id": 855,
                  "initializationExpression": {
                    "assignments": [
                      784
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 784,
                        "mutability": "mutable",
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 855,
                        "src": "2704:6:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 783,
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
                    "id": 786,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 785,
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
                      "id": 795,
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
                        "id": 794,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 784,
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
                    "id": 796,
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
            "id": 857,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeFinalRoundWinner",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 778,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 777,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 857,
                  "src": "2637:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 776,
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
              "id": 779,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2662:0:2"
            },
            "scope": 858,
            "src": "2604:656:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 859,
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
          858
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
        "id": 499,
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
        "id": 500,
        "name": "PragmaDirective",
        "src": "66:33:2"
      },
      {
        "attributes": {
          "SourceUnit": 248,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Candidate.sol",
          "file": "./Candidate.sol",
          "scope": 859,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 501,
        "name": "ImportDirective",
        "src": "101:25:2"
      },
      {
        "attributes": {
          "SourceUnit": 1045,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol",
          "file": "./ownable.sol",
          "scope": 859,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 502,
        "name": "ImportDirective",
        "src": "127:23:2"
      },
      {
        "attributes": {
          "SourceUnit": 498,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol",
          "file": "./ElectionFactory.sol",
          "scope": 859,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 503,
        "name": "ImportDirective",
        "src": "151:31:2"
      },
      {
        "attributes": {
          "abstract": false,
          "contractDependencies": [
            247,
            497,
            1044
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            858,
            247,
            497,
            1044
          ],
          "name": "ElectionHelper",
          "scope": 859
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
                  "referencedDeclaration": 497,
                  "type": "contract ElectionFactory"
                },
                "id": 504,
                "name": "UserDefinedTypeName",
                "src": "212:15:2"
              }
            ],
            "id": 505,
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
                  "referencedDeclaration": 247,
                  "type": "contract Candidate"
                },
                "id": 506,
                "name": "UserDefinedTypeName",
                "src": "229:9:2"
              }
            ],
            "id": 507,
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
              "scope": 858,
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
                      "scope": 536,
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
                        "id": 508,
                        "name": "ElementaryTypeName",
                        "src": "266:4:2"
                      }
                    ],
                    "id": 509,
                    "name": "VariableDeclaration",
                    "src": "266:16:2"
                  }
                ],
                "id": 510,
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
                "id": 515,
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
                      "referencedDeclaration": 333,
                      "type": "modifier (address)",
                      "value": "isAdmin"
                    },
                    "id": 511,
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
                        "id": 512,
                        "name": "Identifier",
                        "src": "301:3:2"
                      }
                    ],
                    "id": 513,
                    "name": "MemberAccess",
                    "src": "301:10:2"
                  }
                ],
                "id": 514,
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
                              "referencedDeclaration": 273,
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
                                      "referencedDeclaration": 306,
                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                      "value": "elections"
                                    },
                                    "id": 516,
                                    "name": "Identifier",
                                    "src": "323:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 509,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 517,
                                    "name": "Identifier",
                                    "src": "333:11:2"
                                  }
                                ],
                                "id": 518,
                                "name": "IndexAccess",
                                "src": "323:22:2"
                              }
                            ],
                            "id": 519,
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
                            "id": 520,
                            "name": "Literal",
                            "src": "355:5:2"
                          }
                        ],
                        "id": 521,
                        "name": "Assignment",
                        "src": "323:37:2"
                      }
                    ],
                    "id": 522,
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
                              "referencedDeclaration": 269,
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
                                      "referencedDeclaration": 306,
                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                      "value": "elections"
                                    },
                                    "id": 523,
                                    "name": "Identifier",
                                    "src": "370:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 509,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 524,
                                    "name": "Identifier",
                                    "src": "380:11:2"
                                  }
                                ],
                                "id": 525,
                                "name": "IndexAccess",
                                "src": "370:22:2"
                              }
                            ],
                            "id": 526,
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
                                "id": 527,
                                "name": "Identifier",
                                "src": "407:5:2"
                              }
                            ],
                            "id": 528,
                            "name": "MemberAccess",
                            "src": "407:15:2"
                          }
                        ],
                        "id": 529,
                        "name": "Assignment",
                        "src": "370:52:2"
                      }
                    ],
                    "id": 530,
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
                              "referencedDeclaration": 670,
                              "type": "function (uint256)",
                              "value": "computeResult"
                            },
                            "id": 531,
                            "name": "Identifier",
                            "src": "432:13:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 509,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 532,
                            "name": "Identifier",
                            "src": "446:11:2"
                          }
                        ],
                        "id": 533,
                        "name": "FunctionCall",
                        "src": "432:26:2"
                      }
                    ],
                    "id": 534,
                    "name": "ExpressionStatement",
                    "src": "432:26:2"
                  }
                ],
                "id": 535,
                "name": "Block",
                "src": "313:152:2"
              }
            ],
            "id": 536,
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
              "scope": 858,
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
                      "scope": 549,
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
                        "id": 537,
                        "name": "ElementaryTypeName",
                        "src": "497:4:2"
                      }
                    ],
                    "id": 538,
                    "name": "VariableDeclaration",
                    "src": "497:16:2"
                  }
                ],
                "id": 539,
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
                      "scope": 549,
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
                        "id": 540,
                        "name": "ElementaryTypeName",
                        "src": "536:6:2"
                      }
                    ],
                    "id": 541,
                    "name": "VariableDeclaration",
                    "src": "536:13:2"
                  }
                ],
                "id": 542,
                "name": "ParameterList",
                "src": "535:15:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 542
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
                          "referencedDeclaration": 265,
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
                                  "referencedDeclaration": 306,
                                  "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                  "value": "elections"
                                },
                                "id": 543,
                                "name": "Identifier",
                                "src": "568:9:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 538,
                                  "type": "uint256",
                                  "value": "_electionId"
                                },
                                "id": 544,
                                "name": "Identifier",
                                "src": "578:11:2"
                              }
                            ],
                            "id": 545,
                            "name": "IndexAccess",
                            "src": "568:22:2"
                          }
                        ],
                        "id": 546,
                        "name": "MemberAccess",
                        "src": "568:28:2"
                      }
                    ],
                    "id": 547,
                    "name": "Return",
                    "src": "561:35:2"
                  }
                ],
                "id": 548,
                "name": "Block",
                "src": "551:52:2"
              }
            ],
            "id": 549,
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
              "scope": 858,
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
                      "scope": 562,
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
                        "id": 550,
                        "name": "ElementaryTypeName",
                        "src": "636:4:2"
                      }
                    ],
                    "id": 551,
                    "name": "VariableDeclaration",
                    "src": "636:16:2"
                  }
                ],
                "id": 552,
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
                      "scope": 562,
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
                        "id": 553,
                        "name": "ElementaryTypeName",
                        "src": "675:4:2"
                      }
                    ],
                    "id": 554,
                    "name": "VariableDeclaration",
                    "src": "675:4:2"
                  }
                ],
                "id": 555,
                "name": "ParameterList",
                "src": "674:6:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 555
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
                          "referencedDeclaration": 273,
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
                                  "referencedDeclaration": 306,
                                  "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                  "value": "elections"
                                },
                                "id": 556,
                                "name": "Identifier",
                                "src": "698:9:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 551,
                                  "type": "uint256",
                                  "value": "_electionId"
                                },
                                "id": 557,
                                "name": "Identifier",
                                "src": "708:11:2"
                              }
                            ],
                            "id": 558,
                            "name": "IndexAccess",
                            "src": "698:22:2"
                          }
                        ],
                        "id": 559,
                        "name": "MemberAccess",
                        "src": "698:29:2"
                      }
                    ],
                    "id": 560,
                    "name": "Return",
                    "src": "691:36:2"
                  }
                ],
                "id": 561,
                "name": "Block",
                "src": "681:53:2"
              }
            ],
            "id": 562,
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
              "scope": 858,
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
                      "scope": 575,
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
                        "id": 563,
                        "name": "ElementaryTypeName",
                        "src": "767:4:2"
                      }
                    ],
                    "id": 564,
                    "name": "VariableDeclaration",
                    "src": "767:16:2"
                  }
                ],
                "id": 565,
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
                      "scope": 575,
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
                        "id": 566,
                        "name": "ElementaryTypeName",
                        "src": "808:4:2"
                      }
                    ],
                    "id": 567,
                    "name": "VariableDeclaration",
                    "src": "808:4:2"
                  }
                ],
                "id": 568,
                "name": "ParameterList",
                "src": "807:6:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 568
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
                          "referencedDeclaration": 288,
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
                                  "referencedDeclaration": 306,
                                  "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                  "value": "elections"
                                },
                                "id": 569,
                                "name": "Identifier",
                                "src": "831:9:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 564,
                                  "type": "uint256",
                                  "value": "_electionId"
                                },
                                "id": 570,
                                "name": "Identifier",
                                "src": "841:11:2"
                              }
                            ],
                            "id": 571,
                            "name": "IndexAccess",
                            "src": "831:22:2"
                          }
                        ],
                        "id": 572,
                        "name": "MemberAccess",
                        "src": "831:29:2"
                      }
                    ],
                    "id": 573,
                    "name": "Return",
                    "src": "824:36:2"
                  }
                ],
                "id": 574,
                "name": "Block",
                "src": "814:53:2"
              }
            ],
            "id": 575,
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
              "scope": 858,
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
                      "scope": 595,
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
                        "id": 576,
                        "name": "ElementaryTypeName",
                        "src": "891:4:2"
                      }
                    ],
                    "id": 577,
                    "name": "VariableDeclaration",
                    "src": "891:16:2"
                  }
                ],
                "id": 578,
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
                "id": 579,
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
                                  "referencedDeclaration": 283,
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
                                          "referencedDeclaration": 306,
                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                          "value": "elections"
                                        },
                                        "id": 580,
                                        "name": "Identifier",
                                        "src": "926:9:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 577,
                                          "type": "uint256",
                                          "value": "_electionId"
                                        },
                                        "id": 581,
                                        "name": "Identifier",
                                        "src": "936:11:2"
                                      }
                                    ],
                                    "id": 582,
                                    "name": "IndexAccess",
                                    "src": "926:22:2"
                                  }
                                ],
                                "id": 583,
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
                                    "id": 584,
                                    "name": "Identifier",
                                    "src": "956:3:2"
                                  }
                                ],
                                "id": 585,
                                "name": "MemberAccess",
                                "src": "956:10:2"
                              }
                            ],
                            "id": 586,
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
                            "id": 587,
                            "name": "Literal",
                            "src": "970:4:2"
                          }
                        ],
                        "id": 588,
                        "name": "Assignment",
                        "src": "926:48:2"
                      }
                    ],
                    "id": 589,
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
                            "id": 590,
                            "name": "Identifier",
                            "src": "984:15:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 577,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 591,
                            "name": "Identifier",
                            "src": "1000:11:2"
                          }
                        ],
                        "id": 592,
                        "name": "FunctionCall",
                        "src": "984:28:2"
                      }
                    ],
                    "id": 593,
                    "name": "ExpressionStatement",
                    "src": "984:28:2"
                  }
                ],
                "id": 594,
                "name": "Block",
                "src": "916:103:2"
              }
            ],
            "id": 595,
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
              "scope": 858,
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
                      "scope": 612,
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
                        "src": "1057:4:2"
                      }
                    ],
                    "id": 597,
                    "name": "VariableDeclaration",
                    "src": "1057:16:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_index",
                      "overrides": null,
                      "scope": 612,
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
                        "id": 598,
                        "name": "ElementaryTypeName",
                        "src": "1075:4:2"
                      }
                    ],
                    "id": 599,
                    "name": "VariableDeclaration",
                    "src": "1075:11:2"
                  }
                ],
                "id": 600,
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
                      "scope": 612,
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
                        "id": 601,
                        "name": "ElementaryTypeName",
                        "src": "1108:4:2"
                      }
                    ],
                    "id": 602,
                    "name": "VariableDeclaration",
                    "src": "1108:4:2"
                  }
                ],
                "id": 603,
                "name": "ParameterList",
                "src": "1107:6:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 603
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
                              "referencedDeclaration": 286,
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
                                      "referencedDeclaration": 306,
                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                      "value": "elections"
                                    },
                                    "id": 604,
                                    "name": "Identifier",
                                    "src": "1130:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 597,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 605,
                                    "name": "Identifier",
                                    "src": "1140:11:2"
                                  }
                                ],
                                "id": 606,
                                "name": "IndexAccess",
                                "src": "1130:22:2"
                              }
                            ],
                            "id": 607,
                            "name": "MemberAccess",
                            "src": "1130:30:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 599,
                              "type": "uint256",
                              "value": "_index"
                            },
                            "id": 608,
                            "name": "Identifier",
                            "src": "1161:6:2"
                          }
                        ],
                        "id": 609,
                        "name": "IndexAccess",
                        "src": "1130:38:2"
                      }
                    ],
                    "id": 610,
                    "name": "Return",
                    "src": "1123:45:2"
                  }
                ],
                "id": 611,
                "name": "Block",
                "src": "1113:62:2"
              }
            ],
            "id": 612,
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
              "scope": 858,
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
                      "scope": 626,
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
                        "id": 613,
                        "name": "ElementaryTypeName",
                        "src": "1211:4:2"
                      }
                    ],
                    "id": 614,
                    "name": "VariableDeclaration",
                    "src": "1211:16:2"
                  }
                ],
                "id": 615,
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
                      "scope": 626,
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
                            "id": 616,
                            "name": "ElementaryTypeName",
                            "src": "1249:4:2"
                          }
                        ],
                        "id": 617,
                        "name": "ArrayTypeName",
                        "src": "1249:6:2"
                      }
                    ],
                    "id": 618,
                    "name": "VariableDeclaration",
                    "src": "1249:13:2"
                  }
                ],
                "id": 619,
                "name": "ParameterList",
                "src": "1248:15:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 619
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
                          "referencedDeclaration": 286,
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
                                  "referencedDeclaration": 306,
                                  "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                  "value": "elections"
                                },
                                "id": 620,
                                "name": "Identifier",
                                "src": "1280:9:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 614,
                                  "type": "uint256",
                                  "value": "_electionId"
                                },
                                "id": 621,
                                "name": "Identifier",
                                "src": "1290:11:2"
                              }
                            ],
                            "id": 622,
                            "name": "IndexAccess",
                            "src": "1280:22:2"
                          }
                        ],
                        "id": 623,
                        "name": "MemberAccess",
                        "src": "1280:30:2"
                      }
                    ],
                    "id": 624,
                    "name": "Return",
                    "src": "1273:37:2"
                  }
                ],
                "id": 625,
                "name": "Block",
                "src": "1263:54:2"
              }
            ],
            "id": 626,
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
              "scope": 858,
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
                      "scope": 670,
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
                        "id": 627,
                        "name": "ElementaryTypeName",
                        "src": "1346:4:2"
                      }
                    ],
                    "id": 628,
                    "name": "VariableDeclaration",
                    "src": "1346:16:2"
                  }
                ],
                "id": 629,
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
                "id": 630,
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
                              "referencedDeclaration": 696,
                              "type": "function (uint256)",
                              "value": "computeCandidatesAverageNote"
                            },
                            "id": 631,
                            "name": "Identifier",
                            "src": "1381:28:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 628,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 632,
                            "name": "Identifier",
                            "src": "1410:11:2"
                          }
                        ],
                        "id": 633,
                        "name": "FunctionCall",
                        "src": "1381:41:2"
                      }
                    ],
                    "id": 634,
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
                              "referencedDeclaration": 775,
                              "type": "function (uint256)",
                              "value": "computeFirstRoundWinners"
                            },
                            "id": 635,
                            "name": "Identifier",
                            "src": "1433:24:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 628,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 636,
                            "name": "Identifier",
                            "src": "1458:11:2"
                          }
                        ],
                        "id": 637,
                        "name": "FunctionCall",
                        "src": "1433:37:2"
                      }
                    ],
                    "id": 638,
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
                              "referencedDeclaration": 857,
                              "type": "function (uint256)",
                              "value": "computeFinalRoundWinner"
                            },
                            "id": 639,
                            "name": "Identifier",
                            "src": "1481:23:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 628,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 640,
                            "name": "Identifier",
                            "src": "1505:11:2"
                          }
                        ],
                        "id": 641,
                        "name": "FunctionCall",
                        "src": "1481:36:2"
                      }
                    ],
                    "id": 642,
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
                                  "referencedDeclaration": 286,
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
                                          "referencedDeclaration": 306,
                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                          "value": "elections"
                                        },
                                        "id": 643,
                                        "name": "Identifier",
                                        "src": "1530:9:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 628,
                                          "type": "uint256",
                                          "value": "_electionId"
                                        },
                                        "id": 644,
                                        "name": "Identifier",
                                        "src": "1540:11:2"
                                      }
                                    ],
                                    "id": 645,
                                    "name": "IndexAccess",
                                    "src": "1530:22:2"
                                  }
                                ],
                                "id": 646,
                                "name": "MemberAccess",
                                "src": "1530:30:2"
                              }
                            ],
                            "id": 647,
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
                            "id": 648,
                            "name": "Literal",
                            "src": "1570:1:2"
                          }
                        ],
                        "id": 649,
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
                                      "referencedDeclaration": 857,
                                      "type": "function (uint256)",
                                      "value": "computeFinalRoundWinner"
                                    },
                                    "id": 650,
                                    "name": "Identifier",
                                    "src": "1586:23:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 628,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 651,
                                    "name": "Identifier",
                                    "src": "1610:11:2"
                                  }
                                ],
                                "id": 652,
                                "name": "FunctionCall",
                                "src": "1586:36:2"
                              }
                            ],
                            "id": 653,
                            "name": "ExpressionStatement",
                            "src": "1586:36:2"
                          }
                        ],
                        "id": 654,
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
                                      "referencedDeclaration": 288,
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
                                              "referencedDeclaration": 306,
                                              "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                              "value": "elections"
                                            },
                                            "id": 655,
                                            "name": "Identifier",
                                            "src": "1684:9:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 628,
                                              "type": "uint256",
                                              "value": "_electionId"
                                            },
                                            "id": 656,
                                            "name": "Identifier",
                                            "src": "1694:11:2"
                                          }
                                        ],
                                        "id": 657,
                                        "name": "IndexAccess",
                                        "src": "1684:22:2"
                                      }
                                    ],
                                    "id": 658,
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
                                          "referencedDeclaration": 286,
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
                                                  "referencedDeclaration": 306,
                                                  "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                  "value": "elections"
                                                },
                                                "id": 659,
                                                "name": "Identifier",
                                                "src": "1716:9:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 628,
                                                  "type": "uint256",
                                                  "value": "_electionId"
                                                },
                                                "id": 660,
                                                "name": "Identifier",
                                                "src": "1726:11:2"
                                              }
                                            ],
                                            "id": 661,
                                            "name": "IndexAccess",
                                            "src": "1716:22:2"
                                          }
                                        ],
                                        "id": 662,
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
                                        "id": 663,
                                        "name": "Literal",
                                        "src": "1747:1:2"
                                      }
                                    ],
                                    "id": 664,
                                    "name": "IndexAccess",
                                    "src": "1716:33:2"
                                  }
                                ],
                                "id": 665,
                                "name": "Assignment",
                                "src": "1684:65:2"
                              }
                            ],
                            "id": 666,
                            "name": "ExpressionStatement",
                            "src": "1684:65:2"
                          }
                        ],
                        "id": 667,
                        "name": "Block",
                        "src": "1647:113:2"
                      }
                    ],
                    "id": 668,
                    "name": "IfStatement",
                    "src": "1527:233:2"
                  }
                ],
                "id": 669,
                "name": "Block",
                "src": "1371:395:2"
              }
            ],
            "id": 670,
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
              "scope": 858,
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
                      "scope": 696,
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
                        "id": 671,
                        "name": "ElementaryTypeName",
                        "src": "1810:4:2"
                      }
                    ],
                    "id": 672,
                    "name": "VariableDeclaration",
                    "src": "1810:16:2"
                  }
                ],
                "id": 673,
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
                "id": 674,
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
                            676
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "mutability": "mutable",
                              "name": "i",
                              "overrides": null,
                              "scope": 694,
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
                                "id": 675,
                                "name": "ElementaryTypeName",
                                "src": "1850:4:2"
                              }
                            ],
                            "id": 676,
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
                            "id": 677,
                            "name": "Literal",
                            "src": "1859:1:2"
                          }
                        ],
                        "id": 678,
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
                              "referencedDeclaration": 676,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 679,
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
                              "referencedDeclaration": 275,
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
                                      "referencedDeclaration": 306,
                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                      "value": "elections"
                                    },
                                    "id": 680,
                                    "name": "Identifier",
                                    "src": "1866:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 672,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 681,
                                    "name": "Identifier",
                                    "src": "1876:11:2"
                                  }
                                ],
                                "id": 682,
                                "name": "IndexAccess",
                                "src": "1866:22:2"
                              }
                            ],
                            "id": 683,
                            "name": "MemberAccess",
                            "src": "1866:38:2"
                          }
                        ],
                        "id": 684,
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
                                  "referencedDeclaration": 676,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 685,
                                "name": "Identifier",
                                "src": "1906:1:2"
                              }
                            ],
                            "id": 686,
                            "name": "UnaryOperation",
                            "src": "1906:3:2"
                          }
                        ],
                        "id": 687,
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
                                      "referencedDeclaration": 246,
                                      "type": "function (uint256,uint256)",
                                      "value": "computeAverageNote"
                                    },
                                    "id": 688,
                                    "name": "Identifier",
                                    "src": "1924:18:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 672,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 689,
                                    "name": "Identifier",
                                    "src": "1943:11:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 676,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 690,
                                    "name": "Identifier",
                                    "src": "1956:1:2"
                                  }
                                ],
                                "id": 691,
                                "name": "FunctionCall",
                                "src": "1924:34:2"
                              }
                            ],
                            "id": 692,
                            "name": "ExpressionStatement",
                            "src": "1924:34:2"
                          }
                        ],
                        "id": 693,
                        "name": "Block",
                        "src": "1910:59:2"
                      }
                    ],
                    "id": 694,
                    "name": "ForStatement",
                    "src": "1845:124:2"
                  }
                ],
                "id": 695,
                "name": "Block",
                "src": "1835:140:2"
              }
            ],
            "id": 696,
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
              "scope": 858,
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
                      "scope": 775,
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
                        "id": 697,
                        "name": "ElementaryTypeName",
                        "src": "2015:4:2"
                      }
                    ],
                    "id": 698,
                    "name": "VariableDeclaration",
                    "src": "2015:16:2"
                  }
                ],
                "id": 699,
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
                "id": 700,
                "name": "ParameterList",
                "src": "2040:0:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        702
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "higherNote",
                          "overrides": null,
                          "scope": 774,
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
                            "id": 701,
                            "name": "ElementaryTypeName",
                            "src": "2050:4:2"
                          }
                        ],
                        "id": 702,
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
                        "id": 703,
                        "name": "Literal",
                        "src": "2068:1:2"
                      }
                    ],
                    "id": 704,
                    "name": "VariableDeclarationStatement",
                    "src": "2050:19:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            706
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "mutability": "mutable",
                              "name": "i",
                              "overrides": null,
                              "scope": 773,
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
                                "id": 705,
                                "name": "ElementaryTypeName",
                                "src": "2083:4:2"
                              }
                            ],
                            "id": 706,
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
                            "id": 707,
                            "name": "Literal",
                            "src": "2092:1:2"
                          }
                        ],
                        "id": 708,
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
                              "referencedDeclaration": 706,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 709,
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
                              "referencedDeclaration": 275,
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
                                      "referencedDeclaration": 306,
                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                      "value": "elections"
                                    },
                                    "id": 710,
                                    "name": "Identifier",
                                    "src": "2099:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 698,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 711,
                                    "name": "Identifier",
                                    "src": "2109:11:2"
                                  }
                                ],
                                "id": 712,
                                "name": "IndexAccess",
                                "src": "2099:22:2"
                              }
                            ],
                            "id": 713,
                            "name": "MemberAccess",
                            "src": "2099:38:2"
                          }
                        ],
                        "id": 714,
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
                                  "referencedDeclaration": 706,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 715,
                                "name": "Identifier",
                                "src": "2139:1:2"
                              }
                            ],
                            "id": 716,
                            "name": "UnaryOperation",
                            "src": "2139:3:2"
                          }
                        ],
                        "id": 717,
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
                                      "referencedDeclaration": 702,
                                      "type": "uint256",
                                      "value": "higherNote"
                                    },
                                    "id": 718,
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
                                      "referencedDeclaration": 299,
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
                                              "referencedDeclaration": 279,
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
                                                      "referencedDeclaration": 306,
                                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                      "value": "elections"
                                                    },
                                                    "id": 719,
                                                    "name": "Identifier",
                                                    "src": "2174:9:2"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 698,
                                                      "type": "uint256",
                                                      "value": "_electionId"
                                                    },
                                                    "id": 720,
                                                    "name": "Identifier",
                                                    "src": "2184:11:2"
                                                  }
                                                ],
                                                "id": 721,
                                                "name": "IndexAccess",
                                                "src": "2174:22:2"
                                              }
                                            ],
                                            "id": 722,
                                            "name": "MemberAccess",
                                            "src": "2174:33:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 706,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 723,
                                            "name": "Identifier",
                                            "src": "2208:1:2"
                                          }
                                        ],
                                        "id": 724,
                                        "name": "IndexAccess",
                                        "src": "2174:36:2"
                                      }
                                    ],
                                    "id": 725,
                                    "name": "MemberAccess",
                                    "src": "2174:48:2"
                                  }
                                ],
                                "id": 726,
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
                                                  "referencedDeclaration": 286,
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
                                                          "referencedDeclaration": 306,
                                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                          "value": "elections"
                                                        },
                                                        "id": 727,
                                                        "name": "Identifier",
                                                        "src": "2241:9:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 698,
                                                          "type": "uint256",
                                                          "value": "_electionId"
                                                        },
                                                        "id": 728,
                                                        "name": "Identifier",
                                                        "src": "2251:11:2"
                                                      }
                                                    ],
                                                    "id": 729,
                                                    "name": "IndexAccess",
                                                    "src": "2241:22:2"
                                                  }
                                                ],
                                                "id": 730,
                                                "name": "MemberAccess",
                                                "src": "2241:30:2"
                                              }
                                            ],
                                            "id": 731,
                                            "name": "MemberAccess",
                                            "src": "2241:35:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 706,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 732,
                                            "name": "Identifier",
                                            "src": "2277:1:2"
                                          }
                                        ],
                                        "id": 733,
                                        "name": "FunctionCall",
                                        "src": "2241:38:2"
                                      }
                                    ],
                                    "id": 734,
                                    "name": "ExpressionStatement",
                                    "src": "2241:38:2"
                                  }
                                ],
                                "id": 735,
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
                                          "referencedDeclaration": 702,
                                          "type": "uint256",
                                          "value": "higherNote"
                                        },
                                        "id": 736,
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
                                          "referencedDeclaration": 299,
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
                                                  "referencedDeclaration": 279,
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
                                                          "referencedDeclaration": 306,
                                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                          "value": "elections"
                                                        },
                                                        "id": 737,
                                                        "name": "Identifier",
                                                        "src": "2328:9:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 698,
                                                          "type": "uint256",
                                                          "value": "_electionId"
                                                        },
                                                        "id": 738,
                                                        "name": "Identifier",
                                                        "src": "2338:11:2"
                                                      }
                                                    ],
                                                    "id": 739,
                                                    "name": "IndexAccess",
                                                    "src": "2328:22:2"
                                                  }
                                                ],
                                                "id": 740,
                                                "name": "MemberAccess",
                                                "src": "2328:33:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 706,
                                                  "type": "uint256",
                                                  "value": "i"
                                                },
                                                "id": 741,
                                                "name": "Identifier",
                                                "src": "2362:1:2"
                                              }
                                            ],
                                            "id": 742,
                                            "name": "IndexAccess",
                                            "src": "2328:36:2"
                                          }
                                        ],
                                        "id": 743,
                                        "name": "MemberAccess",
                                        "src": "2328:48:2"
                                      }
                                    ],
                                    "id": 744,
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
                                                  "referencedDeclaration": 286,
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
                                                          "referencedDeclaration": 306,
                                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                          "value": "elections"
                                                        },
                                                        "id": 745,
                                                        "name": "Identifier",
                                                        "src": "2402:9:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 698,
                                                          "type": "uint256",
                                                          "value": "_electionId"
                                                        },
                                                        "id": 746,
                                                        "name": "Identifier",
                                                        "src": "2412:11:2"
                                                      }
                                                    ],
                                                    "id": 747,
                                                    "name": "IndexAccess",
                                                    "src": "2402:22:2"
                                                  }
                                                ],
                                                "id": 748,
                                                "name": "MemberAccess",
                                                "src": "2402:30:2"
                                              }
                                            ],
                                            "id": 749,
                                            "name": "UnaryOperation",
                                            "src": "2395:37:2"
                                          }
                                        ],
                                        "id": 750,
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
                                                  "referencedDeclaration": 702,
                                                  "type": "uint256",
                                                  "value": "higherNote"
                                                },
                                                "id": 751,
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
                                                  "referencedDeclaration": 299,
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
                                                          "referencedDeclaration": 279,
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
                                                                  "referencedDeclaration": 306,
                                                                  "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                                  "value": "elections"
                                                                },
                                                                "id": 752,
                                                                "name": "Identifier",
                                                                "src": "2463:9:2"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 698,
                                                                  "type": "uint256",
                                                                  "value": "_electionId"
                                                                },
                                                                "id": 753,
                                                                "name": "Identifier",
                                                                "src": "2473:11:2"
                                                              }
                                                            ],
                                                            "id": 754,
                                                            "name": "IndexAccess",
                                                            "src": "2463:22:2"
                                                          }
                                                        ],
                                                        "id": 755,
                                                        "name": "MemberAccess",
                                                        "src": "2463:33:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 706,
                                                          "type": "uint256",
                                                          "value": "i"
                                                        },
                                                        "id": 756,
                                                        "name": "Identifier",
                                                        "src": "2497:1:2"
                                                      }
                                                    ],
                                                    "id": 757,
                                                    "name": "IndexAccess",
                                                    "src": "2463:36:2"
                                                  }
                                                ],
                                                "id": 758,
                                                "name": "MemberAccess",
                                                "src": "2463:48:2"
                                              }
                                            ],
                                            "id": 759,
                                            "name": "Assignment",
                                            "src": "2450:61:2"
                                          }
                                        ],
                                        "id": 760,
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
                                                      "referencedDeclaration": 286,
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
                                                              "referencedDeclaration": 306,
                                                              "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                              "value": "elections"
                                                            },
                                                            "id": 761,
                                                            "name": "Identifier",
                                                            "src": "2529:9:2"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 698,
                                                              "type": "uint256",
                                                              "value": "_electionId"
                                                            },
                                                            "id": 762,
                                                            "name": "Identifier",
                                                            "src": "2539:11:2"
                                                          }
                                                        ],
                                                        "id": 763,
                                                        "name": "IndexAccess",
                                                        "src": "2529:22:2"
                                                      }
                                                    ],
                                                    "id": 764,
                                                    "name": "MemberAccess",
                                                    "src": "2529:30:2"
                                                  }
                                                ],
                                                "id": 765,
                                                "name": "MemberAccess",
                                                "src": "2529:35:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 706,
                                                  "type": "uint256",
                                                  "value": "i"
                                                },
                                                "id": 766,
                                                "name": "Identifier",
                                                "src": "2565:1:2"
                                              }
                                            ],
                                            "id": 767,
                                            "name": "FunctionCall",
                                            "src": "2529:38:2"
                                          }
                                        ],
                                        "id": 768,
                                        "name": "ExpressionStatement",
                                        "src": "2529:38:2"
                                      }
                                    ],
                                    "id": 769,
                                    "name": "Block",
                                    "src": "2377:205:2"
                                  }
                                ],
                                "id": 770,
                                "name": "IfStatement",
                                "src": "2312:270:2"
                              }
                            ],
                            "id": 771,
                            "name": "IfStatement",
                            "src": "2157:425:2"
                          }
                        ],
                        "id": 772,
                        "name": "Block",
                        "src": "2143:449:2"
                      }
                    ],
                    "id": 773,
                    "name": "ForStatement",
                    "src": "2079:513:2"
                  }
                ],
                "id": 774,
                "name": "Block",
                "src": "2040:558:2"
              }
            ],
            "id": 775,
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
              "scope": 858,
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
                      "scope": 857,
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
                        "id": 776,
                        "name": "ElementaryTypeName",
                        "src": "2637:4:2"
                      }
                    ],
                    "id": 777,
                    "name": "VariableDeclaration",
                    "src": "2637:16:2"
                  }
                ],
                "id": 778,
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
                "id": 779,
                "name": "ParameterList",
                "src": "2662:0:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        781
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
                          "scope": 856,
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
                            "id": 780,
                            "name": "ElementaryTypeName",
                            "src": "2672:4:2"
                          }
                        ],
                        "id": 781,
                        "name": "VariableDeclaration",
                        "src": "2672:18:2"
                      }
                    ],
                    "id": 782,
                    "name": "VariableDeclarationStatement",
                    "src": "2672:18:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            784
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "mutability": "mutable",
                              "name": "i",
                              "overrides": null,
                              "scope": 855,
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
                                "id": 783,
                                "name": "ElementaryTypeName",
                                "src": "2704:4:2"
                              }
                            ],
                            "id": 784,
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
                            "id": 785,
                            "name": "Literal",
                            "src": "2713:1:2"
                          }
                        ],
                        "id": 786,
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
                              "referencedDeclaration": 784,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 787,
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
                                  "referencedDeclaration": 286,
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
                                          "referencedDeclaration": 306,
                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                          "value": "elections"
                                        },
                                        "id": 788,
                                        "name": "Identifier",
                                        "src": "2720:9:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 777,
                                          "type": "uint256",
                                          "value": "_electionId"
                                        },
                                        "id": 789,
                                        "name": "Identifier",
                                        "src": "2730:11:2"
                                      }
                                    ],
                                    "id": 790,
                                    "name": "IndexAccess",
                                    "src": "2720:22:2"
                                  }
                                ],
                                "id": 791,
                                "name": "MemberAccess",
                                "src": "2720:30:2"
                              }
                            ],
                            "id": 792,
                            "name": "MemberAccess",
                            "src": "2720:37:2"
                          }
                        ],
                        "id": 793,
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
                                  "referencedDeclaration": 784,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 794,
                                "name": "Identifier",
                                "src": "2759:1:2"
                              }
                            ],
                            "id": 795,
                            "name": "UnaryOperation",
                            "src": "2759:3:2"
                          }
                        ],
                        "id": 796,
                        "name": "ExpressionStatement",
                        "src": "2759:3:2"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                798
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "mutability": "mutable",
                                  "name": "currentPercent",
                                  "overrides": null,
                                  "scope": 854,
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
                                    "id": 797,
                                    "name": "ElementaryTypeName",
                                    "src": "2777:4:2"
                                  }
                                ],
                                "id": 798,
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
                                  "referencedDeclaration": 297,
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
                                          "referencedDeclaration": 279,
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
                                                  "referencedDeclaration": 306,
                                                  "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                  "value": "elections"
                                                },
                                                "id": 799,
                                                "name": "Identifier",
                                                "src": "2799:9:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 777,
                                                  "type": "uint256",
                                                  "value": "_electionId"
                                                },
                                                "id": 800,
                                                "name": "Identifier",
                                                "src": "2809:11:2"
                                              }
                                            ],
                                            "id": 801,
                                            "name": "IndexAccess",
                                            "src": "2799:22:2"
                                          }
                                        ],
                                        "id": 802,
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
                                              "referencedDeclaration": 286,
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
                                                      "referencedDeclaration": 306,
                                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                      "value": "elections"
                                                    },
                                                    "id": 803,
                                                    "name": "Identifier",
                                                    "src": "2833:9:2"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 777,
                                                      "type": "uint256",
                                                      "value": "_electionId"
                                                    },
                                                    "id": 804,
                                                    "name": "Identifier",
                                                    "src": "2843:11:2"
                                                  }
                                                ],
                                                "id": 805,
                                                "name": "IndexAccess",
                                                "src": "2833:22:2"
                                              }
                                            ],
                                            "id": 806,
                                            "name": "MemberAccess",
                                            "src": "2833:30:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 784,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 807,
                                            "name": "Identifier",
                                            "src": "2864:1:2"
                                          }
                                        ],
                                        "id": 808,
                                        "name": "IndexAccess",
                                        "src": "2833:33:2"
                                      }
                                    ],
                                    "id": 809,
                                    "name": "IndexAccess",
                                    "src": "2799:68:2"
                                  }
                                ],
                                "id": 810,
                                "name": "MemberAccess",
                                "src": "2799:76:2"
                              }
                            ],
                            "id": 811,
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
                                      "referencedDeclaration": 784,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 812,
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
                                    "id": 813,
                                    "name": "Literal",
                                    "src": "2897:1:2"
                                  }
                                ],
                                "id": 814,
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
                                              "referencedDeclaration": 781,
                                              "type": "uint256",
                                              "value": "higherPercent"
                                            },
                                            "id": 815,
                                            "name": "Identifier",
                                            "src": "2917:13:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 798,
                                              "type": "uint256",
                                              "value": "currentPercent"
                                            },
                                            "id": 816,
                                            "name": "Identifier",
                                            "src": "2933:14:2"
                                          }
                                        ],
                                        "id": 817,
                                        "name": "Assignment",
                                        "src": "2917:30:2"
                                      }
                                    ],
                                    "id": 818,
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
                                              "referencedDeclaration": 288,
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
                                                      "referencedDeclaration": 306,
                                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                      "value": "elections"
                                                    },
                                                    "id": 819,
                                                    "name": "Identifier",
                                                    "src": "2965:9:2"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 777,
                                                      "type": "uint256",
                                                      "value": "_electionId"
                                                    },
                                                    "id": 820,
                                                    "name": "Identifier",
                                                    "src": "2975:11:2"
                                                  }
                                                ],
                                                "id": 821,
                                                "name": "IndexAccess",
                                                "src": "2965:22:2"
                                              }
                                            ],
                                            "id": 822,
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
                                                  "referencedDeclaration": 286,
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
                                                          "referencedDeclaration": 306,
                                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                          "value": "elections"
                                                        },
                                                        "id": 823,
                                                        "name": "Identifier",
                                                        "src": "2997:9:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 777,
                                                          "type": "uint256",
                                                          "value": "_electionId"
                                                        },
                                                        "id": 824,
                                                        "name": "Identifier",
                                                        "src": "3007:11:2"
                                                      }
                                                    ],
                                                    "id": 825,
                                                    "name": "IndexAccess",
                                                    "src": "2997:22:2"
                                                  }
                                                ],
                                                "id": 826,
                                                "name": "MemberAccess",
                                                "src": "2997:30:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 784,
                                                  "type": "uint256",
                                                  "value": "i"
                                                },
                                                "id": 827,
                                                "name": "Identifier",
                                                "src": "3028:1:2"
                                              }
                                            ],
                                            "id": 828,
                                            "name": "IndexAccess",
                                            "src": "2997:33:2"
                                          }
                                        ],
                                        "id": 829,
                                        "name": "Assignment",
                                        "src": "2965:65:2"
                                      }
                                    ],
                                    "id": 830,
                                    "name": "ExpressionStatement",
                                    "src": "2965:65:2"
                                  }
                                ],
                                "id": 831,
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
                                          "referencedDeclaration": 798,
                                          "type": "uint256",
                                          "value": "currentPercent"
                                        },
                                        "id": 832,
                                        "name": "Identifier",
                                        "src": "3067:14:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 781,
                                          "type": "uint256",
                                          "value": "higherPercent"
                                        },
                                        "id": 833,
                                        "name": "Identifier",
                                        "src": "3084:13:2"
                                      }
                                    ],
                                    "id": 834,
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
                                                  "referencedDeclaration": 781,
                                                  "type": "uint256",
                                                  "value": "higherPercent"
                                                },
                                                "id": 835,
                                                "name": "Identifier",
                                                "src": "3116:13:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 798,
                                                  "type": "uint256",
                                                  "value": "currentPercent"
                                                },
                                                "id": 836,
                                                "name": "Identifier",
                                                "src": "3132:14:2"
                                              }
                                            ],
                                            "id": 837,
                                            "name": "Assignment",
                                            "src": "3116:30:2"
                                          }
                                        ],
                                        "id": 838,
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
                                                  "referencedDeclaration": 288,
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
                                                          "referencedDeclaration": 306,
                                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                          "value": "elections"
                                                        },
                                                        "id": 839,
                                                        "name": "Identifier",
                                                        "src": "3164:9:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 777,
                                                          "type": "uint256",
                                                          "value": "_electionId"
                                                        },
                                                        "id": 840,
                                                        "name": "Identifier",
                                                        "src": "3174:11:2"
                                                      }
                                                    ],
                                                    "id": 841,
                                                    "name": "IndexAccess",
                                                    "src": "3164:22:2"
                                                  }
                                                ],
                                                "id": 842,
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
                                                      "referencedDeclaration": 286,
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
                                                              "referencedDeclaration": 306,
                                                              "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                              "value": "elections"
                                                            },
                                                            "id": 843,
                                                            "name": "Identifier",
                                                            "src": "3196:9:2"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 777,
                                                              "type": "uint256",
                                                              "value": "_electionId"
                                                            },
                                                            "id": 844,
                                                            "name": "Identifier",
                                                            "src": "3206:11:2"
                                                          }
                                                        ],
                                                        "id": 845,
                                                        "name": "IndexAccess",
                                                        "src": "3196:22:2"
                                                      }
                                                    ],
                                                    "id": 846,
                                                    "name": "MemberAccess",
                                                    "src": "3196:30:2"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 784,
                                                      "type": "uint256",
                                                      "value": "i"
                                                    },
                                                    "id": 847,
                                                    "name": "Identifier",
                                                    "src": "3227:1:2"
                                                  }
                                                ],
                                                "id": 848,
                                                "name": "IndexAccess",
                                                "src": "3196:33:2"
                                              }
                                            ],
                                            "id": 849,
                                            "name": "Assignment",
                                            "src": "3164:65:2"
                                          }
                                        ],
                                        "id": 850,
                                        "name": "ExpressionStatement",
                                        "src": "3164:65:2"
                                      }
                                    ],
                                    "id": 851,
                                    "name": "Block",
                                    "src": "3098:146:2"
                                  }
                                ],
                                "id": 852,
                                "name": "IfStatement",
                                "src": "3063:181:2"
                              }
                            ],
                            "id": 853,
                            "name": "IfStatement",
                            "src": "2889:355:2"
                          }
                        ],
                        "id": 854,
                        "name": "Block",
                        "src": "2763:491:2"
                      }
                    ],
                    "id": 855,
                    "name": "ForStatement",
                    "src": "2700:554:2"
                  }
                ],
                "id": 856,
                "name": "Block",
                "src": "2662:598:2"
              }
            ],
            "id": 857,
            "name": "FunctionDefinition",
            "src": "2604:656:2"
          }
        ],
        "id": 858,
        "name": "ContractDefinition",
        "src": "185:3077:2"
      }
    ],
    "id": 859,
    "name": "SourceUnit",
    "src": "32:3231:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.7.0+commit.9e61f92b.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.3",
  "updatedAt": "2021-01-21T16:57:14.449Z",
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