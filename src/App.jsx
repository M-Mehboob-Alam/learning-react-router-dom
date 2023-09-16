import logo from './logo.svg';
import './App.css';
import { Link , Outlet} from 'react-router-dom';
function App() {
  return (
    <div className="container mx-auto ">
      <nav className="flex gap-4 bg-gray-100">
          <Link to="/invoice">Invoices</Link>
          <Link to="/expense">Expenses</Link>
      </nav>
      <Outlet> </Outlet>
    </div>
  );
}

export default App;
