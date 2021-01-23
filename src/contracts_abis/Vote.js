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
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
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
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
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
      "name": "getElectionWinners",
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
  "metadata": "{\"compiler\":{\"version\":\"0.7.0+commit.9e61f92b\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"addAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_candidateName\",\"type\":\"string\"}],\"name\":\"addCandidate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_noteId\",\"type\":\"uint256\"}],\"name\":\"addNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"addVoter\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_note\",\"type\":\"uint256\"}],\"name\":\"calculatePercentageOfNote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"computeAverageNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeCandidatesAverageNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeFinalRoundWinner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeFirstRoundWinners\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeResult\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_title\",\"type\":\"string\"},{\"internalType\":\"string[]\",\"name\":\"_candidatesNames\",\"type\":\"string[]\"}],\"name\":\"createElection\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"deleteAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"elections\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"creationDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"closingDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalVoters\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"isOpen\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"candidatesCount\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"electionsCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"endElection\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"getCandidate\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_noteId\",\"type\":\"uint256\"}],\"name\":\"getCandidateNote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getCandidatesCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionStatus\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionTitle\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionWinners\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getFirstRoundWinners\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"}],\"name\":\"getOneFirstRoundWinner\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"hasAlreadyVoted\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"incrementVoters\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"userAddress\",\"type\":\"address\"}],\"name\":\"isUserAdmin\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256[]\",\"name\":\"_notes\",\"type\":\"uint256[]\"}],\"name\":\"voteToElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"voteToElection(uint256,uint256[])\":{\"notice\":\"Gives one note to each candidates of the election\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Vote.sol\":\"Vote\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Candidate.sol\":{\"keccak256\":\"0x52d89b6f9a5d2c22104d8f090f446f41dc184f58ef0ea7d506d49a2d040ccd28\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://dea9346bfae0da013fd9b79345beeb639f75449ad46f6726053b04714887d118\",\"dweb:/ipfs/QmcbgNcwp1NG67WPRF12ugtpKYsf1HQcxWcHZ1aHZd55hU\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol\":{\"keccak256\":\"0x2543f5b375ccf859c893cf934b47a1adc76385e0414b386d5326f2095cdcbfa5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ec9e0e001fa346a82f6a7141ece6527f14a152d6d2b05f92e12fd4e48cd6d02a\",\"dweb:/ipfs/QmXdWYie9NXU6RPbkgG9ZkdLWRKXaMKj1DQuJAE34PkbNx\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol\":{\"keccak256\":\"0x1c22a34e1b4f8e666b38d8fc2ca03ef6a3e225dda62bcfbc19f66533fe1c63d3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b0742c707d0621e233d7ad804ad2a1b2bf5789746ecd1f139914c469b6f5cc8c\",\"dweb:/ipfs/QmSLYCzVjuJtJyrjjNCuyhzDApJTzdQizo9S82NkekTn8p\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Vote.sol\":{\"keccak256\":\"0xd58a75050ef0203e261ded70e465913f4ee51ebc59d555d27549bd1e49562e16\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a88c023683d296560444ef74d3698d935cd6b3d4120a94a4149e2e1ef1ab6dbd\",\"dweb:/ipfs/QmadKeeCR3kLyBnaZk1s1v1YhGrnq6SmBs4ZQfCB2BtY1V\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol\":{\"keccak256\":\"0x7f1004825e1cc40d7b663e20d3be71ed9c64baf7f05eae9b115a4d4448c8fdcf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5d8ccf5e65c162aeabb1b5e804f7183d95be7a985d5466796025a39ede9cfa62\",\"dweb:/ipfs/QmNZR6izJaw2bC9aCAcVbtS1kE9YBWuuqoaryy8idA14ta\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600560008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550612560806100d96000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80637fa67b1311610104578063be4d823e116100a2578063d8f7a0bb11610071578063d8f7a0bb1461059f578063e76f6b58146105bb578063f2fde38b146105eb578063fb5cbf4314610607576101cf565b8063be4d823e1461051b578063cd015c321461054b578063cd08bca014610567578063cd62d5dd14610583576101cf565b80639c98bcbb116100de5780639c98bcbb14610483578063a0b17848146104b3578063ab6cb049146104cf578063b12b1a7d146104eb576101cf565b80637fa67b13146104175780638da5cb5b146104475780639a74c69514610465576101cf565b80633ee95f00116101715780635e6fef011161014b5780635e6fef011461037a57806370480275146103af57806374d523a8146103cb5780637bb1541d146103fb576101cf565b80633ee95f00146102e85780634bd46448146103185780634d94fc6a1461034a576101cf565b806327e1f7df116101ad57806327e1f7df1461023c578063337fa14614610258578063349813b2146102885780633a0b35b7146102b8576101cf565b80631750a3d0146101d45780631aaa5246146101f057806324785b9e1461020c575b600080fd5b6101ee60048036038101906101e99190611e92565b610637565b005b61020a60048036038101906102059190611de8565b61069e565b005b61022660048036038101906102219190611de8565b6106c7565b60405161023391906121bf565b60405180910390f35b61025660048036038101906102519190611d2a565b6106f4565b005b610272600480360381019061026d9190611f22565b610873565b60405161027f9190612322565b60405180910390f35b6102a2600480360381019061029d9190611d7c565b6108ba565b6040516102af9190612322565b60405180910390f35b6102d260048036038101906102cd9190611f22565b610ab2565b6040516102df9190612322565b60405180910390f35b61030260048036038101906102fd9190611de8565b610b42565b60405161030f9190612322565b60405180910390f35b610332600480360381019061032d9190611ee6565b610b62565b604051610341939291906121fc565b60405180910390f35b610364600480360381019061035f9190611de8565b610c4a565b60405161037191906121da565b60405180910390f35b610394600480360381019061038f9190611de8565b610d02565b6040516103a69695949392919061223a565b60405180910390f35b6103c960048036038101906103c49190611d2a565b610de3565b005b6103e560048036038101906103e09190611d2a565b610ed3565b6040516103f291906121bf565b60405180910390f35b61041560048036038101906104109190611de8565b610f29565b005b610431600480360381019061042c9190611de8565b611095565b60405161043e91906121bf565b60405180910390f35b61044f6110ff565b60405161045c9190612182565b60405180910390f35b61046d611123565b60405161047a9190612322565b60405180910390f35b61049d60048036038101906104989190611de8565b611129565b6040516104aa919061219d565b60405180910390f35b6104cd60048036038101906104c89190611e3a565b61121a565b005b6104e960048036038101906104e49190611de8565b61139a565b005b61050560048036038101906105009190611de8565b6113d6565b604051610512919061219d565b60405180910390f35b61053560048036038101906105309190611de8565b611444565b604051610542919061219d565b60405180910390f35b61056560048036038101906105609190611de8565b6114f9565b005b610581600480360381019061057c9190611f22565b611661565b005b61059d60048036038101906105989190611ee6565b6116b1565b005b6105b960048036038101906105b49190611de8565b61189b565b005b6105d560048036038101906105d09190611ee6565b611913565b6040516105e29190612322565b60405180910390f35b61060560048036038101906106009190611d2a565b611949565b005b610621600480360381019061061c9190611de8565b611a98565b60405161062e919061219d565b60405180910390f35b806002600084815260200190815260200160002060060160006002600086815260200190815260200160002060050160008154809291906001019190505581526020019081526020016000206000019080519060200190610699929190611b06565b505050565b600260008281526020019081526020016000206003016000815480929190600101919050555050565b60006002600083815260200190815260200160002060040160009054906101000a900460ff169050919050565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610788576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077f906122c2565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610817576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080e90612302565b60405180910390fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600060026000858152602001908152602001600020600601600084815260200190815260200160002060010160008381526020019081526020016000205490509392505050565b60003360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610950576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610947906122c2565b60405180910390fd5b6000835190506001600081548092919060010191905055506000600260006001548152602001908152602001600020905085816000019080519060200190610999929190611b06565b504281600101819055506000816003018190555060018160040160006101000a81548160ff02191690831515021790555060005b82811015610a01576109f46001548783815181106109e757fe5b6020026020010151610637565b80806001019150506109cd565b503360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600154935050505092915050565b600080600260008681526020019081526020016000206006016000858152602001908152602001600020600101600084815260200190815260200160002054905060006064820290506000600260008881526020019081526020016000206003015490506000811415610b2b5760009350505050610b3b565b808281610b3457fe5b0493505050505b9392505050565b600060026000838152602001908152602001600020600501549050919050565b6060600080600060026000878152602001908152602001600020600601600086815260200190815260200160002090508060000181600201548260030154828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c355780601f10610c0a57610100808354040283529160200191610c35565b820191906000526020600020905b815481529060010190602001808311610c1857829003601f168201915b50505050509250935093509350509250925092565b6060600260008381526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610cf65780601f10610ccb57610100808354040283529160200191610cf6565b820191906000526020600020905b815481529060010190602001808311610cd957829003601f168201915b50505050509050919050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610dae5780601f10610d8357610100808354040283529160200191610dae565b820191906000526020600020905b815481529060010190602001808311610d9157829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154905086565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610e77576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6e906122c2565b60405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b6002600084815260200190815260200160002060080180549050811015611090576000600260008581526020019081526020016000206006016000600260008781526020019081526020016000206008018481548110610f8d57fe5b90600052602060002001548152602001908152602001600020600201549050600082141561101957809250600260008581526020019081526020016000206008018281548110610fd957fe5b90600052602060002001546002600086815260200190815260200160002060080160008154811061100657fe5b9060005260206000200181905550611082565b828111156110815780925060026000858152602001908152602001600020600801828154811061104557fe5b90600052602060002001546002600086815260200190815260200160002060080160008154811061107257fe5b90600052602060002001819055505b5b508080600101915050610f31565b505050565b60006002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b60603360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146111bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b6906122c2565b60405180910390fd5b60006002600085815260200190815260200160002060040160006101000a81548160ff02191690831515021790555042600260008581526020019081526020016000206002018190555061121283611444565b915050919050565b823073ffffffffffffffffffffffffffffffffffffffff16637fa67b13826040518263ffffffff1660e01b81526004016112549190612322565b60206040518083038186803b15801561126c57600080fd5b505afa158015611280573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112a49190611d53565b156112e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112db906122a2565b60405180910390fd5b8282905060026000868152602001908152602001600020600501541461133f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611336906122e2565b60405180910390fd5b60005b600260008681526020019081526020016000206005015481101561138a5761137d858286868581811061137157fe5b90506020020135611661565b8080600101915050611342565b506113948461189b565b50505050565b60005b60026000838152602001908152602001600020600501548110156113d2576113c582826116b1565b808060010191505061139d565b5050565b60606002600083815260200190815260200160002060080180548060200260200160405190810160405280929190818152602001828054801561143857602002820191906000526020600020905b815481526020019060010190808311611424575b50505050509050919050565b606061144f8261139a565b611458826114f9565b61146182610f29565b60016002600084815260200190815260200160002060080180549050111561148d5761148c82610f29565b5b600260008381526020019081526020016000206008018054806020026020016040519081016040528092919081815260200182805480156114ed57602002820191906000526020600020905b8154815260200190600101908083116114d9575b50505050509050919050565b6000805b600260008481526020019081526020016000206005015481101561165c576002600084815260200190815260200160002060060160008281526020019081526020016000206003015482141561158f576002600084815260200190815260200160002060080181908060018154018082558091505060019003906000526020600020016000909190919091505561164f565b6002600084815260200190815260200160002060060160008281526020019081526020016000206003015482101561164e576002600084815260200190815260200160002060080160006115e39190611b86565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301549150600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150555b5b80806001019150506114fd565b505050565b600260008481526020019081526020016000206006016000838152602001908152602001600020600101600082815260200190815260200160002060008154809291906001019190505550505050565b60006002600084815260200190815260200160002060030154141561170557600060026000848152602001908152602001600020600601600083815260200190815260200160002060030181905550611897565b6000600690505b60326002600085815260200190815260200160002060060160008481526020019081526020016000206002015411611895573073ffffffffffffffffffffffffffffffffffffffff16633a0b35b78484846040518463ffffffff1660e01b815260040161177b9392919061233d565b60206040518083038186803b15801561179357600080fd5b505afa1580156117a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117cb9190611e11565b600260008581526020019081526020016000206006016000848152602001908152602001600020600201540160026000858152602001908152602001600020600601600084815260200190815260200160002060020181905550603260026000858152602001908152602001600020600601600084815260200190815260200160002060020154106118875780600260008581526020019081526020016000206006016000848152602001908152602001600020600301819055505b80806001900391505061170c565b505b5050565b60016002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506119108161069e565b50565b600060026000848152602001908152602001600020600801828154811061193657fe5b9060005260206000200154905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146119a157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156119db57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b606060026000838152602001908152602001600020600801805480602002602001604051908101604052809291908181526020018280548015611afa57602002820191906000526020600020905b815481526020019060010190808311611ae6575b50505050509050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611b4757805160ff1916838001178555611b75565b82800160010185558215611b75579182015b82811115611b74578251825591602001919060010190611b59565b5b509050611b829190611ba7565b5090565b5080546000825590600052602060002090810190611ba49190611ba7565b50565b5b80821115611bc0576000816000905550600101611ba8565b5090565b600081359050611bd3816124e5565b92915050565b600082601f830112611bea57600080fd5b8135611bfd611bf8826123a1565b612374565b9150818183526020840193506020810190508360005b83811015611c435781358601611c298882611cac565b845260208401935060208301925050600181019050611c13565b5050505092915050565b60008083601f840112611c5f57600080fd5b8235905067ffffffffffffffff811115611c7857600080fd5b602083019150836020820283011115611c9057600080fd5b9250929050565b600081519050611ca6816124fc565b92915050565b600082601f830112611cbd57600080fd5b8135611cd0611ccb826123c9565b612374565b91508082526020830160208301858383011115611cec57600080fd5b611cf7838284612492565b50505092915050565b600081359050611d0f81612513565b92915050565b600081519050611d2481612513565b92915050565b600060208284031215611d3c57600080fd5b6000611d4a84828501611bc4565b91505092915050565b600060208284031215611d6557600080fd5b6000611d7384828501611c97565b91505092915050565b60008060408385031215611d8f57600080fd5b600083013567ffffffffffffffff811115611da957600080fd5b611db585828601611cac565b925050602083013567ffffffffffffffff811115611dd257600080fd5b611dde85828601611bd9565b9150509250929050565b600060208284031215611dfa57600080fd5b6000611e0884828501611d00565b91505092915050565b600060208284031215611e2357600080fd5b6000611e3184828501611d15565b91505092915050565b600080600060408486031215611e4f57600080fd5b6000611e5d86828701611d00565b935050602084013567ffffffffffffffff811115611e7a57600080fd5b611e8686828701611c4d565b92509250509250925092565b60008060408385031215611ea557600080fd5b6000611eb385828601611d00565b925050602083013567ffffffffffffffff811115611ed057600080fd5b611edc85828601611cac565b9150509250929050565b60008060408385031215611ef957600080fd5b6000611f0785828601611d00565b9250506020611f1885828601611d00565b9150509250929050565b600080600060608486031215611f3757600080fd5b6000611f4586828701611d00565b9350506020611f5686828701611d00565b9250506040611f6786828701611d00565b9150509250925092565b6000611f7d8383612164565b60208301905092915050565b611f928161244a565b82525050565b6000611fa382612405565b611fad8185612428565b9350611fb8836123f5565b8060005b83811015611fe9578151611fd08882611f71565b9750611fdb8361241b565b925050600181019050611fbc565b5085935050505092915050565b611fff8161245c565b82525050565b600061201082612410565b61201a8185612439565b935061202a8185602086016124a1565b612033816124d4565b840191505092915050565b600061204b601683612439565b91507f557365722068617320616c726561647920766f746564000000000000000000006000830152602082019050919050565b600061208b601483612439565b91507f596f7520617265206e6f7420616e2061646d696e0000000000000000000000006000830152602082019050919050565b60006120cb602783612439565b91507f4e6f742073616d6520616d6f756e74206f662063616e6469646174657320616e60008301527f6420766f746573000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612131601f83612439565b91507f43616e6e6f742072656d6f7665206f776e65722066726f6d2061646d696e73006000830152602082019050919050565b61216d81612488565b82525050565b61217c81612488565b82525050565b60006020820190506121976000830184611f89565b92915050565b600060208201905081810360008301526121b78184611f98565b905092915050565b60006020820190506121d46000830184611ff6565b92915050565b600060208201905081810360008301526121f48184612005565b905092915050565b600060608201905081810360008301526122168186612005565b90506122256020830185612173565b6122326040830184612173565b949350505050565b600060c08201905081810360008301526122548189612005565b90506122636020830188612173565b6122706040830187612173565b61227d6060830186612173565b61228a6080830185611ff6565b61229760a0830184612173565b979650505050505050565b600060208201905081810360008301526122bb8161203e565b9050919050565b600060208201905081810360008301526122db8161207e565b9050919050565b600060208201905081810360008301526122fb816120be565b9050919050565b6000602082019050818103600083015261231b81612124565b9050919050565b60006020820190506123376000830184612173565b92915050565b60006060820190506123526000830186612173565b61235f6020830185612173565b61236c6040830184612173565b949350505050565b6000604051905081810181811067ffffffffffffffff8211171561239757600080fd5b8060405250919050565b600067ffffffffffffffff8211156123b857600080fd5b602082029050602081019050919050565b600067ffffffffffffffff8211156123e057600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600061245582612468565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156124bf5780820151818401526020810190506124a4565b838111156124ce576000848401525b50505050565b6000601f19601f8301169050919050565b6124ee8161244a565b81146124f957600080fd5b50565b6125058161245c565b811461251057600080fd5b50565b61251c81612488565b811461252757600080fd5b5056fea26469706673582212207bdb6121201663213c826131f332e065b5ad188befbebf1064a625c33853332464736f6c63430007000033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101cf5760003560e01c80637fa67b1311610104578063be4d823e116100a2578063d8f7a0bb11610071578063d8f7a0bb1461059f578063e76f6b58146105bb578063f2fde38b146105eb578063fb5cbf4314610607576101cf565b8063be4d823e1461051b578063cd015c321461054b578063cd08bca014610567578063cd62d5dd14610583576101cf565b80639c98bcbb116100de5780639c98bcbb14610483578063a0b17848146104b3578063ab6cb049146104cf578063b12b1a7d146104eb576101cf565b80637fa67b13146104175780638da5cb5b146104475780639a74c69514610465576101cf565b80633ee95f00116101715780635e6fef011161014b5780635e6fef011461037a57806370480275146103af57806374d523a8146103cb5780637bb1541d146103fb576101cf565b80633ee95f00146102e85780634bd46448146103185780634d94fc6a1461034a576101cf565b806327e1f7df116101ad57806327e1f7df1461023c578063337fa14614610258578063349813b2146102885780633a0b35b7146102b8576101cf565b80631750a3d0146101d45780631aaa5246146101f057806324785b9e1461020c575b600080fd5b6101ee60048036038101906101e99190611e92565b610637565b005b61020a60048036038101906102059190611de8565b61069e565b005b61022660048036038101906102219190611de8565b6106c7565b60405161023391906121bf565b60405180910390f35b61025660048036038101906102519190611d2a565b6106f4565b005b610272600480360381019061026d9190611f22565b610873565b60405161027f9190612322565b60405180910390f35b6102a2600480360381019061029d9190611d7c565b6108ba565b6040516102af9190612322565b60405180910390f35b6102d260048036038101906102cd9190611f22565b610ab2565b6040516102df9190612322565b60405180910390f35b61030260048036038101906102fd9190611de8565b610b42565b60405161030f9190612322565b60405180910390f35b610332600480360381019061032d9190611ee6565b610b62565b604051610341939291906121fc565b60405180910390f35b610364600480360381019061035f9190611de8565b610c4a565b60405161037191906121da565b60405180910390f35b610394600480360381019061038f9190611de8565b610d02565b6040516103a69695949392919061223a565b60405180910390f35b6103c960048036038101906103c49190611d2a565b610de3565b005b6103e560048036038101906103e09190611d2a565b610ed3565b6040516103f291906121bf565b60405180910390f35b61041560048036038101906104109190611de8565b610f29565b005b610431600480360381019061042c9190611de8565b611095565b60405161043e91906121bf565b60405180910390f35b61044f6110ff565b60405161045c9190612182565b60405180910390f35b61046d611123565b60405161047a9190612322565b60405180910390f35b61049d60048036038101906104989190611de8565b611129565b6040516104aa919061219d565b60405180910390f35b6104cd60048036038101906104c89190611e3a565b61121a565b005b6104e960048036038101906104e49190611de8565b61139a565b005b61050560048036038101906105009190611de8565b6113d6565b604051610512919061219d565b60405180910390f35b61053560048036038101906105309190611de8565b611444565b604051610542919061219d565b60405180910390f35b61056560048036038101906105609190611de8565b6114f9565b005b610581600480360381019061057c9190611f22565b611661565b005b61059d60048036038101906105989190611ee6565b6116b1565b005b6105b960048036038101906105b49190611de8565b61189b565b005b6105d560048036038101906105d09190611ee6565b611913565b6040516105e29190612322565b60405180910390f35b61060560048036038101906106009190611d2a565b611949565b005b610621600480360381019061061c9190611de8565b611a98565b60405161062e919061219d565b60405180910390f35b806002600084815260200190815260200160002060060160006002600086815260200190815260200160002060050160008154809291906001019190505581526020019081526020016000206000019080519060200190610699929190611b06565b505050565b600260008281526020019081526020016000206003016000815480929190600101919050555050565b60006002600083815260200190815260200160002060040160009054906101000a900460ff169050919050565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610788576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077f906122c2565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610817576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080e90612302565b60405180910390fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600060026000858152602001908152602001600020600601600084815260200190815260200160002060010160008381526020019081526020016000205490509392505050565b60003360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610950576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610947906122c2565b60405180910390fd5b6000835190506001600081548092919060010191905055506000600260006001548152602001908152602001600020905085816000019080519060200190610999929190611b06565b504281600101819055506000816003018190555060018160040160006101000a81548160ff02191690831515021790555060005b82811015610a01576109f46001548783815181106109e757fe5b6020026020010151610637565b80806001019150506109cd565b503360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600154935050505092915050565b600080600260008681526020019081526020016000206006016000858152602001908152602001600020600101600084815260200190815260200160002054905060006064820290506000600260008881526020019081526020016000206003015490506000811415610b2b5760009350505050610b3b565b808281610b3457fe5b0493505050505b9392505050565b600060026000838152602001908152602001600020600501549050919050565b6060600080600060026000878152602001908152602001600020600601600086815260200190815260200160002090508060000181600201548260030154828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c355780601f10610c0a57610100808354040283529160200191610c35565b820191906000526020600020905b815481529060010190602001808311610c1857829003601f168201915b50505050509250935093509350509250925092565b6060600260008381526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610cf65780601f10610ccb57610100808354040283529160200191610cf6565b820191906000526020600020905b815481529060010190602001808311610cd957829003601f168201915b50505050509050919050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610dae5780601f10610d8357610100808354040283529160200191610dae565b820191906000526020600020905b815481529060010190602001808311610d9157829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154905086565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610e77576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6e906122c2565b60405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b6002600084815260200190815260200160002060080180549050811015611090576000600260008581526020019081526020016000206006016000600260008781526020019081526020016000206008018481548110610f8d57fe5b90600052602060002001548152602001908152602001600020600201549050600082141561101957809250600260008581526020019081526020016000206008018281548110610fd957fe5b90600052602060002001546002600086815260200190815260200160002060080160008154811061100657fe5b9060005260206000200181905550611082565b828111156110815780925060026000858152602001908152602001600020600801828154811061104557fe5b90600052602060002001546002600086815260200190815260200160002060080160008154811061107257fe5b90600052602060002001819055505b5b508080600101915050610f31565b505050565b60006002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b60603360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146111bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b6906122c2565b60405180910390fd5b60006002600085815260200190815260200160002060040160006101000a81548160ff02191690831515021790555042600260008581526020019081526020016000206002018190555061121283611444565b915050919050565b823073ffffffffffffffffffffffffffffffffffffffff16637fa67b13826040518263ffffffff1660e01b81526004016112549190612322565b60206040518083038186803b15801561126c57600080fd5b505afa158015611280573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112a49190611d53565b156112e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112db906122a2565b60405180910390fd5b8282905060026000868152602001908152602001600020600501541461133f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611336906122e2565b60405180910390fd5b60005b600260008681526020019081526020016000206005015481101561138a5761137d858286868581811061137157fe5b90506020020135611661565b8080600101915050611342565b506113948461189b565b50505050565b60005b60026000838152602001908152602001600020600501548110156113d2576113c582826116b1565b808060010191505061139d565b5050565b60606002600083815260200190815260200160002060080180548060200260200160405190810160405280929190818152602001828054801561143857602002820191906000526020600020905b815481526020019060010190808311611424575b50505050509050919050565b606061144f8261139a565b611458826114f9565b61146182610f29565b60016002600084815260200190815260200160002060080180549050111561148d5761148c82610f29565b5b600260008381526020019081526020016000206008018054806020026020016040519081016040528092919081815260200182805480156114ed57602002820191906000526020600020905b8154815260200190600101908083116114d9575b50505050509050919050565b6000805b600260008481526020019081526020016000206005015481101561165c576002600084815260200190815260200160002060060160008281526020019081526020016000206003015482141561158f576002600084815260200190815260200160002060080181908060018154018082558091505060019003906000526020600020016000909190919091505561164f565b6002600084815260200190815260200160002060060160008281526020019081526020016000206003015482101561164e576002600084815260200190815260200160002060080160006115e39190611b86565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301549150600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150555b5b80806001019150506114fd565b505050565b600260008481526020019081526020016000206006016000838152602001908152602001600020600101600082815260200190815260200160002060008154809291906001019190505550505050565b60006002600084815260200190815260200160002060030154141561170557600060026000848152602001908152602001600020600601600083815260200190815260200160002060030181905550611897565b6000600690505b60326002600085815260200190815260200160002060060160008481526020019081526020016000206002015411611895573073ffffffffffffffffffffffffffffffffffffffff16633a0b35b78484846040518463ffffffff1660e01b815260040161177b9392919061233d565b60206040518083038186803b15801561179357600080fd5b505afa1580156117a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117cb9190611e11565b600260008581526020019081526020016000206006016000848152602001908152602001600020600201540160026000858152602001908152602001600020600601600084815260200190815260200160002060020181905550603260026000858152602001908152602001600020600601600084815260200190815260200160002060020154106118875780600260008581526020019081526020016000206006016000848152602001908152602001600020600301819055505b80806001900391505061170c565b505b5050565b60016002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506119108161069e565b50565b600060026000848152602001908152602001600020600801828154811061193657fe5b9060005260206000200154905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146119a157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156119db57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b606060026000838152602001908152602001600020600801805480602002602001604051908101604052809291908181526020018280548015611afa57602002820191906000526020600020905b815481526020019060010190808311611ae6575b50505050509050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611b4757805160ff1916838001178555611b75565b82800160010185558215611b75579182015b82811115611b74578251825591602001919060010190611b59565b5b509050611b829190611ba7565b5090565b5080546000825590600052602060002090810190611ba49190611ba7565b50565b5b80821115611bc0576000816000905550600101611ba8565b5090565b600081359050611bd3816124e5565b92915050565b600082601f830112611bea57600080fd5b8135611bfd611bf8826123a1565b612374565b9150818183526020840193506020810190508360005b83811015611c435781358601611c298882611cac565b845260208401935060208301925050600181019050611c13565b5050505092915050565b60008083601f840112611c5f57600080fd5b8235905067ffffffffffffffff811115611c7857600080fd5b602083019150836020820283011115611c9057600080fd5b9250929050565b600081519050611ca6816124fc565b92915050565b600082601f830112611cbd57600080fd5b8135611cd0611ccb826123c9565b612374565b91508082526020830160208301858383011115611cec57600080fd5b611cf7838284612492565b50505092915050565b600081359050611d0f81612513565b92915050565b600081519050611d2481612513565b92915050565b600060208284031215611d3c57600080fd5b6000611d4a84828501611bc4565b91505092915050565b600060208284031215611d6557600080fd5b6000611d7384828501611c97565b91505092915050565b60008060408385031215611d8f57600080fd5b600083013567ffffffffffffffff811115611da957600080fd5b611db585828601611cac565b925050602083013567ffffffffffffffff811115611dd257600080fd5b611dde85828601611bd9565b9150509250929050565b600060208284031215611dfa57600080fd5b6000611e0884828501611d00565b91505092915050565b600060208284031215611e2357600080fd5b6000611e3184828501611d15565b91505092915050565b600080600060408486031215611e4f57600080fd5b6000611e5d86828701611d00565b935050602084013567ffffffffffffffff811115611e7a57600080fd5b611e8686828701611c4d565b92509250509250925092565b60008060408385031215611ea557600080fd5b6000611eb385828601611d00565b925050602083013567ffffffffffffffff811115611ed057600080fd5b611edc85828601611cac565b9150509250929050565b60008060408385031215611ef957600080fd5b6000611f0785828601611d00565b9250506020611f1885828601611d00565b9150509250929050565b600080600060608486031215611f3757600080fd5b6000611f4586828701611d00565b9350506020611f5686828701611d00565b9250506040611f6786828701611d00565b9150509250925092565b6000611f7d8383612164565b60208301905092915050565b611f928161244a565b82525050565b6000611fa382612405565b611fad8185612428565b9350611fb8836123f5565b8060005b83811015611fe9578151611fd08882611f71565b9750611fdb8361241b565b925050600181019050611fbc565b5085935050505092915050565b611fff8161245c565b82525050565b600061201082612410565b61201a8185612439565b935061202a8185602086016124a1565b612033816124d4565b840191505092915050565b600061204b601683612439565b91507f557365722068617320616c726561647920766f746564000000000000000000006000830152602082019050919050565b600061208b601483612439565b91507f596f7520617265206e6f7420616e2061646d696e0000000000000000000000006000830152602082019050919050565b60006120cb602783612439565b91507f4e6f742073616d6520616d6f756e74206f662063616e6469646174657320616e60008301527f6420766f746573000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612131601f83612439565b91507f43616e6e6f742072656d6f7665206f776e65722066726f6d2061646d696e73006000830152602082019050919050565b61216d81612488565b82525050565b61217c81612488565b82525050565b60006020820190506121976000830184611f89565b92915050565b600060208201905081810360008301526121b78184611f98565b905092915050565b60006020820190506121d46000830184611ff6565b92915050565b600060208201905081810360008301526121f48184612005565b905092915050565b600060608201905081810360008301526122168186612005565b90506122256020830185612173565b6122326040830184612173565b949350505050565b600060c08201905081810360008301526122548189612005565b90506122636020830188612173565b6122706040830187612173565b61227d6060830186612173565b61228a6080830185611ff6565b61229760a0830184612173565b979650505050505050565b600060208201905081810360008301526122bb8161203e565b9050919050565b600060208201905081810360008301526122db8161207e565b9050919050565b600060208201905081810360008301526122fb816120be565b9050919050565b6000602082019050818103600083015261231b81612124565b9050919050565b60006020820190506123376000830184612173565b92915050565b60006060820190506123526000830186612173565b61235f6020830185612173565b61236c6040830184612173565b949350505050565b6000604051905081810181811067ffffffffffffffff8211171561239757600080fd5b8060405250919050565b600067ffffffffffffffff8211156123b857600080fd5b602082029050602081019050919050565b600067ffffffffffffffff8211156123e057600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600061245582612468565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156124bf5780820151818401526020810190506124a4565b838111156124ce576000848401525b50505050565b6000601f19601f8301169050919050565b6124ee8161244a565b81146124f957600080fd5b50565b6125058161245c565b811461251057600080fd5b50565b61251c81612488565b811461252757600080fd5b5056fea26469706673582212207bdb6121201663213c826131f332e065b5ad188befbebf1064a625c33853332464736f6c63430007000033",
  "immutableReferences": {},
  "sourceMap": "160:799:4:-:0;;;;;;;;;;;;;552:10:5;544:5;;:18;;;;;;;;;;;;;;;;;;212:4:1;193:9;:16;203:5;;;;;;;;;;;193:16;;;;;;;;;;;;;;;;:23;;;;;;;;;;;;;;;;;;160:799:4;;;;;;",
  "deployedSourceMap": "160:799:4:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2149:191:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;342:104:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;784:125:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1145:193:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;879:190:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1465:678:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1075:406:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;736:137;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;452:278;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;646:132:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;696:43:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;:::i;:::-;;;;;;;;1023:116;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1344:115;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2677:664:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;352:137:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;279:20:5;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;664:26:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;245:251:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;568:388:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1845:203:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1223:136;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1365:474;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2054:617;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;179:157:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1487:738;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;915:146:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1067:150;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;907:188:5;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;502:138:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2149:191:1;2319:14;2236:9;:22;2246:11;2236:22;;;;;;;;;;;:33;;:75;2270:9;:22;2280:11;2270:22;;;;;;;;;;;:38;;;:40;;;;;;;;;;;;2236:75;;;;;;;;;;;:80;;:97;;;;;;;;;;;;:::i;:::-;;2149:191;;:::o;342:104:0:-;402:9;:22;412:11;402:22;;;;;;;;;;;:34;;;:37;;;;;;;;;;;;;342:104;:::o;784:125:2:-;850:4;873:9;:22;883:11;873:22;;;;;;;;;;;:29;;;;;;;;;;;;866:36;;784:125;;;:::o;1145:193:1:-;1205:10;970:4;943:31;;:9;:23;953:12;943:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;934:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1249:5:::1;::::0;::::1;;;;;;;;1235:19;;:10;:19;;;;1227:63;;;;;;;;;;;;:::i;:::-;;;;;;;;;1326:5;1300:9;:23;1310:12;1300:23;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;;;;;;;1145:193:::0;;:::o;879:190:0:-;977:4;1000:9;:22;1010:11;1000:22;;;;;;;;;;;:33;;:47;1034:12;1000:47;;;;;;;;;;;:53;;:62;1054:7;1000:62;;;;;;;;;;;;993:69;;879:190;;;;;:::o;1465:678:1:-;1583:4;1562:10;970:4;943:31;;:9;:23;953:12;943:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;934:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1599:17:::1;1619:16;:23;1599:43;;1652:14;;:16;;;;;;;;;;;;;1678:25;1706:9;:25;1716:14;;1706:25;;;;;;;;;;;1678:53;;1758:6;1741:8;:14;;:23;;;;;;;;;;;;:::i;:::-;;1798:15;1774:8;:21;;:39;;;;1846:1;1823:8;:20;;:24;;;;1875:4;1857:8;:15;;;:22;;;;;;;;;;;;;;;;;;1895:6;1890:114;1911:12;1907:1;:16;1890:114;;;1944:49;1957:14;;1973:16;1990:1;1973:19;;;;;;;;;;;;;;1944:12;:49::i;:::-;1925:3;;;;;;;1890:114;;;;2048:10;2014:15;:31;2030:14;;2014:31;;;;;;;;;;;;:44;;;;;;;;;;;;;;;;;;2103:1;2069:18;:30;2088:10;2069:30;;;;;;;;;;;;;;;;:35;;;;;;;;;;;2122:14;;2115:21;;;;1465:678:::0;;;;;:::o;1075:406:0:-;1181:4;1196:9;1208;:22;1218:11;1208:22;;;;;;;;;;;:33;;:47;1242:12;1208:47;;;;;;;;;;;:53;;:60;1262:5;1208:60;;;;;;;;;;;;1196:72;;1278:15;1303:3;1296:4;:10;1278:28;;1316:16;1335:9;:22;1345:11;1335:22;;;;;;;;;;;:34;;;1316:53;;1398:1;1383:11;:16;1379:55;;;1422:1;1415:8;;;;;;;1379:55;1463:11;1450:10;:24;;;;;;1443:31;;;;;1075:406;;;;;;:::o;736:137::-;805:4;828:9;:22;838:11;828:22;;;;;;;;;;;:38;;;821:45;;736:137;;;:::o;452:278::-;534:13;549:4;555;571:27;601:9;:22;611:11;601:22;;;;;;;;;;;:33;;:47;635:12;601:47;;;;;;;;;;;571:77;;666:9;:14;;682:9;:17;;;701:9;:21;;;658:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;452:278;;;;;:::o;646:132:2:-;711:13;743:9;:22;753:11;743:22;;;;;;;;;;;:28;;736:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;646:132;;;:::o;696:43:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1023:116::-;1080:10;970:4;943:31;;:9;:23;953:12;943:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;934:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1128:4:::1;1102:9;:23;1112:12;1102:23;;;;;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;1023:116:::0;;:::o;1344:115::-;1408:4;1430:9;:22;1440:11;1430:22;;;;;;;;;;;;;;;;;;;;;;;;;1423:29;;1344:115;;;:::o;2677:664:2:-;2745:18;2777:6;2786:1;2777:10;;2773:562;2793:9;:22;2803:11;2793:22;;;;;;;;;;;:30;;:37;;;;2789:1;:41;2773:562;;;2850:19;2872:9;:22;2882:11;2872:22;;;;;;;;;;;:33;;:68;2906:9;:22;2916:11;2906:22;;;;;;;;;;;:30;;2937:1;2906:33;;;;;;;;;;;;;;;;2872:68;;;;;;;;;;;:76;;;2850:98;;2970:1;2965;:6;2962:363;;;3006:14;2990:30;;3074:9;:22;3084:11;3074:22;;;;;;;;;;;:30;;3105:1;3074:33;;;;;;;;;;;;;;;;3038:9;:22;3048:11;3038:22;;;;;;;;;;;:30;;3069:1;3038:33;;;;;;;;;;;;;;;:69;;;;2962:363;;;3161:13;3144:14;:30;3140:185;;;3209:14;3193:30;;3277:9;:22;3287:11;3277:22;;;;;;;;;;;:30;;3308:1;3277:33;;;;;;;;;;;;;;;;3241:9;:22;3251:11;3241:22;;;;;;;;;;;:30;;3272:1;3241:33;;;;;;;;;;;;;;;:69;;;;3140:185;2962:363;2773:562;2832:3;;;;;;;2773:562;;;;2677:664;;:::o;352:137:4:-;418:4;441:9;:22;451:11;441:22;;;;;;;;;;;:29;;:41;471:10;441:41;;;;;;;;;;;;;;;;;;;;;;;;;434:48;;352:137;;;:::o;279:20:5:-;;;;;;;;;;;;:::o;664:26:1:-;;;;:::o;245:251:2:-;322:13;301:10;970:4:1;943:31;;:9;:23;953:12;943:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;934:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;379:5:2::1;347:9;:22;357:11;347:22;;;;;;;;;;;:29;;;:37;;;;;;;;;;;;;;;;;;431:15;394:9;:22;404:11;394:22;;;;;;;;;;;:34;;:52;;;;463:26;477:11;463:13;:26::i;:::-;456:33;;245:251:::0;;;;:::o;568:388:4:-;655:11;268:4;:20;;;289:11;268:33;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;267:34;258:70;;;;;;;;;;;;:::i;:::-;;;;;;;;;728:6:::1;;:13;;686:9;:22;696:11;686:22;;;;;;;;;;;:38;;;:55;678:107;;;;;;;;;;;;:::i;:::-;;;;;;;;;800:6;795:124;816:9;:22;826:11;816:22;;;;;;;;;;;:38;;;812:1;:42;795:124;;;874:34;882:11;895:1;898:6;;905:1;898:9;;;;;;;;;;;;;874:7;:34::i;:::-;856:3;;;;;;;795:124;;;;928:21;937:11;928:8;:21::i;:::-;568:388:::0;;;;:::o;1845:203:2:-;1923:6;1918:124;1939:9;:22;1949:11;1939:22;;;;;;;;;;;:38;;;1935:1;:42;1918:124;;;1997:34;2016:11;2029:1;1997:18;:34::i;:::-;1979:3;;;;;;;1918:124;;;;1845:203;:::o;1223:136::-;1291:13;1322:9;:22;1332:11;1322:22;;;;;;;;;;;:30;;1315:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1223:136;;;:::o;1365:474::-;1422:13;1447:41;1476:11;1447:28;:41::i;:::-;1499:37;1524:11;1499:24;:37::i;:::-;1547:36;1571:11;1547:23;:36::i;:::-;1636:1;1596:9;:22;1606:11;1596:22;;;;;;;;;;;:30;;:37;;;;:41;1593:143;;;1689:36;1713:11;1689:23;:36::i;:::-;1593:143;1752:9;:22;1762:11;1752:22;;;;;;;;;;;:30;;1745:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1365:474;;;:::o;2054:617::-;2123:15;2156:6;2152:513;2172:9;:22;2182:11;2172:22;;;;;;;;;;;:38;;;2168:1;:42;2152:513;;;2247:9;:22;2257:11;2247:22;;;;;;;;;;;:33;;:36;2281:1;2247:36;;;;;;;;;;;:48;;;2233:10;:62;2230:425;;;2314:9;:22;2324:11;2314:22;;;;;;;;;;;:30;;2350:1;2314:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2230:425;;;2401:9;:22;2411:11;2401:22;;;;;;;;;;;:33;;:36;2435:1;2401:36;;;;;;;;;;;:48;;;2388:10;:61;2385:270;;;2475:9;:22;2485:11;2475:22;;;;;;;;;;;:30;;;2468:37;;;;:::i;:::-;2536:9;:22;2546:11;2536:22;;;;;;;;;;;:33;;:36;2570:1;2536:36;;;;;;;;;;;:48;;;2523:61;;2602:9;:22;2612:11;2602:22;;;;;;;;;;;:30;;2638:1;2602:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2385:270;2230:425;2212:3;;;;;;;2152:513;;;;2054:617;;:::o;179:157:0:-;264:9;:22;274:11;264:22;;;;;;;;;;;:33;;:47;298:12;264:47;;;;;;;;;;;:53;;:62;318:7;264:62;;;;;;;;;;;;:65;;;;;;;;;;;;;179:157;;;:::o;1487:738::-;1611:1;1573:9;:22;1583:11;1573:22;;;;;;;;;;;:34;;;:39;1569:650;;;1690:1;1628:9;:22;1638:11;1628:22;;;;;;;;;;;:33;;:47;1662:12;1628:47;;;;;;;;;;;:59;;:63;;;;1569:650;;;1735:6;1744:1;1735:10;;1730:479;1806:2;1747:9;:22;1757:11;1747:22;;;;;;;;;;;:33;;:47;1781:12;1747:47;;;;;;;;;;;:55;;;:61;1730:479;;1948:4;:30;;;1979:11;1992:12;2006:1;1948:60;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1890:9;:22;1900:11;1890:22;;;;;;;;;;;:33;;:47;1924:12;1890:47;;;;;;;;;;;:55;;;:118;1832:9;:22;1842:11;1832:22;;;;;;;;;;;:33;;:47;1866:12;1832:47;;;;;;;;;;;:55;;:176;;;;2088:2;2029:9;:22;2039:11;2029:22;;;;;;;;;;;:33;;:47;2063:12;2029:47;;;;;;;;;;;:55;;;:61;2026:169;;2175:1;2113:9;:22;2123:11;2113:22;;;;;;;;;;;:33;;:47;2147:12;2113:47;;;;;;;;;;;:59;;:63;;;;2026:169;1810:3;;;;;;;;1730:479;;;;1569:650;1487:738;;:::o;915:146:2:-;1012:4;968:9;:22;978:11;968:22;;;;;;;;;;;:29;;:41;998:10;968:41;;;;;;;;;;;;;;;;:48;;;;;;;;;;;;;;;;;;1026:28;1042:11;1026:15;:28::i;:::-;915:146;:::o;1067:150::-;1150:4;1172:9;:22;1182:11;1172:22;;;;;;;;;;;:30;;1203:6;1172:38;;;;;;;;;;;;;;;;1165:45;;1067:150;;;;:::o;907:188:5:-;711:5;;;;;;;;;;697:19;;:10;:19;;;689:28;;;;;;1007:1:::1;987:22;;:8;:22;;;;979:31;;;::::0;::::1;;1053:8;1025:37;;1046:5;::::0;::::1;;;;;;;;1025:37;;;;;;;;;;;;1080:8;1072:5;::::0;:16:::1;;;;;;;;;;;;;;;;;;907:188:::0;:::o;502:138:2:-;571:13;603:9;:22;613:11;603:22;;;;;;;;;;;:30;;596:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;502:138;;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;5:130::-;;85:6;72:20;63:29;;97:33;124:5;97:33;:::i;:::-;57:78;;;;:::o;159:708::-;;286:3;279:4;271:6;267:17;263:27;253:2;;304:1;301;294:12;253:2;341:6;328:20;363:90;378:74;445:6;378:74;:::i;:::-;363:90;:::i;:::-;354:99;;470:5;495:6;488:5;481:21;525:4;517:6;513:17;503:27;;547:4;542:3;538:14;531:21;;600:6;633:1;618:243;643:6;640:1;637:13;618:243;;;726:3;713:17;705:6;701:30;750:47;793:3;781:10;750:47;:::i;:::-;745:3;738:60;821:4;816:3;812:14;805:21;;849:4;844:3;840:14;833:21;;675:186;665:1;662;658:9;653:14;;618:243;;;622:14;246:621;;;;;;;:::o;893:352::-;;;1023:3;1016:4;1008:6;1004:17;1000:27;990:2;;1041:1;1038;1031:12;990:2;1074:6;1061:20;1051:30;;1101:18;1093:6;1090:30;1087:2;;;1133:1;1130;1123:12;1087:2;1167:4;1159:6;1155:17;1143:29;;1218:3;1210:4;1202:6;1198:17;1188:8;1184:32;1181:41;1178:2;;;1235:1;1232;1225:12;1178:2;983:262;;;;;:::o;1253:128::-;;1334:6;1328:13;1319:22;;1346:30;1370:5;1346:30;:::i;:::-;1313:68;;;;:::o;1389:442::-;;1491:3;1484:4;1476:6;1472:17;1468:27;1458:2;;1509:1;1506;1499:12;1458:2;1546:6;1533:20;1568:65;1583:49;1625:6;1583:49;:::i;:::-;1568:65;:::i;:::-;1559:74;;1653:6;1646:5;1639:21;1689:4;1681:6;1677:17;1722:4;1715:5;1711:16;1757:3;1748:6;1743:3;1739:16;1736:25;1733:2;;;1774:1;1771;1764:12;1733:2;1784:41;1818:6;1813:3;1808;1784:41;:::i;:::-;1451:380;;;;;;;:::o;1839:130::-;;1919:6;1906:20;1897:29;;1931:33;1958:5;1931:33;:::i;:::-;1891:78;;;;:::o;1976:134::-;;2060:6;2054:13;2045:22;;2072:33;2099:5;2072:33;:::i;:::-;2039:71;;;;:::o;2117:241::-;;2221:2;2209:9;2200:7;2196:23;2192:32;2189:2;;;2237:1;2234;2227:12;2189:2;2272:1;2289:53;2334:7;2325:6;2314:9;2310:22;2289:53;:::i;:::-;2279:63;;2251:97;2183:175;;;;:::o;2365:257::-;;2477:2;2465:9;2456:7;2452:23;2448:32;2445:2;;;2493:1;2490;2483:12;2445:2;2528:1;2545:61;2598:7;2589:6;2578:9;2574:22;2545:61;:::i;:::-;2535:71;;2507:105;2439:183;;;;:::o;2629:628::-;;;2795:2;2783:9;2774:7;2770:23;2766:32;2763:2;;;2811:1;2808;2801:12;2763:2;2874:1;2863:9;2859:17;2846:31;2897:18;2889:6;2886:30;2883:2;;;2929:1;2926;2919:12;2883:2;2949:63;3004:7;2995:6;2984:9;2980:22;2949:63;:::i;:::-;2939:73;;2825:193;3077:2;3066:9;3062:18;3049:32;3101:18;3093:6;3090:30;3087:2;;;3133:1;3130;3123:12;3087:2;3153:88;3233:7;3224:6;3213:9;3209:22;3153:88;:::i;:::-;3143:98;;3028:219;2757:500;;;;;:::o;3264:241::-;;3368:2;3356:9;3347:7;3343:23;3339:32;3336:2;;;3384:1;3381;3374:12;3336:2;3419:1;3436:53;3481:7;3472:6;3461:9;3457:22;3436:53;:::i;:::-;3426:63;;3398:97;3330:175;;;;:::o;3512:263::-;;3627:2;3615:9;3606:7;3602:23;3598:32;3595:2;;;3643:1;3640;3633:12;3595:2;3678:1;3695:64;3751:7;3742:6;3731:9;3727:22;3695:64;:::i;:::-;3685:74;;3657:108;3589:186;;;;:::o;3782:522::-;;;;3938:2;3926:9;3917:7;3913:23;3909:32;3906:2;;;3954:1;3951;3944:12;3906:2;3989:1;4006:53;4051:7;4042:6;4031:9;4027:22;4006:53;:::i;:::-;3996:63;;3968:97;4124:2;4113:9;4109:18;4096:32;4148:18;4140:6;4137:30;4134:2;;;4180:1;4177;4170:12;4134:2;4208:80;4280:7;4271:6;4260:9;4256:22;4208:80;:::i;:::-;4190:98;;;;4075:219;3900:404;;;;;:::o;4311:472::-;;;4442:2;4430:9;4421:7;4417:23;4413:32;4410:2;;;4458:1;4455;4448:12;4410:2;4493:1;4510:53;4555:7;4546:6;4535:9;4531:22;4510:53;:::i;:::-;4500:63;;4472:97;4628:2;4617:9;4613:18;4600:32;4652:18;4644:6;4641:30;4638:2;;;4684:1;4681;4674:12;4638:2;4704:63;4759:7;4750:6;4739:9;4735:22;4704:63;:::i;:::-;4694:73;;4579:194;4404:379;;;;;:::o;4790:366::-;;;4911:2;4899:9;4890:7;4886:23;4882:32;4879:2;;;4927:1;4924;4917:12;4879:2;4962:1;4979:53;5024:7;5015:6;5004:9;5000:22;4979:53;:::i;:::-;4969:63;;4941:97;5069:2;5087:53;5132:7;5123:6;5112:9;5108:22;5087:53;:::i;:::-;5077:63;;5048:98;4873:283;;;;;:::o;5163:491::-;;;;5301:2;5289:9;5280:7;5276:23;5272:32;5269:2;;;5317:1;5314;5307:12;5269:2;5352:1;5369:53;5414:7;5405:6;5394:9;5390:22;5369:53;:::i;:::-;5359:63;;5331:97;5459:2;5477:53;5522:7;5513:6;5502:9;5498:22;5477:53;:::i;:::-;5467:63;;5438:98;5567:2;5585:53;5630:7;5621:6;5610:9;5606:22;5585:53;:::i;:::-;5575:63;;5546:98;5263:391;;;;;:::o;5662:173::-;;5749:46;5791:3;5783:6;5749:46;:::i;:::-;5824:4;5819:3;5815:14;5801:28;;5742:93;;;;:::o;5843:113::-;5926:24;5944:5;5926:24;:::i;:::-;5921:3;5914:37;5908:48;;:::o;5994:690::-;;6139:54;6187:5;6139:54;:::i;:::-;6206:86;6285:6;6280:3;6206:86;:::i;:::-;6199:93;;6313:56;6363:5;6313:56;:::i;:::-;6389:7;6417:1;6402:260;6427:6;6424:1;6421:13;6402:260;;;6494:6;6488:13;6515:63;6574:3;6559:13;6515:63;:::i;:::-;6508:70;;6595:60;6648:6;6595:60;:::i;:::-;6585:70;;6459:203;6449:1;6446;6442:9;6437:14;;6402:260;;;6406:14;6675:3;6668:10;;6118:566;;;;;;;:::o;6692:104::-;6769:21;6784:5;6769:21;:::i;:::-;6764:3;6757:34;6751:45;;:::o;6803:347::-;;6915:39;6948:5;6915:39;:::i;:::-;6966:71;7030:6;7025:3;6966:71;:::i;:::-;6959:78;;7042:52;7087:6;7082:3;7075:4;7068:5;7064:16;7042:52;:::i;:::-;7115:29;7137:6;7115:29;:::i;:::-;7110:3;7106:39;7099:46;;6895:255;;;;;:::o;7158:322::-;;7318:67;7382:2;7377:3;7318:67;:::i;:::-;7311:74;;7418:24;7414:1;7409:3;7405:11;7398:45;7471:2;7466:3;7462:12;7455:19;;7304:176;;;:::o;7489:320::-;;7649:67;7713:2;7708:3;7649:67;:::i;:::-;7642:74;;7749:22;7745:1;7740:3;7736:11;7729:43;7800:2;7795:3;7791:12;7784:19;;7635:174;;;:::o;7818:376::-;;7978:67;8042:2;8037:3;7978:67;:::i;:::-;7971:74;;8078:34;8074:1;8069:3;8065:11;8058:55;8147:9;8142:2;8137:3;8133:12;8126:31;8185:2;8180:3;8176:12;8169:19;;7964:230;;;:::o;8203:331::-;;8363:67;8427:2;8422:3;8363:67;:::i;:::-;8356:74;;8463:33;8459:1;8454:3;8450:11;8443:54;8525:2;8520:3;8516:12;8509:19;;8349:185;;;:::o;8542:103::-;8615:24;8633:5;8615:24;:::i;:::-;8610:3;8603:37;8597:48;;:::o;8652:113::-;8735:24;8753:5;8735:24;:::i;:::-;8730:3;8723:37;8717:48;;:::o;8772:222::-;;8899:2;8888:9;8884:18;8876:26;;8913:71;8981:1;8970:9;8966:17;8957:6;8913:71;:::i;:::-;8870:124;;;;:::o;9001:370::-;;9178:2;9167:9;9163:18;9155:26;;9228:9;9222:4;9218:20;9214:1;9203:9;9199:17;9192:47;9253:108;9356:4;9347:6;9253:108;:::i;:::-;9245:116;;9149:222;;;;:::o;9378:210::-;;9499:2;9488:9;9484:18;9476:26;;9513:65;9575:1;9564:9;9560:17;9551:6;9513:65;:::i;:::-;9470:118;;;;:::o;9595:310::-;;9742:2;9731:9;9727:18;9719:26;;9792:9;9786:4;9782:20;9778:1;9767:9;9763:17;9756:47;9817:78;9890:4;9881:6;9817:78;:::i;:::-;9809:86;;9713:192;;;;:::o;9912:532::-;;10115:2;10104:9;10100:18;10092:26;;10165:9;10159:4;10155:20;10151:1;10140:9;10136:17;10129:47;10190:78;10263:4;10254:6;10190:78;:::i;:::-;10182:86;;10279:72;10347:2;10336:9;10332:18;10323:6;10279:72;:::i;:::-;10362;10430:2;10419:9;10415:18;10406:6;10362:72;:::i;:::-;10086:358;;;;;;:::o;10451:856::-;;10732:3;10721:9;10717:19;10709:27;;10783:9;10777:4;10773:20;10769:1;10758:9;10754:17;10747:47;10808:78;10881:4;10872:6;10808:78;:::i;:::-;10800:86;;10897:72;10965:2;10954:9;10950:18;10941:6;10897:72;:::i;:::-;10980;11048:2;11037:9;11033:18;11024:6;10980:72;:::i;:::-;11063;11131:2;11120:9;11116:18;11107:6;11063:72;:::i;:::-;11146:67;11208:3;11197:9;11193:19;11184:6;11146:67;:::i;:::-;11224:73;11292:3;11281:9;11277:19;11268:6;11224:73;:::i;:::-;10703:604;;;;;;;;;:::o;11314:416::-;;11514:2;11503:9;11499:18;11491:26;;11564:9;11558:4;11554:20;11550:1;11539:9;11535:17;11528:47;11589:131;11715:4;11589:131;:::i;:::-;11581:139;;11485:245;;;:::o;11737:416::-;;11937:2;11926:9;11922:18;11914:26;;11987:9;11981:4;11977:20;11973:1;11962:9;11958:17;11951:47;12012:131;12138:4;12012:131;:::i;:::-;12004:139;;11908:245;;;:::o;12160:416::-;;12360:2;12349:9;12345:18;12337:26;;12410:9;12404:4;12400:20;12396:1;12385:9;12381:17;12374:47;12435:131;12561:4;12435:131;:::i;:::-;12427:139;;12331:245;;;:::o;12583:416::-;;12783:2;12772:9;12768:18;12760:26;;12833:9;12827:4;12823:20;12819:1;12808:9;12804:17;12797:47;12858:131;12984:4;12858:131;:::i;:::-;12850:139;;12754:245;;;:::o;13006:222::-;;13133:2;13122:9;13118:18;13110:26;;13147:71;13215:1;13204:9;13200:17;13191:6;13147:71;:::i;:::-;13104:124;;;;:::o;13235:444::-;;13418:2;13407:9;13403:18;13395:26;;13432:71;13500:1;13489:9;13485:17;13476:6;13432:71;:::i;:::-;13514:72;13582:2;13571:9;13567:18;13558:6;13514:72;:::i;:::-;13597;13665:2;13654:9;13650:18;13641:6;13597:72;:::i;:::-;13389:290;;;;;;:::o;13686:256::-;;13748:2;13742:9;13732:19;;13786:4;13778:6;13774:17;13885:6;13873:10;13870:22;13849:18;13837:10;13834:34;13831:62;13828:2;;;13906:1;13903;13896:12;13828:2;13926:10;13922:2;13915:22;13726:216;;;;:::o;13949:314::-;;14118:18;14110:6;14107:30;14104:2;;;14150:1;14147;14140:12;14104:2;14185:4;14177:6;14173:17;14165:25;;14248:4;14242;14238:15;14230:23;;14041:222;;;:::o;14270:322::-;;14414:18;14406:6;14403:30;14400:2;;;14446:1;14443;14436:12;14400:2;14513:4;14509:9;14502:4;14494:6;14490:17;14486:33;14478:41;;14577:4;14571;14567:15;14559:23;;14337:255;;;:::o;14599:151::-;;14685:3;14677:11;;14723:4;14718:3;14714:14;14706:22;;14671:79;;;:::o;14757:137::-;;14866:5;14860:12;14850:22;;14831:63;;;:::o;14901:122::-;;14995:5;14989:12;14979:22;;14960:63;;;:::o;15030:108::-;;15128:4;15123:3;15119:14;15111:22;;15105:33;;;:::o;15146:178::-;;15276:6;15271:3;15264:19;15313:4;15308:3;15304:14;15289:29;;15257:67;;;;:::o;15333:163::-;;15448:6;15443:3;15436:19;15485:4;15480:3;15476:14;15461:29;;15429:67;;;;:::o;15504:91::-;;15566:24;15584:5;15566:24;:::i;:::-;15555:35;;15549:46;;;:::o;15602:85::-;;15675:5;15668:13;15661:21;15650:32;;15644:43;;;:::o;15694:121::-;;15767:42;15760:5;15756:54;15745:65;;15739:76;;;:::o;15822:72::-;;15884:5;15873:16;;15867:27;;;:::o;15902:145::-;15983:6;15978:3;15973;15960:30;16039:1;16030:6;16025:3;16021:16;16014:27;15953:94;;;:::o;16056:268::-;16121:1;16128:101;16142:6;16139:1;16136:13;16128:101;;;16218:1;16213:3;16209:11;16203:18;16199:1;16194:3;16190:11;16183:39;16164:2;16161:1;16157:10;16152:15;;16128:101;;;16244:6;16241:1;16238:13;16235:2;;;16309:1;16300:6;16295:3;16291:16;16284:27;16235:2;16105:219;;;;:::o;16332:97::-;;16420:2;16416:7;16411:2;16404:5;16400:14;16396:28;16386:38;;16380:49;;;:::o;16437:117::-;16506:24;16524:5;16506:24;:::i;:::-;16499:5;16496:35;16486:2;;16545:1;16542;16535:12;16486:2;16480:74;:::o;16561:111::-;16627:21;16642:5;16627:21;:::i;:::-;16620:5;16617:32;16607:2;;16663:1;16660;16653:12;16607:2;16601:71;:::o;16679:117::-;16748:24;16766:5;16748:24;:::i;:::-;16741:5;16738:35;16728:2;;16787:1;16784;16777:12;16728:2;16722:74;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >= 0.7.0 < 0.8.0;\npragma experimental ABIEncoderV2;\n\nimport \"./Candidate.sol\";\nimport \"./ElectionHelper.sol\";\n\n\ncontract Vote is Candidate, ElectionHelper {\n    modifier hasNotVoted(uint _electionId) {\n        require (!this.hasAlreadyVoted(_electionId), \"User has already voted\");\n        _;\n    }\n\n    function hasAlreadyVoted(uint _electionId) external view returns (bool) {\n        return elections[_electionId].voters[msg.sender];\n    }\n\n    /**\n     * Gives one note to each candidates of the election\n     */\n    function voteToElection(uint _electionId, uint[] calldata _notes) external hasNotVoted(_electionId) {\n        require(elections[_electionId].candidatesCount == _notes.length, \"Not same amount of candidates and votes\");\n        for (uint i = 0; i < elections[_electionId].candidatesCount; i++){\n            addNote(_electionId, i, _notes[i]);\n        }\n        addVoter(_electionId);\n    }\n\n}",
  "sourcePath": "C:/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Vote.sol",
  "ast": {
    "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Vote.sol",
    "exportedSymbols": {
      "Vote": [
        979
      ]
    },
    "id": 980,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 889,
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
        "id": 890,
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
        "id": 891,
        "nodeType": "ImportDirective",
        "scope": 980,
        "sourceUnit": 243,
        "src": "101:25:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol",
        "file": "./ElectionHelper.sol",
        "id": 892,
        "nodeType": "ImportDirective",
        "scope": 980,
        "sourceUnit": 855,
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
              "id": 893,
              "name": "Candidate",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 242,
              "src": "177:9:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Candidate_$242",
                "typeString": "contract Candidate"
              }
            },
            "id": 894,
            "nodeType": "InheritanceSpecifier",
            "src": "177:9:4"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 895,
              "name": "ElectionHelper",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 854,
              "src": "188:14:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ElectionHelper_$854",
                "typeString": "contract ElectionHelper"
              }
            },
            "id": 896,
            "nodeType": "InheritanceSpecifier",
            "src": "188:14:4"
          }
        ],
        "contractDependencies": [
          242,
          490,
          854,
          1040
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 979,
        "linearizedBaseContracts": [
          979,
          854,
          242,
          490,
          1040
        ],
        "name": "Vote",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 910,
              "nodeType": "Block",
              "src": "248:98:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 905,
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
                              "id": 903,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 898,
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
                              "id": 901,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "268:4:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Vote_$979",
                                "typeString": "contract Vote"
                              }
                            },
                            "id": 902,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "hasAlreadyVoted",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 927,
                            "src": "268:20:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (uint256) view external returns (bool)"
                            }
                          },
                          "id": 904,
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
                        "id": 906,
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
                      "id": 900,
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
                    "id": 907,
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
                  "id": 908,
                  "nodeType": "ExpressionStatement",
                  "src": "258:70:4"
                },
                {
                  "id": 909,
                  "nodeType": "PlaceholderStatement",
                  "src": "338:1:4"
                }
              ]
            },
            "documentation": null,
            "id": 911,
            "name": "hasNotVoted",
            "nodeType": "ModifierDefinition",
            "overrides": null,
            "parameters": {
              "id": 899,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 898,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 911,
                  "src": "230:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 897,
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
              "id": 926,
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
                          "id": 918,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 299,
                          "src": "441:9:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 920,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 919,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 913,
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
                          "typeIdentifier": "t_struct$_Election_$282_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 921,
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
                    "id": 924,
                    "indexExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 922,
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
                      "id": 923,
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
                  "functionReturnParameters": 917,
                  "id": 925,
                  "nodeType": "Return",
                  "src": "434:48:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "7fa67b13",
            "id": 927,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "hasAlreadyVoted",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 914,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 913,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 927,
                  "src": "377:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 912,
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
              "id": 917,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 916,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 927,
                  "src": "418:4:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 915,
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
            "scope": 979,
            "src": "352:137:4",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 977,
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
                        "id": 946,
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
                              "id": 940,
                              "name": "elections",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 299,
                              "src": "686:9:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                                "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                              }
                            },
                            "id": 942,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 941,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 930,
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
                              "typeIdentifier": "t_struct$_Election_$282_storage",
                              "typeString": "struct ElectionFactory.Election storage ref"
                            }
                          },
                          "id": 943,
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
                            "id": 944,
                            "name": "_notes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 933,
                            "src": "728:6:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                              "typeString": "uint256[] calldata"
                            }
                          },
                          "id": 945,
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
                        "id": 947,
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
                      "id": 939,
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
                    "id": 948,
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
                  "id": 949,
                  "nodeType": "ExpressionStatement",
                  "src": "678:107:4"
                },
                {
                  "body": {
                    "id": 971,
                    "nodeType": "Block",
                    "src": "860:59:4",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 964,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 930,
                              "src": "882:11:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 965,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 951,
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
                                "id": 966,
                                "name": "_notes",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 933,
                                "src": "898:6:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                  "typeString": "uint256[] calldata"
                                }
                              },
                              "id": 968,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 967,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 951,
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
                            "id": 963,
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
                          "id": 969,
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
                        "id": 970,
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
                    "id": 959,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 954,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 951,
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
                          "id": 955,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 299,
                          "src": "816:9:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 957,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 956,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 930,
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
                          "typeIdentifier": "t_struct$_Election_$282_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 958,
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
                  "id": 972,
                  "initializationExpression": {
                    "assignments": [
                      951
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 951,
                        "mutability": "mutable",
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 972,
                        "src": "800:6:4",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 950,
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
                    "id": 953,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 952,
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
                      "id": 961,
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
                        "id": 960,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 951,
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
                    "id": 962,
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
                        "id": 974,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 930,
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
                      "id": 973,
                      "name": "addVoter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 592,
                      "src": "928:8:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 975,
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
                  "id": 976,
                  "nodeType": "ExpressionStatement",
                  "src": "928:21:4"
                }
              ]
            },
            "documentation": {
              "id": 928,
              "nodeType": "StructuredDocumentation",
              "src": "495:68:4",
              "text": " Gives one note to each candidates of the election"
            },
            "functionSelector": "a0b17848",
            "id": 978,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 936,
                    "name": "_electionId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 930,
                    "src": "655:11:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 937,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 935,
                  "name": "hasNotVoted",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 911,
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
              "id": 934,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 930,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 978,
                  "src": "592:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 929,
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
                  "id": 933,
                  "mutability": "mutable",
                  "name": "_notes",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 978,
                  "src": "610:22:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 931,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "610:4:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 932,
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
              "id": 938,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "668:0:4"
            },
            "scope": 979,
            "src": "568:388:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 980,
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
          979
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
        "id": 889,
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
        "id": 890,
        "name": "PragmaDirective",
        "src": "66:33:4"
      },
      {
        "attributes": {
          "SourceUnit": 243,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Candidate.sol",
          "file": "./Candidate.sol",
          "scope": 980,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 891,
        "name": "ImportDirective",
        "src": "101:25:4"
      },
      {
        "attributes": {
          "SourceUnit": 855,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol",
          "file": "./ElectionHelper.sol",
          "scope": 980,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 892,
        "name": "ImportDirective",
        "src": "127:30:4"
      },
      {
        "attributes": {
          "abstract": false,
          "contractDependencies": [
            242,
            490,
            854,
            1040
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            979,
            854,
            242,
            490,
            1040
          ],
          "name": "Vote",
          "scope": 980
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
                "id": 893,
                "name": "UserDefinedTypeName",
                "src": "177:9:4"
              }
            ],
            "id": 894,
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
                  "referencedDeclaration": 854,
                  "type": "contract ElectionHelper"
                },
                "id": 895,
                "name": "UserDefinedTypeName",
                "src": "188:14:4"
              }
            ],
            "id": 896,
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
                      "scope": 911,
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
                        "id": 897,
                        "name": "ElementaryTypeName",
                        "src": "230:4:4"
                      }
                    ],
                    "id": 898,
                    "name": "VariableDeclaration",
                    "src": "230:16:4"
                  }
                ],
                "id": 899,
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
                            "id": 900,
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
                                      "referencedDeclaration": 927,
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
                                        "id": 901,
                                        "name": "Identifier",
                                        "src": "268:4:4"
                                      }
                                    ],
                                    "id": 902,
                                    "name": "MemberAccess",
                                    "src": "268:20:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 898,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 903,
                                    "name": "Identifier",
                                    "src": "289:11:4"
                                  }
                                ],
                                "id": 904,
                                "name": "FunctionCall",
                                "src": "268:33:4"
                              }
                            ],
                            "id": 905,
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
                            "id": 906,
                            "name": "Literal",
                            "src": "303:24:4"
                          }
                        ],
                        "id": 907,
                        "name": "FunctionCall",
                        "src": "258:70:4"
                      }
                    ],
                    "id": 908,
                    "name": "ExpressionStatement",
                    "src": "258:70:4"
                  },
                  {
                    "id": 909,
                    "name": "PlaceholderStatement",
                    "src": "338:1:4"
                  }
                ],
                "id": 910,
                "name": "Block",
                "src": "248:98:4"
              }
            ],
            "id": 911,
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
              "scope": 979,
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
                      "scope": 927,
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
                        "id": 912,
                        "name": "ElementaryTypeName",
                        "src": "377:4:4"
                      }
                    ],
                    "id": 913,
                    "name": "VariableDeclaration",
                    "src": "377:16:4"
                  }
                ],
                "id": 914,
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
                      "scope": 927,
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
                        "id": 915,
                        "name": "ElementaryTypeName",
                        "src": "418:4:4"
                      }
                    ],
                    "id": 916,
                    "name": "VariableDeclaration",
                    "src": "418:4:4"
                  }
                ],
                "id": 917,
                "name": "ParameterList",
                "src": "417:6:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 917
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
                                      "referencedDeclaration": 299,
                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                      "value": "elections"
                                    },
                                    "id": 918,
                                    "name": "Identifier",
                                    "src": "441:9:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 913,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 919,
                                    "name": "Identifier",
                                    "src": "451:11:4"
                                  }
                                ],
                                "id": 920,
                                "name": "IndexAccess",
                                "src": "441:22:4"
                              }
                            ],
                            "id": 921,
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
                                "id": 922,
                                "name": "Identifier",
                                "src": "471:3:4"
                              }
                            ],
                            "id": 923,
                            "name": "MemberAccess",
                            "src": "471:10:4"
                          }
                        ],
                        "id": 924,
                        "name": "IndexAccess",
                        "src": "441:41:4"
                      }
                    ],
                    "id": 925,
                    "name": "Return",
                    "src": "434:48:4"
                  }
                ],
                "id": 926,
                "name": "Block",
                "src": "424:65:4"
              }
            ],
            "id": 927,
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
              "scope": 979,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "text": " Gives one note to each candidates of the election"
                },
                "id": 928,
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
                      "scope": 978,
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
                        "id": 929,
                        "name": "ElementaryTypeName",
                        "src": "592:4:4"
                      }
                    ],
                    "id": 930,
                    "name": "VariableDeclaration",
                    "src": "592:16:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_notes",
                      "overrides": null,
                      "scope": 978,
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
                            "id": 931,
                            "name": "ElementaryTypeName",
                            "src": "610:4:4"
                          }
                        ],
                        "id": 932,
                        "name": "ArrayTypeName",
                        "src": "610:6:4"
                      }
                    ],
                    "id": 933,
                    "name": "VariableDeclaration",
                    "src": "610:22:4"
                  }
                ],
                "id": 934,
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
                "id": 938,
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
                      "referencedDeclaration": 911,
                      "type": "modifier (uint256)",
                      "value": "hasNotVoted"
                    },
                    "id": 935,
                    "name": "Identifier",
                    "src": "643:11:4"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 930,
                      "type": "uint256",
                      "value": "_electionId"
                    },
                    "id": 936,
                    "name": "Identifier",
                    "src": "655:11:4"
                  }
                ],
                "id": 937,
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
                            "id": 939,
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
                                          "referencedDeclaration": 299,
                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                          "value": "elections"
                                        },
                                        "id": 940,
                                        "name": "Identifier",
                                        "src": "686:9:4"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 930,
                                          "type": "uint256",
                                          "value": "_electionId"
                                        },
                                        "id": 941,
                                        "name": "Identifier",
                                        "src": "696:11:4"
                                      }
                                    ],
                                    "id": 942,
                                    "name": "IndexAccess",
                                    "src": "686:22:4"
                                  }
                                ],
                                "id": 943,
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
                                      "referencedDeclaration": 933,
                                      "type": "uint256[] calldata",
                                      "value": "_notes"
                                    },
                                    "id": 944,
                                    "name": "Identifier",
                                    "src": "728:6:4"
                                  }
                                ],
                                "id": 945,
                                "name": "MemberAccess",
                                "src": "728:13:4"
                              }
                            ],
                            "id": 946,
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
                            "id": 947,
                            "name": "Literal",
                            "src": "743:41:4"
                          }
                        ],
                        "id": 948,
                        "name": "FunctionCall",
                        "src": "678:107:4"
                      }
                    ],
                    "id": 949,
                    "name": "ExpressionStatement",
                    "src": "678:107:4"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            951
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "mutability": "mutable",
                              "name": "i",
                              "overrides": null,
                              "scope": 972,
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
                                "id": 950,
                                "name": "ElementaryTypeName",
                                "src": "800:4:4"
                              }
                            ],
                            "id": 951,
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
                            "id": 952,
                            "name": "Literal",
                            "src": "809:1:4"
                          }
                        ],
                        "id": 953,
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
                              "referencedDeclaration": 951,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 954,
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
                                      "referencedDeclaration": 299,
                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                      "value": "elections"
                                    },
                                    "id": 955,
                                    "name": "Identifier",
                                    "src": "816:9:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 930,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 956,
                                    "name": "Identifier",
                                    "src": "826:11:4"
                                  }
                                ],
                                "id": 957,
                                "name": "IndexAccess",
                                "src": "816:22:4"
                              }
                            ],
                            "id": 958,
                            "name": "MemberAccess",
                            "src": "816:38:4"
                          }
                        ],
                        "id": 959,
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
                                  "referencedDeclaration": 951,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 960,
                                "name": "Identifier",
                                "src": "856:1:4"
                              }
                            ],
                            "id": 961,
                            "name": "UnaryOperation",
                            "src": "856:3:4"
                          }
                        ],
                        "id": 962,
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
                                    "id": 963,
                                    "name": "Identifier",
                                    "src": "874:7:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 930,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 964,
                                    "name": "Identifier",
                                    "src": "882:11:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 951,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 965,
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
                                          "referencedDeclaration": 933,
                                          "type": "uint256[] calldata",
                                          "value": "_notes"
                                        },
                                        "id": 966,
                                        "name": "Identifier",
                                        "src": "898:6:4"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 951,
                                          "type": "uint256",
                                          "value": "i"
                                        },
                                        "id": 967,
                                        "name": "Identifier",
                                        "src": "905:1:4"
                                      }
                                    ],
                                    "id": 968,
                                    "name": "IndexAccess",
                                    "src": "898:9:4"
                                  }
                                ],
                                "id": 969,
                                "name": "FunctionCall",
                                "src": "874:34:4"
                              }
                            ],
                            "id": 970,
                            "name": "ExpressionStatement",
                            "src": "874:34:4"
                          }
                        ],
                        "id": 971,
                        "name": "Block",
                        "src": "860:59:4"
                      }
                    ],
                    "id": 972,
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
                              "referencedDeclaration": 592,
                              "type": "function (uint256)",
                              "value": "addVoter"
                            },
                            "id": 973,
                            "name": "Identifier",
                            "src": "928:8:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 930,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 974,
                            "name": "Identifier",
                            "src": "937:11:4"
                          }
                        ],
                        "id": 975,
                        "name": "FunctionCall",
                        "src": "928:21:4"
                      }
                    ],
                    "id": 976,
                    "name": "ExpressionStatement",
                    "src": "928:21:4"
                  }
                ],
                "id": 977,
                "name": "Block",
                "src": "668:288:4"
              }
            ],
            "id": 978,
            "name": "FunctionDefinition",
            "src": "568:388:4"
          }
        ],
        "id": 979,
        "name": "ContractDefinition",
        "src": "160:799:4"
      }
    ],
    "id": 980,
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
      "address": "0x331f96d316deF114B9Eae2A35Ba771862861069C",
      "transactionHash": "0x96e561f54ae16fbc4bc08ddbe5eb42b764684d9b42ae0351e0633067dc3f4c48"
    }
  },
  "schemaVersion": "3.3.3",
  "updatedAt": "2021-01-23T13:34:14.822Z",
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