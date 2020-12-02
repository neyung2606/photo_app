import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const InputField = (props) => {
  const { field, type, label, placeholder, disable } = props;
  const { name } = field;
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        {...field}
        type={type}
        disabled={disable}
        placeholder={placeholder}
      />
    </FormGroup>
  );
};

export default InputField;
