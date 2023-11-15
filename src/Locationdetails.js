import React from 'react';
import './App.css';
function LocationInfo({ location, error, onClear }) {
  return (
    <div className="p-4 text-center back">
      {error ? (
        <div className="text-red-600">{error}</div>
      ) : location ? (
        <div className="info">
          <h2 className="text-2xl font-bold title">LocoZip Insights</h2>
          <p className="mt-4 count">Country: {location.country}</p>
          {location.places.map((place, index) => (
            <div key={index} className="mt-4 extra">
              <p>State: {place.state}</p>
              <p>Place Name: {place['place name']}</p>
            </div>
          ))}
            
          <button
            onClick={onClear}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-650 clear-btn"
          >
            Clear
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default LocationInfo;