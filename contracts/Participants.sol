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
        bytes32 roleHash = keccak256(abi.encodePacked(_role));
        // validate role by hash
        require(
            roleHash == MINER_ROLE || roleHash == REFINER_ROLE || roleHash == TRANSPORTER_ROLE || roleHash == AUDITOR_ROLE || roleHash == INSPECTOR_ROLE ,
            "INVALID ROLE"
        ); 

        // Register the participant and grant role
        participants[_participantAddress] = Participant({
            participantAddress: _participantAddress,
            name: _name,
            location: _location,
            role: _role,
            isActive: true,
            dateRegistered: block.timestamp
        });
        // add the registered participant to the list
        participantList.push(_participantAddress);

        // setup role to recently added participant
        _setupRole(roleHash, _participantAddress);
        emit ParticipantRegistered(_participantAddressm, _role, _name);
    }

    // Update participant status
    function updateParticipantStatus(address _participantAddress, bool _isActive) public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(participants[_participantAddress].participantAddress != address(0), "Participant you're trying to update is not Registered!!");

        // set status after condition is met
        participants[_participantAddress].isActive = _isActive;
        // log event to blockchain for successful status update
        emit ParticipantStatusUpdated(_participantAddress, _isActive);
    }

    // update role
    function updateRole(address _participantAddress, string memory _newRole) public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(participants[_participantAddress].participantAddress != address(0), "Participant is Not Registered");

        // remove old role
        bytes32 oldRoleHash = keccak256(abi.encodePacked(participants[_participantAddress].role));
        _revokeRole(oldRoleHash, _participantAddress);

        // assign new role
        bytes32 newRoleHash = keccak256(abi.encodePacked(_newRole));
        _setupRole(newRoleHash, _participantAddress);
        participants[_participantAddress].role = _newRole;
        
        // log event to blockchain after updating role
        emit ParticipantRoleUpdated(_participantAddress, _newRole);
    }

    // getters
}