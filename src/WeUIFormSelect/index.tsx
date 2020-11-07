import React, { FC, ChangeEventHandler } from 'react';
import "./index.css"

interface WeUIFormSelectProps {
  label: string
  options: Array<{label: string, value: string}>
  onChange: ChangeEventHandler<HTMLSelectElement>
  value?: string
  adornment?: any;
}
export const WeUIFormSelect: FC<WeUIFormSelectProps> = ({label, options,onChange, adornment, value}) => {
  return <div className="weui-cell weui-cell_select weui-cell_select-after" style={adornment ? {padding: '0 32px'} : {}}>
    <div className="weui-cell__hd">
      <label htmlFor="" className="weui-label">{label}</label>
    </div>
    <div className="weui-cell__bd">
      <select onChange={onChange} className="weui-select" {...value ? {value}: {}}>
        {
          options.map(o => {
            return <option value={o.value} key={o.value}>{o.label}</option>
          })
        }
      </select>
    </div>
    {adornment!==undefined && <div className="weui-cell__ft">{adornment}</div>}
  </div>;
};

