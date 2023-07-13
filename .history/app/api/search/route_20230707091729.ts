import { SearchParams } from "@/typing";
import { NextResponse } from "next/server";


export async function POST (request: Request) {
    const {searchTerm, pages, ...params} = await request.json()
    const serchParams: SearchParams = params
    if(!searchTerm) return

    const filter: any = []

    Object.entries(serchParams).forEach(([key, value]) => {
        if(value) {
            if (key == "max_price") {
                if ((value = "1000+")) return
            }
            filter.push({
                key,
                value: key === "sor" ? value : Number(value),
            })
        }
    });

const response = await fetch('https://realtime.oxylabs.io/v1/queries', {
  method: 'post',
  
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${Buffer.from(process.env.OXYLABS_USERNAME + ":" + process.env.OXYLABS_PASSWORD).toString('base64')}`,
  },
  cache: 'no-store',
  body: JSON.stringify({
    source: 'google_shopping_search',
    domain: 'com',
    query: searchTerm,
    pages: Number(pages) || 1,
    context: filter,
  }),
});

const data = await response.json()

    return NextResponse.json({})
}