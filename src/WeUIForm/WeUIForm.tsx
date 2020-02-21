import React, { FC, CSSProperties } from 'react';
import "./WeUIForm.css";

interface Props {
  title?: string;
  style?: CSSProperties;
}
const WeUIForm: FC<Props> = ({ title, children, style }) => {
  return (
    <div className={`weui-form__control-area`} style={style}>
      <div className="weui-cells__group weui-cells__group_form">
        {title && <div className="weui-cells__title">{title}</div>}

        <div className="weui-cells weui-cells_form">{children}</div>
      </div>
    </div>
  );
};

export default WeUIForm;
