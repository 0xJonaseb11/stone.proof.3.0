// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
* @title MineralToken 
* @author: @0xJonaseb11
* @notice A utility token(NFT) for digital certification of minerals
* @dev Could represent a batch of minerals, each token tracking a certain quantity or type of mineral
* @dev Integrates with the Supplychain.sol for transferring mineral ownership
*/

// imports
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";
import { Counters } from "@openzeppelin/contracts/utils/Counters.sol";

contract MineralToken is ERC721, AccessControl {
    // states 
    // mappings to track token existence
    mapping(uint256 => bool) private tokenExists;
    // mappings to store batch details
    mapping(uint256 => MineralBatch) public mineralBatches;
    mapping(uint256 => bool) public verifiedBatches;
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
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
    event MineralVerified(uint256 indexed tokenId, bool isCertified);

    // contract constructor
    constructor() ERC721("MineralToken", "MTK") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    // mint mineral
    function mintMineral(string memory _origin, string memory _purity, string memory _metadataURI) public onlyRole(MINTER_ROLE) returns (uint256) {
        _tokenIds.increment();
        uint256 newBatchId = _tokenIds.current();

        // mint the new token representing the mineral batch
        _mint(msg.sender, newBatchId);
        // mark the token as existing
        tokenExists[newBatchId] = true;

        // store batch details
        mineralBatches[newBatchId] = MineralBatch({
            batchId: newBatchId,
            origin: _origin,
            purity: _purity,
            metadataURI: _metadataURI,
            timestamp: block.timestamp,
            isCertified: false
        });

        // log event to blockchain after minting mineral token
        emit MineralMinted(newBatchId, _origin, _purity, _metadataURI);
        // return targeted batchId(uint256)
        return newBatchId;
    }

    // verification of mineral batch
    function verifyBatch(uint256 _tokenId) public onlyRole(DEFAULT_ADMIN_ROLE) {
        _requireOwned(_tokenId); // Checks ownership and existence

        MineralBatch storage batch = mineralBatches[_tokenId];
        batch.isCertified = true;
        verifiedBatches[_tokenId] = true;

        // log event to blockchain after verification of mineral batch
        emit MineralVerified(_tokenId, true);
    }

    // retrieve batch details
    function getBatchDetails(uint256 _tokenId) public view returns (MineralBatch memory) {
        _requireOwned(_tokenId); // Checks ownership and existence
        return mineralBatches[_tokenId];
    }

    // transfer mineral
    function transferMineral(address to, uint256 _tokenId) public onlyRole(TRANSFER_ROLE) {
        _requireOwned(_tokenId); // Checks ownership and existence
        require(verifiedBatches[_tokenId], "Batch Isn't Verified!!"); // only allow transfer of verified mineral batches

        _transfer(msg.sender, to, _tokenId);
    }

    /**
    * @dev Custom `_exists` function to check if a token exists 
    */
    function _exists(uint256 tokenId) internal view returns (bool) {
        return tokenExists[tokenId];
    }

    /**
    * @dev supportsInterface function to resolve overriding issue
    */
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    /**
    * @dev `_requireOwned` function to check token ownership and existence
    * @notice This checks if the token exists and returns the owner's address
    */
  function _requireOwned(uint256 tokenId) internal view override returns (address) {
    address owner = _ownerOf(tokenId); 
    require(owner == msg.sender, "Caller is not the owner of this token");
    return owner; // return owner's address
}

}
