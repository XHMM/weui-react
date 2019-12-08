import React, { FC, forwardRef } from "react";
import { FormControlLabel, Radio } from "@material-ui/core";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";

interface Props extends Omit<FormControlLabelProps, "control"> {
  label: string;
  value: string;
}
const WeUIFormRadio: FC<Props> = forwardRef(
  ({ label, value, ...props }, ref) => {
    return (
      <FormControlLabel
        {...props}
        ref={ref}
        value={value}
        control={<Radio />}
        label={label}
        style={{ ...props.style, marginLeft: 0 }}
      />
    );
  }
);

export default WeUIFormRadio;
