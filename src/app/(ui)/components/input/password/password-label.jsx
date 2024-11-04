"use client";

import React, { useState } from 'react';

export default function InputPasswordLabel({
  id,
  label,
  value,
  error,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="my-7 relative">
      <label
        htmlFor={id}
        className="ml-3 text-[#707070] text-2xl font-bold mb-3"
      >
        {label}
      </label>
      <input
        type={showPassword ? 'text' : 'password'}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className={`text-black outline-none rounded-lg px-5 py-2 text-2xl w-full border focus:border-[#276561] hover:border-[#27656179]`}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      >
        {showPassword ? 'Hide' : 'Show'}
      </button>

      {/* Error message */}
      {error && <p className="text-red-400 font-bold">{error}</p>}
    </div>
  );
}
