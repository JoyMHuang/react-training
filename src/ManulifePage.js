import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import DetailPage from './DetailPage';
import CalculatorPage from './CalculatorPage';
import NavigationMenu from './components/NavigationMenu';
import PageLayout from './components/PageLayout';

export function ManulifePage(props) {
  return (
    <Router>
      <div className='app'>
        <NavigationMenu />
        <PageLayout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/details' element={<DetailPage />} />
            <Route path='/calculator' element={<CalculatorPage />} />
          </Routes>
        </PageLayout>
      </div>
    </Router>
  );
}