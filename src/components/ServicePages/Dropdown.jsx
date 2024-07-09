import React, { useState } from 'react';

const Dropdown = ({onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  const options=["City","Capacity","Body Type"]

  return (
    <div className="relative inline-block w-fit text-black font-semibold p-1">
      <select
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
