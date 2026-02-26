function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div role="alert" className="bg-red-50 border-l-4 border-red-500 p-4 mt-4">
      <p className="text-center text-red-700 font-medium">{message}</p>
    </div>
  );
}
export default ErrorMessage;