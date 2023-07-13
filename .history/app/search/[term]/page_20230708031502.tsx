import Lists from '@/components/Lists'
import { getfetchUrl } from '@/lib/getfetchUrl'
import { PageResult, SearchParams } from '@/typing'
import { redirect } from 'next/navigation'
import React from 'react'
type Props = {
    searchParams: SearchParams
    params: {
        term: string
    }
}

async function page({ searchParams, params: {term}}: Props) {
    if(!term) {
        redirect("/")
    }

    const response = await fetch(getfetchUrl("api/search"), {
        method: "POST" ,
        body: JSON.stringify({ searchTerm: term, ...searchParams}),

    })
    const results = (await response.json()) as PageResult[];
    
    
    

  return (
    <div>
        <Lists results={results} term={term} />
    </div>
  )
}

export default page