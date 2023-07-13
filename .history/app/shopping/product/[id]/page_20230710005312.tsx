import { getfetchUrl } from '@/lib/getfetchUrl'
import { ProductPage } from '@/typing'
import React from 'react'
type Props = {
    params: {
        id: string
    }
}

async function page({ params: {id}}: Props) {

    const response = await fetch(getfetchUrl(`api/shopping/product/${id}`))
    const productPage = await response.json() as ProductPage
    if(!productPage) return
  return (
    <div>
        <h1>{productPage.content?.description}</h1>
        <h1>jj</h1>
    </div>
  )
}

export default page