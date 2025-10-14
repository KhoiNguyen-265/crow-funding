import clsx from "clsx";
import { useController } from "react-hook-form";

function Input({
    type = "text",
    control,
    name,
    className = "",
    id,
    placeholder = "",
}) {
    const { field, fieldState } = useController({
        control,
        name,
        defaultValue: "",
    });

    const baseClasses =
        "w-full px-6 py-4 text-sm font-medium border border-strock dark:border-dark-stroke rounded-[10px] text-text1 placeholder:text-text4 dark:placeholder:text-text2 dark:text-white";
    const focusClasses =
        " focus:ring-2 focus:border-transparent transition-all duration-300";

    return (
        <div className="relative">
            <input
                id={id}
                type={type}
                className={clsx(
                    baseClasses,
                    focusClasses,
                    {
                        "focus:ring-primary": !fieldState.error,
                        "focus:ring-error": fieldState.error,
                    },
                    className
                )}
                {...field}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;
