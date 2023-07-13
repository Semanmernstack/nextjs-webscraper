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
    const productPage = (await response.json()) as ProductPage
  return (
    <div>page</div>
  )
}

export default page