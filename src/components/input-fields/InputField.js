import React from "react";

const InputFields = (props) => {
  //!define
  const { type, placeholder, className, styles } = props;

  //!render
  return (
    <div>
      {
        <input
          {...props.field}
          type={type}
          placeholder={placeholder}
          className={className}
        />
      }
    </div>
  );
};

export default InputFields;
