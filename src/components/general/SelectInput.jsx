import "./general.css";

function SelectInput({ label, options, className, value, setValue }) {
  const handleSelect = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`select-container ${className || ""}`}>
      <label>{label}</label>
      <select value={value} onChange={handleSelect}>
        {options.map((option) => {
          const optValue = typeof option === "object" ? option.value : option;
          const optLabel = typeof option === "object" ? option.label : option;
          return (
            <option key={optValue} value={optValue}>
              {optLabel}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectInput;
