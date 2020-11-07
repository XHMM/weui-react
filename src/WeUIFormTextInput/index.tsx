import React, { FC, InputHTMLAttributes } from 'react';

interface WeUIFormTextInputProps extends InputHTMLAttributes<any> {
  label: string;
  adornment?: any;
}
export const WeUIFormTextInput: FC<WeUIFormTextInputProps> = ({ label, adornment, ...props }) => {
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
