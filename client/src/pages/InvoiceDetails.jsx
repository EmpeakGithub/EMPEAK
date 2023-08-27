import React from 'react';
import { BsPrinterFill } from 'react-icons/bs'

const InvoiceDetails = () => {
  return (
    <div className='mx-10 font-inter'>
        <h4 className='-mt-10 font-semibold'>Details</h4>
        <section className='bg-white p-2 h-[500px] shadow mt-4 rounded-lg'>
          <article className="bg-accentColor2 h-fit w-full p-3  rounded-lg">
            <div className="flex justify-between">
              <h4 className="font-semibold">Invoice</h4>
              <div>
                <p className="font-light text-right text-[10px]">Invoice No.</p>
                <p className="font-semibold">#000123</p>
              </div>
            </div>
            <article>
              <div className="flex justify-between mt-1 text-xs/8 font-light">
                <p>Billed To:</p>
                <p>Issued On</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Client Name</p>
                <p className="text-xs font-semibold">December 22, 2023</p>
              </div>
            </article>
            <article className="mt-2 text-[10px] font-semibold">
              <p>Address / Contact Info</p>
            </article>
            <article className="flex justify-between">
              <div></div>
              <div>
                <p className="text-right text-[10px]">Payment Due</p>
                <p className="text-xs font-semibold">December 22, 2023</p>
              </div>
            </article>
          </article>
          <section className='flex justify-between mt-8 mx-2'>
            <h4 className='text-[12px] font-semibold'>Services</h4>
            <div className='flex text-[10px]'>
                <p className='mr-14'>Qty.</p>
                <p className='mr-12'>Price</p>
                <p className='mr-4'>Total</p>
            </div>
          </section>
          <section className='flex justify-between mx-2 mt-3'>
            <h4 className='text-[10px]'>Invoice Item 1</h4>
            <div className='flex text-[10px]'>
                <p className='mr-12'>1</p>
                <p className='mr-10'>4000.00</p>
                <p className='mr-2'>4000.00</p>
            </div>
          </section>
          
          <article className='mt-16'>
            <hr />
            <div className='flex -mt-4 absolute right-16 justify-between bg-accentColor2 w-32 p-2 rounded-lg'>
                <p className='text-[10px]'>Total <span className='font-semibold'>(USD)</span></p>
                <p className='font-semibold text-[10px]'>4000.00</p>
            </div>
          </article>
          <div className='flex items-center mt-32 ml-2'>
            < BsPrinterFill />
            <p className='ml-2 text-sm'>Print</p>
          </div>
        </section>
    </div>
  )
}

export default InvoiceDetails