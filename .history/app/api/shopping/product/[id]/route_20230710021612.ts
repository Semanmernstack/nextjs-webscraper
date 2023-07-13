import { ProductPage } from "@/typing"
import { NextResponse } from "next/server"
type Props = {
    params: {
        id: string
    }
}

export async function GET(request: Request, { params: { id }}: Props) {
    if(!id) return

    const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
    method: "POST",
    
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(process.env.OXYLABS_USERNAME + ":" + process.env.OXYLABS_PASSWORD).toString('base64')}`,
    },
    cache: 'no-cache',
    body: JSON.stringify({
      source: 'google_shopping_product',
      domain: 'com',
      parse: true,
      query: id,
      
      
    }),
  });

  const data = await response.json()

  
  const productPage : ProductPage[] = data.results[0]
  console.log(productPage)


    

    return NextResponse.json({productPage})

}