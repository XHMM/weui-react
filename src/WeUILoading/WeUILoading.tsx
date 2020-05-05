import React, { FC } from 'react';

interface Props {
  show: boolean;
  content?: string;
}
const WeUILoading: FC<Props> = ({ show, content = 'loading...' }) => {
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

export default WeUILoading;
