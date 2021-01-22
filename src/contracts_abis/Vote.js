export const voteContractABI = {
  "contractName": "Vote",
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
      "type": "function",
      "constant": true
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
      "name": "computeFinalRoundWinner",
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
      "name": "computeResult",
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "name": "hasAlreadyVoted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_electionId",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "_notes",
          "type": "uint256[]"
        }
      ],
      "name": "voteToElection",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.7.0+commit.9e61f92b\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"addAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_candidateName\",\"type\":\"string\"}],\"name\":\"addCandidate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_noteId\",\"type\":\"uint256\"}],\"name\":\"addNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"addVoter\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_note\",\"type\":\"uint256\"}],\"name\":\"calculatePercentageOfNote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"computeAverageNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeCandidatesAverageNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeFinalRoundWinner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeFirstRoundWinners\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeResult\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_title\",\"type\":\"string\"},{\"internalType\":\"string[]\",\"name\":\"_candidatesNames\",\"type\":\"string[]\"}],\"name\":\"createElection\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"deleteAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"elections\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"creationDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"closingDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalVoters\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"isOpen\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"candidatesCount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"winner\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"electionsCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"endElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"getCandidate\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_noteId\",\"type\":\"uint256\"}],\"name\":\"getCandidateNote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getCandidatesCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionStatus\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionTitle\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionWinner\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getFirstRoundWinners\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"}],\"name\":\"getOneFirstRoundWinner\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"hasAlreadyVoted\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"incrementVoters\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"userAddress\",\"type\":\"address\"}],\"name\":\"isUserAdmin\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256[]\",\"name\":\"_notes\",\"type\":\"uint256[]\"}],\"name\":\"voteToElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"voteToElection(uint256,uint256[])\":{\"notice\":\"Gives one note to each candidates of the election\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Vote.sol\":\"Vote\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Candidate.sol\":{\"keccak256\":\"0x52d89b6f9a5d2c22104d8f090f446f41dc184f58ef0ea7d506d49a2d040ccd28\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://dea9346bfae0da013fd9b79345beeb639f75449ad46f6726053b04714887d118\",\"dweb:/ipfs/QmcbgNcwp1NG67WPRF12ugtpKYsf1HQcxWcHZ1aHZd55hU\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol\":{\"keccak256\":\"0xce6751d48384d436adae7ede503e293aef6c33f25dc3c27f80ee01419166efc4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://06d99d3abb2c0a1ddeeab27ca5ce4c6699a2dc50053bf48e170c9ee1f9256bdb\",\"dweb:/ipfs/Qmbh2ovDKNRdchUgeLjo8f7tkESLu1sxyvZTqsQswMPL5H\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol\":{\"keccak256\":\"0x57b58313951c20ec7741dbfb1e7d17a658998df4199603706ea1413d6a3d7d41\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e6b967ccd12912c7dd85b88e167f07c28a66c81f2f2e020557fb551e13da9cc3\",\"dweb:/ipfs/QmaunG12zPety2gSKKBwSDSb4xyEb2VsBYzDkYh5hcZGDr\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Vote.sol\":{\"keccak256\":\"0xd58a75050ef0203e261ded70e465913f4ee51ebc59d555d27549bd1e49562e16\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a88c023683d296560444ef74d3698d935cd6b3d4120a94a4149e2e1ef1ab6dbd\",\"dweb:/ipfs/QmadKeeCR3kLyBnaZk1s1v1YhGrnq6SmBs4ZQfCB2BtY1V\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol\":{\"keccak256\":\"0x7f1004825e1cc40d7b663e20d3be71ed9c64baf7f05eae9b115a4d4448c8fdcf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5d8ccf5e65c162aeabb1b5e804f7183d95be7a985d5466796025a39ede9cfa62\",\"dweb:/ipfs/QmNZR6izJaw2bC9aCAcVbtS1kE9YBWuuqoaryy8idA14ta\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600560008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506124ae806100d96000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80637fa67b1311610104578063be4d823e116100a2578063d8f7a0bb11610071578063d8f7a0bb14610578578063e62c6ac514610594578063e76f6b58146105c4578063f2fde38b146105f4576101cf565b8063be4d823e14610508578063cd015c3214610524578063cd08bca014610540578063cd62d5dd1461055c576101cf565b80639c98bcbb116100de5780639c98bcbb14610484578063a0b17848146104a0578063ab6cb049146104bc578063b12b1a7d146104d8576101cf565b80637fa67b13146104185780638da5cb5b146104485780639a74c69514610466576101cf565b80633ee95f00116101715780635e6fef011161014b5780635e6fef011461037a57806370480275146103b057806374d523a8146103cc5780637bb1541d146103fc576101cf565b80633ee95f00146102e85780634bd46448146103185780634d94fc6a1461034a576101cf565b806327e1f7df116101ad57806327e1f7df1461023c578063337fa14614610258578063349813b2146102885780633a0b35b7146102b8576101cf565b80631750a3d0146101d45780631aaa5246146101f057806324785b9e1461020c575b600080fd5b6101ee60048036038101906101e99190611dd2565b610610565b005b61020a60048036038101906102059190611d28565b610677565b005b61022660048036038101906102219190611d28565b6106a0565b60405161023391906120ff565b60405180910390f35b61025660048036038101906102519190611c6a565b6106cd565b005b610272600480360381019061026d9190611e62565b61084c565b60405161027f9190612270565b60405180910390f35b6102a2600480360381019061029d9190611cbc565b610893565b6040516102af9190612270565b60405180910390f35b6102d260048036038101906102cd9190611e62565b610a8b565b6040516102df9190612270565b60405180910390f35b61030260048036038101906102fd9190611d28565b610b1b565b60405161030f9190612270565b60405180910390f35b610332600480360381019061032d9190611e26565b610b3b565b6040516103419392919061213c565b60405180910390f35b610364600480360381019061035f9190611d28565b610c23565b604051610371919061211a565b60405180910390f35b610394600480360381019061038f9190611d28565b610cdb565b6040516103a7979695949392919061217a565b60405180910390f35b6103ca60048036038101906103c59190611c6a565b610dc2565b005b6103e660048036038101906103e19190611c6a565b610eb2565b6040516103f391906120ff565b60405180910390f35b61041660048036038101906104119190611d28565b610f08565b005b610432600480360381019061042d9190611d28565b611048565b60405161043f91906120ff565b60405180910390f35b6104506110b2565b60405161045d91906120c2565b60405180910390f35b61046e6110d6565b60405161047b9190612270565b60405180910390f35b61049e60048036038101906104999190611d28565b6110dc565b005b6104ba60048036038101906104b59190611d7a565b6111c7565b005b6104d660048036038101906104d19190611d28565b611347565b005b6104f260048036038101906104ed9190611d28565b611383565b6040516104ff91906120dd565b60405180910390f35b610522600480360381019061051d9190611d28565b6113f1565b005b61053e60048036038101906105399190611d28565b611487565b005b61055a60048036038101906105559190611e62565b6115ef565b005b61057660048036038101906105719190611e26565b61163f565b005b610592600480360381019061058d9190611d28565b611829565b005b6105ae60048036038101906105a99190611d28565b6118a1565b6040516105bb9190612270565b60405180910390f35b6105de60048036038101906105d99190611e26565b6118c1565b6040516105eb9190612270565b60405180910390f35b61060e60048036038101906106099190611c6a565b6118f7565b005b806002600084815260200190815260200160002060060160006002600086815260200190815260200160002060050160008154809291906001019190505581526020019081526020016000206000019080519060200190610672929190611a46565b505050565b600260008281526020019081526020016000206003016000815480929190600101919050555050565b60006002600083815260200190815260200160002060040160009054906101000a900460ff169050919050565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610761576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075890612210565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156107f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e790612250565b60405180910390fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600060026000858152602001908152602001600020600601600084815260200190815260200160002060010160008381526020019081526020016000205490509392505050565b60003360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610929576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092090612210565b60405180910390fd5b6000835190506001600081548092919060010191905055506000600260006001548152602001908152602001600020905085816000019080519060200190610972929190611a46565b504281600101819055506000816003018190555060018160040160006101000a81548160ff02191690831515021790555060005b828110156109da576109cd6001548783815181106109c057fe5b6020026020010151610610565b80806001019150506109a6565b503360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600154935050505092915050565b600080600260008681526020019081526020016000206006016000858152602001908152602001600020600101600084815260200190815260200160002054905060006064820290506000600260008881526020019081526020016000206003015490506000811415610b045760009350505050610b14565b808281610b0d57fe5b0493505050505b9392505050565b600060026000838152602001908152602001600020600501549050919050565b6060600080600060026000878152602001908152602001600020600601600086815260200190815260200160002090508060000181600201548260030154828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c0e5780601f10610be357610100808354040283529160200191610c0e565b820191906000526020600020905b815481529060010190602001808311610bf157829003601f168201915b50505050509250935093509350509250925092565b6060600260008381526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ccf5780601f10610ca457610100808354040283529160200191610ccf565b820191906000526020600020905b815481529060010190602001808311610cb257829003601f168201915b50505050509050919050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d875780601f10610d5c57610100808354040283529160200191610d87565b820191906000526020600020905b815481529060010190602001808311610d6a57829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154908060090154905087565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610e56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4d90612210565b60405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b6002600084815260200190815260200160002060080180549050811015611043576000600260008581526020019081526020016000206006016000600260008781526020019081526020016000206008018481548110610f6c57fe5b906000526020600020015481526020019081526020016000206002015490506000821415610fe257809250600260008581526020019081526020016000206008018281548110610fb857fe5b90600052602060002001546002600086815260200190815260200160002060090181905550611035565b828111156110345780925060026000858152602001908152602001600020600801828154811061100e57fe5b906000526020600020015460026000868152602001908152602001600020600901819055505b5b508080600101915050610f10565b505050565b60006002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514611170576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161116790612210565b60405180910390fd5b60006002600084815260200190815260200160002060040160006101000a81548160ff0219169083151502179055504260026000848152602001908152602001600020600201819055506111c3826113f1565b5050565b823073ffffffffffffffffffffffffffffffffffffffff16637fa67b13826040518263ffffffff1660e01b81526004016112019190612270565b60206040518083038186803b15801561121957600080fd5b505afa15801561122d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112519190611c93565b15611291576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611288906121f0565b60405180910390fd5b828290506002600086815260200190815260200160002060050154146112ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e390612230565b60405180910390fd5b60005b60026000868152602001908152602001600020600501548110156113375761132a858286868581811061131e57fe5b905060200201356115ef565b80806001019150506112ef565b5061134184611829565b50505050565b60005b600260008381526020019081526020016000206005015481101561137f57611372828261163f565b808060010191505061134a565b5050565b6060600260008381526020019081526020016000206008018054806020026020016040519081016040528092919081815260200182805480156113e557602002820191906000526020600020905b8154815260200190600101908083116113d1575b50505050509050919050565b6113fa81611347565b61140381611487565b61140c81610f08565b60016002600083815260200190815260200160002060080180549050111561143c5761143781610f08565b611484565b6002600082815260200190815260200160002060080160008154811061145e57fe5b906000526020600020015460026000838152602001908152602001600020600901819055505b50565b6000805b60026000848152602001908152602001600020600501548110156115ea576002600084815260200190815260200160002060060160008281526020019081526020016000206003015482141561151d57600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150556115dd565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301548210156115dc576002600084815260200190815260200160002060080160006115719190611ac6565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301549150600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150555b5b808060010191505061148b565b505050565b600260008481526020019081526020016000206006016000838152602001908152602001600020600101600082815260200190815260200160002060008154809291906001019190505550505050565b60006002600084815260200190815260200160002060030154141561169357600060026000848152602001908152602001600020600601600083815260200190815260200160002060030181905550611825565b6000600690505b60326002600085815260200190815260200160002060060160008481526020019081526020016000206002015411611823573073ffffffffffffffffffffffffffffffffffffffff16633a0b35b78484846040518463ffffffff1660e01b81526004016117099392919061228b565b60206040518083038186803b15801561172157600080fd5b505afa158015611735573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117599190611d51565b600260008581526020019081526020016000206006016000848152602001908152602001600020600201540160026000858152602001908152602001600020600601600084815260200190815260200160002060020181905550603260026000858152602001908152602001600020600601600084815260200190815260200160002060020154106118155780600260008581526020019081526020016000206006016000848152602001908152602001600020600301819055505b80806001900391505061169a565b505b5050565b60016002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061189e81610677565b50565b600060026000838152602001908152602001600020600901549050919050565b60006002600084815260200190815260200160002060080182815481106118e457fe5b9060005260206000200154905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461194f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561198957600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611a8757805160ff1916838001178555611ab5565b82800160010185558215611ab5579182015b82811115611ab4578251825591602001919060010190611a99565b5b509050611ac29190611ae7565b5090565b5080546000825590600052602060002090810190611ae49190611ae7565b50565b5b80821115611b00576000816000905550600101611ae8565b5090565b600081359050611b1381612433565b92915050565b600082601f830112611b2a57600080fd5b8135611b3d611b38826122ef565b6122c2565b9150818183526020840193506020810190508360005b83811015611b835781358601611b698882611bec565b845260208401935060208301925050600181019050611b53565b5050505092915050565b60008083601f840112611b9f57600080fd5b8235905067ffffffffffffffff811115611bb857600080fd5b602083019150836020820283011115611bd057600080fd5b9250929050565b600081519050611be68161244a565b92915050565b600082601f830112611bfd57600080fd5b8135611c10611c0b82612317565b6122c2565b91508082526020830160208301858383011115611c2c57600080fd5b611c378382846123e0565b50505092915050565b600081359050611c4f81612461565b92915050565b600081519050611c6481612461565b92915050565b600060208284031215611c7c57600080fd5b6000611c8a84828501611b04565b91505092915050565b600060208284031215611ca557600080fd5b6000611cb384828501611bd7565b91505092915050565b60008060408385031215611ccf57600080fd5b600083013567ffffffffffffffff811115611ce957600080fd5b611cf585828601611bec565b925050602083013567ffffffffffffffff811115611d1257600080fd5b611d1e85828601611b19565b9150509250929050565b600060208284031215611d3a57600080fd5b6000611d4884828501611c40565b91505092915050565b600060208284031215611d6357600080fd5b6000611d7184828501611c55565b91505092915050565b600080600060408486031215611d8f57600080fd5b6000611d9d86828701611c40565b935050602084013567ffffffffffffffff811115611dba57600080fd5b611dc686828701611b8d565b92509250509250925092565b60008060408385031215611de557600080fd5b6000611df385828601611c40565b925050602083013567ffffffffffffffff811115611e1057600080fd5b611e1c85828601611bec565b9150509250929050565b60008060408385031215611e3957600080fd5b6000611e4785828601611c40565b9250506020611e5885828601611c40565b9150509250929050565b600080600060608486031215611e7757600080fd5b6000611e8586828701611c40565b9350506020611e9686828701611c40565b9250506040611ea786828701611c40565b9150509250925092565b6000611ebd83836120a4565b60208301905092915050565b611ed281612398565b82525050565b6000611ee382612353565b611eed8185612376565b9350611ef883612343565b8060005b83811015611f29578151611f108882611eb1565b9750611f1b83612369565b925050600181019050611efc565b5085935050505092915050565b611f3f816123aa565b82525050565b6000611f508261235e565b611f5a8185612387565b9350611f6a8185602086016123ef565b611f7381612422565b840191505092915050565b6000611f8b601683612387565b91507f557365722068617320616c726561647920766f746564000000000000000000006000830152602082019050919050565b6000611fcb601483612387565b91507f596f7520617265206e6f7420616e2061646d696e0000000000000000000000006000830152602082019050919050565b600061200b602783612387565b91507f4e6f742073616d6520616d6f756e74206f662063616e6469646174657320616e60008301527f6420766f746573000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612071601f83612387565b91507f43616e6e6f742072656d6f7665206f776e65722066726f6d2061646d696e73006000830152602082019050919050565b6120ad816123d6565b82525050565b6120bc816123d6565b82525050565b60006020820190506120d76000830184611ec9565b92915050565b600060208201905081810360008301526120f78184611ed8565b905092915050565b60006020820190506121146000830184611f36565b92915050565b600060208201905081810360008301526121348184611f45565b905092915050565b600060608201905081810360008301526121568186611f45565b905061216560208301856120b3565b61217260408301846120b3565b949350505050565b600060e0820190508181036000830152612194818a611f45565b90506121a360208301896120b3565b6121b060408301886120b3565b6121bd60608301876120b3565b6121ca6080830186611f36565b6121d760a08301856120b3565b6121e460c08301846120b3565b98975050505050505050565b6000602082019050818103600083015261220981611f7e565b9050919050565b6000602082019050818103600083015261222981611fbe565b9050919050565b6000602082019050818103600083015261224981611ffe565b9050919050565b6000602082019050818103600083015261226981612064565b9050919050565b600060208201905061228560008301846120b3565b92915050565b60006060820190506122a060008301866120b3565b6122ad60208301856120b3565b6122ba60408301846120b3565b949350505050565b6000604051905081810181811067ffffffffffffffff821117156122e557600080fd5b8060405250919050565b600067ffffffffffffffff82111561230657600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561232e57600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006123a3826123b6565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561240d5780820151818401526020810190506123f2565b8381111561241c576000848401525b50505050565b6000601f19601f8301169050919050565b61243c81612398565b811461244757600080fd5b50565b612453816123aa565b811461245e57600080fd5b50565b61246a816123d6565b811461247557600080fd5b5056fea26469706673582212202a89e219eadb074c326982cd27bd5b2c16182b97a4c84f5aa6d7861ba233c10864736f6c63430007000033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101cf5760003560e01c80637fa67b1311610104578063be4d823e116100a2578063d8f7a0bb11610071578063d8f7a0bb14610578578063e62c6ac514610594578063e76f6b58146105c4578063f2fde38b146105f4576101cf565b8063be4d823e14610508578063cd015c3214610524578063cd08bca014610540578063cd62d5dd1461055c576101cf565b80639c98bcbb116100de5780639c98bcbb14610484578063a0b17848146104a0578063ab6cb049146104bc578063b12b1a7d146104d8576101cf565b80637fa67b13146104185780638da5cb5b146104485780639a74c69514610466576101cf565b80633ee95f00116101715780635e6fef011161014b5780635e6fef011461037a57806370480275146103b057806374d523a8146103cc5780637bb1541d146103fc576101cf565b80633ee95f00146102e85780634bd46448146103185780634d94fc6a1461034a576101cf565b806327e1f7df116101ad57806327e1f7df1461023c578063337fa14614610258578063349813b2146102885780633a0b35b7146102b8576101cf565b80631750a3d0146101d45780631aaa5246146101f057806324785b9e1461020c575b600080fd5b6101ee60048036038101906101e99190611dd2565b610610565b005b61020a60048036038101906102059190611d28565b610677565b005b61022660048036038101906102219190611d28565b6106a0565b60405161023391906120ff565b60405180910390f35b61025660048036038101906102519190611c6a565b6106cd565b005b610272600480360381019061026d9190611e62565b61084c565b60405161027f9190612270565b60405180910390f35b6102a2600480360381019061029d9190611cbc565b610893565b6040516102af9190612270565b60405180910390f35b6102d260048036038101906102cd9190611e62565b610a8b565b6040516102df9190612270565b60405180910390f35b61030260048036038101906102fd9190611d28565b610b1b565b60405161030f9190612270565b60405180910390f35b610332600480360381019061032d9190611e26565b610b3b565b6040516103419392919061213c565b60405180910390f35b610364600480360381019061035f9190611d28565b610c23565b604051610371919061211a565b60405180910390f35b610394600480360381019061038f9190611d28565b610cdb565b6040516103a7979695949392919061217a565b60405180910390f35b6103ca60048036038101906103c59190611c6a565b610dc2565b005b6103e660048036038101906103e19190611c6a565b610eb2565b6040516103f391906120ff565b60405180910390f35b61041660048036038101906104119190611d28565b610f08565b005b610432600480360381019061042d9190611d28565b611048565b60405161043f91906120ff565b60405180910390f35b6104506110b2565b60405161045d91906120c2565b60405180910390f35b61046e6110d6565b60405161047b9190612270565b60405180910390f35b61049e60048036038101906104999190611d28565b6110dc565b005b6104ba60048036038101906104b59190611d7a565b6111c7565b005b6104d660048036038101906104d19190611d28565b611347565b005b6104f260048036038101906104ed9190611d28565b611383565b6040516104ff91906120dd565b60405180910390f35b610522600480360381019061051d9190611d28565b6113f1565b005b61053e60048036038101906105399190611d28565b611487565b005b61055a60048036038101906105559190611e62565b6115ef565b005b61057660048036038101906105719190611e26565b61163f565b005b610592600480360381019061058d9190611d28565b611829565b005b6105ae60048036038101906105a99190611d28565b6118a1565b6040516105bb9190612270565b60405180910390f35b6105de60048036038101906105d99190611e26565b6118c1565b6040516105eb9190612270565b60405180910390f35b61060e60048036038101906106099190611c6a565b6118f7565b005b806002600084815260200190815260200160002060060160006002600086815260200190815260200160002060050160008154809291906001019190505581526020019081526020016000206000019080519060200190610672929190611a46565b505050565b600260008281526020019081526020016000206003016000815480929190600101919050555050565b60006002600083815260200190815260200160002060040160009054906101000a900460ff169050919050565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610761576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075890612210565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156107f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e790612250565b60405180910390fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600060026000858152602001908152602001600020600601600084815260200190815260200160002060010160008381526020019081526020016000205490509392505050565b60003360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610929576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092090612210565b60405180910390fd5b6000835190506001600081548092919060010191905055506000600260006001548152602001908152602001600020905085816000019080519060200190610972929190611a46565b504281600101819055506000816003018190555060018160040160006101000a81548160ff02191690831515021790555060005b828110156109da576109cd6001548783815181106109c057fe5b6020026020010151610610565b80806001019150506109a6565b503360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600154935050505092915050565b600080600260008681526020019081526020016000206006016000858152602001908152602001600020600101600084815260200190815260200160002054905060006064820290506000600260008881526020019081526020016000206003015490506000811415610b045760009350505050610b14565b808281610b0d57fe5b0493505050505b9392505050565b600060026000838152602001908152602001600020600501549050919050565b6060600080600060026000878152602001908152602001600020600601600086815260200190815260200160002090508060000181600201548260030154828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c0e5780601f10610be357610100808354040283529160200191610c0e565b820191906000526020600020905b815481529060010190602001808311610bf157829003601f168201915b50505050509250935093509350509250925092565b6060600260008381526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ccf5780601f10610ca457610100808354040283529160200191610ccf565b820191906000526020600020905b815481529060010190602001808311610cb257829003601f168201915b50505050509050919050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d875780601f10610d5c57610100808354040283529160200191610d87565b820191906000526020600020905b815481529060010190602001808311610d6a57829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154908060090154905087565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610e56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4d90612210565b60405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b6002600084815260200190815260200160002060080180549050811015611043576000600260008581526020019081526020016000206006016000600260008781526020019081526020016000206008018481548110610f6c57fe5b906000526020600020015481526020019081526020016000206002015490506000821415610fe257809250600260008581526020019081526020016000206008018281548110610fb857fe5b90600052602060002001546002600086815260200190815260200160002060090181905550611035565b828111156110345780925060026000858152602001908152602001600020600801828154811061100e57fe5b906000526020600020015460026000868152602001908152602001600020600901819055505b5b508080600101915050610f10565b505050565b60006002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514611170576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161116790612210565b60405180910390fd5b60006002600084815260200190815260200160002060040160006101000a81548160ff0219169083151502179055504260026000848152602001908152602001600020600201819055506111c3826113f1565b5050565b823073ffffffffffffffffffffffffffffffffffffffff16637fa67b13826040518263ffffffff1660e01b81526004016112019190612270565b60206040518083038186803b15801561121957600080fd5b505afa15801561122d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112519190611c93565b15611291576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611288906121f0565b60405180910390fd5b828290506002600086815260200190815260200160002060050154146112ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e390612230565b60405180910390fd5b60005b60026000868152602001908152602001600020600501548110156113375761132a858286868581811061131e57fe5b905060200201356115ef565b80806001019150506112ef565b5061134184611829565b50505050565b60005b600260008381526020019081526020016000206005015481101561137f57611372828261163f565b808060010191505061134a565b5050565b6060600260008381526020019081526020016000206008018054806020026020016040519081016040528092919081815260200182805480156113e557602002820191906000526020600020905b8154815260200190600101908083116113d1575b50505050509050919050565b6113fa81611347565b61140381611487565b61140c81610f08565b60016002600083815260200190815260200160002060080180549050111561143c5761143781610f08565b611484565b6002600082815260200190815260200160002060080160008154811061145e57fe5b906000526020600020015460026000838152602001908152602001600020600901819055505b50565b6000805b60026000848152602001908152602001600020600501548110156115ea576002600084815260200190815260200160002060060160008281526020019081526020016000206003015482141561151d57600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150556115dd565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301548210156115dc576002600084815260200190815260200160002060080160006115719190611ac6565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301549150600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150555b5b808060010191505061148b565b505050565b600260008481526020019081526020016000206006016000838152602001908152602001600020600101600082815260200190815260200160002060008154809291906001019190505550505050565b60006002600084815260200190815260200160002060030154141561169357600060026000848152602001908152602001600020600601600083815260200190815260200160002060030181905550611825565b6000600690505b60326002600085815260200190815260200160002060060160008481526020019081526020016000206002015411611823573073ffffffffffffffffffffffffffffffffffffffff16633a0b35b78484846040518463ffffffff1660e01b81526004016117099392919061228b565b60206040518083038186803b15801561172157600080fd5b505afa158015611735573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117599190611d51565b600260008581526020019081526020016000206006016000848152602001908152602001600020600201540160026000858152602001908152602001600020600601600084815260200190815260200160002060020181905550603260026000858152602001908152602001600020600601600084815260200190815260200160002060020154106118155780600260008581526020019081526020016000206006016000848152602001908152602001600020600301819055505b80806001900391505061169a565b505b5050565b60016002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061189e81610677565b50565b600060026000838152602001908152602001600020600901549050919050565b60006002600084815260200190815260200160002060080182815481106118e457fe5b9060005260206000200154905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461194f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561198957600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611a8757805160ff1916838001178555611ab5565b82800160010185558215611ab5579182015b82811115611ab4578251825591602001919060010190611a99565b5b509050611ac29190611ae7565b5090565b5080546000825590600052602060002090810190611ae49190611ae7565b50565b5b80821115611b00576000816000905550600101611ae8565b5090565b600081359050611b1381612433565b92915050565b600082601f830112611b2a57600080fd5b8135611b3d611b38826122ef565b6122c2565b9150818183526020840193506020810190508360005b83811015611b835781358601611b698882611bec565b845260208401935060208301925050600181019050611b53565b5050505092915050565b60008083601f840112611b9f57600080fd5b8235905067ffffffffffffffff811115611bb857600080fd5b602083019150836020820283011115611bd057600080fd5b9250929050565b600081519050611be68161244a565b92915050565b600082601f830112611bfd57600080fd5b8135611c10611c0b82612317565b6122c2565b91508082526020830160208301858383011115611c2c57600080fd5b611c378382846123e0565b50505092915050565b600081359050611c4f81612461565b92915050565b600081519050611c6481612461565b92915050565b600060208284031215611c7c57600080fd5b6000611c8a84828501611b04565b91505092915050565b600060208284031215611ca557600080fd5b6000611cb384828501611bd7565b91505092915050565b60008060408385031215611ccf57600080fd5b600083013567ffffffffffffffff811115611ce957600080fd5b611cf585828601611bec565b925050602083013567ffffffffffffffff811115611d1257600080fd5b611d1e85828601611b19565b9150509250929050565b600060208284031215611d3a57600080fd5b6000611d4884828501611c40565b91505092915050565b600060208284031215611d6357600080fd5b6000611d7184828501611c55565b91505092915050565b600080600060408486031215611d8f57600080fd5b6000611d9d86828701611c40565b935050602084013567ffffffffffffffff811115611dba57600080fd5b611dc686828701611b8d565b92509250509250925092565b60008060408385031215611de557600080fd5b6000611df385828601611c40565b925050602083013567ffffffffffffffff811115611e1057600080fd5b611e1c85828601611bec565b9150509250929050565b60008060408385031215611e3957600080fd5b6000611e4785828601611c40565b9250506020611e5885828601611c40565b9150509250929050565b600080600060608486031215611e7757600080fd5b6000611e8586828701611c40565b9350506020611e9686828701611c40565b9250506040611ea786828701611c40565b9150509250925092565b6000611ebd83836120a4565b60208301905092915050565b611ed281612398565b82525050565b6000611ee382612353565b611eed8185612376565b9350611ef883612343565b8060005b83811015611f29578151611f108882611eb1565b9750611f1b83612369565b925050600181019050611efc565b5085935050505092915050565b611f3f816123aa565b82525050565b6000611f508261235e565b611f5a8185612387565b9350611f6a8185602086016123ef565b611f7381612422565b840191505092915050565b6000611f8b601683612387565b91507f557365722068617320616c726561647920766f746564000000000000000000006000830152602082019050919050565b6000611fcb601483612387565b91507f596f7520617265206e6f7420616e2061646d696e0000000000000000000000006000830152602082019050919050565b600061200b602783612387565b91507f4e6f742073616d6520616d6f756e74206f662063616e6469646174657320616e60008301527f6420766f746573000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612071601f83612387565b91507f43616e6e6f742072656d6f7665206f776e65722066726f6d2061646d696e73006000830152602082019050919050565b6120ad816123d6565b82525050565b6120bc816123d6565b82525050565b60006020820190506120d76000830184611ec9565b92915050565b600060208201905081810360008301526120f78184611ed8565b905092915050565b60006020820190506121146000830184611f36565b92915050565b600060208201905081810360008301526121348184611f45565b905092915050565b600060608201905081810360008301526121568186611f45565b905061216560208301856120b3565b61217260408301846120b3565b949350505050565b600060e0820190508181036000830152612194818a611f45565b90506121a360208301896120b3565b6121b060408301886120b3565b6121bd60608301876120b3565b6121ca6080830186611f36565b6121d760a08301856120b3565b6121e460c08301846120b3565b98975050505050505050565b6000602082019050818103600083015261220981611f7e565b9050919050565b6000602082019050818103600083015261222981611fbe565b9050919050565b6000602082019050818103600083015261224981611ffe565b9050919050565b6000602082019050818103600083015261226981612064565b9050919050565b600060208201905061228560008301846120b3565b92915050565b60006060820190506122a060008301866120b3565b6122ad60208301856120b3565b6122ba60408301846120b3565b949350505050565b6000604051905081810181811067ffffffffffffffff821117156122e557600080fd5b8060405250919050565b600067ffffffffffffffff82111561230657600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561232e57600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006123a3826123b6565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561240d5780820151818401526020810190506123f2565b8381111561241c576000848401525b50505050565b6000601f19601f8301169050919050565b61243c81612398565b811461244757600080fd5b50565b612453816123aa565b811461245e57600080fd5b50565b61246a816123d6565b811461247557600080fd5b5056fea26469706673582212202a89e219eadb074c326982cd27bd5b2c16182b97a4c84f5aa6d7861ba233c10864736f6c63430007000033",
  "immutableReferences": {},
  "sourceMap": "160:799:4:-:0;;;;;;;;;;;;;552:10:5;544:5;;:18;;;;;;;;;;;;;;;;;;212:4:1;193:9;:16;203:5;;;;;;;;;;;193:16;;;;;;;;;;;;;;;;:23;;;;;;;;;;;;;;;;;;160:799:4;;;;;;",
  "deployedSourceMap": "160:799:4:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2170:191:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;342:104:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;609:125:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1166:193:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;879:190:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1486:678:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1075:406:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;736:137;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;452:278;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;471:132:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;717:43:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;;:::i;:::-;;;;;;;;1044:116;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1365:115;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2604:656:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;352:137:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;279:20:5;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;685:26:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;245:220:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;568:388:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1772:203:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1181:136;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1323:443;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1981:617;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;179:157:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1487:738;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;873:146:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;740:127;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1025:150;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;907:188:5;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2170:191:1;2340:14;2257:9;:22;2267:11;2257:22;;;;;;;;;;;:33;;:75;2291:9;:22;2301:11;2291:22;;;;;;;;;;;:38;;;:40;;;;;;;;;;;;2257:75;;;;;;;;;;;:80;;:97;;;;;;;;;;;;:::i;:::-;;2170:191;;:::o;342:104:0:-;402:9;:22;412:11;402:22;;;;;;;;;;;:34;;;:37;;;;;;;;;;;;;342:104;:::o;609:125:2:-;675:4;698:9;:22;708:11;698:22;;;;;;;;;;;:29;;;;;;;;;;;;691:36;;609:125;;;:::o;1166:193:1:-;1226:10;991:4;964:31;;:9;:23;974:12;964:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;955:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1270:5:::1;::::0;::::1;;;;;;;;1256:19;;:10;:19;;;;1248:63;;;;;;;;;;;;:::i;:::-;;;;;;;;;1347:5;1321:9;:23;1331:12;1321:23;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;;;;;;;1166:193:::0;;:::o;879:190:0:-;977:4;1000:9;:22;1010:11;1000:22;;;;;;;;;;;:33;;:47;1034:12;1000:47;;;;;;;;;;;:53;;:62;1054:7;1000:62;;;;;;;;;;;;993:69;;879:190;;;;;:::o;1486:678:1:-;1604:4;1583:10;991:4;964:31;;:9;:23;974:12;964:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;955:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1620:17:::1;1640:16;:23;1620:43;;1673:14;;:16;;;;;;;;;;;;;1699:25;1727:9;:25;1737:14;;1727:25;;;;;;;;;;;1699:53;;1779:6;1762:8;:14;;:23;;;;;;;;;;;;:::i;:::-;;1819:15;1795:8;:21;;:39;;;;1867:1;1844:8;:20;;:24;;;;1896:4;1878:8;:15;;;:22;;;;;;;;;;;;;;;;;;1916:6;1911:114;1932:12;1928:1;:16;1911:114;;;1965:49;1978:14;;1994:16;2011:1;1994:19;;;;;;;;;;;;;;1965:12;:49::i;:::-;1946:3;;;;;;;1911:114;;;;2069:10;2035:15;:31;2051:14;;2035:31;;;;;;;;;;;;:44;;;;;;;;;;;;;;;;;;2124:1;2090:18;:30;2109:10;2090:30;;;;;;;;;;;;;;;;:35;;;;;;;;;;;2143:14;;2136:21;;;;1486:678:::0;;;;;:::o;1075:406:0:-;1181:4;1196:9;1208;:22;1218:11;1208:22;;;;;;;;;;;:33;;:47;1242:12;1208:47;;;;;;;;;;;:53;;:60;1262:5;1208:60;;;;;;;;;;;;1196:72;;1278:15;1303:3;1296:4;:10;1278:28;;1316:16;1335:9;:22;1345:11;1335:22;;;;;;;;;;;:34;;;1316:53;;1398:1;1383:11;:16;1379:55;;;1422:1;1415:8;;;;;;;1379:55;1463:11;1450:10;:24;;;;;;1443:31;;;;;1075:406;;;;;;:::o;736:137::-;805:4;828:9;:22;838:11;828:22;;;;;;;;;;;:38;;;821:45;;736:137;;;:::o;452:278::-;534:13;549:4;555;571:27;601:9;:22;611:11;601:22;;;;;;;;;;;:33;;:47;635:12;601:47;;;;;;;;;;;571:77;;666:9;:14;;682:9;:17;;;701:9;:21;;;658:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;452:278;;;;;:::o;471:132:2:-;536:13;568:9;:22;578:11;568:22;;;;;;;;;;;:28;;561:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;471:132;;;:::o;717:43:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1044:116::-;1101:10;991:4;964:31;;:9;:23;974:12;964:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;955:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1149:4:::1;1123:9;:23;1133:12;1123:23;;;;;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;1044:116:::0;;:::o;1365:115::-;1429:4;1451:9;:22;1461:11;1451:22;;;;;;;;;;;;;;;;;;;;;;;;;1444:29;;1365:115;;;:::o;2604:656:2:-;2672:18;2704:6;2713:1;2704:10;;2700:554;2720:9;:22;2730:11;2720:22;;;;;;;;;;;:30;;:37;;;;2716:1;:41;2700:554;;;2777:19;2799:9;:22;2809:11;2799:22;;;;;;;;;;;:33;;:68;2833:9;:22;2843:11;2833:22;;;;;;;;;;;:30;;2864:1;2833:33;;;;;;;;;;;;;;;;2799:68;;;;;;;;;;;:76;;;2777:98;;2897:1;2892;:6;2889:355;;;2933:14;2917:30;;2997:9;:22;3007:11;2997:22;;;;;;;;;;;:30;;3028:1;2997:33;;;;;;;;;;;;;;;;2965:9;:22;2975:11;2965:22;;;;;;;;;;;:29;;:65;;;;2889:355;;;3084:13;3067:14;:30;3063:181;;;3132:14;3116:30;;3196:9;:22;3206:11;3196:22;;;;;;;;;;;:30;;3227:1;3196:33;;;;;;;;;;;;;;;;3164:9;:22;3174:11;3164:22;;;;;;;;;;;:29;;:65;;;;3063:181;2889:355;2700:554;2759:3;;;;;;;2700:554;;;;2604:656;;:::o;352:137:4:-;418:4;441:9;:22;451:11;441:22;;;;;;;;;;;:29;;:41;471:10;441:41;;;;;;;;;;;;;;;;;;;;;;;;;434:48;;352:137;;;:::o;279:20:5:-;;;;;;;;;;;;:::o;685:26:1:-;;;;:::o;245:220:2:-;301:10;991:4:1;964:31;;:9;:23;974:12;964:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;955:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;355:5:2::1;323:9;:22;333:11;323:22;;;;;;;;;;;:29;;;:37;;;;;;;;;;;;;;;;;;407:15;370:9;:22;380:11;370:22;;;;;;;;;;;:34;;:52;;;;432:26;446:11;432:13;:26::i;:::-;245:220:::0;;:::o;568:388:4:-;655:11;268:4;:20;;;289:11;268:33;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;267:34;258:70;;;;;;;;;;;;:::i;:::-;;;;;;;;;728:6:::1;;:13;;686:9;:22;696:11;686:22;;;;;;;;;;;:38;;;:55;678:107;;;;;;;;;;;;:::i;:::-;;;;;;;;;800:6;795:124;816:9;:22;826:11;816:22;;;;;;;;;;;:38;;;812:1;:42;795:124;;;874:34;882:11;895:1;898:6;;905:1;898:9;;;;;;;;;;;;;874:7;:34::i;:::-;856:3;;;;;;;795:124;;;;928:21;937:11;928:8;:21::i;:::-;568:388:::0;;;;:::o;1772:203:2:-;1850:6;1845:124;1866:9;:22;1876:11;1866:22;;;;;;;;;;;:38;;;1862:1;:42;1845:124;;;1924:34;1943:11;1956:1;1924:18;:34::i;:::-;1906:3;;;;;;;1845:124;;;;1772:203;:::o;1181:136::-;1249:13;1280:9;:22;1290:11;1280:22;;;;;;;;;;;:30;;1273:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1181:136;;;:::o;1323:443::-;1381:41;1410:11;1381:28;:41::i;:::-;1433:37;1458:11;1433:24;:37::i;:::-;1481:36;1505:11;1481:23;:36::i;:::-;1570:1;1530:9;:22;1540:11;1530:22;;;;;;;;;;;:30;;:37;;;;:41;1527:233;;;1586:36;1610:11;1586:23;:36::i;:::-;1527:233;;;1716:9;:22;1726:11;1716:22;;;;;;;;;;;:30;;1747:1;1716:33;;;;;;;;;;;;;;;;1684:9;:22;1694:11;1684:22;;;;;;;;;;;:29;;:65;;;;1527:233;1323:443;:::o;1981:617::-;2050:15;2083:6;2079:513;2099:9;:22;2109:11;2099:22;;;;;;;;;;;:38;;;2095:1;:42;2079:513;;;2174:9;:22;2184:11;2174:22;;;;;;;;;;;:33;;:36;2208:1;2174:36;;;;;;;;;;;:48;;;2160:10;:62;2157:425;;;2241:9;:22;2251:11;2241:22;;;;;;;;;;;:30;;2277:1;2241:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2157:425;;;2328:9;:22;2338:11;2328:22;;;;;;;;;;;:33;;:36;2362:1;2328:36;;;;;;;;;;;:48;;;2315:10;:61;2312:270;;;2402:9;:22;2412:11;2402:22;;;;;;;;;;;:30;;;2395:37;;;;:::i;:::-;2463:9;:22;2473:11;2463:22;;;;;;;;;;;:33;;:36;2497:1;2463:36;;;;;;;;;;;:48;;;2450:61;;2529:9;:22;2539:11;2529:22;;;;;;;;;;;:30;;2565:1;2529:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2312:270;2157:425;2139:3;;;;;;;2079:513;;;;1981:617;;:::o;179:157:0:-;264:9;:22;274:11;264:22;;;;;;;;;;;:33;;:47;298:12;264:47;;;;;;;;;;;:53;;:62;318:7;264:62;;;;;;;;;;;;:65;;;;;;;;;;;;;179:157;;;:::o;1487:738::-;1611:1;1573:9;:22;1583:11;1573:22;;;;;;;;;;;:34;;;:39;1569:650;;;1690:1;1628:9;:22;1638:11;1628:22;;;;;;;;;;;:33;;:47;1662:12;1628:47;;;;;;;;;;;:59;;:63;;;;1569:650;;;1735:6;1744:1;1735:10;;1730:479;1806:2;1747:9;:22;1757:11;1747:22;;;;;;;;;;;:33;;:47;1781:12;1747:47;;;;;;;;;;;:55;;;:61;1730:479;;1948:4;:30;;;1979:11;1992:12;2006:1;1948:60;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1890:9;:22;1900:11;1890:22;;;;;;;;;;;:33;;:47;1924:12;1890:47;;;;;;;;;;;:55;;;:118;1832:9;:22;1842:11;1832:22;;;;;;;;;;;:33;;:47;1866:12;1832:47;;;;;;;;;;;:55;;:176;;;;2088:2;2029:9;:22;2039:11;2029:22;;;;;;;;;;;:33;;:47;2063:12;2029:47;;;;;;;;;;;:55;;;:61;2026:169;;2175:1;2113:9;:22;2123:11;2113:22;;;;;;;;;;;:33;;:47;2147:12;2113:47;;;;;;;;;;;:59;;:63;;;;2026:169;1810:3;;;;;;;;1730:479;;;;1569:650;1487:738;;:::o;873:146:2:-;970:4;926:9;:22;936:11;926:22;;;;;;;;;;;:29;;:41;956:10;926:41;;;;;;;;;;;;;;;;:48;;;;;;;;;;;;;;;;;;984:28;1000:11;984:15;:28::i;:::-;873:146;:::o;740:127::-;808:4;831:9;:22;841:11;831:22;;;;;;;;;;;:29;;;824:36;;740:127;;;:::o;1025:150::-;1108:4;1130:9;:22;1140:11;1130:22;;;;;;;;;;;:30;;1161:6;1130:38;;;;;;;;;;;;;;;;1123:45;;1025:150;;;;:::o;907:188:5:-;711:5;;;;;;;;;;697:19;;:10;:19;;;689:28;;;;;;1007:1:::1;987:22;;:8;:22;;;;979:31;;;::::0;::::1;;1053:8;1025:37;;1046:5;::::0;::::1;;;;;;;;1025:37;;;;;;;;;;;;1080:8;1072:5;::::0;:16:::1;;;;;;;;;;;;;;;;;;907:188:::0;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;5:130::-;;85:6;72:20;63:29;;97:33;124:5;97:33;:::i;:::-;57:78;;;;:::o;159:708::-;;286:3;279:4;271:6;267:17;263:27;253:2;;304:1;301;294:12;253:2;341:6;328:20;363:90;378:74;445:6;378:74;:::i;:::-;363:90;:::i;:::-;354:99;;470:5;495:6;488:5;481:21;525:4;517:6;513:17;503:27;;547:4;542:3;538:14;531:21;;600:6;633:1;618:243;643:6;640:1;637:13;618:243;;;726:3;713:17;705:6;701:30;750:47;793:3;781:10;750:47;:::i;:::-;745:3;738:60;821:4;816:3;812:14;805:21;;849:4;844:3;840:14;833:21;;675:186;665:1;662;658:9;653:14;;618:243;;;622:14;246:621;;;;;;;:::o;893:352::-;;;1023:3;1016:4;1008:6;1004:17;1000:27;990:2;;1041:1;1038;1031:12;990:2;1074:6;1061:20;1051:30;;1101:18;1093:6;1090:30;1087:2;;;1133:1;1130;1123:12;1087:2;1167:4;1159:6;1155:17;1143:29;;1218:3;1210:4;1202:6;1198:17;1188:8;1184:32;1181:41;1178:2;;;1235:1;1232;1225:12;1178:2;983:262;;;;;:::o;1253:128::-;;1334:6;1328:13;1319:22;;1346:30;1370:5;1346:30;:::i;:::-;1313:68;;;;:::o;1389:442::-;;1491:3;1484:4;1476:6;1472:17;1468:27;1458:2;;1509:1;1506;1499:12;1458:2;1546:6;1533:20;1568:65;1583:49;1625:6;1583:49;:::i;:::-;1568:65;:::i;:::-;1559:74;;1653:6;1646:5;1639:21;1689:4;1681:6;1677:17;1722:4;1715:5;1711:16;1757:3;1748:6;1743:3;1739:16;1736:25;1733:2;;;1774:1;1771;1764:12;1733:2;1784:41;1818:6;1813:3;1808;1784:41;:::i;:::-;1451:380;;;;;;;:::o;1839:130::-;;1919:6;1906:20;1897:29;;1931:33;1958:5;1931:33;:::i;:::-;1891:78;;;;:::o;1976:134::-;;2060:6;2054:13;2045:22;;2072:33;2099:5;2072:33;:::i;:::-;2039:71;;;;:::o;2117:241::-;;2221:2;2209:9;2200:7;2196:23;2192:32;2189:2;;;2237:1;2234;2227:12;2189:2;2272:1;2289:53;2334:7;2325:6;2314:9;2310:22;2289:53;:::i;:::-;2279:63;;2251:97;2183:175;;;;:::o;2365:257::-;;2477:2;2465:9;2456:7;2452:23;2448:32;2445:2;;;2493:1;2490;2483:12;2445:2;2528:1;2545:61;2598:7;2589:6;2578:9;2574:22;2545:61;:::i;:::-;2535:71;;2507:105;2439:183;;;;:::o;2629:628::-;;;2795:2;2783:9;2774:7;2770:23;2766:32;2763:2;;;2811:1;2808;2801:12;2763:2;2874:1;2863:9;2859:17;2846:31;2897:18;2889:6;2886:30;2883:2;;;2929:1;2926;2919:12;2883:2;2949:63;3004:7;2995:6;2984:9;2980:22;2949:63;:::i;:::-;2939:73;;2825:193;3077:2;3066:9;3062:18;3049:32;3101:18;3093:6;3090:30;3087:2;;;3133:1;3130;3123:12;3087:2;3153:88;3233:7;3224:6;3213:9;3209:22;3153:88;:::i;:::-;3143:98;;3028:219;2757:500;;;;;:::o;3264:241::-;;3368:2;3356:9;3347:7;3343:23;3339:32;3336:2;;;3384:1;3381;3374:12;3336:2;3419:1;3436:53;3481:7;3472:6;3461:9;3457:22;3436:53;:::i;:::-;3426:63;;3398:97;3330:175;;;;:::o;3512:263::-;;3627:2;3615:9;3606:7;3602:23;3598:32;3595:2;;;3643:1;3640;3633:12;3595:2;3678:1;3695:64;3751:7;3742:6;3731:9;3727:22;3695:64;:::i;:::-;3685:74;;3657:108;3589:186;;;;:::o;3782:522::-;;;;3938:2;3926:9;3917:7;3913:23;3909:32;3906:2;;;3954:1;3951;3944:12;3906:2;3989:1;4006:53;4051:7;4042:6;4031:9;4027:22;4006:53;:::i;:::-;3996:63;;3968:97;4124:2;4113:9;4109:18;4096:32;4148:18;4140:6;4137:30;4134:2;;;4180:1;4177;4170:12;4134:2;4208:80;4280:7;4271:6;4260:9;4256:22;4208:80;:::i;:::-;4190:98;;;;4075:219;3900:404;;;;;:::o;4311:472::-;;;4442:2;4430:9;4421:7;4417:23;4413:32;4410:2;;;4458:1;4455;4448:12;4410:2;4493:1;4510:53;4555:7;4546:6;4535:9;4531:22;4510:53;:::i;:::-;4500:63;;4472:97;4628:2;4617:9;4613:18;4600:32;4652:18;4644:6;4641:30;4638:2;;;4684:1;4681;4674:12;4638:2;4704:63;4759:7;4750:6;4739:9;4735:22;4704:63;:::i;:::-;4694:73;;4579:194;4404:379;;;;;:::o;4790:366::-;;;4911:2;4899:9;4890:7;4886:23;4882:32;4879:2;;;4927:1;4924;4917:12;4879:2;4962:1;4979:53;5024:7;5015:6;5004:9;5000:22;4979:53;:::i;:::-;4969:63;;4941:97;5069:2;5087:53;5132:7;5123:6;5112:9;5108:22;5087:53;:::i;:::-;5077:63;;5048:98;4873:283;;;;;:::o;5163:491::-;;;;5301:2;5289:9;5280:7;5276:23;5272:32;5269:2;;;5317:1;5314;5307:12;5269:2;5352:1;5369:53;5414:7;5405:6;5394:9;5390:22;5369:53;:::i;:::-;5359:63;;5331:97;5459:2;5477:53;5522:7;5513:6;5502:9;5498:22;5477:53;:::i;:::-;5467:63;;5438:98;5567:2;5585:53;5630:7;5621:6;5610:9;5606:22;5585:53;:::i;:::-;5575:63;;5546:98;5263:391;;;;;:::o;5662:173::-;;5749:46;5791:3;5783:6;5749:46;:::i;:::-;5824:4;5819:3;5815:14;5801:28;;5742:93;;;;:::o;5843:113::-;5926:24;5944:5;5926:24;:::i;:::-;5921:3;5914:37;5908:48;;:::o;5994:690::-;;6139:54;6187:5;6139:54;:::i;:::-;6206:86;6285:6;6280:3;6206:86;:::i;:::-;6199:93;;6313:56;6363:5;6313:56;:::i;:::-;6389:7;6417:1;6402:260;6427:6;6424:1;6421:13;6402:260;;;6494:6;6488:13;6515:63;6574:3;6559:13;6515:63;:::i;:::-;6508:70;;6595:60;6648:6;6595:60;:::i;:::-;6585:70;;6459:203;6449:1;6446;6442:9;6437:14;;6402:260;;;6406:14;6675:3;6668:10;;6118:566;;;;;;;:::o;6692:104::-;6769:21;6784:5;6769:21;:::i;:::-;6764:3;6757:34;6751:45;;:::o;6803:347::-;;6915:39;6948:5;6915:39;:::i;:::-;6966:71;7030:6;7025:3;6966:71;:::i;:::-;6959:78;;7042:52;7087:6;7082:3;7075:4;7068:5;7064:16;7042:52;:::i;:::-;7115:29;7137:6;7115:29;:::i;:::-;7110:3;7106:39;7099:46;;6895:255;;;;;:::o;7158:322::-;;7318:67;7382:2;7377:3;7318:67;:::i;:::-;7311:74;;7418:24;7414:1;7409:3;7405:11;7398:45;7471:2;7466:3;7462:12;7455:19;;7304:176;;;:::o;7489:320::-;;7649:67;7713:2;7708:3;7649:67;:::i;:::-;7642:74;;7749:22;7745:1;7740:3;7736:11;7729:43;7800:2;7795:3;7791:12;7784:19;;7635:174;;;:::o;7818:376::-;;7978:67;8042:2;8037:3;7978:67;:::i;:::-;7971:74;;8078:34;8074:1;8069:3;8065:11;8058:55;8147:9;8142:2;8137:3;8133:12;8126:31;8185:2;8180:3;8176:12;8169:19;;7964:230;;;:::o;8203:331::-;;8363:67;8427:2;8422:3;8363:67;:::i;:::-;8356:74;;8463:33;8459:1;8454:3;8450:11;8443:54;8525:2;8520:3;8516:12;8509:19;;8349:185;;;:::o;8542:103::-;8615:24;8633:5;8615:24;:::i;:::-;8610:3;8603:37;8597:48;;:::o;8652:113::-;8735:24;8753:5;8735:24;:::i;:::-;8730:3;8723:37;8717:48;;:::o;8772:222::-;;8899:2;8888:9;8884:18;8876:26;;8913:71;8981:1;8970:9;8966:17;8957:6;8913:71;:::i;:::-;8870:124;;;;:::o;9001:370::-;;9178:2;9167:9;9163:18;9155:26;;9228:9;9222:4;9218:20;9214:1;9203:9;9199:17;9192:47;9253:108;9356:4;9347:6;9253:108;:::i;:::-;9245:116;;9149:222;;;;:::o;9378:210::-;;9499:2;9488:9;9484:18;9476:26;;9513:65;9575:1;9564:9;9560:17;9551:6;9513:65;:::i;:::-;9470:118;;;;:::o;9595:310::-;;9742:2;9731:9;9727:18;9719:26;;9792:9;9786:4;9782:20;9778:1;9767:9;9763:17;9756:47;9817:78;9890:4;9881:6;9817:78;:::i;:::-;9809:86;;9713:192;;;;:::o;9912:532::-;;10115:2;10104:9;10100:18;10092:26;;10165:9;10159:4;10155:20;10151:1;10140:9;10136:17;10129:47;10190:78;10263:4;10254:6;10190:78;:::i;:::-;10182:86;;10279:72;10347:2;10336:9;10332:18;10323:6;10279:72;:::i;:::-;10362;10430:2;10419:9;10415:18;10406:6;10362:72;:::i;:::-;10086:358;;;;;;:::o;10451:968::-;;10760:3;10749:9;10745:19;10737:27;;10811:9;10805:4;10801:20;10797:1;10786:9;10782:17;10775:47;10836:78;10909:4;10900:6;10836:78;:::i;:::-;10828:86;;10925:72;10993:2;10982:9;10978:18;10969:6;10925:72;:::i;:::-;11008;11076:2;11065:9;11061:18;11052:6;11008:72;:::i;:::-;11091;11159:2;11148:9;11144:18;11135:6;11091:72;:::i;:::-;11174:67;11236:3;11225:9;11221:19;11212:6;11174:67;:::i;:::-;11252:73;11320:3;11309:9;11305:19;11296:6;11252:73;:::i;:::-;11336;11404:3;11393:9;11389:19;11380:6;11336:73;:::i;:::-;10731:688;;;;;;;;;;:::o;11426:416::-;;11626:2;11615:9;11611:18;11603:26;;11676:9;11670:4;11666:20;11662:1;11651:9;11647:17;11640:47;11701:131;11827:4;11701:131;:::i;:::-;11693:139;;11597:245;;;:::o;11849:416::-;;12049:2;12038:9;12034:18;12026:26;;12099:9;12093:4;12089:20;12085:1;12074:9;12070:17;12063:47;12124:131;12250:4;12124:131;:::i;:::-;12116:139;;12020:245;;;:::o;12272:416::-;;12472:2;12461:9;12457:18;12449:26;;12522:9;12516:4;12512:20;12508:1;12497:9;12493:17;12486:47;12547:131;12673:4;12547:131;:::i;:::-;12539:139;;12443:245;;;:::o;12695:416::-;;12895:2;12884:9;12880:18;12872:26;;12945:9;12939:4;12935:20;12931:1;12920:9;12916:17;12909:47;12970:131;13096:4;12970:131;:::i;:::-;12962:139;;12866:245;;;:::o;13118:222::-;;13245:2;13234:9;13230:18;13222:26;;13259:71;13327:1;13316:9;13312:17;13303:6;13259:71;:::i;:::-;13216:124;;;;:::o;13347:444::-;;13530:2;13519:9;13515:18;13507:26;;13544:71;13612:1;13601:9;13597:17;13588:6;13544:71;:::i;:::-;13626:72;13694:2;13683:9;13679:18;13670:6;13626:72;:::i;:::-;13709;13777:2;13766:9;13762:18;13753:6;13709:72;:::i;:::-;13501:290;;;;;;:::o;13798:256::-;;13860:2;13854:9;13844:19;;13898:4;13890:6;13886:17;13997:6;13985:10;13982:22;13961:18;13949:10;13946:34;13943:62;13940:2;;;14018:1;14015;14008:12;13940:2;14038:10;14034:2;14027:22;13838:216;;;;:::o;14061:314::-;;14230:18;14222:6;14219:30;14216:2;;;14262:1;14259;14252:12;14216:2;14297:4;14289:6;14285:17;14277:25;;14360:4;14354;14350:15;14342:23;;14153:222;;;:::o;14382:322::-;;14526:18;14518:6;14515:30;14512:2;;;14558:1;14555;14548:12;14512:2;14625:4;14621:9;14614:4;14606:6;14602:17;14598:33;14590:41;;14689:4;14683;14679:15;14671:23;;14449:255;;;:::o;14711:151::-;;14797:3;14789:11;;14835:4;14830:3;14826:14;14818:22;;14783:79;;;:::o;14869:137::-;;14978:5;14972:12;14962:22;;14943:63;;;:::o;15013:122::-;;15107:5;15101:12;15091:22;;15072:63;;;:::o;15142:108::-;;15240:4;15235:3;15231:14;15223:22;;15217:33;;;:::o;15258:178::-;;15388:6;15383:3;15376:19;15425:4;15420:3;15416:14;15401:29;;15369:67;;;;:::o;15445:163::-;;15560:6;15555:3;15548:19;15597:4;15592:3;15588:14;15573:29;;15541:67;;;;:::o;15616:91::-;;15678:24;15696:5;15678:24;:::i;:::-;15667:35;;15661:46;;;:::o;15714:85::-;;15787:5;15780:13;15773:21;15762:32;;15756:43;;;:::o;15806:121::-;;15879:42;15872:5;15868:54;15857:65;;15851:76;;;:::o;15934:72::-;;15996:5;15985:16;;15979:27;;;:::o;16014:145::-;16095:6;16090:3;16085;16072:30;16151:1;16142:6;16137:3;16133:16;16126:27;16065:94;;;:::o;16168:268::-;16233:1;16240:101;16254:6;16251:1;16248:13;16240:101;;;16330:1;16325:3;16321:11;16315:18;16311:1;16306:3;16302:11;16295:39;16276:2;16273:1;16269:10;16264:15;;16240:101;;;16356:6;16353:1;16350:13;16347:2;;;16421:1;16412:6;16407:3;16403:16;16396:27;16347:2;16217:219;;;;:::o;16444:97::-;;16532:2;16528:7;16523:2;16516:5;16512:14;16508:28;16498:38;;16492:49;;;:::o;16549:117::-;16618:24;16636:5;16618:24;:::i;:::-;16611:5;16608:35;16598:2;;16657:1;16654;16647:12;16598:2;16592:74;:::o;16673:111::-;16739:21;16754:5;16739:21;:::i;:::-;16732:5;16729:32;16719:2;;16775:1;16772;16765:12;16719:2;16713:71;:::o;16791:117::-;16860:24;16878:5;16860:24;:::i;:::-;16853:5;16850:35;16840:2;;16899:1;16896;16889:12;16840:2;16834:74;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >= 0.7.0 < 0.8.0;\npragma experimental ABIEncoderV2;\n\nimport \"./Candidate.sol\";\nimport \"./ElectionHelper.sol\";\n\n\ncontract Vote is Candidate, ElectionHelper {\n    modifier hasNotVoted(uint _electionId) {\n        require (!this.hasAlreadyVoted(_electionId), \"User has already voted\");\n        _;\n    }\n\n    function hasAlreadyVoted(uint _electionId) external view returns (bool) {\n        return elections[_electionId].voters[msg.sender];\n    }\n\n    /**\n     * Gives one note to each candidates of the election\n     */\n    function voteToElection(uint _electionId, uint[] calldata _notes) external hasNotVoted(_electionId) {\n        require(elections[_electionId].candidatesCount == _notes.length, \"Not same amount of candidates and votes\");\n        for (uint i = 0; i < elections[_electionId].candidatesCount; i++){\n            addNote(_electionId, i, _notes[i]);\n        }\n        addVoter(_electionId);\n    }\n\n}",
  "sourcePath": "C:/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Vote.sol",
  "ast": {
    "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Vote.sol",
    "exportedSymbols": {
      "Vote": [
        978
      ]
    },
    "id": 979,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 888,
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
        "src": "32:33:4"
      },
      {
        "id": 889,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "66:33:4"
      },
      {
        "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Candidate.sol",
        "file": "./Candidate.sol",
        "id": 890,
        "nodeType": "ImportDirective",
        "scope": 979,
        "sourceUnit": 243,
        "src": "101:25:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol",
        "file": "./ElectionHelper.sol",
        "id": 891,
        "nodeType": "ImportDirective",
        "scope": 979,
        "sourceUnit": 854,
        "src": "127:30:4",
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
              "id": 892,
              "name": "Candidate",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 242,
              "src": "177:9:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Candidate_$242",
                "typeString": "contract Candidate"
              }
            },
            "id": 893,
            "nodeType": "InheritanceSpecifier",
            "src": "177:9:4"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 894,
              "name": "ElectionHelper",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 853,
              "src": "188:14:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ElectionHelper_$853",
                "typeString": "contract ElectionHelper"
              }
            },
            "id": 895,
            "nodeType": "InheritanceSpecifier",
            "src": "188:14:4"
          }
        ],
        "contractDependencies": [
          242,
          492,
          853,
          1039
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 978,
        "linearizedBaseContracts": [
          978,
          853,
          242,
          492,
          1039
        ],
        "name": "Vote",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 909,
              "nodeType": "Block",
              "src": "248:98:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 904,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "267:34:4",
                        "subExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 902,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 897,
                              "src": "289:11:4",
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
                              "id": 900,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "268:4:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Vote_$978",
                                "typeString": "contract Vote"
                              }
                            },
                            "id": 901,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "hasAlreadyVoted",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 926,
                            "src": "268:20:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (uint256) view external returns (bool)"
                            }
                          },
                          "id": 903,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "268:33:4",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "557365722068617320616c726561647920766f746564",
                        "id": 905,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "303:24:4",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5d8751a7203843ec3dc8be24461fe3adb899d31934c1ac673bd9e2ab845ff9d0",
                          "typeString": "literal_string \"User has already voted\""
                        },
                        "value": "User has already voted"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5d8751a7203843ec3dc8be24461fe3adb899d31934c1ac673bd9e2ab845ff9d0",
                          "typeString": "literal_string \"User has already voted\""
                        }
                      ],
                      "id": 899,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "258:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 906,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "258:70:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 907,
                  "nodeType": "ExpressionStatement",
                  "src": "258:70:4"
                },
                {
                  "id": 908,
                  "nodeType": "PlaceholderStatement",
                  "src": "338:1:4"
                }
              ]
            },
            "documentation": null,
            "id": 910,
            "name": "hasNotVoted",
            "nodeType": "ModifierDefinition",
            "overrides": null,
            "parameters": {
              "id": 898,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 897,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 910,
                  "src": "230:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 896,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "230:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "229:18:4"
            },
            "src": "209:137:4",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 925,
              "nodeType": "Block",
              "src": "424:65:4",
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
                          "id": 917,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 301,
                          "src": "441:9:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 919,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 918,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 912,
                          "src": "451:11:4",
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
                        "src": "441:22:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$284_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 920,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "voters",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 278,
                      "src": "441:29:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 923,
                    "indexExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 921,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "471:3:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 922,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "471:10:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "441:41:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 916,
                  "id": 924,
                  "nodeType": "Return",
                  "src": "434:48:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "7fa67b13",
            "id": 926,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "hasAlreadyVoted",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 913,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 912,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 926,
                  "src": "377:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 911,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "376:18:4"
            },
            "returnParameters": {
              "id": 916,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 915,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 926,
                  "src": "418:4:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 914,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "418:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "417:6:4"
            },
            "scope": 978,
            "src": "352:137:4",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 976,
              "nodeType": "Block",
              "src": "668:288:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 945,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 939,
                              "name": "elections",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 301,
                              "src": "686:9:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                                "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                              }
                            },
                            "id": 941,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 940,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 929,
                              "src": "696:11:4",
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
                            "src": "686:22:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Election_$284_storage",
                              "typeString": "struct ElectionFactory.Election storage ref"
                            }
                          },
                          "id": 942,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "candidatesCount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 270,
                          "src": "686:38:4",
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
                            "id": 943,
                            "name": "_notes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 932,
                            "src": "728:6:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                              "typeString": "uint256[] calldata"
                            }
                          },
                          "id": 944,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "728:13:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "686:55:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4e6f742073616d6520616d6f756e74206f662063616e6469646174657320616e6420766f746573",
                        "id": 946,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "743:41:4",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f2f9a7d477648969f86892311b92e5920c5e942fc6df3eda351c3e36d76fe31b",
                          "typeString": "literal_string \"Not same amount of candidates and votes\""
                        },
                        "value": "Not same amount of candidates and votes"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f2f9a7d477648969f86892311b92e5920c5e942fc6df3eda351c3e36d76fe31b",
                          "typeString": "literal_string \"Not same amount of candidates and votes\""
                        }
                      ],
                      "id": 938,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "678:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 947,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "678:107:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 948,
                  "nodeType": "ExpressionStatement",
                  "src": "678:107:4"
                },
                {
                  "body": {
                    "id": 970,
                    "nodeType": "Block",
                    "src": "860:59:4",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 963,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 929,
                              "src": "882:11:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 964,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 950,
                              "src": "895:1:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 965,
                                "name": "_notes",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 932,
                                "src": "898:6:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                  "typeString": "uint256[] calldata"
                                }
                              },
                              "id": 967,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 966,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 950,
                                "src": "905:1:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "898:9:4",
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
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 962,
                            "name": "addNote",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26,
                            "src": "874:7:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256)"
                            }
                          },
                          "id": 968,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "874:34:4",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 969,
                        "nodeType": "ExpressionStatement",
                        "src": "874:34:4"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 958,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 953,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 950,
                      "src": "812:1:4",
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
                          "id": 954,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 301,
                          "src": "816:9:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$284_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 956,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 955,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 929,
                          "src": "826:11:4",
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
                        "src": "816:22:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$284_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 957,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "candidatesCount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 270,
                      "src": "816:38:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "812:42:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 971,
                  "initializationExpression": {
                    "assignments": [
                      950
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 950,
                        "mutability": "mutable",
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 971,
                        "src": "800:6:4",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 949,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "800:4:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 952,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 951,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "809:1:4",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "800:10:4"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 960,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "856:3:4",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 959,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 950,
                        "src": "856:1:4",
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
                    "id": 961,
                    "nodeType": "ExpressionStatement",
                    "src": "856:3:4"
                  },
                  "nodeType": "ForStatement",
                  "src": "795:124:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 973,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 929,
                        "src": "937:11:4",
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
                      "id": 972,
                      "name": "addVoter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 590,
                      "src": "928:8:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 974,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "928:21:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 975,
                  "nodeType": "ExpressionStatement",
                  "src": "928:21:4"
                }
              ]
            },
            "documentation": {
              "id": 927,
              "nodeType": "StructuredDocumentation",
              "src": "495:68:4",
              "text": " Gives one note to each candidates of the election"
            },
            "functionSelector": "a0b17848",
            "id": 977,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 935,
                    "name": "_electionId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 929,
                    "src": "655:11:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 936,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 934,
                  "name": "hasNotVoted",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 910,
                  "src": "643:11:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "643:24:4"
              }
            ],
            "name": "voteToElection",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 933,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 929,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 977,
                  "src": "592:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 928,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "592:4:4",
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
                  "id": 932,
                  "mutability": "mutable",
                  "name": "_notes",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 977,
                  "src": "610:22:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 930,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "610:4:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 931,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "610:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "591:42:4"
            },
            "returnParameters": {
              "id": 937,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "668:0:4"
            },
            "scope": 978,
            "src": "568:388:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 979,
        "src": "160:799:4"
      }
    ],
    "src": "32:927:4"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Vote.sol",
      "exportedSymbols": {
        "Vote": [
          978
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
        "id": 888,
        "name": "PragmaDirective",
        "src": "32:33:4"
      },
      {
        "attributes": {
          "literals": [
            "experimental",
            "ABIEncoderV2"
          ]
        },
        "id": 889,
        "name": "PragmaDirective",
        "src": "66:33:4"
      },
      {
        "attributes": {
          "SourceUnit": 243,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Candidate.sol",
          "file": "./Candidate.sol",
          "scope": 979,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 890,
        "name": "ImportDirective",
        "src": "101:25:4"
      },
      {
        "attributes": {
          "SourceUnit": 854,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol",
          "file": "./ElectionHelper.sol",
          "scope": 979,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 891,
        "name": "ImportDirective",
        "src": "127:30:4"
      },
      {
        "attributes": {
          "abstract": false,
          "contractDependencies": [
            242,
            492,
            853,
            1039
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            978,
            853,
            242,
            492,
            1039
          ],
          "name": "Vote",
          "scope": 979
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
                  "name": "Candidate",
                  "referencedDeclaration": 242,
                  "type": "contract Candidate"
                },
                "id": 892,
                "name": "UserDefinedTypeName",
                "src": "177:9:4"
              }
            ],
            "id": 893,
            "name": "InheritanceSpecifier",
            "src": "177:9:4"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ElectionHelper",
                  "referencedDeclaration": 853,
                  "type": "contract ElectionHelper"
                },
                "id": 894,
                "name": "UserDefinedTypeName",
                "src": "188:14:4"
              }
            ],
            "id": 895,
            "name": "InheritanceSpecifier",
            "src": "188:14:4"
          },
          {
            "attributes": {
              "documentation": null,
              "name": "hasNotVoted",
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
                      "name": "_electionId",
                      "overrides": null,
                      "scope": 910,
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
                        "id": 896,
                        "name": "ElementaryTypeName",
                        "src": "230:4:4"
                      }
                    ],
                    "id": 897,
                    "name": "VariableDeclaration",
                    "src": "230:16:4"
                  }
                ],
                "id": 898,
                "name": "ParameterList",
                "src": "229:18:4"
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
                                  "typeIdentifier": "t_stringliteral_5d8751a7203843ec3dc8be24461fe3adb899d31934c1ac673bd9e2ab845ff9d0",
                                  "typeString": "literal_string \"User has already voted\""
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
                            "id": 899,
                            "name": "Identifier",
                            "src": "258:7:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!",
                              "prefix": true,
                              "type": "bool"
                            },
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
                                  "type": "bool",
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
                                      "member_name": "hasAlreadyVoted",
                                      "referencedDeclaration": 926,
                                      "type": "function (uint256) view external returns (bool)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": -28,
                                          "type": "contract Vote",
                                          "value": "this"
                                        },
                                        "id": 900,
                                        "name": "Identifier",
                                        "src": "268:4:4"
                                      }
                                    ],
                                    "id": 901,
                                    "name": "MemberAccess",
                                    "src": "268:20:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 897,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 902,
                                    "name": "Identifier",
                                    "src": "289:11:4"
                                  }
                                ],
                                "id": 903,
                                "name": "FunctionCall",
                                "src": "268:33:4"
                              }
                            ],
                            "id": 904,
                            "name": "UnaryOperation",
                            "src": "267:34:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "557365722068617320616c726561647920766f746564",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"User has already voted\"",
                              "value": "User has already voted"
                            },
                            "id": 905,
                            "name": "Literal",
                            "src": "303:24:4"
                          }
                        ],
                        "id": 906,
                        "name": "FunctionCall",
                        "src": "258:70:4"
                      }
                    ],
                    "id": 907,
                    "name": "ExpressionStatement",
                    "src": "258:70:4"
                  },
                  {
                    "id": 908,
                    "name": "PlaceholderStatement",
                    "src": "338:1:4"
                  }
                ],
                "id": 909,
                "name": "Block",
                "src": "248:98:4"
              }
            ],
            "id": 910,
            "name": "ModifierDefinition",
            "src": "209:137:4"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "7fa67b13",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "hasAlreadyVoted",
              "overrides": null,
              "scope": 978,
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
                      "scope": 926,
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
                        "id": 911,
                        "name": "ElementaryTypeName",
                        "src": "377:4:4"
                      }
                    ],
                    "id": 912,
                    "name": "VariableDeclaration",
                    "src": "377:16:4"
                  }
                ],
                "id": 913,
                "name": "ParameterList",
                "src": "376:18:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 926,
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
                        "id": 914,
                        "name": "ElementaryTypeName",
                        "src": "418:4:4"
                      }
                    ],
                    "id": 915,
                    "name": "VariableDeclaration",
                    "src": "418:4:4"
                  }
                ],
                "id": 916,
                "name": "ParameterList",
                "src": "417:6:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 916
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
                                    "id": 917,
                                    "name": "Identifier",
                                    "src": "441:9:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 912,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 918,
                                    "name": "Identifier",
                                    "src": "451:11:4"
                                  }
                                ],
                                "id": 919,
                                "name": "IndexAccess",
                                "src": "441:22:4"
                              }
                            ],
                            "id": 920,
                            "name": "MemberAccess",
                            "src": "441:29:4"
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
                                "id": 921,
                                "name": "Identifier",
                                "src": "471:3:4"
                              }
                            ],
                            "id": 922,
                            "name": "MemberAccess",
                            "src": "471:10:4"
                          }
                        ],
                        "id": 923,
                        "name": "IndexAccess",
                        "src": "441:41:4"
                      }
                    ],
                    "id": 924,
                    "name": "Return",
                    "src": "434:48:4"
                  }
                ],
                "id": 925,
                "name": "Block",
                "src": "424:65:4"
              }
            ],
            "id": 926,
            "name": "FunctionDefinition",
            "src": "352:137:4"
          },
          {
            "attributes": {
              "functionSelector": "a0b17848",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "voteToElection",
              "overrides": null,
              "scope": 978,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "text": " Gives one note to each candidates of the election"
                },
                "id": 927,
                "name": "StructuredDocumentation",
                "src": "495:68:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_electionId",
                      "overrides": null,
                      "scope": 977,
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
                        "id": 928,
                        "name": "ElementaryTypeName",
                        "src": "592:4:4"
                      }
                    ],
                    "id": 929,
                    "name": "VariableDeclaration",
                    "src": "592:16:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_notes",
                      "overrides": null,
                      "scope": 977,
                      "stateVariable": false,
                      "storageLocation": "calldata",
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
                            "id": 930,
                            "name": "ElementaryTypeName",
                            "src": "610:4:4"
                          }
                        ],
                        "id": 931,
                        "name": "ArrayTypeName",
                        "src": "610:6:4"
                      }
                    ],
                    "id": 932,
                    "name": "VariableDeclaration",
                    "src": "610:22:4"
                  }
                ],
                "id": 933,
                "name": "ParameterList",
                "src": "591:42:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 937,
                "name": "ParameterList",
                "src": "668:0:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 910,
                      "type": "modifier (uint256)",
                      "value": "hasNotVoted"
                    },
                    "id": 934,
                    "name": "Identifier",
                    "src": "643:11:4"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 929,
                      "type": "uint256",
                      "value": "_electionId"
                    },
                    "id": 935,
                    "name": "Identifier",
                    "src": "655:11:4"
                  }
                ],
                "id": 936,
                "name": "ModifierInvocation",
                "src": "643:24:4"
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
                                  "typeIdentifier": "t_stringliteral_f2f9a7d477648969f86892311b92e5920c5e942fc6df3eda351c3e36d76fe31b",
                                  "typeString": "literal_string \"Not same amount of candidates and votes\""
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
                            "id": 938,
                            "name": "Identifier",
                            "src": "678:7:4"
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
                                        "id": 939,
                                        "name": "Identifier",
                                        "src": "686:9:4"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 929,
                                          "type": "uint256",
                                          "value": "_electionId"
                                        },
                                        "id": 940,
                                        "name": "Identifier",
                                        "src": "696:11:4"
                                      }
                                    ],
                                    "id": 941,
                                    "name": "IndexAccess",
                                    "src": "686:22:4"
                                  }
                                ],
                                "id": 942,
                                "name": "MemberAccess",
                                "src": "686:38:4"
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
                                      "referencedDeclaration": 932,
                                      "type": "uint256[] calldata",
                                      "value": "_notes"
                                    },
                                    "id": 943,
                                    "name": "Identifier",
                                    "src": "728:6:4"
                                  }
                                ],
                                "id": 944,
                                "name": "MemberAccess",
                                "src": "728:13:4"
                              }
                            ],
                            "id": 945,
                            "name": "BinaryOperation",
                            "src": "686:55:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "4e6f742073616d6520616d6f756e74206f662063616e6469646174657320616e6420766f746573",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Not same amount of candidates and votes\"",
                              "value": "Not same amount of candidates and votes"
                            },
                            "id": 946,
                            "name": "Literal",
                            "src": "743:41:4"
                          }
                        ],
                        "id": 947,
                        "name": "FunctionCall",
                        "src": "678:107:4"
                      }
                    ],
                    "id": 948,
                    "name": "ExpressionStatement",
                    "src": "678:107:4"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            950
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "mutability": "mutable",
                              "name": "i",
                              "overrides": null,
                              "scope": 971,
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
                                "id": 949,
                                "name": "ElementaryTypeName",
                                "src": "800:4:4"
                              }
                            ],
                            "id": 950,
                            "name": "VariableDeclaration",
                            "src": "800:6:4"
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
                            "id": 951,
                            "name": "Literal",
                            "src": "809:1:4"
                          }
                        ],
                        "id": 952,
                        "name": "VariableDeclarationStatement",
                        "src": "800:10:4"
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
                              "referencedDeclaration": 950,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 953,
                            "name": "Identifier",
                            "src": "812:1:4"
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
                                    "id": 954,
                                    "name": "Identifier",
                                    "src": "816:9:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 929,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 955,
                                    "name": "Identifier",
                                    "src": "826:11:4"
                                  }
                                ],
                                "id": 956,
                                "name": "IndexAccess",
                                "src": "816:22:4"
                              }
                            ],
                            "id": 957,
                            "name": "MemberAccess",
                            "src": "816:38:4"
                          }
                        ],
                        "id": 958,
                        "name": "BinaryOperation",
                        "src": "812:42:4"
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
                                  "referencedDeclaration": 950,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 959,
                                "name": "Identifier",
                                "src": "856:1:4"
                              }
                            ],
                            "id": 960,
                            "name": "UnaryOperation",
                            "src": "856:3:4"
                          }
                        ],
                        "id": 961,
                        "name": "ExpressionStatement",
                        "src": "856:3:4"
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
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 26,
                                      "type": "function (uint256,uint256,uint256)",
                                      "value": "addNote"
                                    },
                                    "id": 962,
                                    "name": "Identifier",
                                    "src": "874:7:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 929,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 963,
                                    "name": "Identifier",
                                    "src": "882:11:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 950,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 964,
                                    "name": "Identifier",
                                    "src": "895:1:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 932,
                                          "type": "uint256[] calldata",
                                          "value": "_notes"
                                        },
                                        "id": 965,
                                        "name": "Identifier",
                                        "src": "898:6:4"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 950,
                                          "type": "uint256",
                                          "value": "i"
                                        },
                                        "id": 966,
                                        "name": "Identifier",
                                        "src": "905:1:4"
                                      }
                                    ],
                                    "id": 967,
                                    "name": "IndexAccess",
                                    "src": "898:9:4"
                                  }
                                ],
                                "id": 968,
                                "name": "FunctionCall",
                                "src": "874:34:4"
                              }
                            ],
                            "id": 969,
                            "name": "ExpressionStatement",
                            "src": "874:34:4"
                          }
                        ],
                        "id": 970,
                        "name": "Block",
                        "src": "860:59:4"
                      }
                    ],
                    "id": 971,
                    "name": "ForStatement",
                    "src": "795:124:4"
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
                              "referencedDeclaration": 590,
                              "type": "function (uint256)",
                              "value": "addVoter"
                            },
                            "id": 972,
                            "name": "Identifier",
                            "src": "928:8:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 929,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 973,
                            "name": "Identifier",
                            "src": "937:11:4"
                          }
                        ],
                        "id": 974,
                        "name": "FunctionCall",
                        "src": "928:21:4"
                      }
                    ],
                    "id": 975,
                    "name": "ExpressionStatement",
                    "src": "928:21:4"
                  }
                ],
                "id": 976,
                "name": "Block",
                "src": "668:288:4"
              }
            ],
            "id": 977,
            "name": "FunctionDefinition",
            "src": "568:388:4"
          }
        ],
        "id": 978,
        "name": "ContractDefinition",
        "src": "160:799:4"
      }
    ],
    "id": 979,
    "name": "SourceUnit",
    "src": "32:927:4"
  },
  "compiler": {
    "name": "solc",
    "version": "0.7.0+commit.9e61f92b.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
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
        }
      },
      "links": {},
      "address": "0x3DFfB8D604cDA22ea7B27b9A29C0Bba49a9337B4",
      "transactionHash": "0x304d2ec7e8d920c9e1615d9f178076ea6ab4082aaef7bb8258a6342239bf55fc"
    }
  },
  "schemaVersion": "3.3.3",
  "updatedAt": "2021-01-22T16:34:13.297Z",
  "networkType": "ethereum",
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
    "methods": {
      "voteToElection(uint256,uint256[])": {
        "notice": "Gives one note to each candidates of the election"
      }
    },
    "version": 1
  }
};