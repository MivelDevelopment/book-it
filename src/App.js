import './App.css';
import React, { useContext } from 'react';

import { CalendarContainer } from './containers/calendar/calendar-container';
import { PopupContainer } from './containers/popup-modal/popup-container';
import { DashboardContainer } from './containers/dashboard/dashboard-container';
import { LoginPage } from './pages';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from './context';


const App = () => {
  const { isAuth } = useContext(AuthContext);
  if (!isAuth) {
    return <LoginPage />
  }
  return (
    <>
      <Routes>
        <Route path="/*" element={<DashboardContainer />} />
      </Routes>
      {/* <DashboardContainer /> */}
      <CalendarContainer />
      <PopupContainer />
    </>
  );
}

export default App;