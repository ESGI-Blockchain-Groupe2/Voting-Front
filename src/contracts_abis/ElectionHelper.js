export const electionHelperABI = {
  "contractName": "ElectionHelper",
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
  "metadata": "{\"compiler\":{\"version\":\"0.7.0+commit.9e61f92b\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"NewElection\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"addAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_candidateName\",\"type\":\"string\"}],\"name\":\"addCandidate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_noteId\",\"type\":\"uint256\"}],\"name\":\"addNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"addVoter\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_note\",\"type\":\"uint256\"}],\"name\":\"calculatePercentageOfNote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"computeAverageNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeCandidatesAverageNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeFinalRoundWinner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeFirstRoundWinners\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeResult\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_title\",\"type\":\"string\"},{\"internalType\":\"string[]\",\"name\":\"_candidatesNames\",\"type\":\"string[]\"}],\"name\":\"createElection\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"deleteAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"elections\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"creationDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"expiresAfter\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalVoters\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"isOpen\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"candidatesCount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"winner\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"endElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"getCandidateAverageNote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"getCandidateName\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_noteId\",\"type\":\"uint256\"}],\"name\":\"getCandidateNote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getCandidatesCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionStatus\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionTitle\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionWinner\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getElectionsCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getFirstRoundWinners\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"}],\"name\":\"getOneFirstRoundWinner\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"incrementVoters\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"userAddress\",\"type\":\"address\"}],\"name\":\"isUserAdmin\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol\":\"ElectionHelper\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/CandidateHelper.sol\":{\"keccak256\":\"0xc67a51bc79ae9be0b5a5bf3d1924e0c15587bdc721af6a3258eb66cfbed29ba7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6004571363d004bb82ebde6e5792290e78a4c2140fe50743a3e43561a16afdba\",\"dweb:/ipfs/QmVtsWGv4SqFMCbqEvGMypn9AxxtRTQgjLR3hyqq4aytCX\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol\":{\"keccak256\":\"0x51e59eea6856922c630de105edb1c190025ed46e595f7653d4eb7afcb4cb1571\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bd747098772d5b3dc05df0b9ce4746cf3c31971187b615781eee9caa77c4f7ae\",\"dweb:/ipfs/QmXoBFnGLry9A2q9tXdDYj7NKGcVetmBF1jGVqgWvCuZKH\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol\":{\"keccak256\":\"0xfc34cfa9a12352071ae7129f4d760245dea0e74f79c871c7003a5a11b9b6cd90\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6ab23a3024361b183077f46c0b6b2d67ba2e601c8d34800659f918a659b47fe\",\"dweb:/ipfs/QmYzqe7sGuZ1LvGdoWURxNEMncGqpAhKHbMNEdBbZb8fiN\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol\":{\"keccak256\":\"0x7f1004825e1cc40d7b663e20d3be71ed9c64baf7f05eae9b115a4d4448c8fdcf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5d8ccf5e65c162aeabb1b5e804f7183d95be7a985d5466796025a39ede9cfa62\",\"dweb:/ipfs/QmNZR6izJaw2bC9aCAcVbtS1kE9YBWuuqoaryy8idA14ta\"]}},\"version\":1}",
  "bytecode": "0x60806040526213c680600060146101000a81548163ffffffff021916908363ffffffff16021790555034801561003457600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600560008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611e7d806100fd6000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c80639c98bcbb116100f9578063cd08bca011610097578063e62c6ac511610071578063e62c6ac51461053b578063e76f6b581461056b578063e936ed301461059b578063f2fde38b146105cb576101c4565b8063cd08bca0146104e7578063cd62d5dd14610503578063d8f7a0bb1461051f576101c4565b8063b12b1a7d116100d3578063b12b1a7d14610461578063b1bb6ec314610491578063be4d823e146104af578063cd015c32146104cb576101c4565b80639c98bcbb146103f9578063ab6cb04914610415578063b024419e14610431576101c4565b80633ee95f00116101665780637048027511610140578063704802751461037357806374d523a81461038f5780637bb1541d146103bf5780638da5cb5b146103db576101c4565b80633ee95f00146102dd5780634d94fc6a1461030d5780635e6fef011461033d576101c4565b806327e1f7df116101a257806327e1f7df14610231578063337fa1461461024d578063349813b21461027d5780633a0b35b7146102ad576101c4565b80631750a3d0146101c95780631aaa5246146101e557806324785b9e14610201575b600080fd5b6101e360048036038101906101de919061199c565b6105e7565b005b6101ff60048036038101906101fa919061194a565b61064e565b005b61021b6004803603810190610216919061194a565b610677565b6040516102289190611ba3565b60405180910390f35b61024b600480360381019061024691906118b5565b6106a4565b005b61026760048036038101906102629190611a2c565b61075e565b6040516102749190611c56565b60405180910390f35b610297600480360381019061029291906118de565b6107a5565b6040516102a49190611c56565b60405180910390f35b6102c760048036038101906102c29190611a2c565b610988565b6040516102d49190611c56565b60405180910390f35b6102f760048036038101906102f2919061194a565b610a18565b6040516103049190611c56565b60405180910390f35b6103276004803603810190610322919061194a565b610a38565b6040516103349190611bbe565b60405180910390f35b6103576004803603810190610352919061194a565b610af0565b60405161036a9796959493929190611be0565b60405180910390f35b61038d600480360381019061038891906118b5565b610bd7565b005b6103a960048036038101906103a491906118b5565b610c91565b6040516103b69190611ba3565b60405180910390f35b6103d960048036038101906103d4919061194a565b610ce7565b005b6103e3610e27565b6040516103f09190611b66565b60405180910390f35b610413600480360381019061040e919061194a565b610e4b565b005b61042f600480360381019061042a919061194a565b610ee5565b005b61044b600480360381019061044691906119f0565b610f21565b6040516104589190611bbe565b60405180910390f35b61047b6004803603810190610476919061194a565b610fee565b6040516104889190611b81565b60405180910390f35b61049961105c565b6040516104a69190611c56565b60405180910390f35b6104c960048036038101906104c4919061194a565b611066565b005b6104e560048036038101906104e0919061194a565b6110fc565b005b61050160048036038101906104fc9190611a2c565b611264565b005b61051d600480360381019061051891906119f0565b6112b4565b005b6105396004803603810190610534919061194a565b61149e565b005b6105556004803603810190610550919061194a565b611516565b6040516105629190611c56565b60405180910390f35b610585600480360381019061058091906119f0565b611536565b6040516105929190611c56565b60405180910390f35b6105b560048036038101906105b091906119f0565b61156c565b6040516105c29190611c56565b60405180910390f35b6105e560048036038101906105e091906118b5565b6115a1565b005b8060026000848152602001908152602001600020600601600060026000868152602001908152602001600020600501600081548092919060010191905055815260200190815260200160002060000190805190602001906106499291906116f0565b505050565b600260008281526020019081526020016000206003016000815480929190600101919050555050565b60006002600083815260200190815260200160002060040160009054906101000a900460ff169050919050565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151461070257600080fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600060026000858152602001908152602001600020600601600084815260200190815260200160002060010160008381526020019081526020016000205490509392505050565b60003360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151461080557600080fd5b600083519050600160008154809291906001019190505550600060026000600154815260200190815260200160002090508581600001908051906020019061084e9291906116f0565b50428160010181905550600060149054906101000a900463ffffffff1663ffffffff1681600201819055506000816003018190555060018160040160006101000a81548160ff02191690831515021790555060005b828110156108d7576108ca6001548783815181106108bd57fe5b60200260200101516105e7565b80806001019150506108a3565b503360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600154935050505092915050565b600080600260008681526020019081526020016000206006016000858152602001908152602001600020600101600084815260200190815260200160002054905060006064820290506000600260008881526020019081526020016000206003015490506000811415610a015760009350505050610a11565b808281610a0a57fe5b0493505050505b9392505050565b600060026000838152602001908152602001600020600501549050919050565b6060600260008381526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ae45780601f10610ab957610100808354040283529160200191610ae4565b820191906000526020600020905b815481529060010190602001808311610ac757829003601f168201915b50505050509050919050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b9c5780601f10610b7157610100808354040283529160200191610b9c565b820191906000526020600020905b815481529060010190602001808311610b7f57829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154908060090154905087565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610c3557600080fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b6002600084815260200190815260200160002060080180549050811015610e22576000600260008581526020019081526020016000206006016000600260008781526020019081526020016000206008018481548110610d4b57fe5b906000526020600020015481526020019081526020016000206002015490506000821415610dc157809250600260008581526020019081526020016000206008018281548110610d9757fe5b90600052602060002001546002600086815260200190815260200160002060090181905550610e14565b82811115610e1357809250600260008581526020019081526020016000206008018281548110610ded57fe5b906000526020600020015460026000868152602001908152602001600020600901819055505b5b508080600101915050610cef565b505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610ea957600080fd5b60006002600084815260200190815260200160002060040160006101000a81548160ff021916908315150217905550610ee182611066565b5050565b60005b6002600083815260200190815260200160002060050154811015610f1d57610f1082826112b4565b8080600101915050610ee8565b5050565b60606002600084815260200190815260200160002060060160008381526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610fe15780601f10610fb657610100808354040283529160200191610fe1565b820191906000526020600020905b815481529060010190602001808311610fc457829003601f168201915b5050505050905092915050565b60606002600083815260200190815260200160002060080180548060200260200160405190810160405280929190818152602001828054801561105057602002820191906000526020600020905b81548152602001906001019080831161103c575b50505050509050919050565b6000600154905090565b61106f81610ee5565b611078816110fc565b61108181610ce7565b6001600260008381526020019081526020016000206008018054905011156110b1576110ac81610ce7565b6110f9565b600260008281526020019081526020016000206008016000815481106110d357fe5b906000526020600020015460026000838152602001908152602001600020600901819055505b50565b6000805b600260008481526020019081526020016000206005015481101561125f57600260008481526020019081526020016000206006016000828152602001908152602001600020600301548214156111925760026000848152602001908152602001600020600801819080600181540180825580915050600190039060005260206000200160009091909190915055611252565b60026000848152602001908152602001600020600601600082815260200190815260200160002060030154821015611251576002600084815260200190815260200160002060080160006111e69190611770565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301549150600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150555b5b8080600101915050611100565b505050565b600260008481526020019081526020016000206006016000838152602001908152602001600020600101600082815260200190815260200160002060008154809291906001019190505550505050565b6000600260008481526020019081526020016000206003015414156113085760006002600084815260200190815260200160002060060160008381526020019081526020016000206003018190555061149a565b6000600690505b60326002600085815260200190815260200160002060060160008481526020019081526020016000206002015411611498573073ffffffffffffffffffffffffffffffffffffffff16633a0b35b78484846040518463ffffffff1660e01b815260040161137e93929190611c71565b60206040518083038186803b15801561139657600080fd5b505afa1580156113aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ce9190611973565b6002600085815260200190815260200160002060060160008481526020019081526020016000206002015401600260008581526020019081526020016000206006016000848152602001908152602001600020600201819055506032600260008581526020019081526020016000206006016000848152602001908152602001600020600201541061148a5780600260008581526020019081526020016000206006016000848152602001908152602001600020600301819055505b80806001900391505061130f565b505b5050565b60016002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506115138161064e565b50565b600060026000838152602001908152602001600020600901549050919050565b600060026000848152602001908152602001600020600801828154811061155957fe5b9060005260206000200154905092915050565b600060026000848152602001908152602001600020600601600083815260200190815260200160002060030154905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146115f957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561163357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061173157805160ff191683800117855561175f565b8280016001018555821561175f579182015b8281111561175e578251825591602001919060010190611743565b5b50905061176c9190611791565b5090565b508054600082559060005260206000209081019061178e9190611791565b50565b5b808211156117aa576000816000905550600101611792565b5090565b6000813590506117bd81611e19565b92915050565b600082601f8301126117d457600080fd5b81356117e76117e282611cd5565b611ca8565b9150818183526020840193506020810190508360005b8381101561182d57813586016118138882611837565b8452602084019350602083019250506001810190506117fd565b5050505092915050565b600082601f83011261184857600080fd5b813561185b61185682611cfd565b611ca8565b9150808252602083016020830185838301111561187757600080fd5b611882838284611dc6565b50505092915050565b60008135905061189a81611e30565b92915050565b6000815190506118af81611e30565b92915050565b6000602082840312156118c757600080fd5b60006118d5848285016117ae565b91505092915050565b600080604083850312156118f157600080fd5b600083013567ffffffffffffffff81111561190b57600080fd5b61191785828601611837565b925050602083013567ffffffffffffffff81111561193457600080fd5b611940858286016117c3565b9150509250929050565b60006020828403121561195c57600080fd5b600061196a8482850161188b565b91505092915050565b60006020828403121561198557600080fd5b6000611993848285016118a0565b91505092915050565b600080604083850312156119af57600080fd5b60006119bd8582860161188b565b925050602083013567ffffffffffffffff8111156119da57600080fd5b6119e685828601611837565b9150509250929050565b60008060408385031215611a0357600080fd5b6000611a118582860161188b565b9250506020611a228582860161188b565b9150509250929050565b600080600060608486031215611a4157600080fd5b6000611a4f8682870161188b565b9350506020611a608682870161188b565b9250506040611a718682870161188b565b9150509250925092565b6000611a878383611b48565b60208301905092915050565b611a9c81611d7e565b82525050565b6000611aad82611d39565b611ab78185611d5c565b9350611ac283611d29565b8060005b83811015611af3578151611ada8882611a7b565b9750611ae583611d4f565b925050600181019050611ac6565b5085935050505092915050565b611b0981611d90565b82525050565b6000611b1a82611d44565b611b248185611d6d565b9350611b34818560208601611dd5565b611b3d81611e08565b840191505092915050565b611b5181611dbc565b82525050565b611b6081611dbc565b82525050565b6000602082019050611b7b6000830184611a93565b92915050565b60006020820190508181036000830152611b9b8184611aa2565b905092915050565b6000602082019050611bb86000830184611b00565b92915050565b60006020820190508181036000830152611bd88184611b0f565b905092915050565b600060e0820190508181036000830152611bfa818a611b0f565b9050611c096020830189611b57565b611c166040830188611b57565b611c236060830187611b57565b611c306080830186611b00565b611c3d60a0830185611b57565b611c4a60c0830184611b57565b98975050505050505050565b6000602082019050611c6b6000830184611b57565b92915050565b6000606082019050611c866000830186611b57565b611c936020830185611b57565b611ca06040830184611b57565b949350505050565b6000604051905081810181811067ffffffffffffffff82111715611ccb57600080fd5b8060405250919050565b600067ffffffffffffffff821115611cec57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff821115611d1457600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611d8982611d9c565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611df3578082015181840152602081019050611dd8565b83811115611e02576000848401525b50505050565b6000601f19601f8301169050919050565b611e2281611d7e565b8114611e2d57600080fd5b50565b611e3981611dbc565b8114611e4457600080fd5b5056fea26469706673582212206570011c62e90bac752bd80866bb57238c8b86d0dad63b8909f9ad3347ee7bd764736f6c63430007000033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101c45760003560e01c80639c98bcbb116100f9578063cd08bca011610097578063e62c6ac511610071578063e62c6ac51461053b578063e76f6b581461056b578063e936ed301461059b578063f2fde38b146105cb576101c4565b8063cd08bca0146104e7578063cd62d5dd14610503578063d8f7a0bb1461051f576101c4565b8063b12b1a7d116100d3578063b12b1a7d14610461578063b1bb6ec314610491578063be4d823e146104af578063cd015c32146104cb576101c4565b80639c98bcbb146103f9578063ab6cb04914610415578063b024419e14610431576101c4565b80633ee95f00116101665780637048027511610140578063704802751461037357806374d523a81461038f5780637bb1541d146103bf5780638da5cb5b146103db576101c4565b80633ee95f00146102dd5780634d94fc6a1461030d5780635e6fef011461033d576101c4565b806327e1f7df116101a257806327e1f7df14610231578063337fa1461461024d578063349813b21461027d5780633a0b35b7146102ad576101c4565b80631750a3d0146101c95780631aaa5246146101e557806324785b9e14610201575b600080fd5b6101e360048036038101906101de919061199c565b6105e7565b005b6101ff60048036038101906101fa919061194a565b61064e565b005b61021b6004803603810190610216919061194a565b610677565b6040516102289190611ba3565b60405180910390f35b61024b600480360381019061024691906118b5565b6106a4565b005b61026760048036038101906102629190611a2c565b61075e565b6040516102749190611c56565b60405180910390f35b610297600480360381019061029291906118de565b6107a5565b6040516102a49190611c56565b60405180910390f35b6102c760048036038101906102c29190611a2c565b610988565b6040516102d49190611c56565b60405180910390f35b6102f760048036038101906102f2919061194a565b610a18565b6040516103049190611c56565b60405180910390f35b6103276004803603810190610322919061194a565b610a38565b6040516103349190611bbe565b60405180910390f35b6103576004803603810190610352919061194a565b610af0565b60405161036a9796959493929190611be0565b60405180910390f35b61038d600480360381019061038891906118b5565b610bd7565b005b6103a960048036038101906103a491906118b5565b610c91565b6040516103b69190611ba3565b60405180910390f35b6103d960048036038101906103d4919061194a565b610ce7565b005b6103e3610e27565b6040516103f09190611b66565b60405180910390f35b610413600480360381019061040e919061194a565b610e4b565b005b61042f600480360381019061042a919061194a565b610ee5565b005b61044b600480360381019061044691906119f0565b610f21565b6040516104589190611bbe565b60405180910390f35b61047b6004803603810190610476919061194a565b610fee565b6040516104889190611b81565b60405180910390f35b61049961105c565b6040516104a69190611c56565b60405180910390f35b6104c960048036038101906104c4919061194a565b611066565b005b6104e560048036038101906104e0919061194a565b6110fc565b005b61050160048036038101906104fc9190611a2c565b611264565b005b61051d600480360381019061051891906119f0565b6112b4565b005b6105396004803603810190610534919061194a565b61149e565b005b6105556004803603810190610550919061194a565b611516565b6040516105629190611c56565b60405180910390f35b610585600480360381019061058091906119f0565b611536565b6040516105929190611c56565b60405180910390f35b6105b560048036038101906105b091906119f0565b61156c565b6040516105c29190611c56565b60405180910390f35b6105e560048036038101906105e091906118b5565b6115a1565b005b8060026000848152602001908152602001600020600601600060026000868152602001908152602001600020600501600081548092919060010191905055815260200190815260200160002060000190805190602001906106499291906116f0565b505050565b600260008281526020019081526020016000206003016000815480929190600101919050555050565b60006002600083815260200190815260200160002060040160009054906101000a900460ff169050919050565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151461070257600080fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600060026000858152602001908152602001600020600601600084815260200190815260200160002060010160008381526020019081526020016000205490509392505050565b60003360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151461080557600080fd5b600083519050600160008154809291906001019190505550600060026000600154815260200190815260200160002090508581600001908051906020019061084e9291906116f0565b50428160010181905550600060149054906101000a900463ffffffff1663ffffffff1681600201819055506000816003018190555060018160040160006101000a81548160ff02191690831515021790555060005b828110156108d7576108ca6001548783815181106108bd57fe5b60200260200101516105e7565b80806001019150506108a3565b503360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600154935050505092915050565b600080600260008681526020019081526020016000206006016000858152602001908152602001600020600101600084815260200190815260200160002054905060006064820290506000600260008881526020019081526020016000206003015490506000811415610a015760009350505050610a11565b808281610a0a57fe5b0493505050505b9392505050565b600060026000838152602001908152602001600020600501549050919050565b6060600260008381526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ae45780601f10610ab957610100808354040283529160200191610ae4565b820191906000526020600020905b815481529060010190602001808311610ac757829003601f168201915b50505050509050919050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b9c5780601f10610b7157610100808354040283529160200191610b9c565b820191906000526020600020905b815481529060010190602001808311610b7f57829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154908060090154905087565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610c3557600080fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b6002600084815260200190815260200160002060080180549050811015610e22576000600260008581526020019081526020016000206006016000600260008781526020019081526020016000206008018481548110610d4b57fe5b906000526020600020015481526020019081526020016000206002015490506000821415610dc157809250600260008581526020019081526020016000206008018281548110610d9757fe5b90600052602060002001546002600086815260200190815260200160002060090181905550610e14565b82811115610e1357809250600260008581526020019081526020016000206008018281548110610ded57fe5b906000526020600020015460026000868152602001908152602001600020600901819055505b5b508080600101915050610cef565b505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610ea957600080fd5b60006002600084815260200190815260200160002060040160006101000a81548160ff021916908315150217905550610ee182611066565b5050565b60005b6002600083815260200190815260200160002060050154811015610f1d57610f1082826112b4565b8080600101915050610ee8565b5050565b60606002600084815260200190815260200160002060060160008381526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610fe15780601f10610fb657610100808354040283529160200191610fe1565b820191906000526020600020905b815481529060010190602001808311610fc457829003601f168201915b5050505050905092915050565b60606002600083815260200190815260200160002060080180548060200260200160405190810160405280929190818152602001828054801561105057602002820191906000526020600020905b81548152602001906001019080831161103c575b50505050509050919050565b6000600154905090565b61106f81610ee5565b611078816110fc565b61108181610ce7565b6001600260008381526020019081526020016000206008018054905011156110b1576110ac81610ce7565b6110f9565b600260008281526020019081526020016000206008016000815481106110d357fe5b906000526020600020015460026000838152602001908152602001600020600901819055505b50565b6000805b600260008481526020019081526020016000206005015481101561125f57600260008481526020019081526020016000206006016000828152602001908152602001600020600301548214156111925760026000848152602001908152602001600020600801819080600181540180825580915050600190039060005260206000200160009091909190915055611252565b60026000848152602001908152602001600020600601600082815260200190815260200160002060030154821015611251576002600084815260200190815260200160002060080160006111e69190611770565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301549150600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150555b5b8080600101915050611100565b505050565b600260008481526020019081526020016000206006016000838152602001908152602001600020600101600082815260200190815260200160002060008154809291906001019190505550505050565b6000600260008481526020019081526020016000206003015414156113085760006002600084815260200190815260200160002060060160008381526020019081526020016000206003018190555061149a565b6000600690505b60326002600085815260200190815260200160002060060160008481526020019081526020016000206002015411611498573073ffffffffffffffffffffffffffffffffffffffff16633a0b35b78484846040518463ffffffff1660e01b815260040161137e93929190611c71565b60206040518083038186803b15801561139657600080fd5b505afa1580156113aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ce9190611973565b6002600085815260200190815260200160002060060160008481526020019081526020016000206002015401600260008581526020019081526020016000206006016000848152602001908152602001600020600201819055506032600260008581526020019081526020016000206006016000848152602001908152602001600020600201541061148a5780600260008581526020019081526020016000206006016000848152602001908152602001600020600301819055505b80806001900391505061130f565b505b5050565b60016002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506115138161064e565b50565b600060026000838152602001908152602001600020600901549050919050565b600060026000848152602001908152602001600020600801828154811061155957fe5b9060005260206000200154905092915050565b600060026000848152602001908152602001600020600601600083815260200190815260200160002060030154905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146115f957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561163357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061173157805160ff191683800117855561175f565b8280016001018555821561175f579182015b8281111561175e578251825591602001919060010190611743565b5b50905061176c9190611791565b5090565b508054600082559060005260206000209081019061178e9190611791565b50565b5b808211156117aa576000816000905550600101611792565b5090565b6000813590506117bd81611e19565b92915050565b600082601f8301126117d457600080fd5b81356117e76117e282611cd5565b611ca8565b9150818183526020840193506020810190508360005b8381101561182d57813586016118138882611837565b8452602084019350602083019250506001810190506117fd565b5050505092915050565b600082601f83011261184857600080fd5b813561185b61185682611cfd565b611ca8565b9150808252602083016020830185838301111561187757600080fd5b611882838284611dc6565b50505092915050565b60008135905061189a81611e30565b92915050565b6000815190506118af81611e30565b92915050565b6000602082840312156118c757600080fd5b60006118d5848285016117ae565b91505092915050565b600080604083850312156118f157600080fd5b600083013567ffffffffffffffff81111561190b57600080fd5b61191785828601611837565b925050602083013567ffffffffffffffff81111561193457600080fd5b611940858286016117c3565b9150509250929050565b60006020828403121561195c57600080fd5b600061196a8482850161188b565b91505092915050565b60006020828403121561198557600080fd5b6000611993848285016118a0565b91505092915050565b600080604083850312156119af57600080fd5b60006119bd8582860161188b565b925050602083013567ffffffffffffffff8111156119da57600080fd5b6119e685828601611837565b9150509250929050565b60008060408385031215611a0357600080fd5b6000611a118582860161188b565b9250506020611a228582860161188b565b9150509250929050565b600080600060608486031215611a4157600080fd5b6000611a4f8682870161188b565b9350506020611a608682870161188b565b9250506040611a718682870161188b565b9150509250925092565b6000611a878383611b48565b60208301905092915050565b611a9c81611d7e565b82525050565b6000611aad82611d39565b611ab78185611d5c565b9350611ac283611d29565b8060005b83811015611af3578151611ada8882611a7b565b9750611ae583611d4f565b925050600181019050611ac6565b5085935050505092915050565b611b0981611d90565b82525050565b6000611b1a82611d44565b611b248185611d6d565b9350611b34818560208601611dd5565b611b3d81611e08565b840191505092915050565b611b5181611dbc565b82525050565b611b6081611dbc565b82525050565b6000602082019050611b7b6000830184611a93565b92915050565b60006020820190508181036000830152611b9b8184611aa2565b905092915050565b6000602082019050611bb86000830184611b00565b92915050565b60006020820190508181036000830152611bd88184611b0f565b905092915050565b600060e0820190508181036000830152611bfa818a611b0f565b9050611c096020830189611b57565b611c166040830188611b57565b611c236060830187611b57565b611c306080830186611b00565b611c3d60a0830185611b57565b611c4a60c0830184611b57565b98975050505050505050565b6000602082019050611c6b6000830184611b57565b92915050565b6000606082019050611c866000830186611b57565b611c936020830185611b57565b611ca06040830184611b57565b949350505050565b6000604051905081810181811067ffffffffffffffff82111715611ccb57600080fd5b8060405250919050565b600067ffffffffffffffff821115611cec57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff821115611d1457600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611d8982611d9c565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611df3578082015181840152602081019050611dd8565b83811115611e02576000848401525b50505050565b6000601f19601f8301169050919050565b611e2281611d7e565b8114611e2d57600080fd5b50565b611e3981611dbc565b8114611e4457600080fd5b5056fea26469706673582212206570011c62e90bac752bd80866bb57238c8b86d0dad63b8909f9ad3347ee7bd764736f6c63430007000033",
  "immutableReferences": {},
  "sourceMap": "191:2883:2:-:0;;;249:7:1;229:27;;;;;;;;;;;;;;;;;;;;191:2883:2;;;;;;;;;;552:10:5;544:5;;:18;;;;;;;;;;;;;;;;;;212:4:1;193:9;:16;203:5;;;;;;;;;;;193:16;;;;;;;;;;;;;;;;:23;;;;;;;;;;;;;;;;;;191:2883:2;;;;;;",
  "deployedSourceMap": "191:2883:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1526:191:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2553:104;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;421:125:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1237:120:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;491:190:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1825:722:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;875:406:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;348:137;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2663:132:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;781:43;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;;:::i;:::-;;;;;;;;1116:115;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1364;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2416:656:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;279:20:5;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;257:158:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1584:203;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2801:177:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;993:136:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1723:96:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1135:443:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1793:617;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;185:157:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1287:738;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;685:146:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;552:127;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;837:150;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;687:182:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;907:188:5;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1526:191:1;1696:14;1613:9;:22;1623:11;1613:22;;;;;;;;;;;:33;;:75;1647:9;:22;1657:11;1647:22;;;;;;;;;;;:38;;;:40;;;;;;;;;;;;1613:75;;;;;;;;;;;:80;;:97;;;;;;;;;;;;:::i;:::-;;1526:191;;:::o;2553:104::-;2613:9;:22;2623:11;2613:22;;;;;;;;;;;:34;;;:37;;;;;;;;;;;;;2553:104;:::o;421:125:2:-;487:4;510:9;:22;520:11;510:22;;;;;;;;;;;:29;;;;;;;;;;;;503:36;;421:125;;;:::o;1237:120:1:-;1297:10;1087:4;1061:30;;:9;:22;1071:11;1061:22;;;;;;;;;;;;;;;;;;;;;;;;;:30;;;1052:40;;;;;;1345:5:::1;1319:9;:23;1329:12;1319:23;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;;;;;;;1237:120:::0;;:::o;491:190:0:-;589:4;612:9;:22;622:11;612:22;;;;;;;;;;;:33;;:47;646:12;612:47;;;;;;;;;;;:53;;:62;666:7;612:62;;;;;;;;;;;;605:69;;491:190;;;;;:::o;1825:722:1:-;1943:4;1922:10;1087:4;1061:30;;:9;:22;1071:11;1061:22;;;;;;;;;;;;;;;;;;;;;;;;;:30;;;1052:40;;;;;;1959:17:::1;1979:16;:23;1959:43;;2012:14;;:16;;;;;;;;;;;;;2038:25;2066:9;:25;2076:14;;2066:25;;;;;;;;;;;2038:53;;2118:6;2101:8;:14;;:23;;;;;;;;;;;;:::i;:::-;;2158:15;2134:8;:21;;:39;;;;2207:10;;;;;;;;;;;2183:34;;:8;:21;;:34;;;;2250:1;2227:8;:20;;:24;;;;2279:4;2261:8;:15;;;:22;;;;;;;;;;;;;;;;;;2299:6;2294:114;2315:12;2311:1;:16;2294:114;;;2348:49;2361:14;;2377:16;2394:1;2377:19;;;;;;;;;;;;;;2348:12;:49::i;:::-;2329:3;;;;;;;2294:114;;;;2452:10;2418:15;:31;2434:14;;2418:31;;;;;;;;;;;;:44;;;;;;;;;;;;;;;;;;2507:1;2473:18;:30;2492:10;2473:30;;;;;;;;;;;;;;;;:35;;;;;;;;;;;2526:14;;2519:21;;;;1825:722:::0;;;;;:::o;875:406:0:-;981:4;996:9;1008;:22;1018:11;1008:22;;;;;;;;;;;:33;;:47;1042:12;1008:47;;;;;;;;;;;:53;;:60;1062:5;1008:60;;;;;;;;;;;;996:72;;1078:15;1103:3;1096:4;:10;1078:28;;1116:16;1135:9;:22;1145:11;1135:22;;;;;;;;;;;:34;;;1116:53;;1198:1;1183:11;:16;1179:55;;;1222:1;1215:8;;;;;;;1179:55;1263:11;1250:10;:24;;;;;;1243:31;;;;;875:406;;;;;;:::o;348:137::-;417:4;440:9;:22;450:11;440:22;;;;;;;;;;;:38;;;433:45;;348:137;;;:::o;2663:132:1:-;2728:13;2760:9;:22;2770:11;2760:22;;;;;;;;;;;:28;;2753:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2663:132;;;:::o;781:43::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1116:115::-;1173:10;1087:4;1061:30;;:9;:22;1071:11;1061:22;;;;;;;;;;;;;;;;;;;;;;;;;:30;;;1052:40;;;;;;1220:4:::1;1195:9;:23;1205:12;1195:23;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1116:115:::0;;:::o;1364:::-;1428:4;1450:9;:22;1460:11;1450:22;;;;;;;;;;;;;;;;;;;;;;;;;1443:29;;1364:115;;;:::o;2416:656:2:-;2484:18;2516:6;2525:1;2516:10;;2512:554;2532:9;:22;2542:11;2532:22;;;;;;;;;;;:30;;:37;;;;2528:1;:41;2512:554;;;2589:19;2611:9;:22;2621:11;2611:22;;;;;;;;;;;:33;;:68;2645:9;:22;2655:11;2645:22;;;;;;;;;;;:30;;2676:1;2645:33;;;;;;;;;;;;;;;;2611:68;;;;;;;;;;;:76;;;2589:98;;2709:1;2704;:6;2701:355;;;2745:14;2729:30;;2809:9;:22;2819:11;2809:22;;;;;;;;;;;:30;;2840:1;2809:33;;;;;;;;;;;;;;;;2777:9;:22;2787:11;2777:22;;;;;;;;;;;:29;;:65;;;;2701:355;;;2896:13;2879:14;:30;2875:181;;;2944:14;2928:30;;3008:9;:22;3018:11;3008:22;;;;;;;;;;;:30;;3039:1;3008:33;;;;;;;;;;;;;;;;2976:9;:22;2986:11;2976:22;;;;;;;;;;;:29;;:65;;;;2875:181;2701:355;2512:554;2571:3;;;;;;;2512:554;;;;2416:656;;:::o;279:20:5:-;;;;;;;;;;;;:::o;257:158:2:-;313:10;1087:4:1;1061:30;;:9;:22;1071:11;1061:22;;;;;;;;;;;;;;;;;;;;;;;;;:30;;;1052:40;;;;;;367:5:2::1;335:9;:22;345:11;335:22;;;;;;;;;;;:29;;;:37;;;;;;;;;;;;;;;;;;382:26;396:11;382:13;:26::i;:::-;257:158:::0;;:::o;1584:203::-;1662:6;1657:124;1678:9;:22;1688:11;1678:22;;;;;;;;;;;:38;;;1674:1;:42;1657:124;;;1736:34;1755:11;1768:1;1736:18;:34::i;:::-;1718:3;;;;;;;1657:124;;;;1584:203;:::o;2801:177:1:-;2887:13;2919:9;:22;2929:11;2919:22;;;;;;;;;;;:33;;:47;2953:12;2919:47;;;;;;;;;;;:52;;2912:59;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2801:177;;;;:::o;993:136:2:-;1061:13;1092:9;:22;1102:11;1092:22;;;;;;;;;;;:30;;1085:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;993:136;;;:::o;1723:96:1:-;1775:4;1798:14;;1791:21;;1723:96;:::o;1135:443:2:-;1193:41;1222:11;1193:28;:41::i;:::-;1245:37;1270:11;1245:24;:37::i;:::-;1293:36;1317:11;1293:23;:36::i;:::-;1382:1;1342:9;:22;1352:11;1342:22;;;;;;;;;;;:30;;:37;;;;:41;1339:233;;;1398:36;1422:11;1398:23;:36::i;:::-;1339:233;;;1528:9;:22;1538:11;1528:22;;;;;;;;;;;:30;;1559:1;1528:33;;;;;;;;;;;;;;;;1496:9;:22;1506:11;1496:22;;;;;;;;;;;:29;;:65;;;;1339:233;1135:443;:::o;1793:617::-;1862:15;1895:6;1891:513;1911:9;:22;1921:11;1911:22;;;;;;;;;;;:38;;;1907:1;:42;1891:513;;;1986:9;:22;1996:11;1986:22;;;;;;;;;;;:33;;:36;2020:1;1986:36;;;;;;;;;;;:48;;;1972:10;:62;1969:425;;;2053:9;:22;2063:11;2053:22;;;;;;;;;;;:30;;2089:1;2053:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1969:425;;;2140:9;:22;2150:11;2140:22;;;;;;;;;;;:33;;:36;2174:1;2140:36;;;;;;;;;;;:48;;;2127:10;:61;2124:270;;;2214:9;:22;2224:11;2214:22;;;;;;;;;;;:30;;;2207:37;;;;:::i;:::-;2275:9;:22;2285:11;2275:22;;;;;;;;;;;:33;;:36;2309:1;2275:36;;;;;;;;;;;:48;;;2262:61;;2341:9;:22;2351:11;2341:22;;;;;;;;;;;:30;;2377:1;2341:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2124:270;1969:425;1951:3;;;;;;;1891:513;;;;1793:617;;:::o;185:157:0:-;270:9;:22;280:11;270:22;;;;;;;;;;;:33;;:47;304:12;270:47;;;;;;;;;;;:53;;:62;324:7;270:62;;;;;;;;;;;;:65;;;;;;;;;;;;;185:157;;;:::o;1287:738::-;1411:1;1373:9;:22;1383:11;1373:22;;;;;;;;;;;:34;;;:39;1369:650;;;1490:1;1428:9;:22;1438:11;1428:22;;;;;;;;;;;:33;;:47;1462:12;1428:47;;;;;;;;;;;:59;;:63;;;;1369:650;;;1535:6;1544:1;1535:10;;1530:479;1606:2;1547:9;:22;1557:11;1547:22;;;;;;;;;;;:33;;:47;1581:12;1547:47;;;;;;;;;;;:55;;;:61;1530:479;;1748:4;:30;;;1779:11;1792:12;1806:1;1748:60;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1690:9;:22;1700:11;1690:22;;;;;;;;;;;:33;;:47;1724:12;1690:47;;;;;;;;;;;:55;;;:118;1632:9;:22;1642:11;1632:22;;;;;;;;;;;:33;;:47;1666:12;1632:47;;;;;;;;;;;:55;;:176;;;;1888:2;1829:9;:22;1839:11;1829:22;;;;;;;;;;;:33;;:47;1863:12;1829:47;;;;;;;;;;;:55;;;:61;1826:169;;1975:1;1913:9;:22;1923:11;1913:22;;;;;;;;;;;:33;;:47;1947:12;1913:47;;;;;;;;;;;:59;;:63;;;;1826:169;1610:3;;;;;;;;1530:479;;;;1369:650;1287:738;;:::o;685:146:2:-;782:4;738:9;:22;748:11;738:22;;;;;;;;;;;:29;;:41;768:10;738:41;;;;;;;;;;;;;;;;:48;;;;;;;;;;;;;;;;;;796:28;812:11;796:15;:28::i;:::-;685:146;:::o;552:127::-;620:4;643:9;:22;653:11;643:22;;;;;;;;;;;:29;;;636:36;;552:127;;;:::o;837:150::-;920:4;942:9;:22;952:11;942:22;;;;;;;;;;;:30;;973:6;942:38;;;;;;;;;;;;;;;;935:45;;837:150;;;;:::o;687:182:0:-;780:4;803:9;:22;813:11;803:22;;;;;;;;;;;:33;;:47;837:12;803:47;;;;;;;;;;;:59;;;796:66;;687:182;;;;:::o;907:188:5:-;711:5;;;;;;;;;;697:19;;:10;:19;;;689:28;;;;;;1007:1:::1;987:22;;:8;:22;;;;979:31;;;::::0;::::1;;1053:8;1025:37;;1046:5;::::0;::::1;;;;;;;;1025:37;;;;;;;;;;;;1080:8;1072:5;::::0;:16:::1;;;;;;;;;;;;;;;;;;907:188:::0;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;5:130::-;;85:6;72:20;63:29;;97:33;124:5;97:33;:::i;:::-;57:78;;;;:::o;159:708::-;;286:3;279:4;271:6;267:17;263:27;253:2;;304:1;301;294:12;253:2;341:6;328:20;363:90;378:74;445:6;378:74;:::i;:::-;363:90;:::i;:::-;354:99;;470:5;495:6;488:5;481:21;525:4;517:6;513:17;503:27;;547:4;542:3;538:14;531:21;;600:6;633:1;618:243;643:6;640:1;637:13;618:243;;;726:3;713:17;705:6;701:30;750:47;793:3;781:10;750:47;:::i;:::-;745:3;738:60;821:4;816:3;812:14;805:21;;849:4;844:3;840:14;833:21;;675:186;665:1;662;658:9;653:14;;618:243;;;622:14;246:621;;;;;;;:::o;876:442::-;;978:3;971:4;963:6;959:17;955:27;945:2;;996:1;993;986:12;945:2;1033:6;1020:20;1055:65;1070:49;1112:6;1070:49;:::i;:::-;1055:65;:::i;:::-;1046:74;;1140:6;1133:5;1126:21;1176:4;1168:6;1164:17;1209:4;1202:5;1198:16;1244:3;1235:6;1230:3;1226:16;1223:25;1220:2;;;1261:1;1258;1251:12;1220:2;1271:41;1305:6;1300:3;1295;1271:41;:::i;:::-;938:380;;;;;;;:::o;1326:130::-;;1406:6;1393:20;1384:29;;1418:33;1445:5;1418:33;:::i;:::-;1378:78;;;;:::o;1463:134::-;;1547:6;1541:13;1532:22;;1559:33;1586:5;1559:33;:::i;:::-;1526:71;;;;:::o;1604:241::-;;1708:2;1696:9;1687:7;1683:23;1679:32;1676:2;;;1724:1;1721;1714:12;1676:2;1759:1;1776:53;1821:7;1812:6;1801:9;1797:22;1776:53;:::i;:::-;1766:63;;1738:97;1670:175;;;;:::o;1852:628::-;;;2018:2;2006:9;1997:7;1993:23;1989:32;1986:2;;;2034:1;2031;2024:12;1986:2;2097:1;2086:9;2082:17;2069:31;2120:18;2112:6;2109:30;2106:2;;;2152:1;2149;2142:12;2106:2;2172:63;2227:7;2218:6;2207:9;2203:22;2172:63;:::i;:::-;2162:73;;2048:193;2300:2;2289:9;2285:18;2272:32;2324:18;2316:6;2313:30;2310:2;;;2356:1;2353;2346:12;2310:2;2376:88;2456:7;2447:6;2436:9;2432:22;2376:88;:::i;:::-;2366:98;;2251:219;1980:500;;;;;:::o;2487:241::-;;2591:2;2579:9;2570:7;2566:23;2562:32;2559:2;;;2607:1;2604;2597:12;2559:2;2642:1;2659:53;2704:7;2695:6;2684:9;2680:22;2659:53;:::i;:::-;2649:63;;2621:97;2553:175;;;;:::o;2735:263::-;;2850:2;2838:9;2829:7;2825:23;2821:32;2818:2;;;2866:1;2863;2856:12;2818:2;2901:1;2918:64;2974:7;2965:6;2954:9;2950:22;2918:64;:::i;:::-;2908:74;;2880:108;2812:186;;;;:::o;3005:472::-;;;3136:2;3124:9;3115:7;3111:23;3107:32;3104:2;;;3152:1;3149;3142:12;3104:2;3187:1;3204:53;3249:7;3240:6;3229:9;3225:22;3204:53;:::i;:::-;3194:63;;3166:97;3322:2;3311:9;3307:18;3294:32;3346:18;3338:6;3335:30;3332:2;;;3378:1;3375;3368:12;3332:2;3398:63;3453:7;3444:6;3433:9;3429:22;3398:63;:::i;:::-;3388:73;;3273:194;3098:379;;;;;:::o;3484:366::-;;;3605:2;3593:9;3584:7;3580:23;3576:32;3573:2;;;3621:1;3618;3611:12;3573:2;3656:1;3673:53;3718:7;3709:6;3698:9;3694:22;3673:53;:::i;:::-;3663:63;;3635:97;3763:2;3781:53;3826:7;3817:6;3806:9;3802:22;3781:53;:::i;:::-;3771:63;;3742:98;3567:283;;;;;:::o;3857:491::-;;;;3995:2;3983:9;3974:7;3970:23;3966:32;3963:2;;;4011:1;4008;4001:12;3963:2;4046:1;4063:53;4108:7;4099:6;4088:9;4084:22;4063:53;:::i;:::-;4053:63;;4025:97;4153:2;4171:53;4216:7;4207:6;4196:9;4192:22;4171:53;:::i;:::-;4161:63;;4132:98;4261:2;4279:53;4324:7;4315:6;4304:9;4300:22;4279:53;:::i;:::-;4269:63;;4240:98;3957:391;;;;;:::o;4356:173::-;;4443:46;4485:3;4477:6;4443:46;:::i;:::-;4518:4;4513:3;4509:14;4495:28;;4436:93;;;;:::o;4537:113::-;4620:24;4638:5;4620:24;:::i;:::-;4615:3;4608:37;4602:48;;:::o;4688:690::-;;4833:54;4881:5;4833:54;:::i;:::-;4900:86;4979:6;4974:3;4900:86;:::i;:::-;4893:93;;5007:56;5057:5;5007:56;:::i;:::-;5083:7;5111:1;5096:260;5121:6;5118:1;5115:13;5096:260;;;5188:6;5182:13;5209:63;5268:3;5253:13;5209:63;:::i;:::-;5202:70;;5289:60;5342:6;5289:60;:::i;:::-;5279:70;;5153:203;5143:1;5140;5136:9;5131:14;;5096:260;;;5100:14;5369:3;5362:10;;4812:566;;;;;;;:::o;5386:104::-;5463:21;5478:5;5463:21;:::i;:::-;5458:3;5451:34;5445:45;;:::o;5497:347::-;;5609:39;5642:5;5609:39;:::i;:::-;5660:71;5724:6;5719:3;5660:71;:::i;:::-;5653:78;;5736:52;5781:6;5776:3;5769:4;5762:5;5758:16;5736:52;:::i;:::-;5809:29;5831:6;5809:29;:::i;:::-;5804:3;5800:39;5793:46;;5589:255;;;;;:::o;5851:103::-;5924:24;5942:5;5924:24;:::i;:::-;5919:3;5912:37;5906:48;;:::o;5961:113::-;6044:24;6062:5;6044:24;:::i;:::-;6039:3;6032:37;6026:48;;:::o;6081:222::-;;6208:2;6197:9;6193:18;6185:26;;6222:71;6290:1;6279:9;6275:17;6266:6;6222:71;:::i;:::-;6179:124;;;;:::o;6310:370::-;;6487:2;6476:9;6472:18;6464:26;;6537:9;6531:4;6527:20;6523:1;6512:9;6508:17;6501:47;6562:108;6665:4;6656:6;6562:108;:::i;:::-;6554:116;;6458:222;;;;:::o;6687:210::-;;6808:2;6797:9;6793:18;6785:26;;6822:65;6884:1;6873:9;6869:17;6860:6;6822:65;:::i;:::-;6779:118;;;;:::o;6904:310::-;;7051:2;7040:9;7036:18;7028:26;;7101:9;7095:4;7091:20;7087:1;7076:9;7072:17;7065:47;7126:78;7199:4;7190:6;7126:78;:::i;:::-;7118:86;;7022:192;;;;:::o;7221:968::-;;7530:3;7519:9;7515:19;7507:27;;7581:9;7575:4;7571:20;7567:1;7556:9;7552:17;7545:47;7606:78;7679:4;7670:6;7606:78;:::i;:::-;7598:86;;7695:72;7763:2;7752:9;7748:18;7739:6;7695:72;:::i;:::-;7778;7846:2;7835:9;7831:18;7822:6;7778:72;:::i;:::-;7861;7929:2;7918:9;7914:18;7905:6;7861:72;:::i;:::-;7944:67;8006:3;7995:9;7991:19;7982:6;7944:67;:::i;:::-;8022:73;8090:3;8079:9;8075:19;8066:6;8022:73;:::i;:::-;8106;8174:3;8163:9;8159:19;8150:6;8106:73;:::i;:::-;7501:688;;;;;;;;;;:::o;8196:222::-;;8323:2;8312:9;8308:18;8300:26;;8337:71;8405:1;8394:9;8390:17;8381:6;8337:71;:::i;:::-;8294:124;;;;:::o;8425:444::-;;8608:2;8597:9;8593:18;8585:26;;8622:71;8690:1;8679:9;8675:17;8666:6;8622:71;:::i;:::-;8704:72;8772:2;8761:9;8757:18;8748:6;8704:72;:::i;:::-;8787;8855:2;8844:9;8840:18;8831:6;8787:72;:::i;:::-;8579:290;;;;;;:::o;8876:256::-;;8938:2;8932:9;8922:19;;8976:4;8968:6;8964:17;9075:6;9063:10;9060:22;9039:18;9027:10;9024:34;9021:62;9018:2;;;9096:1;9093;9086:12;9018:2;9116:10;9112:2;9105:22;8916:216;;;;:::o;9139:314::-;;9308:18;9300:6;9297:30;9294:2;;;9340:1;9337;9330:12;9294:2;9375:4;9367:6;9363:17;9355:25;;9438:4;9432;9428:15;9420:23;;9231:222;;;:::o;9460:322::-;;9604:18;9596:6;9593:30;9590:2;;;9636:1;9633;9626:12;9590:2;9703:4;9699:9;9692:4;9684:6;9680:17;9676:33;9668:41;;9767:4;9761;9757:15;9749:23;;9527:255;;;:::o;9789:151::-;;9875:3;9867:11;;9913:4;9908:3;9904:14;9896:22;;9861:79;;;:::o;9947:137::-;;10056:5;10050:12;10040:22;;10021:63;;;:::o;10091:122::-;;10185:5;10179:12;10169:22;;10150:63;;;:::o;10220:108::-;;10318:4;10313:3;10309:14;10301:22;;10295:33;;;:::o;10336:178::-;;10466:6;10461:3;10454:19;10503:4;10498:3;10494:14;10479:29;;10447:67;;;;:::o;10523:163::-;;10638:6;10633:3;10626:19;10675:4;10670:3;10666:14;10651:29;;10619:67;;;;:::o;10694:91::-;;10756:24;10774:5;10756:24;:::i;:::-;10745:35;;10739:46;;;:::o;10792:85::-;;10865:5;10858:13;10851:21;10840:32;;10834:43;;;:::o;10884:121::-;;10957:42;10950:5;10946:54;10935:65;;10929:76;;;:::o;11012:72::-;;11074:5;11063:16;;11057:27;;;:::o;11092:145::-;11173:6;11168:3;11163;11150:30;11229:1;11220:6;11215:3;11211:16;11204:27;11143:94;;;:::o;11246:268::-;11311:1;11318:101;11332:6;11329:1;11326:13;11318:101;;;11408:1;11403:3;11399:11;11393:18;11389:1;11384:3;11380:11;11373:39;11354:2;11351:1;11347:10;11342:15;;11318:101;;;11434:6;11431:1;11428:13;11425:2;;;11499:1;11490:6;11485:3;11481:16;11474:27;11425:2;11295:219;;;;:::o;11522:97::-;;11610:2;11606:7;11601:2;11594:5;11590:14;11586:28;11576:38;;11570:49;;;:::o;11627:117::-;11696:24;11714:5;11696:24;:::i;:::-;11689:5;11686:35;11676:2;;11735:1;11732;11725:12;11676:2;11670:74;:::o;11751:117::-;11820:24;11838:5;11820:24;:::i;:::-;11813:5;11810:35;11800:2;;11859:1;11856;11849:12;11800:2;11794:74;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >= 0.7.0 < 0.8.0;\npragma experimental ABIEncoderV2;\n\nimport './CandidateHelper.sol';\nimport \"./ownable.sol\";\nimport \"./ElectionFactory.sol\";\n\n\ncontract ElectionHelper is ElectionFactory, CandidateHelper {\n    function endElection(uint _electionId) external isAdmin(msg.sender) {\n        elections[_electionId].isOpen = false;\n        computeResult(_electionId);\n    }\n\n    function getElectionStatus(uint _electionId) public view returns (bool) {\n        return elections[_electionId].isOpen;\n    }\n\n    function getElectionWinner(uint _electionId) external view returns (uint) {\n        return elections[_electionId].winner;\n    }\n\n    function addVoter(uint _electionId) public {\n        elections[_electionId].voters[msg.sender] = true;\n        incrementVoters(_electionId);\n    }\n\n    function getOneFirstRoundWinner(uint _electionId, uint _index) public view returns(uint){\n        return elections[_electionId].winners[_index];\n    }\n\n    function getFirstRoundWinners(uint _electionId) public view returns(uint[] memory){\n        return elections[_electionId].winners;\n    }\n\n    function computeResult(uint _electionId) public {\n        computeCandidatesAverageNote(_electionId);\n\n        computeFirstRoundWinners(_electionId);\n\n        computeFinalRoundWinner(_electionId);\n        if(elections[_electionId].winners.length > 1){\n            computeFinalRoundWinner(_electionId);\n        }\n        else { // Default case if tie\n            elections[_electionId].winner = elections[_electionId].winners[0];\n        }\n    }\n\n    function computeCandidatesAverageNote(uint _electionId) public {\n        for (uint i = 0; i < elections[_electionId].candidatesCount; i++){\n            computeAverageNote(_electionId, i);\n        }\n    }\n\n    function computeFirstRoundWinners(uint _electionId) public {\n        uint higherNote = 0;\n        for(uint i = 0; i < elections[_electionId].candidatesCount; i++){\n            if(higherNote == elections[_electionId].candidates[i].averageNote){\n                elections[_electionId].winners.push(i);\n            }\n            else if(higherNote < elections[_electionId].candidates[i].averageNote){\n                delete elections[_electionId].winners;\n                higherNote = elections[_electionId].candidates[i].averageNote;\n                elections[_electionId].winners.push(i);\n            }\n        }\n    }\n\n    function computeFinalRoundWinner(uint _electionId) public {\n        uint higherPercent;\n        for(uint i = 0; i < elections[_electionId].winners.length; i++){\n            uint currentPercent = elections[_electionId].candidates[elections[_electionId].winners[i]].percent;\n            if(i == 0){\n                higherPercent = currentPercent;\n                elections[_electionId].winner = elections[_electionId].winners[i];\n            }\n            else if (currentPercent > higherPercent){\n                higherPercent = currentPercent;\n                elections[_electionId].winner = elections[_electionId].winners[i];\n            }\n        }\n    }\n}\n",
  "sourcePath": "C:\\Users\\acham\\Applications\\ESGI\\Blockchain\\Projet\\Voting-SmartContract-Truffled\\contracts\\ElectionHelper.sol",
  "ast": {
    "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol",
    "exportedSymbols": {
      "ElectionHelper": [
        862
      ]
    },
    "id": 863,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 524,
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
        "id": 525,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "66:33:2"
      },
      {
        "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/CandidateHelper.sol",
        "file": "./CandidateHelper.sol",
        "id": 526,
        "nodeType": "ImportDirective",
        "scope": 863,
        "sourceUnit": 218,
        "src": "101:31:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol",
        "file": "./ownable.sol",
        "id": 527,
        "nodeType": "ImportDirective",
        "scope": 863,
        "sourceUnit": 1048,
        "src": "133:23:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol",
        "file": "./ElectionFactory.sol",
        "id": 528,
        "nodeType": "ImportDirective",
        "scope": 863,
        "sourceUnit": 523,
        "src": "157:31:2",
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
              "id": 529,
              "name": "ElectionFactory",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 522,
              "src": "218:15:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ElectionFactory_$522",
                "typeString": "contract ElectionFactory"
              }
            },
            "id": 530,
            "nodeType": "InheritanceSpecifier",
            "src": "218:15:2"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 531,
              "name": "CandidateHelper",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 217,
              "src": "235:15:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_CandidateHelper_$217",
                "typeString": "contract CandidateHelper"
              }
            },
            "id": 532,
            "nodeType": "InheritanceSpecifier",
            "src": "235:15:2"
          }
        ],
        "contractDependencies": [
          217,
          522,
          1047
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 862,
        "linearizedBaseContracts": [
          862,
          217,
          522,
          1047
        ],
        "name": "ElectionHelper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 552,
              "nodeType": "Block",
              "src": "325:90:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 546,
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
                          "id": 541,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 283,
                          "src": "335:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 543,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 542,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 534,
                          "src": "345:11:2",
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
                        "src": "335:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$266_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 544,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "isOpen",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 250,
                      "src": "335:29:2",
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
                      "id": 545,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "367:5:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "335:37:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 547,
                  "nodeType": "ExpressionStatement",
                  "src": "335:37:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 549,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 534,
                        "src": "396:11:2",
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
                      "id": 548,
                      "name": "computeResult",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 674,
                      "src": "382:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 550,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "382:26:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 551,
                  "nodeType": "ExpressionStatement",
                  "src": "382:26:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "9c98bcbb",
            "id": 553,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 537,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "313:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 538,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "313:10:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  }
                ],
                "id": 539,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 536,
                  "name": "isAdmin",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 309,
                  "src": "305:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "305:19:2"
              }
            ],
            "name": "endElection",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 535,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 534,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 553,
                  "src": "278:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 533,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "278:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "277:18:2"
            },
            "returnParameters": {
              "id": 540,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "325:0:2"
            },
            "scope": 862,
            "src": "257:158:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 565,
              "nodeType": "Block",
              "src": "493:53:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 560,
                        "name": "elections",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 283,
                        "src": "510:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                        }
                      },
                      "id": 562,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 561,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 555,
                        "src": "520:11:2",
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
                      "src": "510:22:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Election_$266_storage",
                        "typeString": "struct ElectionFactory.Election storage ref"
                      }
                    },
                    "id": 563,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "isOpen",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 250,
                    "src": "510:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 559,
                  "id": 564,
                  "nodeType": "Return",
                  "src": "503:36:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "24785b9e",
            "id": 566,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getElectionStatus",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 556,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 555,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 566,
                  "src": "448:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 554,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "448:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "447:18:2"
            },
            "returnParameters": {
              "id": 559,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 558,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 566,
                  "src": "487:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 557,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "487:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "486:6:2"
            },
            "scope": 862,
            "src": "421:125:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 578,
              "nodeType": "Block",
              "src": "626:53:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 573,
                        "name": "elections",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 283,
                        "src": "643:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                        }
                      },
                      "id": 575,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 574,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 568,
                        "src": "653:11:2",
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
                      "src": "643:22:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Election_$266_storage",
                        "typeString": "struct ElectionFactory.Election storage ref"
                      }
                    },
                    "id": 576,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "winner",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 265,
                    "src": "643:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 572,
                  "id": 577,
                  "nodeType": "Return",
                  "src": "636:36:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "e62c6ac5",
            "id": 579,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getElectionWinner",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 569,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 568,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 579,
                  "src": "579:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 567,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "579:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "578:18:2"
            },
            "returnParameters": {
              "id": 572,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 571,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 579,
                  "src": "620:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 570,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "620:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "619:6:2"
            },
            "scope": 862,
            "src": "552:127:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 598,
              "nodeType": "Block",
              "src": "728:103:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 592,
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
                            "id": 584,
                            "name": "elections",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 283,
                            "src": "738:9:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                              "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                            }
                          },
                          "id": 586,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 585,
                            "name": "_electionId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 581,
                            "src": "748:11:2",
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
                          "src": "738:22:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Election_$266_storage",
                            "typeString": "struct ElectionFactory.Election storage ref"
                          }
                        },
                        "id": 587,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "voters",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 260,
                        "src": "738:29:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 590,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 588,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "768:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 589,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "768:10:2",
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
                      "src": "738:41:2",
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
                      "id": 591,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "782:4:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "738:48:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 593,
                  "nodeType": "ExpressionStatement",
                  "src": "738:48:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 595,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 581,
                        "src": "812:11:2",
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
                      "id": 594,
                      "name": "incrementVoters",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 490,
                      "src": "796:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 596,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "796:28:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 597,
                  "nodeType": "ExpressionStatement",
                  "src": "796:28:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "d8f7a0bb",
            "id": 599,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addVoter",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 582,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 581,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 599,
                  "src": "703:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 580,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "703:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "702:18:2"
            },
            "returnParameters": {
              "id": 583,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "728:0:2"
            },
            "scope": 862,
            "src": "685:146:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 615,
              "nodeType": "Block",
              "src": "925:62:2",
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
                          "id": 608,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 283,
                          "src": "942:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 610,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 609,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 601,
                          "src": "952:11:2",
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
                        "src": "942:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$266_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 611,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "winners",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 263,
                      "src": "942:30:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 613,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 612,
                      "name": "_index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 603,
                      "src": "973:6:2",
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
                    "src": "942:38:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 607,
                  "id": 614,
                  "nodeType": "Return",
                  "src": "935:45:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "e76f6b58",
            "id": 616,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getOneFirstRoundWinner",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 604,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 601,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 616,
                  "src": "869:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 600,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "869:4:2",
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
                  "id": 603,
                  "mutability": "mutable",
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 616,
                  "src": "887:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 602,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "887:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "868:31:2"
            },
            "returnParameters": {
              "id": 607,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 606,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 616,
                  "src": "920:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 605,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "920:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "919:6:2"
            },
            "scope": 862,
            "src": "837:150:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 629,
              "nodeType": "Block",
              "src": "1075:54:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 624,
                        "name": "elections",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 283,
                        "src": "1092:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                        }
                      },
                      "id": 626,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 625,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 618,
                        "src": "1102:11:2",
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
                      "src": "1092:22:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Election_$266_storage",
                        "typeString": "struct ElectionFactory.Election storage ref"
                      }
                    },
                    "id": 627,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "winners",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 263,
                    "src": "1092:30:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 623,
                  "id": 628,
                  "nodeType": "Return",
                  "src": "1085:37:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "b12b1a7d",
            "id": 630,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getFirstRoundWinners",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 619,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 618,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 630,
                  "src": "1023:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 617,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1023:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1022:18:2"
            },
            "returnParameters": {
              "id": 623,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 622,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 630,
                  "src": "1061:13:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 620,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1061:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 621,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1061:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1060:15:2"
            },
            "scope": 862,
            "src": "993:136:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 673,
              "nodeType": "Block",
              "src": "1183:395:2",
              "statements": [
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
                        "referencedDeclaration": 632,
                        "src": "1222:11:2",
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
                      "name": "computeCandidatesAverageNote",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 700,
                      "src": "1193:28:2",
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
                    "src": "1193:41:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 638,
                  "nodeType": "ExpressionStatement",
                  "src": "1193:41:2"
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
                        "referencedDeclaration": 632,
                        "src": "1270:11:2",
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
                      "name": "computeFirstRoundWinners",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 779,
                      "src": "1245:24:2",
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
                    "src": "1245:37:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 642,
                  "nodeType": "ExpressionStatement",
                  "src": "1245:37:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 644,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 632,
                        "src": "1317:11:2",
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
                      "id": 643,
                      "name": "computeFinalRoundWinner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 861,
                      "src": "1293:23:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 645,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1293:36:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 646,
                  "nodeType": "ExpressionStatement",
                  "src": "1293:36:2"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 653,
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
                            "id": 647,
                            "name": "elections",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 283,
                            "src": "1342:9:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                              "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                            }
                          },
                          "id": 649,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 648,
                            "name": "_electionId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 632,
                            "src": "1352:11:2",
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
                          "src": "1342:22:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Election_$266_storage",
                            "typeString": "struct ElectionFactory.Election storage ref"
                          }
                        },
                        "id": 650,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "winners",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 263,
                        "src": "1342:30:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 651,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1342:37:2",
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
                      "id": 652,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1382:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1342:41:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 671,
                    "nodeType": "Block",
                    "src": "1459:113:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 669,
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
                                "id": 659,
                                "name": "elections",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 283,
                                "src": "1496:9:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
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
                                "referencedDeclaration": 632,
                                "src": "1506:11:2",
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
                              "src": "1496:22:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Election_$266_storage",
                                "typeString": "struct ElectionFactory.Election storage ref"
                              }
                            },
                            "id": 662,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "winner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 265,
                            "src": "1496:29:2",
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
                                  "id": 663,
                                  "name": "elections",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 283,
                                  "src": "1528:9:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                                    "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                  }
                                },
                                "id": 665,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 664,
                                  "name": "_electionId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 632,
                                  "src": "1538:11:2",
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
                                "src": "1528:22:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Election_$266_storage",
                                  "typeString": "struct ElectionFactory.Election storage ref"
                                }
                              },
                              "id": 666,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "winners",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 263,
                              "src": "1528:30:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 668,
                            "indexExpression": {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 667,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1559:1:2",
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
                            "src": "1528:33:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1496:65:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 670,
                        "nodeType": "ExpressionStatement",
                        "src": "1496:65:2"
                      }
                    ]
                  },
                  "id": 672,
                  "nodeType": "IfStatement",
                  "src": "1339:233:2",
                  "trueBody": {
                    "id": 658,
                    "nodeType": "Block",
                    "src": "1384:61:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 655,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 632,
                              "src": "1422:11:2",
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
                            "id": 654,
                            "name": "computeFinalRoundWinner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 861,
                            "src": "1398:23:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 656,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1398:36:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 657,
                        "nodeType": "ExpressionStatement",
                        "src": "1398:36:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "functionSelector": "be4d823e",
            "id": 674,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeResult",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 632,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 674,
                  "src": "1158:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 631,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1158:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1157:18:2"
            },
            "returnParameters": {
              "id": 634,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1183:0:2"
            },
            "scope": 862,
            "src": "1135:443:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 699,
              "nodeType": "Block",
              "src": "1647:140:2",
              "statements": [
                {
                  "body": {
                    "id": 697,
                    "nodeType": "Block",
                    "src": "1722:59:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 693,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 676,
                              "src": "1755:11:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 694,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 680,
                              "src": "1768:1:2",
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
                            "id": 692,
                            "name": "computeAverageNote",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 216,
                            "src": "1736:18:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256)"
                            }
                          },
                          "id": 695,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1736:34:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 696,
                        "nodeType": "ExpressionStatement",
                        "src": "1736:34:2"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 688,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 683,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 680,
                      "src": "1674:1:2",
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
                          "id": 684,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 283,
                          "src": "1678:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 686,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 685,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 676,
                          "src": "1688:11:2",
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
                        "src": "1678:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$266_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 687,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "candidatesCount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 252,
                      "src": "1678:38:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1674:42:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 698,
                  "initializationExpression": {
                    "assignments": [
                      680
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 680,
                        "mutability": "mutable",
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 698,
                        "src": "1662:6:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 679,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1662:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 682,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 681,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1671:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1662:10:2"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 690,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1718:3:2",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 689,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 680,
                        "src": "1718:1:2",
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
                    "id": 691,
                    "nodeType": "ExpressionStatement",
                    "src": "1718:3:2"
                  },
                  "nodeType": "ForStatement",
                  "src": "1657:124:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "ab6cb049",
            "id": 700,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeCandidatesAverageNote",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 677,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 676,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 700,
                  "src": "1622:16:2",
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
                    "src": "1622:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1621:18:2"
            },
            "returnParameters": {
              "id": 678,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1647:0:2"
            },
            "scope": 862,
            "src": "1584:203:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 778,
              "nodeType": "Block",
              "src": "1852:558:2",
              "statements": [
                {
                  "assignments": [
                    706
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 706,
                      "mutability": "mutable",
                      "name": "higherNote",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 778,
                      "src": "1862:15:2",
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
                        "src": "1862:4:2",
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
                    "src": "1880:1:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1862:19:2"
                },
                {
                  "body": {
                    "id": 776,
                    "nodeType": "Block",
                    "src": "1955:449:2",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 730,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 722,
                            "name": "higherNote",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 706,
                            "src": "1972:10:2",
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
                                    "id": 723,
                                    "name": "elections",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 283,
                                    "src": "1986:9:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                                      "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                    }
                                  },
                                  "id": 725,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 724,
                                    "name": "_electionId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 702,
                                    "src": "1996:11:2",
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
                                  "src": "1986:22:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Election_$266_storage",
                                    "typeString": "struct ElectionFactory.Election storage ref"
                                  }
                                },
                                "id": 726,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "candidates",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 256,
                                "src": "1986:33:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$277_storage_$",
                                  "typeString": "mapping(uint256 => struct ElectionFactory.Candidate storage ref)"
                                }
                              },
                              "id": 728,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 727,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 710,
                                "src": "2020:1:2",
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
                              "src": "1986:36:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Candidate_$277_storage",
                                "typeString": "struct ElectionFactory.Candidate storage ref"
                              }
                            },
                            "id": 729,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "averageNote",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 276,
                            "src": "1986:48:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1972:62:2",
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
                            "id": 748,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 740,
                              "name": "higherNote",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 706,
                              "src": "2127:10:2",
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
                                      "id": 741,
                                      "name": "elections",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 283,
                                      "src": "2140:9:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                                        "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                      }
                                    },
                                    "id": 743,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 742,
                                      "name": "_electionId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 702,
                                      "src": "2150:11:2",
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
                                    "src": "2140:22:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Election_$266_storage",
                                      "typeString": "struct ElectionFactory.Election storage ref"
                                    }
                                  },
                                  "id": 744,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "candidates",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 256,
                                  "src": "2140:33:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$277_storage_$",
                                    "typeString": "mapping(uint256 => struct ElectionFactory.Candidate storage ref)"
                                  }
                                },
                                "id": 746,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 745,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 710,
                                  "src": "2174:1:2",
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
                                "src": "2140:36:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Candidate_$277_storage",
                                  "typeString": "struct ElectionFactory.Candidate storage ref"
                                }
                              },
                              "id": 747,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "averageNote",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 276,
                              "src": "2140:48:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2127:61:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": null,
                          "id": 774,
                          "nodeType": "IfStatement",
                          "src": "2124:270:2",
                          "trueBody": {
                            "id": 773,
                            "nodeType": "Block",
                            "src": "2189:205:2",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 753,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "UnaryOperation",
                                  "operator": "delete",
                                  "prefix": true,
                                  "src": "2207:37:2",
                                  "subExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "id": 749,
                                        "name": "elections",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 283,
                                        "src": "2214:9:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                        }
                                      },
                                      "id": 751,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 750,
                                        "name": "_electionId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 702,
                                        "src": "2224:11:2",
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
                                      "src": "2214:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Election_$266_storage",
                                        "typeString": "struct ElectionFactory.Election storage ref"
                                      }
                                    },
                                    "id": 752,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "memberName": "winners",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 263,
                                    "src": "2214:30:2",
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
                                "id": 754,
                                "nodeType": "ExpressionStatement",
                                "src": "2207:37:2"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 763,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "argumentTypes": null,
                                    "id": 755,
                                    "name": "higherNote",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 706,
                                    "src": "2262:10:2",
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
                                            "id": 756,
                                            "name": "elections",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 283,
                                            "src": "2275:9:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
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
                                            "referencedDeclaration": 702,
                                            "src": "2285:11:2",
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
                                          "src": "2275:22:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Election_$266_storage",
                                            "typeString": "struct ElectionFactory.Election storage ref"
                                          }
                                        },
                                        "id": 759,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "candidates",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 256,
                                        "src": "2275:33:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$277_storage_$",
                                          "typeString": "mapping(uint256 => struct ElectionFactory.Candidate storage ref)"
                                        }
                                      },
                                      "id": 761,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 760,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 710,
                                        "src": "2309:1:2",
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
                                      "src": "2275:36:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Candidate_$277_storage",
                                        "typeString": "struct ElectionFactory.Candidate storage ref"
                                      }
                                    },
                                    "id": 762,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "averageNote",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 276,
                                    "src": "2275:48:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "2262:61:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 764,
                                "nodeType": "ExpressionStatement",
                                "src": "2262:61:2"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 770,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 710,
                                      "src": "2377:1:2",
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
                                          "id": 765,
                                          "name": "elections",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 283,
                                          "src": "2341:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                          }
                                        },
                                        "id": 767,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 766,
                                          "name": "_electionId",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 702,
                                          "src": "2351:11:2",
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
                                        "src": "2341:22:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_Election_$266_storage",
                                          "typeString": "struct ElectionFactory.Election storage ref"
                                        }
                                      },
                                      "id": 768,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "winners",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 263,
                                      "src": "2341:30:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                        "typeString": "uint256[] storage ref"
                                      }
                                    },
                                    "id": 769,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "push",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2341:35:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$__$",
                                      "typeString": "function (uint256)"
                                    }
                                  },
                                  "id": 771,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2341:38:2",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 772,
                                "nodeType": "ExpressionStatement",
                                "src": "2341:38:2"
                              }
                            ]
                          }
                        },
                        "id": 775,
                        "nodeType": "IfStatement",
                        "src": "1969:425:2",
                        "trueBody": {
                          "id": 739,
                          "nodeType": "Block",
                          "src": "2035:71:2",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 736,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 710,
                                    "src": "2089:1:2",
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
                                        "id": 731,
                                        "name": "elections",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 283,
                                        "src": "2053:9:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                        }
                                      },
                                      "id": 733,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 732,
                                        "name": "_electionId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 702,
                                        "src": "2063:11:2",
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
                                      "src": "2053:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Election_$266_storage",
                                        "typeString": "struct ElectionFactory.Election storage ref"
                                      }
                                    },
                                    "id": 734,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "winners",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 263,
                                    "src": "2053:30:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                      "typeString": "uint256[] storage ref"
                                    }
                                  },
                                  "id": 735,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "push",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2053:35:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$__$",
                                    "typeString": "function (uint256)"
                                  }
                                },
                                "id": 737,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2053:38:2",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 738,
                              "nodeType": "ExpressionStatement",
                              "src": "2053:38:2"
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
                    "id": 718,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 713,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 710,
                      "src": "1907:1:2",
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
                          "id": 714,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 283,
                          "src": "1911:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
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
                          "referencedDeclaration": 702,
                          "src": "1921:11:2",
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
                        "src": "1911:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$266_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 717,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "candidatesCount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 252,
                      "src": "1911:38:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1907:42:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 777,
                  "initializationExpression": {
                    "assignments": [
                      710
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 710,
                        "mutability": "mutable",
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 777,
                        "src": "1895:6:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 709,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1895:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 712,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 711,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1904:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1895:10:2"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 720,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1951:3:2",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 719,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 710,
                        "src": "1951:1:2",
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
                    "id": 721,
                    "nodeType": "ExpressionStatement",
                    "src": "1951:3:2"
                  },
                  "nodeType": "ForStatement",
                  "src": "1891:513:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "cd015c32",
            "id": 779,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeFirstRoundWinners",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 702,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 779,
                  "src": "1827:16:2",
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
                    "src": "1827:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1826:18:2"
            },
            "returnParameters": {
              "id": 704,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1852:0:2"
            },
            "scope": 862,
            "src": "1793:617:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 860,
              "nodeType": "Block",
              "src": "2474:598:2",
              "statements": [
                {
                  "assignments": [
                    785
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 785,
                      "mutability": "mutable",
                      "name": "higherPercent",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 860,
                      "src": "2484:18:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 784,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2484:4:2",
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
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2484:18:2"
                },
                {
                  "body": {
                    "id": 858,
                    "nodeType": "Block",
                    "src": "2575:491:2",
                    "statements": [
                      {
                        "assignments": [
                          802
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 802,
                            "mutability": "mutable",
                            "name": "currentPercent",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 858,
                            "src": "2589:19:2",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 801,
                              "name": "uint",
                              "nodeType": "ElementaryTypeName",
                              "src": "2589:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 815,
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
                                  "id": 803,
                                  "name": "elections",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 283,
                                  "src": "2611:9:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
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
                                  "referencedDeclaration": 781,
                                  "src": "2621:11:2",
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
                                "src": "2611:22:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Election_$266_storage",
                                  "typeString": "struct ElectionFactory.Election storage ref"
                                }
                              },
                              "id": 806,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "candidates",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 256,
                              "src": "2611:33:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$277_storage_$",
                                "typeString": "mapping(uint256 => struct ElectionFactory.Candidate storage ref)"
                              }
                            },
                            "id": 813,
                            "indexExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 807,
                                    "name": "elections",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 283,
                                    "src": "2645:9:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                                      "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                    }
                                  },
                                  "id": 809,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 808,
                                    "name": "_electionId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 781,
                                    "src": "2655:11:2",
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
                                  "src": "2645:22:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Election_$266_storage",
                                    "typeString": "struct ElectionFactory.Election storage ref"
                                  }
                                },
                                "id": 810,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "winners",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 263,
                                "src": "2645:30:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                  "typeString": "uint256[] storage ref"
                                }
                              },
                              "id": 812,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 811,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 788,
                                "src": "2676:1:2",
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
                              "src": "2645:33:2",
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
                            "src": "2611:68:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Candidate_$277_storage",
                              "typeString": "struct ElectionFactory.Candidate storage ref"
                            }
                          },
                          "id": 814,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "percent",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 274,
                          "src": "2611:76:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2589:98:2"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 818,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 816,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 788,
                            "src": "2704:1:2",
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
                            "id": 817,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2709:1:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "2704:6:2",
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
                            "id": 838,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 836,
                              "name": "currentPercent",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 802,
                              "src": "2879:14:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 837,
                              "name": "higherPercent",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 785,
                              "src": "2896:13:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2879:30:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": null,
                          "id": 856,
                          "nodeType": "IfStatement",
                          "src": "2875:181:2",
                          "trueBody": {
                            "id": 855,
                            "nodeType": "Block",
                            "src": "2910:146:2",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 841,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "argumentTypes": null,
                                    "id": 839,
                                    "name": "higherPercent",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 785,
                                    "src": "2928:13:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "argumentTypes": null,
                                    "id": 840,
                                    "name": "currentPercent",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 802,
                                    "src": "2944:14:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "2928:30:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 842,
                                "nodeType": "ExpressionStatement",
                                "src": "2928:30:2"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 853,
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
                                        "id": 843,
                                        "name": "elections",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 283,
                                        "src": "2976:9:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
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
                                        "referencedDeclaration": 781,
                                        "src": "2986:11:2",
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
                                      "src": "2976:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Election_$266_storage",
                                        "typeString": "struct ElectionFactory.Election storage ref"
                                      }
                                    },
                                    "id": 846,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "memberName": "winner",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 265,
                                    "src": "2976:29:2",
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
                                          "id": 847,
                                          "name": "elections",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 283,
                                          "src": "3008:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                          }
                                        },
                                        "id": 849,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 848,
                                          "name": "_electionId",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 781,
                                          "src": "3018:11:2",
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
                                        "src": "3008:22:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_Election_$266_storage",
                                          "typeString": "struct ElectionFactory.Election storage ref"
                                        }
                                      },
                                      "id": 850,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "winners",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 263,
                                      "src": "3008:30:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                        "typeString": "uint256[] storage ref"
                                      }
                                    },
                                    "id": 852,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 851,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 788,
                                      "src": "3039:1:2",
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
                                    "src": "3008:33:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "2976:65:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 854,
                                "nodeType": "ExpressionStatement",
                                "src": "2976:65:2"
                              }
                            ]
                          }
                        },
                        "id": 857,
                        "nodeType": "IfStatement",
                        "src": "2701:355:2",
                        "trueBody": {
                          "id": 835,
                          "nodeType": "Block",
                          "src": "2711:146:2",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 821,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 819,
                                  "name": "higherPercent",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 785,
                                  "src": "2729:13:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "id": 820,
                                  "name": "currentPercent",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 802,
                                  "src": "2745:14:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2729:30:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 822,
                              "nodeType": "ExpressionStatement",
                              "src": "2729:30:2"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 833,
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
                                      "id": 823,
                                      "name": "elections",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 283,
                                      "src": "2777:9:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
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
                                      "referencedDeclaration": 781,
                                      "src": "2787:11:2",
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
                                    "src": "2777:22:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Election_$266_storage",
                                      "typeString": "struct ElectionFactory.Election storage ref"
                                    }
                                  },
                                  "id": 826,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberName": "winner",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 265,
                                  "src": "2777:29:2",
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
                                        "id": 827,
                                        "name": "elections",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 283,
                                        "src": "2809:9:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                        }
                                      },
                                      "id": 829,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 828,
                                        "name": "_electionId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 781,
                                        "src": "2819:11:2",
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
                                      "src": "2809:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Election_$266_storage",
                                        "typeString": "struct ElectionFactory.Election storage ref"
                                      }
                                    },
                                    "id": 830,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "winners",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 263,
                                    "src": "2809:30:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                      "typeString": "uint256[] storage ref"
                                    }
                                  },
                                  "id": 832,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 831,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 788,
                                    "src": "2840:1:2",
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
                                  "src": "2809:33:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2777:65:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 834,
                              "nodeType": "ExpressionStatement",
                              "src": "2777:65:2"
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
                    "id": 797,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 791,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 788,
                      "src": "2528:1:2",
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
                            "id": 792,
                            "name": "elections",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 283,
                            "src": "2532:9:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$266_storage_$",
                              "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                            }
                          },
                          "id": 794,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 793,
                            "name": "_electionId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 781,
                            "src": "2542:11:2",
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
                          "src": "2532:22:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Election_$266_storage",
                            "typeString": "struct ElectionFactory.Election storage ref"
                          }
                        },
                        "id": 795,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "winners",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 263,
                        "src": "2532:30:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 796,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2532:37:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2528:41:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 859,
                  "initializationExpression": {
                    "assignments": [
                      788
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 788,
                        "mutability": "mutable",
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 859,
                        "src": "2516:6:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 787,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2516:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 790,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 789,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2525:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2516:10:2"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 799,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2571:3:2",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 798,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 788,
                        "src": "2571:1:2",
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
                    "id": 800,
                    "nodeType": "ExpressionStatement",
                    "src": "2571:3:2"
                  },
                  "nodeType": "ForStatement",
                  "src": "2512:554:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "7bb1541d",
            "id": 861,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeFinalRoundWinner",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 782,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 781,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 861,
                  "src": "2449:16:2",
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
                    "src": "2449:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2448:18:2"
            },
            "returnParameters": {
              "id": 783,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2474:0:2"
            },
            "scope": 862,
            "src": "2416:656:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 863,
        "src": "191:2883:2"
      }
    ],
    "src": "32:3043:2"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol",
      "exportedSymbols": {
        "ElectionHelper": [
          862
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
        "id": 524,
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
        "id": 525,
        "name": "PragmaDirective",
        "src": "66:33:2"
      },
      {
        "attributes": {
          "SourceUnit": 218,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/CandidateHelper.sol",
          "file": "./CandidateHelper.sol",
          "scope": 863,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 526,
        "name": "ImportDirective",
        "src": "101:31:2"
      },
      {
        "attributes": {
          "SourceUnit": 1048,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol",
          "file": "./ownable.sol",
          "scope": 863,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 527,
        "name": "ImportDirective",
        "src": "133:23:2"
      },
      {
        "attributes": {
          "SourceUnit": 523,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol",
          "file": "./ElectionFactory.sol",
          "scope": 863,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 528,
        "name": "ImportDirective",
        "src": "157:31:2"
      },
      {
        "attributes": {
          "abstract": false,
          "contractDependencies": [
            217,
            522,
            1047
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            862,
            217,
            522,
            1047
          ],
          "name": "ElectionHelper",
          "scope": 863
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
                  "referencedDeclaration": 522,
                  "type": "contract ElectionFactory"
                },
                "id": 529,
                "name": "UserDefinedTypeName",
                "src": "218:15:2"
              }
            ],
            "id": 530,
            "name": "InheritanceSpecifier",
            "src": "218:15:2"
          },
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
                "id": 531,
                "name": "UserDefinedTypeName",
                "src": "235:15:2"
              }
            ],
            "id": 532,
            "name": "InheritanceSpecifier",
            "src": "235:15:2"
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
              "scope": 862,
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
                      "scope": 553,
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
                        "id": 533,
                        "name": "ElementaryTypeName",
                        "src": "278:4:2"
                      }
                    ],
                    "id": 534,
                    "name": "VariableDeclaration",
                    "src": "278:16:2"
                  }
                ],
                "id": 535,
                "name": "ParameterList",
                "src": "277:18:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 540,
                "name": "ParameterList",
                "src": "325:0:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 309,
                      "type": "modifier (address)",
                      "value": "isAdmin"
                    },
                    "id": 536,
                    "name": "Identifier",
                    "src": "305:7:2"
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
                        "id": 537,
                        "name": "Identifier",
                        "src": "313:3:2"
                      }
                    ],
                    "id": 538,
                    "name": "MemberAccess",
                    "src": "313:10:2"
                  }
                ],
                "id": 539,
                "name": "ModifierInvocation",
                "src": "305:19:2"
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
                              "referencedDeclaration": 250,
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
                                      "referencedDeclaration": 283,
                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                      "value": "elections"
                                    },
                                    "id": 541,
                                    "name": "Identifier",
                                    "src": "335:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 534,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 542,
                                    "name": "Identifier",
                                    "src": "345:11:2"
                                  }
                                ],
                                "id": 543,
                                "name": "IndexAccess",
                                "src": "335:22:2"
                              }
                            ],
                            "id": 544,
                            "name": "MemberAccess",
                            "src": "335:29:2"
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
                            "id": 545,
                            "name": "Literal",
                            "src": "367:5:2"
                          }
                        ],
                        "id": 546,
                        "name": "Assignment",
                        "src": "335:37:2"
                      }
                    ],
                    "id": 547,
                    "name": "ExpressionStatement",
                    "src": "335:37:2"
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
                              "referencedDeclaration": 674,
                              "type": "function (uint256)",
                              "value": "computeResult"
                            },
                            "id": 548,
                            "name": "Identifier",
                            "src": "382:13:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 534,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 549,
                            "name": "Identifier",
                            "src": "396:11:2"
                          }
                        ],
                        "id": 550,
                        "name": "FunctionCall",
                        "src": "382:26:2"
                      }
                    ],
                    "id": 551,
                    "name": "ExpressionStatement",
                    "src": "382:26:2"
                  }
                ],
                "id": 552,
                "name": "Block",
                "src": "325:90:2"
              }
            ],
            "id": 553,
            "name": "FunctionDefinition",
            "src": "257:158:2"
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
              "scope": 862,
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
                      "scope": 566,
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
                        "id": 554,
                        "name": "ElementaryTypeName",
                        "src": "448:4:2"
                      }
                    ],
                    "id": 555,
                    "name": "VariableDeclaration",
                    "src": "448:16:2"
                  }
                ],
                "id": 556,
                "name": "ParameterList",
                "src": "447:18:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 566,
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
                        "id": 557,
                        "name": "ElementaryTypeName",
                        "src": "487:4:2"
                      }
                    ],
                    "id": 558,
                    "name": "VariableDeclaration",
                    "src": "487:4:2"
                  }
                ],
                "id": 559,
                "name": "ParameterList",
                "src": "486:6:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 559
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
                          "referencedDeclaration": 250,
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
                                  "referencedDeclaration": 283,
                                  "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                  "value": "elections"
                                },
                                "id": 560,
                                "name": "Identifier",
                                "src": "510:9:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 555,
                                  "type": "uint256",
                                  "value": "_electionId"
                                },
                                "id": 561,
                                "name": "Identifier",
                                "src": "520:11:2"
                              }
                            ],
                            "id": 562,
                            "name": "IndexAccess",
                            "src": "510:22:2"
                          }
                        ],
                        "id": 563,
                        "name": "MemberAccess",
                        "src": "510:29:2"
                      }
                    ],
                    "id": 564,
                    "name": "Return",
                    "src": "503:36:2"
                  }
                ],
                "id": 565,
                "name": "Block",
                "src": "493:53:2"
              }
            ],
            "id": 566,
            "name": "FunctionDefinition",
            "src": "421:125:2"
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
              "scope": 862,
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
                      "scope": 579,
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
                        "id": 567,
                        "name": "ElementaryTypeName",
                        "src": "579:4:2"
                      }
                    ],
                    "id": 568,
                    "name": "VariableDeclaration",
                    "src": "579:16:2"
                  }
                ],
                "id": 569,
                "name": "ParameterList",
                "src": "578:18:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 579,
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
                        "id": 570,
                        "name": "ElementaryTypeName",
                        "src": "620:4:2"
                      }
                    ],
                    "id": 571,
                    "name": "VariableDeclaration",
                    "src": "620:4:2"
                  }
                ],
                "id": 572,
                "name": "ParameterList",
                "src": "619:6:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 572
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
                          "referencedDeclaration": 265,
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
                                "id": 573,
                                "name": "Identifier",
                                "src": "643:9:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 568,
                                  "type": "uint256",
                                  "value": "_electionId"
                                },
                                "id": 574,
                                "name": "Identifier",
                                "src": "653:11:2"
                              }
                            ],
                            "id": 575,
                            "name": "IndexAccess",
                            "src": "643:22:2"
                          }
                        ],
                        "id": 576,
                        "name": "MemberAccess",
                        "src": "643:29:2"
                      }
                    ],
                    "id": 577,
                    "name": "Return",
                    "src": "636:36:2"
                  }
                ],
                "id": 578,
                "name": "Block",
                "src": "626:53:2"
              }
            ],
            "id": 579,
            "name": "FunctionDefinition",
            "src": "552:127:2"
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
              "scope": 862,
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
                      "scope": 599,
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
                        "id": 580,
                        "name": "ElementaryTypeName",
                        "src": "703:4:2"
                      }
                    ],
                    "id": 581,
                    "name": "VariableDeclaration",
                    "src": "703:16:2"
                  }
                ],
                "id": 582,
                "name": "ParameterList",
                "src": "702:18:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 583,
                "name": "ParameterList",
                "src": "728:0:2"
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
                                        "id": 584,
                                        "name": "Identifier",
                                        "src": "738:9:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 581,
                                          "type": "uint256",
                                          "value": "_electionId"
                                        },
                                        "id": 585,
                                        "name": "Identifier",
                                        "src": "748:11:2"
                                      }
                                    ],
                                    "id": 586,
                                    "name": "IndexAccess",
                                    "src": "738:22:2"
                                  }
                                ],
                                "id": 587,
                                "name": "MemberAccess",
                                "src": "738:29:2"
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
                                    "id": 588,
                                    "name": "Identifier",
                                    "src": "768:3:2"
                                  }
                                ],
                                "id": 589,
                                "name": "MemberAccess",
                                "src": "768:10:2"
                              }
                            ],
                            "id": 590,
                            "name": "IndexAccess",
                            "src": "738:41:2"
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
                            "id": 591,
                            "name": "Literal",
                            "src": "782:4:2"
                          }
                        ],
                        "id": 592,
                        "name": "Assignment",
                        "src": "738:48:2"
                      }
                    ],
                    "id": 593,
                    "name": "ExpressionStatement",
                    "src": "738:48:2"
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
                              "referencedDeclaration": 490,
                              "type": "function (uint256)",
                              "value": "incrementVoters"
                            },
                            "id": 594,
                            "name": "Identifier",
                            "src": "796:15:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 581,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 595,
                            "name": "Identifier",
                            "src": "812:11:2"
                          }
                        ],
                        "id": 596,
                        "name": "FunctionCall",
                        "src": "796:28:2"
                      }
                    ],
                    "id": 597,
                    "name": "ExpressionStatement",
                    "src": "796:28:2"
                  }
                ],
                "id": 598,
                "name": "Block",
                "src": "728:103:2"
              }
            ],
            "id": 599,
            "name": "FunctionDefinition",
            "src": "685:146:2"
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
              "scope": 862,
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
                      "scope": 616,
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
                        "id": 600,
                        "name": "ElementaryTypeName",
                        "src": "869:4:2"
                      }
                    ],
                    "id": 601,
                    "name": "VariableDeclaration",
                    "src": "869:16:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_index",
                      "overrides": null,
                      "scope": 616,
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
                        "id": 602,
                        "name": "ElementaryTypeName",
                        "src": "887:4:2"
                      }
                    ],
                    "id": 603,
                    "name": "VariableDeclaration",
                    "src": "887:11:2"
                  }
                ],
                "id": 604,
                "name": "ParameterList",
                "src": "868:31:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 616,
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
                        "id": 605,
                        "name": "ElementaryTypeName",
                        "src": "920:4:2"
                      }
                    ],
                    "id": 606,
                    "name": "VariableDeclaration",
                    "src": "920:4:2"
                  }
                ],
                "id": 607,
                "name": "ParameterList",
                "src": "919:6:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 607
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
                              "referencedDeclaration": 263,
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
                                      "referencedDeclaration": 283,
                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                      "value": "elections"
                                    },
                                    "id": 608,
                                    "name": "Identifier",
                                    "src": "942:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 601,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 609,
                                    "name": "Identifier",
                                    "src": "952:11:2"
                                  }
                                ],
                                "id": 610,
                                "name": "IndexAccess",
                                "src": "942:22:2"
                              }
                            ],
                            "id": 611,
                            "name": "MemberAccess",
                            "src": "942:30:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 603,
                              "type": "uint256",
                              "value": "_index"
                            },
                            "id": 612,
                            "name": "Identifier",
                            "src": "973:6:2"
                          }
                        ],
                        "id": 613,
                        "name": "IndexAccess",
                        "src": "942:38:2"
                      }
                    ],
                    "id": 614,
                    "name": "Return",
                    "src": "935:45:2"
                  }
                ],
                "id": 615,
                "name": "Block",
                "src": "925:62:2"
              }
            ],
            "id": 616,
            "name": "FunctionDefinition",
            "src": "837:150:2"
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
              "scope": 862,
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
                      "scope": 630,
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
                        "id": 617,
                        "name": "ElementaryTypeName",
                        "src": "1023:4:2"
                      }
                    ],
                    "id": 618,
                    "name": "VariableDeclaration",
                    "src": "1023:16:2"
                  }
                ],
                "id": 619,
                "name": "ParameterList",
                "src": "1022:18:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 630,
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
                            "id": 620,
                            "name": "ElementaryTypeName",
                            "src": "1061:4:2"
                          }
                        ],
                        "id": 621,
                        "name": "ArrayTypeName",
                        "src": "1061:6:2"
                      }
                    ],
                    "id": 622,
                    "name": "VariableDeclaration",
                    "src": "1061:13:2"
                  }
                ],
                "id": 623,
                "name": "ParameterList",
                "src": "1060:15:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 623
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
                          "referencedDeclaration": 263,
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
                                  "referencedDeclaration": 283,
                                  "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                  "value": "elections"
                                },
                                "id": 624,
                                "name": "Identifier",
                                "src": "1092:9:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 618,
                                  "type": "uint256",
                                  "value": "_electionId"
                                },
                                "id": 625,
                                "name": "Identifier",
                                "src": "1102:11:2"
                              }
                            ],
                            "id": 626,
                            "name": "IndexAccess",
                            "src": "1092:22:2"
                          }
                        ],
                        "id": 627,
                        "name": "MemberAccess",
                        "src": "1092:30:2"
                      }
                    ],
                    "id": 628,
                    "name": "Return",
                    "src": "1085:37:2"
                  }
                ],
                "id": 629,
                "name": "Block",
                "src": "1075:54:2"
              }
            ],
            "id": 630,
            "name": "FunctionDefinition",
            "src": "993:136:2"
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
              "scope": 862,
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
                      "scope": 674,
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
                        "id": 631,
                        "name": "ElementaryTypeName",
                        "src": "1158:4:2"
                      }
                    ],
                    "id": 632,
                    "name": "VariableDeclaration",
                    "src": "1158:16:2"
                  }
                ],
                "id": 633,
                "name": "ParameterList",
                "src": "1157:18:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 634,
                "name": "ParameterList",
                "src": "1183:0:2"
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
                              "referencedDeclaration": 700,
                              "type": "function (uint256)",
                              "value": "computeCandidatesAverageNote"
                            },
                            "id": 635,
                            "name": "Identifier",
                            "src": "1193:28:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 632,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 636,
                            "name": "Identifier",
                            "src": "1222:11:2"
                          }
                        ],
                        "id": 637,
                        "name": "FunctionCall",
                        "src": "1193:41:2"
                      }
                    ],
                    "id": 638,
                    "name": "ExpressionStatement",
                    "src": "1193:41:2"
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
                              "referencedDeclaration": 779,
                              "type": "function (uint256)",
                              "value": "computeFirstRoundWinners"
                            },
                            "id": 639,
                            "name": "Identifier",
                            "src": "1245:24:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 632,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 640,
                            "name": "Identifier",
                            "src": "1270:11:2"
                          }
                        ],
                        "id": 641,
                        "name": "FunctionCall",
                        "src": "1245:37:2"
                      }
                    ],
                    "id": 642,
                    "name": "ExpressionStatement",
                    "src": "1245:37:2"
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
                              "referencedDeclaration": 861,
                              "type": "function (uint256)",
                              "value": "computeFinalRoundWinner"
                            },
                            "id": 643,
                            "name": "Identifier",
                            "src": "1293:23:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 632,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 644,
                            "name": "Identifier",
                            "src": "1317:11:2"
                          }
                        ],
                        "id": 645,
                        "name": "FunctionCall",
                        "src": "1293:36:2"
                      }
                    ],
                    "id": 646,
                    "name": "ExpressionStatement",
                    "src": "1293:36:2"
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
                                  "referencedDeclaration": 263,
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
                                          "referencedDeclaration": 283,
                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                          "value": "elections"
                                        },
                                        "id": 647,
                                        "name": "Identifier",
                                        "src": "1342:9:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 632,
                                          "type": "uint256",
                                          "value": "_electionId"
                                        },
                                        "id": 648,
                                        "name": "Identifier",
                                        "src": "1352:11:2"
                                      }
                                    ],
                                    "id": 649,
                                    "name": "IndexAccess",
                                    "src": "1342:22:2"
                                  }
                                ],
                                "id": 650,
                                "name": "MemberAccess",
                                "src": "1342:30:2"
                              }
                            ],
                            "id": 651,
                            "name": "MemberAccess",
                            "src": "1342:37:2"
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
                            "id": 652,
                            "name": "Literal",
                            "src": "1382:1:2"
                          }
                        ],
                        "id": 653,
                        "name": "BinaryOperation",
                        "src": "1342:41:2"
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
                                      "referencedDeclaration": 861,
                                      "type": "function (uint256)",
                                      "value": "computeFinalRoundWinner"
                                    },
                                    "id": 654,
                                    "name": "Identifier",
                                    "src": "1398:23:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 632,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 655,
                                    "name": "Identifier",
                                    "src": "1422:11:2"
                                  }
                                ],
                                "id": 656,
                                "name": "FunctionCall",
                                "src": "1398:36:2"
                              }
                            ],
                            "id": 657,
                            "name": "ExpressionStatement",
                            "src": "1398:36:2"
                          }
                        ],
                        "id": 658,
                        "name": "Block",
                        "src": "1384:61:2"
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
                                      "referencedDeclaration": 265,
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
                                            "id": 659,
                                            "name": "Identifier",
                                            "src": "1496:9:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 632,
                                              "type": "uint256",
                                              "value": "_electionId"
                                            },
                                            "id": 660,
                                            "name": "Identifier",
                                            "src": "1506:11:2"
                                          }
                                        ],
                                        "id": 661,
                                        "name": "IndexAccess",
                                        "src": "1496:22:2"
                                      }
                                    ],
                                    "id": 662,
                                    "name": "MemberAccess",
                                    "src": "1496:29:2"
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
                                          "referencedDeclaration": 263,
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
                                                  "referencedDeclaration": 283,
                                                  "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                  "value": "elections"
                                                },
                                                "id": 663,
                                                "name": "Identifier",
                                                "src": "1528:9:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 632,
                                                  "type": "uint256",
                                                  "value": "_electionId"
                                                },
                                                "id": 664,
                                                "name": "Identifier",
                                                "src": "1538:11:2"
                                              }
                                            ],
                                            "id": 665,
                                            "name": "IndexAccess",
                                            "src": "1528:22:2"
                                          }
                                        ],
                                        "id": 666,
                                        "name": "MemberAccess",
                                        "src": "1528:30:2"
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
                                        "id": 667,
                                        "name": "Literal",
                                        "src": "1559:1:2"
                                      }
                                    ],
                                    "id": 668,
                                    "name": "IndexAccess",
                                    "src": "1528:33:2"
                                  }
                                ],
                                "id": 669,
                                "name": "Assignment",
                                "src": "1496:65:2"
                              }
                            ],
                            "id": 670,
                            "name": "ExpressionStatement",
                            "src": "1496:65:2"
                          }
                        ],
                        "id": 671,
                        "name": "Block",
                        "src": "1459:113:2"
                      }
                    ],
                    "id": 672,
                    "name": "IfStatement",
                    "src": "1339:233:2"
                  }
                ],
                "id": 673,
                "name": "Block",
                "src": "1183:395:2"
              }
            ],
            "id": 674,
            "name": "FunctionDefinition",
            "src": "1135:443:2"
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
              "scope": 862,
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
                      "scope": 700,
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
                        "src": "1622:4:2"
                      }
                    ],
                    "id": 676,
                    "name": "VariableDeclaration",
                    "src": "1622:16:2"
                  }
                ],
                "id": 677,
                "name": "ParameterList",
                "src": "1621:18:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 678,
                "name": "ParameterList",
                "src": "1647:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            680
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "mutability": "mutable",
                              "name": "i",
                              "overrides": null,
                              "scope": 698,
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
                                "id": 679,
                                "name": "ElementaryTypeName",
                                "src": "1662:4:2"
                              }
                            ],
                            "id": 680,
                            "name": "VariableDeclaration",
                            "src": "1662:6:2"
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
                            "id": 681,
                            "name": "Literal",
                            "src": "1671:1:2"
                          }
                        ],
                        "id": 682,
                        "name": "VariableDeclarationStatement",
                        "src": "1662:10:2"
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
                              "referencedDeclaration": 680,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 683,
                            "name": "Identifier",
                            "src": "1674:1:2"
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
                                    "id": 684,
                                    "name": "Identifier",
                                    "src": "1678:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 676,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 685,
                                    "name": "Identifier",
                                    "src": "1688:11:2"
                                  }
                                ],
                                "id": 686,
                                "name": "IndexAccess",
                                "src": "1678:22:2"
                              }
                            ],
                            "id": 687,
                            "name": "MemberAccess",
                            "src": "1678:38:2"
                          }
                        ],
                        "id": 688,
                        "name": "BinaryOperation",
                        "src": "1674:42:2"
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
                                  "referencedDeclaration": 680,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 689,
                                "name": "Identifier",
                                "src": "1718:1:2"
                              }
                            ],
                            "id": 690,
                            "name": "UnaryOperation",
                            "src": "1718:3:2"
                          }
                        ],
                        "id": 691,
                        "name": "ExpressionStatement",
                        "src": "1718:3:2"
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
                                      "referencedDeclaration": 216,
                                      "type": "function (uint256,uint256)",
                                      "value": "computeAverageNote"
                                    },
                                    "id": 692,
                                    "name": "Identifier",
                                    "src": "1736:18:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 676,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 693,
                                    "name": "Identifier",
                                    "src": "1755:11:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 680,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 694,
                                    "name": "Identifier",
                                    "src": "1768:1:2"
                                  }
                                ],
                                "id": 695,
                                "name": "FunctionCall",
                                "src": "1736:34:2"
                              }
                            ],
                            "id": 696,
                            "name": "ExpressionStatement",
                            "src": "1736:34:2"
                          }
                        ],
                        "id": 697,
                        "name": "Block",
                        "src": "1722:59:2"
                      }
                    ],
                    "id": 698,
                    "name": "ForStatement",
                    "src": "1657:124:2"
                  }
                ],
                "id": 699,
                "name": "Block",
                "src": "1647:140:2"
              }
            ],
            "id": 700,
            "name": "FunctionDefinition",
            "src": "1584:203:2"
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
              "scope": 862,
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
                      "scope": 779,
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
                        "src": "1827:4:2"
                      }
                    ],
                    "id": 702,
                    "name": "VariableDeclaration",
                    "src": "1827:16:2"
                  }
                ],
                "id": 703,
                "name": "ParameterList",
                "src": "1826:18:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 704,
                "name": "ParameterList",
                "src": "1852:0:2"
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
                          "name": "higherNote",
                          "overrides": null,
                          "scope": 778,
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
                            "src": "1862:4:2"
                          }
                        ],
                        "id": 706,
                        "name": "VariableDeclaration",
                        "src": "1862:15:2"
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
                        "src": "1880:1:2"
                      }
                    ],
                    "id": 708,
                    "name": "VariableDeclarationStatement",
                    "src": "1862:19:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            710
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "mutability": "mutable",
                              "name": "i",
                              "overrides": null,
                              "scope": 777,
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
                                "id": 709,
                                "name": "ElementaryTypeName",
                                "src": "1895:4:2"
                              }
                            ],
                            "id": 710,
                            "name": "VariableDeclaration",
                            "src": "1895:6:2"
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
                            "id": 711,
                            "name": "Literal",
                            "src": "1904:1:2"
                          }
                        ],
                        "id": 712,
                        "name": "VariableDeclarationStatement",
                        "src": "1895:10:2"
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
                              "referencedDeclaration": 710,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 713,
                            "name": "Identifier",
                            "src": "1907:1:2"
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
                                    "id": 714,
                                    "name": "Identifier",
                                    "src": "1911:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 702,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 715,
                                    "name": "Identifier",
                                    "src": "1921:11:2"
                                  }
                                ],
                                "id": 716,
                                "name": "IndexAccess",
                                "src": "1911:22:2"
                              }
                            ],
                            "id": 717,
                            "name": "MemberAccess",
                            "src": "1911:38:2"
                          }
                        ],
                        "id": 718,
                        "name": "BinaryOperation",
                        "src": "1907:42:2"
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
                                  "referencedDeclaration": 710,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 719,
                                "name": "Identifier",
                                "src": "1951:1:2"
                              }
                            ],
                            "id": 720,
                            "name": "UnaryOperation",
                            "src": "1951:3:2"
                          }
                        ],
                        "id": 721,
                        "name": "ExpressionStatement",
                        "src": "1951:3:2"
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
                                      "referencedDeclaration": 706,
                                      "type": "uint256",
                                      "value": "higherNote"
                                    },
                                    "id": 722,
                                    "name": "Identifier",
                                    "src": "1972:10:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "averageNote",
                                      "referencedDeclaration": 276,
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
                                              "referencedDeclaration": 256,
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
                                                      "referencedDeclaration": 283,
                                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                      "value": "elections"
                                                    },
                                                    "id": 723,
                                                    "name": "Identifier",
                                                    "src": "1986:9:2"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 702,
                                                      "type": "uint256",
                                                      "value": "_electionId"
                                                    },
                                                    "id": 724,
                                                    "name": "Identifier",
                                                    "src": "1996:11:2"
                                                  }
                                                ],
                                                "id": 725,
                                                "name": "IndexAccess",
                                                "src": "1986:22:2"
                                              }
                                            ],
                                            "id": 726,
                                            "name": "MemberAccess",
                                            "src": "1986:33:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 710,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 727,
                                            "name": "Identifier",
                                            "src": "2020:1:2"
                                          }
                                        ],
                                        "id": 728,
                                        "name": "IndexAccess",
                                        "src": "1986:36:2"
                                      }
                                    ],
                                    "id": 729,
                                    "name": "MemberAccess",
                                    "src": "1986:48:2"
                                  }
                                ],
                                "id": 730,
                                "name": "BinaryOperation",
                                "src": "1972:62:2"
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
                                                  "referencedDeclaration": 263,
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
                                                          "referencedDeclaration": 283,
                                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                          "value": "elections"
                                                        },
                                                        "id": 731,
                                                        "name": "Identifier",
                                                        "src": "2053:9:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 702,
                                                          "type": "uint256",
                                                          "value": "_electionId"
                                                        },
                                                        "id": 732,
                                                        "name": "Identifier",
                                                        "src": "2063:11:2"
                                                      }
                                                    ],
                                                    "id": 733,
                                                    "name": "IndexAccess",
                                                    "src": "2053:22:2"
                                                  }
                                                ],
                                                "id": 734,
                                                "name": "MemberAccess",
                                                "src": "2053:30:2"
                                              }
                                            ],
                                            "id": 735,
                                            "name": "MemberAccess",
                                            "src": "2053:35:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 710,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 736,
                                            "name": "Identifier",
                                            "src": "2089:1:2"
                                          }
                                        ],
                                        "id": 737,
                                        "name": "FunctionCall",
                                        "src": "2053:38:2"
                                      }
                                    ],
                                    "id": 738,
                                    "name": "ExpressionStatement",
                                    "src": "2053:38:2"
                                  }
                                ],
                                "id": 739,
                                "name": "Block",
                                "src": "2035:71:2"
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
                                          "referencedDeclaration": 706,
                                          "type": "uint256",
                                          "value": "higherNote"
                                        },
                                        "id": 740,
                                        "name": "Identifier",
                                        "src": "2127:10:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "averageNote",
                                          "referencedDeclaration": 276,
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
                                                  "referencedDeclaration": 256,
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
                                                          "referencedDeclaration": 283,
                                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                          "value": "elections"
                                                        },
                                                        "id": 741,
                                                        "name": "Identifier",
                                                        "src": "2140:9:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 702,
                                                          "type": "uint256",
                                                          "value": "_electionId"
                                                        },
                                                        "id": 742,
                                                        "name": "Identifier",
                                                        "src": "2150:11:2"
                                                      }
                                                    ],
                                                    "id": 743,
                                                    "name": "IndexAccess",
                                                    "src": "2140:22:2"
                                                  }
                                                ],
                                                "id": 744,
                                                "name": "MemberAccess",
                                                "src": "2140:33:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 710,
                                                  "type": "uint256",
                                                  "value": "i"
                                                },
                                                "id": 745,
                                                "name": "Identifier",
                                                "src": "2174:1:2"
                                              }
                                            ],
                                            "id": 746,
                                            "name": "IndexAccess",
                                            "src": "2140:36:2"
                                          }
                                        ],
                                        "id": 747,
                                        "name": "MemberAccess",
                                        "src": "2140:48:2"
                                      }
                                    ],
                                    "id": 748,
                                    "name": "BinaryOperation",
                                    "src": "2127:61:2"
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
                                                  "referencedDeclaration": 263,
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
                                                          "referencedDeclaration": 283,
                                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                          "value": "elections"
                                                        },
                                                        "id": 749,
                                                        "name": "Identifier",
                                                        "src": "2214:9:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 702,
                                                          "type": "uint256",
                                                          "value": "_electionId"
                                                        },
                                                        "id": 750,
                                                        "name": "Identifier",
                                                        "src": "2224:11:2"
                                                      }
                                                    ],
                                                    "id": 751,
                                                    "name": "IndexAccess",
                                                    "src": "2214:22:2"
                                                  }
                                                ],
                                                "id": 752,
                                                "name": "MemberAccess",
                                                "src": "2214:30:2"
                                              }
                                            ],
                                            "id": 753,
                                            "name": "UnaryOperation",
                                            "src": "2207:37:2"
                                          }
                                        ],
                                        "id": 754,
                                        "name": "ExpressionStatement",
                                        "src": "2207:37:2"
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
                                                  "referencedDeclaration": 706,
                                                  "type": "uint256",
                                                  "value": "higherNote"
                                                },
                                                "id": 755,
                                                "name": "Identifier",
                                                "src": "2262:10:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "member_name": "averageNote",
                                                  "referencedDeclaration": 276,
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
                                                          "referencedDeclaration": 256,
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
                                                                  "referencedDeclaration": 283,
                                                                  "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                                  "value": "elections"
                                                                },
                                                                "id": 756,
                                                                "name": "Identifier",
                                                                "src": "2275:9:2"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 702,
                                                                  "type": "uint256",
                                                                  "value": "_electionId"
                                                                },
                                                                "id": 757,
                                                                "name": "Identifier",
                                                                "src": "2285:11:2"
                                                              }
                                                            ],
                                                            "id": 758,
                                                            "name": "IndexAccess",
                                                            "src": "2275:22:2"
                                                          }
                                                        ],
                                                        "id": 759,
                                                        "name": "MemberAccess",
                                                        "src": "2275:33:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 710,
                                                          "type": "uint256",
                                                          "value": "i"
                                                        },
                                                        "id": 760,
                                                        "name": "Identifier",
                                                        "src": "2309:1:2"
                                                      }
                                                    ],
                                                    "id": 761,
                                                    "name": "IndexAccess",
                                                    "src": "2275:36:2"
                                                  }
                                                ],
                                                "id": 762,
                                                "name": "MemberAccess",
                                                "src": "2275:48:2"
                                              }
                                            ],
                                            "id": 763,
                                            "name": "Assignment",
                                            "src": "2262:61:2"
                                          }
                                        ],
                                        "id": 764,
                                        "name": "ExpressionStatement",
                                        "src": "2262:61:2"
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
                                                      "referencedDeclaration": 263,
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
                                                              "referencedDeclaration": 283,
                                                              "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                              "value": "elections"
                                                            },
                                                            "id": 765,
                                                            "name": "Identifier",
                                                            "src": "2341:9:2"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 702,
                                                              "type": "uint256",
                                                              "value": "_electionId"
                                                            },
                                                            "id": 766,
                                                            "name": "Identifier",
                                                            "src": "2351:11:2"
                                                          }
                                                        ],
                                                        "id": 767,
                                                        "name": "IndexAccess",
                                                        "src": "2341:22:2"
                                                      }
                                                    ],
                                                    "id": 768,
                                                    "name": "MemberAccess",
                                                    "src": "2341:30:2"
                                                  }
                                                ],
                                                "id": 769,
                                                "name": "MemberAccess",
                                                "src": "2341:35:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 710,
                                                  "type": "uint256",
                                                  "value": "i"
                                                },
                                                "id": 770,
                                                "name": "Identifier",
                                                "src": "2377:1:2"
                                              }
                                            ],
                                            "id": 771,
                                            "name": "FunctionCall",
                                            "src": "2341:38:2"
                                          }
                                        ],
                                        "id": 772,
                                        "name": "ExpressionStatement",
                                        "src": "2341:38:2"
                                      }
                                    ],
                                    "id": 773,
                                    "name": "Block",
                                    "src": "2189:205:2"
                                  }
                                ],
                                "id": 774,
                                "name": "IfStatement",
                                "src": "2124:270:2"
                              }
                            ],
                            "id": 775,
                            "name": "IfStatement",
                            "src": "1969:425:2"
                          }
                        ],
                        "id": 776,
                        "name": "Block",
                        "src": "1955:449:2"
                      }
                    ],
                    "id": 777,
                    "name": "ForStatement",
                    "src": "1891:513:2"
                  }
                ],
                "id": 778,
                "name": "Block",
                "src": "1852:558:2"
              }
            ],
            "id": 779,
            "name": "FunctionDefinition",
            "src": "1793:617:2"
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
              "scope": 862,
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
                      "scope": 861,
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
                        "src": "2449:4:2"
                      }
                    ],
                    "id": 781,
                    "name": "VariableDeclaration",
                    "src": "2449:16:2"
                  }
                ],
                "id": 782,
                "name": "ParameterList",
                "src": "2448:18:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 783,
                "name": "ParameterList",
                "src": "2474:0:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        785
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
                          "scope": 860,
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
                            "id": 784,
                            "name": "ElementaryTypeName",
                            "src": "2484:4:2"
                          }
                        ],
                        "id": 785,
                        "name": "VariableDeclaration",
                        "src": "2484:18:2"
                      }
                    ],
                    "id": 786,
                    "name": "VariableDeclarationStatement",
                    "src": "2484:18:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            788
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "mutability": "mutable",
                              "name": "i",
                              "overrides": null,
                              "scope": 859,
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
                                "id": 787,
                                "name": "ElementaryTypeName",
                                "src": "2516:4:2"
                              }
                            ],
                            "id": 788,
                            "name": "VariableDeclaration",
                            "src": "2516:6:2"
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
                            "id": 789,
                            "name": "Literal",
                            "src": "2525:1:2"
                          }
                        ],
                        "id": 790,
                        "name": "VariableDeclarationStatement",
                        "src": "2516:10:2"
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
                              "referencedDeclaration": 788,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 791,
                            "name": "Identifier",
                            "src": "2528:1:2"
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
                                  "referencedDeclaration": 263,
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
                                          "referencedDeclaration": 283,
                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                          "value": "elections"
                                        },
                                        "id": 792,
                                        "name": "Identifier",
                                        "src": "2532:9:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 781,
                                          "type": "uint256",
                                          "value": "_electionId"
                                        },
                                        "id": 793,
                                        "name": "Identifier",
                                        "src": "2542:11:2"
                                      }
                                    ],
                                    "id": 794,
                                    "name": "IndexAccess",
                                    "src": "2532:22:2"
                                  }
                                ],
                                "id": 795,
                                "name": "MemberAccess",
                                "src": "2532:30:2"
                              }
                            ],
                            "id": 796,
                            "name": "MemberAccess",
                            "src": "2532:37:2"
                          }
                        ],
                        "id": 797,
                        "name": "BinaryOperation",
                        "src": "2528:41:2"
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
                                  "referencedDeclaration": 788,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 798,
                                "name": "Identifier",
                                "src": "2571:1:2"
                              }
                            ],
                            "id": 799,
                            "name": "UnaryOperation",
                            "src": "2571:3:2"
                          }
                        ],
                        "id": 800,
                        "name": "ExpressionStatement",
                        "src": "2571:3:2"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                802
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "mutability": "mutable",
                                  "name": "currentPercent",
                                  "overrides": null,
                                  "scope": 858,
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
                                    "id": 801,
                                    "name": "ElementaryTypeName",
                                    "src": "2589:4:2"
                                  }
                                ],
                                "id": 802,
                                "name": "VariableDeclaration",
                                "src": "2589:19:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "percent",
                                  "referencedDeclaration": 274,
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
                                          "referencedDeclaration": 256,
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
                                                  "referencedDeclaration": 283,
                                                  "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                  "value": "elections"
                                                },
                                                "id": 803,
                                                "name": "Identifier",
                                                "src": "2611:9:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 781,
                                                  "type": "uint256",
                                                  "value": "_electionId"
                                                },
                                                "id": 804,
                                                "name": "Identifier",
                                                "src": "2621:11:2"
                                              }
                                            ],
                                            "id": 805,
                                            "name": "IndexAccess",
                                            "src": "2611:22:2"
                                          }
                                        ],
                                        "id": 806,
                                        "name": "MemberAccess",
                                        "src": "2611:33:2"
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
                                              "referencedDeclaration": 263,
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
                                                      "referencedDeclaration": 283,
                                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                      "value": "elections"
                                                    },
                                                    "id": 807,
                                                    "name": "Identifier",
                                                    "src": "2645:9:2"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 781,
                                                      "type": "uint256",
                                                      "value": "_electionId"
                                                    },
                                                    "id": 808,
                                                    "name": "Identifier",
                                                    "src": "2655:11:2"
                                                  }
                                                ],
                                                "id": 809,
                                                "name": "IndexAccess",
                                                "src": "2645:22:2"
                                              }
                                            ],
                                            "id": 810,
                                            "name": "MemberAccess",
                                            "src": "2645:30:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 788,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 811,
                                            "name": "Identifier",
                                            "src": "2676:1:2"
                                          }
                                        ],
                                        "id": 812,
                                        "name": "IndexAccess",
                                        "src": "2645:33:2"
                                      }
                                    ],
                                    "id": 813,
                                    "name": "IndexAccess",
                                    "src": "2611:68:2"
                                  }
                                ],
                                "id": 814,
                                "name": "MemberAccess",
                                "src": "2611:76:2"
                              }
                            ],
                            "id": 815,
                            "name": "VariableDeclarationStatement",
                            "src": "2589:98:2"
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
                                      "referencedDeclaration": 788,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 816,
                                    "name": "Identifier",
                                    "src": "2704:1:2"
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
                                    "id": 817,
                                    "name": "Literal",
                                    "src": "2709:1:2"
                                  }
                                ],
                                "id": 818,
                                "name": "BinaryOperation",
                                "src": "2704:6:2"
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
                                              "referencedDeclaration": 785,
                                              "type": "uint256",
                                              "value": "higherPercent"
                                            },
                                            "id": 819,
                                            "name": "Identifier",
                                            "src": "2729:13:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 802,
                                              "type": "uint256",
                                              "value": "currentPercent"
                                            },
                                            "id": 820,
                                            "name": "Identifier",
                                            "src": "2745:14:2"
                                          }
                                        ],
                                        "id": 821,
                                        "name": "Assignment",
                                        "src": "2729:30:2"
                                      }
                                    ],
                                    "id": 822,
                                    "name": "ExpressionStatement",
                                    "src": "2729:30:2"
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
                                              "referencedDeclaration": 265,
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
                                                    "id": 823,
                                                    "name": "Identifier",
                                                    "src": "2777:9:2"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 781,
                                                      "type": "uint256",
                                                      "value": "_electionId"
                                                    },
                                                    "id": 824,
                                                    "name": "Identifier",
                                                    "src": "2787:11:2"
                                                  }
                                                ],
                                                "id": 825,
                                                "name": "IndexAccess",
                                                "src": "2777:22:2"
                                              }
                                            ],
                                            "id": 826,
                                            "name": "MemberAccess",
                                            "src": "2777:29:2"
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
                                                  "referencedDeclaration": 263,
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
                                                          "referencedDeclaration": 283,
                                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                          "value": "elections"
                                                        },
                                                        "id": 827,
                                                        "name": "Identifier",
                                                        "src": "2809:9:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 781,
                                                          "type": "uint256",
                                                          "value": "_electionId"
                                                        },
                                                        "id": 828,
                                                        "name": "Identifier",
                                                        "src": "2819:11:2"
                                                      }
                                                    ],
                                                    "id": 829,
                                                    "name": "IndexAccess",
                                                    "src": "2809:22:2"
                                                  }
                                                ],
                                                "id": 830,
                                                "name": "MemberAccess",
                                                "src": "2809:30:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 788,
                                                  "type": "uint256",
                                                  "value": "i"
                                                },
                                                "id": 831,
                                                "name": "Identifier",
                                                "src": "2840:1:2"
                                              }
                                            ],
                                            "id": 832,
                                            "name": "IndexAccess",
                                            "src": "2809:33:2"
                                          }
                                        ],
                                        "id": 833,
                                        "name": "Assignment",
                                        "src": "2777:65:2"
                                      }
                                    ],
                                    "id": 834,
                                    "name": "ExpressionStatement",
                                    "src": "2777:65:2"
                                  }
                                ],
                                "id": 835,
                                "name": "Block",
                                "src": "2711:146:2"
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
                                          "referencedDeclaration": 802,
                                          "type": "uint256",
                                          "value": "currentPercent"
                                        },
                                        "id": 836,
                                        "name": "Identifier",
                                        "src": "2879:14:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 785,
                                          "type": "uint256",
                                          "value": "higherPercent"
                                        },
                                        "id": 837,
                                        "name": "Identifier",
                                        "src": "2896:13:2"
                                      }
                                    ],
                                    "id": 838,
                                    "name": "BinaryOperation",
                                    "src": "2879:30:2"
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
                                                  "referencedDeclaration": 785,
                                                  "type": "uint256",
                                                  "value": "higherPercent"
                                                },
                                                "id": 839,
                                                "name": "Identifier",
                                                "src": "2928:13:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 802,
                                                  "type": "uint256",
                                                  "value": "currentPercent"
                                                },
                                                "id": 840,
                                                "name": "Identifier",
                                                "src": "2944:14:2"
                                              }
                                            ],
                                            "id": 841,
                                            "name": "Assignment",
                                            "src": "2928:30:2"
                                          }
                                        ],
                                        "id": 842,
                                        "name": "ExpressionStatement",
                                        "src": "2928:30:2"
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
                                                  "referencedDeclaration": 265,
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
                                                        "id": 843,
                                                        "name": "Identifier",
                                                        "src": "2976:9:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 781,
                                                          "type": "uint256",
                                                          "value": "_electionId"
                                                        },
                                                        "id": 844,
                                                        "name": "Identifier",
                                                        "src": "2986:11:2"
                                                      }
                                                    ],
                                                    "id": 845,
                                                    "name": "IndexAccess",
                                                    "src": "2976:22:2"
                                                  }
                                                ],
                                                "id": 846,
                                                "name": "MemberAccess",
                                                "src": "2976:29:2"
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
                                                      "referencedDeclaration": 263,
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
                                                              "referencedDeclaration": 283,
                                                              "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                              "value": "elections"
                                                            },
                                                            "id": 847,
                                                            "name": "Identifier",
                                                            "src": "3008:9:2"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 781,
                                                              "type": "uint256",
                                                              "value": "_electionId"
                                                            },
                                                            "id": 848,
                                                            "name": "Identifier",
                                                            "src": "3018:11:2"
                                                          }
                                                        ],
                                                        "id": 849,
                                                        "name": "IndexAccess",
                                                        "src": "3008:22:2"
                                                      }
                                                    ],
                                                    "id": 850,
                                                    "name": "MemberAccess",
                                                    "src": "3008:30:2"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 788,
                                                      "type": "uint256",
                                                      "value": "i"
                                                    },
                                                    "id": 851,
                                                    "name": "Identifier",
                                                    "src": "3039:1:2"
                                                  }
                                                ],
                                                "id": 852,
                                                "name": "IndexAccess",
                                                "src": "3008:33:2"
                                              }
                                            ],
                                            "id": 853,
                                            "name": "Assignment",
                                            "src": "2976:65:2"
                                          }
                                        ],
                                        "id": 854,
                                        "name": "ExpressionStatement",
                                        "src": "2976:65:2"
                                      }
                                    ],
                                    "id": 855,
                                    "name": "Block",
                                    "src": "2910:146:2"
                                  }
                                ],
                                "id": 856,
                                "name": "IfStatement",
                                "src": "2875:181:2"
                              }
                            ],
                            "id": 857,
                            "name": "IfStatement",
                            "src": "2701:355:2"
                          }
                        ],
                        "id": 858,
                        "name": "Block",
                        "src": "2575:491:2"
                      }
                    ],
                    "id": 859,
                    "name": "ForStatement",
                    "src": "2512:554:2"
                  }
                ],
                "id": 860,
                "name": "Block",
                "src": "2474:598:2"
              }
            ],
            "id": 861,
            "name": "FunctionDefinition",
            "src": "2416:656:2"
          }
        ],
        "id": 862,
        "name": "ContractDefinition",
        "src": "191:2883:2"
      }
    ],
    "id": 863,
    "name": "SourceUnit",
    "src": "32:3043:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.7.0+commit.9e61f92b.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.3",
  "updatedAt": "2021-01-20T20:14:28.453Z",
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