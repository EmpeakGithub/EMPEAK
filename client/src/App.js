
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Products from './pages/Products';
import ProductsCollections from './pages/ProductsCollections';
import Login from './pages/login/Login';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import ListSales from './pages/ListSales';
import Purchases from './pages/Purchases';
import SalesAnalytics from './pages/SalesAnalytics';
import PaymentWallets from './pages/PaymentWallets';
import PaymentInvoices from './pages/PaymentInvoices';
import Account from './pages/Account';
import InvoiceDetails from './pages/InvoiceDetails';

function App() {
  return (
    <div className="App overflow-x-hidden mt-0">
      <Navbar />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/products' element={< ProductsCollections />} />
        <Route path='/products/:name' element={< Products />} /> 
        <Route path='/login' element={< Login />} />
        <Route path='/contact' element={< Contact />} />
        <Route path='/account' element={< Account />} />
        <Route path='/dashboard' element={< Dashboard />} >
          <Route path='list&sales' element={< ListSales />} />
          <Route path='purchases' element={< Purchases />} />
          <Route path='payment&invioce' element={< PaymentInvoices />} >
            <Route path=':id' element={< InvoiceDetails />} /> 
          </Route>
          <Route path='salesanalytics' element={< SalesAnalytics />} />
          <Route path='paymentwallet' element={< PaymentWallets />} /> 
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
