function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div 
      role="alert" 
      className="mx-auto w-full max-w-md sm:max-w-lg md:max-w-2xl 
                 bg-red-50 border-l-4 border-red-500 
                 p-3 sm:p-4 mt-4 rounded-r-md shadow-sm"
    >
      <div className="flex items-center">
        <p className="w-full text-sm sm:text-base text-red-700 font-medium text-center">
          {message}
        </p>
      </div>
    </div>
  );
}

export default ErrorMessage;