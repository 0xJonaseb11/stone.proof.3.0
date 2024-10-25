// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
* contract MineraToken 
* @author: @0xJonaseb11
* @notice A utility token(NFT) for digital certification of minerals
* @param Could represent a batch of minerals, each token tracking a certain quantity or type of mineral
* @param Integrates with the Supplychain.sol for transferring mineral ownership
*/

// imports
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";
import { Counters } from "@openzeppelin/contracts/utils/Counters.sol";



contract MineralToken  is ERC721, AccessControl {
    // states 
    using Counters for counters.Counter;

    Counters.Counter private _tokenIds;
    bytes32 public constant MINTER_ROLE =  keccak256("MINTER_ROLE");
    bytes32 public constant TRANSFER_ROLE = keccak256("TRANSFER_ROLE");

    // struct 


    // events

    // errors

    // business logic

    // setters

    // getters
}