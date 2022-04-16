const InputFields = (props) => {
  //!define
  const { type, placeholder, className } = props;

  //!render
  return (
    <div>
      {<input type={type} placeholder={placeholder} className={className} />}
    </div>
  );
};

export default InputFields;
