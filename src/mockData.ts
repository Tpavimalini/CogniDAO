import { Proposal } from './types';

export const mockProposals: Proposal[] = [
  {
    id: '1',
    title: 'Implement Cross-Chain Bridge Integration',
    description: 'Proposal to integrate a cross-chain bridge to enable asset transfers between Ethereum and Polygon networks.',
    creator: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    createdAt: new Date('2024-03-10'),
    status: 'active',
    aiAnalysis: {
      riskScore: 7.8,
      sentiment: 0.85,
      feasibility: 0.75,
      insights: [
        'High technical complexity requires thorough security audit',
        'Strong community support based on governance discussions',
        'Implementation timeline might need extension',
        'Similar proposals have succeeded in other DAOs'
      ]
    },
    votes: {
      for: 1500,
      against: 300
    }
  },
  {
    id: '2',
    title: 'Treasury Diversification Strategy',
    description: 'Proposal to diversify DAO treasury by allocating 20% to stablecoin yield farming.',
    creator: '0x123d35Cc6634C0532925a3b844Bc454e4438f555',
    createdAt: new Date('2024-03-08'),
    status: 'active',
    aiAnalysis: {
      riskScore: 4.2,
      sentiment: 0.92,
      feasibility: 0.95,
      insights: [
        'Conservative approach aligns with market conditions',
        'High potential for sustainable yield generation',
        'Low technical risk implementation',
        'Strong precedent from successful DAOs'
      ]
    },
    votes: {
      for: 2200,
      against: 150
    }
  },
  {
    id: '3',
    title: 'Governance Token Emission Adjustment',
    description: 'Proposal to reduce monthly token emission by 25% to optimize long-term tokenomics.',
    creator: '0x987d35Cc6634C0532925a3b844Bc454e4438f777',
    createdAt: new Date('2024-03-05'),
    status: 'completed',
    aiAnalysis: {
      riskScore: 5.5,
      sentiment: 0.65,
      feasibility: 0.88,
      insights: [
        'Mixed community sentiment requires careful communication',
        'Technical implementation is straightforward',
        'May impact staking participation rates',
        'Aligned with market trends in token economics'
      ]
    },
    votes: {
      for: 1800,
      against: 900
    }
  }
];