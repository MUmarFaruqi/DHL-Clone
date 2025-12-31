
import React from 'react';

export const COLORS = {
  YELLOW: '#FFCC00',
  RED: '#D40511',
  DARK: '#111827',
};

export const ICONS = {
  Truck: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25c0-4.446-3.542-7.898-8.03-8.13-1.89-.098-3.791.077-5.631.522A13.047 13.047 0 0 0 4.25 5.56v9.125m15 3.937V11.25M11.25 3.75v12m0-12L15 6.75M11.25 3.75 7.5 6.75" />
    </svg>
  ),
  Box: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  ),
  Globe: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.015 9.015 0 0 1 8.716 6.747M12 3a9.015 9.015 0 0 0-8.716 6.747" />
    </svg>
  ),
  Search: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  ),
};

export const MOCK_SHIPMENTS: Record<string, any> = {
  'GS123456': {
    id: 'GS123456',
    status: 'In Transit',
    origin: 'New York, USA',
    destination: 'London, UK',
    estimatedDelivery: '2023-11-25',
    history: [
      { date: '2023-11-20 10:00', location: 'New York Hub', description: 'Shipment picked up' },
      { date: '2023-11-21 14:30', location: 'JFK Airport', description: 'Processed through sorting facility' },
      { date: '2023-11-22 09:00', location: 'London Heathrow', description: 'Arrived at destination country' },
    ]
  },
  'GS789012': {
    id: 'GS789012',
    status: 'Delivered',
    origin: 'Berlin, Germany',
    destination: 'Tokyo, Japan',
    estimatedDelivery: '2023-11-18',
    history: [
      { date: '2023-11-10', location: 'Berlin Hub', description: 'Shipment picked up' },
      { date: '2023-11-18', location: 'Tokyo Office', description: 'Delivered and Signed by K. Tanaka' },
    ]
  }
};
