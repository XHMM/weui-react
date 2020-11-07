import React, { FC } from "react";

interface WeUICustomItemProps {
  label: string;
  content: any;
}
export const WeUIFormCustomItem: FC<WeUICustomItemProps> = ({ label, content }) => {
  return (
    <>
      <div className="weui-cell">
    <div className="weui-cell__hd">
    <label className="weui-label">{label}</label>
      </div>
      <div className="weui-cell__bd">{content}</div>
    </div>
    </>
);
};
