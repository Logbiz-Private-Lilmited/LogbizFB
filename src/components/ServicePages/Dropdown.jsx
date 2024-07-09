import React, { useState } from 'react';

const options = ["City", "Capacity", "Body Type"];

const Dropdown = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <div className="relative inline-block w-fit text-black font-semibold">
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="border-2 border-[#E9E7E2] p-1 rounded-md"
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
