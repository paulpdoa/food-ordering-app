import { Route, Routes } from 'react-router-dom';
// Layout
import CustomerLayout from './layout/CustomerLayout';

// Pages
import Login from './pages/auth/Login';
import Home from './pages/Home';

function App() {
  return (
      <Routes>
          <Route path='/login' element={ <Login /> } />
          <Route element={ <CustomerLayout /> }>
              <Route path="/" element={ <Home /> } />
          </Route>
      </Routes>
  );
}

export default App;
