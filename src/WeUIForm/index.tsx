import React, { FC, CSSProperties } from 'react';
import "./index.css";

interface WeUIFormProps {
  title?: string;
  style?: CSSProperties;
}
export const WeUIForm: FC<WeUIFormProps> = ({ title, children, style }) => {
  return (
    <div className={`weui-form__control-area`} style={style}>
      <div className="weui-cells__group weui-cells__group_form">
        {title && <div className="weui-cells__title">{title}</div>}
        <div className="weui-cells weui-cells_form">{children}</div>
      </div>
    </div>
  );
};

