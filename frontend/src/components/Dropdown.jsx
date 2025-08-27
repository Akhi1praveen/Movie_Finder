import React, { useState, useRef, useEffect } from "react";
import "./Dropdownstyles.css";

const Dropdown = ({ selected,setSelected, options}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  // 🔹 Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected} <span style={{ display: "inline-block", fontSize: "1rem",top:"0"}}>▼</span>

      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="dropdown-item"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
