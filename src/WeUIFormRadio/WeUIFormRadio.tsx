import React, { FC, forwardRef } from "react";
import {
  FormControlLabel,
  Radio,
  FormControlLabelProps
} from "@material-ui/core";

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
        control={
          <Radio
            style={{color: 'var(--weui-BRAND)'}}
          />
        }
        label={label}
      />
    );
  }
);

export default WeUIFormRadio;
