import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Error: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg">
        <BiErrorCircle className="text-red-500 text-7xl mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops!</h1>
        <p className="text-gray-600 text-lg mb-6">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="btn btn-primary text-white px-6 py-2 rounded-md shadow-md transition hover:bg-blue-600"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
