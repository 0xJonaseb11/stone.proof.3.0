// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
* ContractName DataRegistry
* @author: @0xJonaseb11
* @notice: Stores the log of all txns and supply chain events
* @param Provides a way to aufit and verify the integrity of the supply chain!
* @param Could utilize merkle trees or similar methods for efficient amd verifiable data storage
*/

// imports
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";

contract DataRegistry is AccessControl{
    // states for tracking events
    uint256 public eventCounter;
    mapping(uint256 => EventLog) public events;
    mapping(uint256 => uint256[]) public batchEventIds;


    // roles for access control
    bytes32 public constant AUDITOR_ROLE = keccak256("AUDITOR_ROLE");
    bytes32 public constant SUPPLY_CHAIN_ROLE = keccak256("SUPPLY_CHAIN_ROLE");
    
    // structre to store each event log
    struct EventLog {
        uint256 batchId;
        address triggeredBy;
        string eventType; // "StatusUpdated", "OwnershipTransfer", "Certification"
        string details;
        uint256 timestamp;
    }

    // events
    event EventRecorded(uint256 indexed eventId, uint256 indexed batchId, string eventType, string details);

    // contract constructor
    constructor() {
        // set up roles
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    // errors - customly

    // business logic

    // setters - cores
    function recordEvent(uint256 _batchId, string memory _eventType, string memory _details) public onlyRole(SUPPLY_CHAIN_ROLE) {
        // assign unique eventId
        eventCounter++;

        // record event in the mapping
        events[eventCounter] = EventLog({
            batchId: _batchId,
            triggeredBy: msg.sender,
            eventType: _eventType,
            details: _details,
            timestamp: block.timestamp
        });
        // map the event to the batch ID
        batchEventIds[_batchId].push(eventCounter);
        // Log event to the blockchain after recording
        emit EventRecorded(eventCounter, _batchId, _eventType, _details);
    }

    // getters - execute
    function getBatchEvents(uint256 _batchId) public view returns(EventLog[] memory) {
        uint256[] memory eventIds = batchEventIds[_batchId];
        EventLog[] memory batchEvents = new EventLog[](eventIds.length);

        //loop through events to retrieve events by their ids
        for (uint256 i = 0; i < eventIds.length; i++) {
            batchEvents[i] = events[eventIds[i]];
        }
        return batchEvents;
    }

    // get event details
    function getEventDetails(uint256 _eventId) public view returns(EventLog memory) {
        require(events[_eventId].timestamp != 0, "Event Doesn't Exist!!");
        return events[_eventId];
    }

    // Audit batches
    function auditBatch(uint256 _batchId) public view onlyRole(AUDITOR_ROLE) returns(EventLog[] memory) {
        return getBatchEvents(_batchId);
    }
}