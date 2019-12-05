import React, { FC, RefObject } from 'react';
import { FormControlLabel, Radio } from '@material-ui/core';
import { FormControlLabelProps } from '@material-ui/core/FormControlLabel';

interface Props extends Omit<FormControlLabelProps, 'control'> {
  label: string;
  value: string;
  refForward?: RefObject<any>;
}
const WeUIFormRadio: FC<Props> = ({ label, value, refForward, ...props }) => {
  return (
    <>
      <FormControlLabel
        value={value}
        control={<Radio />}
        label={label}
        {...refForward && { ref: refForward }}
        style={{ ...props.style, marginLeft: 0 }}
        {...props}
      />
    </>
  );
};

export default WeUIFormRadio;
