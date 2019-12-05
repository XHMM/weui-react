import React, { FC } from 'react';

interface Props {
  label: string
  content: any
}
const WeUIFormCustomItem: FC<Props> = ({ label, content }) => {
  return     <>
    <div className="weui-cell">
      <div className="weui-cell__hd">
        <label className="weui-label">{label}</label>
      </div>
      <div className="weui-cell__bd">
        {content}
      </div>
    </div>
  </>;
};

export default WeUIFormCustomItem;
