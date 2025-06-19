import React from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  function handleClick() {
    // navigate("/")  --> ham as a Link v isko condition de skte h like here redirected to home page
    navigate(-1);
  }

  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row bg-black text-white">
      {/* Left: Image (2/3) */}
      <div className="w-full md:w-2/3 flex justify-center items-center p-6">
        <img
          src="/error.png"
          alt="Error"
          className="w-full h-auto max-h-[80vh] rounded-xl shadow-lg  object-contain"
        />
      </div>

      {/* Right: Text + Buttons (1/3) */}
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center px-6 py-12 text-center">
        <div className="w-full max-w-md">
          {error?.status === 404 ? (
            <>
              <h1 className="text-4xl font-extrabold text-red-500 mb-4">
                404 - Page Not Found
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Sorry, the page you’re looking for doesn’t exist.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gray-700 hover:bg-yellow-400 hover:text-black text-white px-6 py-2 rounded-md font-medium transition-colors duration-300 shadow-md shadow-red-900/30"
                >
                  Report Issue
                </Link>
                <button
                  onClick={handleClick}
                  className="bg-red-600 hover:bg-yellow-400 hover:text-black text-white px-6 py-2 rounded-md font-medium transition-colors duration-300 shadow-md shadow-red-900/30"
                >
                  Go back
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
                Something Went Wrong
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                {error?.statusText ||
                  error?.message ||
                  "An unexpected error occurred."}
              </p>
              <button
                onClick={handleClick}
                className="bg-red-600 hover:bg-yellow-400 hover:text-black text-white px-6 py-2 rounded-md font-medium transition-colors duration-300 shadow-md shadow-red-900/30"
              >
                Go back
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Error;
