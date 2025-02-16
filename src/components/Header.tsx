import React from 'react';
import { Vote, BarChart2, PlusCircle } from 'lucide-react';

interface HeaderProps {
  onNewProposal: () => void;
  onShowAnalytics: () => void;
}

export function Header({ onNewProposal, onShowAnalytics }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Vote className="h-8 w-8 text-blue-600" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">DAO AI Analyzer</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={onShowAnalytics}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <BarChart2 className="h-5 w-5 mr-2" />
              Analytics
            </button>
            <button
              onClick={onNewProposal}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <PlusCircle className="h-5 w-5 mr-2" />
              New Proposal
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}