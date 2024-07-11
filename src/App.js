import React, { useState, useEffect } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Navigation from "./components/Navigation";
import * as Yup from "yup";
import "./styles/main.css";

const validationSchema = [
  Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string().required("Phone is required"),
  }),
  Yup.object({
    address1: Yup.string().required("Address Line 1 is required"),
    address2: Yup.string(),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.string().required("Zip Code is required"),
  }),
];

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleNext = () => {
    validationSchema[currentStep - 1]
      .validate(formData, { abortEarly: false })
      .then(() => {
        setErrors({});
        if (currentStep < 3) {
          setCurrentStep(currentStep + 1);
        }
      })
      .catch((err) => {
        const newErrors = {};
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App flex-col justify-center mt-56">
      {currentStep === 1 && (
        <Step1
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
      )}
      {currentStep === 2 && (
        <Step2
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
      )}
      {currentStep === 3 && <Step3 formData={formData} />}
      <Navigation
        currentStep={currentStep}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </div>
  );
};

export default App;
