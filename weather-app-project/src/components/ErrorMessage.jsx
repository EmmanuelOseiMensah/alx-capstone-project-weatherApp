function ErrorMessage({message}) {
    if(!message) return null; //Don't give error message if there are no erros

    return(
        <p className="text-center text-red-500 mt-4">{message}</p>

    );
    
} 
export default ErrorMessage; 