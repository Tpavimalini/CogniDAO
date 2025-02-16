import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProposalCard } from './components/ProposalCard';
import { NewProposalModal } from './components/NewProposalModal';
import { AnalyticsModal } from './components/AnalyticsModal';
import { mockProposals } from './mockData';
import { Proposal, AnalyticsData } from './types';

function App() {
  const [proposals, setProposals] = useState<Proposal[]>(mockProposals);
  const [showNewProposal, setShowNewProposal] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const handleNewProposal = ({ title, description }: { title: string; description: string }) => {
    const newProposal: Proposal = {
      id: String(Date.now()),
      title,
      description,
      creator: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      createdAt: new Date(),
      status: 'active',
      aiAnalysis: {
        riskScore: Math.random() * 10,
        sentiment: 0.5 + Math.random() * 0.5,
        feasibility: 0.5 + Math.random() * 0.5,
        insights: [
          'Proposal aligns with current market trends',
          'Implementation complexity is moderate',
          'Community sentiment appears positive',
          'Similar proposals have shown success in other DAOs'
        ]
      },
      votes: {
        for: 0,
        against: 0
      }
    };

    setProposals([newProposal, ...proposals]);
  };

  const handleVote = (proposalId: string, voteType: 'for' | 'against') => {
    setProposals(proposals.map(proposal => {
      if (proposal.id === proposalId) {
        return {
          ...proposal,
          votes: {
            ...proposal.votes,
            [voteType]: proposal.votes[voteType] + 1
          }
        };
      }
      return proposal;
    }));
  };

  const analyticsData: AnalyticsData = {
    totalProposals: proposals.length,
    activeProposals: proposals.filter(p => p.status === 'active').length,
    averageRiskScore: proposals.reduce((acc, p) => acc + p.aiAnalysis.riskScore, 0) / proposals.length,
    averageSentiment: proposals.reduce((acc, p) => acc + p.aiAnalysis.sentiment, 0) / proposals.length,
    averageFeasibility: proposals.reduce((acc, p) => acc + p.aiAnalysis.feasibility, 0) / proposals.length,
    successRate: proposals.filter(p => p.status === 'completed').length / proposals.length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onNewProposal={() => setShowNewProposal(true)}
        onShowAnalytics={() => setShowAnalytics(true)}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-6">
          {proposals.map((proposal) => (
            <ProposalCard
              key={proposal.id}
              proposal={proposal}
              onVote={handleVote}
            />
          ))}
        </div>
      </main>

      <NewProposalModal
        isOpen={showNewProposal}
        onClose={() => setShowNewProposal(false)}
        onSubmit={handleNewProposal}
      />

      <AnalyticsModal
        isOpen={showAnalytics}
        onClose={() => setShowAnalytics(false)}
        data={analyticsData}
      />
    </div>
  );
}

export default App;