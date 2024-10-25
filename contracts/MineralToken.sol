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
    // mapping to store batch details
    mapping(uint256 => MineralBatch) public mineralBatches;
    mapping(uint256 => bool) public verifiedBatches;
    using Counters for counters.Counter;

    Counters.Counter private _tokenIds;
    bytes32 public constant MINTER_ROLE =  keccak256("MINTER_ROLE");
    bytes32 public constant TRANSFER_ROLE = keccak256("TRANSFER_ROLE");

    // struct for mineral batch
    struct MineralBatch {
        uint256 batchId;
        string origin;
        string purity;
        string metadataURI;
        uint256 timestamp;
        bool isCertified;
    }

    // events
    event MineralMinted(uint256 indexed tokenId, string origin, string purity, string metadataURI);
    event MineralVerified(uint256 indexed tokenId,  bool isCertified);

    // contract constructor
    constructor() ERC721("MineralToken", "MTK") {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }



    // errors

    // business logic

    // setters - cores
    //mint mineral
    function mintMineral(string memory _origin, string memory _purity, string memory _metadataURI) public onlyRole(MINTER_ROLE) returns(uint256) {
        _tokenIds.increment();
        uint256 newBatchId = _tokenIds.current();

        // mint the new token representing the mineral batch
        _mint(msg.sender, newBatchId);

        // store batch details
        mineralBatches[newBatchId] = MineralBatch({
            batchId: newBatchId,
            origin: _origin,
            purity: _purity,
            metadataURI: _metadataURI,
            timestamp: block.timestamp,
            isCertified: false
        });

        // log event to blockchain after minting minetal token
        emit MineralMinted(newBatchId, _origin, _purity, _metadataURI);
        // return targeted batchId(uint256)
        return newBatchId;
    }

    // getters
}