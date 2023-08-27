import React from 'react';
import { MdArrowBackIos } from 'react-icons/md'


const Purchases = () => {
  return (
    <div>
      <div className="p-2">
      <div className="py-4 flex justify-between items-center px-2">
        <p>Purchase</p>
        < MdArrowBackIos />
      </div>
      
      
      <section className="mt-6 h-48 w-[850px] rounded-lg flex items-center justify-center bg-accentColor2">
        <p className="text-3xl font-semibold text-gray-400">Buy New Product</p>
      </section>
    </div>
    </div>
  )
}

export default Purchases