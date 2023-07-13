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
    const productPage = (await response.json()) as ProductPage
    console.log(productPage)
    
    
    
  return (
    <div className="">
        <h1 className="text-2xl p-5 bg-black">{productPage.content?.description}</h1>
        <h1 className='text-2xl bg-black'>{productPage.content?.title}</h1>
        <h1>jj</h1>
        <h1>jjjitr</h1>
        <div>
          {productPage.content?.description}
        </div>
    </div>
  )
}

export default page