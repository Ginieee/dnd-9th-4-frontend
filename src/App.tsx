/** @jsxImportSource @emotion/react */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from 'pages/mainPage/mainPage';
import LoginPage from 'pages/loginPage/loginPage';
import { Global } from '@emotion/react';
import { globalStyle } from 'components/styles/common/globalStyle';
import OnBoardingPage from 'pages/onBoardingPage/OnBoardingPage';
import OnBoardingPage1 from 'pages/onBoardingPage/OnBoardingPage1';
import OnBoardingPage2 from 'pages/onBoardingPage/OnBoardingPage2';
import OnBoardingPage3 from 'pages/onBoardingPage/OnBoardingPage3';
import OnBoardingPage4 from 'pages/onBoardingPage/OnBoardingPage4';
import OnBoardingPage5 from 'pages/onBoardingPage/OnBoardingPage5';
import OnBoardingPage6 from 'pages/onBoardingPage/OnBoardingPage6';

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="onboarding">
            <Route index element={<OnBoardingPage />} />
            <Route path="1" element={<OnBoardingPage1 />} />
            <Route path="2" element={<OnBoardingPage2 />} />
            <Route path="3" element={<OnBoardingPage3 />} />
            <Route path="4" element={<OnBoardingPage4 />} />
            <Route path="5" element={<OnBoardingPage5 />} />
            <Route path="6" element={<OnBoardingPage6 />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
