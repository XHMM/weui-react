import React, { FC } from 'react';
import { RadioGroup } from '@material-ui/core';
import { RadioGroupProps } from '@material-ui/core/RadioGroup';

interface Props extends RadioGroupProps {
  title:string
}
const WeUIFormRadioGroup: FC<Props> = ({title,children, ...props}) => {
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
