import React, { FC } from 'react';
import Page from './Page';
import {
 TopTipsProvider
} from "../build";
import "../build/index.css";

interface Props {}
const App: FC<Props> = ({}) => {
  return <TopTipsProvider>
    <Page />
  </TopTipsProvider>;
};

export default App;

