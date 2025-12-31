
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TrackingSection from './components/TrackingSection';
import LogiBot from './components/LogiBot';
import Footer from './components/Footer';
import { ICONS } from './constants';
import { getLogisticsNews } from './services/geminiService';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MOCK_CHART_DATA = [
  { name: 'Jan', volume: 4000 },
  { name: 'Feb', volume: 3000 },
  { name: 'Mar', volume: 2000 },
  { name: 'Apr', volume: 2780 },
  { name: 'May', volume: 1890 },
  { name: 'Jun', volume: 2390 },
];

const App: React.FC = () => {
  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    async function fetchNews() {
      const data = await getLogisticsNews();
      setNews(data);
    }
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[550px] flex items-center overflow-hidden bg-gray-900">
        <img 
          src="https://picsum.photos/id/160/1920/1080" 
          alt="Logistics background" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#FFCC00] text-gray-900 font-black text-xs px-3 py-1 rounded uppercase tracking-[0.2em] mb-4">
              Premium Logistics
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tighter">
              Global Shipping <br/>
              <span className="text-[#FFCC00]">Without Limits.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-medium">
              We move the world. From small parcels to heavy freight, we deliver with speed, reliability, and precision across 220 countries.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#D40511] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-lg flex items-center gap-2">
                Start Shipping Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <TrackingSection />

        {/* Services Grid */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Our Core Logistics Solutions</h2>
            <div className="w-20 h-1.5 bg-[#FFCC00] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#D40511] transition-colors">
                <ICONS.Box className="w-8 h-8 text-[#D40511] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Express Shipping</h3>
              <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                Door-to-door delivery of documents and parcels worldwide with time-definite delivery options.
              </p>
              <a href="#" className="inline-flex items-center gap-2 font-bold text-[#D40511] group-hover:underline">
                Explore Express
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>

            <div className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                <ICONS.Globe className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Freight Solutions</h3>
              <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                Air, ocean, road, and rail freight services for large shipments requiring special handling.
              </p>
              <a href="#" className="inline-flex items-center gap-2 font-bold text-blue-600 group-hover:underline">
                Explore Freight
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>

            <div className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="bg-yellow-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FFCC00] transition-colors">
                <ICONS.Truck className="w-8 h-8 text-[#FFCC00] group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Supply Chain</h3>
              <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                Integrated warehousing, distribution, and fulfillment services designed for modern e-commerce.
              </p>
              <a href="#" className="inline-flex items-center gap-2 font-bold text-gray-900 group-hover:underline">
                Explore Logistics
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </section>

        {/* AI News & Data Insights Section */}
        <section className="py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Real-time Logistics News (Gemini Powered) */}
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black text-gray-900">Industry Intelligence</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center gap-1">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                   Live Updates
                </span>
              </div>
              
              {!news ? (
                <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                  <div className="w-12 h-12 border-4 border-[#FFCC00] border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-gray-500 font-medium">Fetching global logistics updates...</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-gray-600 text-sm leading-relaxed mb-6 whitespace-pre-line italic">
                    "{news.text.substring(0, 300)}..."
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Grounding Sources</h4>
                    {news.sources?.map((s: any, i: number) => (
                      <a key={i} href={s.uri} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group">
                        <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center font-bold text-[#D40511] text-xs">
                          {i + 1}
                        </div>
                        <span className="text-sm font-bold text-gray-700 truncate group-hover:text-[#D40511]">{s.title}</span>
                        <svg className="w-4 h-4 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Performance Visualization */}
            <div className="bg-[#111827] p-10 rounded-3xl shadow-sm text-white">
              <h3 className="text-2xl font-black mb-2">Network Performance</h3>
              <p className="text-gray-400 font-medium mb-8">Global shipment volume (indexed in thousands)</p>
              
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={MOCK_CHART_DATA}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                    <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#FFCC00' }}
                    />
                    <Bar dataKey="volume" fill="#FFCC00" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">On-Time</p>
                  <p className="text-xl font-black text-[#FFCC00]">99.8%</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Locations</p>
                  <p className="text-xl font-black text-[#FFCC00]">220+</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Delivered</p>
                  <p className="text-xl font-black text-[#FFCC00]">1.2B</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <LogiBot />
    </div>
  );
};

export default App;
