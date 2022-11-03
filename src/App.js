
import {Download, Features, SectionWrapper } from "./components";

import assets from './assets'


const App=()=> {
  return (
    <>
      <SectionWrapper
      
      
        title="You own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, Colect NFTs, Exchange & earn crypto. Join 25+ million people using ProNef Marketplace "
        showBtn
        mockupImage={assets.homeHero}
        banner="banner"
      />
    </>
  );
}

export default App;
