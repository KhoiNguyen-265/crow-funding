import { useState } from "react";

function Checkbox({
    children,
    onChange,
    checked = false,
    className = "",
    ...passProps
}) {
    return (
        <label
            {...passProps}
            className={`flex items-start gap-x-5 ${className}`}
        >
            <div className="relative">
                <input
                    type="checkbox"
                    hidden
                    checked={checked}
                    onChange={onChange}
                    name="terms-checkbox"
                    id="terms-checkbox"
                />
                <div
                    className={`w-5 h-5 rounded border cursor-pointer ${
                        checked ? "bg-primary border-primary" : "border-text4"
                    }`}
                ></div>
                {checked && (
                    <svg
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        width="12"
                        height="9"
                        viewBox="0 0 12 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 4.5L4.33333 8L11 1"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </div>
            {children && <div>{children}</div>}
        </label>
    );
}

export default Checkbox;
