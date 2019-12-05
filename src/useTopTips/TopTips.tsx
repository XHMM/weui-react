import React, { createContext, FC, useState, useRef } from 'react';
import { Fade } from '@material-ui/core';

interface State {
  showTopTips(content: string, newDuration?: number): void
}
const TopTipsContext = createContext<State>({
  showTopTips(){ return;}
});

const style = {
  display: 'block',
};

const TopTipsProvider: FC<{}> = ({ children }) => {
  const [show, setShow] = useState(false);
  const [duration, setDuration] = useState(2000);
  const [content, setContent] = useState('');
  const timer = useRef<number>();

  function showTopTips(content: string, newDuration?: number): void {
    clearTimeout(timer.current);
    setShow(true);
    setContent(content);

    timer.current = setTimeout(() => {
      setShow(() => false);
      setDuration(duration);
    }, newDuration ?? duration);
  }

  return (
    <TopTipsContext.Provider value={{showTopTips}}>
      {children}
      <Fade in={show}>
        <div className="weui-toptips weui-toptips_warn" style={style}>
          {content}
        </div>
      </Fade>
    </TopTipsContext.Provider>
  );
};

export {
  TopTipsContext,
  TopTipsProvider
}
