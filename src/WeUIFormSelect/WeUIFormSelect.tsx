import React, { FC, ChangeEventHandler } from 'react';
import "./WeUIFormSelect.scss"

type Option = {label: string, value: string}
interface Props {
  label: string
  options: Array<Option>
  onChange: ChangeEventHandler
  adornment?: any;
}
const WeUIFormSelect: FC<Props> = ({label, options,onChange, adornment}) => {
  return <div className="weui-cell weui-cell_select weui-cell_select-after">
    <div className="weui-cell__hd">
      <label htmlFor="" className="weui-label">{label}</label>
    </div>
    <div className="weui-cell__bd">
      <select onChange={onChange} className="weui-select">
        {
          options.map(o => {
            return <option value={o.value} key={o.value}>{o.label}</option>
          })
        }
      </select>
    </div>
    {adornment!==undefined && <div className="weui-cell__ft" style={{fontSize: '1rem'}}>{adornment}</div>}
  </div>;
};

export default WeUIFormSelect;
