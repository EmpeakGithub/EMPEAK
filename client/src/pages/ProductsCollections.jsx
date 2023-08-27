import Cars from '../images/Rectangle_31.png'

const ProductsCollections = () => {
  return (
    <div className='border-t border-t-empeakYel'>
        <section className='px-32 py-12'>
          <div className='border rounded-lg p-4 shadow-sm mb-5'>
              <section className='flex justify-around'>
                <img src={Cars} alt="item-sale" className='h-60' />
                <div className='ml-6'>
                  <div className='bg-accentColor2 pl-4 font-semibold'>
                    <p className='inline-block w-24'>Type</p>
                    <p className='inline-block w-24'>Industry</p>
                    <p className='inline-block w-24'>Status</p>
                    <p className='inline-block w-24 mr-6'>Profit/Benefit</p>
                    <p className='inline-block w-24'>Product Age</p>
                  </div>
                  <div className='mt-2 pl-4'>
                    <p className='inline-block w-24'>Ecommerce</p>
                    <p className='inline-block w-24'>Technology</p>
                    <p className='inline-block mr-4 px-4 border-2 border-black rounded-2xl w-fit'>Verified</p>
                    <p className='inline-block w-24 mr-6'>On Contact</p>
                    <p className='inline-block w-24'>12 years</p>
                  </div>
                  <article className='p-2 bg-accentColor2 mt-6 rounded-md text-sm text-justify'>
                    <h4 className='font-semibold text-lg'>Brief</h4>
                    <p>Start your Digital journey with Empeak, a secure 
                      and Trust-worthy platform to buy and sell your digital 
                      products.
                    </p>
                    <p>Start your Digital journey with Empeak, a secure and 
                      Trust-worthy platform to buy and sell your digital products.
                    </p>
                  </article>
                </div>
              </section>
          </div>
          <div className='border rounded-lg p-4 shadow-sm mb-5'>
              <section className='flex justify-around'>
                <img src={Cars} alt="item-sale" className='h-60' />
                <div className='ml-6'>
                  <div className='bg-accentColor2 pl-4 font-semibold'>
                    <p className='inline-block w-24'>Type</p>
                    <p className='inline-block w-24'>Industry</p>
                    <p className='inline-block w-24'>Status</p>
                    <p className='inline-block w-24 mr-6'>Profit/Benefit</p>
                    <p className='inline-block w-24'>Product Age</p>
                  </div>
                  <div className='mt-2 pl-4'>
                    <p className='inline-block w-24'>Ecommerce</p>
                    <p className='inline-block w-24'>Technology</p>
                    <p className='inline-block mr-4 px-4 border-2 border-black rounded-2xl w-fit'>Verified</p>
                    <p className='inline-block w-24 mr-6'>On Contact</p>
                    <p className='inline-block w-24'>12 years</p>
                  </div>
                  <article className='p-2 bg-accentColor2 mt-6 rounded-md text-sm text-justify'>
                    <h4 className='font-semibold text-lg'>Brief</h4>
                    <p>Start your Digital journey with Empeak, a secure 
                      and Trust-worthy platform to buy and sell your digital 
                      products.
                    </p>
                    <p>Start your Digital journey with Empeak, a secure and 
                      Trust-worthy platform to buy and sell your digital products.
                    </p>
                  </article>
                </div>
              </section>
          </div>
        </section>
    </div>
  )
}

export default ProductsCollections