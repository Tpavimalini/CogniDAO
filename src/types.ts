export interface Proposal {
  id: string;
  title: string;
  description: string;
  creator: string;
  createdAt: Date;
  status: 'active' | 'completed' | 'failed';
  aiAnalysis: {
    riskScore: number;
    sentiment: number;
    feasibility: number;
    insights: string[];
  };
  votes: {
    for: number;
    against: number;
  };
}

export interface AnalyticsData {
  totalProposals: number;
  activeProposals: number;
  averageRiskScore: number;
  averageSentiment: number;
  averageFeasibility: number;
  successRate: number;
}