import React, { useState } from 'react';
import './App.css';
function UserInput({ onSearch, loading }) {
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = () => {
    onSearch(postalCode);
  };

  return (
    <div className="p-4 text-center back-input">
    <h2 className="text-2xl font-bold title">LocoZip Insights</h2>
      
      <input
        type="text"
        placeholder="Enter Zip code"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        className="w-64 px-3 py-2 border rounded-md input1 input2"
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-#00b386-500 btn-color"
      >
        {loading ? 'Loading...' : 'Search'}
      </button>
    </div>
  );
}

export default UserInput;