
// App.js
import React, { useState, useEffect } from 'react';
import UserInput from './Input';
import LocationInfo from './Locationdetails';
import axios from 'axios';
import './App.css';

function App() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchLocationInfo = async (postalCode) => {
    setLoading(true);
    setError(null);

    const apiUrl = `https://api.zippopotam.us/in/${postalCode}`; 

    try {
      const response = await axios.get(apiUrl);
      setLocation(response.data);
      console.log('Data fetched successfully');
    } catch (error) {
      setError('Failed to fetch location information. Please try again.');
      console.error('API request failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const clearLocationInfo = () => {
    // Clear location and error information
    setLocation(null);
    setError(null);
  };

  return (
    <div className='main-div' >
      
      <UserInput onSearch={fetchLocationInfo} loading={loading} />
      <LocationInfo location={location} error={error} onClear={clearLocationInfo} />
    </div>
  );
}

export default App;