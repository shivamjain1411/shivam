import React from "react";

const Step1 = ({ formData, handleChange, errors }) => {
  return (
    <div className="flex justify-center">
      <div>
        <h2 className="text-lg mb-6 font-bold">Step 1: Personal Information</h2>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border-2 border-solid rounded-lg mt-2 w-60 h-12"
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border-2 border-solid rounded-lg mt-2 w-60 h-12"
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border-2 border-solid rounded-lg mt-2 w-60 h-12"
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>
      </div>
    </div>
  );
};

export default Step1;
