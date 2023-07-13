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
        <h1 className='text-2xl text-white bg-black'>{productPage.content?.title}</h1>
          <h1 className="text-xm md:sm p-5 text-white bg-black">{productPage.content?.description}</h1>
          
          <h1>jj</h1>
          <h1>jjjitr</h1>
        </div>
        <div  className="flex flex-col lg:flex-row  mt-5"   >
          <div>

            <img src={productPage.content?.images?.full_size[0]} alt="" className="h-70 w-70 border rounded-xl object-contain" />
            <div className="flex gap-3">
              {productPage.content?.images?.full_size.slice(1, 3).map((image) => (
                <img src={image} alt="" className="w-[200px] h-[200px] object-contain rounded-lg border" />
              ))}
            </div>
          </div>

        </div>
        
    </div>
  )
}

export default page