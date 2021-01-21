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
      "name": "getCandidateAverageNote",
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
      "name": "getCandidateName",
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
  "metadata": "{\"compiler\":{\"version\":\"0.7.0+commit.9e61f92b\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"addAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_candidateName\",\"type\":\"string\"}],\"name\":\"addCandidate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_noteId\",\"type\":\"uint256\"}],\"name\":\"addNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"addVoter\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_note\",\"type\":\"uint256\"}],\"name\":\"calculatePercentageOfNote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"computeAverageNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeCandidatesAverageNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeFinalRoundWinner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeFirstRoundWinners\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeResult\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_title\",\"type\":\"string\"},{\"internalType\":\"string[]\",\"name\":\"_candidatesNames\",\"type\":\"string[]\"}],\"name\":\"createElection\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"deleteAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"elections\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"creationDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"closingDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalVoters\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"isOpen\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"candidatesCount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"winner\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"electionsCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"endElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"getCandidateAverageNote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"getCandidateName\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_noteId\",\"type\":\"uint256\"}],\"name\":\"getCandidateNote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getCandidatesCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionStatus\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionTitle\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionWinner\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getFirstRoundWinners\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"}],\"name\":\"getOneFirstRoundWinner\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"hasAlreadyVoted\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"incrementVoters\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"userAddress\",\"type\":\"address\"}],\"name\":\"isUserAdmin\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256[]\",\"name\":\"_notes\",\"type\":\"uint256[]\"}],\"name\":\"voteToElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"voteToElection(uint256,uint256[])\":{\"notice\":\"Gives one note to each candidates of the election\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Vote.sol\":\"Vote\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Candidate.sol\":{\"keccak256\":\"0x47126df3010fdec3398cc6d1f9013873014edf23c57160050b3ce566a990eb59\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d9c0cd3ead97872c34364b65664869d398767468ca61ede8890e763d94942ee4\",\"dweb:/ipfs/QmWRwZvM1PdNQ5Z8hBhJDvtVfgEP3zfgkCUWfVRFWuqhmr\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol\":{\"keccak256\":\"0xce6751d48384d436adae7ede503e293aef6c33f25dc3c27f80ee01419166efc4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://06d99d3abb2c0a1ddeeab27ca5ce4c6699a2dc50053bf48e170c9ee1f9256bdb\",\"dweb:/ipfs/Qmbh2ovDKNRdchUgeLjo8f7tkESLu1sxyvZTqsQswMPL5H\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol\":{\"keccak256\":\"0x57b58313951c20ec7741dbfb1e7d17a658998df4199603706ea1413d6a3d7d41\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e6b967ccd12912c7dd85b88e167f07c28a66c81f2f2e020557fb551e13da9cc3\",\"dweb:/ipfs/QmaunG12zPety2gSKKBwSDSb4xyEb2VsBYzDkYh5hcZGDr\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Vote.sol\":{\"keccak256\":\"0xd58a75050ef0203e261ded70e465913f4ee51ebc59d555d27549bd1e49562e16\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a88c023683d296560444ef74d3698d935cd6b3d4120a94a4149e2e1ef1ab6dbd\",\"dweb:/ipfs/QmadKeeCR3kLyBnaZk1s1v1YhGrnq6SmBs4ZQfCB2BtY1V\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol\":{\"keccak256\":\"0x7f1004825e1cc40d7b663e20d3be71ed9c64baf7f05eae9b115a4d4448c8fdcf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5d8ccf5e65c162aeabb1b5e804f7183d95be7a985d5466796025a39ede9cfa62\",\"dweb:/ipfs/QmNZR6izJaw2bC9aCAcVbtS1kE9YBWuuqoaryy8idA14ta\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600560008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506124c3806100d96000396000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c80639a74c69511610104578063cd015c32116100a2578063e62c6ac511610071578063e62c6ac51461059d578063e76f6b58146105cd578063e936ed30146105fd578063f2fde38b1461062d576101da565b8063cd015c321461052d578063cd08bca014610549578063cd62d5dd14610565578063d8f7a0bb14610581576101da565b8063ab6cb049116100de578063ab6cb04914610495578063b024419e146104b1578063b12b1a7d146104e1578063be4d823e14610511576101da565b80639a74c6951461043f5780639c98bcbb1461045d578063a0b1784814610479576101da565b80633ee95f001161017c57806374d523a81161014b57806374d523a8146103a55780637bb1541d146103d55780637fa67b13146103f15780638da5cb5b14610421576101da565b80633ee95f00146102f35780634d94fc6a146103235780635e6fef01146103535780637048027514610389576101da565b806327e1f7df116101b857806327e1f7df14610247578063337fa14614610263578063349813b2146102935780633a0b35b7146102c3576101da565b80631750a3d0146101df5780631aaa5246146101fb57806324785b9e14610217575b600080fd5b6101f960048036038101906101f49190611e25565b610649565b005b61021560048036038101906102109190611d7b565b6106b0565b005b610231600480360381019061022c9190611d7b565b6106d9565b60405161023e9190612152565b60405180910390f35b610261600480360381019061025c9190611cbd565b610706565b005b61027d60048036038101906102789190611eb5565b610885565b60405161028a9190612285565b60405180910390f35b6102ad60048036038101906102a89190611d0f565b6108cc565b6040516102ba9190612285565b60405180910390f35b6102dd60048036038101906102d89190611eb5565b610ac4565b6040516102ea9190612285565b60405180910390f35b61030d60048036038101906103089190611d7b565b610b54565b60405161031a9190612285565b60405180910390f35b61033d60048036038101906103389190611d7b565b610b74565b60405161034a919061216d565b60405180910390f35b61036d60048036038101906103689190611d7b565b610c2c565b604051610380979695949392919061218f565b60405180910390f35b6103a3600480360381019061039e9190611cbd565b610d13565b005b6103bf60048036038101906103ba9190611cbd565b610e03565b6040516103cc9190612152565b60405180910390f35b6103ef60048036038101906103ea9190611d7b565b610e59565b005b61040b60048036038101906104069190611d7b565b610f99565b6040516104189190612152565b60405180910390f35b610429611003565b6040516104369190612115565b60405180910390f35b610447611027565b6040516104549190612285565b60405180910390f35b61047760048036038101906104729190611d7b565b61102d565b005b610493600480360381019061048e9190611dcd565b611118565b005b6104af60048036038101906104aa9190611d7b565b611298565b005b6104cb60048036038101906104c69190611e79565b6112d4565b6040516104d8919061216d565b60405180910390f35b6104fb60048036038101906104f69190611d7b565b6113a1565b6040516105089190612130565b60405180910390f35b61052b60048036038101906105269190611d7b565b61140f565b005b61054760048036038101906105429190611d7b565b6114a5565b005b610563600480360381019061055e9190611eb5565b61160d565b005b61057f600480360381019061057a9190611e79565b61165d565b005b61059b60048036038101906105969190611d7b565b611847565b005b6105b760048036038101906105b29190611d7b565b6118bf565b6040516105c49190612285565b60405180910390f35b6105e760048036038101906105e29190611e79565b6118df565b6040516105f49190612285565b60405180910390f35b61061760048036038101906106129190611e79565b611915565b6040516106249190612285565b60405180910390f35b61064760048036038101906106429190611cbd565b61194a565b005b8060026000848152602001908152602001600020600601600060026000868152602001908152602001600020600501600081548092919060010191905055815260200190815260200160002060000190805190602001906106ab929190611a99565b505050565b600260008281526020019081526020016000206003016000815480929190600101919050555050565b60006002600083815260200190815260200160002060040160009054906101000a900460ff169050919050565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151461079a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079190612225565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610829576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082090612265565b60405180910390fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600060026000858152602001908152602001600020600601600084815260200190815260200160002060010160008381526020019081526020016000205490509392505050565b60003360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610962576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095990612225565b60405180910390fd5b60008351905060016000815480929190600101919050555060006002600060015481526020019081526020016000209050858160000190805190602001906109ab929190611a99565b504281600101819055506000816003018190555060018160040160006101000a81548160ff02191690831515021790555060005b82811015610a1357610a066001548783815181106109f957fe5b6020026020010151610649565b80806001019150506109df565b503360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600154935050505092915050565b600080600260008681526020019081526020016000206006016000858152602001908152602001600020600101600084815260200190815260200160002054905060006064820290506000600260008881526020019081526020016000206003015490506000811415610b3d5760009350505050610b4d565b808281610b4657fe5b0493505050505b9392505050565b600060026000838152602001908152602001600020600501549050919050565b6060600260008381526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c205780601f10610bf557610100808354040283529160200191610c20565b820191906000526020600020905b815481529060010190602001808311610c0357829003601f168201915b50505050509050919050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610cd85780601f10610cad57610100808354040283529160200191610cd8565b820191906000526020600020905b815481529060010190602001808311610cbb57829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154908060090154905087565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610da7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9e90612225565b60405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b6002600084815260200190815260200160002060080180549050811015610f94576000600260008581526020019081526020016000206006016000600260008781526020019081526020016000206008018481548110610ebd57fe5b906000526020600020015481526020019081526020016000206002015490506000821415610f3357809250600260008581526020019081526020016000206008018281548110610f0957fe5b90600052602060002001546002600086815260200190815260200160002060090181905550610f86565b82811115610f8557809250600260008581526020019081526020016000206008018281548110610f5f57fe5b906000526020600020015460026000868152602001908152602001600020600901819055505b5b508080600101915050610e61565b505050565b60006002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146110c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b890612225565b60405180910390fd5b60006002600084815260200190815260200160002060040160006101000a81548160ff0219169083151502179055504260026000848152602001908152602001600020600201819055506111148261140f565b5050565b823073ffffffffffffffffffffffffffffffffffffffff16637fa67b13826040518263ffffffff1660e01b81526004016111529190612285565b60206040518083038186803b15801561116a57600080fd5b505afa15801561117e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a29190611ce6565b156111e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d990612205565b60405180910390fd5b8282905060026000868152602001908152602001600020600501541461123d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161123490612245565b60405180910390fd5b60005b60026000868152602001908152602001600020600501548110156112885761127b858286868581811061126f57fe5b9050602002013561160d565b8080600101915050611240565b5061129284611847565b50505050565b60005b60026000838152602001908152602001600020600501548110156112d0576112c3828261165d565b808060010191505061129b565b5050565b60606002600084815260200190815260200160002060060160008381526020019081526020016000206000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113945780601f1061136957610100808354040283529160200191611394565b820191906000526020600020905b81548152906001019060200180831161137757829003601f168201915b5050505050905092915050565b60606002600083815260200190815260200160002060080180548060200260200160405190810160405280929190818152602001828054801561140357602002820191906000526020600020905b8154815260200190600101908083116113ef575b50505050509050919050565b61141881611298565b611421816114a5565b61142a81610e59565b60016002600083815260200190815260200160002060080180549050111561145a5761145581610e59565b6114a2565b6002600082815260200190815260200160002060080160008154811061147c57fe5b906000526020600020015460026000838152602001908152602001600020600901819055505b50565b6000805b6002600084815260200190815260200160002060050154811015611608576002600084815260200190815260200160002060060160008281526020019081526020016000206003015482141561153b57600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150556115fb565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301548210156115fa5760026000848152602001908152602001600020600801600061158f9190611b19565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301549150600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150555b5b80806001019150506114a9565b505050565b600260008481526020019081526020016000206006016000838152602001908152602001600020600101600082815260200190815260200160002060008154809291906001019190505550505050565b6000600260008481526020019081526020016000206003015414156116b157600060026000848152602001908152602001600020600601600083815260200190815260200160002060030181905550611843565b6000600690505b60326002600085815260200190815260200160002060060160008481526020019081526020016000206002015411611841573073ffffffffffffffffffffffffffffffffffffffff16633a0b35b78484846040518463ffffffff1660e01b8152600401611727939291906122a0565b60206040518083038186803b15801561173f57600080fd5b505afa158015611753573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117779190611da4565b600260008581526020019081526020016000206006016000848152602001908152602001600020600201540160026000858152602001908152602001600020600601600084815260200190815260200160002060020181905550603260026000858152602001908152602001600020600601600084815260200190815260200160002060020154106118335780600260008581526020019081526020016000206006016000848152602001908152602001600020600301819055505b8080600190039150506116b8565b505b5050565b60016002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506118bc816106b0565b50565b600060026000838152602001908152602001600020600901549050919050565b600060026000848152602001908152602001600020600801828154811061190257fe5b9060005260206000200154905092915050565b600060026000848152602001908152602001600020600601600083815260200190815260200160002060030154905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146119a257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156119dc57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611ada57805160ff1916838001178555611b08565b82800160010185558215611b08579182015b82811115611b07578251825591602001919060010190611aec565b5b509050611b159190611b3a565b5090565b5080546000825590600052602060002090810190611b379190611b3a565b50565b5b80821115611b53576000816000905550600101611b3b565b5090565b600081359050611b6681612448565b92915050565b600082601f830112611b7d57600080fd5b8135611b90611b8b82612304565b6122d7565b9150818183526020840193506020810190508360005b83811015611bd65781358601611bbc8882611c3f565b845260208401935060208301925050600181019050611ba6565b5050505092915050565b60008083601f840112611bf257600080fd5b8235905067ffffffffffffffff811115611c0b57600080fd5b602083019150836020820283011115611c2357600080fd5b9250929050565b600081519050611c398161245f565b92915050565b600082601f830112611c5057600080fd5b8135611c63611c5e8261232c565b6122d7565b91508082526020830160208301858383011115611c7f57600080fd5b611c8a8382846123f5565b50505092915050565b600081359050611ca281612476565b92915050565b600081519050611cb781612476565b92915050565b600060208284031215611ccf57600080fd5b6000611cdd84828501611b57565b91505092915050565b600060208284031215611cf857600080fd5b6000611d0684828501611c2a565b91505092915050565b60008060408385031215611d2257600080fd5b600083013567ffffffffffffffff811115611d3c57600080fd5b611d4885828601611c3f565b925050602083013567ffffffffffffffff811115611d6557600080fd5b611d7185828601611b6c565b9150509250929050565b600060208284031215611d8d57600080fd5b6000611d9b84828501611c93565b91505092915050565b600060208284031215611db657600080fd5b6000611dc484828501611ca8565b91505092915050565b600080600060408486031215611de257600080fd5b6000611df086828701611c93565b935050602084013567ffffffffffffffff811115611e0d57600080fd5b611e1986828701611be0565b92509250509250925092565b60008060408385031215611e3857600080fd5b6000611e4685828601611c93565b925050602083013567ffffffffffffffff811115611e6357600080fd5b611e6f85828601611c3f565b9150509250929050565b60008060408385031215611e8c57600080fd5b6000611e9a85828601611c93565b9250506020611eab85828601611c93565b9150509250929050565b600080600060608486031215611eca57600080fd5b6000611ed886828701611c93565b9350506020611ee986828701611c93565b9250506040611efa86828701611c93565b9150509250925092565b6000611f1083836120f7565b60208301905092915050565b611f25816123ad565b82525050565b6000611f3682612368565b611f40818561238b565b9350611f4b83612358565b8060005b83811015611f7c578151611f638882611f04565b9750611f6e8361237e565b925050600181019050611f4f565b5085935050505092915050565b611f92816123bf565b82525050565b6000611fa382612373565b611fad818561239c565b9350611fbd818560208601612404565b611fc681612437565b840191505092915050565b6000611fde60168361239c565b91507f557365722068617320616c726561647920766f746564000000000000000000006000830152602082019050919050565b600061201e60148361239c565b91507f596f7520617265206e6f7420616e2061646d696e0000000000000000000000006000830152602082019050919050565b600061205e60278361239c565b91507f4e6f742073616d6520616d6f756e74206f662063616e6469646174657320616e60008301527f6420766f746573000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006120c4601f8361239c565b91507f43616e6e6f742072656d6f7665206f776e65722066726f6d2061646d696e73006000830152602082019050919050565b612100816123eb565b82525050565b61210f816123eb565b82525050565b600060208201905061212a6000830184611f1c565b92915050565b6000602082019050818103600083015261214a8184611f2b565b905092915050565b60006020820190506121676000830184611f89565b92915050565b600060208201905081810360008301526121878184611f98565b905092915050565b600060e08201905081810360008301526121a9818a611f98565b90506121b86020830189612106565b6121c56040830188612106565b6121d26060830187612106565b6121df6080830186611f89565b6121ec60a0830185612106565b6121f960c0830184612106565b98975050505050505050565b6000602082019050818103600083015261221e81611fd1565b9050919050565b6000602082019050818103600083015261223e81612011565b9050919050565b6000602082019050818103600083015261225e81612051565b9050919050565b6000602082019050818103600083015261227e816120b7565b9050919050565b600060208201905061229a6000830184612106565b92915050565b60006060820190506122b56000830186612106565b6122c26020830185612106565b6122cf6040830184612106565b949350505050565b6000604051905081810181811067ffffffffffffffff821117156122fa57600080fd5b8060405250919050565b600067ffffffffffffffff82111561231b57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561234357600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006123b8826123cb565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612422578082015181840152602081019050612407565b83811115612431576000848401525b50505050565b6000601f19601f8301169050919050565b612451816123ad565b811461245c57600080fd5b50565b612468816123bf565b811461247357600080fd5b50565b61247f816123eb565b811461248a57600080fd5b5056fea2646970667358221220de4dddb0770062138ab232d9db3f248c43bd1893600d12010673722228ae84c664736f6c63430007000033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101da5760003560e01c80639a74c69511610104578063cd015c32116100a2578063e62c6ac511610071578063e62c6ac51461059d578063e76f6b58146105cd578063e936ed30146105fd578063f2fde38b1461062d576101da565b8063cd015c321461052d578063cd08bca014610549578063cd62d5dd14610565578063d8f7a0bb14610581576101da565b8063ab6cb049116100de578063ab6cb04914610495578063b024419e146104b1578063b12b1a7d146104e1578063be4d823e14610511576101da565b80639a74c6951461043f5780639c98bcbb1461045d578063a0b1784814610479576101da565b80633ee95f001161017c57806374d523a81161014b57806374d523a8146103a55780637bb1541d146103d55780637fa67b13146103f15780638da5cb5b14610421576101da565b80633ee95f00146102f35780634d94fc6a146103235780635e6fef01146103535780637048027514610389576101da565b806327e1f7df116101b857806327e1f7df14610247578063337fa14614610263578063349813b2146102935780633a0b35b7146102c3576101da565b80631750a3d0146101df5780631aaa5246146101fb57806324785b9e14610217575b600080fd5b6101f960048036038101906101f49190611e25565b610649565b005b61021560048036038101906102109190611d7b565b6106b0565b005b610231600480360381019061022c9190611d7b565b6106d9565b60405161023e9190612152565b60405180910390f35b610261600480360381019061025c9190611cbd565b610706565b005b61027d60048036038101906102789190611eb5565b610885565b60405161028a9190612285565b60405180910390f35b6102ad60048036038101906102a89190611d0f565b6108cc565b6040516102ba9190612285565b60405180910390f35b6102dd60048036038101906102d89190611eb5565b610ac4565b6040516102ea9190612285565b60405180910390f35b61030d60048036038101906103089190611d7b565b610b54565b60405161031a9190612285565b60405180910390f35b61033d60048036038101906103389190611d7b565b610b74565b60405161034a919061216d565b60405180910390f35b61036d60048036038101906103689190611d7b565b610c2c565b604051610380979695949392919061218f565b60405180910390f35b6103a3600480360381019061039e9190611cbd565b610d13565b005b6103bf60048036038101906103ba9190611cbd565b610e03565b6040516103cc9190612152565b60405180910390f35b6103ef60048036038101906103ea9190611d7b565b610e59565b005b61040b60048036038101906104069190611d7b565b610f99565b6040516104189190612152565b60405180910390f35b610429611003565b6040516104369190612115565b60405180910390f35b610447611027565b6040516104549190612285565b60405180910390f35b61047760048036038101906104729190611d7b565b61102d565b005b610493600480360381019061048e9190611dcd565b611118565b005b6104af60048036038101906104aa9190611d7b565b611298565b005b6104cb60048036038101906104c69190611e79565b6112d4565b6040516104d8919061216d565b60405180910390f35b6104fb60048036038101906104f69190611d7b565b6113a1565b6040516105089190612130565b60405180910390f35b61052b60048036038101906105269190611d7b565b61140f565b005b61054760048036038101906105429190611d7b565b6114a5565b005b610563600480360381019061055e9190611eb5565b61160d565b005b61057f600480360381019061057a9190611e79565b61165d565b005b61059b60048036038101906105969190611d7b565b611847565b005b6105b760048036038101906105b29190611d7b565b6118bf565b6040516105c49190612285565b60405180910390f35b6105e760048036038101906105e29190611e79565b6118df565b6040516105f49190612285565b60405180910390f35b61061760048036038101906106129190611e79565b611915565b6040516106249190612285565b60405180910390f35b61064760048036038101906106429190611cbd565b61194a565b005b8060026000848152602001908152602001600020600601600060026000868152602001908152602001600020600501600081548092919060010191905055815260200190815260200160002060000190805190602001906106ab929190611a99565b505050565b600260008281526020019081526020016000206003016000815480929190600101919050555050565b60006002600083815260200190815260200160002060040160009054906101000a900460ff169050919050565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151461079a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079190612225565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610829576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082090612265565b60405180910390fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600060026000858152602001908152602001600020600601600084815260200190815260200160002060010160008381526020019081526020016000205490509392505050565b60003360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610962576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095990612225565b60405180910390fd5b60008351905060016000815480929190600101919050555060006002600060015481526020019081526020016000209050858160000190805190602001906109ab929190611a99565b504281600101819055506000816003018190555060018160040160006101000a81548160ff02191690831515021790555060005b82811015610a1357610a066001548783815181106109f957fe5b6020026020010151610649565b80806001019150506109df565b503360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600154935050505092915050565b600080600260008681526020019081526020016000206006016000858152602001908152602001600020600101600084815260200190815260200160002054905060006064820290506000600260008881526020019081526020016000206003015490506000811415610b3d5760009350505050610b4d565b808281610b4657fe5b0493505050505b9392505050565b600060026000838152602001908152602001600020600501549050919050565b6060600260008381526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c205780601f10610bf557610100808354040283529160200191610c20565b820191906000526020600020905b815481529060010190602001808311610c0357829003601f168201915b50505050509050919050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610cd85780601f10610cad57610100808354040283529160200191610cd8565b820191906000526020600020905b815481529060010190602001808311610cbb57829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154908060090154905087565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610da7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9e90612225565b60405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b6002600084815260200190815260200160002060080180549050811015610f94576000600260008581526020019081526020016000206006016000600260008781526020019081526020016000206008018481548110610ebd57fe5b906000526020600020015481526020019081526020016000206002015490506000821415610f3357809250600260008581526020019081526020016000206008018281548110610f0957fe5b90600052602060002001546002600086815260200190815260200160002060090181905550610f86565b82811115610f8557809250600260008581526020019081526020016000206008018281548110610f5f57fe5b906000526020600020015460026000868152602001908152602001600020600901819055505b5b508080600101915050610e61565b505050565b60006002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146110c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b890612225565b60405180910390fd5b60006002600084815260200190815260200160002060040160006101000a81548160ff0219169083151502179055504260026000848152602001908152602001600020600201819055506111148261140f565b5050565b823073ffffffffffffffffffffffffffffffffffffffff16637fa67b13826040518263ffffffff1660e01b81526004016111529190612285565b60206040518083038186803b15801561116a57600080fd5b505afa15801561117e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a29190611ce6565b156111e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d990612205565b60405180910390fd5b8282905060026000868152602001908152602001600020600501541461123d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161123490612245565b60405180910390fd5b60005b60026000868152602001908152602001600020600501548110156112885761127b858286868581811061126f57fe5b9050602002013561160d565b8080600101915050611240565b5061129284611847565b50505050565b60005b60026000838152602001908152602001600020600501548110156112d0576112c3828261165d565b808060010191505061129b565b5050565b60606002600084815260200190815260200160002060060160008381526020019081526020016000206000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113945780601f1061136957610100808354040283529160200191611394565b820191906000526020600020905b81548152906001019060200180831161137757829003601f168201915b5050505050905092915050565b60606002600083815260200190815260200160002060080180548060200260200160405190810160405280929190818152602001828054801561140357602002820191906000526020600020905b8154815260200190600101908083116113ef575b50505050509050919050565b61141881611298565b611421816114a5565b61142a81610e59565b60016002600083815260200190815260200160002060080180549050111561145a5761145581610e59565b6114a2565b6002600082815260200190815260200160002060080160008154811061147c57fe5b906000526020600020015460026000838152602001908152602001600020600901819055505b50565b6000805b6002600084815260200190815260200160002060050154811015611608576002600084815260200190815260200160002060060160008281526020019081526020016000206003015482141561153b57600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150556115fb565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301548210156115fa5760026000848152602001908152602001600020600801600061158f9190611b19565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301549150600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150555b5b80806001019150506114a9565b505050565b600260008481526020019081526020016000206006016000838152602001908152602001600020600101600082815260200190815260200160002060008154809291906001019190505550505050565b6000600260008481526020019081526020016000206003015414156116b157600060026000848152602001908152602001600020600601600083815260200190815260200160002060030181905550611843565b6000600690505b60326002600085815260200190815260200160002060060160008481526020019081526020016000206002015411611841573073ffffffffffffffffffffffffffffffffffffffff16633a0b35b78484846040518463ffffffff1660e01b8152600401611727939291906122a0565b60206040518083038186803b15801561173f57600080fd5b505afa158015611753573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117779190611da4565b600260008581526020019081526020016000206006016000848152602001908152602001600020600201540160026000858152602001908152602001600020600601600084815260200190815260200160002060020181905550603260026000858152602001908152602001600020600601600084815260200190815260200160002060020154106118335780600260008581526020019081526020016000206006016000848152602001908152602001600020600301819055505b8080600190039150506116b8565b505b5050565b60016002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506118bc816106b0565b50565b600060026000838152602001908152602001600020600901549050919050565b600060026000848152602001908152602001600020600801828154811061190257fe5b9060005260206000200154905092915050565b600060026000848152602001908152602001600020600601600083815260200190815260200160002060030154905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146119a257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156119dc57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611ada57805160ff1916838001178555611b08565b82800160010185558215611b08579182015b82811115611b07578251825591602001919060010190611aec565b5b509050611b159190611b3a565b5090565b5080546000825590600052602060002090810190611b379190611b3a565b50565b5b80821115611b53576000816000905550600101611b3b565b5090565b600081359050611b6681612448565b92915050565b600082601f830112611b7d57600080fd5b8135611b90611b8b82612304565b6122d7565b9150818183526020840193506020810190508360005b83811015611bd65781358601611bbc8882611c3f565b845260208401935060208301925050600181019050611ba6565b5050505092915050565b60008083601f840112611bf257600080fd5b8235905067ffffffffffffffff811115611c0b57600080fd5b602083019150836020820283011115611c2357600080fd5b9250929050565b600081519050611c398161245f565b92915050565b600082601f830112611c5057600080fd5b8135611c63611c5e8261232c565b6122d7565b91508082526020830160208301858383011115611c7f57600080fd5b611c8a8382846123f5565b50505092915050565b600081359050611ca281612476565b92915050565b600081519050611cb781612476565b92915050565b600060208284031215611ccf57600080fd5b6000611cdd84828501611b57565b91505092915050565b600060208284031215611cf857600080fd5b6000611d0684828501611c2a565b91505092915050565b60008060408385031215611d2257600080fd5b600083013567ffffffffffffffff811115611d3c57600080fd5b611d4885828601611c3f565b925050602083013567ffffffffffffffff811115611d6557600080fd5b611d7185828601611b6c565b9150509250929050565b600060208284031215611d8d57600080fd5b6000611d9b84828501611c93565b91505092915050565b600060208284031215611db657600080fd5b6000611dc484828501611ca8565b91505092915050565b600080600060408486031215611de257600080fd5b6000611df086828701611c93565b935050602084013567ffffffffffffffff811115611e0d57600080fd5b611e1986828701611be0565b92509250509250925092565b60008060408385031215611e3857600080fd5b6000611e4685828601611c93565b925050602083013567ffffffffffffffff811115611e6357600080fd5b611e6f85828601611c3f565b9150509250929050565b60008060408385031215611e8c57600080fd5b6000611e9a85828601611c93565b9250506020611eab85828601611c93565b9150509250929050565b600080600060608486031215611eca57600080fd5b6000611ed886828701611c93565b9350506020611ee986828701611c93565b9250506040611efa86828701611c93565b9150509250925092565b6000611f1083836120f7565b60208301905092915050565b611f25816123ad565b82525050565b6000611f3682612368565b611f40818561238b565b9350611f4b83612358565b8060005b83811015611f7c578151611f638882611f04565b9750611f6e8361237e565b925050600181019050611f4f565b5085935050505092915050565b611f92816123bf565b82525050565b6000611fa382612373565b611fad818561239c565b9350611fbd818560208601612404565b611fc681612437565b840191505092915050565b6000611fde60168361239c565b91507f557365722068617320616c726561647920766f746564000000000000000000006000830152602082019050919050565b600061201e60148361239c565b91507f596f7520617265206e6f7420616e2061646d696e0000000000000000000000006000830152602082019050919050565b600061205e60278361239c565b91507f4e6f742073616d6520616d6f756e74206f662063616e6469646174657320616e60008301527f6420766f746573000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006120c4601f8361239c565b91507f43616e6e6f742072656d6f7665206f776e65722066726f6d2061646d696e73006000830152602082019050919050565b612100816123eb565b82525050565b61210f816123eb565b82525050565b600060208201905061212a6000830184611f1c565b92915050565b6000602082019050818103600083015261214a8184611f2b565b905092915050565b60006020820190506121676000830184611f89565b92915050565b600060208201905081810360008301526121878184611f98565b905092915050565b600060e08201905081810360008301526121a9818a611f98565b90506121b86020830189612106565b6121c56040830188612106565b6121d26060830187612106565b6121df6080830186611f89565b6121ec60a0830185612106565b6121f960c0830184612106565b98975050505050505050565b6000602082019050818103600083015261221e81611fd1565b9050919050565b6000602082019050818103600083015261223e81612011565b9050919050565b6000602082019050818103600083015261225e81612051565b9050919050565b6000602082019050818103600083015261227e816120b7565b9050919050565b600060208201905061229a6000830184612106565b92915050565b60006060820190506122b56000830186612106565b6122c26020830185612106565b6122cf6040830184612106565b949350505050565b6000604051905081810181811067ffffffffffffffff821117156122fa57600080fd5b8060405250919050565b600067ffffffffffffffff82111561231b57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561234357600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006123b8826123cb565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612422578082015181840152602081019050612407565b83811115612431576000848401525b50505050565b6000601f19601f8301169050919050565b612451816123ad565b811461245c57600080fd5b50565b612468816123bf565b811461247357600080fd5b50565b61247f816123eb565b811461248a57600080fd5b5056fea2646970667358221220de4dddb0770062138ab232d9db3f248c43bd1893600d12010673722228ae84c664736f6c63430007000033",
  "immutableReferences": {},
  "sourceMap": "160:799:4:-:0;;;;;;;;;;;;;552:10:5;544:5;;:18;;;;;;;;;;;;;;;;;;212:4:1;193:9;:16;203:5;;;;;;;;;;;193:16;;;;;;;;;;;;;;;;:23;;;;;;;;;;;;;;;;;;160:799:4;;;;;;",
  "deployedSourceMap": "160:799:4:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2170:191:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;342:104:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;609:125:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1166:193:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;778:190:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1486:678:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1162:406:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;635:137;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;471:132:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;717:43:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;;:::i;:::-;;;;;;;;1044:116;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1365:115;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2604:656:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;352:137:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;279:20:5;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;685:26:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;245:220:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;568:388:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1772:203:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;452:177:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1181:136:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1323:443;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1981:617;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;179:157:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1574:738;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;873:146:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;740:127;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1025:150;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;974:182:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;907:188:5;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2170:191:1;2340:14;2257:9;:22;2267:11;2257:22;;;;;;;;;;;:33;;:75;2291:9;:22;2301:11;2291:22;;;;;;;;;;;:38;;;:40;;;;;;;;;;;;2257:75;;;;;;;;;;;:80;;:97;;;;;;;;;;;;:::i;:::-;;2170:191;;:::o;342:104:0:-;402:9;:22;412:11;402:22;;;;;;;;;;;:34;;;:37;;;;;;;;;;;;;342:104;:::o;609:125:2:-;675:4;698:9;:22;708:11;698:22;;;;;;;;;;;:29;;;;;;;;;;;;691:36;;609:125;;;:::o;1166:193:1:-;1226:10;991:4;964:31;;:9;:23;974:12;964:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;955:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1270:5:::1;::::0;::::1;;;;;;;;1256:19;;:10;:19;;;;1248:63;;;;;;;;;;;;:::i;:::-;;;;;;;;;1347:5;1321:9;:23;1331:12;1321:23;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;;;;;;;1166:193:::0;;:::o;778:190:0:-;876:4;899:9;:22;909:11;899:22;;;;;;;;;;;:33;;:47;933:12;899:47;;;;;;;;;;;:53;;:62;953:7;899:62;;;;;;;;;;;;892:69;;778:190;;;;;:::o;1486:678:1:-;1604:4;1583:10;991:4;964:31;;:9;:23;974:12;964:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;955:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1620:17:::1;1640:16;:23;1620:43;;1673:14;;:16;;;;;;;;;;;;;1699:25;1727:9;:25;1737:14;;1727:25;;;;;;;;;;;1699:53;;1779:6;1762:8;:14;;:23;;;;;;;;;;;;:::i;:::-;;1819:15;1795:8;:21;;:39;;;;1867:1;1844:8;:20;;:24;;;;1896:4;1878:8;:15;;;:22;;;;;;;;;;;;;;;;;;1916:6;1911:114;1932:12;1928:1;:16;1911:114;;;1965:49;1978:14;;1994:16;2011:1;1994:19;;;;;;;;;;;;;;1965:12;:49::i;:::-;1946:3;;;;;;;1911:114;;;;2069:10;2035:15;:31;2051:14;;2035:31;;;;;;;;;;;;:44;;;;;;;;;;;;;;;;;;2124:1;2090:18;:30;2109:10;2090:30;;;;;;;;;;;;;;;;:35;;;;;;;;;;;2143:14;;2136:21;;;;1486:678:::0;;;;;:::o;1162:406:0:-;1268:4;1283:9;1295;:22;1305:11;1295:22;;;;;;;;;;;:33;;:47;1329:12;1295:47;;;;;;;;;;;:53;;:60;1349:5;1295:60;;;;;;;;;;;;1283:72;;1365:15;1390:3;1383:4;:10;1365:28;;1403:16;1422:9;:22;1432:11;1422:22;;;;;;;;;;;:34;;;1403:53;;1485:1;1470:11;:16;1466:55;;;1509:1;1502:8;;;;;;;1466:55;1550:11;1537:10;:24;;;;;;1530:31;;;;;1162:406;;;;;;:::o;635:137::-;704:4;727:9;:22;737:11;727:22;;;;;;;;;;;:38;;;720:45;;635:137;;;:::o;471:132:2:-;536:13;568:9;:22;578:11;568:22;;;;;;;;;;;:28;;561:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;471:132;;;:::o;717:43:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1044:116::-;1101:10;991:4;964:31;;:9;:23;974:12;964:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;955:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1149:4:::1;1123:9;:23;1133:12;1123:23;;;;;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;1044:116:::0;;:::o;1365:115::-;1429:4;1451:9;:22;1461:11;1451:22;;;;;;;;;;;;;;;;;;;;;;;;;1444:29;;1365:115;;;:::o;2604:656:2:-;2672:18;2704:6;2713:1;2704:10;;2700:554;2720:9;:22;2730:11;2720:22;;;;;;;;;;;:30;;:37;;;;2716:1;:41;2700:554;;;2777:19;2799:9;:22;2809:11;2799:22;;;;;;;;;;;:33;;:68;2833:9;:22;2843:11;2833:22;;;;;;;;;;;:30;;2864:1;2833:33;;;;;;;;;;;;;;;;2799:68;;;;;;;;;;;:76;;;2777:98;;2897:1;2892;:6;2889:355;;;2933:14;2917:30;;2997:9;:22;3007:11;2997:22;;;;;;;;;;;:30;;3028:1;2997:33;;;;;;;;;;;;;;;;2965:9;:22;2975:11;2965:22;;;;;;;;;;;:29;;:65;;;;2889:355;;;3084:13;3067:14;:30;3063:181;;;3132:14;3116:30;;3196:9;:22;3206:11;3196:22;;;;;;;;;;;:30;;3227:1;3196:33;;;;;;;;;;;;;;;;3164:9;:22;3174:11;3164:22;;;;;;;;;;;:29;;:65;;;;3063:181;2889:355;2700:554;2759:3;;;;;;;2700:554;;;;2604:656;;:::o;352:137:4:-;418:4;441:9;:22;451:11;441:22;;;;;;;;;;;:29;;:41;471:10;441:41;;;;;;;;;;;;;;;;;;;;;;;;;434:48;;352:137;;;:::o;279:20:5:-;;;;;;;;;;;;:::o;685:26:1:-;;;;:::o;245:220:2:-;301:10;991:4:1;964:31;;:9;:23;974:12;964:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;955:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;355:5:2::1;323:9;:22;333:11;323:22;;;;;;;;;;;:29;;;:37;;;;;;;;;;;;;;;;;;407:15;370:9;:22;380:11;370:22;;;;;;;;;;;:34;;:52;;;;432:26;446:11;432:13;:26::i;:::-;245:220:::0;;:::o;568:388:4:-;655:11;268:4;:20;;;289:11;268:33;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;267:34;258:70;;;;;;;;;;;;:::i;:::-;;;;;;;;;728:6:::1;;:13;;686:9;:22;696:11;686:22;;;;;;;;;;;:38;;;:55;678:107;;;;;;;;;;;;:::i;:::-;;;;;;;;;800:6;795:124;816:9;:22;826:11;816:22;;;;;;;;;;;:38;;;812:1;:42;795:124;;;874:34;882:11;895:1;898:6;;905:1;898:9;;;;;;;;;;;;;874:7;:34::i;:::-;856:3;;;;;;;795:124;;;;928:21;937:11;928:8;:21::i;:::-;568:388:::0;;;;:::o;1772:203:2:-;1850:6;1845:124;1866:9;:22;1876:11;1866:22;;;;;;;;;;;:38;;;1862:1;:42;1845:124;;;1924:34;1943:11;1956:1;1924:18;:34::i;:::-;1906:3;;;;;;;1845:124;;;;1772:203;:::o;452:177:0:-;538:13;570:9;:22;580:11;570:22;;;;;;;;;;;:33;;:47;604:12;570:47;;;;;;;;;;;:52;;563:59;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;452:177;;;;:::o;1181:136:2:-;1249:13;1280:9;:22;1290:11;1280:22;;;;;;;;;;;:30;;1273:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1181:136;;;:::o;1323:443::-;1381:41;1410:11;1381:28;:41::i;:::-;1433:37;1458:11;1433:24;:37::i;:::-;1481:36;1505:11;1481:23;:36::i;:::-;1570:1;1530:9;:22;1540:11;1530:22;;;;;;;;;;;:30;;:37;;;;:41;1527:233;;;1586:36;1610:11;1586:23;:36::i;:::-;1527:233;;;1716:9;:22;1726:11;1716:22;;;;;;;;;;;:30;;1747:1;1716:33;;;;;;;;;;;;;;;;1684:9;:22;1694:11;1684:22;;;;;;;;;;;:29;;:65;;;;1527:233;1323:443;:::o;1981:617::-;2050:15;2083:6;2079:513;2099:9;:22;2109:11;2099:22;;;;;;;;;;;:38;;;2095:1;:42;2079:513;;;2174:9;:22;2184:11;2174:22;;;;;;;;;;;:33;;:36;2208:1;2174:36;;;;;;;;;;;:48;;;2160:10;:62;2157:425;;;2241:9;:22;2251:11;2241:22;;;;;;;;;;;:30;;2277:1;2241:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2157:425;;;2328:9;:22;2338:11;2328:22;;;;;;;;;;;:33;;:36;2362:1;2328:36;;;;;;;;;;;:48;;;2315:10;:61;2312:270;;;2402:9;:22;2412:11;2402:22;;;;;;;;;;;:30;;;2395:37;;;;:::i;:::-;2463:9;:22;2473:11;2463:22;;;;;;;;;;;:33;;:36;2497:1;2463:36;;;;;;;;;;;:48;;;2450:61;;2529:9;:22;2539:11;2529:22;;;;;;;;;;;:30;;2565:1;2529:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2312:270;2157:425;2139:3;;;;;;;2079:513;;;;1981:617;;:::o;179:157:0:-;264:9;:22;274:11;264:22;;;;;;;;;;;:33;;:47;298:12;264:47;;;;;;;;;;;:53;;:62;318:7;264:62;;;;;;;;;;;;:65;;;;;;;;;;;;;179:157;;;:::o;1574:738::-;1698:1;1660:9;:22;1670:11;1660:22;;;;;;;;;;;:34;;;:39;1656:650;;;1777:1;1715:9;:22;1725:11;1715:22;;;;;;;;;;;:33;;:47;1749:12;1715:47;;;;;;;;;;;:59;;:63;;;;1656:650;;;1822:6;1831:1;1822:10;;1817:479;1893:2;1834:9;:22;1844:11;1834:22;;;;;;;;;;;:33;;:47;1868:12;1834:47;;;;;;;;;;;:55;;;:61;1817:479;;2035:4;:30;;;2066:11;2079:12;2093:1;2035:60;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1977:9;:22;1987:11;1977:22;;;;;;;;;;;:33;;:47;2011:12;1977:47;;;;;;;;;;;:55;;;:118;1919:9;:22;1929:11;1919:22;;;;;;;;;;;:33;;:47;1953:12;1919:47;;;;;;;;;;;:55;;:176;;;;2175:2;2116:9;:22;2126:11;2116:22;;;;;;;;;;;:33;;:47;2150:12;2116:47;;;;;;;;;;;:55;;;:61;2113:169;;2262:1;2200:9;:22;2210:11;2200:22;;;;;;;;;;;:33;;:47;2234:12;2200:47;;;;;;;;;;;:59;;:63;;;;2113:169;1897:3;;;;;;;;1817:479;;;;1656:650;1574:738;;:::o;873:146:2:-;970:4;926:9;:22;936:11;926:22;;;;;;;;;;;:29;;:41;956:10;926:41;;;;;;;;;;;;;;;;:48;;;;;;;;;;;;;;;;;;984:28;1000:11;984:15;:28::i;:::-;873:146;:::o;740:127::-;808:4;831:9;:22;841:11;831:22;;;;;;;;;;;:29;;;824:36;;740:127;;;:::o;1025:150::-;1108:4;1130:9;:22;1140:11;1130:22;;;;;;;;;;;:30;;1161:6;1130:38;;;;;;;;;;;;;;;;1123:45;;1025:150;;;;:::o;974:182:0:-;1067:4;1090:9;:22;1100:11;1090:22;;;;;;;;;;;:33;;:47;1124:12;1090:47;;;;;;;;;;;:59;;;1083:66;;974:182;;;;:::o;907:188:5:-;711:5;;;;;;;;;;697:19;;:10;:19;;;689:28;;;;;;1007:1:::1;987:22;;:8;:22;;;;979:31;;;::::0;::::1;;1053:8;1025:37;;1046:5;::::0;::::1;;;;;;;;1025:37;;;;;;;;;;;;1080:8;1072:5;::::0;:16:::1;;;;;;;;;;;;;;;;;;907:188:::0;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;5:130::-;;85:6;72:20;63:29;;97:33;124:5;97:33;:::i;:::-;57:78;;;;:::o;159:708::-;;286:3;279:4;271:6;267:17;263:27;253:2;;304:1;301;294:12;253:2;341:6;328:20;363:90;378:74;445:6;378:74;:::i;:::-;363:90;:::i;:::-;354:99;;470:5;495:6;488:5;481:21;525:4;517:6;513:17;503:27;;547:4;542:3;538:14;531:21;;600:6;633:1;618:243;643:6;640:1;637:13;618:243;;;726:3;713:17;705:6;701:30;750:47;793:3;781:10;750:47;:::i;:::-;745:3;738:60;821:4;816:3;812:14;805:21;;849:4;844:3;840:14;833:21;;675:186;665:1;662;658:9;653:14;;618:243;;;622:14;246:621;;;;;;;:::o;893:352::-;;;1023:3;1016:4;1008:6;1004:17;1000:27;990:2;;1041:1;1038;1031:12;990:2;1074:6;1061:20;1051:30;;1101:18;1093:6;1090:30;1087:2;;;1133:1;1130;1123:12;1087:2;1167:4;1159:6;1155:17;1143:29;;1218:3;1210:4;1202:6;1198:17;1188:8;1184:32;1181:41;1178:2;;;1235:1;1232;1225:12;1178:2;983:262;;;;;:::o;1253:128::-;;1334:6;1328:13;1319:22;;1346:30;1370:5;1346:30;:::i;:::-;1313:68;;;;:::o;1389:442::-;;1491:3;1484:4;1476:6;1472:17;1468:27;1458:2;;1509:1;1506;1499:12;1458:2;1546:6;1533:20;1568:65;1583:49;1625:6;1583:49;:::i;:::-;1568:65;:::i;:::-;1559:74;;1653:6;1646:5;1639:21;1689:4;1681:6;1677:17;1722:4;1715:5;1711:16;1757:3;1748:6;1743:3;1739:16;1736:25;1733:2;;;1774:1;1771;1764:12;1733:2;1784:41;1818:6;1813:3;1808;1784:41;:::i;:::-;1451:380;;;;;;;:::o;1839:130::-;;1919:6;1906:20;1897:29;;1931:33;1958:5;1931:33;:::i;:::-;1891:78;;;;:::o;1976:134::-;;2060:6;2054:13;2045:22;;2072:33;2099:5;2072:33;:::i;:::-;2039:71;;;;:::o;2117:241::-;;2221:2;2209:9;2200:7;2196:23;2192:32;2189:2;;;2237:1;2234;2227:12;2189:2;2272:1;2289:53;2334:7;2325:6;2314:9;2310:22;2289:53;:::i;:::-;2279:63;;2251:97;2183:175;;;;:::o;2365:257::-;;2477:2;2465:9;2456:7;2452:23;2448:32;2445:2;;;2493:1;2490;2483:12;2445:2;2528:1;2545:61;2598:7;2589:6;2578:9;2574:22;2545:61;:::i;:::-;2535:71;;2507:105;2439:183;;;;:::o;2629:628::-;;;2795:2;2783:9;2774:7;2770:23;2766:32;2763:2;;;2811:1;2808;2801:12;2763:2;2874:1;2863:9;2859:17;2846:31;2897:18;2889:6;2886:30;2883:2;;;2929:1;2926;2919:12;2883:2;2949:63;3004:7;2995:6;2984:9;2980:22;2949:63;:::i;:::-;2939:73;;2825:193;3077:2;3066:9;3062:18;3049:32;3101:18;3093:6;3090:30;3087:2;;;3133:1;3130;3123:12;3087:2;3153:88;3233:7;3224:6;3213:9;3209:22;3153:88;:::i;:::-;3143:98;;3028:219;2757:500;;;;;:::o;3264:241::-;;3368:2;3356:9;3347:7;3343:23;3339:32;3336:2;;;3384:1;3381;3374:12;3336:2;3419:1;3436:53;3481:7;3472:6;3461:9;3457:22;3436:53;:::i;:::-;3426:63;;3398:97;3330:175;;;;:::o;3512:263::-;;3627:2;3615:9;3606:7;3602:23;3598:32;3595:2;;;3643:1;3640;3633:12;3595:2;3678:1;3695:64;3751:7;3742:6;3731:9;3727:22;3695:64;:::i;:::-;3685:74;;3657:108;3589:186;;;;:::o;3782:522::-;;;;3938:2;3926:9;3917:7;3913:23;3909:32;3906:2;;;3954:1;3951;3944:12;3906:2;3989:1;4006:53;4051:7;4042:6;4031:9;4027:22;4006:53;:::i;:::-;3996:63;;3968:97;4124:2;4113:9;4109:18;4096:32;4148:18;4140:6;4137:30;4134:2;;;4180:1;4177;4170:12;4134:2;4208:80;4280:7;4271:6;4260:9;4256:22;4208:80;:::i;:::-;4190:98;;;;4075:219;3900:404;;;;;:::o;4311:472::-;;;4442:2;4430:9;4421:7;4417:23;4413:32;4410:2;;;4458:1;4455;4448:12;4410:2;4493:1;4510:53;4555:7;4546:6;4535:9;4531:22;4510:53;:::i;:::-;4500:63;;4472:97;4628:2;4617:9;4613:18;4600:32;4652:18;4644:6;4641:30;4638:2;;;4684:1;4681;4674:12;4638:2;4704:63;4759:7;4750:6;4739:9;4735:22;4704:63;:::i;:::-;4694:73;;4579:194;4404:379;;;;;:::o;4790:366::-;;;4911:2;4899:9;4890:7;4886:23;4882:32;4879:2;;;4927:1;4924;4917:12;4879:2;4962:1;4979:53;5024:7;5015:6;5004:9;5000:22;4979:53;:::i;:::-;4969:63;;4941:97;5069:2;5087:53;5132:7;5123:6;5112:9;5108:22;5087:53;:::i;:::-;5077:63;;5048:98;4873:283;;;;;:::o;5163:491::-;;;;5301:2;5289:9;5280:7;5276:23;5272:32;5269:2;;;5317:1;5314;5307:12;5269:2;5352:1;5369:53;5414:7;5405:6;5394:9;5390:22;5369:53;:::i;:::-;5359:63;;5331:97;5459:2;5477:53;5522:7;5513:6;5502:9;5498:22;5477:53;:::i;:::-;5467:63;;5438:98;5567:2;5585:53;5630:7;5621:6;5610:9;5606:22;5585:53;:::i;:::-;5575:63;;5546:98;5263:391;;;;;:::o;5662:173::-;;5749:46;5791:3;5783:6;5749:46;:::i;:::-;5824:4;5819:3;5815:14;5801:28;;5742:93;;;;:::o;5843:113::-;5926:24;5944:5;5926:24;:::i;:::-;5921:3;5914:37;5908:48;;:::o;5994:690::-;;6139:54;6187:5;6139:54;:::i;:::-;6206:86;6285:6;6280:3;6206:86;:::i;:::-;6199:93;;6313:56;6363:5;6313:56;:::i;:::-;6389:7;6417:1;6402:260;6427:6;6424:1;6421:13;6402:260;;;6494:6;6488:13;6515:63;6574:3;6559:13;6515:63;:::i;:::-;6508:70;;6595:60;6648:6;6595:60;:::i;:::-;6585:70;;6459:203;6449:1;6446;6442:9;6437:14;;6402:260;;;6406:14;6675:3;6668:10;;6118:566;;;;;;;:::o;6692:104::-;6769:21;6784:5;6769:21;:::i;:::-;6764:3;6757:34;6751:45;;:::o;6803:347::-;;6915:39;6948:5;6915:39;:::i;:::-;6966:71;7030:6;7025:3;6966:71;:::i;:::-;6959:78;;7042:52;7087:6;7082:3;7075:4;7068:5;7064:16;7042:52;:::i;:::-;7115:29;7137:6;7115:29;:::i;:::-;7110:3;7106:39;7099:46;;6895:255;;;;;:::o;7158:322::-;;7318:67;7382:2;7377:3;7318:67;:::i;:::-;7311:74;;7418:24;7414:1;7409:3;7405:11;7398:45;7471:2;7466:3;7462:12;7455:19;;7304:176;;;:::o;7489:320::-;;7649:67;7713:2;7708:3;7649:67;:::i;:::-;7642:74;;7749:22;7745:1;7740:3;7736:11;7729:43;7800:2;7795:3;7791:12;7784:19;;7635:174;;;:::o;7818:376::-;;7978:67;8042:2;8037:3;7978:67;:::i;:::-;7971:74;;8078:34;8074:1;8069:3;8065:11;8058:55;8147:9;8142:2;8137:3;8133:12;8126:31;8185:2;8180:3;8176:12;8169:19;;7964:230;;;:::o;8203:331::-;;8363:67;8427:2;8422:3;8363:67;:::i;:::-;8356:74;;8463:33;8459:1;8454:3;8450:11;8443:54;8525:2;8520:3;8516:12;8509:19;;8349:185;;;:::o;8542:103::-;8615:24;8633:5;8615:24;:::i;:::-;8610:3;8603:37;8597:48;;:::o;8652:113::-;8735:24;8753:5;8735:24;:::i;:::-;8730:3;8723:37;8717:48;;:::o;8772:222::-;;8899:2;8888:9;8884:18;8876:26;;8913:71;8981:1;8970:9;8966:17;8957:6;8913:71;:::i;:::-;8870:124;;;;:::o;9001:370::-;;9178:2;9167:9;9163:18;9155:26;;9228:9;9222:4;9218:20;9214:1;9203:9;9199:17;9192:47;9253:108;9356:4;9347:6;9253:108;:::i;:::-;9245:116;;9149:222;;;;:::o;9378:210::-;;9499:2;9488:9;9484:18;9476:26;;9513:65;9575:1;9564:9;9560:17;9551:6;9513:65;:::i;:::-;9470:118;;;;:::o;9595:310::-;;9742:2;9731:9;9727:18;9719:26;;9792:9;9786:4;9782:20;9778:1;9767:9;9763:17;9756:47;9817:78;9890:4;9881:6;9817:78;:::i;:::-;9809:86;;9713:192;;;;:::o;9912:968::-;;10221:3;10210:9;10206:19;10198:27;;10272:9;10266:4;10262:20;10258:1;10247:9;10243:17;10236:47;10297:78;10370:4;10361:6;10297:78;:::i;:::-;10289:86;;10386:72;10454:2;10443:9;10439:18;10430:6;10386:72;:::i;:::-;10469;10537:2;10526:9;10522:18;10513:6;10469:72;:::i;:::-;10552;10620:2;10609:9;10605:18;10596:6;10552:72;:::i;:::-;10635:67;10697:3;10686:9;10682:19;10673:6;10635:67;:::i;:::-;10713:73;10781:3;10770:9;10766:19;10757:6;10713:73;:::i;:::-;10797;10865:3;10854:9;10850:19;10841:6;10797:73;:::i;:::-;10192:688;;;;;;;;;;:::o;10887:416::-;;11087:2;11076:9;11072:18;11064:26;;11137:9;11131:4;11127:20;11123:1;11112:9;11108:17;11101:47;11162:131;11288:4;11162:131;:::i;:::-;11154:139;;11058:245;;;:::o;11310:416::-;;11510:2;11499:9;11495:18;11487:26;;11560:9;11554:4;11550:20;11546:1;11535:9;11531:17;11524:47;11585:131;11711:4;11585:131;:::i;:::-;11577:139;;11481:245;;;:::o;11733:416::-;;11933:2;11922:9;11918:18;11910:26;;11983:9;11977:4;11973:20;11969:1;11958:9;11954:17;11947:47;12008:131;12134:4;12008:131;:::i;:::-;12000:139;;11904:245;;;:::o;12156:416::-;;12356:2;12345:9;12341:18;12333:26;;12406:9;12400:4;12396:20;12392:1;12381:9;12377:17;12370:47;12431:131;12557:4;12431:131;:::i;:::-;12423:139;;12327:245;;;:::o;12579:222::-;;12706:2;12695:9;12691:18;12683:26;;12720:71;12788:1;12777:9;12773:17;12764:6;12720:71;:::i;:::-;12677:124;;;;:::o;12808:444::-;;12991:2;12980:9;12976:18;12968:26;;13005:71;13073:1;13062:9;13058:17;13049:6;13005:71;:::i;:::-;13087:72;13155:2;13144:9;13140:18;13131:6;13087:72;:::i;:::-;13170;13238:2;13227:9;13223:18;13214:6;13170:72;:::i;:::-;12962:290;;;;;;:::o;13259:256::-;;13321:2;13315:9;13305:19;;13359:4;13351:6;13347:17;13458:6;13446:10;13443:22;13422:18;13410:10;13407:34;13404:62;13401:2;;;13479:1;13476;13469:12;13401:2;13499:10;13495:2;13488:22;13299:216;;;;:::o;13522:314::-;;13691:18;13683:6;13680:30;13677:2;;;13723:1;13720;13713:12;13677:2;13758:4;13750:6;13746:17;13738:25;;13821:4;13815;13811:15;13803:23;;13614:222;;;:::o;13843:322::-;;13987:18;13979:6;13976:30;13973:2;;;14019:1;14016;14009:12;13973:2;14086:4;14082:9;14075:4;14067:6;14063:17;14059:33;14051:41;;14150:4;14144;14140:15;14132:23;;13910:255;;;:::o;14172:151::-;;14258:3;14250:11;;14296:4;14291:3;14287:14;14279:22;;14244:79;;;:::o;14330:137::-;;14439:5;14433:12;14423:22;;14404:63;;;:::o;14474:122::-;;14568:5;14562:12;14552:22;;14533:63;;;:::o;14603:108::-;;14701:4;14696:3;14692:14;14684:22;;14678:33;;;:::o;14719:178::-;;14849:6;14844:3;14837:19;14886:4;14881:3;14877:14;14862:29;;14830:67;;;;:::o;14906:163::-;;15021:6;15016:3;15009:19;15058:4;15053:3;15049:14;15034:29;;15002:67;;;;:::o;15077:91::-;;15139:24;15157:5;15139:24;:::i;:::-;15128:35;;15122:46;;;:::o;15175:85::-;;15248:5;15241:13;15234:21;15223:32;;15217:43;;;:::o;15267:121::-;;15340:42;15333:5;15329:54;15318:65;;15312:76;;;:::o;15395:72::-;;15457:5;15446:16;;15440:27;;;:::o;15475:145::-;15556:6;15551:3;15546;15533:30;15612:1;15603:6;15598:3;15594:16;15587:27;15526:94;;;:::o;15629:268::-;15694:1;15701:101;15715:6;15712:1;15709:13;15701:101;;;15791:1;15786:3;15782:11;15776:18;15772:1;15767:3;15763:11;15756:39;15737:2;15734:1;15730:10;15725:15;;15701:101;;;15817:6;15814:1;15811:13;15808:2;;;15882:1;15873:6;15868:3;15864:16;15857:27;15808:2;15678:219;;;;:::o;15905:97::-;;15993:2;15989:7;15984:2;15977:5;15973:14;15969:28;15959:38;;15953:49;;;:::o;16010:117::-;16079:24;16097:5;16079:24;:::i;:::-;16072:5;16069:35;16059:2;;16118:1;16115;16108:12;16059:2;16053:74;:::o;16134:111::-;16200:21;16215:5;16200:21;:::i;:::-;16193:5;16190:32;16180:2;;16236:1;16233;16226:12;16180:2;16174:71;:::o;16252:117::-;16321:24;16339:5;16321:24;:::i;:::-;16314:5;16311:35;16301:2;;16360:1;16357;16350:12;16301:2;16295:74;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >= 0.7.0 < 0.8.0;\npragma experimental ABIEncoderV2;\n\nimport \"./Candidate.sol\";\nimport \"./ElectionHelper.sol\";\n\n\ncontract Vote is Candidate, ElectionHelper {\n    modifier hasNotVoted(uint _electionId) {\n        require (!this.hasAlreadyVoted(_electionId), \"User has already voted\");\n        _;\n    }\n\n    function hasAlreadyVoted(uint _electionId) external view returns (bool) {\n        return elections[_electionId].voters[msg.sender];\n    }\n\n    /**\n     * Gives one note to each candidates of the election\n     */\n    function voteToElection(uint _electionId, uint[] calldata _notes) external hasNotVoted(_electionId) {\n        require(elections[_electionId].candidatesCount == _notes.length, \"Not same amount of candidates and votes\");\n        for (uint i = 0; i < elections[_electionId].candidatesCount; i++){\n            addNote(_electionId, i, _notes[i]);\n        }\n        addVoter(_electionId);\n    }\n\n}",
  "sourcePath": "C:/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Vote.sol",
  "ast": {
    "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Vote.sol",
    "exportedSymbols": {
      "Vote": [
        983
      ]
    },
    "id": 984,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 893,
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
        "id": 894,
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
        "id": 895,
        "nodeType": "ImportDirective",
        "scope": 984,
        "sourceUnit": 248,
        "src": "101:25:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol",
        "file": "./ElectionHelper.sol",
        "id": 896,
        "nodeType": "ImportDirective",
        "scope": 984,
        "sourceUnit": 859,
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
              "id": 897,
              "name": "Candidate",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 247,
              "src": "177:9:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Candidate_$247",
                "typeString": "contract Candidate"
              }
            },
            "id": 898,
            "nodeType": "InheritanceSpecifier",
            "src": "177:9:4"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 899,
              "name": "ElectionHelper",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 858,
              "src": "188:14:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ElectionHelper_$858",
                "typeString": "contract ElectionHelper"
              }
            },
            "id": 900,
            "nodeType": "InheritanceSpecifier",
            "src": "188:14:4"
          }
        ],
        "contractDependencies": [
          247,
          497,
          858,
          1044
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 983,
        "linearizedBaseContracts": [
          983,
          858,
          247,
          497,
          1044
        ],
        "name": "Vote",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 914,
              "nodeType": "Block",
              "src": "248:98:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 909,
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
                              "id": 907,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 902,
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
                              "id": 905,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "268:4:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Vote_$983",
                                "typeString": "contract Vote"
                              }
                            },
                            "id": 906,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "hasAlreadyVoted",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 931,
                            "src": "268:20:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (uint256) view external returns (bool)"
                            }
                          },
                          "id": 908,
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
                        "id": 910,
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
                      "id": 904,
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
                    "id": 911,
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
                  "id": 912,
                  "nodeType": "ExpressionStatement",
                  "src": "258:70:4"
                },
                {
                  "id": 913,
                  "nodeType": "PlaceholderStatement",
                  "src": "338:1:4"
                }
              ]
            },
            "documentation": null,
            "id": 915,
            "name": "hasNotVoted",
            "nodeType": "ModifierDefinition",
            "overrides": null,
            "parameters": {
              "id": 903,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 902,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 915,
                  "src": "230:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 901,
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
              "id": 930,
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
                          "id": 922,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 306,
                          "src": "441:9:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 924,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 923,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 917,
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
                          "typeIdentifier": "t_struct$_Election_$289_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 925,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "voters",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 283,
                      "src": "441:29:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 928,
                    "indexExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 926,
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
                      "id": 927,
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
                  "functionReturnParameters": 921,
                  "id": 929,
                  "nodeType": "Return",
                  "src": "434:48:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "7fa67b13",
            "id": 931,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "hasAlreadyVoted",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 918,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 917,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 931,
                  "src": "377:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 916,
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
              "id": 921,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 920,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 931,
                  "src": "418:4:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 919,
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
            "scope": 983,
            "src": "352:137:4",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 981,
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
                        "id": 950,
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
                              "id": 944,
                              "name": "elections",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 306,
                              "src": "686:9:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                                "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                              }
                            },
                            "id": 946,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 945,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 934,
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
                              "typeIdentifier": "t_struct$_Election_$289_storage",
                              "typeString": "struct ElectionFactory.Election storage ref"
                            }
                          },
                          "id": 947,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "candidatesCount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 275,
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
                            "id": 948,
                            "name": "_notes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 937,
                            "src": "728:6:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                              "typeString": "uint256[] calldata"
                            }
                          },
                          "id": 949,
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
                        "id": 951,
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
                      "id": 943,
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
                    "id": 952,
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
                  "id": 953,
                  "nodeType": "ExpressionStatement",
                  "src": "678:107:4"
                },
                {
                  "body": {
                    "id": 975,
                    "nodeType": "Block",
                    "src": "860:59:4",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 968,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 934,
                              "src": "882:11:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 969,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 955,
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
                                "id": 970,
                                "name": "_notes",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 937,
                                "src": "898:6:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                  "typeString": "uint256[] calldata"
                                }
                              },
                              "id": 972,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 971,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 955,
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
                            "id": 967,
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
                          "id": 973,
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
                        "id": 974,
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
                    "id": 963,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 958,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 955,
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
                          "id": 959,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 306,
                          "src": "816:9:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$289_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 961,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 960,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 934,
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
                          "typeIdentifier": "t_struct$_Election_$289_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 962,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "candidatesCount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 275,
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
                  "id": 976,
                  "initializationExpression": {
                    "assignments": [
                      955
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 955,
                        "mutability": "mutable",
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 976,
                        "src": "800:6:4",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 954,
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
                    "id": 957,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 956,
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
                      "id": 965,
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
                        "id": 964,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 955,
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
                    "id": 966,
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
                        "id": 978,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 934,
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
                      "id": 977,
                      "name": "addVoter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 595,
                      "src": "928:8:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 979,
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
                  "id": 980,
                  "nodeType": "ExpressionStatement",
                  "src": "928:21:4"
                }
              ]
            },
            "documentation": {
              "id": 932,
              "nodeType": "StructuredDocumentation",
              "src": "495:68:4",
              "text": " Gives one note to each candidates of the election"
            },
            "functionSelector": "a0b17848",
            "id": 982,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 940,
                    "name": "_electionId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 934,
                    "src": "655:11:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 941,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 939,
                  "name": "hasNotVoted",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 915,
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
              "id": 938,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 934,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 982,
                  "src": "592:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 933,
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
                  "id": 937,
                  "mutability": "mutable",
                  "name": "_notes",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 982,
                  "src": "610:22:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 935,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "610:4:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 936,
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
              "id": 942,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "668:0:4"
            },
            "scope": 983,
            "src": "568:388:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 984,
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
          983
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
        "id": 893,
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
        "id": 894,
        "name": "PragmaDirective",
        "src": "66:33:4"
      },
      {
        "attributes": {
          "SourceUnit": 248,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Candidate.sol",
          "file": "./Candidate.sol",
          "scope": 984,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 895,
        "name": "ImportDirective",
        "src": "101:25:4"
      },
      {
        "attributes": {
          "SourceUnit": 859,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol",
          "file": "./ElectionHelper.sol",
          "scope": 984,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 896,
        "name": "ImportDirective",
        "src": "127:30:4"
      },
      {
        "attributes": {
          "abstract": false,
          "contractDependencies": [
            247,
            497,
            858,
            1044
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            983,
            858,
            247,
            497,
            1044
          ],
          "name": "Vote",
          "scope": 984
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
                  "referencedDeclaration": 247,
                  "type": "contract Candidate"
                },
                "id": 897,
                "name": "UserDefinedTypeName",
                "src": "177:9:4"
              }
            ],
            "id": 898,
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
                  "referencedDeclaration": 858,
                  "type": "contract ElectionHelper"
                },
                "id": 899,
                "name": "UserDefinedTypeName",
                "src": "188:14:4"
              }
            ],
            "id": 900,
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
                      "scope": 915,
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
                        "id": 901,
                        "name": "ElementaryTypeName",
                        "src": "230:4:4"
                      }
                    ],
                    "id": 902,
                    "name": "VariableDeclaration",
                    "src": "230:16:4"
                  }
                ],
                "id": 903,
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
                            "id": 904,
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
                                      "referencedDeclaration": 931,
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
                                        "id": 905,
                                        "name": "Identifier",
                                        "src": "268:4:4"
                                      }
                                    ],
                                    "id": 906,
                                    "name": "MemberAccess",
                                    "src": "268:20:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 902,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 907,
                                    "name": "Identifier",
                                    "src": "289:11:4"
                                  }
                                ],
                                "id": 908,
                                "name": "FunctionCall",
                                "src": "268:33:4"
                              }
                            ],
                            "id": 909,
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
                            "id": 910,
                            "name": "Literal",
                            "src": "303:24:4"
                          }
                        ],
                        "id": 911,
                        "name": "FunctionCall",
                        "src": "258:70:4"
                      }
                    ],
                    "id": 912,
                    "name": "ExpressionStatement",
                    "src": "258:70:4"
                  },
                  {
                    "id": 913,
                    "name": "PlaceholderStatement",
                    "src": "338:1:4"
                  }
                ],
                "id": 914,
                "name": "Block",
                "src": "248:98:4"
              }
            ],
            "id": 915,
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
              "scope": 983,
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
                      "scope": 931,
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
                        "id": 916,
                        "name": "ElementaryTypeName",
                        "src": "377:4:4"
                      }
                    ],
                    "id": 917,
                    "name": "VariableDeclaration",
                    "src": "377:16:4"
                  }
                ],
                "id": 918,
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
                      "scope": 931,
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
                        "id": 919,
                        "name": "ElementaryTypeName",
                        "src": "418:4:4"
                      }
                    ],
                    "id": 920,
                    "name": "VariableDeclaration",
                    "src": "418:4:4"
                  }
                ],
                "id": 921,
                "name": "ParameterList",
                "src": "417:6:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 921
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
                                    "id": 922,
                                    "name": "Identifier",
                                    "src": "441:9:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 917,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 923,
                                    "name": "Identifier",
                                    "src": "451:11:4"
                                  }
                                ],
                                "id": 924,
                                "name": "IndexAccess",
                                "src": "441:22:4"
                              }
                            ],
                            "id": 925,
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
                                "id": 926,
                                "name": "Identifier",
                                "src": "471:3:4"
                              }
                            ],
                            "id": 927,
                            "name": "MemberAccess",
                            "src": "471:10:4"
                          }
                        ],
                        "id": 928,
                        "name": "IndexAccess",
                        "src": "441:41:4"
                      }
                    ],
                    "id": 929,
                    "name": "Return",
                    "src": "434:48:4"
                  }
                ],
                "id": 930,
                "name": "Block",
                "src": "424:65:4"
              }
            ],
            "id": 931,
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
              "scope": 983,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "text": " Gives one note to each candidates of the election"
                },
                "id": 932,
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
                      "scope": 982,
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
                        "id": 933,
                        "name": "ElementaryTypeName",
                        "src": "592:4:4"
                      }
                    ],
                    "id": 934,
                    "name": "VariableDeclaration",
                    "src": "592:16:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_notes",
                      "overrides": null,
                      "scope": 982,
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
                            "id": 935,
                            "name": "ElementaryTypeName",
                            "src": "610:4:4"
                          }
                        ],
                        "id": 936,
                        "name": "ArrayTypeName",
                        "src": "610:6:4"
                      }
                    ],
                    "id": 937,
                    "name": "VariableDeclaration",
                    "src": "610:22:4"
                  }
                ],
                "id": 938,
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
                "id": 942,
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
                      "referencedDeclaration": 915,
                      "type": "modifier (uint256)",
                      "value": "hasNotVoted"
                    },
                    "id": 939,
                    "name": "Identifier",
                    "src": "643:11:4"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 934,
                      "type": "uint256",
                      "value": "_electionId"
                    },
                    "id": 940,
                    "name": "Identifier",
                    "src": "655:11:4"
                  }
                ],
                "id": 941,
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
                            "id": 943,
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
                                        "id": 944,
                                        "name": "Identifier",
                                        "src": "686:9:4"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 934,
                                          "type": "uint256",
                                          "value": "_electionId"
                                        },
                                        "id": 945,
                                        "name": "Identifier",
                                        "src": "696:11:4"
                                      }
                                    ],
                                    "id": 946,
                                    "name": "IndexAccess",
                                    "src": "686:22:4"
                                  }
                                ],
                                "id": 947,
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
                                      "referencedDeclaration": 937,
                                      "type": "uint256[] calldata",
                                      "value": "_notes"
                                    },
                                    "id": 948,
                                    "name": "Identifier",
                                    "src": "728:6:4"
                                  }
                                ],
                                "id": 949,
                                "name": "MemberAccess",
                                "src": "728:13:4"
                              }
                            ],
                            "id": 950,
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
                            "id": 951,
                            "name": "Literal",
                            "src": "743:41:4"
                          }
                        ],
                        "id": 952,
                        "name": "FunctionCall",
                        "src": "678:107:4"
                      }
                    ],
                    "id": 953,
                    "name": "ExpressionStatement",
                    "src": "678:107:4"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            955
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "mutability": "mutable",
                              "name": "i",
                              "overrides": null,
                              "scope": 976,
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
                                "id": 954,
                                "name": "ElementaryTypeName",
                                "src": "800:4:4"
                              }
                            ],
                            "id": 955,
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
                            "id": 956,
                            "name": "Literal",
                            "src": "809:1:4"
                          }
                        ],
                        "id": 957,
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
                              "referencedDeclaration": 955,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 958,
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
                                    "id": 959,
                                    "name": "Identifier",
                                    "src": "816:9:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 934,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 960,
                                    "name": "Identifier",
                                    "src": "826:11:4"
                                  }
                                ],
                                "id": 961,
                                "name": "IndexAccess",
                                "src": "816:22:4"
                              }
                            ],
                            "id": 962,
                            "name": "MemberAccess",
                            "src": "816:38:4"
                          }
                        ],
                        "id": 963,
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
                                  "referencedDeclaration": 955,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 964,
                                "name": "Identifier",
                                "src": "856:1:4"
                              }
                            ],
                            "id": 965,
                            "name": "UnaryOperation",
                            "src": "856:3:4"
                          }
                        ],
                        "id": 966,
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
                                    "id": 967,
                                    "name": "Identifier",
                                    "src": "874:7:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 934,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 968,
                                    "name": "Identifier",
                                    "src": "882:11:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 955,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 969,
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
                                          "referencedDeclaration": 937,
                                          "type": "uint256[] calldata",
                                          "value": "_notes"
                                        },
                                        "id": 970,
                                        "name": "Identifier",
                                        "src": "898:6:4"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 955,
                                          "type": "uint256",
                                          "value": "i"
                                        },
                                        "id": 971,
                                        "name": "Identifier",
                                        "src": "905:1:4"
                                      }
                                    ],
                                    "id": 972,
                                    "name": "IndexAccess",
                                    "src": "898:9:4"
                                  }
                                ],
                                "id": 973,
                                "name": "FunctionCall",
                                "src": "874:34:4"
                              }
                            ],
                            "id": 974,
                            "name": "ExpressionStatement",
                            "src": "874:34:4"
                          }
                        ],
                        "id": 975,
                        "name": "Block",
                        "src": "860:59:4"
                      }
                    ],
                    "id": 976,
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
                              "referencedDeclaration": 595,
                              "type": "function (uint256)",
                              "value": "addVoter"
                            },
                            "id": 977,
                            "name": "Identifier",
                            "src": "928:8:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 934,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 978,
                            "name": "Identifier",
                            "src": "937:11:4"
                          }
                        ],
                        "id": 979,
                        "name": "FunctionCall",
                        "src": "928:21:4"
                      }
                    ],
                    "id": 980,
                    "name": "ExpressionStatement",
                    "src": "928:21:4"
                  }
                ],
                "id": 981,
                "name": "Block",
                "src": "668:288:4"
              }
            ],
            "id": 982,
            "name": "FunctionDefinition",
            "src": "568:388:4"
          }
        ],
        "id": 983,
        "name": "ContractDefinition",
        "src": "160:799:4"
      }
    ],
    "id": 984,
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
      "address": "0x2d8E863e51C7c70f6c6f4AE9db92d2485f34465d",
      "transactionHash": "0x4d17eee8beaf2f266e1bfcd1ec2483dfc33232b9cd32f6a6623930418bdf83cb"
    }
  },
  "schemaVersion": "3.3.3",
  "updatedAt": "2021-01-21T16:58:33.481Z",
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