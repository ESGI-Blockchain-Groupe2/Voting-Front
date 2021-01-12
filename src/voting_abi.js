export const votingAddress = '0x54BDABe758a5edaC8799637697ad1e6Ce9bec281';
export const votingABI = {
  "contractName": "HelloWorld",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "getGreeting",
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
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.7.0+commit.9e61f92b\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"getGreeting\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/HelloWorld.sol\":\"HelloWorld\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/HelloWorld.sol\":{\"keccak256\":\"0x6a68612607b015d04c1092132d87dda9bddc42ce85e3b46d284a6f8389277077\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b753f8da7411e92ec2f04bbbe03dd3379098b097fcbbac4c7fc2b7581b7d5f38\",\"dweb:/ipfs/QmP7gpn4gKCmAixGj2ggKWzsfsqpqVRqCpt5SmkTh9DATe\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b506040518060400160405280600b81526020017f48656c6c6f20576f726c640000000000000000000000000000000000000000008152506000908051906020019061005c929190610062565b506100ff565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a357805160ff19168380011785556100d1565b828001600101855582156100d1579182015b828111156100d05782518255916020019190600101906100b5565b5b5090506100de91906100e2565b5090565b5b808211156100fb5760008160009055506001016100e3565b5090565b61018b8061010e6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063fe50cc7214610030575b600080fd5b6100386100b3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561007857808201518184015260208101905061005d565b50505050905090810190601f1680156100a55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561014b5780601f106101205761010080835404028352916020019161014b565b820191906000526020600020905b81548152906001019060200180831161012e57829003601f168201915b505050505090509056fea2646970667358221220114687c192065d1efde8211071a66a2bbb08049a067cabe02a621d6585129d8264736f6c63430007000033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061002b5760003560e01c8063fe50cc7214610030575b600080fd5b6100386100b3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561007857808201518184015260208101905061005d565b50505050905090810190601f1680156100a55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561014b5780601f106101205761010080835404028352916020019161014b565b820191906000526020600020905b81548152906001019060200180831161012e57829003601f168201915b505050505090509056fea2646970667358221220114687c192065d1efde8211071a66a2bbb08049a067cabe02a621d6585129d8264736f6c63430007000033",
  "immutableReferences": {},
  "sourceMap": "60:218:2:-:0;;;119:57;;;;;;;;;;144:24;;;;;;;;;;;;;;;;;:8;:24;;;;;;;;;;;;:::i;:::-;;60:218;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "60:218:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;184:91;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;227:13;259:8;252:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;184:91;:::o",
  "source": "// SPDX-License-Identifier: MIT\r\npragma solidity ^0.7.0;\r\n\r\ncontract HelloWorld {\r\n    string private greeting;\r\n\r\n    constructor() {\r\n        greeting = \"Hello World\";\r\n    }\r\n\r\n    function getGreeting() public view returns(string memory){\r\n        return greeting;\r\n    }\r\n}",
  "sourcePath": "C:/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/HelloWorld.sol",
  "ast": {
    "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/HelloWorld.sol",
    "exportedSymbols": {
      "HelloWorld": [
        332
      ]
    },
    "id": 333,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 313,
        "literals": [
          "solidity",
          "^",
          "0.7",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:2"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 332,
        "linearizedBaseContracts": [
          332
        ],
        "name": "HelloWorld",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 315,
            "mutability": "mutable",
            "name": "greeting",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 332,
            "src": "87:23:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 314,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "87:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 322,
              "nodeType": "Block",
              "src": "133:43:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 320,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 318,
                      "name": "greeting",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 315,
                      "src": "144:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "48656c6c6f20576f726c64",
                      "id": 319,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "155:13:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_592fa743889fc7f92ac2a37bb1f5ba1daf2a5c84741ca0e0061d243a2e6707ba",
                        "typeString": "literal_string \"Hello World\""
                      },
                      "value": "Hello World"
                    },
                    "src": "144:24:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 321,
                  "nodeType": "ExpressionStatement",
                  "src": "144:24:2"
                }
              ]
            },
            "documentation": null,
            "id": 323,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 316,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "130:2:2"
            },
            "returnParameters": {
              "id": 317,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "133:0:2"
            },
            "scope": 332,
            "src": "119:57:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 330,
              "nodeType": "Block",
              "src": "241:34:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 328,
                    "name": "greeting",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 315,
                    "src": "259:8:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 327,
                  "id": 329,
                  "nodeType": "Return",
                  "src": "252:15:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "fe50cc72",
            "id": 331,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getGreeting",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 324,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "204:2:2"
            },
            "returnParameters": {
              "id": 327,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 326,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 331,
                  "src": "227:13:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 325,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "227:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "226:15:2"
            },
            "scope": 332,
            "src": "184:91:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 333,
        "src": "60:218:2"
      }
    ],
    "src": "33:245:2"
  },
  "legacyAST": {
    "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/HelloWorld.sol",
    "exportedSymbols": {
      "HelloWorld": [
        332
      ]
    },
    "id": 333,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 313,
        "literals": [
          "solidity",
          "^",
          "0.7",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:2"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 332,
        "linearizedBaseContracts": [
          332
        ],
        "name": "HelloWorld",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 315,
            "mutability": "mutable",
            "name": "greeting",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 332,
            "src": "87:23:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 314,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "87:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 322,
              "nodeType": "Block",
              "src": "133:43:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 320,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 318,
                      "name": "greeting",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 315,
                      "src": "144:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "48656c6c6f20576f726c64",
                      "id": 319,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "155:13:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_592fa743889fc7f92ac2a37bb1f5ba1daf2a5c84741ca0e0061d243a2e6707ba",
                        "typeString": "literal_string \"Hello World\""
                      },
                      "value": "Hello World"
                    },
                    "src": "144:24:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 321,
                  "nodeType": "ExpressionStatement",
                  "src": "144:24:2"
                }
              ]
            },
            "documentation": null,
            "id": 323,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 316,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "130:2:2"
            },
            "returnParameters": {
              "id": 317,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "133:0:2"
            },
            "scope": 332,
            "src": "119:57:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 330,
              "nodeType": "Block",
              "src": "241:34:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 328,
                    "name": "greeting",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 315,
                    "src": "259:8:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 327,
                  "id": 329,
                  "nodeType": "Return",
                  "src": "252:15:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "fe50cc72",
            "id": 331,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getGreeting",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 324,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "204:2:2"
            },
            "returnParameters": {
              "id": 327,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 326,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 331,
                  "src": "227:13:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 325,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "227:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "226:15:2"
            },
            "scope": 332,
            "src": "184:91:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 333,
        "src": "60:218:2"
      }
    ],
    "src": "33:245:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.7.0+commit.9e61f92b.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x54BDABe758a5edaC8799637697ad1e6Ce9bec281",
      "transactionHash": "0xcc2f192904d53c1a94790a23cfdbd53b41853e624b4960201c8b0af13a3a1120"
    }
  },
  "schemaVersion": "3.3.2",
  "updatedAt": "2021-01-10T19:50:45.096Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}