import React, { FC, MouseEventHandler } from "react";
import classnames from "classnames";
import { noop } from '../utils';

import "./WeUIButton.css";

interface Props {
  /**
   * @default 'primary'
   */
  type?: 'primary' | 'default' | 'warn'
  loading?: boolean;
  disabled?: boolean;
  /**
   * @default 'default'
   */
  size?: 'mini' | 'default' | 'cell';
  onClick?: MouseEventHandler;
}
const WeUIButton: FC<Props> = ({
  children,
  onClick = noop,
  type = 'primary',
  size = "default",
  loading = false,
  disabled = false
}) => {
  const classNames = classnames({
    'weui-btn': size !=='cell',
    'weui-btn_mini': size === 'mini',
    'weui-btn_cell': size ==='cell',
    
    [`weui-btn_${type}`]: size !== 'cell',
    [`weui-btn_cell-${type} override__weui-btn_cell`]: size === 'cell',
    "weui-btn_disabled": disabled,
    "weui-btn_loading": loading
  });
  
  return (
    <button
      onClick={onClick}
      className={classNames}
      disabled={loading || disabled}
    >
      {loading && <i className="weui-loading" />}
      {children}
    </button>
  );
};

export default WeUIButton;
