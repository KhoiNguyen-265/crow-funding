import clsx from "clsx";

function Heading({ children, className = "", size = "xl", type = "h2" }) {
    const baseClasses = "font-semibold mb-2 lg:mb-4 text-text1 dark:text-white";

    const sizeClasses = {
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
    };

    const Component = type;

    return (
        <Component className={clsx(baseClasses, sizeClasses[size], className)}>
            {children}
        </Component>
    );
}

export default Heading;
