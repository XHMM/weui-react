import React, { FC } from 'react';
import { FormControlLabel, Radio } from '@material-ui/core';
import { FormControlLabelProps } from '@material-ui/core/FormControlLabel';

interface Props extends Omit<FormControlLabelProps, 'control'> {
  label: string;
  value: string;
}
const WeUIFormRadio: FC<Props> = ({ label, value, ...props }) => {
  return (
      <FormControlLabel
        {...props}

        value={value}
        control={<Radio />}
        label={label}
        style={{ ...props.style, marginLeft: 0 }}
      />
  );
};

export default WeUIFormRadio;
