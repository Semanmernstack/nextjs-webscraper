import { getfetchUrl } from '@/lib/getfetchUrl'
import { ProductPage } from '@/typing'
import React from 'react'
type Props = {
    params: {
      id: string
    }
}

async function page({ params: { id } }: Props) {

    const response = await fetch(`api/shopping/product/${id}`)
    const productPage = (await response.json()) as ProductPage
    
    
    
    
  return (
    <div className="">
      <div>
          <h1 className="text-2xl p-5 text-white bg-black">{productPage.content?.description}</h1>
          <h1 className='text-2xl text-white bg-black'>{productPage.content?.title}</h1>
          <h1>jj</h1>
          <h1>jjjitr</h1>
        </div>
        <div>
          <img src={productPage.content?.images?.full_size[0]} alt="" />
        </div>
    </div>
  )
}

export default page