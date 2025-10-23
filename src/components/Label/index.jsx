function Label({ children, htmlFor, className = "" }) {
    return (
        <label
            htmlFor={htmlFor}
            className={`inline-block text-sm text-text2 dark:text-text3 font-medium cursor-pointer ${className}`}
        >
            {children}
        </label>
    );
}

export default Label;
