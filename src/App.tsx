import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import GridExample from 'routes/GridExample/GridExample';
import Main from 'routes/Main/Main';
import StartPage from 'routes/StartPage/StartPage';
import Events from 'routes/Events/Events';
import Logs from 'routes/Logs/Logs';
import './scss/app.scss';
import Incidents from 'routes/Incidents/Incidents';
import MainPage from 'routes/MainPage/MainPage';
import ProducktMorePage from 'routes/ProducktMorePage/ProducktMorePage';
import { getCookie } from 'helpers/cookies';
import Login from 'routes/Login/Login';

function App() {
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2ODE4NDA3LCJpYXQiOjE3MDQyMjY0MDcsImp0aSI6IjQ2MDdhNWIzNGYyMjRkY2FiMTM2NjFhZmVmODQzMTkzIiwidXNlcl9pZCI6M30.WxtH_MO1Pa1LplwBM5wb8JTYv06Svw90GIMM9_cy01Q';
  // document.cookie = `kc-access=${token}; expires=${new Date(Date.now() + 86400000).toUTCString()}; path=/`;
  return (
    <Routes>
      <Route path='/login' element={<Authorization><Login /></Authorization>} />
      {/* <Route path='/signup' element={<Authorization><SignUp /></Authorization>}/> */}

      <Route path='/' element={<Protected><Main /></Protected>}>
        <Route index element={<Protected> <MainPage /></Protected>} />
        <Route path='/gridexample' element={<Protected><GridExample /></Protected>} />
        <Route path='/events' element={<Protected><Events /></Protected>} />
        <Route path='/logs' element={<Protected><Logs /></Protected>} />
        <Route path='/incidents' element={<Protected><Incidents /></Protected>} />
        <Route path='/productmore' element={<Protected><ProducktMorePage /></Protected>} />
      </Route>

      <Route path='*' element={<main className={'errorPage'}><p>Неверный адрес</p></main>} />

    </Routes>
  );
}

const Protected = ({ children }: any) => {
  let location = useLocation();
  const accessToken = getCookie('kc-access');

  if (!accessToken) {
    return <Navigate to='/login' state={{ from: location }} />
  }

  return children;
}

const Authorization = ({ children }: any) => {
  if (getCookie('kc-access')) {
   
    
    return <Navigate to='/' />
  }

  return children;
}

export default App;
