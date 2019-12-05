import React, { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<any> {
  label: string;
  adornment?: any;
}
const WeUIFormTextInput: FC<Props> = ({ label, adornment, ...props }) => {
  return (
    <>
      <div className={`weui-cell ${props.readOnly ? 'weui-cell_readonly' : ''} ${props.disabled ? 'weui-cell_disabled' : ''}`}>
        <div className="weui-cell__hd">
          <label className="weui-label">{label}</label>
        </div>
        <div className="weui-cell__bd">
          <input className="weui-input" {...props} />
        </div>
        {adornment!==undefined && <div className="weui-cell__ft" style={{fontSize: '1rem'}}>{adornment}</div>}
      </div>
    </>
  );
};

export default WeUIFormTextInput;
