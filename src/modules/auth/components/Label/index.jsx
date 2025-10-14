function Label({ children, htmlFor, className = "" }) {
    return (
        <label
            htmlFor={htmlFor}
            className={`inline-block text-sm font-medium cursor-pointer ${className}`}
        >
            {children}
        </label>
    );
}

export default Label;
