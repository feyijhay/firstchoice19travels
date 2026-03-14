import React from 'react';
import './Destinations.css';

function Destinations() {
  const destinations = [
    { 
      id: 1, 
      name: 'South Africa', 
      description: 'Experience wildlife safaris and stunning landscapes',
      image: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=800&q=80',
      country: 'South Africa'
    },
    { 
      id: 2, 
      name: 'Qatar', 
      description: 'Modern luxury meets Arabian heritage',
      image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80',
      country: 'Qatar'
    },
    { 
      id: 3, 
      name: 'United States', 
      description: 'Diverse landscapes and iconic cities',
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=80',
      country: 'United States'
    },
    { 
      id: 4, 
      name: 'Turkey', 
      description: 'Rich history and breathtaking landscapes',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80',
      country: 'Turkey'
    },
    { 
      id: 5, 
      name: 'United Kingdom', 
      description: 'Historic landmarks and vibrant culture',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
      country: 'United Kingdom'
    },
    { 
      id: 6, 
      name: 'Maldives', 
      description: 'Paradise islands with crystal clear waters',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      country: 'Maldives'
    },
    { 
      id: 7, 
      name: 'Egypt', 
      description: 'Ancient pyramids and timeless wonders',
      image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80',
      country: 'Egypt'
    },
    { 
      id: 8, 
      name: 'Thailand', 
      description: 'Tropical beaches and vibrant street life',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
      country: 'Thailand'
    },
    { 
      id: 9, 
      name: 'Zanzibar', 
      description: 'Pristine beaches and exotic marine life',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      country: 'Tanzania'
    }
  ];

  return (
    <div className="destinations">
      <div className="page-header">
        <h1>Where Would You Like to Go?</h1>
        <p>From tropical islands to iconic cities, explore amazing destinations and get inspired for your next trip.</p>
      </div>
      <div className="container">
        <div className="destinations-grid">
          {destinations.map(dest => (
            <div key={dest.id} className="destination-card">
              <div 
                className="destination-image"
                style={{ backgroundImage: `url(${dest.image})` }}
              ></div>
              <div className="destination-info">
                <h3>{dest.name}</h3>
                <p className="destination-country">📍 {dest.country}</p>
                <p className="destination-desc">{dest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destinations;
