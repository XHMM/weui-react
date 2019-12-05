import { useContext } from 'react';
import { TopTipsContext } from './TopTips';

function useTopTips() {
  const { showTopTips } = useContext(TopTipsContext);
  return {
    showTopTips,
  };
}

export default useTopTips;
