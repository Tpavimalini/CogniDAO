// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract DAOGovernance {
    struct Proposal {
        uint id;
        string description;
        address proposer;
        uint256 votesFor;
        uint256 votesAgainst;
        bool executed;
        string aiReport;
    }

    mapping(uint => Proposal) public proposals;
    uint public proposalCount;

    event ProposalCreated(uint id, string description, address proposer);
    event ProposalVoted(uint id, address voter, bool inFavor);
    event ProposalExecuted(uint id, bool success);

    function createProposal(string memory _description) external {
        proposalCount++;
        proposals[proposalCount] = Proposal(proposalCount, _description, msg.sender, 0, 0, false, "");
        emit ProposalCreated(proposalCount, _description, msg.sender);
    }

    function vote(uint _proposalId, bool _inFavor) external {
        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.executed, "Already executed");

        if (_inFavor) {
            proposal.votesFor++;
        } else {
            proposal.votesAgainst++;
        }

        emit ProposalVoted(_proposalId, msg.sender, _inFavor);
    }

    function executeProposal(uint _proposalId) external {
        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.executed, "Already executed");

        if (proposal.votesFor > proposal.votesAgainst) {
            proposal.executed = true;
            emit ProposalExecuted(_proposalId, true);
        } else {
            emit ProposalExecuted(_proposalId, false);
        }
    }

    function attachAIReport(uint _proposalId, string memory _report) external {
        Proposal storage proposal = proposals[_proposalId];
        proposal.aiReport = _report;
    }

    function getProposalAIReport(uint _proposalId) public view returns (string memory) {
        return proposals[_proposalId].aiReport;
    }
}
