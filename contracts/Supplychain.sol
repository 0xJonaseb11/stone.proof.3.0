// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
* SupplyChain contract
* @author @0xJonaseb11 
* @notice Manages the flow of minerals in the supply chain
* @param Tracks status(mined, processed, transported, etc) using events
* @param Links to Participants.sol for updating and verifying actions performed by different chain actors!
**/

// imports
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract SupplyChain is AccessControl {
    
    // states
    uint256 public batchCounter;
    mapping(uint256 => MineralBatch) public mineralBatches;

    // roles for access control
    bytes32 public constant MINER_ROLE = keccak256("MINER_ROLE");
    bytes32 public constant REFINER_ROLE = keccak256("REFINER_ROLE");
    bytes32 public constant TRANSPORTER_ROLE = keccak256("TRANSPORTER_ROLE");
    bytes32 public constant AUDITOR_ROLE = keccak256("AUDITOR_ROLE");

    // structures for storing mineral batch and participant data
    struct MineralBatch {
        uint256 id;
        address owner;
        string location;
        string status; // "Mined", "Refined", "In Transit", "Delivered"
        uint256 timestamp;

    }

    // events // for tracking actions within the supply chain
    event BatchCreated(uint256 indexed batchId, address indexed owner, string location);
    event StatusUpdated(uint256 indexed batchId, string status);
    event OwnershipTransferred(uint256 indexed batchId, address indexed newOwner);

    // contract constructor
    constructor() {
        // grant the contract deployer the admin role
        _setUpRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    // errors - custormly

    // business logic

    // setters - cores
    function createBatch(string memory _location) public onlyRole(MINER_ROLE) {
        // assign unique counter
        batchCounter++;
        mineralBatches[batchCounter] = MineralBatch({
            id: batchCounter,
            owner: msg.sender,
            location: _location,
            status: "Mined",
            timestamp: block.timestamp
        });
        // emit event to show batch has been created
        emit BatchCreated(batchCounter, msg.sender, _location);
    }

    // update mining status
    function updateStatus(uint256 _batchId, string memory _newStatus) public {
        require(hasRole(REFINER_ROLE, msg.sender) || hasRole(TRANSPORTER_ROLE, msg.sender), "Not Authorized To Update Status");
        require(mineralBatches[_batchId].id != 0, "Batch Doesn't Exist!!");

        // allow business logic to flow normal after conditions are passed
         /**
        * @notice Block.timestamp will have to be accessed for vulnerabilities 
        * @param before the contract is deployed to a live network 
        **/
        mineralBatches[_batchId].status = _newStatus;
        mineralBatches[_batchId].timestamp = block.timestamp;

        // // Log event to blockchain after updating status
        emit StatusUpdated(_batchId, _newStatus);
    }

    // handle transferring ownership
    function transferOwnership(uint256 _batchId, address _newOwner) public {
        require(mineralBatches[_batchId].owner == msg.sender, "Not Allowed To Transfer Ownership Since You are Not The Owner");

        // business logic flow normal after condition passes
        mineralBatches[_batchId].owner = _newOwner;
        emit OwnershipTransferred(_batchId, _newOwner);
    }

    // getters - executes
    // handle the retrieving of batches
    function getBatch(uint256 _batchId) public view returns (MineralBatch memory) {
        require(mineralBatches[_batchId].id != 0, "Batch Doesn't Exist!!");
        return mineralBatches(_batchId);
    }
}