import React from "react";

const Step2 = ({ formData, handleChange, errors }) => {
  return (
    <div className="flex justify-center">
      <div className="">
        <h2 className="text-lg mb-6 font-bold">Step 2: Address Information</h2>
        <div>
          <input
            type="text"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            placeholder="Address Line 1"
            className="border-2 border-solid rounded-lg mt-2 w-60 h-12"
          />
          {errors.address1 && <div className="error">{errors.address1}</div>}
        </div>
        <div>
          <input
            type="text"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            placeholder="Address Line 2"
            className="border-2 border-solid rounded-lg mt-2 w-60 h-12"
          />
        </div>
        <div>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="border-2 border-solid rounded-lg mt-2 w-60 h-12"
          />
          {errors.city && <div className="error">{errors.city}</div>}
        </div>
        <div>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            className="border-2 border-solid rounded-lg mt-2 w-60 h-12"
          />
          {errors.state && <div className="error">{errors.state}</div>}
        </div>
        <div>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            placeholder="Zip Code"
            className="border-2 border-solid rounded-lg mt-2 w-60 h-12"
          />
          {errors.zip && <div className="error">{errors.zip}</div>}
        </div>
      </div>
    </div>
  );
};

export default Step2;
