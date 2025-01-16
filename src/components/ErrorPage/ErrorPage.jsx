import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-red-500 mb-6">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleGoBack}
            className="px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
          >
            Go Back
          </button>
          <a
            href="/"
            className="px-6 py-3 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition"
          >
            Home Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
