import React, { FC } from 'react';
import { Fade } from '@material-ui/core';

/*
* 提示：
* 使用时请将该组件放在最末尾，否则可能出现当dialog显示该组件后面的元素会过一阵才至于遮罩下方
* 
* */

interface Props {
  show: boolean;
  title: string;
  content: string;

  leftText?: string;
  onLeftClick?: () => void;

  rightText?: string;
  onRightClick?: () => void;
}
const WeUIDialog: FC<Props> = ({
  show,
  title,
  content,
  leftText = '',
  onLeftClick = () => {},
  rightText = '确定',
  onRightClick = () => {},
}) => {
  return (
    <Fade in={show}>
      <div>
        <div className="weui-mask" />
        <div className="weui-dialog weui-skin_android">
          <div className="weui-dialog__hd">
            <strong className="weui-dialog__title">{title}</strong>
          </div>
          <div className="weui-dialog__bd">{content}</div>
          <div className="weui-dialog__ft">
            <a className="weui-dialog__btn weui-dialog__btn_default" onClick={onLeftClick}>
              {leftText}
            </a>
            <a className="weui-dialog__btn weui-dialog__btn_primary" onClick={onRightClick}>
              {rightText}
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default WeUIDialog;
