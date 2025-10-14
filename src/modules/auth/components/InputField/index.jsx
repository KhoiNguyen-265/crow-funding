function InputField({ children, className = "", name = "", errors = {} }) {
    const errorMessage = errors[name]?.message;

    return (
        <div className={`flex flex-col gap-y-[10px] mb-5 ${className}`}>
            {children}
            {errorMessage && (
                <p className="text-error text-sm">{errorMessage}</p>
            )}
        </div>
    );
}

export default InputField;
