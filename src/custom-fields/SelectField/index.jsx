import React from "react";
import Select from "react-select";
import { FormGroup, Label } from "reactstrap";

const SelectField = (props) => {
  const { field, options, label, placeholder, disable } = props;
  const { name, value } = field;
  const selectedOption = options.find(option => option.value === value)

  const handleSelectOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        id={name}
        {...field}
        value={selectedOption}
        placeholder={placeholder}
        options={options}
        isDisabled={disable}
        onChange={handleSelectOptionChange}
      />
    </FormGroup>
  );
};

export default SelectField;
