import React from 'react';

function DonorList({ donors }) {
  return (
    <div className="donor-list">
      <h2>Donors</h2>
      <ul>
        {donors.map((donor, index) => (
          <li key={index}>{donor.name} - {donor.bloodType}</li>
        ))}
      </ul>
    </div>
  );
}

export default DonorList;