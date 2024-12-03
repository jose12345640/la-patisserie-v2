import React, { useState } from "react";
import "./radioButton.scss";

const RadioGroup = ({ options, onCategoryChange }) => {
    const [selected, setSelected] = useState(null);

    const handleChange = (value) => {
        setSelected(value);
        onCategoryChange(value); 
    };

    return (
        <div className="radio-group">
            {options.map((option) => (
                <div key={option.value} className="radio-option">
                    <input
                        type="radio"
                        id={option.value}
                        name="radio"
                        value={option.value}
                        checked={selected === option.value}
                        onChange={() => handleChange(option.value)}
                    />
                    <label
                        htmlFor={option.value}
                        className={selected === option.value ? "selected" : ""}
                    >
                        {option.label}
                    </label>
                </div>
            ))}
            <div className="line"></div>
        </div>
    );
};

export default RadioGroup;
