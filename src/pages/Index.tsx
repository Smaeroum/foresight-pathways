import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, BarChart3, Brain, Globe, Users, Target, ArrowRight, CheckCircle, Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';

const PolicyForesightLanding = () => {
  const [activeTab, setActiveTab] = useState('probable');
  const [animatedCount, setAnimatedCount] = useState(0);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  // Animated counter effect
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedCount(prev => prev < 75 ? prev + 1 : 75);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: entry.isIntersecting }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scenarios = {
    probable: {
      title: "Gradual Implementation Success",
      probability: "75%",
      color: "bg-green-500",
      description: "Policy proceeds smoothly with stakeholder consensus and visible results",
      keyPoints: [
        "Industry acceptance through gradual timeline",
        "Public support via revenue recycling",
        "International coordination success",
        "Technology sector championship"
      ]
    },
    plausible: {
      title: "Delayed Implementation", 
      probability: "35%",
      color: "bg-yellow-500",
      description: "Moderate resistance requires adjustments and extended consultation",
      keyPoints: [
        "Manufacturing lobby negotiations",
        "Opposition demands job protection",
        "Regional election impact",
        "International pressure acceleration"
      ]
    },
    possible: {
      title: "Significant Resistance",
      probability: "8%", 
      color: "bg-orange-500",
      description: "Strong opposition leads to substantial policy compromises",
      keyPoints: [
        "Supreme Court constitutional challenges",
        "Industrial heartland protests",
        "Trade partner pressure",
        "Emergency interventions"
      ]
    },
    blackSwan: {
      title: "Economic Crisis Derailment",
      probability: "0.5%",
      color: "bg-red-500", 
      description: "External economic shock fundamentally alters implementation",
      keyPoints: [
        "Global financial contagion",
        "Mass unemployment opposition",
        "Climate regime deferrals", 
        "Innovation pathway shifts"
      ]
    }
  };

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Analysis",
      description: "Advanced multi-provider AI system with OpenAI, Claude, and Gemini integration for comprehensive policy insights"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Multi-Criteria Decision Analysis",
      description: "Advanced methodology integrating system thinking, game theory, and structured decision-making frameworks"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Evidence-Based Research",
      description: "Real-time web research with credible sources from government ministries, regulators, and international organizations"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Four Scenario Types",
      description: "Probability-weighted scenarios from Probable (>50%) to Black Swan (<1%) events with detailed analysis"
    }
  ];

  const stats = [
    { number: "4", label: "Scenario Types", suffix: "" },
    { number: animatedCount, label: "Success Rate", suffix: "%" },
    { number: "24", label: "Month Analysis", suffix: "" },
    { number: "15", label: "Policy Domains", suffix: "+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-700/10 to-slate-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center bg-slate-600/10 border border-slate-500/20 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-4 h-4 mr-2 text-slate-400" />
              <span className="text-sm font-medium text-slate-300">Advanced Policy Scenario Planning</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
              Policy Foresight
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Generate strategic policy insights using system thinking and multi-criteria decision analysis. 
              Transform complex policy challenges into actionable intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all transform hover:scale-105">
                <Play className="w-5 h-5 mr-2" />
                Try Interactive Demo
              </button>
              <button className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all">
                Learn Methodology
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Scenario Preview */}
      <div id="scenarios" className={`py-20 transition-all duration-1000 ${isVisible.scenarios ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Interactive Scenario Analysis</h2>
            <p className="text-xl text-gray-300">Explore different policy implementation pathways with probability-weighted outcomes</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            {/* Scenario Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.entries(scenarios).map(([key, scenario]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                    activeTab === key 
                      ? 'bg-slate-600 text-white' 
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full mr-2 ${scenario.color}`}></div>
                  {scenario.probability}
                </button>
              ))}
            </div>
            
            {/* Active Scenario Content */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">{scenarios[activeTab].title}</h3>
                <p className="text-gray-300 mb-6">{scenarios[activeTab].description}</p>
                <div className="space-y-3">
                  {scenarios[activeTab].keyPoints.map((point, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Probability Visualization */}
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="rgb(51, 65, 85)" strokeWidth="20"/>
                    <circle 
                      cx="100" 
                      cy="100" 
                      r="80" 
                      fill="none" 
                      stroke="rgb(100, 116, 139)"
                      strokeWidth="20"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 80 * parseFloat(scenarios[activeTab].probability) / 100} ${2 * Math.PI * 80}`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold">{scenarios[activeTab].probability}</div>
                      <div className="text-sm text-gray-400">Probability</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className={`py-20 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300">Professional-grade policy analysis tools powered by advanced AI</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-500 transition-all group">
                <div className="text-slate-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Methodology Section */}
      <div id="methodology" className={`py-20 transition-all duration-1000 ${isVisible.methodology ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">System Thinking & Game Theory Framework</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our comprehensive methodology combines system thinking, game theory, and multi-criteria 
                decision analysis to deliver strategic policy insights.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-slate-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Comprehensive Research Phase</h3>
                    <p className="text-gray-400">AI-powered web research gathering evidence from credible sources including government ministries, regulators, and international organizations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-slate-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Multi-Scenario Generation</h3>
                    <p className="text-gray-400">Generate four distinct probability-weighted scenarios from Probable (&gt;50%) to Black Swan (&lt;1%) events with detailed analysis.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-slate-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Strategic Intelligence</h3>
                    <p className="text-gray-400">Detailed analysis of key turning points, coalition shifts, and feedback loops for comprehensive policy understanding.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-600/20 to-slate-700/20 rounded-2xl p-8 border border-slate-500/20">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Analysis Framework</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-2">
                      <TrendingUp className="w-8 h-8 text-green-400 mx-auto" />
                    </div>
                    <div className="text-sm text-gray-300">Economic Impact</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 mb-2">
                      <Users className="w-8 h-8 text-blue-400 mx-auto" />
                    </div>
                    <div className="text-sm text-gray-300">Stakeholder Analysis</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-slate-500/20 border border-slate-500/30 rounded-lg p-4 mb-2">
                      <Shield className="w-8 h-8 text-slate-400 mx-auto" />
                    </div>
                    <div className="text-sm text-gray-300">Risk Assessment</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 mb-2">
                      <Zap className="w-8 h-8 text-yellow-400 mx-auto" />
                    </div>
                    <div className="text-sm text-gray-300">Implementation Timeline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/5 to-slate-700/5"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Policy Analysis?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the future of strategic policy planning with AI-powered scenario analysis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all transform hover:scale-105">
              <Play className="w-5 h-5 mr-2" />
              Launch Demo Now
            </button>
            <button className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all">
              Access Full Platform
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyForesightLanding;