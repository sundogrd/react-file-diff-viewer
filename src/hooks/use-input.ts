import * as React from "react";

const useInput = initialValue => {
  const [value, onChange] = React.useState(initialValue);

  return {
    value,
    onChange(e) {
      onChange(e.target.value);
    }
  };
};

export default useInput;
