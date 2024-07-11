import React from "react";

const Navigation = ({ currentStep, handleNext, handleBack }) => {
  return (
    <div className="flex justify-center">
      {currentStep > 1 && (
        <button
          onClick={handleBack}
          className="border-2 border-solid w-36 bg-gray-600 text-white rounded-lg m-4"
        >
          Back
        </button>
      )}
      {currentStep < 3 && (
        <button
          onClick={handleNext}
          className="border-2 border-solid w-36 bg-gray-600 text-white rounded-lg m-4"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Navigation;
