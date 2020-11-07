import React, { FC } from 'react';
import '@xhmm/weui-react/build/index.css';
import { TopTipsProvider } from "@xhmm/weui-react";
import 'github-markdown-css/github-markdown.css'
import './index.css'
import UseTopTipsDoc from './docs/useTopTips';
import IndexNoticeDoc from './docs/IndexNotice';
import WeUiButtonDoc from './docs/WeUIButton';
import WeUiFormDoc from './docs/forms/WeUIForm';
import WeUiFormRadioDoc from './docs/forms/WeUIFormRadioGroup';
import WeUiFormSelectDoc from './docs/forms/WeUIFormSelect';
import WeUIDialogDoc from './docs/WeUIDialogDoc';


const App: FC = ({}) => {
  return <TopTipsProvider>
    <IndexNoticeDoc />
    
    <WeUiButtonDoc />
    
    <UseTopTipsDoc />
    
    <WeUiFormDoc />
    <WeUiFormRadioDoc />
    <WeUiFormSelectDoc />
    
    <WeUIDialogDoc />
  </TopTipsProvider>;
};

export default App;
