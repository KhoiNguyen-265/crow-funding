function Button({
    className = "",
    variant = "primary",
    disable = false,
    loading = false,
    href,
    children,
    ...passProps
}) {
    const Component = href ? "a" : "button";

    const base =
        "relative flex items-center justify-center rounded-[10px] py-3 px-4 text-sm lg:text-base font-semibold min-h-12";

    const variants = {
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white",
        outline:
            "border border-strock dark:border-dark-stroke text-text2 dark:text-white",
    };

    const isDisabledOrLoading = disable || loading;
    const stateClasses = isDisabledOrLoading
        ? "opacity-50 cursor-not-allowed"
        : "hover:opacity-80 cursor-pointer";

    const child = loading ? (
        <div className="w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
    ) : (
        children
    );

    return (
        <Component
            {...passProps}
            href={href}
            className={`${base} ${variants[variant]} ${stateClasses} ${className}`}
            disabled={disable}
        >
            {child}
        </Component>
    );
}

export default Button;
