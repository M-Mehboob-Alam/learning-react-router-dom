import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="container mx-auto ">
      <nav className="bg-gray-100 flex gap-4">
          <Link to="/invoice">Invoices</Link>
          <Link to="/expense">Expenses</Link>
      </nav>
    </div>
  );
}

export default App;
