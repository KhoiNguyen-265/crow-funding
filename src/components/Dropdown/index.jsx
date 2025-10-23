import { useState, useRef, useEffect } from "react";
import { ArrowDownIcon } from "../../assets/icons";

function Dropdown({
    options = [],
    placeholder = "Select...",
    onChange,
    className = "",
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const dropdownRef = useRef(null);

    // Đóng dropdown khi click ra ngoài
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (value) => {
        setSelected(value);
        setIsOpen(false);
        if (onChange) onChange(value);
    };

    return (
        <div
            ref={dropdownRef}
            className={`relative w-full max-w-xs ${className}`}
        >
            {/* Input hiển thị lựa chọn */}
            <div
                onClick={() => setIsOpen((prev) => !prev)}
                className="relative flex items-center"
            >
                <input
                    type="text"
                    readOnly
                    value={selected}
                    placeholder={placeholder}
                    className="w-full px-4 py-2 text-sm font-medium border border-strock dark:border-dark-stroke rounded-xl text-text1 placeholder:text-text4 dark:placeholder:text-text2 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer transition-all duration-200"
                />
                <ArrowDownIcon
                    className={`absolute right-3 text-icon transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </div>

            {/* Dropdown list */}
            <div
                className={`absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-md z-10
          transform transition-all duration-300 ease-[cubic-bezier(.25,.8,.25,1)] origin-top
          ${
              isOpen
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-2 invisible"
          }`}
            >
                <ul className="max-h-60 overflow-auto">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(option)}
                            className={`px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-primary transition-colors duration-150 ${
                                selected === option
                                    ? "bg-gray-100 text-primary font-medium"
                                    : ""
                            }`}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;
