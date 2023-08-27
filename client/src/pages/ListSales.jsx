import React from "react";
import Cars from "../images/Rectangle_31.png";
import { MdArrowBackIos } from 'react-icons/md'

const ListSales = () => {
  return (
    <div className="p-2">
      <div className="py-4 flex justify-between items-center px-2">
        <p>List & Sales</p>
        < MdArrowBackIos />
      </div>
      
      <section>
        <div className="border rounded-lg p-4 shadow-sm mb-5">
          <article className="flex justify-around">
            <img src={Cars} alt="item-sale" className="h-40" />
            <div className="ml-6">
              <div className="bg-accentColor2 pl-4 font-semibold">
                <p className="inline-block w-24">Type</p>
                <p className="inline-block w-24">Industry</p>
                <p className="inline-block w-24">Status</p>
                <p className="inline-block w-24 mr-6">Profit/Benefit</p>
                <p className="inline-block w-24">Product Age</p>
              </div>
              <div className="mt-2 pl-4">
                <p className="inline-block w-24">Ecommerce</p>
                <p className="inline-block w-24">Technology</p>
                <p className="inline-block mr-4 px-4 border-2 border-black rounded-2xl w-fit">
                  Verified
                </p>
                <p className="inline-block w-24 mr-6">On Contact</p>
                <p className="inline-block w-24">12 years</p>
              </div>
              <article className="p-2 bg-accentColor2 mt-6 rounded-md text-sm text-justify">
                <h4 className="font-semibold text-lg">Brief</h4>
                <p>
                  Start your Digital journey with Empeak, a secure and
                  Trust-worthy platform to buy and sell your digital products.
                </p>
                
              </article>
            </div>
          </article>
        </div>
        <article className="flex gap-3">
          <p className="bg-empeakYel px-4 py-1.5 font-semibold rounded-lg w-fit">Delete</p>
          <p className="bg-gray-500 px-8 py-1.5 font-semibold rounded-lg w-fit">List</p>
          <p className="bg-empeakYel px-4 py-1.5 font-semibold rounded-lg w-fit">Edit Details</p>
        </article>
      </section>
      <section>
        <div className="border rounded-lg mt-6 p-4 shadow-sm mb-5">
          <article className="flex justify-around">
            <img src={Cars} alt="item-sale" className="h-40" />
            <div className="ml-6">
              <div className="bg-accentColor2 pl-4 font-semibold">
                <p className="inline-block w-24">Type</p>
                <p className="inline-block w-24">Industry</p>
                <p className="inline-block w-24">Status</p>
                <p className="inline-block w-24 mr-6">Profit/Benefit</p>
                <p className="inline-block w-24">Product Age</p>
              </div>
              <div className="mt-2 pl-4">
                <p className="inline-block w-24">Ecommerce</p>
                <p className="inline-block w-24">Technology</p>
                <p className="inline-block mr-4 px-4 border-2 border-black rounded-2xl w-fit">
                  Verified
                </p>
                <p className="inline-block w-24 mr-6">On Contact</p>
                <p className="inline-block w-24">12 years</p>
              </div>
              <article className="p-2 bg-accentColor2 mt-6 rounded-md text-sm text-justify">
                <h4 className="font-semibold text-lg">Brief</h4>
                <p>
                  Start your Digital journey with Empeak, a secure and
                  Trust-worthy platform to buy and sell your digital products.
                </p>
                
              </article>
            </div>
          </article>
        </div>
        <article className="flex gap-3">
          <p className="bg-empeakYel px-4 py-1.5 font-semibold rounded-lg w-fit">Delete</p>
          <p className="bg-empeakYel px-4 py-1.5 font-semibold rounded-lg w-fit">Un-List</p>
          <p className="bg-empeakYel px-4 py-1.5 font-semibold rounded-lg w-fit">Edit Details</p>
        </article>
      </section>
      <section className="mt-6 h-32 w-[850px] rounded-lg flex items-center justify-center bg-accentColor2">
        <p className="text-3xl font-semibold text-gray-400">Add New Product</p>
      </section>
    </div>
  );
};

export default ListSales;
