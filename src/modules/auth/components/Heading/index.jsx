function Heading({ children }) {
    return (
        <h1 className="font-semibold text-lg lg:text-xl mb-1 lg:mb-3 text-text1 dark:text-white text-center">
            {children}
        </h1>
    );
}

export default Heading;
