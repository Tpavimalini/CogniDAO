import React, { useState } from 'react';
import { format } from 'date-fns';
import { AlertTriangle, ThumbsUp, Gauge, Brain, ChevronUp, ChevronDown } from 'lucide-react';
import { Proposal } from '../types';

interface ProposalCardProps {
  proposal: Proposal;
  onVote: (proposalId: string, voteType: 'for' | 'against') => void;
}

export function ProposalCard({ proposal, onVote }: ProposalCardProps) {
  const [isVoting, setIsVoting] = useState(false);
  const totalVotes = proposal.votes.for + proposal.votes.against;
  const forPercentage = (proposal.votes.for / totalVotes) * 100;

  const getStatusColor = (status: Proposal['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleVote = async (voteType: 'for' | 'against') => {
    setIsVoting(true);
    // Simulate blockchain transaction delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    onVote(proposal.id, voteType);
    setIsVoting(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{proposal.title}</h3>
          <p className="text-sm text-gray-500 mt-1">
            Created by {proposal.creator.slice(0, 6)}...{proposal.creator.slice(-4)} on{' '}
            {format(proposal.createdAt, 'MMM d, yyyy')}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(proposal.status)}`}>
          {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
        </span>
      </div>

      <p className="text-gray-700 mb-4">{proposal.description}</p>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <div>
            <p className="text-sm text-gray-500">Risk Score</p>
            <p className="font-semibold">{proposal.aiAnalysis.riskScore}/10</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <ThumbsUp className="w-5 h-5 text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Sentiment</p>
            <p className="font-semibold">{(proposal.aiAnalysis.sentiment * 100).toFixed(0)}%</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Gauge className="w-5 h-5 text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Feasibility</p>
            <p className="font-semibold">{(proposal.aiAnalysis.feasibility * 100).toFixed(0)}%</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <Brain className="w-5 h-5 text-purple-500" />
          <h4 className="font-medium text-gray-900">AI Insights</h4>
        </div>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {proposal.aiAnalysis.insights.map((insight, index) => (
            <li key={index} className="text-sm">{insight}</li>
          ))}
        </ul>
      </div>

      <div>
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <span>Votes</span>
          <span>{forPercentage.toFixed(1)}% in favor</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500"
            style={{ width: `${forPercentage}%` }}
          />
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-sm text-gray-500">
            <span>{proposal.votes.for} For</span>
            <span className="mx-2">•</span>
            <span>{proposal.votes.against} Against</span>
          </div>
          {proposal.status === 'active' && (
            <div className="flex space-x-2">
              <button
                onClick={() => handleVote('for')}
                disabled={isVoting}
                className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
              >
                <ChevronUp className="w-4 h-4 mr-1" />
                Vote For
              </button>
              <button
                onClick={() => handleVote('against')}
                disabled={isVoting}
                className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
              >
                <ChevronDown className="w-4 h-4 mr-1" />
                Vote Against
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}