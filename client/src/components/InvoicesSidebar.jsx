import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const InvoicesSidebar = ({ children }) => {
  return (
    <div>
      <div className="py-4 flex justify-between items-center px-2">
        <p className="font-bold">Payments & Invoice</p>
        <MdArrowBackIos />
      </div>
      <main className="flex ">
        <section className="w-1/2">
          <Link to=':id'>
            <article className="bg-accentColor2 h-fit w-full p-3 mb-2 rounded-lg">
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
          </Link>
          <article className="bg-accentColor2 h-fit w-full p-3 mb-2 rounded-lg">
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
        </section>
        <section className="w-1/2">{children}</section>
      </main>
    </div>
  );
};

export default InvoicesSidebar;
