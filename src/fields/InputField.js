import React from 'react';

const InputField = ({ 
    label, type, name, placeholder, maxLength, className, handleInputChange, value
}) => {
    return (
        <div>
            <label htmlFor={name} className='form-label'>{label}</label>
            <input 
                name={name}
                type={type}
                placeholder={placeholder}
                maxLength={maxLength}
                className={className}
                onChange={handleInputChange}
                value={value}
            />
        </div>
    )
}

export default InputField;