import React from 'react';
import TinderCards from './TinderCard';
import SwipeButton from './SwipeButton';
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <TinderCards />
      <SwipeButton />
    </>
  );
}

export default Home;