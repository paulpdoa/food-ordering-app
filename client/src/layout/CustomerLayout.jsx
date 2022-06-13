import { Outlet } from 'react-router-dom';
import Navbar from '../components/partials/Navbar';

const CustomerLayout = () => {
  return (
    <main>
        <Navbar />
        <Outlet />
    </main>
  )
}

export default CustomerLayout