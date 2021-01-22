export const ownerContractABI = {
  "contractName": "Ownable",
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
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.7.0+commit.9e61f92b\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"The Ownable contract has an owner address, and provides basic authorization control functions, this simplifies the implementation of \\\"user permissions\\\".\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"details\":\"The Ownable constructor sets the original `owner` of the contract to the sender account.\"},\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}},\"title\":\"Ownable\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol\":\"Ownable\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol\":{\"keccak256\":\"0x7f1004825e1cc40d7b663e20d3be71ed9c64baf7f05eae9b115a4d4448c8fdcf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5d8ccf5e65c162aeabb1b5e804f7183d95be7a985d5466796025a39ede9cfa62\",\"dweb:/ipfs/QmNZR6izJaw2bC9aCAcVbtS1kE9YBWuuqoaryy8idA14ta\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061025c806100606000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638da5cb5b1461003b578063f2fde38b1461006f575b600080fd5b6100436100b3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100b16004803603602081101561008557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506100d7565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461012f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561016957600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505056fea2646970667358221220339d491eb5827af533202e8e5b401e692e7e645d2cf8a13a51f0ae3660c9c82964736f6c63430007000033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c80638da5cb5b1461003b578063f2fde38b1461006f575b600080fd5b6100436100b3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100b16004803603602081101561008557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506100d7565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461012f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561016957600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505056fea2646970667358221220339d491eb5827af533202e8e5b401e692e7e645d2cf8a13a51f0ae3660c9c82964736f6c63430007000033",
  "immutableReferences": {},
  "sourceMap": "256:842:5:-:0;;;520:49;;;;;;;;;;552:10;544:5;;:18;;;;;;;;;;;;;;;;;;256:842;;;;;;",
  "deployedSourceMap": "256:842:5:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;279:20;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;907:188;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;279:20;;;;;;;;;;;;:::o;907:188::-;711:5;;;;;;;;;;697:19;;:10;:19;;;689:28;;;;;;1007:1:::1;987:22;;:8;:22;;;;979:31;;;::::0;::::1;;1053:8;1025:37;;1046:5;::::0;::::1;;;;;;;;1025:37;;;;;;;;;;;;1080:8;1072:5;::::0;:16:::1;;;;;;;;;;;;;;;;;;907:188:::0;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >= 0.7.0 < 0.8.0;\n/**\n * @title Ownable\n * @dev The Ownable contract has an owner address, and provides basic authorization control\n * functions, this simplifies the implementation of \"user permissions\".\n */\ncontract Ownable {\n    address public owner;\n\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\n\n    /**\n     * @dev The Ownable constructor sets the original `owner` of the contract to the sender\n     * account.\n     */\n    constructor() {\n        owner = msg.sender;\n    }\n\n\n    /**\n     * @dev Throws if called by any account other than the owner.\n     */\n    modifier onlyOwner() {\n        require(msg.sender == owner);\n        _;\n    }\n\n\n    /**\n     * @dev Allows the current owner to transfer control of the contract to a newOwner.\n     * @param newOwner The address to transfer ownership to.\n     */\n    function transferOwnership(address newOwner) public onlyOwner {\n        require(newOwner != address(0));\n        emit OwnershipTransferred(owner, newOwner);\n        owner = newOwner;\n    }\n\n}\n",
  "sourcePath": "C:\\Users\\acham\\Applications\\ESGI\\Blockchain\\Projet\\Voting-SmartContract-Truffled\\contracts\\ownable.sol",
  "ast": {
    "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol",
    "exportedSymbols": {
      "Ownable": [
        1039
      ]
    },
    "id": 1040,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 980,
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
        "src": "32:33:5"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 981,
          "nodeType": "StructuredDocumentation",
          "src": "66:189:5",
          "text": " @title Ownable\n @dev The Ownable contract has an owner address, and provides basic authorization control\n functions, this simplifies the implementation of \"user permissions\"."
        },
        "fullyImplemented": true,
        "id": 1039,
        "linearizedBaseContracts": [
          1039
        ],
        "name": "Ownable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "functionSelector": "8da5cb5b",
            "id": 983,
            "mutability": "mutable",
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1039,
            "src": "279:20:5",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 982,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "279:7:5",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 989,
            "name": "OwnershipTransferred",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 988,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 985,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "previousOwner",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 989,
                  "src": "333:29:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 984,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "333:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 987,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 989,
                  "src": "364:24:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 986,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "364:7:5",
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
              "src": "332:57:5"
            },
            "src": "306:84:5"
          },
          {
            "body": {
              "id": 998,
              "nodeType": "Block",
              "src": "534:35:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 996,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 993,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 983,
                      "src": "544:5:5",
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
                        "id": 994,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "552:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 995,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "552:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "544:18:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 997,
                  "nodeType": "ExpressionStatement",
                  "src": "544:18:5"
                }
              ]
            },
            "documentation": {
              "id": 990,
              "nodeType": "StructuredDocumentation",
              "src": "396:119:5",
              "text": " @dev The Ownable constructor sets the original `owner` of the contract to the sender\n account."
            },
            "id": 999,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 991,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "531:2:5"
            },
            "returnParameters": {
              "id": 992,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "534:0:5"
            },
            "scope": 1039,
            "src": "520:49:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1010,
              "nodeType": "Block",
              "src": "679:56:5",
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
                        "id": 1006,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1003,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "697:3:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1004,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "697:10:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 1005,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 983,
                          "src": "711:5:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "697:19:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1002,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "689:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1007,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "689:28:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1008,
                  "nodeType": "ExpressionStatement",
                  "src": "689:28:5"
                },
                {
                  "id": 1009,
                  "nodeType": "PlaceholderStatement",
                  "src": "727:1:5"
                }
              ]
            },
            "documentation": {
              "id": 1000,
              "nodeType": "StructuredDocumentation",
              "src": "576:77:5",
              "text": " @dev Throws if called by any account other than the owner."
            },
            "id": 1011,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "overrides": null,
            "parameters": {
              "id": 1001,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "676:2:5"
            },
            "src": "658:77:5",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1037,
              "nodeType": "Block",
              "src": "969:126:5",
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
                        "id": 1025,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1020,
                          "name": "newOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1014,
                          "src": "987:8:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 1023,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1007:1:5",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 1022,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "999:7:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 1021,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "999:7:5",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 1024,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "999:10:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "987:22:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1019,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "979:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1026,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "979:31:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1027,
                  "nodeType": "ExpressionStatement",
                  "src": "979:31:5"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1029,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 983,
                        "src": "1046:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1030,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1014,
                        "src": "1053:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1028,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 989,
                      "src": "1025:20:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 1031,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1025:37:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1032,
                  "nodeType": "EmitStatement",
                  "src": "1020:42:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1035,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1033,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 983,
                      "src": "1072:5:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1034,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1014,
                      "src": "1080:8:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1072:16:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1036,
                  "nodeType": "ExpressionStatement",
                  "src": "1072:16:5"
                }
              ]
            },
            "documentation": {
              "id": 1012,
              "nodeType": "StructuredDocumentation",
              "src": "742:160:5",
              "text": " @dev Allows the current owner to transfer control of the contract to a newOwner.\n @param newOwner The address to transfer ownership to."
            },
            "functionSelector": "f2fde38b",
            "id": 1038,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 1017,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1016,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1011,
                  "src": "959:9:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "959:9:5"
              }
            ],
            "name": "transferOwnership",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1015,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1014,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1038,
                  "src": "934:16:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1013,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "934:7:5",
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
              "src": "933:18:5"
            },
            "returnParameters": {
              "id": 1018,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "969:0:5"
            },
            "scope": 1039,
            "src": "907:188:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 1040,
        "src": "256:842:5"
      }
    ],
    "src": "32:1067:5"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/C/Users/acham/Applications/ESGI/Blockchain/Projet/Voting-SmartContract-Truffled/contracts/ownable.sol",
      "exportedSymbols": {
        "Ownable": [
          1039
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
        "id": 980,
        "name": "PragmaDirective",
        "src": "32:33:5"
      },
      {
        "attributes": {
          "abstract": false,
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            1039
          ],
          "name": "Ownable",
          "scope": 1040
        },
        "children": [
          {
            "attributes": {
              "text": " @title Ownable\n @dev The Ownable contract has an owner address, and provides basic authorization control\n functions, this simplifies the implementation of \"user permissions\"."
            },
            "id": 981,
            "name": "StructuredDocumentation",
            "src": "66:189:5"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "8da5cb5b",
              "mutability": "mutable",
              "name": "owner",
              "overrides": null,
              "scope": 1039,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "stateMutability": "nonpayable",
                  "type": "address"
                },
                "id": 982,
                "name": "ElementaryTypeName",
                "src": "279:7:5"
              }
            ],
            "id": 983,
            "name": "VariableDeclaration",
            "src": "279:20:5"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "OwnershipTransferred"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "mutability": "mutable",
                      "name": "previousOwner",
                      "overrides": null,
                      "scope": 989,
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
                        "id": 984,
                        "name": "ElementaryTypeName",
                        "src": "333:7:5"
                      }
                    ],
                    "id": 985,
                    "name": "VariableDeclaration",
                    "src": "333:29:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "mutability": "mutable",
                      "name": "newOwner",
                      "overrides": null,
                      "scope": 989,
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
                        "id": 986,
                        "name": "ElementaryTypeName",
                        "src": "364:7:5"
                      }
                    ],
                    "id": 987,
                    "name": "VariableDeclaration",
                    "src": "364:24:5"
                  }
                ],
                "id": 988,
                "name": "ParameterList",
                "src": "332:57:5"
              }
            ],
            "id": 989,
            "name": "EventDefinition",
            "src": "306:84:5"
          },
          {
            "attributes": {
              "implemented": true,
              "isConstructor": true,
              "kind": "constructor",
              "modifiers": [
                null
              ],
              "name": "",
              "overrides": null,
              "scope": 1039,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "text": " @dev The Ownable constructor sets the original `owner` of the contract to the sender\n account."
                },
                "id": 990,
                "name": "StructuredDocumentation",
                "src": "396:119:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 991,
                "name": "ParameterList",
                "src": "531:2:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 992,
                "name": "ParameterList",
                "src": "534:0:5"
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
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 983,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 993,
                            "name": "Identifier",
                            "src": "544:5:5"
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
                                "id": 994,
                                "name": "Identifier",
                                "src": "552:3:5"
                              }
                            ],
                            "id": 995,
                            "name": "MemberAccess",
                            "src": "552:10:5"
                          }
                        ],
                        "id": 996,
                        "name": "Assignment",
                        "src": "544:18:5"
                      }
                    ],
                    "id": 997,
                    "name": "ExpressionStatement",
                    "src": "544:18:5"
                  }
                ],
                "id": 998,
                "name": "Block",
                "src": "534:35:5"
              }
            ],
            "id": 999,
            "name": "FunctionDefinition",
            "src": "520:49:5"
          },
          {
            "attributes": {
              "name": "onlyOwner",
              "overrides": null,
              "virtual": false,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "text": " @dev Throws if called by any account other than the owner."
                },
                "id": 1000,
                "name": "StructuredDocumentation",
                "src": "576:77:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1001,
                "name": "ParameterList",
                "src": "676:2:5"
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
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1002,
                            "name": "Identifier",
                            "src": "689:7:5"
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
                              "operator": "==",
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
                                    "id": 1003,
                                    "name": "Identifier",
                                    "src": "697:3:5"
                                  }
                                ],
                                "id": 1004,
                                "name": "MemberAccess",
                                "src": "697:10:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 983,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 1005,
                                "name": "Identifier",
                                "src": "711:5:5"
                              }
                            ],
                            "id": 1006,
                            "name": "BinaryOperation",
                            "src": "697:19:5"
                          }
                        ],
                        "id": 1007,
                        "name": "FunctionCall",
                        "src": "689:28:5"
                      }
                    ],
                    "id": 1008,
                    "name": "ExpressionStatement",
                    "src": "689:28:5"
                  },
                  {
                    "id": 1009,
                    "name": "PlaceholderStatement",
                    "src": "727:1:5"
                  }
                ],
                "id": 1010,
                "name": "Block",
                "src": "679:56:5"
              }
            ],
            "id": 1011,
            "name": "ModifierDefinition",
            "src": "658:77:5"
          },
          {
            "attributes": {
              "functionSelector": "f2fde38b",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "transferOwnership",
              "overrides": null,
              "scope": 1039,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "text": " @dev Allows the current owner to transfer control of the contract to a newOwner.\n @param newOwner The address to transfer ownership to."
                },
                "id": 1012,
                "name": "StructuredDocumentation",
                "src": "742:160:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "newOwner",
                      "overrides": null,
                      "scope": 1038,
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
                        "id": 1013,
                        "name": "ElementaryTypeName",
                        "src": "934:7:5"
                      }
                    ],
                    "id": 1014,
                    "name": "VariableDeclaration",
                    "src": "934:16:5"
                  }
                ],
                "id": 1015,
                "name": "ParameterList",
                "src": "933:18:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1018,
                "name": "ParameterList",
                "src": "969:0:5"
              },
              {
                "attributes": {
                  "arguments": null
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1011,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 1016,
                    "name": "Identifier",
                    "src": "959:9:5"
                  }
                ],
                "id": 1017,
                "name": "ModifierInvocation",
                "src": "959:9:5"
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
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1019,
                            "name": "Identifier",
                            "src": "979:7:5"
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1014,
                                  "type": "address",
                                  "value": "newOwner"
                                },
                                "id": 1020,
                                "name": "Identifier",
                                "src": "987:8:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "address payable",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "name": "address",
                                          "type": null
                                        },
                                        "id": 1021,
                                        "name": "ElementaryTypeName",
                                        "src": "999:7:5"
                                      }
                                    ],
                                    "id": 1022,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "999:7:5"
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
                                    "id": 1023,
                                    "name": "Literal",
                                    "src": "1007:1:5"
                                  }
                                ],
                                "id": 1024,
                                "name": "FunctionCall",
                                "src": "999:10:5"
                              }
                            ],
                            "id": 1025,
                            "name": "BinaryOperation",
                            "src": "987:22:5"
                          }
                        ],
                        "id": 1026,
                        "name": "FunctionCall",
                        "src": "979:31:5"
                      }
                    ],
                    "id": 1027,
                    "name": "ExpressionStatement",
                    "src": "979:31:5"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 989,
                              "type": "function (address,address)",
                              "value": "OwnershipTransferred"
                            },
                            "id": 1028,
                            "name": "Identifier",
                            "src": "1025:20:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 983,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 1029,
                            "name": "Identifier",
                            "src": "1046:5:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1014,
                              "type": "address",
                              "value": "newOwner"
                            },
                            "id": 1030,
                            "name": "Identifier",
                            "src": "1053:8:5"
                          }
                        ],
                        "id": 1031,
                        "name": "FunctionCall",
                        "src": "1025:37:5"
                      }
                    ],
                    "id": 1032,
                    "name": "EmitStatement",
                    "src": "1020:42:5"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 983,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 1033,
                            "name": "Identifier",
                            "src": "1072:5:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1014,
                              "type": "address",
                              "value": "newOwner"
                            },
                            "id": 1034,
                            "name": "Identifier",
                            "src": "1080:8:5"
                          }
                        ],
                        "id": 1035,
                        "name": "Assignment",
                        "src": "1072:16:5"
                      }
                    ],
                    "id": 1036,
                    "name": "ExpressionStatement",
                    "src": "1072:16:5"
                  }
                ],
                "id": 1037,
                "name": "Block",
                "src": "969:126:5"
              }
            ],
            "id": 1038,
            "name": "FunctionDefinition",
            "src": "907:188:5"
          }
        ],
        "id": 1039,
        "name": "ContractDefinition",
        "src": "256:842:5"
      }
    ],
    "id": 1040,
    "name": "SourceUnit",
    "src": "32:1067:5"
  },
  "compiler": {
    "name": "solc",
    "version": "0.7.0+commit.9e61f92b.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.3",
  "updatedAt": "2021-01-22T16:32:52.594Z",
  "devdoc": {
    "details": "The Ownable contract has an owner address, and provides basic authorization control functions, this simplifies the implementation of \"user permissions\".",
    "kind": "dev",
    "methods": {
      "constructor": {
        "details": "The Ownable constructor sets the original `owner` of the contract to the sender account."
      },
      "transferOwnership(address)": {
        "details": "Allows the current owner to transfer control of the contract to a newOwner.",
        "params": {
          "newOwner": "The address to transfer ownership to."
        }
      }
    },
    "title": "Ownable",
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
};