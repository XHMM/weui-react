import React, { FC, MouseEventHandler } from 'react';
import classnames from 'classnames';
import "./WeUIButton.scss";

interface Props {
  value: string;
  onClick?: MouseEventHandler;
  size?: 'small' | 'middle' | 'big';
  loading?: boolean;
  disabled?: boolean
}
const WeUIButton: FC<Props> = ({ value, onClick = () => {}, size = 'middle', loading = false, disabled = false }) => {
  const classNames = classnames({
    'weui-btn weui-btn_primary': size==='small' || size==='middle',  
    'weui-btn-mini': size ==='small',
    'weui-btn_cell weui-btn_cell-primary weui-btn_big': size==='big',
    
    'weui-btn_disabled': disabled,
    'weui-btn_loading': loading
  });

  return (
    <button onClick={onClick} className={classNames} disabled={loading || disabled}>
      {loading ? <i className="weui-loading" /> : ''}
      {value}
    </button>
  );
};

export default WeUIButton;
