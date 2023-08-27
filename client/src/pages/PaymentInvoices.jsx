import React from 'react';
import InvoicesSidebar from '../components/InvoicesSidebar';
import { Outlet } from  'react-router-dom'



const PaymentInvoices = () => {
  return (
    <div className='p-4'>
      <InvoicesSidebar>
        < Outlet />
      </InvoicesSidebar>
    </div>


  )
}

export default PaymentInvoices