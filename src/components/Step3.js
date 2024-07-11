import React from "react";

const Step3 = ({ formData }) => {
  return (
    <div className="flex justify-center">
      <div>
        <h2 className="text-lg mb-6 font-bold">Step 3: Confirmation</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
        <div className="flex justify-center align-middle items-center">
          <button
            type="submit"
            className="border-2 border-solid w-36 bg-red-600 text-white rounded-lg m-4 "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
