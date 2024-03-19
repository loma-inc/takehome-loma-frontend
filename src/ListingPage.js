import React from 'react';

function ListingPage({ listing }) {
  return (
    <div>
      <h2>{listing.title}</h2>
      <p>{listing.description}</p>
    </div>
  );
}

export default ListingPage;
