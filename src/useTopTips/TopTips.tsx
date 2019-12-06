import React, { createContext, FC, useState, useRef, useContext } from "react";
import { Fade } from "@material-ui/core";
import "./TopTips.scss";

interface Config {
  duration?: number;
  type?: "warn" | "primary";
}
interface State {
  showTopTips(content: string, config?: Config): void;
}
const TopTipsContext = createContext<State>({
  showTopTips() {
    return;
  }
});

const style = {
  display: "block"
};

const defaultConfig: Config = {
  duration: 2000,
  type: "warn"
};
const TopTipsProvider: FC<{}> = ({ children }) => {
  const [show, setShow] = useState(false);
  const [config, setConfig] = useState<Config>(defaultConfig);
  const [content, setContent] = useState("");
  const timer = useRef<number>();

  const showTopTips: State["showTopTips"] = (content, newConfig) => {
    const finalConfig = {
      duration: newConfig?.duration ?? config.duration,
      type: newConfig?.type ?? config.type
    };
    clearTimeout(timer.current);

    setConfig(finalConfig);
    setShow(true);
    setContent(content);

    timer.current = setTimeout(() => {
      setShow(() => false);
    }, finalConfig.duration);
  };

  return (
    <TopTipsContext.Provider value={{ showTopTips }}>
      {children}
      <Fade in={show}>
        <div
          className={`weui-toptips weui-toptips_${config.type}`}
          style={style}
        >
          {content}
        </div>
      </Fade>
    </TopTipsContext.Provider>
  );
};

function useTopTips(): State["showTopTips"] {
  const { showTopTips } = useContext(TopTipsContext);
  return showTopTips;
}

export { TopTipsContext, TopTipsProvider, useTopTips };
