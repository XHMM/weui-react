import React, { FC } from 'react';
import { RadioGroup, /*RadioGroupProps*/ } from '@material-ui/core';

interface Props/* extends RadioGroupProps*/ {
  title: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void
  value?: string
}
const WeUIFormRadioGroup: FC<Props> = ({title = '',children, ...props}) => {
  return <>
    <div className="weui-cell">
      <div className="weui-cell__hd">
        <label className="weui-label">{title}</label>
      </div>
      <div className="weui-cell__bd">
        <RadioGroup {...props}>
          {children}
        </RadioGroup>
      </div>
    </div>
    
    

  </>;
};

export default WeUIFormRadioGroup;
