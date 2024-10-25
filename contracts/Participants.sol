// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
* contractName Participants
* @author: 0xJonaseb11
* @notice Defines various paarticipants (miers, refiners, shippers, buyers, etc 
* @param Each participants will have roles and permissions to perform specific actions!
* @param Uses AccessControl for role management
*/

// imports
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";

contract Partcipants {
    // states
    mapping(address => Participant) public participants;
    address[] public participantList;

    // participant roles
    bytes32 public constant MINER_ROLE = keccak256("MINER_ROLE");
    bytes32 public constant REFINER_ROLE = keccak256("REFINER_ROLE");
    bytes32 public constant TRANSPORTER_ROLE = keccak256("TRANSPORTER_ROLE");
    bytes32 public constant AUDITOR_ROLE = keccak256("AUDITOR_ROLE");
    bytes32 public constant INSPECTOR_ROLE =  keccak256("INSPECTOR_ROLE");

    // struct to hold participants details
    struct Participant {
        address participantAddress;
        string name;
        string location;
        string role;
        bool isActive;
        uint256 dateRegistered;
    }

    // events
    event ParticipantRegistered(address indexed participant, string role, string name);
    event ParticipantStatusUpdated(address indexed participant, bool isActive);
    event ParticipantRoleUpdated(address indexed participant, string newRole);

    // contract constructor
    constructor () {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }




    // errors

    // business logic
    
    // setters - cores
    // Partipant registration
    function registerParticipant(address _participantAddress, string memory _name, string memory _location, string memory _role) public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(participants[_participantAddress].participantAddress == address(0), "Participant Already Registered!!");

        // Assign role based on _role input
        bytes32 roleHash = 
    }

    // getters
}