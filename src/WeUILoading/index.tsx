import React, { FC } from 'react';

interface WeUILoadingProps {
  show: boolean;
  content?: string;
}
export const WeUILoading: FC<WeUILoadingProps> = ({ show, content = 'loading...' }) => {
  return (
    <>
      <div id="loadingToast" style={{ display: show ? 'block' : 'none' }}>
        <div className="weui-mask_transparent" />
        <div className="weui-toast">
          <i className="weui-loading weui-icon_toast" />
          <p className="weui-toast__content">{content}</p>
        </div>
      </div>
    </>
  );
};
