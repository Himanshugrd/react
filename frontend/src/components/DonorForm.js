// components/DonorForm.js

import React, { useState } from 'react';

function DonorForm({ onAddDonor }) {
  const [name, setName] = useState('');
  const [bloodType, setBloodType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !bloodType) return;
    const newDonor = { name, bloodType };
    onAddDonor(newDonor);
    setName('');
    setBloodType('');
  };

  return (
    <form onSubmit={handleSubmit} className="donor-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Blood Type"
        value={bloodType}
        onChange={(e) => setBloodType(e.target.value)}
      />
      <button type="submit">Add Donor</button>
    </form>
  );
}

export default DonorForm;
