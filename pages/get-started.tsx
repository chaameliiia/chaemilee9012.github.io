import React from 'react';

import Nav from '../components/nav'

const GetStarted = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <h1>시작하기</h1>
        <p>npm을 통해 cli 설치</p>
        <code>npm i -g codelab-2019-cli</code>
      </div>
    </>
  );
};

export default GetStarted;
