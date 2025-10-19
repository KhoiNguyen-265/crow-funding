import clsx from "clsx";

const headingVariants = {
    h1: "text-[18px] lg:text-[20px]",
    h2: "text-[16px] lg:text-[18px]",
    h3: "text-[14px] lg:text-[16px]",
    h4: "text-[12px] lg:text-[14px]",
    h5: "text-[10px] lg:text-[12px]",
};

function Heading({
    as: Tag = "h2",
    variant = "h2",
    className = "",
    align = "left",
    type = "semibold",
    children,
}) {
    return (
        <Tag
            className={clsx(
                "text-text1 dark:text-white",
                headingVariants[variant],
                {
                    "text-center": align === "center",
                    "text-right": align === "right",
                    "font-bold": type === "bold",
                    "font-semibold": type === "semibold",
                },
                className
            )}
        >
            {children}
        </Tag>
    );
}

export default Heading;
