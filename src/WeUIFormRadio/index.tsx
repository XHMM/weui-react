import React, { FC } from "react";

interface WeUIFormRadioProps {
  label: string;
  value: string;
  checked: boolean
  name: string
}

export const WeUIFormRadio: FC<WeUIFormRadioProps> =
  ({ label, value, checked,name }) => {
    return (
      <label className="weui-cell weui-cell_active weui-check__label">
      <div className="weui-cell__bd">
        <p>{label}</p>
        </div>
        <div className="weui-cell__ft">
    <input type="radio" className="weui-check" checked={checked} value={value} name={name}/>
    <span className="weui-icon-checked" />
      </div>
      </label>
  )
  }
