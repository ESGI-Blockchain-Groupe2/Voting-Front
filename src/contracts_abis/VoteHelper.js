export const voteHelperABI = {
  "contractName": "VoteHelper",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "NewElection",
      "type": "event"
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
          "name": "expiresAfter",
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
      "inputs": [],
      "name": "getElectionsCount",
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
  "metadata": "{\"compiler\":{\"version\":\"0.7.0+commit.9e61f92b\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"NewElection\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"addAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_candidateName\",\"type\":\"string\"}],\"name\":\"addCandidate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_noteId\",\"type\":\"uint256\"}],\"name\":\"addNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"addVoter\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_note\",\"type\":\"uint256\"}],\"name\":\"calculatePercentageOfNote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"computeAverageNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeCandidatesAverageNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeFinalRoundWinner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeFirstRoundWinners\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeResult\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_title\",\"type\":\"string\"},{\"internalType\":\"string[]\",\"name\":\"_candidatesNames\",\"type\":\"string[]\"}],\"name\":\"createElection\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"deleteAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"elections\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"creationDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"expiresAfter\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalVoters\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"isOpen\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"candidatesCount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"winner\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"endElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"getCandidateAverageNote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"getCandidateName\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_noteId\",\"type\":\"uint256\"}],\"name\":\"getCandidateNote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getCandidatesCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionStatus\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionTitle\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionWinner\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getElectionsCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getFirstRoundWinners\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"}],\"name\":\"getOneFirstRoundWinner\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"hasAlreadyVoted\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"incrementVoters\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"userAddress\",\"type\":\"address\"}],\"name\":\"isUserAdmin\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256[]\",\"name\":\"_notes\",\"type\":\"uint256[]\"}],\"name\":\"voteToElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"voteToElection(uint256,uint256[])\":{\"notice\":\"Gives one note to each candidates of the election\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/VoteHelper.sol\":\"VoteHelper\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/CandidateHelper.sol\":{\"keccak256\":\"0xc67a51bc79ae9be0b5a5bf3d1924e0c15587bdc721af6a3258eb66cfbed29ba7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6004571363d004bb82ebde6e5792290e78a4c2140fe50743a3e43561a16afdba\",\"dweb:/ipfs/QmVtsWGv4SqFMCbqEvGMypn9AxxtRTQgjLR3hyqq4aytCX\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol\":{\"keccak256\":\"0x51e59eea6856922c630de105edb1c190025ed46e595f7653d4eb7afcb4cb1571\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bd747098772d5b3dc05df0b9ce4746cf3c31971187b615781eee9caa77c4f7ae\",\"dweb:/ipfs/QmXoBFnGLry9A2q9tXdDYj7NKGcVetmBF1jGVqgWvCuZKH\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol\":{\"keccak256\":\"0xfc34cfa9a12352071ae7129f4d760245dea0e74f79c871c7003a5a11b9b6cd90\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6ab23a3024361b183077f46c0b6b2d67ba2e601c8d34800659f918a659b47fe\",\"dweb:/ipfs/QmYzqe7sGuZ1LvGdoWURxNEMncGqpAhKHbMNEdBbZb8fiN\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/VoteHelper.sol\":{\"keccak256\":\"0x8c59dbbfd4dcad68223765e3ddd2823f43bf106c4db5e71745c988600d8f8f52\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b05e37513af7c8bad89f5df473096463ff3ec965a8df27ca5c8d3a65db3f029e\",\"dweb:/ipfs/QmT2VLTDA73n52Y6iumJHyzhpaX9sbAkRiKBPp913F1ZpQ\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol\":{\"keccak256\":\"0x7f1004825e1cc40d7b663e20d3be71ed9c64baf7f05eae9b115a4d4448c8fdcf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5d8ccf5e65c162aeabb1b5e804f7183d95be7a985d5466796025a39ede9cfa62\",\"dweb:/ipfs/QmNZR6izJaw2bC9aCAcVbtS1kE9YBWuuqoaryy8idA14ta\"]}},\"version\":1}",
  "bytecode": "0x60806040526213c680600060146101000a81548163ffffffff021916908363ffffffff16021790555034801561003457600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600560008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506121d1806100fd6000396000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c80639c98bcbb11610104578063cd015c32116100a2578063e62c6ac511610071578063e62c6ac51461059d578063e76f6b58146105cd578063e936ed30146105fd578063f2fde38b1461062d576101da565b8063cd015c321461052d578063cd08bca014610549578063cd62d5dd14610565578063d8f7a0bb14610581576101da565b8063b024419e116100de578063b024419e14610493578063b12b1a7d146104c3578063b1bb6ec3146104f3578063be4d823e14610511576101da565b80639c98bcbb1461043f578063a0b178481461045b578063ab6cb04914610477576101da565b80633ee95f001161017c57806374d523a81161014b57806374d523a8146103a55780637bb1541d146103d55780637fa67b13146103f15780638da5cb5b14610421576101da565b80633ee95f00146102f35780634d94fc6a146103235780635e6fef01146103535780637048027514610389576101da565b806327e1f7df116101b857806327e1f7df14610247578063337fa14614610263578063349813b2146102935780633a0b35b7146102c3576101da565b80631750a3d0146101df5780631aaa5246146101fb57806324785b9e14610217575b600080fd5b6101f960048036038101906101f49190611c0a565b610649565b005b61021560048036038101906102109190611b60565b6106b0565b005b610231600480360381019061022c9190611b60565b6106d9565b60405161023e9190611eb7565b60405180910390f35b610261600480360381019061025c9190611acb565b610706565b005b61027d60048036038101906102789190611c9a565b6107c0565b60405161028a9190611faa565b60405180910390f35b6102ad60048036038101906102a89190611af4565b610807565b6040516102ba9190611faa565b60405180910390f35b6102dd60048036038101906102d89190611c9a565b6109ea565b6040516102ea9190611faa565b60405180910390f35b61030d60048036038101906103089190611b60565b610a7a565b60405161031a9190611faa565b60405180910390f35b61033d60048036038101906103389190611b60565b610a9a565b60405161034a9190611ed2565b60405180910390f35b61036d60048036038101906103689190611b60565b610b52565b6040516103809796959493929190611ef4565b60405180910390f35b6103a3600480360381019061039e9190611acb565b610c39565b005b6103bf60048036038101906103ba9190611acb565b610cf3565b6040516103cc9190611eb7565b60405180910390f35b6103ef60048036038101906103ea9190611b60565b610d49565b005b61040b60048036038101906104069190611b60565b610e89565b6040516104189190611eb7565b60405180910390f35b610429610ef3565b6040516104369190611e7a565b60405180910390f35b61045960048036038101906104549190611b60565b610f17565b005b61047560048036038101906104709190611bb2565b610fb1565b005b610491600480360381019061048c9190611b60565b6110b1565b005b6104ad60048036038101906104a89190611c5e565b6110ed565b6040516104ba9190611ed2565b60405180910390f35b6104dd60048036038101906104d89190611b60565b6111ba565b6040516104ea9190611e95565b60405180910390f35b6104fb611228565b6040516105089190611faa565b60405180910390f35b61052b60048036038101906105269190611b60565b611232565b005b61054760048036038101906105429190611b60565b6112c8565b005b610563600480360381019061055e9190611c9a565b611430565b005b61057f600480360381019061057a9190611c5e565b611480565b005b61059b60048036038101906105969190611b60565b61166a565b005b6105b760048036038101906105b29190611b60565b6116e2565b6040516105c49190611faa565b60405180910390f35b6105e760048036038101906105e29190611c5e565b611702565b6040516105f49190611faa565b60405180910390f35b61061760048036038101906106129190611c5e565b611738565b6040516106249190611faa565b60405180910390f35b61064760048036038101906106429190611acb565b61176d565b005b8060026000848152602001908152602001600020600601600060026000868152602001908152602001600020600501600081548092919060010191905055815260200190815260200160002060000190805190602001906106ab9291906118bc565b505050565b600260008281526020019081526020016000206003016000815480929190600101919050555050565b60006002600083815260200190815260200160002060040160009054906101000a900460ff169050919050565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151461076457600080fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600060026000858152602001908152602001600020600601600084815260200190815260200160002060010160008381526020019081526020016000205490509392505050565b60003360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151461086757600080fd5b60008351905060016000815480929190600101919050555060006002600060015481526020019081526020016000209050858160000190805190602001906108b09291906118bc565b50428160010181905550600060149054906101000a900463ffffffff1663ffffffff1681600201819055506000816003018190555060018160040160006101000a81548160ff02191690831515021790555060005b828110156109395761092c60015487838151811061091f57fe5b6020026020010151610649565b8080600101915050610905565b503360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600154935050505092915050565b600080600260008681526020019081526020016000206006016000858152602001908152602001600020600101600084815260200190815260200160002054905060006064820290506000600260008881526020019081526020016000206003015490506000811415610a635760009350505050610a73565b808281610a6c57fe5b0493505050505b9392505050565b600060026000838152602001908152602001600020600501549050919050565b6060600260008381526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b465780601f10610b1b57610100808354040283529160200191610b46565b820191906000526020600020905b815481529060010190602001808311610b2957829003601f168201915b50505050509050919050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bfe5780601f10610bd357610100808354040283529160200191610bfe565b820191906000526020600020905b815481529060010190602001808311610be157829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154908060090154905087565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610c9757600080fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b6002600084815260200190815260200160002060080180549050811015610e84576000600260008581526020019081526020016000206006016000600260008781526020019081526020016000206008018481548110610dad57fe5b906000526020600020015481526020019081526020016000206002015490506000821415610e2357809250600260008581526020019081526020016000206008018281548110610df957fe5b90600052602060002001546002600086815260200190815260200160002060090181905550610e76565b82811115610e7557809250600260008581526020019081526020016000206008018281548110610e4f57fe5b906000526020600020015460026000868152602001908152602001600020600901819055505b5b508080600101915050610d51565b505050565b60006002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610f7557600080fd5b60006002600084815260200190815260200160002060040160006101000a81548160ff021916908315150217905550610fad82611232565b5050565b82610fbb81610e89565b15610ffb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ff290611f6a565b60405180910390fd5b82829050600260008681526020019081526020016000206005015414611056576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104d90611f8a565b60405180910390fd5b60005b60026000868152602001908152602001600020600501548110156110a157611094858286868581811061108857fe5b90506020020135611430565b8080600101915050611059565b506110ab8461166a565b50505050565b60005b60026000838152602001908152602001600020600501548110156110e9576110dc8282611480565b80806001019150506110b4565b5050565b60606002600084815260200190815260200160002060060160008381526020019081526020016000206000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111ad5780601f10611182576101008083540402835291602001916111ad565b820191906000526020600020905b81548152906001019060200180831161119057829003601f168201915b5050505050905092915050565b60606002600083815260200190815260200160002060080180548060200260200160405190810160405280929190818152602001828054801561121c57602002820191906000526020600020905b815481526020019060010190808311611208575b50505050509050919050565b6000600154905090565b61123b816110b1565b611244816112c8565b61124d81610d49565b60016002600083815260200190815260200160002060080180549050111561127d5761127881610d49565b6112c5565b6002600082815260200190815260200160002060080160008154811061129f57fe5b906000526020600020015460026000838152602001908152602001600020600901819055505b50565b6000805b600260008481526020019081526020016000206005015481101561142b576002600084815260200190815260200160002060060160008281526020019081526020016000206003015482141561135e576002600084815260200190815260200160002060080181908060018154018082558091505060019003906000526020600020016000909190919091505561141e565b6002600084815260200190815260200160002060060160008281526020019081526020016000206003015482101561141d576002600084815260200190815260200160002060080160006113b2919061193c565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301549150600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150555b5b80806001019150506112cc565b505050565b600260008481526020019081526020016000206006016000838152602001908152602001600020600101600082815260200190815260200160002060008154809291906001019190505550505050565b6000600260008481526020019081526020016000206003015414156114d457600060026000848152602001908152602001600020600601600083815260200190815260200160002060030181905550611666565b6000600690505b60326002600085815260200190815260200160002060060160008481526020019081526020016000206002015411611664573073ffffffffffffffffffffffffffffffffffffffff16633a0b35b78484846040518463ffffffff1660e01b815260040161154a93929190611fc5565b60206040518083038186803b15801561156257600080fd5b505afa158015611576573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061159a9190611b89565b600260008581526020019081526020016000206006016000848152602001908152602001600020600201540160026000858152602001908152602001600020600601600084815260200190815260200160002060020181905550603260026000858152602001908152602001600020600601600084815260200190815260200160002060020154106116565780600260008581526020019081526020016000206006016000848152602001908152602001600020600301819055505b8080600190039150506114db565b505b5050565b60016002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506116df816106b0565b50565b600060026000838152602001908152602001600020600901549050919050565b600060026000848152602001908152602001600020600801828154811061172557fe5b9060005260206000200154905092915050565b600060026000848152602001908152602001600020600601600083815260200190815260200160002060030154905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146117c557600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156117ff57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106118fd57805160ff191683800117855561192b565b8280016001018555821561192b579182015b8281111561192a57825182559160200191906001019061190f565b5b509050611938919061195d565b5090565b508054600082559060005260206000209081019061195a919061195d565b50565b5b8082111561197657600081600090555060010161195e565b5090565b6000813590506119898161216d565b92915050565b600082601f8301126119a057600080fd5b81356119b36119ae82612029565b611ffc565b9150818183526020840193506020810190508360005b838110156119f957813586016119df8882611a4d565b8452602084019350602083019250506001810190506119c9565b5050505092915050565b60008083601f840112611a1557600080fd5b8235905067ffffffffffffffff811115611a2e57600080fd5b602083019150836020820283011115611a4657600080fd5b9250929050565b600082601f830112611a5e57600080fd5b8135611a71611a6c82612051565b611ffc565b91508082526020830160208301858383011115611a8d57600080fd5b611a9883828461211a565b50505092915050565b600081359050611ab081612184565b92915050565b600081519050611ac581612184565b92915050565b600060208284031215611add57600080fd5b6000611aeb8482850161197a565b91505092915050565b60008060408385031215611b0757600080fd5b600083013567ffffffffffffffff811115611b2157600080fd5b611b2d85828601611a4d565b925050602083013567ffffffffffffffff811115611b4a57600080fd5b611b568582860161198f565b9150509250929050565b600060208284031215611b7257600080fd5b6000611b8084828501611aa1565b91505092915050565b600060208284031215611b9b57600080fd5b6000611ba984828501611ab6565b91505092915050565b600080600060408486031215611bc757600080fd5b6000611bd586828701611aa1565b935050602084013567ffffffffffffffff811115611bf257600080fd5b611bfe86828701611a03565b92509250509250925092565b60008060408385031215611c1d57600080fd5b6000611c2b85828601611aa1565b925050602083013567ffffffffffffffff811115611c4857600080fd5b611c5485828601611a4d565b9150509250929050565b60008060408385031215611c7157600080fd5b6000611c7f85828601611aa1565b9250506020611c9085828601611aa1565b9150509250929050565b600080600060608486031215611caf57600080fd5b6000611cbd86828701611aa1565b9350506020611cce86828701611aa1565b9250506040611cdf86828701611aa1565b9150509250925092565b6000611cf58383611e5c565b60208301905092915050565b611d0a816120d2565b82525050565b6000611d1b8261208d565b611d2581856120b0565b9350611d308361207d565b8060005b83811015611d61578151611d488882611ce9565b9750611d53836120a3565b925050600181019050611d34565b5085935050505092915050565b611d77816120e4565b82525050565b6000611d8882612098565b611d9281856120c1565b9350611da2818560208601612129565b611dab8161215c565b840191505092915050565b6000611dc36016836120c1565b91507f557365722068617320616c726561647920766f746564000000000000000000006000830152602082019050919050565b6000611e036027836120c1565b91507f4e6f742073616d6520616d6f756e74206f662063616e6469646174657320616e60008301527f6420766f746573000000000000000000000000000000000000000000000000006020830152604082019050919050565b611e6581612110565b82525050565b611e7481612110565b82525050565b6000602082019050611e8f6000830184611d01565b92915050565b60006020820190508181036000830152611eaf8184611d10565b905092915050565b6000602082019050611ecc6000830184611d6e565b92915050565b60006020820190508181036000830152611eec8184611d7d565b905092915050565b600060e0820190508181036000830152611f0e818a611d7d565b9050611f1d6020830189611e6b565b611f2a6040830188611e6b565b611f376060830187611e6b565b611f446080830186611d6e565b611f5160a0830185611e6b565b611f5e60c0830184611e6b565b98975050505050505050565b60006020820190508181036000830152611f8381611db6565b9050919050565b60006020820190508181036000830152611fa381611df6565b9050919050565b6000602082019050611fbf6000830184611e6b565b92915050565b6000606082019050611fda6000830186611e6b565b611fe76020830185611e6b565b611ff46040830184611e6b565b949350505050565b6000604051905081810181811067ffffffffffffffff8211171561201f57600080fd5b8060405250919050565b600067ffffffffffffffff82111561204057600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561206857600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006120dd826120f0565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561214757808201518184015260208101905061212c565b83811115612156576000848401525b50505050565b6000601f19601f8301169050919050565b612176816120d2565b811461218157600080fd5b50565b61218d81612110565b811461219857600080fd5b5056fea2646970667358221220b5913e3c4e6dc17acc6eac46826bec68bdcd61544379544019c673b3ddf47f5064736f6c63430007000033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101da5760003560e01c80639c98bcbb11610104578063cd015c32116100a2578063e62c6ac511610071578063e62c6ac51461059d578063e76f6b58146105cd578063e936ed30146105fd578063f2fde38b1461062d576101da565b8063cd015c321461052d578063cd08bca014610549578063cd62d5dd14610565578063d8f7a0bb14610581576101da565b8063b024419e116100de578063b024419e14610493578063b12b1a7d146104c3578063b1bb6ec3146104f3578063be4d823e14610511576101da565b80639c98bcbb1461043f578063a0b178481461045b578063ab6cb04914610477576101da565b80633ee95f001161017c57806374d523a81161014b57806374d523a8146103a55780637bb1541d146103d55780637fa67b13146103f15780638da5cb5b14610421576101da565b80633ee95f00146102f35780634d94fc6a146103235780635e6fef01146103535780637048027514610389576101da565b806327e1f7df116101b857806327e1f7df14610247578063337fa14614610263578063349813b2146102935780633a0b35b7146102c3576101da565b80631750a3d0146101df5780631aaa5246146101fb57806324785b9e14610217575b600080fd5b6101f960048036038101906101f49190611c0a565b610649565b005b61021560048036038101906102109190611b60565b6106b0565b005b610231600480360381019061022c9190611b60565b6106d9565b60405161023e9190611eb7565b60405180910390f35b610261600480360381019061025c9190611acb565b610706565b005b61027d60048036038101906102789190611c9a565b6107c0565b60405161028a9190611faa565b60405180910390f35b6102ad60048036038101906102a89190611af4565b610807565b6040516102ba9190611faa565b60405180910390f35b6102dd60048036038101906102d89190611c9a565b6109ea565b6040516102ea9190611faa565b60405180910390f35b61030d60048036038101906103089190611b60565b610a7a565b60405161031a9190611faa565b60405180910390f35b61033d60048036038101906103389190611b60565b610a9a565b60405161034a9190611ed2565b60405180910390f35b61036d60048036038101906103689190611b60565b610b52565b6040516103809796959493929190611ef4565b60405180910390f35b6103a3600480360381019061039e9190611acb565b610c39565b005b6103bf60048036038101906103ba9190611acb565b610cf3565b6040516103cc9190611eb7565b60405180910390f35b6103ef60048036038101906103ea9190611b60565b610d49565b005b61040b60048036038101906104069190611b60565b610e89565b6040516104189190611eb7565b60405180910390f35b610429610ef3565b6040516104369190611e7a565b60405180910390f35b61045960048036038101906104549190611b60565b610f17565b005b61047560048036038101906104709190611bb2565b610fb1565b005b610491600480360381019061048c9190611b60565b6110b1565b005b6104ad60048036038101906104a89190611c5e565b6110ed565b6040516104ba9190611ed2565b60405180910390f35b6104dd60048036038101906104d89190611b60565b6111ba565b6040516104ea9190611e95565b60405180910390f35b6104fb611228565b6040516105089190611faa565b60405180910390f35b61052b60048036038101906105269190611b60565b611232565b005b61054760048036038101906105429190611b60565b6112c8565b005b610563600480360381019061055e9190611c9a565b611430565b005b61057f600480360381019061057a9190611c5e565b611480565b005b61059b60048036038101906105969190611b60565b61166a565b005b6105b760048036038101906105b29190611b60565b6116e2565b6040516105c49190611faa565b60405180910390f35b6105e760048036038101906105e29190611c5e565b611702565b6040516105f49190611faa565b60405180910390f35b61061760048036038101906106129190611c5e565b611738565b6040516106249190611faa565b60405180910390f35b61064760048036038101906106429190611acb565b61176d565b005b8060026000848152602001908152602001600020600601600060026000868152602001908152602001600020600501600081548092919060010191905055815260200190815260200160002060000190805190602001906106ab9291906118bc565b505050565b600260008281526020019081526020016000206003016000815480929190600101919050555050565b60006002600083815260200190815260200160002060040160009054906101000a900460ff169050919050565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151461076457600080fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600060026000858152602001908152602001600020600601600084815260200190815260200160002060010160008381526020019081526020016000205490509392505050565b60003360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151461086757600080fd5b60008351905060016000815480929190600101919050555060006002600060015481526020019081526020016000209050858160000190805190602001906108b09291906118bc565b50428160010181905550600060149054906101000a900463ffffffff1663ffffffff1681600201819055506000816003018190555060018160040160006101000a81548160ff02191690831515021790555060005b828110156109395761092c60015487838151811061091f57fe5b6020026020010151610649565b8080600101915050610905565b503360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600154935050505092915050565b600080600260008681526020019081526020016000206006016000858152602001908152602001600020600101600084815260200190815260200160002054905060006064820290506000600260008881526020019081526020016000206003015490506000811415610a635760009350505050610a73565b808281610a6c57fe5b0493505050505b9392505050565b600060026000838152602001908152602001600020600501549050919050565b6060600260008381526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b465780601f10610b1b57610100808354040283529160200191610b46565b820191906000526020600020905b815481529060010190602001808311610b2957829003601f168201915b50505050509050919050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bfe5780601f10610bd357610100808354040283529160200191610bfe565b820191906000526020600020905b815481529060010190602001808311610be157829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154908060090154905087565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610c9757600080fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b6002600084815260200190815260200160002060080180549050811015610e84576000600260008581526020019081526020016000206006016000600260008781526020019081526020016000206008018481548110610dad57fe5b906000526020600020015481526020019081526020016000206002015490506000821415610e2357809250600260008581526020019081526020016000206008018281548110610df957fe5b90600052602060002001546002600086815260200190815260200160002060090181905550610e76565b82811115610e7557809250600260008581526020019081526020016000206008018281548110610e4f57fe5b906000526020600020015460026000868152602001908152602001600020600901819055505b5b508080600101915050610d51565b505050565b60006002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610f7557600080fd5b60006002600084815260200190815260200160002060040160006101000a81548160ff021916908315150217905550610fad82611232565b5050565b82610fbb81610e89565b15610ffb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ff290611f6a565b60405180910390fd5b82829050600260008681526020019081526020016000206005015414611056576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104d90611f8a565b60405180910390fd5b60005b60026000868152602001908152602001600020600501548110156110a157611094858286868581811061108857fe5b90506020020135611430565b8080600101915050611059565b506110ab8461166a565b50505050565b60005b60026000838152602001908152602001600020600501548110156110e9576110dc8282611480565b80806001019150506110b4565b5050565b60606002600084815260200190815260200160002060060160008381526020019081526020016000206000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111ad5780601f10611182576101008083540402835291602001916111ad565b820191906000526020600020905b81548152906001019060200180831161119057829003601f168201915b5050505050905092915050565b60606002600083815260200190815260200160002060080180548060200260200160405190810160405280929190818152602001828054801561121c57602002820191906000526020600020905b815481526020019060010190808311611208575b50505050509050919050565b6000600154905090565b61123b816110b1565b611244816112c8565b61124d81610d49565b60016002600083815260200190815260200160002060080180549050111561127d5761127881610d49565b6112c5565b6002600082815260200190815260200160002060080160008154811061129f57fe5b906000526020600020015460026000838152602001908152602001600020600901819055505b50565b6000805b600260008481526020019081526020016000206005015481101561142b576002600084815260200190815260200160002060060160008281526020019081526020016000206003015482141561135e576002600084815260200190815260200160002060080181908060018154018082558091505060019003906000526020600020016000909190919091505561141e565b6002600084815260200190815260200160002060060160008281526020019081526020016000206003015482101561141d576002600084815260200190815260200160002060080160006113b2919061193c565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301549150600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150555b5b80806001019150506112cc565b505050565b600260008481526020019081526020016000206006016000838152602001908152602001600020600101600082815260200190815260200160002060008154809291906001019190505550505050565b6000600260008481526020019081526020016000206003015414156114d457600060026000848152602001908152602001600020600601600083815260200190815260200160002060030181905550611666565b6000600690505b60326002600085815260200190815260200160002060060160008481526020019081526020016000206002015411611664573073ffffffffffffffffffffffffffffffffffffffff16633a0b35b78484846040518463ffffffff1660e01b815260040161154a93929190611fc5565b60206040518083038186803b15801561156257600080fd5b505afa158015611576573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061159a9190611b89565b600260008581526020019081526020016000206006016000848152602001908152602001600020600201540160026000858152602001908152602001600020600601600084815260200190815260200160002060020181905550603260026000858152602001908152602001600020600601600084815260200190815260200160002060020154106116565780600260008581526020019081526020016000206006016000848152602001908152602001600020600301819055505b8080600190039150506114db565b505b5050565b60016002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506116df816106b0565b50565b600060026000838152602001908152602001600020600901549050919050565b600060026000848152602001908152602001600020600801828154811061172557fe5b9060005260206000200154905092915050565b600060026000848152602001908152602001600020600601600083815260200190815260200160002060030154905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146117c557600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156117ff57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106118fd57805160ff191683800117855561192b565b8280016001018555821561192b579182015b8281111561192a57825182559160200191906001019061190f565b5b509050611938919061195d565b5090565b508054600082559060005260206000209081019061195a919061195d565b50565b5b8082111561197657600081600090555060010161195e565b5090565b6000813590506119898161216d565b92915050565b600082601f8301126119a057600080fd5b81356119b36119ae82612029565b611ffc565b9150818183526020840193506020810190508360005b838110156119f957813586016119df8882611a4d565b8452602084019350602083019250506001810190506119c9565b5050505092915050565b60008083601f840112611a1557600080fd5b8235905067ffffffffffffffff811115611a2e57600080fd5b602083019150836020820283011115611a4657600080fd5b9250929050565b600082601f830112611a5e57600080fd5b8135611a71611a6c82612051565b611ffc565b91508082526020830160208301858383011115611a8d57600080fd5b611a9883828461211a565b50505092915050565b600081359050611ab081612184565b92915050565b600081519050611ac581612184565b92915050565b600060208284031215611add57600080fd5b6000611aeb8482850161197a565b91505092915050565b60008060408385031215611b0757600080fd5b600083013567ffffffffffffffff811115611b2157600080fd5b611b2d85828601611a4d565b925050602083013567ffffffffffffffff811115611b4a57600080fd5b611b568582860161198f565b9150509250929050565b600060208284031215611b7257600080fd5b6000611b8084828501611aa1565b91505092915050565b600060208284031215611b9b57600080fd5b6000611ba984828501611ab6565b91505092915050565b600080600060408486031215611bc757600080fd5b6000611bd586828701611aa1565b935050602084013567ffffffffffffffff811115611bf257600080fd5b611bfe86828701611a03565b92509250509250925092565b60008060408385031215611c1d57600080fd5b6000611c2b85828601611aa1565b925050602083013567ffffffffffffffff811115611c4857600080fd5b611c5485828601611a4d565b9150509250929050565b60008060408385031215611c7157600080fd5b6000611c7f85828601611aa1565b9250506020611c9085828601611aa1565b9150509250929050565b600080600060608486031215611caf57600080fd5b6000611cbd86828701611aa1565b9350506020611cce86828701611aa1565b9250506040611cdf86828701611aa1565b9150509250925092565b6000611cf58383611e5c565b60208301905092915050565b611d0a816120d2565b82525050565b6000611d1b8261208d565b611d2581856120b0565b9350611d308361207d565b8060005b83811015611d61578151611d488882611ce9565b9750611d53836120a3565b925050600181019050611d34565b5085935050505092915050565b611d77816120e4565b82525050565b6000611d8882612098565b611d9281856120c1565b9350611da2818560208601612129565b611dab8161215c565b840191505092915050565b6000611dc36016836120c1565b91507f557365722068617320616c726561647920766f746564000000000000000000006000830152602082019050919050565b6000611e036027836120c1565b91507f4e6f742073616d6520616d6f756e74206f662063616e6469646174657320616e60008301527f6420766f746573000000000000000000000000000000000000000000000000006020830152604082019050919050565b611e6581612110565b82525050565b611e7481612110565b82525050565b6000602082019050611e8f6000830184611d01565b92915050565b60006020820190508181036000830152611eaf8184611d10565b905092915050565b6000602082019050611ecc6000830184611d6e565b92915050565b60006020820190508181036000830152611eec8184611d7d565b905092915050565b600060e0820190508181036000830152611f0e818a611d7d565b9050611f1d6020830189611e6b565b611f2a6040830188611e6b565b611f376060830187611e6b565b611f446080830186611d6e565b611f5160a0830185611e6b565b611f5e60c0830184611e6b565b98975050505050505050565b60006020820190508181036000830152611f8381611db6565b9050919050565b60006020820190508181036000830152611fa381611df6565b9050919050565b6000602082019050611fbf6000830184611e6b565b92915050565b6000606082019050611fda6000830186611e6b565b611fe76020830185611e6b565b611ff46040830184611e6b565b949350505050565b6000604051905081810181811067ffffffffffffffff8211171561201f57600080fd5b8060405250919050565b600067ffffffffffffffff82111561204057600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561206857600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006120dd826120f0565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561214757808201518184015260208101905061212c565b83811115612156576000848401525b50505050565b6000601f19601f8301169050919050565b612176816120d2565b811461218157600080fd5b50565b61218d81612110565b811461219857600080fd5b5056fea2646970667358221220b5913e3c4e6dc17acc6eac46826bec68bdcd61544379544019c673b3ddf47f5064736f6c63430007000033",
  "immutableReferences": {},
  "sourceMap": "166:804:4:-:0;;;249:7:1;229:27;;;;;;;;;;;;;;;;;;;;166:804:4;;;;;;;;;;552:10:5;544:5;;:18;;;;;;;;;;;;;;;;;;212:4:1;193:9;:16;203:5;;;;;;;;;;;193:16;;;;;;;;;;;;;;;;:23;;;;;;;;;;;;;;;;;;166:804:4;;;;;;",
  "deployedSourceMap": "166:804:4:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1526:191:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2553:104;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;421:125:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1237:120:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;491:190:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1825:722:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;875:406:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;348:137;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2663:132:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;781:43;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;;:::i;:::-;;;;;;;;1116:115;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1364;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2416:656:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;365:135:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;279:20:5;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;257:158:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;579:388:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1584:203:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2801:177:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;993:136:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1723:96:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1135:443:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1793:617;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;185:157:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1287:738;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;685:146:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;552:127;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;837:150;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;687:182:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;907:188:5;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1526:191:1;1696:14;1613:9;:22;1623:11;1613:22;;;;;;;;;;;:33;;:75;1647:9;:22;1657:11;1647:22;;;;;;;;;;;:38;;;:40;;;;;;;;;;;;1613:75;;;;;;;;;;;:80;;:97;;;;;;;;;;;;:::i;:::-;;1526:191;;:::o;2553:104::-;2613:9;:22;2623:11;2613:22;;;;;;;;;;;:34;;;:37;;;;;;;;;;;;;2553:104;:::o;421:125:2:-;487:4;510:9;:22;520:11;510:22;;;;;;;;;;;:29;;;;;;;;;;;;503:36;;421:125;;;:::o;1237:120:1:-;1297:10;1087:4;1061:30;;:9;:22;1071:11;1061:22;;;;;;;;;;;;;;;;;;;;;;;;;:30;;;1052:40;;;;;;1345:5:::1;1319:9;:23;1329:12;1319:23;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;;;;;;;1237:120:::0;;:::o;491:190:0:-;589:4;612:9;:22;622:11;612:22;;;;;;;;;;;:33;;:47;646:12;612:47;;;;;;;;;;;:53;;:62;666:7;612:62;;;;;;;;;;;;605:69;;491:190;;;;;:::o;1825:722:1:-;1943:4;1922:10;1087:4;1061:30;;:9;:22;1071:11;1061:22;;;;;;;;;;;;;;;;;;;;;;;;;:30;;;1052:40;;;;;;1959:17:::1;1979:16;:23;1959:43;;2012:14;;:16;;;;;;;;;;;;;2038:25;2066:9;:25;2076:14;;2066:25;;;;;;;;;;;2038:53;;2118:6;2101:8;:14;;:23;;;;;;;;;;;;:::i;:::-;;2158:15;2134:8;:21;;:39;;;;2207:10;;;;;;;;;;;2183:34;;:8;:21;;:34;;;;2250:1;2227:8;:20;;:24;;;;2279:4;2261:8;:15;;;:22;;;;;;;;;;;;;;;;;;2299:6;2294:114;2315:12;2311:1;:16;2294:114;;;2348:49;2361:14;;2377:16;2394:1;2377:19;;;;;;;;;;;;;;2348:12;:49::i;:::-;2329:3;;;;;;;2294:114;;;;2452:10;2418:15;:31;2434:14;;2418:31;;;;;;;;;;;;:44;;;;;;;;;;;;;;;;;;2507:1;2473:18;:30;2492:10;2473:30;;;;;;;;;;;;;;;;:35;;;;;;;;;;;2526:14;;2519:21;;;;1825:722:::0;;;;;:::o;875:406:0:-;981:4;996:9;1008;:22;1018:11;1008:22;;;;;;;;;;;:33;;:47;1042:12;1008:47;;;;;;;;;;;:53;;:60;1062:5;1008:60;;;;;;;;;;;;996:72;;1078:15;1103:3;1096:4;:10;1078:28;;1116:16;1135:9;:22;1145:11;1135:22;;;;;;;;;;;:34;;;1116:53;;1198:1;1183:11;:16;1179:55;;;1222:1;1215:8;;;;;;;1179:55;1263:11;1250:10;:24;;;;;;1243:31;;;;;875:406;;;;;;:::o;348:137::-;417:4;440:9;:22;450:11;440:22;;;;;;;;;;;:38;;;433:45;;348:137;;;:::o;2663:132:1:-;2728:13;2760:9;:22;2770:11;2760:22;;;;;;;;;;;:28;;2753:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2663:132;;;:::o;781:43::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1116:115::-;1173:10;1087:4;1061:30;;:9;:22;1071:11;1061:22;;;;;;;;;;;;;;;;;;;;;;;;;:30;;;1052:40;;;;;;1220:4:::1;1195:9;:23;1205:12;1195:23;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1116:115:::0;;:::o;1364:::-;1428:4;1450:9;:22;1460:11;1450:22;;;;;;;;;;;;;;;;;;;;;;;;;1443:29;;1364:115;;;:::o;2416:656:2:-;2484:18;2516:6;2525:1;2516:10;;2512:554;2532:9;:22;2542:11;2532:22;;;;;;;;;;;:30;;:37;;;;2528:1;:41;2512:554;;;2589:19;2611:9;:22;2621:11;2611:22;;;;;;;;;;;:33;;:68;2645:9;:22;2655:11;2645:22;;;;;;;;;;;:30;;2676:1;2645:33;;;;;;;;;;;;;;;;2611:68;;;;;;;;;;;:76;;;2589:98;;2709:1;2704;:6;2701:355;;;2745:14;2729:30;;2809:9;:22;2819:11;2809:22;;;;;;;;;;;:30;;2840:1;2809:33;;;;;;;;;;;;;;;;2777:9;:22;2787:11;2777:22;;;;;;;;;;;:29;;:65;;;;2701:355;;;2896:13;2879:14;:30;2875:181;;;2944:14;2928:30;;3008:9;:22;3018:11;3008:22;;;;;;;;;;;:30;;3039:1;3008:33;;;;;;;;;;;;;;;;2976:9;:22;2986:11;2976:22;;;;;;;;;;;:29;;:65;;;;2875:181;2701:355;2512:554;2571:3;;;;;;;2512:554;;;;2416:656;;:::o;365:135:4:-;429:4;452:9;:22;462:11;452:22;;;;;;;;;;;:29;;:41;482:10;452:41;;;;;;;;;;;;;;;;;;;;;;;;;445:48;;365:135;;;:::o;279:20:5:-;;;;;;;;;;;;:::o;257:158:2:-;313:10;1087:4:1;1061:30;;:9;:22;1071:11;1061:22;;;;;;;;;;;;;;;;;;;;;;;;;:30;;;1052:40;;;;;;367:5:2::1;335:9;:22;345:11;335:22;;;;;;;;;;;:29;;;:37;;;;;;;;;;;;;;;;;;382:26;396:11;382:13;:26::i;:::-;257:158:::0;;:::o;579:388:4:-;666:11;286:28;302:11;286:15;:28::i;:::-;285:29;276:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;739:6:::1;;:13;;697:9;:22;707:11;697:22;;;;;;;;;;;:38;;;:55;689:107;;;;;;;;;;;;:::i;:::-;;;;;;;;;811:6;806:124;827:9;:22;837:11;827:22;;;;;;;;;;;:38;;;823:1;:42;806:124;;;885:34;893:11;906:1;909:6;;916:1;909:9;;;;;;;;;;;;;885:7;:34::i;:::-;867:3;;;;;;;806:124;;;;939:21;948:11;939:8;:21::i;:::-;579:388:::0;;;;:::o;1584:203:2:-;1662:6;1657:124;1678:9;:22;1688:11;1678:22;;;;;;;;;;;:38;;;1674:1;:42;1657:124;;;1736:34;1755:11;1768:1;1736:18;:34::i;:::-;1718:3;;;;;;;1657:124;;;;1584:203;:::o;2801:177:1:-;2887:13;2919:9;:22;2929:11;2919:22;;;;;;;;;;;:33;;:47;2953:12;2919:47;;;;;;;;;;;:52;;2912:59;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2801:177;;;;:::o;993:136:2:-;1061:13;1092:9;:22;1102:11;1092:22;;;;;;;;;;;:30;;1085:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;993:136;;;:::o;1723:96:1:-;1775:4;1798:14;;1791:21;;1723:96;:::o;1135:443:2:-;1193:41;1222:11;1193:28;:41::i;:::-;1245:37;1270:11;1245:24;:37::i;:::-;1293:36;1317:11;1293:23;:36::i;:::-;1382:1;1342:9;:22;1352:11;1342:22;;;;;;;;;;;:30;;:37;;;;:41;1339:233;;;1398:36;1422:11;1398:23;:36::i;:::-;1339:233;;;1528:9;:22;1538:11;1528:22;;;;;;;;;;;:30;;1559:1;1528:33;;;;;;;;;;;;;;;;1496:9;:22;1506:11;1496:22;;;;;;;;;;;:29;;:65;;;;1339:233;1135:443;:::o;1793:617::-;1862:15;1895:6;1891:513;1911:9;:22;1921:11;1911:22;;;;;;;;;;;:38;;;1907:1;:42;1891:513;;;1986:9;:22;1996:11;1986:22;;;;;;;;;;;:33;;:36;2020:1;1986:36;;;;;;;;;;;:48;;;1972:10;:62;1969:425;;;2053:9;:22;2063:11;2053:22;;;;;;;;;;;:30;;2089:1;2053:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1969:425;;;2140:9;:22;2150:11;2140:22;;;;;;;;;;;:33;;:36;2174:1;2140:36;;;;;;;;;;;:48;;;2127:10;:61;2124:270;;;2214:9;:22;2224:11;2214:22;;;;;;;;;;;:30;;;2207:37;;;;:::i;:::-;2275:9;:22;2285:11;2275:22;;;;;;;;;;;:33;;:36;2309:1;2275:36;;;;;;;;;;;:48;;;2262:61;;2341:9;:22;2351:11;2341:22;;;;;;;;;;;:30;;2377:1;2341:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2124:270;1969:425;1951:3;;;;;;;1891:513;;;;1793:617;;:::o;185:157:0:-;270:9;:22;280:11;270:22;;;;;;;;;;;:33;;:47;304:12;270:47;;;;;;;;;;;:53;;:62;324:7;270:62;;;;;;;;;;;;:65;;;;;;;;;;;;;185:157;;;:::o;1287:738::-;1411:1;1373:9;:22;1383:11;1373:22;;;;;;;;;;;:34;;;:39;1369:650;;;1490:1;1428:9;:22;1438:11;1428:22;;;;;;;;;;;:33;;:47;1462:12;1428:47;;;;;;;;;;;:59;;:63;;;;1369:650;;;1535:6;1544:1;1535:10;;1530:479;1606:2;1547:9;:22;1557:11;1547:22;;;;;;;;;;;:33;;:47;1581:12;1547:47;;;;;;;;;;;:55;;;:61;1530:479;;1748:4;:30;;;1779:11;1792:12;1806:1;1748:60;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1690:9;:22;1700:11;1690:22;;;;;;;;;;;:33;;:47;1724:12;1690:47;;;;;;;;;;;:55;;;:118;1632:9;:22;1642:11;1632:22;;;;;;;;;;;:33;;:47;1666:12;1632:47;;;;;;;;;;;:55;;:176;;;;1888:2;1829:9;:22;1839:11;1829:22;;;;;;;;;;;:33;;:47;1863:12;1829:47;;;;;;;;;;;:55;;;:61;1826:169;;1975:1;1913:9;:22;1923:11;1913:22;;;;;;;;;;;:33;;:47;1947:12;1913:47;;;;;;;;;;;:59;;:63;;;;1826:169;1610:3;;;;;;;;1530:479;;;;1369:650;1287:738;;:::o;685:146:2:-;782:4;738:9;:22;748:11;738:22;;;;;;;;;;;:29;;:41;768:10;738:41;;;;;;;;;;;;;;;;:48;;;;;;;;;;;;;;;;;;796:28;812:11;796:15;:28::i;:::-;685:146;:::o;552:127::-;620:4;643:9;:22;653:11;643:22;;;;;;;;;;;:29;;;636:36;;552:127;;;:::o;837:150::-;920:4;942:9;:22;952:11;942:22;;;;;;;;;;;:30;;973:6;942:38;;;;;;;;;;;;;;;;935:45;;837:150;;;;:::o;687:182:0:-;780:4;803:9;:22;813:11;803:22;;;;;;;;;;;:33;;:47;837:12;803:47;;;;;;;;;;;:59;;;796:66;;687:182;;;;:::o;907:188:5:-;711:5;;;;;;;;;;697:19;;:10;:19;;;689:28;;;;;;1007:1:::1;987:22;;:8;:22;;;;979:31;;;::::0;::::1;;1053:8;1025:37;;1046:5;::::0;::::1;;;;;;;;1025:37;;;;;;;;;;;;1080:8;1072:5;::::0;:16:::1;;;;;;;;;;;;;;;;;;907:188:::0;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;5:130::-;;85:6;72:20;63:29;;97:33;124:5;97:33;:::i;:::-;57:78;;;;:::o;159:708::-;;286:3;279:4;271:6;267:17;263:27;253:2;;304:1;301;294:12;253:2;341:6;328:20;363:90;378:74;445:6;378:74;:::i;:::-;363:90;:::i;:::-;354:99;;470:5;495:6;488:5;481:21;525:4;517:6;513:17;503:27;;547:4;542:3;538:14;531:21;;600:6;633:1;618:243;643:6;640:1;637:13;618:243;;;726:3;713:17;705:6;701:30;750:47;793:3;781:10;750:47;:::i;:::-;745:3;738:60;821:4;816:3;812:14;805:21;;849:4;844:3;840:14;833:21;;675:186;665:1;662;658:9;653:14;;618:243;;;622:14;246:621;;;;;;;:::o;893:352::-;;;1023:3;1016:4;1008:6;1004:17;1000:27;990:2;;1041:1;1038;1031:12;990:2;1074:6;1061:20;1051:30;;1101:18;1093:6;1090:30;1087:2;;;1133:1;1130;1123:12;1087:2;1167:4;1159:6;1155:17;1143:29;;1218:3;1210:4;1202:6;1198:17;1188:8;1184:32;1181:41;1178:2;;;1235:1;1232;1225:12;1178:2;983:262;;;;;:::o;1254:442::-;;1356:3;1349:4;1341:6;1337:17;1333:27;1323:2;;1374:1;1371;1364:12;1323:2;1411:6;1398:20;1433:65;1448:49;1490:6;1448:49;:::i;:::-;1433:65;:::i;:::-;1424:74;;1518:6;1511:5;1504:21;1554:4;1546:6;1542:17;1587:4;1580:5;1576:16;1622:3;1613:6;1608:3;1604:16;1601:25;1598:2;;;1639:1;1636;1629:12;1598:2;1649:41;1683:6;1678:3;1673;1649:41;:::i;:::-;1316:380;;;;;;;:::o;1704:130::-;;1784:6;1771:20;1762:29;;1796:33;1823:5;1796:33;:::i;:::-;1756:78;;;;:::o;1841:134::-;;1925:6;1919:13;1910:22;;1937:33;1964:5;1937:33;:::i;:::-;1904:71;;;;:::o;1982:241::-;;2086:2;2074:9;2065:7;2061:23;2057:32;2054:2;;;2102:1;2099;2092:12;2054:2;2137:1;2154:53;2199:7;2190:6;2179:9;2175:22;2154:53;:::i;:::-;2144:63;;2116:97;2048:175;;;;:::o;2230:628::-;;;2396:2;2384:9;2375:7;2371:23;2367:32;2364:2;;;2412:1;2409;2402:12;2364:2;2475:1;2464:9;2460:17;2447:31;2498:18;2490:6;2487:30;2484:2;;;2530:1;2527;2520:12;2484:2;2550:63;2605:7;2596:6;2585:9;2581:22;2550:63;:::i;:::-;2540:73;;2426:193;2678:2;2667:9;2663:18;2650:32;2702:18;2694:6;2691:30;2688:2;;;2734:1;2731;2724:12;2688:2;2754:88;2834:7;2825:6;2814:9;2810:22;2754:88;:::i;:::-;2744:98;;2629:219;2358:500;;;;;:::o;2865:241::-;;2969:2;2957:9;2948:7;2944:23;2940:32;2937:2;;;2985:1;2982;2975:12;2937:2;3020:1;3037:53;3082:7;3073:6;3062:9;3058:22;3037:53;:::i;:::-;3027:63;;2999:97;2931:175;;;;:::o;3113:263::-;;3228:2;3216:9;3207:7;3203:23;3199:32;3196:2;;;3244:1;3241;3234:12;3196:2;3279:1;3296:64;3352:7;3343:6;3332:9;3328:22;3296:64;:::i;:::-;3286:74;;3258:108;3190:186;;;;:::o;3383:522::-;;;;3539:2;3527:9;3518:7;3514:23;3510:32;3507:2;;;3555:1;3552;3545:12;3507:2;3590:1;3607:53;3652:7;3643:6;3632:9;3628:22;3607:53;:::i;:::-;3597:63;;3569:97;3725:2;3714:9;3710:18;3697:32;3749:18;3741:6;3738:30;3735:2;;;3781:1;3778;3771:12;3735:2;3809:80;3881:7;3872:6;3861:9;3857:22;3809:80;:::i;:::-;3791:98;;;;3676:219;3501:404;;;;;:::o;3912:472::-;;;4043:2;4031:9;4022:7;4018:23;4014:32;4011:2;;;4059:1;4056;4049:12;4011:2;4094:1;4111:53;4156:7;4147:6;4136:9;4132:22;4111:53;:::i;:::-;4101:63;;4073:97;4229:2;4218:9;4214:18;4201:32;4253:18;4245:6;4242:30;4239:2;;;4285:1;4282;4275:12;4239:2;4305:63;4360:7;4351:6;4340:9;4336:22;4305:63;:::i;:::-;4295:73;;4180:194;4005:379;;;;;:::o;4391:366::-;;;4512:2;4500:9;4491:7;4487:23;4483:32;4480:2;;;4528:1;4525;4518:12;4480:2;4563:1;4580:53;4625:7;4616:6;4605:9;4601:22;4580:53;:::i;:::-;4570:63;;4542:97;4670:2;4688:53;4733:7;4724:6;4713:9;4709:22;4688:53;:::i;:::-;4678:63;;4649:98;4474:283;;;;;:::o;4764:491::-;;;;4902:2;4890:9;4881:7;4877:23;4873:32;4870:2;;;4918:1;4915;4908:12;4870:2;4953:1;4970:53;5015:7;5006:6;4995:9;4991:22;4970:53;:::i;:::-;4960:63;;4932:97;5060:2;5078:53;5123:7;5114:6;5103:9;5099:22;5078:53;:::i;:::-;5068:63;;5039:98;5168:2;5186:53;5231:7;5222:6;5211:9;5207:22;5186:53;:::i;:::-;5176:63;;5147:98;4864:391;;;;;:::o;5263:173::-;;5350:46;5392:3;5384:6;5350:46;:::i;:::-;5425:4;5420:3;5416:14;5402:28;;5343:93;;;;:::o;5444:113::-;5527:24;5545:5;5527:24;:::i;:::-;5522:3;5515:37;5509:48;;:::o;5595:690::-;;5740:54;5788:5;5740:54;:::i;:::-;5807:86;5886:6;5881:3;5807:86;:::i;:::-;5800:93;;5914:56;5964:5;5914:56;:::i;:::-;5990:7;6018:1;6003:260;6028:6;6025:1;6022:13;6003:260;;;6095:6;6089:13;6116:63;6175:3;6160:13;6116:63;:::i;:::-;6109:70;;6196:60;6249:6;6196:60;:::i;:::-;6186:70;;6060:203;6050:1;6047;6043:9;6038:14;;6003:260;;;6007:14;6276:3;6269:10;;5719:566;;;;;;;:::o;6293:104::-;6370:21;6385:5;6370:21;:::i;:::-;6365:3;6358:34;6352:45;;:::o;6404:347::-;;6516:39;6549:5;6516:39;:::i;:::-;6567:71;6631:6;6626:3;6567:71;:::i;:::-;6560:78;;6643:52;6688:6;6683:3;6676:4;6669:5;6665:16;6643:52;:::i;:::-;6716:29;6738:6;6716:29;:::i;:::-;6711:3;6707:39;6700:46;;6496:255;;;;;:::o;6759:322::-;;6919:67;6983:2;6978:3;6919:67;:::i;:::-;6912:74;;7019:24;7015:1;7010:3;7006:11;6999:45;7072:2;7067:3;7063:12;7056:19;;6905:176;;;:::o;7090:376::-;;7250:67;7314:2;7309:3;7250:67;:::i;:::-;7243:74;;7350:34;7346:1;7341:3;7337:11;7330:55;7419:9;7414:2;7409:3;7405:12;7398:31;7457:2;7452:3;7448:12;7441:19;;7236:230;;;:::o;7474:103::-;7547:24;7565:5;7547:24;:::i;:::-;7542:3;7535:37;7529:48;;:::o;7584:113::-;7667:24;7685:5;7667:24;:::i;:::-;7662:3;7655:37;7649:48;;:::o;7704:222::-;;7831:2;7820:9;7816:18;7808:26;;7845:71;7913:1;7902:9;7898:17;7889:6;7845:71;:::i;:::-;7802:124;;;;:::o;7933:370::-;;8110:2;8099:9;8095:18;8087:26;;8160:9;8154:4;8150:20;8146:1;8135:9;8131:17;8124:47;8185:108;8288:4;8279:6;8185:108;:::i;:::-;8177:116;;8081:222;;;;:::o;8310:210::-;;8431:2;8420:9;8416:18;8408:26;;8445:65;8507:1;8496:9;8492:17;8483:6;8445:65;:::i;:::-;8402:118;;;;:::o;8527:310::-;;8674:2;8663:9;8659:18;8651:26;;8724:9;8718:4;8714:20;8710:1;8699:9;8695:17;8688:47;8749:78;8822:4;8813:6;8749:78;:::i;:::-;8741:86;;8645:192;;;;:::o;8844:968::-;;9153:3;9142:9;9138:19;9130:27;;9204:9;9198:4;9194:20;9190:1;9179:9;9175:17;9168:47;9229:78;9302:4;9293:6;9229:78;:::i;:::-;9221:86;;9318:72;9386:2;9375:9;9371:18;9362:6;9318:72;:::i;:::-;9401;9469:2;9458:9;9454:18;9445:6;9401:72;:::i;:::-;9484;9552:2;9541:9;9537:18;9528:6;9484:72;:::i;:::-;9567:67;9629:3;9618:9;9614:19;9605:6;9567:67;:::i;:::-;9645:73;9713:3;9702:9;9698:19;9689:6;9645:73;:::i;:::-;9729;9797:3;9786:9;9782:19;9773:6;9729:73;:::i;:::-;9124:688;;;;;;;;;;:::o;9819:416::-;;10019:2;10008:9;10004:18;9996:26;;10069:9;10063:4;10059:20;10055:1;10044:9;10040:17;10033:47;10094:131;10220:4;10094:131;:::i;:::-;10086:139;;9990:245;;;:::o;10242:416::-;;10442:2;10431:9;10427:18;10419:26;;10492:9;10486:4;10482:20;10478:1;10467:9;10463:17;10456:47;10517:131;10643:4;10517:131;:::i;:::-;10509:139;;10413:245;;;:::o;10665:222::-;;10792:2;10781:9;10777:18;10769:26;;10806:71;10874:1;10863:9;10859:17;10850:6;10806:71;:::i;:::-;10763:124;;;;:::o;10894:444::-;;11077:2;11066:9;11062:18;11054:26;;11091:71;11159:1;11148:9;11144:17;11135:6;11091:71;:::i;:::-;11173:72;11241:2;11230:9;11226:18;11217:6;11173:72;:::i;:::-;11256;11324:2;11313:9;11309:18;11300:6;11256:72;:::i;:::-;11048:290;;;;;;:::o;11345:256::-;;11407:2;11401:9;11391:19;;11445:4;11437:6;11433:17;11544:6;11532:10;11529:22;11508:18;11496:10;11493:34;11490:62;11487:2;;;11565:1;11562;11555:12;11487:2;11585:10;11581:2;11574:22;11385:216;;;;:::o;11608:314::-;;11777:18;11769:6;11766:30;11763:2;;;11809:1;11806;11799:12;11763:2;11844:4;11836:6;11832:17;11824:25;;11907:4;11901;11897:15;11889:23;;11700:222;;;:::o;11929:322::-;;12073:18;12065:6;12062:30;12059:2;;;12105:1;12102;12095:12;12059:2;12172:4;12168:9;12161:4;12153:6;12149:17;12145:33;12137:41;;12236:4;12230;12226:15;12218:23;;11996:255;;;:::o;12258:151::-;;12344:3;12336:11;;12382:4;12377:3;12373:14;12365:22;;12330:79;;;:::o;12416:137::-;;12525:5;12519:12;12509:22;;12490:63;;;:::o;12560:122::-;;12654:5;12648:12;12638:22;;12619:63;;;:::o;12689:108::-;;12787:4;12782:3;12778:14;12770:22;;12764:33;;;:::o;12805:178::-;;12935:6;12930:3;12923:19;12972:4;12967:3;12963:14;12948:29;;12916:67;;;;:::o;12992:163::-;;13107:6;13102:3;13095:19;13144:4;13139:3;13135:14;13120:29;;13088:67;;;;:::o;13163:91::-;;13225:24;13243:5;13225:24;:::i;:::-;13214:35;;13208:46;;;:::o;13261:85::-;;13334:5;13327:13;13320:21;13309:32;;13303:43;;;:::o;13353:121::-;;13426:42;13419:5;13415:54;13404:65;;13398:76;;;:::o;13481:72::-;;13543:5;13532:16;;13526:27;;;:::o;13561:145::-;13642:6;13637:3;13632;13619:30;13698:1;13689:6;13684:3;13680:16;13673:27;13612:94;;;:::o;13715:268::-;13780:1;13787:101;13801:6;13798:1;13795:13;13787:101;;;13877:1;13872:3;13868:11;13862:18;13858:1;13853:3;13849:11;13842:39;13823:2;13820:1;13816:10;13811:15;;13787:101;;;13903:6;13900:1;13897:13;13894:2;;;13968:1;13959:6;13954:3;13950:16;13943:27;13894:2;13764:219;;;;:::o;13991:97::-;;14079:2;14075:7;14070:2;14063:5;14059:14;14055:28;14045:38;;14039:49;;;:::o;14096:117::-;14165:24;14183:5;14165:24;:::i;:::-;14158:5;14155:35;14145:2;;14204:1;14201;14194:12;14145:2;14139:74;:::o;14220:117::-;14289:24;14307:5;14289:24;:::i;:::-;14282:5;14279:35;14269:2;;14328:1;14325;14318:12;14269:2;14263:74;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >= 0.7.0 < 0.8.0;\npragma experimental ABIEncoderV2;\n\nimport \"./CandidateHelper.sol\";\nimport \"./ElectionHelper.sol\";\n\n\ncontract VoteHelper is CandidateHelper, ElectionHelper {\n    modifier hasNotVoted(uint _electionId) {\n        require (!hasAlreadyVoted(_electionId), \"User has already voted\");\n        _;\n    }\n\n    function hasAlreadyVoted(uint _electionId) public view returns (bool) {\n        return elections[_electionId].voters[msg.sender];\n    }\n\n    /**\n     * Gives one note to each candidates of the election\n     */\n    function voteToElection(uint _electionId, uint[] calldata _notes) external hasNotVoted(_electionId) {\n        require(elections[_electionId].candidatesCount == _notes.length, \"Not same amount of candidates and votes\");\n        for (uint i = 0; i < elections[_electionId].candidatesCount; i++){\n            addNote(_electionId, i, _notes[i]);\n        }\n        addVoter(_electionId);\n    }\n\n}",
  "sourcePath": "C:/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/VoteHelper.sol",
  "ast": {
    "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/VoteHelper.sol",
    "exportedSymbols": {
      "VoteHelper": [
        986
      ]
    },
    "id": 987,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 897,
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
        "id": 898,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "66:33:4"
      },
      {
        "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/CandidateHelper.sol",
        "file": "./CandidateHelper.sol",
        "id": 899,
        "nodeType": "ImportDirective",
        "scope": 987,
        "sourceUnit": 218,
        "src": "101:31:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol",
        "file": "./ElectionHelper.sol",
        "id": 900,
        "nodeType": "ImportDirective",
        "scope": 987,
        "sourceUnit": 863,
        "src": "133:30:4",
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
              "id": 901,
              "name": "CandidateHelper",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 217,
              "src": "189:15:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_CandidateHelper_$217",
                "typeString": "contract CandidateHelper"
              }
            },
            "id": 902,
            "nodeType": "InheritanceSpecifier",
            "src": "189:15:4"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 903,
              "name": "ElectionHelper",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 862,
              "src": "206:14:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ElectionHelper_$862",
                "typeString": "contract ElectionHelper"
              }
            },
            "id": 904,
            "nodeType": "InheritanceSpecifier",
            "src": "206:14:4"
          }
        ],
        "contractDependencies": [
          217,
          522,
          862,
          1047
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 986,
        "linearizedBaseContracts": [
          986,
          862,
          217,
          522,
          1047
        ],
        "name": "VoteHelper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 917,
              "nodeType": "Block",
              "src": "266:93:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 912,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "285:29:4",
                        "subExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 910,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 906,
                              "src": "302:11:4",
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
                            "id": 909,
                            "name": "hasAlreadyVoted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 934,
                            "src": "286:15:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (uint256) view returns (bool)"
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
                          "src": "286:28:4",
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
                        "id": 913,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "316:24:4",
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
                      "id": 908,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "276:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 914,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "276:65:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 915,
                  "nodeType": "ExpressionStatement",
                  "src": "276:65:4"
                },
                {
                  "id": 916,
                  "nodeType": "PlaceholderStatement",
                  "src": "351:1:4"
                }
              ]
            },
            "documentation": null,
            "id": 918,
            "name": "hasNotVoted",
            "nodeType": "ModifierDefinition",
            "overrides": null,
            "parameters": {
              "id": 907,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 906,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 918,
                  "src": "248:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 905,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "248:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "247:18:4"
            },
            "src": "227:132:4",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 933,
              "nodeType": "Block",
              "src": "435:65:4",
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
                          "id": 925,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 283,
                          "src": "452:9:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 927,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 926,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "462:11:4",
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
                        "src": "452:22:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$266_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 928,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "voters",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 260,
                      "src": "452:29:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 931,
                    "indexExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 929,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "482:3:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 930,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "482:10:4",
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
                    "src": "452:41:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 924,
                  "id": 932,
                  "nodeType": "Return",
                  "src": "445:48:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "7fa67b13",
            "id": 934,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "hasAlreadyVoted",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 921,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 920,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 934,
                  "src": "390:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 919,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "390:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "389:18:4"
            },
            "returnParameters": {
              "id": 924,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 923,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 934,
                  "src": "429:4:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 922,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "429:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "428:6:4"
            },
            "scope": 986,
            "src": "365:135:4",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 984,
              "nodeType": "Block",
              "src": "679:288:4",
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
                        "id": 953,
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
                              "id": 947,
                              "name": "elections",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 283,
                              "src": "697:9:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                                "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                              }
                            },
                            "id": 949,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 948,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 937,
                              "src": "707:11:4",
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
                            "src": "697:22:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Election_$266_storage",
                              "typeString": "struct ElectionFactory.Election storage ref"
                            }
                          },
                          "id": 950,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "candidatesCount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 252,
                          "src": "697:38:4",
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
                            "id": 951,
                            "name": "_notes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 940,
                            "src": "739:6:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                              "typeString": "uint256[] calldata"
                            }
                          },
                          "id": 952,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "739:13:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "697:55:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4e6f742073616d6520616d6f756e74206f662063616e6469646174657320616e6420766f746573",
                        "id": 954,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "754:41:4",
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
                      "id": 946,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "689:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 955,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "689:107:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 956,
                  "nodeType": "ExpressionStatement",
                  "src": "689:107:4"
                },
                {
                  "body": {
                    "id": 978,
                    "nodeType": "Block",
                    "src": "871:59:4",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 971,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 937,
                              "src": "893:11:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 972,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 958,
                              "src": "906:1:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 973,
                                "name": "_notes",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 940,
                                "src": "909:6:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                  "typeString": "uint256[] calldata"
                                }
                              },
                              "id": 975,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 974,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 958,
                                "src": "916:1:4",
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
                              "src": "909:9:4",
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
                            "id": 970,
                            "name": "addNote",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26,
                            "src": "885:7:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256)"
                            }
                          },
                          "id": 976,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "885:34:4",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 977,
                        "nodeType": "ExpressionStatement",
                        "src": "885:34:4"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 966,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 961,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 958,
                      "src": "823:1:4",
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
                          "id": 962,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 283,
                          "src": "827:9:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 964,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 963,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 937,
                          "src": "837:11:4",
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
                        "src": "827:22:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$266_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 965,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "candidatesCount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 252,
                      "src": "827:38:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "823:42:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 979,
                  "initializationExpression": {
                    "assignments": [
                      958
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 958,
                        "mutability": "mutable",
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 979,
                        "src": "811:6:4",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 957,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "811:4:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 960,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 959,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "820:1:4",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "811:10:4"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 968,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "867:3:4",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 967,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 958,
                        "src": "867:1:4",
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
                    "id": 969,
                    "nodeType": "ExpressionStatement",
                    "src": "867:3:4"
                  },
                  "nodeType": "ForStatement",
                  "src": "806:124:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 981,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 937,
                        "src": "948:11:4",
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
                      "id": 980,
                      "name": "addVoter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 599,
                      "src": "939:8:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 982,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "939:21:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 983,
                  "nodeType": "ExpressionStatement",
                  "src": "939:21:4"
                }
              ]
            },
            "documentation": {
              "id": 935,
              "nodeType": "StructuredDocumentation",
              "src": "506:68:4",
              "text": " Gives one note to each candidates of the election"
            },
            "functionSelector": "a0b17848",
            "id": 985,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 943,
                    "name": "_electionId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 937,
                    "src": "666:11:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 944,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 942,
                  "name": "hasNotVoted",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 918,
                  "src": "654:11:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "654:24:4"
              }
            ],
            "name": "voteToElection",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 941,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 937,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 985,
                  "src": "603:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 936,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "603:4:4",
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
                  "id": 940,
                  "mutability": "mutable",
                  "name": "_notes",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 985,
                  "src": "621:22:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 938,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "621:4:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 939,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "621:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "602:42:4"
            },
            "returnParameters": {
              "id": 945,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "679:0:4"
            },
            "scope": 986,
            "src": "579:388:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 987,
        "src": "166:804:4"
      }
    ],
    "src": "32:938:4"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/VoteHelper.sol",
      "exportedSymbols": {
        "VoteHelper": [
          986
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
        "id": 897,
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
        "id": 898,
        "name": "PragmaDirective",
        "src": "66:33:4"
      },
      {
        "attributes": {
          "SourceUnit": 218,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/CandidateHelper.sol",
          "file": "./CandidateHelper.sol",
          "scope": 987,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 899,
        "name": "ImportDirective",
        "src": "101:31:4"
      },
      {
        "attributes": {
          "SourceUnit": 863,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol",
          "file": "./ElectionHelper.sol",
          "scope": 987,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 900,
        "name": "ImportDirective",
        "src": "133:30:4"
      },
      {
        "attributes": {
          "abstract": false,
          "contractDependencies": [
            217,
            522,
            862,
            1047
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            986,
            862,
            217,
            522,
            1047
          ],
          "name": "VoteHelper",
          "scope": 987
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
                  "name": "CandidateHelper",
                  "referencedDeclaration": 217,
                  "type": "contract CandidateHelper"
                },
                "id": 901,
                "name": "UserDefinedTypeName",
                "src": "189:15:4"
              }
            ],
            "id": 902,
            "name": "InheritanceSpecifier",
            "src": "189:15:4"
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
                  "referencedDeclaration": 862,
                  "type": "contract ElectionHelper"
                },
                "id": 903,
                "name": "UserDefinedTypeName",
                "src": "206:14:4"
              }
            ],
            "id": 904,
            "name": "InheritanceSpecifier",
            "src": "206:14:4"
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
                      "scope": 918,
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
                        "id": 905,
                        "name": "ElementaryTypeName",
                        "src": "248:4:4"
                      }
                    ],
                    "id": 906,
                    "name": "VariableDeclaration",
                    "src": "248:16:4"
                  }
                ],
                "id": 907,
                "name": "ParameterList",
                "src": "247:18:4"
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
                            "id": 908,
                            "name": "Identifier",
                            "src": "276:7:4"
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
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 934,
                                      "type": "function (uint256) view returns (bool)",
                                      "value": "hasAlreadyVoted"
                                    },
                                    "id": 909,
                                    "name": "Identifier",
                                    "src": "286:15:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 906,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 910,
                                    "name": "Identifier",
                                    "src": "302:11:4"
                                  }
                                ],
                                "id": 911,
                                "name": "FunctionCall",
                                "src": "286:28:4"
                              }
                            ],
                            "id": 912,
                            "name": "UnaryOperation",
                            "src": "285:29:4"
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
                            "id": 913,
                            "name": "Literal",
                            "src": "316:24:4"
                          }
                        ],
                        "id": 914,
                        "name": "FunctionCall",
                        "src": "276:65:4"
                      }
                    ],
                    "id": 915,
                    "name": "ExpressionStatement",
                    "src": "276:65:4"
                  },
                  {
                    "id": 916,
                    "name": "PlaceholderStatement",
                    "src": "351:1:4"
                  }
                ],
                "id": 917,
                "name": "Block",
                "src": "266:93:4"
              }
            ],
            "id": 918,
            "name": "ModifierDefinition",
            "src": "227:132:4"
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
              "scope": 986,
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
                      "scope": 934,
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
                        "id": 919,
                        "name": "ElementaryTypeName",
                        "src": "390:4:4"
                      }
                    ],
                    "id": 920,
                    "name": "VariableDeclaration",
                    "src": "390:16:4"
                  }
                ],
                "id": 921,
                "name": "ParameterList",
                "src": "389:18:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 934,
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
                        "id": 922,
                        "name": "ElementaryTypeName",
                        "src": "429:4:4"
                      }
                    ],
                    "id": 923,
                    "name": "VariableDeclaration",
                    "src": "429:4:4"
                  }
                ],
                "id": 924,
                "name": "ParameterList",
                "src": "428:6:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 924
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
                              "referencedDeclaration": 260,
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
                                      "referencedDeclaration": 283,
                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                      "value": "elections"
                                    },
                                    "id": 925,
                                    "name": "Identifier",
                                    "src": "452:9:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 920,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 926,
                                    "name": "Identifier",
                                    "src": "462:11:4"
                                  }
                                ],
                                "id": 927,
                                "name": "IndexAccess",
                                "src": "452:22:4"
                              }
                            ],
                            "id": 928,
                            "name": "MemberAccess",
                            "src": "452:29:4"
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
                                "id": 929,
                                "name": "Identifier",
                                "src": "482:3:4"
                              }
                            ],
                            "id": 930,
                            "name": "MemberAccess",
                            "src": "482:10:4"
                          }
                        ],
                        "id": 931,
                        "name": "IndexAccess",
                        "src": "452:41:4"
                      }
                    ],
                    "id": 932,
                    "name": "Return",
                    "src": "445:48:4"
                  }
                ],
                "id": 933,
                "name": "Block",
                "src": "435:65:4"
              }
            ],
            "id": 934,
            "name": "FunctionDefinition",
            "src": "365:135:4"
          },
          {
            "attributes": {
              "functionSelector": "a0b17848",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "voteToElection",
              "overrides": null,
              "scope": 986,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "text": " Gives one note to each candidates of the election"
                },
                "id": 935,
                "name": "StructuredDocumentation",
                "src": "506:68:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_electionId",
                      "overrides": null,
                      "scope": 985,
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
                        "id": 936,
                        "name": "ElementaryTypeName",
                        "src": "603:4:4"
                      }
                    ],
                    "id": 937,
                    "name": "VariableDeclaration",
                    "src": "603:16:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_notes",
                      "overrides": null,
                      "scope": 985,
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
                            "id": 938,
                            "name": "ElementaryTypeName",
                            "src": "621:4:4"
                          }
                        ],
                        "id": 939,
                        "name": "ArrayTypeName",
                        "src": "621:6:4"
                      }
                    ],
                    "id": 940,
                    "name": "VariableDeclaration",
                    "src": "621:22:4"
                  }
                ],
                "id": 941,
                "name": "ParameterList",
                "src": "602:42:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 945,
                "name": "ParameterList",
                "src": "679:0:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 918,
                      "type": "modifier (uint256)",
                      "value": "hasNotVoted"
                    },
                    "id": 942,
                    "name": "Identifier",
                    "src": "654:11:4"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 937,
                      "type": "uint256",
                      "value": "_electionId"
                    },
                    "id": 943,
                    "name": "Identifier",
                    "src": "666:11:4"
                  }
                ],
                "id": 944,
                "name": "ModifierInvocation",
                "src": "654:24:4"
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
                            "id": 946,
                            "name": "Identifier",
                            "src": "689:7:4"
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
                                  "referencedDeclaration": 252,
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
                                          "referencedDeclaration": 283,
                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                          "value": "elections"
                                        },
                                        "id": 947,
                                        "name": "Identifier",
                                        "src": "697:9:4"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 937,
                                          "type": "uint256",
                                          "value": "_electionId"
                                        },
                                        "id": 948,
                                        "name": "Identifier",
                                        "src": "707:11:4"
                                      }
                                    ],
                                    "id": 949,
                                    "name": "IndexAccess",
                                    "src": "697:22:4"
                                  }
                                ],
                                "id": 950,
                                "name": "MemberAccess",
                                "src": "697:38:4"
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
                                      "referencedDeclaration": 940,
                                      "type": "uint256[] calldata",
                                      "value": "_notes"
                                    },
                                    "id": 951,
                                    "name": "Identifier",
                                    "src": "739:6:4"
                                  }
                                ],
                                "id": 952,
                                "name": "MemberAccess",
                                "src": "739:13:4"
                              }
                            ],
                            "id": 953,
                            "name": "BinaryOperation",
                            "src": "697:55:4"
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
                            "id": 954,
                            "name": "Literal",
                            "src": "754:41:4"
                          }
                        ],
                        "id": 955,
                        "name": "FunctionCall",
                        "src": "689:107:4"
                      }
                    ],
                    "id": 956,
                    "name": "ExpressionStatement",
                    "src": "689:107:4"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            958
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "mutability": "mutable",
                              "name": "i",
                              "overrides": null,
                              "scope": 979,
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
                                "id": 957,
                                "name": "ElementaryTypeName",
                                "src": "811:4:4"
                              }
                            ],
                            "id": 958,
                            "name": "VariableDeclaration",
                            "src": "811:6:4"
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
                            "id": 959,
                            "name": "Literal",
                            "src": "820:1:4"
                          }
                        ],
                        "id": 960,
                        "name": "VariableDeclarationStatement",
                        "src": "811:10:4"
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
                              "referencedDeclaration": 958,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 961,
                            "name": "Identifier",
                            "src": "823:1:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "candidatesCount",
                              "referencedDeclaration": 252,
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
                                      "referencedDeclaration": 283,
                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                      "value": "elections"
                                    },
                                    "id": 962,
                                    "name": "Identifier",
                                    "src": "827:9:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 937,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 963,
                                    "name": "Identifier",
                                    "src": "837:11:4"
                                  }
                                ],
                                "id": 964,
                                "name": "IndexAccess",
                                "src": "827:22:4"
                              }
                            ],
                            "id": 965,
                            "name": "MemberAccess",
                            "src": "827:38:4"
                          }
                        ],
                        "id": 966,
                        "name": "BinaryOperation",
                        "src": "823:42:4"
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
                                  "referencedDeclaration": 958,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 967,
                                "name": "Identifier",
                                "src": "867:1:4"
                              }
                            ],
                            "id": 968,
                            "name": "UnaryOperation",
                            "src": "867:3:4"
                          }
                        ],
                        "id": 969,
                        "name": "ExpressionStatement",
                        "src": "867:3:4"
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
                                    "id": 970,
                                    "name": "Identifier",
                                    "src": "885:7:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 937,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 971,
                                    "name": "Identifier",
                                    "src": "893:11:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 958,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 972,
                                    "name": "Identifier",
                                    "src": "906:1:4"
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
                                          "referencedDeclaration": 940,
                                          "type": "uint256[] calldata",
                                          "value": "_notes"
                                        },
                                        "id": 973,
                                        "name": "Identifier",
                                        "src": "909:6:4"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 958,
                                          "type": "uint256",
                                          "value": "i"
                                        },
                                        "id": 974,
                                        "name": "Identifier",
                                        "src": "916:1:4"
                                      }
                                    ],
                                    "id": 975,
                                    "name": "IndexAccess",
                                    "src": "909:9:4"
                                  }
                                ],
                                "id": 976,
                                "name": "FunctionCall",
                                "src": "885:34:4"
                              }
                            ],
                            "id": 977,
                            "name": "ExpressionStatement",
                            "src": "885:34:4"
                          }
                        ],
                        "id": 978,
                        "name": "Block",
                        "src": "871:59:4"
                      }
                    ],
                    "id": 979,
                    "name": "ForStatement",
                    "src": "806:124:4"
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
                              "referencedDeclaration": 599,
                              "type": "function (uint256)",
                              "value": "addVoter"
                            },
                            "id": 980,
                            "name": "Identifier",
                            "src": "939:8:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 937,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 981,
                            "name": "Identifier",
                            "src": "948:11:4"
                          }
                        ],
                        "id": 982,
                        "name": "FunctionCall",
                        "src": "939:21:4"
                      }
                    ],
                    "id": 983,
                    "name": "ExpressionStatement",
                    "src": "939:21:4"
                  }
                ],
                "id": 984,
                "name": "Block",
                "src": "679:288:4"
              }
            ],
            "id": 985,
            "name": "FunctionDefinition",
            "src": "579:388:4"
          }
        ],
        "id": 986,
        "name": "ContractDefinition",
        "src": "166:804:4"
      }
    ],
    "id": 987,
    "name": "SourceUnit",
    "src": "32:938:4"
  },
  "compiler": {
    "name": "solc",
    "version": "0.7.0+commit.9e61f92b.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {
        "0x7b1e5a99cfb3a21a53448619825447934102f54788cc32f6d17de36564e30a70": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "name": "NewElection",
          "type": "event"
        },
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
      "address": "0x2AFc0b5EB51733bc372F772317819128EB2ce1A9",
      "transactionHash": "0x1d1819788a92cbc6d1ba3539b1e70b990d7088c89f7094323e79feac5c9a2387"
    }
  },
  "schemaVersion": "3.3.3",
  "updatedAt": "2021-01-20T20:15:53.199Z",
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