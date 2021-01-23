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
      "name": "getElectionWinners",
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
  "metadata": "{\"compiler\":{\"version\":\"0.7.0+commit.9e61f92b\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"addAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_candidateName\",\"type\":\"string\"}],\"name\":\"addCandidate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_noteId\",\"type\":\"uint256\"}],\"name\":\"addNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"addVoter\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_note\",\"type\":\"uint256\"}],\"name\":\"calculatePercentageOfNote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"computeAverageNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeCandidatesAverageNote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeFinalRoundWinner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeFirstRoundWinners\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"computeResult\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_title\",\"type\":\"string\"},{\"internalType\":\"string[]\",\"name\":\"_candidatesNames\",\"type\":\"string[]\"}],\"name\":\"createElection\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"deleteAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"elections\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"creationDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"closingDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalVoters\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"isOpen\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"candidatesCount\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"electionsCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"endElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"getCandidate\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_noteId\",\"type\":\"uint256\"}],\"name\":\"getCandidateNote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getCandidatesCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionStatus\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionTitle\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getElectionWinners\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"getFirstRoundWinners\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"}],\"name\":\"getOneFirstRoundWinner\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_electionId\",\"type\":\"uint256\"}],\"name\":\"incrementVoters\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"userAddress\",\"type\":\"address\"}],\"name\":\"isUserAdmin\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol\":\"ElectionHelper\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Candidate.sol\":{\"keccak256\":\"0x52d89b6f9a5d2c22104d8f090f446f41dc184f58ef0ea7d506d49a2d040ccd28\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://dea9346bfae0da013fd9b79345beeb639f75449ad46f6726053b04714887d118\",\"dweb:/ipfs/QmcbgNcwp1NG67WPRF12ugtpKYsf1HQcxWcHZ1aHZd55hU\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol\":{\"keccak256\":\"0x2543f5b375ccf859c893cf934b47a1adc76385e0414b386d5326f2095cdcbfa5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ec9e0e001fa346a82f6a7141ece6527f14a152d6d2b05f92e12fd4e48cd6d02a\",\"dweb:/ipfs/QmXdWYie9NXU6RPbkgG9ZkdLWRKXaMKj1DQuJAE34PkbNx\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol\":{\"keccak256\":\"0xc8a64e9f860fdd8f955fb15b006c0fb2a443b9d691a89b2f740c3e449019d0a6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b438dca3bfe6bab6ba7b09ba295bd34427a479ff41b04beb28d4c934d43a7722\",\"dweb:/ipfs/QmcyWgiudn7uajqAVVCvKZgR5XBpm4XHi4gx5GkYUDSNA9\"]},\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol\":{\"keccak256\":\"0x7f1004825e1cc40d7b663e20d3be71ed9c64baf7f05eae9b115a4d4448c8fdcf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5d8ccf5e65c162aeabb1b5e804f7183d95be7a985d5466796025a39ede9cfa62\",\"dweb:/ipfs/QmNZR6izJaw2bC9aCAcVbtS1kE9YBWuuqoaryy8idA14ta\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600560008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061208e806100d96000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80637bb1541d116100f9578063cd015c3211610097578063d8f7a0bb11610071578063d8f7a0bb14610505578063e76f6b5814610521578063f2fde38b14610551578063fb5cbf431461056d576101a9565b8063cd015c32146104b1578063cd08bca0146104cd578063cd62d5dd146104e9576101a9565b80639c98bcbb116100d35780639c98bcbb1461042d578063ab6cb04914610449578063b12b1a7d14610465578063be4d823e14610495576101a9565b80637bb1541d146103d55780638da5cb5b146103f15780639a74c6951461040f576101a9565b80633a0b35b7116101665780634d94fc6a116101405780634d94fc6a146103245780635e6fef0114610354578063704802751461038957806374d523a8146103a5576101a9565b80633a0b35b7146102925780633ee95f00146102c25780634bd46448146102f2576101a9565b80631750a3d0146101ae5780631aaa5246146101ca57806324785b9e146101e657806327e1f7df14610216578063337fa14614610232578063349813b214610262575b600080fd5b6101c860048036038101906101c39190611abd565b61059d565b005b6101e460048036038101906101df9190611a6b565b610604565b005b61020060048036038101906101fb9190611a6b565b61062d565b60405161020d9190611d44565b60405180910390f35b610230600480360381019061022b91906119d6565b61065a565b005b61024c60048036038101906102479190611b4d565b6107d9565b6040516102599190611e67565b60405180910390f35b61027c600480360381019061027791906119ff565b610820565b6040516102899190611e67565b60405180910390f35b6102ac60048036038101906102a79190611b4d565b610a18565b6040516102b99190611e67565b60405180910390f35b6102dc60048036038101906102d79190611a6b565b610aa8565b6040516102e99190611e67565b60405180910390f35b61030c60048036038101906103079190611b11565b610ac8565b60405161031b93929190611d81565b60405180910390f35b61033e60048036038101906103399190611a6b565b610bb0565b60405161034b9190611d5f565b60405180910390f35b61036e60048036038101906103699190611a6b565b610c68565b60405161038096959493929190611dbf565b60405180910390f35b6103a3600480360381019061039e91906119d6565b610d49565b005b6103bf60048036038101906103ba91906119d6565b610e39565b6040516103cc9190611d44565b60405180910390f35b6103ef60048036038101906103ea9190611a6b565b610e8f565b005b6103f9610ffb565b6040516104069190611d07565b60405180910390f35b61041761101f565b6040516104249190611e67565b60405180910390f35b61044760048036038101906104429190611a6b565b611025565b005b610463600480360381019061045e9190611a6b565b611110565b005b61047f600480360381019061047a9190611a6b565b61114c565b60405161048c9190611d22565b60405180910390f35b6104af60048036038101906104aa9190611a6b565b6111ba565b005b6104cb60048036038101906104c69190611a6b565b611204565b005b6104e760048036038101906104e29190611b4d565b61136c565b005b61050360048036038101906104fe9190611b11565b6113bc565b005b61051f600480360381019061051a9190611a6b565b6115a6565b005b61053b60048036038101906105369190611b11565b61161e565b6040516105489190611e67565b60405180910390f35b61056b600480360381019061056691906119d6565b611654565b005b61058760048036038101906105829190611a6b565b6117a3565b6040516105949190611d22565b60405180910390f35b8060026000848152602001908152602001600020600601600060026000868152602001908152602001600020600501600081548092919060010191905055815260200190815260200160002060000190805190602001906105ff929190611811565b505050565b600260008281526020019081526020016000206003016000815480929190600101919050555050565b60006002600083815260200190815260200160002060040160009054906101000a900460ff169050919050565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146106ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e590611e27565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561077d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077490611e47565b60405180910390fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600060026000858152602001908152602001600020600601600084815260200190815260200160002060010160008381526020019081526020016000205490509392505050565b60003360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146108b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ad90611e27565b60405180910390fd5b60008351905060016000815480929190600101919050555060006002600060015481526020019081526020016000209050858160000190805190602001906108ff929190611811565b504281600101819055506000816003018190555060018160040160006101000a81548160ff02191690831515021790555060005b828110156109675761095a60015487838151811061094d57fe5b602002602001015161059d565b8080600101915050610933565b503360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600154935050505092915050565b600080600260008681526020019081526020016000206006016000858152602001908152602001600020600101600084815260200190815260200160002054905060006064820290506000600260008881526020019081526020016000206003015490506000811415610a915760009350505050610aa1565b808281610a9a57fe5b0493505050505b9392505050565b600060026000838152602001908152602001600020600501549050919050565b6060600080600060026000878152602001908152602001600020600601600086815260200190815260200160002090508060000181600201548260030154828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b9b5780601f10610b7057610100808354040283529160200191610b9b565b820191906000526020600020905b815481529060010190602001808311610b7e57829003601f168201915b50505050509250935093509350509250925092565b6060600260008381526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c5c5780601f10610c3157610100808354040283529160200191610c5c565b820191906000526020600020905b815481529060010190602001808311610c3f57829003601f168201915b50505050509050919050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d145780601f10610ce957610100808354040283529160200191610d14565b820191906000526020600020905b815481529060010190602001808311610cf757829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154905086565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610ddd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd490611e27565b60405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b6002600084815260200190815260200160002060080180549050811015610ff6576000600260008581526020019081526020016000206006016000600260008781526020019081526020016000206008018481548110610ef357fe5b906000526020600020015481526020019081526020016000206002015490506000821415610f7f57809250600260008581526020019081526020016000206008018281548110610f3f57fe5b906000526020600020015460026000868152602001908152602001600020600801600081548110610f6c57fe5b9060005260206000200181905550610fe8565b82811115610fe757809250600260008581526020019081526020016000206008018281548110610fab57fe5b906000526020600020015460026000868152602001908152602001600020600801600081548110610fd857fe5b90600052602060002001819055505b5b508080600101915050610e97565b505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146110b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b090611e27565b60405180910390fd5b60006002600084815260200190815260200160002060040160006101000a81548160ff02191690831515021790555042600260008481526020019081526020016000206002018190555061110c826111ba565b5050565b60005b60026000838152602001908152602001600020600501548110156111485761113b82826113bc565b8080600101915050611113565b5050565b6060600260008381526020019081526020016000206008018054806020026020016040519081016040528092919081815260200182805480156111ae57602002820191906000526020600020905b81548152602001906001019080831161119a575b50505050509050919050565b6111c381611110565b6111cc81611204565b6111d581610e8f565b6001600260008381526020019081526020016000206008018054905011156112015761120081610e8f565b5b50565b6000805b6002600084815260200190815260200160002060050154811015611367576002600084815260200190815260200160002060060160008281526020019081526020016000206003015482141561129a576002600084815260200190815260200160002060080181908060018154018082558091505060019003906000526020600020016000909190919091505561135a565b60026000848152602001908152602001600020600601600082815260200190815260200160002060030154821015611359576002600084815260200190815260200160002060080160006112ee9190611891565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301549150600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150555b5b8080600101915050611208565b505050565b600260008481526020019081526020016000206006016000838152602001908152602001600020600101600082815260200190815260200160002060008154809291906001019190505550505050565b600060026000848152602001908152602001600020600301541415611410576000600260008481526020019081526020016000206006016000838152602001908152602001600020600301819055506115a2565b6000600690505b603260026000858152602001908152602001600020600601600084815260200190815260200160002060020154116115a0573073ffffffffffffffffffffffffffffffffffffffff16633a0b35b78484846040518463ffffffff1660e01b815260040161148693929190611e82565b60206040518083038186803b15801561149e57600080fd5b505afa1580156114b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d69190611a94565b600260008581526020019081526020016000206006016000848152602001908152602001600020600201540160026000858152602001908152602001600020600601600084815260200190815260200160002060020181905550603260026000858152602001908152602001600020600601600084815260200190815260200160002060020154106115925780600260008581526020019081526020016000206006016000848152602001908152602001600020600301819055505b808060019003915050611417565b505b5050565b60016002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061161b81610604565b50565b600060026000848152602001908152602001600020600801828154811061164157fe5b9060005260206000200154905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146116ac57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156116e657600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606002600083815260200190815260200160002060080180548060200260200160405190810160405280929190818152602001828054801561180557602002820191906000526020600020905b8154815260200190600101908083116117f1575b50505050509050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061185257805160ff1916838001178555611880565b82800160010185558215611880579182015b8281111561187f578251825591602001919060010190611864565b5b50905061188d91906118b2565b5090565b50805460008255906000526020600020908101906118af91906118b2565b50565b5b808211156118cb5760008160009055506001016118b3565b5090565b6000813590506118de8161202a565b92915050565b600082601f8301126118f557600080fd5b813561190861190382611ee6565b611eb9565b9150818183526020840193506020810190508360005b8381101561194e57813586016119348882611958565b84526020840193506020830192505060018101905061191e565b5050505092915050565b600082601f83011261196957600080fd5b813561197c61197782611f0e565b611eb9565b9150808252602083016020830185838301111561199857600080fd5b6119a3838284611fd7565b50505092915050565b6000813590506119bb81612041565b92915050565b6000815190506119d081612041565b92915050565b6000602082840312156119e857600080fd5b60006119f6848285016118cf565b91505092915050565b60008060408385031215611a1257600080fd5b600083013567ffffffffffffffff811115611a2c57600080fd5b611a3885828601611958565b925050602083013567ffffffffffffffff811115611a5557600080fd5b611a61858286016118e4565b9150509250929050565b600060208284031215611a7d57600080fd5b6000611a8b848285016119ac565b91505092915050565b600060208284031215611aa657600080fd5b6000611ab4848285016119c1565b91505092915050565b60008060408385031215611ad057600080fd5b6000611ade858286016119ac565b925050602083013567ffffffffffffffff811115611afb57600080fd5b611b0785828601611958565b9150509250929050565b60008060408385031215611b2457600080fd5b6000611b32858286016119ac565b9250506020611b43858286016119ac565b9150509250929050565b600080600060608486031215611b6257600080fd5b6000611b70868287016119ac565b9350506020611b81868287016119ac565b9250506040611b92868287016119ac565b9150509250925092565b6000611ba88383611ce9565b60208301905092915050565b611bbd81611f8f565b82525050565b6000611bce82611f4a565b611bd88185611f6d565b9350611be383611f3a565b8060005b83811015611c14578151611bfb8882611b9c565b9750611c0683611f60565b925050600181019050611be7565b5085935050505092915050565b611c2a81611fa1565b82525050565b6000611c3b82611f55565b611c458185611f7e565b9350611c55818560208601611fe6565b611c5e81612019565b840191505092915050565b6000611c76601483611f7e565b91507f596f7520617265206e6f7420616e2061646d696e0000000000000000000000006000830152602082019050919050565b6000611cb6601f83611f7e565b91507f43616e6e6f742072656d6f7665206f776e65722066726f6d2061646d696e73006000830152602082019050919050565b611cf281611fcd565b82525050565b611d0181611fcd565b82525050565b6000602082019050611d1c6000830184611bb4565b92915050565b60006020820190508181036000830152611d3c8184611bc3565b905092915050565b6000602082019050611d596000830184611c21565b92915050565b60006020820190508181036000830152611d798184611c30565b905092915050565b60006060820190508181036000830152611d9b8186611c30565b9050611daa6020830185611cf8565b611db76040830184611cf8565b949350505050565b600060c0820190508181036000830152611dd98189611c30565b9050611de86020830188611cf8565b611df56040830187611cf8565b611e026060830186611cf8565b611e0f6080830185611c21565b611e1c60a0830184611cf8565b979650505050505050565b60006020820190508181036000830152611e4081611c69565b9050919050565b60006020820190508181036000830152611e6081611ca9565b9050919050565b6000602082019050611e7c6000830184611cf8565b92915050565b6000606082019050611e976000830186611cf8565b611ea46020830185611cf8565b611eb16040830184611cf8565b949350505050565b6000604051905081810181811067ffffffffffffffff82111715611edc57600080fd5b8060405250919050565b600067ffffffffffffffff821115611efd57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff821115611f2557600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611f9a82611fad565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612004578082015181840152602081019050611fe9565b83811115612013576000848401525b50505050565b6000601f19601f8301169050919050565b61203381611f8f565b811461203e57600080fd5b50565b61204a81611fcd565b811461205557600080fd5b5056fea26469706673582212203fc619e2d5db7ded3b3560e475aa2b788efc244d3a130149f33742d7e67a64a864736f6c63430007000033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101a95760003560e01c80637bb1541d116100f9578063cd015c3211610097578063d8f7a0bb11610071578063d8f7a0bb14610505578063e76f6b5814610521578063f2fde38b14610551578063fb5cbf431461056d576101a9565b8063cd015c32146104b1578063cd08bca0146104cd578063cd62d5dd146104e9576101a9565b80639c98bcbb116100d35780639c98bcbb1461042d578063ab6cb04914610449578063b12b1a7d14610465578063be4d823e14610495576101a9565b80637bb1541d146103d55780638da5cb5b146103f15780639a74c6951461040f576101a9565b80633a0b35b7116101665780634d94fc6a116101405780634d94fc6a146103245780635e6fef0114610354578063704802751461038957806374d523a8146103a5576101a9565b80633a0b35b7146102925780633ee95f00146102c25780634bd46448146102f2576101a9565b80631750a3d0146101ae5780631aaa5246146101ca57806324785b9e146101e657806327e1f7df14610216578063337fa14614610232578063349813b214610262575b600080fd5b6101c860048036038101906101c39190611abd565b61059d565b005b6101e460048036038101906101df9190611a6b565b610604565b005b61020060048036038101906101fb9190611a6b565b61062d565b60405161020d9190611d44565b60405180910390f35b610230600480360381019061022b91906119d6565b61065a565b005b61024c60048036038101906102479190611b4d565b6107d9565b6040516102599190611e67565b60405180910390f35b61027c600480360381019061027791906119ff565b610820565b6040516102899190611e67565b60405180910390f35b6102ac60048036038101906102a79190611b4d565b610a18565b6040516102b99190611e67565b60405180910390f35b6102dc60048036038101906102d79190611a6b565b610aa8565b6040516102e99190611e67565b60405180910390f35b61030c60048036038101906103079190611b11565b610ac8565b60405161031b93929190611d81565b60405180910390f35b61033e60048036038101906103399190611a6b565b610bb0565b60405161034b9190611d5f565b60405180910390f35b61036e60048036038101906103699190611a6b565b610c68565b60405161038096959493929190611dbf565b60405180910390f35b6103a3600480360381019061039e91906119d6565b610d49565b005b6103bf60048036038101906103ba91906119d6565b610e39565b6040516103cc9190611d44565b60405180910390f35b6103ef60048036038101906103ea9190611a6b565b610e8f565b005b6103f9610ffb565b6040516104069190611d07565b60405180910390f35b61041761101f565b6040516104249190611e67565b60405180910390f35b61044760048036038101906104429190611a6b565b611025565b005b610463600480360381019061045e9190611a6b565b611110565b005b61047f600480360381019061047a9190611a6b565b61114c565b60405161048c9190611d22565b60405180910390f35b6104af60048036038101906104aa9190611a6b565b6111ba565b005b6104cb60048036038101906104c69190611a6b565b611204565b005b6104e760048036038101906104e29190611b4d565b61136c565b005b61050360048036038101906104fe9190611b11565b6113bc565b005b61051f600480360381019061051a9190611a6b565b6115a6565b005b61053b60048036038101906105369190611b11565b61161e565b6040516105489190611e67565b60405180910390f35b61056b600480360381019061056691906119d6565b611654565b005b61058760048036038101906105829190611a6b565b6117a3565b6040516105949190611d22565b60405180910390f35b8060026000848152602001908152602001600020600601600060026000868152602001908152602001600020600501600081548092919060010191905055815260200190815260200160002060000190805190602001906105ff929190611811565b505050565b600260008281526020019081526020016000206003016000815480929190600101919050555050565b60006002600083815260200190815260200160002060040160009054906101000a900460ff169050919050565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146106ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e590611e27565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561077d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077490611e47565b60405180910390fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600060026000858152602001908152602001600020600601600084815260200190815260200160002060010160008381526020019081526020016000205490509392505050565b60003360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146108b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ad90611e27565b60405180910390fd5b60008351905060016000815480929190600101919050555060006002600060015481526020019081526020016000209050858160000190805190602001906108ff929190611811565b504281600101819055506000816003018190555060018160040160006101000a81548160ff02191690831515021790555060005b828110156109675761095a60015487838151811061094d57fe5b602002602001015161059d565b8080600101915050610933565b503360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600154935050505092915050565b600080600260008681526020019081526020016000206006016000858152602001908152602001600020600101600084815260200190815260200160002054905060006064820290506000600260008881526020019081526020016000206003015490506000811415610a915760009350505050610aa1565b808281610a9a57fe5b0493505050505b9392505050565b600060026000838152602001908152602001600020600501549050919050565b6060600080600060026000878152602001908152602001600020600601600086815260200190815260200160002090508060000181600201548260030154828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b9b5780601f10610b7057610100808354040283529160200191610b9b565b820191906000526020600020905b815481529060010190602001808311610b7e57829003601f168201915b50505050509250935093509350509250925092565b6060600260008381526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c5c5780601f10610c3157610100808354040283529160200191610c5c565b820191906000526020600020905b815481529060010190602001808311610c3f57829003601f168201915b50505050509050919050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d145780601f10610ce957610100808354040283529160200191610d14565b820191906000526020600020905b815481529060010190602001808311610cf757829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16908060050154905086565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610ddd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd490611e27565b60405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b6002600084815260200190815260200160002060080180549050811015610ff6576000600260008581526020019081526020016000206006016000600260008781526020019081526020016000206008018481548110610ef357fe5b906000526020600020015481526020019081526020016000206002015490506000821415610f7f57809250600260008581526020019081526020016000206008018281548110610f3f57fe5b906000526020600020015460026000868152602001908152602001600020600801600081548110610f6c57fe5b9060005260206000200181905550610fe8565b82811115610fe757809250600260008581526020019081526020016000206008018281548110610fab57fe5b906000526020600020015460026000868152602001908152602001600020600801600081548110610fd857fe5b90600052602060002001819055505b5b508080600101915050610e97565b505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b3360011515600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146110b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b090611e27565b60405180910390fd5b60006002600084815260200190815260200160002060040160006101000a81548160ff02191690831515021790555042600260008481526020019081526020016000206002018190555061110c826111ba565b5050565b60005b60026000838152602001908152602001600020600501548110156111485761113b82826113bc565b8080600101915050611113565b5050565b6060600260008381526020019081526020016000206008018054806020026020016040519081016040528092919081815260200182805480156111ae57602002820191906000526020600020905b81548152602001906001019080831161119a575b50505050509050919050565b6111c381611110565b6111cc81611204565b6111d581610e8f565b6001600260008381526020019081526020016000206008018054905011156112015761120081610e8f565b5b50565b6000805b6002600084815260200190815260200160002060050154811015611367576002600084815260200190815260200160002060060160008281526020019081526020016000206003015482141561129a576002600084815260200190815260200160002060080181908060018154018082558091505060019003906000526020600020016000909190919091505561135a565b60026000848152602001908152602001600020600601600082815260200190815260200160002060030154821015611359576002600084815260200190815260200160002060080160006112ee9190611891565b600260008481526020019081526020016000206006016000828152602001908152602001600020600301549150600260008481526020019081526020016000206008018190806001815401808255809150506001900390600052602060002001600090919091909150555b5b8080600101915050611208565b505050565b600260008481526020019081526020016000206006016000838152602001908152602001600020600101600082815260200190815260200160002060008154809291906001019190505550505050565b600060026000848152602001908152602001600020600301541415611410576000600260008481526020019081526020016000206006016000838152602001908152602001600020600301819055506115a2565b6000600690505b603260026000858152602001908152602001600020600601600084815260200190815260200160002060020154116115a0573073ffffffffffffffffffffffffffffffffffffffff16633a0b35b78484846040518463ffffffff1660e01b815260040161148693929190611e82565b60206040518083038186803b15801561149e57600080fd5b505afa1580156114b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d69190611a94565b600260008581526020019081526020016000206006016000848152602001908152602001600020600201540160026000858152602001908152602001600020600601600084815260200190815260200160002060020181905550603260026000858152602001908152602001600020600601600084815260200190815260200160002060020154106115925780600260008581526020019081526020016000206006016000848152602001908152602001600020600301819055505b808060019003915050611417565b505b5050565b60016002600083815260200190815260200160002060070160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061161b81610604565b50565b600060026000848152602001908152602001600020600801828154811061164157fe5b9060005260206000200154905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146116ac57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156116e657600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606002600083815260200190815260200160002060080180548060200260200160405190810160405280929190818152602001828054801561180557602002820191906000526020600020905b8154815260200190600101908083116117f1575b50505050509050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061185257805160ff1916838001178555611880565b82800160010185558215611880579182015b8281111561187f578251825591602001919060010190611864565b5b50905061188d91906118b2565b5090565b50805460008255906000526020600020908101906118af91906118b2565b50565b5b808211156118cb5760008160009055506001016118b3565b5090565b6000813590506118de8161202a565b92915050565b600082601f8301126118f557600080fd5b813561190861190382611ee6565b611eb9565b9150818183526020840193506020810190508360005b8381101561194e57813586016119348882611958565b84526020840193506020830192505060018101905061191e565b5050505092915050565b600082601f83011261196957600080fd5b813561197c61197782611f0e565b611eb9565b9150808252602083016020830185838301111561199857600080fd5b6119a3838284611fd7565b50505092915050565b6000813590506119bb81612041565b92915050565b6000815190506119d081612041565b92915050565b6000602082840312156119e857600080fd5b60006119f6848285016118cf565b91505092915050565b60008060408385031215611a1257600080fd5b600083013567ffffffffffffffff811115611a2c57600080fd5b611a3885828601611958565b925050602083013567ffffffffffffffff811115611a5557600080fd5b611a61858286016118e4565b9150509250929050565b600060208284031215611a7d57600080fd5b6000611a8b848285016119ac565b91505092915050565b600060208284031215611aa657600080fd5b6000611ab4848285016119c1565b91505092915050565b60008060408385031215611ad057600080fd5b6000611ade858286016119ac565b925050602083013567ffffffffffffffff811115611afb57600080fd5b611b0785828601611958565b9150509250929050565b60008060408385031215611b2457600080fd5b6000611b32858286016119ac565b9250506020611b43858286016119ac565b9150509250929050565b600080600060608486031215611b6257600080fd5b6000611b70868287016119ac565b9350506020611b81868287016119ac565b9250506040611b92868287016119ac565b9150509250925092565b6000611ba88383611ce9565b60208301905092915050565b611bbd81611f8f565b82525050565b6000611bce82611f4a565b611bd88185611f6d565b9350611be383611f3a565b8060005b83811015611c14578151611bfb8882611b9c565b9750611c0683611f60565b925050600181019050611be7565b5085935050505092915050565b611c2a81611fa1565b82525050565b6000611c3b82611f55565b611c458185611f7e565b9350611c55818560208601611fe6565b611c5e81612019565b840191505092915050565b6000611c76601483611f7e565b91507f596f7520617265206e6f7420616e2061646d696e0000000000000000000000006000830152602082019050919050565b6000611cb6601f83611f7e565b91507f43616e6e6f742072656d6f7665206f776e65722066726f6d2061646d696e73006000830152602082019050919050565b611cf281611fcd565b82525050565b611d0181611fcd565b82525050565b6000602082019050611d1c6000830184611bb4565b92915050565b60006020820190508181036000830152611d3c8184611bc3565b905092915050565b6000602082019050611d596000830184611c21565b92915050565b60006020820190508181036000830152611d798184611c30565b905092915050565b60006060820190508181036000830152611d9b8186611c30565b9050611daa6020830185611cf8565b611db76040830184611cf8565b949350505050565b600060c0820190508181036000830152611dd98189611c30565b9050611de86020830188611cf8565b611df56040830187611cf8565b611e026060830186611cf8565b611e0f6080830185611c21565b611e1c60a0830184611cf8565b979650505050505050565b60006020820190508181036000830152611e4081611c69565b9050919050565b60006020820190508181036000830152611e6081611ca9565b9050919050565b6000602082019050611e7c6000830184611cf8565b92915050565b6000606082019050611e976000830186611cf8565b611ea46020830185611cf8565b611eb16040830184611cf8565b949350505050565b6000604051905081810181811067ffffffffffffffff82111715611edc57600080fd5b8060405250919050565b600067ffffffffffffffff821115611efd57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff821115611f2557600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611f9a82611fad565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612004578082015181840152602081019050611fe9565b83811115612013576000848401525b50505050565b6000601f19601f8301169050919050565b61203381611f8f565b811461203e57600080fd5b50565b61204a81611fcd565b811461205557600080fd5b5056fea26469706673582212203fc619e2d5db7ded3b3560e475aa2b788efc244d3a130149f33742d7e67a64a864736f6c63430007000033",
  "immutableReferences": {},
  "sourceMap": "185:3124:2:-:0;;;;;;;;;;;;;552:10:5;544:5;;:18;;;;;;;;;;;;;;;;;;212:4:1;193:9;:16;203:5;;;;;;;;;;;193:16;;;;;;;;;;;;;;;;:23;;;;;;;;;;;;;;;;;;185:3124:2;;;;;;",
  "deployedSourceMap": "185:3124:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2149:191:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;342:104:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;867:125:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1145:193:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;879:190:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1465:678:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1075:406:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;736:137;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;452:278;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;729:132:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;696:43:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;:::i;:::-;;;;;;;;1023:116;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1344:115;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2643:664:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;279:20:5;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;664:26:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;309:220:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1811:203;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1308:138;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1452:353;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2020:617;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;179:157:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1487:738;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;998:146:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1150:152;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;907:188:5;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;535::2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2149:191:1;2319:14;2236:9;:22;2246:11;2236:22;;;;;;;;;;;:33;;:75;2270:9;:22;2280:11;2270:22;;;;;;;;;;;:38;;;:40;;;;;;;;;;;;2236:75;;;;;;;;;;;:80;;:97;;;;;;;;;;;;:::i;:::-;;2149:191;;:::o;342:104:0:-;402:9;:22;412:11;402:22;;;;;;;;;;;:34;;;:37;;;;;;;;;;;;;342:104;:::o;867:125:2:-;933:4;956:9;:22;966:11;956:22;;;;;;;;;;;:29;;;;;;;;;;;;949:36;;867:125;;;:::o;1145:193:1:-;1205:10;970:4;943:31;;:9;:23;953:12;943:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;934:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1249:5:::1;::::0;::::1;;;;;;;;1235:19;;:10;:19;;;;1227:63;;;;;;;;;;;;:::i;:::-;;;;;;;;;1326:5;1300:9;:23;1310:12;1300:23;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;;;;;;;1145:193:::0;;:::o;879:190:0:-;977:4;1000:9;:22;1010:11;1000:22;;;;;;;;;;;:33;;:47;1034:12;1000:47;;;;;;;;;;;:53;;:62;1054:7;1000:62;;;;;;;;;;;;993:69;;879:190;;;;;:::o;1465:678:1:-;1583:4;1562:10;970:4;943:31;;:9;:23;953:12;943:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;934:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1599:17:::1;1619:16;:23;1599:43;;1652:14;;:16;;;;;;;;;;;;;1678:25;1706:9;:25;1716:14;;1706:25;;;;;;;;;;;1678:53;;1758:6;1741:8;:14;;:23;;;;;;;;;;;;:::i;:::-;;1798:15;1774:8;:21;;:39;;;;1846:1;1823:8;:20;;:24;;;;1875:4;1857:8;:15;;;:22;;;;;;;;;;;;;;;;;;1895:6;1890:114;1911:12;1907:1;:16;1890:114;;;1944:49;1957:14;;1973:16;1990:1;1973:19;;;;;;;;;;;;;;1944:12;:49::i;:::-;1925:3;;;;;;;1890:114;;;;2048:10;2014:15;:31;2030:14;;2014:31;;;;;;;;;;;;:44;;;;;;;;;;;;;;;;;;2103:1;2069:18;:30;2088:10;2069:30;;;;;;;;;;;;;;;;:35;;;;;;;;;;;2122:14;;2115:21;;;;1465:678:::0;;;;;:::o;1075:406:0:-;1181:4;1196:9;1208;:22;1218:11;1208:22;;;;;;;;;;;:33;;:47;1242:12;1208:47;;;;;;;;;;;:53;;:60;1262:5;1208:60;;;;;;;;;;;;1196:72;;1278:15;1303:3;1296:4;:10;1278:28;;1316:16;1335:9;:22;1345:11;1335:22;;;;;;;;;;;:34;;;1316:53;;1398:1;1383:11;:16;1379:55;;;1422:1;1415:8;;;;;;;1379:55;1463:11;1450:10;:24;;;;;;1443:31;;;;;1075:406;;;;;;:::o;736:137::-;805:4;828:9;:22;838:11;828:22;;;;;;;;;;;:38;;;821:45;;736:137;;;:::o;452:278::-;534:13;549:4;555;571:27;601:9;:22;611:11;601:22;;;;;;;;;;;:33;;:47;635:12;601:47;;;;;;;;;;;571:77;;666:9;:14;;682:9;:17;;;701:9;:21;;;658:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;452:278;;;;;:::o;729:132:2:-;794:13;826:9;:22;836:11;826:22;;;;;;;;;;;:28;;819:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;729:132;;;:::o;696:43:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1023:116::-;1080:10;970:4;943:31;;:9;:23;953:12;943:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;934:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1128:4:::1;1102:9;:23;1112:12;1102:23;;;;;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;1023:116:::0;;:::o;1344:115::-;1408:4;1430:9;:22;1440:11;1430:22;;;;;;;;;;;;;;;;;;;;;;;;;1423:29;;1344:115;;;:::o;2643:664:2:-;2711:18;2743:6;2752:1;2743:10;;2739:562;2759:9;:22;2769:11;2759:22;;;;;;;;;;;:30;;:37;;;;2755:1;:41;2739:562;;;2816:19;2838:9;:22;2848:11;2838:22;;;;;;;;;;;:33;;:68;2872:9;:22;2882:11;2872:22;;;;;;;;;;;:30;;2903:1;2872:33;;;;;;;;;;;;;;;;2838:68;;;;;;;;;;;:76;;;2816:98;;2936:1;2931;:6;2928:363;;;2972:14;2956:30;;3040:9;:22;3050:11;3040:22;;;;;;;;;;;:30;;3071:1;3040:33;;;;;;;;;;;;;;;;3004:9;:22;3014:11;3004:22;;;;;;;;;;;:30;;3035:1;3004:33;;;;;;;;;;;;;;;:69;;;;2928:363;;;3127:13;3110:14;:30;3106:185;;;3175:14;3159:30;;3243:9;:22;3253:11;3243:22;;;;;;;;;;;:30;;3274:1;3243:33;;;;;;;;;;;;;;;;3207:9;:22;3217:11;3207:22;;;;;;;;;;;:30;;3238:1;3207:33;;;;;;;;;;;;;;;:69;;;;3106:185;2928:363;2739:562;2798:3;;;;;;;2739:562;;;;2643:664;;:::o;279:20:5:-;;;;;;;;;;;;:::o;664:26:1:-;;;;:::o;309:220:2:-;365:10;970:4:1;943:31;;:9;:23;953:12;943:23;;;;;;;;;;;;;;;;;;;;;;;;;:31;;;934:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;419:5:2::1;387:9;:22;397:11;387:22;;;;;;;;;;;:29;;;:37;;;;;;;;;;;;;;;;;;471:15;434:9;:22;444:11;434:22;;;;;;;;;;;:34;;:52;;;;496:26;510:11;496:13;:26::i;:::-;309:220:::0;;:::o;1811:203::-;1889:6;1884:124;1905:9;:22;1915:11;1905:22;;;;;;;;;;;:38;;;1901:1;:42;1884:124;;;1963:34;1982:11;1995:1;1963:18;:34::i;:::-;1945:3;;;;;;;1884:124;;;;1811:203;:::o;1308:138::-;1377:13;1409:9;:22;1419:11;1409:22;;;;;;;;;;;:30;;1402:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1308:138;;;:::o;1452:353::-;1510:41;1539:11;1510:28;:41::i;:::-;1562:37;1587:11;1562:24;:37::i;:::-;1610:36;1634:11;1610:23;:36::i;:::-;1699:1;1659:9;:22;1669:11;1659:22;;;;;;;;;;;:30;;:37;;;;:41;1656:143;;;1752:36;1776:11;1752:23;:36::i;:::-;1656:143;1452:353;:::o;2020:617::-;2089:15;2122:6;2118:513;2138:9;:22;2148:11;2138:22;;;;;;;;;;;:38;;;2134:1;:42;2118:513;;;2213:9;:22;2223:11;2213:22;;;;;;;;;;;:33;;:36;2247:1;2213:36;;;;;;;;;;;:48;;;2199:10;:62;2196:425;;;2280:9;:22;2290:11;2280:22;;;;;;;;;;;:30;;2316:1;2280:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2196:425;;;2367:9;:22;2377:11;2367:22;;;;;;;;;;;:33;;:36;2401:1;2367:36;;;;;;;;;;;:48;;;2354:10;:61;2351:270;;;2441:9;:22;2451:11;2441:22;;;;;;;;;;;:30;;;2434:37;;;;:::i;:::-;2502:9;:22;2512:11;2502:22;;;;;;;;;;;:33;;:36;2536:1;2502:36;;;;;;;;;;;:48;;;2489:61;;2568:9;:22;2578:11;2568:22;;;;;;;;;;;:30;;2604:1;2568:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2351:270;2196:425;2178:3;;;;;;;2118:513;;;;2020:617;;:::o;179:157:0:-;264:9;:22;274:11;264:22;;;;;;;;;;;:33;;:47;298:12;264:47;;;;;;;;;;;:53;;:62;318:7;264:62;;;;;;;;;;;;:65;;;;;;;;;;;;;179:157;;;:::o;1487:738::-;1611:1;1573:9;:22;1583:11;1573:22;;;;;;;;;;;:34;;;:39;1569:650;;;1690:1;1628:9;:22;1638:11;1628:22;;;;;;;;;;;:33;;:47;1662:12;1628:47;;;;;;;;;;;:59;;:63;;;;1569:650;;;1735:6;1744:1;1735:10;;1730:479;1806:2;1747:9;:22;1757:11;1747:22;;;;;;;;;;;:33;;:47;1781:12;1747:47;;;;;;;;;;;:55;;;:61;1730:479;;1948:4;:30;;;1979:11;1992:12;2006:1;1948:60;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1890:9;:22;1900:11;1890:22;;;;;;;;;;;:33;;:47;1924:12;1890:47;;;;;;;;;;;:55;;;:118;1832:9;:22;1842:11;1832:22;;;;;;;;;;;:33;;:47;1866:12;1832:47;;;;;;;;;;;:55;;:176;;;;2088:2;2029:9;:22;2039:11;2029:22;;;;;;;;;;;:33;;:47;2063:12;2029:47;;;;;;;;;;;:55;;;:61;2026:169;;2175:1;2113:9;:22;2123:11;2113:22;;;;;;;;;;;:33;;:47;2147:12;2113:47;;;;;;;;;;;:59;;:63;;;;2026:169;1810:3;;;;;;;;1730:479;;;;1569:650;1487:738;;:::o;998:146:2:-;1095:4;1051:9;:22;1061:11;1051:22;;;;;;;;;;;:29;;:41;1081:10;1051:41;;;;;;;;;;;;;;;;:48;;;;;;;;;;;;;;;;;;1109:28;1125:11;1109:15;:28::i;:::-;998:146;:::o;1150:152::-;1234:4;1257:9;:22;1267:11;1257:22;;;;;;;;;;;:30;;1288:6;1257:38;;;;;;;;;;;;;;;;1250:45;;1150:152;;;;:::o;907:188:5:-;711:5;;;;;;;;;;697:19;;:10;:19;;;689:28;;;;;;1007:1:::1;987:22;;:8;:22;;;;979:31;;;::::0;::::1;;1053:8;1025:37;;1046:5;::::0;::::1;;;;;;;;1025:37;;;;;;;;;;;;1080:8;1072:5;::::0;:16:::1;;;;;;;;;;;;;;;;;;907:188:::0;:::o;535::2:-;604:13;636:9;:22;646:11;636:22;;;;;;;;;;;:30;;629:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;535:188;;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;5:130::-;;85:6;72:20;63:29;;97:33;124:5;97:33;:::i;:::-;57:78;;;;:::o;159:708::-;;286:3;279:4;271:6;267:17;263:27;253:2;;304:1;301;294:12;253:2;341:6;328:20;363:90;378:74;445:6;378:74;:::i;:::-;363:90;:::i;:::-;354:99;;470:5;495:6;488:5;481:21;525:4;517:6;513:17;503:27;;547:4;542:3;538:14;531:21;;600:6;633:1;618:243;643:6;640:1;637:13;618:243;;;726:3;713:17;705:6;701:30;750:47;793:3;781:10;750:47;:::i;:::-;745:3;738:60;821:4;816:3;812:14;805:21;;849:4;844:3;840:14;833:21;;675:186;665:1;662;658:9;653:14;;618:243;;;622:14;246:621;;;;;;;:::o;876:442::-;;978:3;971:4;963:6;959:17;955:27;945:2;;996:1;993;986:12;945:2;1033:6;1020:20;1055:65;1070:49;1112:6;1070:49;:::i;:::-;1055:65;:::i;:::-;1046:74;;1140:6;1133:5;1126:21;1176:4;1168:6;1164:17;1209:4;1202:5;1198:16;1244:3;1235:6;1230:3;1226:16;1223:25;1220:2;;;1261:1;1258;1251:12;1220:2;1271:41;1305:6;1300:3;1295;1271:41;:::i;:::-;938:380;;;;;;;:::o;1326:130::-;;1406:6;1393:20;1384:29;;1418:33;1445:5;1418:33;:::i;:::-;1378:78;;;;:::o;1463:134::-;;1547:6;1541:13;1532:22;;1559:33;1586:5;1559:33;:::i;:::-;1526:71;;;;:::o;1604:241::-;;1708:2;1696:9;1687:7;1683:23;1679:32;1676:2;;;1724:1;1721;1714:12;1676:2;1759:1;1776:53;1821:7;1812:6;1801:9;1797:22;1776:53;:::i;:::-;1766:63;;1738:97;1670:175;;;;:::o;1852:628::-;;;2018:2;2006:9;1997:7;1993:23;1989:32;1986:2;;;2034:1;2031;2024:12;1986:2;2097:1;2086:9;2082:17;2069:31;2120:18;2112:6;2109:30;2106:2;;;2152:1;2149;2142:12;2106:2;2172:63;2227:7;2218:6;2207:9;2203:22;2172:63;:::i;:::-;2162:73;;2048:193;2300:2;2289:9;2285:18;2272:32;2324:18;2316:6;2313:30;2310:2;;;2356:1;2353;2346:12;2310:2;2376:88;2456:7;2447:6;2436:9;2432:22;2376:88;:::i;:::-;2366:98;;2251:219;1980:500;;;;;:::o;2487:241::-;;2591:2;2579:9;2570:7;2566:23;2562:32;2559:2;;;2607:1;2604;2597:12;2559:2;2642:1;2659:53;2704:7;2695:6;2684:9;2680:22;2659:53;:::i;:::-;2649:63;;2621:97;2553:175;;;;:::o;2735:263::-;;2850:2;2838:9;2829:7;2825:23;2821:32;2818:2;;;2866:1;2863;2856:12;2818:2;2901:1;2918:64;2974:7;2965:6;2954:9;2950:22;2918:64;:::i;:::-;2908:74;;2880:108;2812:186;;;;:::o;3005:472::-;;;3136:2;3124:9;3115:7;3111:23;3107:32;3104:2;;;3152:1;3149;3142:12;3104:2;3187:1;3204:53;3249:7;3240:6;3229:9;3225:22;3204:53;:::i;:::-;3194:63;;3166:97;3322:2;3311:9;3307:18;3294:32;3346:18;3338:6;3335:30;3332:2;;;3378:1;3375;3368:12;3332:2;3398:63;3453:7;3444:6;3433:9;3429:22;3398:63;:::i;:::-;3388:73;;3273:194;3098:379;;;;;:::o;3484:366::-;;;3605:2;3593:9;3584:7;3580:23;3576:32;3573:2;;;3621:1;3618;3611:12;3573:2;3656:1;3673:53;3718:7;3709:6;3698:9;3694:22;3673:53;:::i;:::-;3663:63;;3635:97;3763:2;3781:53;3826:7;3817:6;3806:9;3802:22;3781:53;:::i;:::-;3771:63;;3742:98;3567:283;;;;;:::o;3857:491::-;;;;3995:2;3983:9;3974:7;3970:23;3966:32;3963:2;;;4011:1;4008;4001:12;3963:2;4046:1;4063:53;4108:7;4099:6;4088:9;4084:22;4063:53;:::i;:::-;4053:63;;4025:97;4153:2;4171:53;4216:7;4207:6;4196:9;4192:22;4171:53;:::i;:::-;4161:63;;4132:98;4261:2;4279:53;4324:7;4315:6;4304:9;4300:22;4279:53;:::i;:::-;4269:63;;4240:98;3957:391;;;;;:::o;4356:173::-;;4443:46;4485:3;4477:6;4443:46;:::i;:::-;4518:4;4513:3;4509:14;4495:28;;4436:93;;;;:::o;4537:113::-;4620:24;4638:5;4620:24;:::i;:::-;4615:3;4608:37;4602:48;;:::o;4688:690::-;;4833:54;4881:5;4833:54;:::i;:::-;4900:86;4979:6;4974:3;4900:86;:::i;:::-;4893:93;;5007:56;5057:5;5007:56;:::i;:::-;5083:7;5111:1;5096:260;5121:6;5118:1;5115:13;5096:260;;;5188:6;5182:13;5209:63;5268:3;5253:13;5209:63;:::i;:::-;5202:70;;5289:60;5342:6;5289:60;:::i;:::-;5279:70;;5153:203;5143:1;5140;5136:9;5131:14;;5096:260;;;5100:14;5369:3;5362:10;;4812:566;;;;;;;:::o;5386:104::-;5463:21;5478:5;5463:21;:::i;:::-;5458:3;5451:34;5445:45;;:::o;5497:347::-;;5609:39;5642:5;5609:39;:::i;:::-;5660:71;5724:6;5719:3;5660:71;:::i;:::-;5653:78;;5736:52;5781:6;5776:3;5769:4;5762:5;5758:16;5736:52;:::i;:::-;5809:29;5831:6;5809:29;:::i;:::-;5804:3;5800:39;5793:46;;5589:255;;;;;:::o;5852:320::-;;6012:67;6076:2;6071:3;6012:67;:::i;:::-;6005:74;;6112:22;6108:1;6103:3;6099:11;6092:43;6163:2;6158:3;6154:12;6147:19;;5998:174;;;:::o;6181:331::-;;6341:67;6405:2;6400:3;6341:67;:::i;:::-;6334:74;;6441:33;6437:1;6432:3;6428:11;6421:54;6503:2;6498:3;6494:12;6487:19;;6327:185;;;:::o;6520:103::-;6593:24;6611:5;6593:24;:::i;:::-;6588:3;6581:37;6575:48;;:::o;6630:113::-;6713:24;6731:5;6713:24;:::i;:::-;6708:3;6701:37;6695:48;;:::o;6750:222::-;;6877:2;6866:9;6862:18;6854:26;;6891:71;6959:1;6948:9;6944:17;6935:6;6891:71;:::i;:::-;6848:124;;;;:::o;6979:370::-;;7156:2;7145:9;7141:18;7133:26;;7206:9;7200:4;7196:20;7192:1;7181:9;7177:17;7170:47;7231:108;7334:4;7325:6;7231:108;:::i;:::-;7223:116;;7127:222;;;;:::o;7356:210::-;;7477:2;7466:9;7462:18;7454:26;;7491:65;7553:1;7542:9;7538:17;7529:6;7491:65;:::i;:::-;7448:118;;;;:::o;7573:310::-;;7720:2;7709:9;7705:18;7697:26;;7770:9;7764:4;7760:20;7756:1;7745:9;7741:17;7734:47;7795:78;7868:4;7859:6;7795:78;:::i;:::-;7787:86;;7691:192;;;;:::o;7890:532::-;;8093:2;8082:9;8078:18;8070:26;;8143:9;8137:4;8133:20;8129:1;8118:9;8114:17;8107:47;8168:78;8241:4;8232:6;8168:78;:::i;:::-;8160:86;;8257:72;8325:2;8314:9;8310:18;8301:6;8257:72;:::i;:::-;8340;8408:2;8397:9;8393:18;8384:6;8340:72;:::i;:::-;8064:358;;;;;;:::o;8429:856::-;;8710:3;8699:9;8695:19;8687:27;;8761:9;8755:4;8751:20;8747:1;8736:9;8732:17;8725:47;8786:78;8859:4;8850:6;8786:78;:::i;:::-;8778:86;;8875:72;8943:2;8932:9;8928:18;8919:6;8875:72;:::i;:::-;8958;9026:2;9015:9;9011:18;9002:6;8958:72;:::i;:::-;9041;9109:2;9098:9;9094:18;9085:6;9041:72;:::i;:::-;9124:67;9186:3;9175:9;9171:19;9162:6;9124:67;:::i;:::-;9202:73;9270:3;9259:9;9255:19;9246:6;9202:73;:::i;:::-;8681:604;;;;;;;;;:::o;9292:416::-;;9492:2;9481:9;9477:18;9469:26;;9542:9;9536:4;9532:20;9528:1;9517:9;9513:17;9506:47;9567:131;9693:4;9567:131;:::i;:::-;9559:139;;9463:245;;;:::o;9715:416::-;;9915:2;9904:9;9900:18;9892:26;;9965:9;9959:4;9955:20;9951:1;9940:9;9936:17;9929:47;9990:131;10116:4;9990:131;:::i;:::-;9982:139;;9886:245;;;:::o;10138:222::-;;10265:2;10254:9;10250:18;10242:26;;10279:71;10347:1;10336:9;10332:17;10323:6;10279:71;:::i;:::-;10236:124;;;;:::o;10367:444::-;;10550:2;10539:9;10535:18;10527:26;;10564:71;10632:1;10621:9;10617:17;10608:6;10564:71;:::i;:::-;10646:72;10714:2;10703:9;10699:18;10690:6;10646:72;:::i;:::-;10729;10797:2;10786:9;10782:18;10773:6;10729:72;:::i;:::-;10521:290;;;;;;:::o;10818:256::-;;10880:2;10874:9;10864:19;;10918:4;10910:6;10906:17;11017:6;11005:10;11002:22;10981:18;10969:10;10966:34;10963:62;10960:2;;;11038:1;11035;11028:12;10960:2;11058:10;11054:2;11047:22;10858:216;;;;:::o;11081:314::-;;11250:18;11242:6;11239:30;11236:2;;;11282:1;11279;11272:12;11236:2;11317:4;11309:6;11305:17;11297:25;;11380:4;11374;11370:15;11362:23;;11173:222;;;:::o;11402:322::-;;11546:18;11538:6;11535:30;11532:2;;;11578:1;11575;11568:12;11532:2;11645:4;11641:9;11634:4;11626:6;11622:17;11618:33;11610:41;;11709:4;11703;11699:15;11691:23;;11469:255;;;:::o;11731:151::-;;11817:3;11809:11;;11855:4;11850:3;11846:14;11838:22;;11803:79;;;:::o;11889:137::-;;11998:5;11992:12;11982:22;;11963:63;;;:::o;12033:122::-;;12127:5;12121:12;12111:22;;12092:63;;;:::o;12162:108::-;;12260:4;12255:3;12251:14;12243:22;;12237:33;;;:::o;12278:178::-;;12408:6;12403:3;12396:19;12445:4;12440:3;12436:14;12421:29;;12389:67;;;;:::o;12465:163::-;;12580:6;12575:3;12568:19;12617:4;12612:3;12608:14;12593:29;;12561:67;;;;:::o;12636:91::-;;12698:24;12716:5;12698:24;:::i;:::-;12687:35;;12681:46;;;:::o;12734:85::-;;12807:5;12800:13;12793:21;12782:32;;12776:43;;;:::o;12826:121::-;;12899:42;12892:5;12888:54;12877:65;;12871:76;;;:::o;12954:72::-;;13016:5;13005:16;;12999:27;;;:::o;13034:145::-;13115:6;13110:3;13105;13092:30;13171:1;13162:6;13157:3;13153:16;13146:27;13085:94;;;:::o;13188:268::-;13253:1;13260:101;13274:6;13271:1;13268:13;13260:101;;;13350:1;13345:3;13341:11;13335:18;13331:1;13326:3;13322:11;13315:39;13296:2;13293:1;13289:10;13284:15;;13260:101;;;13376:6;13373:1;13370:13;13367:2;;;13441:1;13432:6;13427:3;13423:16;13416:27;13367:2;13237:219;;;;:::o;13464:97::-;;13552:2;13548:7;13543:2;13536:5;13532:14;13528:28;13518:38;;13512:49;;;:::o;13569:117::-;13638:24;13656:5;13638:24;:::i;:::-;13631:5;13628:35;13618:2;;13677:1;13674;13667:12;13618:2;13612:74;:::o;13693:117::-;13762:24;13780:5;13762:24;:::i;:::-;13755:5;13752:35;13742:2;;13801:1;13798;13791:12;13742:2;13736:74;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >= 0.7.0 < 0.8.0;\npragma experimental ABIEncoderV2;\n\nimport './Candidate.sol';\nimport \"./ownable.sol\";\nimport \"./ElectionFactory.sol\";\n\n\ncontract ElectionHelper is ElectionFactory, Candidate {\n    // Returns True if only 1 winner, else False if more than 1\n    function endElection(uint _electionId) external isAdmin(msg.sender) {\n        elections[_electionId].isOpen = false;\n        elections[_electionId].closingDate = block.timestamp;\n        computeResult(_electionId);\n    }\n\n    function getElectionWinners(uint _electionId) external view returns (uint[] memory) {\n        return elections[_electionId].winners; // Length is >1 if tie, else the winner is at [0]\n    }\n\n    function getElectionTitle(uint _electionId) public view returns (string memory) {\n        return elections[_electionId].title;\n    }\n\n    function getElectionStatus(uint _electionId) public view returns (bool) {\n        return elections[_electionId].isOpen;\n    }\n\n    function addVoter(uint _electionId) public {\n        elections[_electionId].voters[msg.sender] = true;\n        incrementVoters(_electionId);\n    }\n\n    function getOneFirstRoundWinner(uint _electionId, uint _index) public view returns (uint) {\n        return elections[_electionId].winners[_index];\n    }\n\n    function getFirstRoundWinners(uint _electionId) public view returns (uint[] memory) {\n        return elections[_electionId].winners;\n    }\n\n    function computeResult(uint _electionId) public {\n        computeCandidatesAverageNote(_electionId);\n\n        computeFirstRoundWinners(_electionId);\n\n        computeFinalRoundWinner(_electionId);\n        if(elections[_electionId].winners.length > 1) { // If there is more than one winner\n            computeFinalRoundWinner(_electionId);\n        }\n    }\n\n    function computeCandidatesAverageNote(uint _electionId) public {\n        for (uint i = 0; i < elections[_electionId].candidatesCount; i++){\n            computeAverageNote(_electionId, i);\n        }\n    }\n\n    function computeFirstRoundWinners(uint _electionId) public {\n        uint higherNote = 0;\n        for(uint i = 0; i < elections[_electionId].candidatesCount; i++){\n            if(higherNote == elections[_electionId].candidates[i].averageNote){\n                elections[_electionId].winners.push(i);\n            }\n            else if(higherNote < elections[_electionId].candidates[i].averageNote){\n                delete elections[_electionId].winners;\n                higherNote = elections[_electionId].candidates[i].averageNote;\n                elections[_electionId].winners.push(i);\n            }\n        }\n    }\n\n    function computeFinalRoundWinner(uint _electionId) public {\n        uint higherPercent;\n        for(uint i = 0; i < elections[_electionId].winners.length; i++){\n            uint currentPercent = elections[_electionId].candidates[elections[_electionId].winners[i]].percent;\n            if(i == 0){\n                higherPercent = currentPercent;\n                elections[_electionId].winners[0] = elections[_electionId].winners[i];\n            }\n            else if (currentPercent > higherPercent){\n                higherPercent = currentPercent;\n                elections[_electionId].winners[0] = elections[_electionId].winners[i];\n            }\n        }\n    }\n}\n",
  "sourcePath": "C:\\Users\\acham\\Applications\\ESGI\\Blockchain\\Projet\\Voting-SmartContract-Truffled\\contracts\\ElectionHelper.sol",
  "ast": {
    "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol",
    "exportedSymbols": {
      "ElectionHelper": [
        843
      ]
    },
    "id": 844,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 492,
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
        "id": 493,
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
        "id": 494,
        "nodeType": "ImportDirective",
        "scope": 844,
        "sourceUnit": 243,
        "src": "101:25:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol",
        "file": "./ownable.sol",
        "id": 495,
        "nodeType": "ImportDirective",
        "scope": 844,
        "sourceUnit": 1030,
        "src": "127:23:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol",
        "file": "./ElectionFactory.sol",
        "id": 496,
        "nodeType": "ImportDirective",
        "scope": 844,
        "sourceUnit": 491,
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
              "id": 497,
              "name": "ElectionFactory",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 490,
              "src": "212:15:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ElectionFactory_$490",
                "typeString": "contract ElectionFactory"
              }
            },
            "id": 498,
            "nodeType": "InheritanceSpecifier",
            "src": "212:15:2"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 499,
              "name": "Candidate",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 242,
              "src": "229:9:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Candidate_$242",
                "typeString": "contract Candidate"
              }
            },
            "id": 500,
            "nodeType": "InheritanceSpecifier",
            "src": "229:9:2"
          }
        ],
        "contractDependencies": [
          242,
          490,
          1029
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 843,
        "linearizedBaseContracts": [
          843,
          242,
          490,
          1029
        ],
        "name": "ElectionHelper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 528,
              "nodeType": "Block",
              "src": "377:152:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 514,
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
                          "id": 509,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 299,
                          "src": "387:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 511,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 510,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 502,
                          "src": "397:11:2",
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
                        "src": "387:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$282_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 512,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "isOpen",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 268,
                      "src": "387:29:2",
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
                      "id": 513,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "419:5:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "387:37:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 515,
                  "nodeType": "ExpressionStatement",
                  "src": "387:37:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 522,
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
                          "referencedDeclaration": 299,
                          "src": "434:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
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
                          "referencedDeclaration": 502,
                          "src": "444:11:2",
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
                        "src": "434:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$282_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 519,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "closingDate",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 264,
                      "src": "434:34:2",
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
                        "id": 520,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "471:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 521,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "471:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "434:52:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 523,
                  "nodeType": "ExpressionStatement",
                  "src": "434:52:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 525,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 502,
                        "src": "510:11:2",
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
                      "id": 524,
                      "name": "computeResult",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 651,
                      "src": "496:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 526,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "496:26:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 527,
                  "nodeType": "ExpressionStatement",
                  "src": "496:26:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "9c98bcbb",
            "id": 529,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 505,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "365:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 506,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "365:10:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  }
                ],
                "id": 507,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 504,
                  "name": "isAdmin",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 326,
                  "src": "357:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "357:19:2"
              }
            ],
            "name": "endElection",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 503,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 502,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 529,
                  "src": "330:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 501,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "330:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "329:18:2"
            },
            "returnParameters": {
              "id": 508,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "377:0:2"
            },
            "scope": 843,
            "src": "309:220:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 542,
              "nodeType": "Block",
              "src": "619:104:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 537,
                        "name": "elections",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 299,
                        "src": "636:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                        }
                      },
                      "id": 539,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 538,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 531,
                        "src": "646:11:2",
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
                      "src": "636:22:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Election_$282_storage",
                        "typeString": "struct ElectionFactory.Election storage ref"
                      }
                    },
                    "id": 540,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "winners",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 281,
                    "src": "636:30:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 536,
                  "id": 541,
                  "nodeType": "Return",
                  "src": "629:37:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "fb5cbf43",
            "id": 543,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getElectionWinners",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 532,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 531,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 543,
                  "src": "563:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 530,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "563:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "562:18:2"
            },
            "returnParameters": {
              "id": 536,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 535,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 543,
                  "src": "604:13:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 533,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "604:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 534,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "604:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "603:15:2"
            },
            "scope": 843,
            "src": "535:188:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 555,
              "nodeType": "Block",
              "src": "809:52:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 550,
                        "name": "elections",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 299,
                        "src": "826:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                        }
                      },
                      "id": 552,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 551,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 545,
                        "src": "836:11:2",
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
                      "src": "826:22:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Election_$282_storage",
                        "typeString": "struct ElectionFactory.Election storage ref"
                      }
                    },
                    "id": 553,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "title",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 260,
                    "src": "826:28:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 549,
                  "id": 554,
                  "nodeType": "Return",
                  "src": "819:35:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "4d94fc6a",
            "id": 556,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getElectionTitle",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 546,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 545,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 556,
                  "src": "755:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 544,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "755:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "754:18:2"
            },
            "returnParameters": {
              "id": 549,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 548,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 556,
                  "src": "794:13:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 547,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "794:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "793:15:2"
            },
            "scope": 843,
            "src": "729:132:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 568,
              "nodeType": "Block",
              "src": "939:53:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 563,
                        "name": "elections",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 299,
                        "src": "956:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                        }
                      },
                      "id": 565,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 564,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 558,
                        "src": "966:11:2",
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
                      "src": "956:22:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Election_$282_storage",
                        "typeString": "struct ElectionFactory.Election storage ref"
                      }
                    },
                    "id": 566,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "isOpen",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 268,
                    "src": "956:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 562,
                  "id": 567,
                  "nodeType": "Return",
                  "src": "949:36:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "24785b9e",
            "id": 569,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getElectionStatus",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 559,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 558,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 569,
                  "src": "894:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 557,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "894:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "893:18:2"
            },
            "returnParameters": {
              "id": 562,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 561,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 569,
                  "src": "933:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 560,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "933:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "932:6:2"
            },
            "scope": 843,
            "src": "867:125:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 588,
              "nodeType": "Block",
              "src": "1041:103:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 582,
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
                            "id": 574,
                            "name": "elections",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 299,
                            "src": "1051:9:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                              "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                            }
                          },
                          "id": 576,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 575,
                            "name": "_electionId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 571,
                            "src": "1061:11:2",
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
                          "src": "1051:22:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Election_$282_storage",
                            "typeString": "struct ElectionFactory.Election storage ref"
                          }
                        },
                        "id": 577,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "voters",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 278,
                        "src": "1051:29:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 580,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 578,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1081:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 579,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1081:10:2",
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
                      "src": "1051:41:2",
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
                      "id": 581,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1095:4:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1051:48:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 583,
                  "nodeType": "ExpressionStatement",
                  "src": "1051:48:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 585,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 571,
                        "src": "1125:11:2",
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
                      "id": 584,
                      "name": "incrementVoters",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38,
                      "src": "1109:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 586,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1109:28:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 587,
                  "nodeType": "ExpressionStatement",
                  "src": "1109:28:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "d8f7a0bb",
            "id": 589,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addVoter",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 572,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 571,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 589,
                  "src": "1016:16:2",
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
                    "src": "1016:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1015:18:2"
            },
            "returnParameters": {
              "id": 573,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1041:0:2"
            },
            "scope": 843,
            "src": "998:146:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 605,
              "nodeType": "Block",
              "src": "1240:62:2",
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
                          "id": 598,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 299,
                          "src": "1257:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 600,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 599,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 591,
                          "src": "1267:11:2",
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
                        "src": "1257:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$282_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 601,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "winners",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 281,
                      "src": "1257:30:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 603,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 602,
                      "name": "_index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 593,
                      "src": "1288:6:2",
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
                    "src": "1257:38:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 597,
                  "id": 604,
                  "nodeType": "Return",
                  "src": "1250:45:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "e76f6b58",
            "id": 606,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getOneFirstRoundWinner",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 594,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 591,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 606,
                  "src": "1182:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 590,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1182:4:2",
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
                  "id": 593,
                  "mutability": "mutable",
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 606,
                  "src": "1200:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 592,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1200:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1181:31:2"
            },
            "returnParameters": {
              "id": 597,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 596,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 606,
                  "src": "1234:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 595,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1234:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1233:6:2"
            },
            "scope": 843,
            "src": "1150:152:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 619,
              "nodeType": "Block",
              "src": "1392:54:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 614,
                        "name": "elections",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 299,
                        "src": "1409:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                        }
                      },
                      "id": 616,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 615,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 608,
                        "src": "1419:11:2",
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
                      "src": "1409:22:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Election_$282_storage",
                        "typeString": "struct ElectionFactory.Election storage ref"
                      }
                    },
                    "id": 617,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "winners",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 281,
                    "src": "1409:30:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 613,
                  "id": 618,
                  "nodeType": "Return",
                  "src": "1402:37:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "b12b1a7d",
            "id": 620,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getFirstRoundWinners",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 609,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 608,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 620,
                  "src": "1338:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 607,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1338:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1337:18:2"
            },
            "returnParameters": {
              "id": 613,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 612,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 620,
                  "src": "1377:13:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 610,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1377:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 611,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1377:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1376:15:2"
            },
            "scope": 843,
            "src": "1308:138:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 650,
              "nodeType": "Block",
              "src": "1500:305:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 626,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 622,
                        "src": "1539:11:2",
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
                      "id": 625,
                      "name": "computeCandidatesAverageNote",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 677,
                      "src": "1510:28:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 627,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1510:41:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 628,
                  "nodeType": "ExpressionStatement",
                  "src": "1510:41:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 630,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 622,
                        "src": "1587:11:2",
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
                      "id": 629,
                      "name": "computeFirstRoundWinners",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 756,
                      "src": "1562:24:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 631,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1562:37:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 632,
                  "nodeType": "ExpressionStatement",
                  "src": "1562:37:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 634,
                        "name": "_electionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 622,
                        "src": "1634:11:2",
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
                      "id": 633,
                      "name": "computeFinalRoundWinner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 842,
                      "src": "1610:23:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 635,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1610:36:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 636,
                  "nodeType": "ExpressionStatement",
                  "src": "1610:36:2"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 643,
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
                            "id": 637,
                            "name": "elections",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 299,
                            "src": "1659:9:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                              "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                            }
                          },
                          "id": 639,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 638,
                            "name": "_electionId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 622,
                            "src": "1669:11:2",
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
                          "src": "1659:22:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Election_$282_storage",
                            "typeString": "struct ElectionFactory.Election storage ref"
                          }
                        },
                        "id": 640,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "winners",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 281,
                        "src": "1659:30:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 641,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1659:37:2",
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
                      "id": 642,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1699:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1659:41:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 649,
                  "nodeType": "IfStatement",
                  "src": "1656:143:2",
                  "trueBody": {
                    "id": 648,
                    "nodeType": "Block",
                    "src": "1702:97:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 645,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 622,
                              "src": "1776:11:2",
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
                            "id": 644,
                            "name": "computeFinalRoundWinner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 842,
                            "src": "1752:23:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 646,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1752:36:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 647,
                        "nodeType": "ExpressionStatement",
                        "src": "1752:36:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "functionSelector": "be4d823e",
            "id": 651,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeResult",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 623,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 622,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 651,
                  "src": "1475:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 621,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1475:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1474:18:2"
            },
            "returnParameters": {
              "id": 624,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1500:0:2"
            },
            "scope": 843,
            "src": "1452:353:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 676,
              "nodeType": "Block",
              "src": "1874:140:2",
              "statements": [
                {
                  "body": {
                    "id": 674,
                    "nodeType": "Block",
                    "src": "1949:59:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 670,
                              "name": "_electionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 653,
                              "src": "1982:11:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 671,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 657,
                              "src": "1995:1:2",
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
                            "id": 669,
                            "name": "computeAverageNote",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 241,
                            "src": "1963:18:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256)"
                            }
                          },
                          "id": 672,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1963:34:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 673,
                        "nodeType": "ExpressionStatement",
                        "src": "1963:34:2"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 665,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 660,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 657,
                      "src": "1901:1:2",
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
                          "id": 661,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 299,
                          "src": "1905:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 663,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 662,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 653,
                          "src": "1915:11:2",
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
                        "src": "1905:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$282_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 664,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "candidatesCount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 270,
                      "src": "1905:38:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1901:42:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 675,
                  "initializationExpression": {
                    "assignments": [
                      657
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 657,
                        "mutability": "mutable",
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 675,
                        "src": "1889:6:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 656,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1889:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 659,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 658,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1898:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1889:10:2"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 667,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1945:3:2",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 666,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 657,
                        "src": "1945:1:2",
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
                    "id": 668,
                    "nodeType": "ExpressionStatement",
                    "src": "1945:3:2"
                  },
                  "nodeType": "ForStatement",
                  "src": "1884:124:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "ab6cb049",
            "id": 677,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeCandidatesAverageNote",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 654,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 653,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 677,
                  "src": "1849:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 652,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1849:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1848:18:2"
            },
            "returnParameters": {
              "id": 655,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1874:0:2"
            },
            "scope": 843,
            "src": "1811:203:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 755,
              "nodeType": "Block",
              "src": "2079:558:2",
              "statements": [
                {
                  "assignments": [
                    683
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 683,
                      "mutability": "mutable",
                      "name": "higherNote",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 755,
                      "src": "2089:15:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 682,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2089:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 685,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 684,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2107:1:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2089:19:2"
                },
                {
                  "body": {
                    "id": 753,
                    "nodeType": "Block",
                    "src": "2182:449:2",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 707,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 699,
                            "name": "higherNote",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 683,
                            "src": "2199:10:2",
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
                                    "id": 700,
                                    "name": "elections",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 299,
                                    "src": "2213:9:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                                      "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                    }
                                  },
                                  "id": 702,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 701,
                                    "name": "_electionId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 679,
                                    "src": "2223:11:2",
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
                                  "src": "2213:22:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Election_$282_storage",
                                    "typeString": "struct ElectionFactory.Election storage ref"
                                  }
                                },
                                "id": 703,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "candidates",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 274,
                                "src": "2213:33:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$293_storage_$",
                                  "typeString": "mapping(uint256 => struct ElectionFactory.Candidate storage ref)"
                                }
                              },
                              "id": 705,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 704,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 687,
                                "src": "2247:1:2",
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
                              "src": "2213:36:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Candidate_$293_storage",
                                "typeString": "struct ElectionFactory.Candidate storage ref"
                              }
                            },
                            "id": 706,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "averageNote",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 292,
                            "src": "2213:48:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2199:62:2",
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
                            "id": 725,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 717,
                              "name": "higherNote",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 683,
                              "src": "2354:10:2",
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
                                      "id": 718,
                                      "name": "elections",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 299,
                                      "src": "2367:9:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                                        "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                      }
                                    },
                                    "id": 720,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 719,
                                      "name": "_electionId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 679,
                                      "src": "2377:11:2",
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
                                    "src": "2367:22:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Election_$282_storage",
                                      "typeString": "struct ElectionFactory.Election storage ref"
                                    }
                                  },
                                  "id": 721,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "candidates",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 274,
                                  "src": "2367:33:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$293_storage_$",
                                    "typeString": "mapping(uint256 => struct ElectionFactory.Candidate storage ref)"
                                  }
                                },
                                "id": 723,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 722,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 687,
                                  "src": "2401:1:2",
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
                                "src": "2367:36:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Candidate_$293_storage",
                                  "typeString": "struct ElectionFactory.Candidate storage ref"
                                }
                              },
                              "id": 724,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "averageNote",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 292,
                              "src": "2367:48:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2354:61:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": null,
                          "id": 751,
                          "nodeType": "IfStatement",
                          "src": "2351:270:2",
                          "trueBody": {
                            "id": 750,
                            "nodeType": "Block",
                            "src": "2416:205:2",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 730,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "UnaryOperation",
                                  "operator": "delete",
                                  "prefix": true,
                                  "src": "2434:37:2",
                                  "subExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "id": 726,
                                        "name": "elections",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 299,
                                        "src": "2441:9:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                        }
                                      },
                                      "id": 728,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 727,
                                        "name": "_electionId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 679,
                                        "src": "2451:11:2",
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
                                      "src": "2441:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Election_$282_storage",
                                        "typeString": "struct ElectionFactory.Election storage ref"
                                      }
                                    },
                                    "id": 729,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "memberName": "winners",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 281,
                                    "src": "2441:30:2",
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
                                "id": 731,
                                "nodeType": "ExpressionStatement",
                                "src": "2434:37:2"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 740,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "argumentTypes": null,
                                    "id": 732,
                                    "name": "higherNote",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 683,
                                    "src": "2489:10:2",
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
                                            "id": 733,
                                            "name": "elections",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 299,
                                            "src": "2502:9:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                                              "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                            }
                                          },
                                          "id": 735,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 734,
                                            "name": "_electionId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 679,
                                            "src": "2512:11:2",
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
                                          "src": "2502:22:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Election_$282_storage",
                                            "typeString": "struct ElectionFactory.Election storage ref"
                                          }
                                        },
                                        "id": 736,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "candidates",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 274,
                                        "src": "2502:33:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$293_storage_$",
                                          "typeString": "mapping(uint256 => struct ElectionFactory.Candidate storage ref)"
                                        }
                                      },
                                      "id": 738,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 737,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 687,
                                        "src": "2536:1:2",
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
                                      "src": "2502:36:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Candidate_$293_storage",
                                        "typeString": "struct ElectionFactory.Candidate storage ref"
                                      }
                                    },
                                    "id": 739,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "averageNote",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 292,
                                    "src": "2502:48:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "2489:61:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 741,
                                "nodeType": "ExpressionStatement",
                                "src": "2489:61:2"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 747,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 687,
                                      "src": "2604:1:2",
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
                                          "id": 742,
                                          "name": "elections",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 299,
                                          "src": "2568:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                          }
                                        },
                                        "id": 744,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 743,
                                          "name": "_electionId",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 679,
                                          "src": "2578:11:2",
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
                                        "src": "2568:22:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_Election_$282_storage",
                                          "typeString": "struct ElectionFactory.Election storage ref"
                                        }
                                      },
                                      "id": 745,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "winners",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 281,
                                      "src": "2568:30:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                        "typeString": "uint256[] storage ref"
                                      }
                                    },
                                    "id": 746,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "push",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2568:35:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$__$",
                                      "typeString": "function (uint256)"
                                    }
                                  },
                                  "id": 748,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2568:38:2",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 749,
                                "nodeType": "ExpressionStatement",
                                "src": "2568:38:2"
                              }
                            ]
                          }
                        },
                        "id": 752,
                        "nodeType": "IfStatement",
                        "src": "2196:425:2",
                        "trueBody": {
                          "id": 716,
                          "nodeType": "Block",
                          "src": "2262:71:2",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 713,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 687,
                                    "src": "2316:1:2",
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
                                        "id": 708,
                                        "name": "elections",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 299,
                                        "src": "2280:9:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                        }
                                      },
                                      "id": 710,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 709,
                                        "name": "_electionId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 679,
                                        "src": "2290:11:2",
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
                                      "src": "2280:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Election_$282_storage",
                                        "typeString": "struct ElectionFactory.Election storage ref"
                                      }
                                    },
                                    "id": 711,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "winners",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 281,
                                    "src": "2280:30:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                      "typeString": "uint256[] storage ref"
                                    }
                                  },
                                  "id": 712,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "push",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2280:35:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$__$",
                                    "typeString": "function (uint256)"
                                  }
                                },
                                "id": 714,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2280:38:2",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 715,
                              "nodeType": "ExpressionStatement",
                              "src": "2280:38:2"
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
                    "id": 695,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 690,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 687,
                      "src": "2134:1:2",
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
                          "id": 691,
                          "name": "elections",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 299,
                          "src": "2138:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                          }
                        },
                        "id": 693,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 692,
                          "name": "_electionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 679,
                          "src": "2148:11:2",
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
                        "src": "2138:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Election_$282_storage",
                          "typeString": "struct ElectionFactory.Election storage ref"
                        }
                      },
                      "id": 694,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "candidatesCount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 270,
                      "src": "2138:38:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2134:42:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 754,
                  "initializationExpression": {
                    "assignments": [
                      687
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 687,
                        "mutability": "mutable",
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 754,
                        "src": "2122:6:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 686,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2122:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 689,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 688,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2131:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2122:10:2"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 697,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2178:3:2",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 696,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 687,
                        "src": "2178:1:2",
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
                    "id": 698,
                    "nodeType": "ExpressionStatement",
                    "src": "2178:3:2"
                  },
                  "nodeType": "ForStatement",
                  "src": "2118:513:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "cd015c32",
            "id": 756,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeFirstRoundWinners",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 680,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 679,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 756,
                  "src": "2054:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 678,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2054:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2053:18:2"
            },
            "returnParameters": {
              "id": 681,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2079:0:2"
            },
            "scope": 843,
            "src": "2020:617:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 841,
              "nodeType": "Block",
              "src": "2701:606:2",
              "statements": [
                {
                  "assignments": [
                    762
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 762,
                      "mutability": "mutable",
                      "name": "higherPercent",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 841,
                      "src": "2711:18:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 761,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2711:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 763,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2711:18:2"
                },
                {
                  "body": {
                    "id": 839,
                    "nodeType": "Block",
                    "src": "2802:499:2",
                    "statements": [
                      {
                        "assignments": [
                          779
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 779,
                            "mutability": "mutable",
                            "name": "currentPercent",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 839,
                            "src": "2816:19:2",
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
                              "src": "2816:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 792,
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
                                  "id": 780,
                                  "name": "elections",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 299,
                                  "src": "2838:9:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                                    "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                  }
                                },
                                "id": 782,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 781,
                                  "name": "_electionId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 758,
                                  "src": "2848:11:2",
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
                                "src": "2838:22:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Election_$282_storage",
                                  "typeString": "struct ElectionFactory.Election storage ref"
                                }
                              },
                              "id": 783,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "candidates",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 274,
                              "src": "2838:33:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$293_storage_$",
                                "typeString": "mapping(uint256 => struct ElectionFactory.Candidate storage ref)"
                              }
                            },
                            "id": 790,
                            "indexExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 784,
                                    "name": "elections",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 299,
                                    "src": "2872:9:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                                      "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                    }
                                  },
                                  "id": 786,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 785,
                                    "name": "_electionId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 758,
                                    "src": "2882:11:2",
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
                                  "src": "2872:22:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Election_$282_storage",
                                    "typeString": "struct ElectionFactory.Election storage ref"
                                  }
                                },
                                "id": 787,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "winners",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 281,
                                "src": "2872:30:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                  "typeString": "uint256[] storage ref"
                                }
                              },
                              "id": 789,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 788,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 765,
                                "src": "2903:1:2",
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
                              "src": "2872:33:2",
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
                            "src": "2838:68:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Candidate_$293_storage",
                              "typeString": "struct ElectionFactory.Candidate storage ref"
                            }
                          },
                          "id": 791,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "percent",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 290,
                          "src": "2838:76:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2816:98:2"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 795,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 793,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 765,
                            "src": "2931:1:2",
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
                            "id": 794,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2936:1:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "2931:6:2",
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
                            "id": 817,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 815,
                              "name": "currentPercent",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 779,
                              "src": "3110:14:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 816,
                              "name": "higherPercent",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 762,
                              "src": "3127:13:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3110:30:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": null,
                          "id": 837,
                          "nodeType": "IfStatement",
                          "src": "3106:185:2",
                          "trueBody": {
                            "id": 836,
                            "nodeType": "Block",
                            "src": "3141:150:2",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 820,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "argumentTypes": null,
                                    "id": 818,
                                    "name": "higherPercent",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 762,
                                    "src": "3159:13:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "argumentTypes": null,
                                    "id": 819,
                                    "name": "currentPercent",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 779,
                                    "src": "3175:14:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "3159:30:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 821,
                                "nodeType": "ExpressionStatement",
                                "src": "3159:30:2"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 834,
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
                                          "id": 822,
                                          "name": "elections",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 299,
                                          "src": "3207:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                          }
                                        },
                                        "id": 824,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 823,
                                          "name": "_electionId",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 758,
                                          "src": "3217:11:2",
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
                                        "src": "3207:22:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_Election_$282_storage",
                                          "typeString": "struct ElectionFactory.Election storage ref"
                                        }
                                      },
                                      "id": 825,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "winners",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 281,
                                      "src": "3207:30:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                        "typeString": "uint256[] storage ref"
                                      }
                                    },
                                    "id": 827,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "hexValue": "30",
                                      "id": 826,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3238:1:2",
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
                                    "lValueRequested": true,
                                    "nodeType": "IndexAccess",
                                    "src": "3207:33:2",
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
                                          "id": 828,
                                          "name": "elections",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 299,
                                          "src": "3243:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                                            "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                          }
                                        },
                                        "id": 830,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 829,
                                          "name": "_electionId",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 758,
                                          "src": "3253:11:2",
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
                                        "src": "3243:22:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_Election_$282_storage",
                                          "typeString": "struct ElectionFactory.Election storage ref"
                                        }
                                      },
                                      "id": 831,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "winners",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 281,
                                      "src": "3243:30:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                        "typeString": "uint256[] storage ref"
                                      }
                                    },
                                    "id": 833,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 832,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 765,
                                      "src": "3274:1:2",
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
                                    "src": "3243:33:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "3207:69:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 835,
                                "nodeType": "ExpressionStatement",
                                "src": "3207:69:2"
                              }
                            ]
                          }
                        },
                        "id": 838,
                        "nodeType": "IfStatement",
                        "src": "2928:363:2",
                        "trueBody": {
                          "id": 814,
                          "nodeType": "Block",
                          "src": "2938:150:2",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 798,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 796,
                                  "name": "higherPercent",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 762,
                                  "src": "2956:13:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "id": 797,
                                  "name": "currentPercent",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 779,
                                  "src": "2972:14:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2956:30:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 799,
                              "nodeType": "ExpressionStatement",
                              "src": "2956:30:2"
                            },
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
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "id": 800,
                                        "name": "elections",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 299,
                                        "src": "3004:9:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                        }
                                      },
                                      "id": 802,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 801,
                                        "name": "_electionId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 758,
                                        "src": "3014:11:2",
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
                                      "src": "3004:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Election_$282_storage",
                                        "typeString": "struct ElectionFactory.Election storage ref"
                                      }
                                    },
                                    "id": 803,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "winners",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 281,
                                    "src": "3004:30:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                      "typeString": "uint256[] storage ref"
                                    }
                                  },
                                  "id": 805,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "hexValue": "30",
                                    "id": 804,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "3035:1:2",
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
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "3004:33:2",
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
                                        "id": 806,
                                        "name": "elections",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 299,
                                        "src": "3040:9:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                                          "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                                        }
                                      },
                                      "id": 808,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 807,
                                        "name": "_electionId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 758,
                                        "src": "3050:11:2",
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
                                      "src": "3040:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Election_$282_storage",
                                        "typeString": "struct ElectionFactory.Election storage ref"
                                      }
                                    },
                                    "id": 809,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "winners",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 281,
                                    "src": "3040:30:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                      "typeString": "uint256[] storage ref"
                                    }
                                  },
                                  "id": 811,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 810,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 765,
                                    "src": "3071:1:2",
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
                                  "src": "3040:33:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "3004:69:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 813,
                              "nodeType": "ExpressionStatement",
                              "src": "3004:69:2"
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
                    "id": 774,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 768,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 765,
                      "src": "2755:1:2",
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
                            "id": 769,
                            "name": "elections",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 299,
                            "src": "2759:9:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Election_$282_storage_$",
                              "typeString": "mapping(uint256 => struct ElectionFactory.Election storage ref)"
                            }
                          },
                          "id": 771,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 770,
                            "name": "_electionId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 758,
                            "src": "2769:11:2",
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
                          "src": "2759:22:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Election_$282_storage",
                            "typeString": "struct ElectionFactory.Election storage ref"
                          }
                        },
                        "id": 772,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "winners",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 281,
                        "src": "2759:30:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 773,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2759:37:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2755:41:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 840,
                  "initializationExpression": {
                    "assignments": [
                      765
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 765,
                        "mutability": "mutable",
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 840,
                        "src": "2743:6:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 764,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2743:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 767,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 766,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2752:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2743:10:2"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 776,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2798:3:2",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 775,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 765,
                        "src": "2798:1:2",
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
                    "id": 777,
                    "nodeType": "ExpressionStatement",
                    "src": "2798:3:2"
                  },
                  "nodeType": "ForStatement",
                  "src": "2739:562:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "7bb1541d",
            "id": 842,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeFinalRoundWinner",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 759,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 758,
                  "mutability": "mutable",
                  "name": "_electionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 842,
                  "src": "2676:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 757,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2676:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2675:18:2"
            },
            "returnParameters": {
              "id": 760,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2701:0:2"
            },
            "scope": 843,
            "src": "2643:664:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 844,
        "src": "185:3124:2"
      }
    ],
    "src": "32:3278:2"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionHelper.sol",
      "exportedSymbols": {
        "ElectionHelper": [
          843
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
        "id": 492,
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
        "id": 493,
        "name": "PragmaDirective",
        "src": "66:33:2"
      },
      {
        "attributes": {
          "SourceUnit": 243,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/Candidate.sol",
          "file": "./Candidate.sol",
          "scope": 844,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 494,
        "name": "ImportDirective",
        "src": "101:25:2"
      },
      {
        "attributes": {
          "SourceUnit": 1030,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol",
          "file": "./ownable.sol",
          "scope": 844,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 495,
        "name": "ImportDirective",
        "src": "127:23:2"
      },
      {
        "attributes": {
          "SourceUnit": 491,
          "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ElectionFactory.sol",
          "file": "./ElectionFactory.sol",
          "scope": 844,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 496,
        "name": "ImportDirective",
        "src": "151:31:2"
      },
      {
        "attributes": {
          "abstract": false,
          "contractDependencies": [
            242,
            490,
            1029
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            843,
            242,
            490,
            1029
          ],
          "name": "ElectionHelper",
          "scope": 844
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
                  "referencedDeclaration": 490,
                  "type": "contract ElectionFactory"
                },
                "id": 497,
                "name": "UserDefinedTypeName",
                "src": "212:15:2"
              }
            ],
            "id": 498,
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
                "id": 499,
                "name": "UserDefinedTypeName",
                "src": "229:9:2"
              }
            ],
            "id": 500,
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
              "scope": 843,
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
                      "scope": 529,
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
                        "id": 501,
                        "name": "ElementaryTypeName",
                        "src": "330:4:2"
                      }
                    ],
                    "id": 502,
                    "name": "VariableDeclaration",
                    "src": "330:16:2"
                  }
                ],
                "id": 503,
                "name": "ParameterList",
                "src": "329:18:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 508,
                "name": "ParameterList",
                "src": "377:0:2"
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
                    "id": 504,
                    "name": "Identifier",
                    "src": "357:7:2"
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
                        "id": 505,
                        "name": "Identifier",
                        "src": "365:3:2"
                      }
                    ],
                    "id": 506,
                    "name": "MemberAccess",
                    "src": "365:10:2"
                  }
                ],
                "id": 507,
                "name": "ModifierInvocation",
                "src": "357:19:2"
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
                                      "referencedDeclaration": 299,
                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                      "value": "elections"
                                    },
                                    "id": 509,
                                    "name": "Identifier",
                                    "src": "387:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 502,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 510,
                                    "name": "Identifier",
                                    "src": "397:11:2"
                                  }
                                ],
                                "id": 511,
                                "name": "IndexAccess",
                                "src": "387:22:2"
                              }
                            ],
                            "id": 512,
                            "name": "MemberAccess",
                            "src": "387:29:2"
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
                            "id": 513,
                            "name": "Literal",
                            "src": "419:5:2"
                          }
                        ],
                        "id": 514,
                        "name": "Assignment",
                        "src": "387:37:2"
                      }
                    ],
                    "id": 515,
                    "name": "ExpressionStatement",
                    "src": "387:37:2"
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
                                      "referencedDeclaration": 299,
                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                      "value": "elections"
                                    },
                                    "id": 516,
                                    "name": "Identifier",
                                    "src": "434:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 502,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 517,
                                    "name": "Identifier",
                                    "src": "444:11:2"
                                  }
                                ],
                                "id": 518,
                                "name": "IndexAccess",
                                "src": "434:22:2"
                              }
                            ],
                            "id": 519,
                            "name": "MemberAccess",
                            "src": "434:34:2"
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
                                "id": 520,
                                "name": "Identifier",
                                "src": "471:5:2"
                              }
                            ],
                            "id": 521,
                            "name": "MemberAccess",
                            "src": "471:15:2"
                          }
                        ],
                        "id": 522,
                        "name": "Assignment",
                        "src": "434:52:2"
                      }
                    ],
                    "id": 523,
                    "name": "ExpressionStatement",
                    "src": "434:52:2"
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
                              "referencedDeclaration": 651,
                              "type": "function (uint256)",
                              "value": "computeResult"
                            },
                            "id": 524,
                            "name": "Identifier",
                            "src": "496:13:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 502,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 525,
                            "name": "Identifier",
                            "src": "510:11:2"
                          }
                        ],
                        "id": 526,
                        "name": "FunctionCall",
                        "src": "496:26:2"
                      }
                    ],
                    "id": 527,
                    "name": "ExpressionStatement",
                    "src": "496:26:2"
                  }
                ],
                "id": 528,
                "name": "Block",
                "src": "377:152:2"
              }
            ],
            "id": 529,
            "name": "FunctionDefinition",
            "src": "309:220:2"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "fb5cbf43",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getElectionWinners",
              "overrides": null,
              "scope": 843,
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
                      "scope": 543,
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
                        "id": 530,
                        "name": "ElementaryTypeName",
                        "src": "563:4:2"
                      }
                    ],
                    "id": 531,
                    "name": "VariableDeclaration",
                    "src": "563:16:2"
                  }
                ],
                "id": 532,
                "name": "ParameterList",
                "src": "562:18:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 543,
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
                            "id": 533,
                            "name": "ElementaryTypeName",
                            "src": "604:4:2"
                          }
                        ],
                        "id": 534,
                        "name": "ArrayTypeName",
                        "src": "604:6:2"
                      }
                    ],
                    "id": 535,
                    "name": "VariableDeclaration",
                    "src": "604:13:2"
                  }
                ],
                "id": 536,
                "name": "ParameterList",
                "src": "603:15:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 536
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
                                  "referencedDeclaration": 299,
                                  "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                  "value": "elections"
                                },
                                "id": 537,
                                "name": "Identifier",
                                "src": "636:9:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 531,
                                  "type": "uint256",
                                  "value": "_electionId"
                                },
                                "id": 538,
                                "name": "Identifier",
                                "src": "646:11:2"
                              }
                            ],
                            "id": 539,
                            "name": "IndexAccess",
                            "src": "636:22:2"
                          }
                        ],
                        "id": 540,
                        "name": "MemberAccess",
                        "src": "636:30:2"
                      }
                    ],
                    "id": 541,
                    "name": "Return",
                    "src": "629:37:2"
                  }
                ],
                "id": 542,
                "name": "Block",
                "src": "619:104:2"
              }
            ],
            "id": 543,
            "name": "FunctionDefinition",
            "src": "535:188:2"
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
              "scope": 843,
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
                      "scope": 556,
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
                        "id": 544,
                        "name": "ElementaryTypeName",
                        "src": "755:4:2"
                      }
                    ],
                    "id": 545,
                    "name": "VariableDeclaration",
                    "src": "755:16:2"
                  }
                ],
                "id": 546,
                "name": "ParameterList",
                "src": "754:18:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 556,
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
                        "id": 547,
                        "name": "ElementaryTypeName",
                        "src": "794:6:2"
                      }
                    ],
                    "id": 548,
                    "name": "VariableDeclaration",
                    "src": "794:13:2"
                  }
                ],
                "id": 549,
                "name": "ParameterList",
                "src": "793:15:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 549
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
                                  "referencedDeclaration": 299,
                                  "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                  "value": "elections"
                                },
                                "id": 550,
                                "name": "Identifier",
                                "src": "826:9:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 545,
                                  "type": "uint256",
                                  "value": "_electionId"
                                },
                                "id": 551,
                                "name": "Identifier",
                                "src": "836:11:2"
                              }
                            ],
                            "id": 552,
                            "name": "IndexAccess",
                            "src": "826:22:2"
                          }
                        ],
                        "id": 553,
                        "name": "MemberAccess",
                        "src": "826:28:2"
                      }
                    ],
                    "id": 554,
                    "name": "Return",
                    "src": "819:35:2"
                  }
                ],
                "id": 555,
                "name": "Block",
                "src": "809:52:2"
              }
            ],
            "id": 556,
            "name": "FunctionDefinition",
            "src": "729:132:2"
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
              "scope": 843,
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
                      "scope": 569,
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
                        "id": 557,
                        "name": "ElementaryTypeName",
                        "src": "894:4:2"
                      }
                    ],
                    "id": 558,
                    "name": "VariableDeclaration",
                    "src": "894:16:2"
                  }
                ],
                "id": 559,
                "name": "ParameterList",
                "src": "893:18:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 569,
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
                        "id": 560,
                        "name": "ElementaryTypeName",
                        "src": "933:4:2"
                      }
                    ],
                    "id": 561,
                    "name": "VariableDeclaration",
                    "src": "933:4:2"
                  }
                ],
                "id": 562,
                "name": "ParameterList",
                "src": "932:6:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 562
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
                                  "referencedDeclaration": 299,
                                  "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                  "value": "elections"
                                },
                                "id": 563,
                                "name": "Identifier",
                                "src": "956:9:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 558,
                                  "type": "uint256",
                                  "value": "_electionId"
                                },
                                "id": 564,
                                "name": "Identifier",
                                "src": "966:11:2"
                              }
                            ],
                            "id": 565,
                            "name": "IndexAccess",
                            "src": "956:22:2"
                          }
                        ],
                        "id": 566,
                        "name": "MemberAccess",
                        "src": "956:29:2"
                      }
                    ],
                    "id": 567,
                    "name": "Return",
                    "src": "949:36:2"
                  }
                ],
                "id": 568,
                "name": "Block",
                "src": "939:53:2"
              }
            ],
            "id": 569,
            "name": "FunctionDefinition",
            "src": "867:125:2"
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
              "scope": 843,
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
                      "scope": 589,
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
                        "src": "1016:4:2"
                      }
                    ],
                    "id": 571,
                    "name": "VariableDeclaration",
                    "src": "1016:16:2"
                  }
                ],
                "id": 572,
                "name": "ParameterList",
                "src": "1015:18:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 573,
                "name": "ParameterList",
                "src": "1041:0:2"
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
                                          "referencedDeclaration": 299,
                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                          "value": "elections"
                                        },
                                        "id": 574,
                                        "name": "Identifier",
                                        "src": "1051:9:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 571,
                                          "type": "uint256",
                                          "value": "_electionId"
                                        },
                                        "id": 575,
                                        "name": "Identifier",
                                        "src": "1061:11:2"
                                      }
                                    ],
                                    "id": 576,
                                    "name": "IndexAccess",
                                    "src": "1051:22:2"
                                  }
                                ],
                                "id": 577,
                                "name": "MemberAccess",
                                "src": "1051:29:2"
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
                                    "id": 578,
                                    "name": "Identifier",
                                    "src": "1081:3:2"
                                  }
                                ],
                                "id": 579,
                                "name": "MemberAccess",
                                "src": "1081:10:2"
                              }
                            ],
                            "id": 580,
                            "name": "IndexAccess",
                            "src": "1051:41:2"
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
                            "id": 581,
                            "name": "Literal",
                            "src": "1095:4:2"
                          }
                        ],
                        "id": 582,
                        "name": "Assignment",
                        "src": "1051:48:2"
                      }
                    ],
                    "id": 583,
                    "name": "ExpressionStatement",
                    "src": "1051:48:2"
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
                            "id": 584,
                            "name": "Identifier",
                            "src": "1109:15:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 571,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 585,
                            "name": "Identifier",
                            "src": "1125:11:2"
                          }
                        ],
                        "id": 586,
                        "name": "FunctionCall",
                        "src": "1109:28:2"
                      }
                    ],
                    "id": 587,
                    "name": "ExpressionStatement",
                    "src": "1109:28:2"
                  }
                ],
                "id": 588,
                "name": "Block",
                "src": "1041:103:2"
              }
            ],
            "id": 589,
            "name": "FunctionDefinition",
            "src": "998:146:2"
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
              "scope": 843,
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
                      "scope": 606,
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
                        "id": 590,
                        "name": "ElementaryTypeName",
                        "src": "1182:4:2"
                      }
                    ],
                    "id": 591,
                    "name": "VariableDeclaration",
                    "src": "1182:16:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_index",
                      "overrides": null,
                      "scope": 606,
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
                        "id": 592,
                        "name": "ElementaryTypeName",
                        "src": "1200:4:2"
                      }
                    ],
                    "id": 593,
                    "name": "VariableDeclaration",
                    "src": "1200:11:2"
                  }
                ],
                "id": 594,
                "name": "ParameterList",
                "src": "1181:31:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 606,
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
                        "id": 595,
                        "name": "ElementaryTypeName",
                        "src": "1234:4:2"
                      }
                    ],
                    "id": 596,
                    "name": "VariableDeclaration",
                    "src": "1234:4:2"
                  }
                ],
                "id": 597,
                "name": "ParameterList",
                "src": "1233:6:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 597
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
                                      "referencedDeclaration": 299,
                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                      "value": "elections"
                                    },
                                    "id": 598,
                                    "name": "Identifier",
                                    "src": "1257:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 591,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 599,
                                    "name": "Identifier",
                                    "src": "1267:11:2"
                                  }
                                ],
                                "id": 600,
                                "name": "IndexAccess",
                                "src": "1257:22:2"
                              }
                            ],
                            "id": 601,
                            "name": "MemberAccess",
                            "src": "1257:30:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 593,
                              "type": "uint256",
                              "value": "_index"
                            },
                            "id": 602,
                            "name": "Identifier",
                            "src": "1288:6:2"
                          }
                        ],
                        "id": 603,
                        "name": "IndexAccess",
                        "src": "1257:38:2"
                      }
                    ],
                    "id": 604,
                    "name": "Return",
                    "src": "1250:45:2"
                  }
                ],
                "id": 605,
                "name": "Block",
                "src": "1240:62:2"
              }
            ],
            "id": 606,
            "name": "FunctionDefinition",
            "src": "1150:152:2"
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
              "scope": 843,
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
                      "scope": 620,
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
                        "id": 607,
                        "name": "ElementaryTypeName",
                        "src": "1338:4:2"
                      }
                    ],
                    "id": 608,
                    "name": "VariableDeclaration",
                    "src": "1338:16:2"
                  }
                ],
                "id": 609,
                "name": "ParameterList",
                "src": "1337:18:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 620,
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
                            "id": 610,
                            "name": "ElementaryTypeName",
                            "src": "1377:4:2"
                          }
                        ],
                        "id": 611,
                        "name": "ArrayTypeName",
                        "src": "1377:6:2"
                      }
                    ],
                    "id": 612,
                    "name": "VariableDeclaration",
                    "src": "1377:13:2"
                  }
                ],
                "id": 613,
                "name": "ParameterList",
                "src": "1376:15:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 613
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
                                  "referencedDeclaration": 299,
                                  "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                  "value": "elections"
                                },
                                "id": 614,
                                "name": "Identifier",
                                "src": "1409:9:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 608,
                                  "type": "uint256",
                                  "value": "_electionId"
                                },
                                "id": 615,
                                "name": "Identifier",
                                "src": "1419:11:2"
                              }
                            ],
                            "id": 616,
                            "name": "IndexAccess",
                            "src": "1409:22:2"
                          }
                        ],
                        "id": 617,
                        "name": "MemberAccess",
                        "src": "1409:30:2"
                      }
                    ],
                    "id": 618,
                    "name": "Return",
                    "src": "1402:37:2"
                  }
                ],
                "id": 619,
                "name": "Block",
                "src": "1392:54:2"
              }
            ],
            "id": 620,
            "name": "FunctionDefinition",
            "src": "1308:138:2"
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
              "scope": 843,
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
                      "scope": 651,
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
                        "id": 621,
                        "name": "ElementaryTypeName",
                        "src": "1475:4:2"
                      }
                    ],
                    "id": 622,
                    "name": "VariableDeclaration",
                    "src": "1475:16:2"
                  }
                ],
                "id": 623,
                "name": "ParameterList",
                "src": "1474:18:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 624,
                "name": "ParameterList",
                "src": "1500:0:2"
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
                              "referencedDeclaration": 677,
                              "type": "function (uint256)",
                              "value": "computeCandidatesAverageNote"
                            },
                            "id": 625,
                            "name": "Identifier",
                            "src": "1510:28:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 622,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 626,
                            "name": "Identifier",
                            "src": "1539:11:2"
                          }
                        ],
                        "id": 627,
                        "name": "FunctionCall",
                        "src": "1510:41:2"
                      }
                    ],
                    "id": 628,
                    "name": "ExpressionStatement",
                    "src": "1510:41:2"
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
                              "referencedDeclaration": 756,
                              "type": "function (uint256)",
                              "value": "computeFirstRoundWinners"
                            },
                            "id": 629,
                            "name": "Identifier",
                            "src": "1562:24:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 622,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 630,
                            "name": "Identifier",
                            "src": "1587:11:2"
                          }
                        ],
                        "id": 631,
                        "name": "FunctionCall",
                        "src": "1562:37:2"
                      }
                    ],
                    "id": 632,
                    "name": "ExpressionStatement",
                    "src": "1562:37:2"
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
                              "referencedDeclaration": 842,
                              "type": "function (uint256)",
                              "value": "computeFinalRoundWinner"
                            },
                            "id": 633,
                            "name": "Identifier",
                            "src": "1610:23:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 622,
                              "type": "uint256",
                              "value": "_electionId"
                            },
                            "id": 634,
                            "name": "Identifier",
                            "src": "1634:11:2"
                          }
                        ],
                        "id": 635,
                        "name": "FunctionCall",
                        "src": "1610:36:2"
                      }
                    ],
                    "id": 636,
                    "name": "ExpressionStatement",
                    "src": "1610:36:2"
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
                                          "referencedDeclaration": 299,
                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                          "value": "elections"
                                        },
                                        "id": 637,
                                        "name": "Identifier",
                                        "src": "1659:9:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 622,
                                          "type": "uint256",
                                          "value": "_electionId"
                                        },
                                        "id": 638,
                                        "name": "Identifier",
                                        "src": "1669:11:2"
                                      }
                                    ],
                                    "id": 639,
                                    "name": "IndexAccess",
                                    "src": "1659:22:2"
                                  }
                                ],
                                "id": 640,
                                "name": "MemberAccess",
                                "src": "1659:30:2"
                              }
                            ],
                            "id": 641,
                            "name": "MemberAccess",
                            "src": "1659:37:2"
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
                            "id": 642,
                            "name": "Literal",
                            "src": "1699:1:2"
                          }
                        ],
                        "id": 643,
                        "name": "BinaryOperation",
                        "src": "1659:41:2"
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
                                      "referencedDeclaration": 842,
                                      "type": "function (uint256)",
                                      "value": "computeFinalRoundWinner"
                                    },
                                    "id": 644,
                                    "name": "Identifier",
                                    "src": "1752:23:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 622,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 645,
                                    "name": "Identifier",
                                    "src": "1776:11:2"
                                  }
                                ],
                                "id": 646,
                                "name": "FunctionCall",
                                "src": "1752:36:2"
                              }
                            ],
                            "id": 647,
                            "name": "ExpressionStatement",
                            "src": "1752:36:2"
                          }
                        ],
                        "id": 648,
                        "name": "Block",
                        "src": "1702:97:2"
                      }
                    ],
                    "id": 649,
                    "name": "IfStatement",
                    "src": "1656:143:2"
                  }
                ],
                "id": 650,
                "name": "Block",
                "src": "1500:305:2"
              }
            ],
            "id": 651,
            "name": "FunctionDefinition",
            "src": "1452:353:2"
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
              "scope": 843,
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
                      "scope": 677,
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
                        "id": 652,
                        "name": "ElementaryTypeName",
                        "src": "1849:4:2"
                      }
                    ],
                    "id": 653,
                    "name": "VariableDeclaration",
                    "src": "1849:16:2"
                  }
                ],
                "id": 654,
                "name": "ParameterList",
                "src": "1848:18:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 655,
                "name": "ParameterList",
                "src": "1874:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            657
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "mutability": "mutable",
                              "name": "i",
                              "overrides": null,
                              "scope": 675,
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
                                "id": 656,
                                "name": "ElementaryTypeName",
                                "src": "1889:4:2"
                              }
                            ],
                            "id": 657,
                            "name": "VariableDeclaration",
                            "src": "1889:6:2"
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
                            "src": "1898:1:2"
                          }
                        ],
                        "id": 659,
                        "name": "VariableDeclarationStatement",
                        "src": "1889:10:2"
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
                              "referencedDeclaration": 657,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 660,
                            "name": "Identifier",
                            "src": "1901:1:2"
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
                                    "id": 661,
                                    "name": "Identifier",
                                    "src": "1905:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 653,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 662,
                                    "name": "Identifier",
                                    "src": "1915:11:2"
                                  }
                                ],
                                "id": 663,
                                "name": "IndexAccess",
                                "src": "1905:22:2"
                              }
                            ],
                            "id": 664,
                            "name": "MemberAccess",
                            "src": "1905:38:2"
                          }
                        ],
                        "id": 665,
                        "name": "BinaryOperation",
                        "src": "1901:42:2"
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
                                  "referencedDeclaration": 657,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 666,
                                "name": "Identifier",
                                "src": "1945:1:2"
                              }
                            ],
                            "id": 667,
                            "name": "UnaryOperation",
                            "src": "1945:3:2"
                          }
                        ],
                        "id": 668,
                        "name": "ExpressionStatement",
                        "src": "1945:3:2"
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
                                    "id": 669,
                                    "name": "Identifier",
                                    "src": "1963:18:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 653,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 670,
                                    "name": "Identifier",
                                    "src": "1982:11:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 657,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 671,
                                    "name": "Identifier",
                                    "src": "1995:1:2"
                                  }
                                ],
                                "id": 672,
                                "name": "FunctionCall",
                                "src": "1963:34:2"
                              }
                            ],
                            "id": 673,
                            "name": "ExpressionStatement",
                            "src": "1963:34:2"
                          }
                        ],
                        "id": 674,
                        "name": "Block",
                        "src": "1949:59:2"
                      }
                    ],
                    "id": 675,
                    "name": "ForStatement",
                    "src": "1884:124:2"
                  }
                ],
                "id": 676,
                "name": "Block",
                "src": "1874:140:2"
              }
            ],
            "id": 677,
            "name": "FunctionDefinition",
            "src": "1811:203:2"
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
              "scope": 843,
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
                      "scope": 756,
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
                        "id": 678,
                        "name": "ElementaryTypeName",
                        "src": "2054:4:2"
                      }
                    ],
                    "id": 679,
                    "name": "VariableDeclaration",
                    "src": "2054:16:2"
                  }
                ],
                "id": 680,
                "name": "ParameterList",
                "src": "2053:18:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 681,
                "name": "ParameterList",
                "src": "2079:0:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        683
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "higherNote",
                          "overrides": null,
                          "scope": 755,
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
                            "id": 682,
                            "name": "ElementaryTypeName",
                            "src": "2089:4:2"
                          }
                        ],
                        "id": 683,
                        "name": "VariableDeclaration",
                        "src": "2089:15:2"
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
                        "id": 684,
                        "name": "Literal",
                        "src": "2107:1:2"
                      }
                    ],
                    "id": 685,
                    "name": "VariableDeclarationStatement",
                    "src": "2089:19:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            687
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "mutability": "mutable",
                              "name": "i",
                              "overrides": null,
                              "scope": 754,
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
                                "id": 686,
                                "name": "ElementaryTypeName",
                                "src": "2122:4:2"
                              }
                            ],
                            "id": 687,
                            "name": "VariableDeclaration",
                            "src": "2122:6:2"
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
                            "id": 688,
                            "name": "Literal",
                            "src": "2131:1:2"
                          }
                        ],
                        "id": 689,
                        "name": "VariableDeclarationStatement",
                        "src": "2122:10:2"
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
                              "referencedDeclaration": 687,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 690,
                            "name": "Identifier",
                            "src": "2134:1:2"
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
                                    "id": 691,
                                    "name": "Identifier",
                                    "src": "2138:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 679,
                                      "type": "uint256",
                                      "value": "_electionId"
                                    },
                                    "id": 692,
                                    "name": "Identifier",
                                    "src": "2148:11:2"
                                  }
                                ],
                                "id": 693,
                                "name": "IndexAccess",
                                "src": "2138:22:2"
                              }
                            ],
                            "id": 694,
                            "name": "MemberAccess",
                            "src": "2138:38:2"
                          }
                        ],
                        "id": 695,
                        "name": "BinaryOperation",
                        "src": "2134:42:2"
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
                                  "referencedDeclaration": 687,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 696,
                                "name": "Identifier",
                                "src": "2178:1:2"
                              }
                            ],
                            "id": 697,
                            "name": "UnaryOperation",
                            "src": "2178:3:2"
                          }
                        ],
                        "id": 698,
                        "name": "ExpressionStatement",
                        "src": "2178:3:2"
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
                                      "referencedDeclaration": 683,
                                      "type": "uint256",
                                      "value": "higherNote"
                                    },
                                    "id": 699,
                                    "name": "Identifier",
                                    "src": "2199:10:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "averageNote",
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
                                                      "referencedDeclaration": 299,
                                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                      "value": "elections"
                                                    },
                                                    "id": 700,
                                                    "name": "Identifier",
                                                    "src": "2213:9:2"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 679,
                                                      "type": "uint256",
                                                      "value": "_electionId"
                                                    },
                                                    "id": 701,
                                                    "name": "Identifier",
                                                    "src": "2223:11:2"
                                                  }
                                                ],
                                                "id": 702,
                                                "name": "IndexAccess",
                                                "src": "2213:22:2"
                                              }
                                            ],
                                            "id": 703,
                                            "name": "MemberAccess",
                                            "src": "2213:33:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 687,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 704,
                                            "name": "Identifier",
                                            "src": "2247:1:2"
                                          }
                                        ],
                                        "id": 705,
                                        "name": "IndexAccess",
                                        "src": "2213:36:2"
                                      }
                                    ],
                                    "id": 706,
                                    "name": "MemberAccess",
                                    "src": "2213:48:2"
                                  }
                                ],
                                "id": 707,
                                "name": "BinaryOperation",
                                "src": "2199:62:2"
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
                                                          "referencedDeclaration": 299,
                                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                          "value": "elections"
                                                        },
                                                        "id": 708,
                                                        "name": "Identifier",
                                                        "src": "2280:9:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 679,
                                                          "type": "uint256",
                                                          "value": "_electionId"
                                                        },
                                                        "id": 709,
                                                        "name": "Identifier",
                                                        "src": "2290:11:2"
                                                      }
                                                    ],
                                                    "id": 710,
                                                    "name": "IndexAccess",
                                                    "src": "2280:22:2"
                                                  }
                                                ],
                                                "id": 711,
                                                "name": "MemberAccess",
                                                "src": "2280:30:2"
                                              }
                                            ],
                                            "id": 712,
                                            "name": "MemberAccess",
                                            "src": "2280:35:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 687,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 713,
                                            "name": "Identifier",
                                            "src": "2316:1:2"
                                          }
                                        ],
                                        "id": 714,
                                        "name": "FunctionCall",
                                        "src": "2280:38:2"
                                      }
                                    ],
                                    "id": 715,
                                    "name": "ExpressionStatement",
                                    "src": "2280:38:2"
                                  }
                                ],
                                "id": 716,
                                "name": "Block",
                                "src": "2262:71:2"
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
                                          "referencedDeclaration": 683,
                                          "type": "uint256",
                                          "value": "higherNote"
                                        },
                                        "id": 717,
                                        "name": "Identifier",
                                        "src": "2354:10:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "averageNote",
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
                                                          "referencedDeclaration": 299,
                                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                          "value": "elections"
                                                        },
                                                        "id": 718,
                                                        "name": "Identifier",
                                                        "src": "2367:9:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 679,
                                                          "type": "uint256",
                                                          "value": "_electionId"
                                                        },
                                                        "id": 719,
                                                        "name": "Identifier",
                                                        "src": "2377:11:2"
                                                      }
                                                    ],
                                                    "id": 720,
                                                    "name": "IndexAccess",
                                                    "src": "2367:22:2"
                                                  }
                                                ],
                                                "id": 721,
                                                "name": "MemberAccess",
                                                "src": "2367:33:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 687,
                                                  "type": "uint256",
                                                  "value": "i"
                                                },
                                                "id": 722,
                                                "name": "Identifier",
                                                "src": "2401:1:2"
                                              }
                                            ],
                                            "id": 723,
                                            "name": "IndexAccess",
                                            "src": "2367:36:2"
                                          }
                                        ],
                                        "id": 724,
                                        "name": "MemberAccess",
                                        "src": "2367:48:2"
                                      }
                                    ],
                                    "id": 725,
                                    "name": "BinaryOperation",
                                    "src": "2354:61:2"
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
                                                          "referencedDeclaration": 299,
                                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                          "value": "elections"
                                                        },
                                                        "id": 726,
                                                        "name": "Identifier",
                                                        "src": "2441:9:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 679,
                                                          "type": "uint256",
                                                          "value": "_electionId"
                                                        },
                                                        "id": 727,
                                                        "name": "Identifier",
                                                        "src": "2451:11:2"
                                                      }
                                                    ],
                                                    "id": 728,
                                                    "name": "IndexAccess",
                                                    "src": "2441:22:2"
                                                  }
                                                ],
                                                "id": 729,
                                                "name": "MemberAccess",
                                                "src": "2441:30:2"
                                              }
                                            ],
                                            "id": 730,
                                            "name": "UnaryOperation",
                                            "src": "2434:37:2"
                                          }
                                        ],
                                        "id": 731,
                                        "name": "ExpressionStatement",
                                        "src": "2434:37:2"
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
                                                  "referencedDeclaration": 683,
                                                  "type": "uint256",
                                                  "value": "higherNote"
                                                },
                                                "id": 732,
                                                "name": "Identifier",
                                                "src": "2489:10:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "member_name": "averageNote",
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
                                                                  "referencedDeclaration": 299,
                                                                  "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                                  "value": "elections"
                                                                },
                                                                "id": 733,
                                                                "name": "Identifier",
                                                                "src": "2502:9:2"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 679,
                                                                  "type": "uint256",
                                                                  "value": "_electionId"
                                                                },
                                                                "id": 734,
                                                                "name": "Identifier",
                                                                "src": "2512:11:2"
                                                              }
                                                            ],
                                                            "id": 735,
                                                            "name": "IndexAccess",
                                                            "src": "2502:22:2"
                                                          }
                                                        ],
                                                        "id": 736,
                                                        "name": "MemberAccess",
                                                        "src": "2502:33:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 687,
                                                          "type": "uint256",
                                                          "value": "i"
                                                        },
                                                        "id": 737,
                                                        "name": "Identifier",
                                                        "src": "2536:1:2"
                                                      }
                                                    ],
                                                    "id": 738,
                                                    "name": "IndexAccess",
                                                    "src": "2502:36:2"
                                                  }
                                                ],
                                                "id": 739,
                                                "name": "MemberAccess",
                                                "src": "2502:48:2"
                                              }
                                            ],
                                            "id": 740,
                                            "name": "Assignment",
                                            "src": "2489:61:2"
                                          }
                                        ],
                                        "id": 741,
                                        "name": "ExpressionStatement",
                                        "src": "2489:61:2"
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
                                                              "referencedDeclaration": 299,
                                                              "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                              "value": "elections"
                                                            },
                                                            "id": 742,
                                                            "name": "Identifier",
                                                            "src": "2568:9:2"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 679,
                                                              "type": "uint256",
                                                              "value": "_electionId"
                                                            },
                                                            "id": 743,
                                                            "name": "Identifier",
                                                            "src": "2578:11:2"
                                                          }
                                                        ],
                                                        "id": 744,
                                                        "name": "IndexAccess",
                                                        "src": "2568:22:2"
                                                      }
                                                    ],
                                                    "id": 745,
                                                    "name": "MemberAccess",
                                                    "src": "2568:30:2"
                                                  }
                                                ],
                                                "id": 746,
                                                "name": "MemberAccess",
                                                "src": "2568:35:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 687,
                                                  "type": "uint256",
                                                  "value": "i"
                                                },
                                                "id": 747,
                                                "name": "Identifier",
                                                "src": "2604:1:2"
                                              }
                                            ],
                                            "id": 748,
                                            "name": "FunctionCall",
                                            "src": "2568:38:2"
                                          }
                                        ],
                                        "id": 749,
                                        "name": "ExpressionStatement",
                                        "src": "2568:38:2"
                                      }
                                    ],
                                    "id": 750,
                                    "name": "Block",
                                    "src": "2416:205:2"
                                  }
                                ],
                                "id": 751,
                                "name": "IfStatement",
                                "src": "2351:270:2"
                              }
                            ],
                            "id": 752,
                            "name": "IfStatement",
                            "src": "2196:425:2"
                          }
                        ],
                        "id": 753,
                        "name": "Block",
                        "src": "2182:449:2"
                      }
                    ],
                    "id": 754,
                    "name": "ForStatement",
                    "src": "2118:513:2"
                  }
                ],
                "id": 755,
                "name": "Block",
                "src": "2079:558:2"
              }
            ],
            "id": 756,
            "name": "FunctionDefinition",
            "src": "2020:617:2"
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
              "scope": 843,
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
                      "scope": 842,
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
                        "id": 757,
                        "name": "ElementaryTypeName",
                        "src": "2676:4:2"
                      }
                    ],
                    "id": 758,
                    "name": "VariableDeclaration",
                    "src": "2676:16:2"
                  }
                ],
                "id": 759,
                "name": "ParameterList",
                "src": "2675:18:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 760,
                "name": "ParameterList",
                "src": "2701:0:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        762
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
                          "scope": 841,
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
                            "id": 761,
                            "name": "ElementaryTypeName",
                            "src": "2711:4:2"
                          }
                        ],
                        "id": 762,
                        "name": "VariableDeclaration",
                        "src": "2711:18:2"
                      }
                    ],
                    "id": 763,
                    "name": "VariableDeclarationStatement",
                    "src": "2711:18:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            765
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "mutability": "mutable",
                              "name": "i",
                              "overrides": null,
                              "scope": 840,
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
                                "id": 764,
                                "name": "ElementaryTypeName",
                                "src": "2743:4:2"
                              }
                            ],
                            "id": 765,
                            "name": "VariableDeclaration",
                            "src": "2743:6:2"
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
                            "id": 766,
                            "name": "Literal",
                            "src": "2752:1:2"
                          }
                        ],
                        "id": 767,
                        "name": "VariableDeclarationStatement",
                        "src": "2743:10:2"
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
                              "referencedDeclaration": 765,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 768,
                            "name": "Identifier",
                            "src": "2755:1:2"
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
                                          "referencedDeclaration": 299,
                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                          "value": "elections"
                                        },
                                        "id": 769,
                                        "name": "Identifier",
                                        "src": "2759:9:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 758,
                                          "type": "uint256",
                                          "value": "_electionId"
                                        },
                                        "id": 770,
                                        "name": "Identifier",
                                        "src": "2769:11:2"
                                      }
                                    ],
                                    "id": 771,
                                    "name": "IndexAccess",
                                    "src": "2759:22:2"
                                  }
                                ],
                                "id": 772,
                                "name": "MemberAccess",
                                "src": "2759:30:2"
                              }
                            ],
                            "id": 773,
                            "name": "MemberAccess",
                            "src": "2759:37:2"
                          }
                        ],
                        "id": 774,
                        "name": "BinaryOperation",
                        "src": "2755:41:2"
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
                                  "referencedDeclaration": 765,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 775,
                                "name": "Identifier",
                                "src": "2798:1:2"
                              }
                            ],
                            "id": 776,
                            "name": "UnaryOperation",
                            "src": "2798:3:2"
                          }
                        ],
                        "id": 777,
                        "name": "ExpressionStatement",
                        "src": "2798:3:2"
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
                                  "name": "currentPercent",
                                  "overrides": null,
                                  "scope": 839,
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
                                    "src": "2816:4:2"
                                  }
                                ],
                                "id": 779,
                                "name": "VariableDeclaration",
                                "src": "2816:19:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "percent",
                                  "referencedDeclaration": 290,
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
                                                  "referencedDeclaration": 299,
                                                  "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                  "value": "elections"
                                                },
                                                "id": 780,
                                                "name": "Identifier",
                                                "src": "2838:9:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 758,
                                                  "type": "uint256",
                                                  "value": "_electionId"
                                                },
                                                "id": 781,
                                                "name": "Identifier",
                                                "src": "2848:11:2"
                                              }
                                            ],
                                            "id": 782,
                                            "name": "IndexAccess",
                                            "src": "2838:22:2"
                                          }
                                        ],
                                        "id": 783,
                                        "name": "MemberAccess",
                                        "src": "2838:33:2"
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
                                                      "referencedDeclaration": 299,
                                                      "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                      "value": "elections"
                                                    },
                                                    "id": 784,
                                                    "name": "Identifier",
                                                    "src": "2872:9:2"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 758,
                                                      "type": "uint256",
                                                      "value": "_electionId"
                                                    },
                                                    "id": 785,
                                                    "name": "Identifier",
                                                    "src": "2882:11:2"
                                                  }
                                                ],
                                                "id": 786,
                                                "name": "IndexAccess",
                                                "src": "2872:22:2"
                                              }
                                            ],
                                            "id": 787,
                                            "name": "MemberAccess",
                                            "src": "2872:30:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 765,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 788,
                                            "name": "Identifier",
                                            "src": "2903:1:2"
                                          }
                                        ],
                                        "id": 789,
                                        "name": "IndexAccess",
                                        "src": "2872:33:2"
                                      }
                                    ],
                                    "id": 790,
                                    "name": "IndexAccess",
                                    "src": "2838:68:2"
                                  }
                                ],
                                "id": 791,
                                "name": "MemberAccess",
                                "src": "2838:76:2"
                              }
                            ],
                            "id": 792,
                            "name": "VariableDeclarationStatement",
                            "src": "2816:98:2"
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
                                      "referencedDeclaration": 765,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 793,
                                    "name": "Identifier",
                                    "src": "2931:1:2"
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
                                    "id": 794,
                                    "name": "Literal",
                                    "src": "2936:1:2"
                                  }
                                ],
                                "id": 795,
                                "name": "BinaryOperation",
                                "src": "2931:6:2"
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
                                              "referencedDeclaration": 762,
                                              "type": "uint256",
                                              "value": "higherPercent"
                                            },
                                            "id": 796,
                                            "name": "Identifier",
                                            "src": "2956:13:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 779,
                                              "type": "uint256",
                                              "value": "currentPercent"
                                            },
                                            "id": 797,
                                            "name": "Identifier",
                                            "src": "2972:14:2"
                                          }
                                        ],
                                        "id": 798,
                                        "name": "Assignment",
                                        "src": "2956:30:2"
                                      }
                                    ],
                                    "id": 799,
                                    "name": "ExpressionStatement",
                                    "src": "2956:30:2"
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
                                                          "referencedDeclaration": 299,
                                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                          "value": "elections"
                                                        },
                                                        "id": 800,
                                                        "name": "Identifier",
                                                        "src": "3004:9:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 758,
                                                          "type": "uint256",
                                                          "value": "_electionId"
                                                        },
                                                        "id": 801,
                                                        "name": "Identifier",
                                                        "src": "3014:11:2"
                                                      }
                                                    ],
                                                    "id": 802,
                                                    "name": "IndexAccess",
                                                    "src": "3004:22:2"
                                                  }
                                                ],
                                                "id": 803,
                                                "name": "MemberAccess",
                                                "src": "3004:30:2"
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
                                                "id": 804,
                                                "name": "Literal",
                                                "src": "3035:1:2"
                                              }
                                            ],
                                            "id": 805,
                                            "name": "IndexAccess",
                                            "src": "3004:33:2"
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
                                                          "referencedDeclaration": 299,
                                                          "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                          "value": "elections"
                                                        },
                                                        "id": 806,
                                                        "name": "Identifier",
                                                        "src": "3040:9:2"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 758,
                                                          "type": "uint256",
                                                          "value": "_electionId"
                                                        },
                                                        "id": 807,
                                                        "name": "Identifier",
                                                        "src": "3050:11:2"
                                                      }
                                                    ],
                                                    "id": 808,
                                                    "name": "IndexAccess",
                                                    "src": "3040:22:2"
                                                  }
                                                ],
                                                "id": 809,
                                                "name": "MemberAccess",
                                                "src": "3040:30:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 765,
                                                  "type": "uint256",
                                                  "value": "i"
                                                },
                                                "id": 810,
                                                "name": "Identifier",
                                                "src": "3071:1:2"
                                              }
                                            ],
                                            "id": 811,
                                            "name": "IndexAccess",
                                            "src": "3040:33:2"
                                          }
                                        ],
                                        "id": 812,
                                        "name": "Assignment",
                                        "src": "3004:69:2"
                                      }
                                    ],
                                    "id": 813,
                                    "name": "ExpressionStatement",
                                    "src": "3004:69:2"
                                  }
                                ],
                                "id": 814,
                                "name": "Block",
                                "src": "2938:150:2"
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
                                          "referencedDeclaration": 779,
                                          "type": "uint256",
                                          "value": "currentPercent"
                                        },
                                        "id": 815,
                                        "name": "Identifier",
                                        "src": "3110:14:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 762,
                                          "type": "uint256",
                                          "value": "higherPercent"
                                        },
                                        "id": 816,
                                        "name": "Identifier",
                                        "src": "3127:13:2"
                                      }
                                    ],
                                    "id": 817,
                                    "name": "BinaryOperation",
                                    "src": "3110:30:2"
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
                                                  "referencedDeclaration": 762,
                                                  "type": "uint256",
                                                  "value": "higherPercent"
                                                },
                                                "id": 818,
                                                "name": "Identifier",
                                                "src": "3159:13:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 779,
                                                  "type": "uint256",
                                                  "value": "currentPercent"
                                                },
                                                "id": 819,
                                                "name": "Identifier",
                                                "src": "3175:14:2"
                                              }
                                            ],
                                            "id": 820,
                                            "name": "Assignment",
                                            "src": "3159:30:2"
                                          }
                                        ],
                                        "id": 821,
                                        "name": "ExpressionStatement",
                                        "src": "3159:30:2"
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
                                                              "referencedDeclaration": 299,
                                                              "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                              "value": "elections"
                                                            },
                                                            "id": 822,
                                                            "name": "Identifier",
                                                            "src": "3207:9:2"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 758,
                                                              "type": "uint256",
                                                              "value": "_electionId"
                                                            },
                                                            "id": 823,
                                                            "name": "Identifier",
                                                            "src": "3217:11:2"
                                                          }
                                                        ],
                                                        "id": 824,
                                                        "name": "IndexAccess",
                                                        "src": "3207:22:2"
                                                      }
                                                    ],
                                                    "id": 825,
                                                    "name": "MemberAccess",
                                                    "src": "3207:30:2"
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
                                                    "id": 826,
                                                    "name": "Literal",
                                                    "src": "3238:1:2"
                                                  }
                                                ],
                                                "id": 827,
                                                "name": "IndexAccess",
                                                "src": "3207:33:2"
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
                                                              "referencedDeclaration": 299,
                                                              "type": "mapping(uint256 => struct ElectionFactory.Election storage ref)",
                                                              "value": "elections"
                                                            },
                                                            "id": 828,
                                                            "name": "Identifier",
                                                            "src": "3243:9:2"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 758,
                                                              "type": "uint256",
                                                              "value": "_electionId"
                                                            },
                                                            "id": 829,
                                                            "name": "Identifier",
                                                            "src": "3253:11:2"
                                                          }
                                                        ],
                                                        "id": 830,
                                                        "name": "IndexAccess",
                                                        "src": "3243:22:2"
                                                      }
                                                    ],
                                                    "id": 831,
                                                    "name": "MemberAccess",
                                                    "src": "3243:30:2"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 765,
                                                      "type": "uint256",
                                                      "value": "i"
                                                    },
                                                    "id": 832,
                                                    "name": "Identifier",
                                                    "src": "3274:1:2"
                                                  }
                                                ],
                                                "id": 833,
                                                "name": "IndexAccess",
                                                "src": "3243:33:2"
                                              }
                                            ],
                                            "id": 834,
                                            "name": "Assignment",
                                            "src": "3207:69:2"
                                          }
                                        ],
                                        "id": 835,
                                        "name": "ExpressionStatement",
                                        "src": "3207:69:2"
                                      }
                                    ],
                                    "id": 836,
                                    "name": "Block",
                                    "src": "3141:150:2"
                                  }
                                ],
                                "id": 837,
                                "name": "IfStatement",
                                "src": "3106:185:2"
                              }
                            ],
                            "id": 838,
                            "name": "IfStatement",
                            "src": "2928:363:2"
                          }
                        ],
                        "id": 839,
                        "name": "Block",
                        "src": "2802:499:2"
                      }
                    ],
                    "id": 840,
                    "name": "ForStatement",
                    "src": "2739:562:2"
                  }
                ],
                "id": 841,
                "name": "Block",
                "src": "2701:606:2"
              }
            ],
            "id": 842,
            "name": "FunctionDefinition",
            "src": "2643:664:2"
          }
        ],
        "id": 843,
        "name": "ContractDefinition",
        "src": "185:3124:2"
      }
    ],
    "id": 844,
    "name": "SourceUnit",
    "src": "32:3278:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.7.0+commit.9e61f92b.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.3",
  "updatedAt": "2021-01-23T17:22:48.234Z",
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