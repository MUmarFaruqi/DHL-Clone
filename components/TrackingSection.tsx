
import React, { useState } from 'react';
import { ICONS, MOCK_SHIPMENTS } from '../constants';

const TrackingSection: React.FC = () => {
  const [trackId, setTrackId] = useState('');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const shipment = MOCK_SHIPMENTS[trackId.toUpperCase()];
    if (shipment) {
      setResult(shipment);
    } else {
      setError('Shipment not found. Please check your number (try GS123456).');
      setResult(null);
    }
  };

  return (
    <section className="bg-white shadow-xl rounded-2xl overflow-hidden -mt-20 relative z-10 max-w-4xl mx-auto border border-gray-100">
      <div className="flex border-b">
        <button className="flex-1 py-4 text-center font-bold text-[#D40511] border-b-4 border-[#D40511] bg-red-50">
          Track
        </button>
        <button className="flex-1 py-4 text-center font-bold text-gray-500 hover:bg-gray-50 transition-colors">
          Quote
        </button>
        <button className="flex-1 py-4 text-center font-bold text-gray-500 hover:bg-gray-50 transition-colors">
          Schedule
        </button>
      </div>
      
      <div className="p-8">
        <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <ICONS.Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Enter Tracking Number (e.g., GS123456)"
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent font-medium"
              value={trackId}
              onChange={(e) => setTrackId(e.target.value)}
            />
          </div>
          <button 
            type="submit"
            className="bg-[#FFCC00] hover:bg-[#e6b800] text-gray-900 font-extrabold px-10 py-4 rounded-xl transition-all shadow-md active:scale-95"
          >
            TRACK SHIPMENT
          </button>
        </form>

        {error && <p className="mt-4 text-red-600 font-semibold text-sm">{error}</p>}

        {result && (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-start mb-6 pb-6 border-b">
              <div>
                <h3 className="text-2xl font-black text-gray-900">{result.status}</h3>
                <p className="text-gray-500 font-medium">Shipment ID: {result.id}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Estimated Delivery</p>
                <p className="text-xl font-bold text-gray-900">{result.estimatedDelivery}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Route Details</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div>
                      <p className="text-xs font-bold text-gray-500">From</p>
                      <p className="font-bold">{result.origin}</p>
                    </div>
                  </div>
                  <div className="w-px h-6 bg-gray-200 ml-1"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#D40511]"></div>
                    <div>
                      <p className="text-xs font-bold text-gray-500">To</p>
                      <p className="font-bold">{result.destination}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Latest Updates</h4>
                <div className="space-y-4">
                  {result.history.map((item: any, idx: number) => (
                    <div key={idx} className="flex gap-4">
                      <div className="text-xs font-medium text-gray-400 whitespace-nowrap pt-1">
                        {item.date.split(' ')[0]}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-gray-900">{item.description}</p>
                        <p className="text-xs text-gray-500">{item.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrackingSection;
