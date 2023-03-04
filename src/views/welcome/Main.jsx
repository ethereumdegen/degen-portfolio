import React from 'react';

import Portfolio from '../partials/Portfolio'; 

import { observer } from "mobx-react";

import { useOutletContext } from 'react-router-dom';

function Home() {



  const [web3Store] = useOutletContext()





  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
 
      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <Portfolio />

        {/*<FeatureCode />*/}

      <div>
 
        
 

      </div>


      </main>
 

     

    </div>
  );
}

export default observer(Home);