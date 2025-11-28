import React, { useState } from 'react';
import { Lightbulb, TrendingUp, Users, Target, Sparkles, RefreshCw } from 'lucide-react';

export default function BusinessIdeaCreator() {
  const [industry, setIndustry] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [marketTrend, setMarketTrend] = useState('');
  const [generatedIdeas, setGeneratedIdeas] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const industries = [
    'Technology', 'Healthcare', 'Education', 'E-commerce', 'Food & Beverage',
    'Fitness & Wellness', 'Entertainment', 'Real Estate', 'Finance', 'Sustainability'
  ];

  const audiences = [
    'Gen Z (18-24)', 'Millennials (25-40)', 'Gen X (41-56)', 'Baby Boomers (57+)',
    'Small Business Owners', 'Students', 'Working Professionals', 'Parents', 'Retirees'
  ];

  const trends = [
    'AI & Automation', 'Remote Work', 'Sustainability', 'Personalization',
    'Social Commerce', 'Mental Health Awareness', 'Subscription Models',
    'Virtual Reality', 'Blockchain', 'Gig Economy'
  ];

  const generateBusinessIdeas = () => {
    if (!industry || !targetAudience || !marketTrend) {
      alert('Please select all fields to generate business ideas');
      return;
    }

    setIsGenerating(true);

    setTimeout(() => {
      const ideas = [
        {
          title: `${marketTrend}-Powered ${industry} Solution`,
          description: `A platform that leverages ${marketTrend.toLowerCase()} to revolutionize how ${targetAudience.toLowerCase()} interact with ${industry.toLowerCase()} services. This solution addresses the growing demand for innovative, tech-forward approaches in the ${industry.toLowerCase()} sector.`,
          viability: 'High',
          uniqueness: 'Very Innovative',
          marketPotential: '85%'
        },
        {
          title: `${industry} Hub for ${targetAudience}`,
          description: `A specialized marketplace connecting ${targetAudience.toLowerCase()} with curated ${industry.toLowerCase()} products and services. By focusing on ${marketTrend.toLowerCase()}, this business fills a gap in the market for targeted solutions.`,
          viability: 'Medium-High',
          uniqueness: 'Moderately Innovative',
          marketPotential: '72%'
        },
        {
          title: `${targetAudience} ${industry} Community Platform`,
          description: `Build a community-driven platform where ${targetAudience.toLowerCase()} can collaborate, share insights, and access ${industry.toLowerCase()} resources. Incorporates ${marketTrend.toLowerCase()} to enhance user experience and engagement.`,
          viability: 'Medium',
          uniqueness: 'Innovative',
          marketPotential: '68%'
        },
        {
          title: `On-Demand ${industry} Service`,
          description: `Create an on-demand service that brings ${industry.toLowerCase()} expertise directly to ${targetAudience.toLowerCase()}. Utilizing ${marketTrend.toLowerCase()} trends, this model offers convenience and personalization at scale.`,
          viability: 'High',
          uniqueness: 'Moderately Innovative',
          marketPotential: '79%'
        }
      ];

      setGeneratedIdeas(ideas);
      setIsGenerating(false);
    }, 2000);
  };

  const resetForm = () => {
    setIndustry('');
    setTargetAudience('');
    setMarketTrend('');
    setGeneratedIdeas([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lightbulb className="w-10 h-10 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-800">Business Idea Creator</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Generate innovative business concepts based on industry, audience, and market trends
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Configure Your Business Parameters
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <TrendingUp className="w-4 h-4" />
                Industry
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
              >
                <option value="">Select Industry</option>
                {industries.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Users className="w-4 h-4" />
                Target Audience
              </label>
              <select
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
              >
                <option value="">Select Audience</option>
                {audiences.map((aud) => (
                  <option key={aud} value={aud}>{aud}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Sparkles className="w-4 h-4" />
                Market Trend
              </label>
              <select
                value={marketTrend}
                onChange={(e) => setMarketTrend(e.target.value)}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
              >
                <option value="">Select Trend</option>
                {trends.map((trend) => (
                  <option key={trend} value={trend}>{trend}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={generateBusinessIdeas}
              disabled={isGenerating}
              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  Generating Ideas...
                </>
              ) : (
                <>
                  <Lightbulb className="w-5 h-5" />
                  Generate Business Ideas
                </>
              )}
            </button>
            <button
              onClick={resetForm}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>

        {generatedIdeas.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-600" />
              Generated Business Ideas
            </h2>
            
            {generatedIdeas.map((idea, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow border-l-4 border-purple-500"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 flex-1">
                    {index + 1}. {idea.title}
                  </h3>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {idea.uniqueness}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {idea.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Viability</p>
                    <p className="font-semibold text-green-700">{idea.viability}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Market Potential</p>
                    <p className="font-semibold text-blue-700">{idea.marketPotential}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Innovation Level</p>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-purple-500">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {generatedIdeas.length === 0 && !isGenerating && (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <Lightbulb className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Ready to Create Innovative Business Ideas?
            </h3>
            <p className="text-gray-500">
              Select your industry, target audience, and market trend to get started
            </p>
          </div>
        )}
      </div>
    </div>
  );
}