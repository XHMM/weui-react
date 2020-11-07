import React, { FC, useState } from 'react';
import { WeUIFormRadio } from '../WeUIFormRadio';

interface WeUIFormRadioGroupProps/* extends RadioGroupProps*/ {
  title: string
  name: string
  data: Array<{label:string, value:string}>
  onChange?: (value: string) => void
  value?: string
}
export const WeUIFormRadioGroup: FC<WeUIFormRadioGroupProps> = ({title = '',value, name,data, onChange}) => {
  const [radioValue, setRadioValue] = useState(value)
  const onRadioChange = (ev:any) => {
    const val = ev.target.value
    setRadioValue(val)
    onChange && onChange(val)
  }
  return <>
    <div className="weui-cell">
  <div className="weui-cell__hd">
  <label className="weui-label">{title}</label>
    </div>
    <div className="weui-cell__bd" onChange={onRadioChange}>
  <div className="weui-cells_radio">
    {
      data.map(d => <WeUIFormRadio key={d.value} label={d.label} value={d.value} name={name} checked={radioValue === d.value} />)
}
  </div>
  </div>
  </div>



  </>;
};
