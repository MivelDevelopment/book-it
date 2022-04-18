import './App.css';
import React from 'react';

import { CalendarContainer } from './containers/calendar/calendar-container';
import { PopupContainer } from './containers/popup-modal/popup-container';
import { DashboardContainer } from './containers/dashboard/dashboard-container';
import { LoginPage } from './pages';


// import { Dashboard } from './pgs/dashboard/dashboard';
// import { Preferences } from './pgs/preferences/preferences';
// import { Login } from './pgs/login/login';
// import { Routes, Route } from 'react-router-dom';
// const App = () => {
//   const [token, setToken] = React.useState('');

//   if (!token) {
//     return <Login setToken={setToken} />
//   }
//   return (
//     <div className="wrapper">
//       <h1>Application</h1>
//         <Routes>
//           <Route path="/dashboard" element={
//             <Dashboard />
//           }>
//           </Route>
//           <Route path="/preferences" element={
//             <Preferences />
//           }>
//           </Route>
//         </Routes>
//     </div>
//   )
// }








const App = () => {
  return (
    <>
      <LoginPage />
      <DashboardContainer />
      <CalendarContainer />
      <PopupContainer />
    </>
  );
}

export default App;