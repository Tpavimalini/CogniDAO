import React from 'react';
import { X, TrendingUp, AlertTriangle, ThumbsUp, Gauge, CheckCircle } from 'lucide-react';
import { AnalyticsData } from '../types';

interface AnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: AnalyticsData;
}

export function AnalyticsModal({ isOpen, onClose, data }: AnalyticsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">DAO Analytics Dashboard</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="text-sm font-medium text-blue-900">Total Proposals</h3>
            </div>
            <p className="text-2xl font-bold text-blue-700">{data.totalProposals}</p>
            <p className="text-sm text-blue-600">{data.activeProposals} Active</p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
              <h3 className="text-sm font-medium text-red-900">Avg Risk Score</h3>
            </div>
            <p className="text-2xl font-bold text-red-700">{data.averageRiskScore.toFixed(1)}/10</p>
            <p className="text-sm text-red-600">Risk Level</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <ThumbsUp className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-sm font-medium text-green-900">Avg Sentiment</h3>
            </div>
            <p className="text-2xl font-bold text-green-700">{(data.averageSentiment * 100).toFixed(0)}%</p>
            <p className="text-sm text-green-600">Community Support</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Gauge className="w-5 h-5 text-purple-600 mr-2" />
              <h3 className="text-sm font-medium text-purple-900">Avg Feasibility</h3>
            </div>
            <p className="text-2xl font-bold text-purple-700">{(data.averageFeasibility * 100).toFixed(0)}%</p>
            <p className="text-sm text-purple-600">Implementation Score</p>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <CheckCircle className="w-5 h-5 text-indigo-600 mr-2" />
              <h3 className="text-sm font-medium text-indigo-900">Success Rate</h3>
            </div>
            <p className="text-2xl font-bold text-indigo-700">{(data.successRate * 100).toFixed(0)}%</p>
            <p className="text-sm text-indigo-600">Proposal Acceptance</p>
          </div>
        </div>

        <div className="text-sm text-gray-500 mt-4">
          <p>* Analytics data is updated in real-time based on AI analysis of proposals and voting patterns.</p>
        </div>
      </div>
    </div>
  );
}