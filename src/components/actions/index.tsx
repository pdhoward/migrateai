
"use client"
import React, { useState } from 'react';
import { blue } from '@mui/material/colors';
import { ContentItem } from './types';
import defaultContent from '@/data/actioncards/AppRenovate';

export function Actions() {
  const [showModal, setShowModal] = useState(false);
  const [showText, setShowText] = useState('');

  const handleClick = (description: string) => {
    setShowModal(true);
    setShowText(description);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="flex flex-wrap gap-4 justify-center">
        {defaultContent.map((item: any) => (
          <button
            key={item.eid}
            className="bg-gray-700 hover:bg-gray-600 p-2 rounded-md shadow flex flex-col items-center justify-center"
            onClick={() => handleClick(item.description)}
            style={{ width: '100px', height: '100px' }}  // Setting a fixed size for the button
          >
            {React.cloneElement(item.image, { style: { color: blue[500], width: '50%', height: '50%' } })}
            <span className="mt-1 text-xs text-blue-500">{item.name}</span>
          </button>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-1/3 rounded-lg shadow-lg overflow-hidden">
            <div className="p-5 text-gray-900">
              <h3 className="text-lg font-semibold mb-4">AI Function Invoked</h3>
              <p className="text-sm">{showText}</p>
            </div>
            <div className="bg-gray-100 p-4 flex justify-end">
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-200"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
