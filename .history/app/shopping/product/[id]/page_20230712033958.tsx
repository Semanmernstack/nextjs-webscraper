import { getfetchUrl } from '@/lib/getfetchUrl'
import { ProductPage } from '@/typing'
import React from 'react'
type Props = {
    params: {
      id: string
    }
}

async function page({ params: { id } }: Props) {

    const response = await fetch(getfetchUrl(`api/shopping/product/${id}`))
    const productPage  = (await response.json()) as ProductPage
  return (
    <div className="">
      <div>
        <h1 className='text-2xl flex items-center justify-center text-white bg-black'>{productPage.content?.title}</h1>
          
        </div>
        <div  className="flex gap-4 flex-col lg:flex-row  mt-5 p-5"   >
          <div>

            <img src={productPage.content?.images?.full_size[0]} alt="" className=" w-[400px] border p-  h-[400px] md:w-[500px] md:h-[350px] lg:w-[786px] lg:h-[600px] rounded-xl object-contain" />
            <div className="flex gap-3 p-5">
              {productPage.content?.images?.full_size.slice(1, 3).map((image) => (
                <img src={image} alt="" className="w-[200px] h-[200px] object-contain rounded-lg border" />
              ))}
            </div>
          </div>
          <div className="p-8">
            {productPage.content.pricing.online[0].details && (
              <div>5
                <h2 className="text-lg md:text-xl"> Product Details</h2>
                <p className="text-lg">
                  {productPage.content.pricing.online[0].price_total} ("")
                  {productPage.content.pricing.online[0].currency}
                </p>
                <div>
                  <div  className="text-sm flex space-x-4 text-green-500"     >
                    
                      <p>
                        {productPage.content.pricing.online[0].price} {""}
                      </p>
                      <p>
                        {productPage.content.pricing.online[0].currency} {""}
                      </p>
                      <p>
                        {productPage.content.pricing.online[0].price_tax} {""}
                      </p>
                      <p>
                        {productPage.content.pricing.online[0].condition} 
                      </p>

                    
                    <div>
                      <p>
                        {productPage.content.pricing.online[0].details}
                      </p>
                    </div>
                  </div>
                  <div className='p-5'>
                    <p className="text-sm md:text-lg border-gray-950 p-4">
                      {productPage.content.description}
                    </p>
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>
        
    </div>
  )
}

export default page