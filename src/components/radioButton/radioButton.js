import React, { useState } from "react";
import "./radioButton.scss";

const RadioGroup = ({ options, selected, onCategoryChange }) => {
    const handleCategoryChange = (value) => {
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
                        onChange={() => handleCategoryChange(option.value)}
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
