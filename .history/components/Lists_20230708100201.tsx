import { PageResult } from '@/typing'
import Link from 'next/link'

import React from 'react'
type Props = {
    results: PageResult[]
    term: string
    
}

export default function Lists({ results, term }: Props) {
  return (
    <div className=" flex md:px-5">
       
        <div>
            {results.map((pageResult) => (  
                <div key={pageResult.job_id} className="space-y-3">
                    {pageResult.content.results.filters?.map((filter, i) => (  
                        <div key={i} className="border-2 rounded-r-xl md:rounded-xl p-4">
                            <h1 className="font-extrabold">{filter.name}</h1>
                            <div className="flex flex-col">
                            {filter.values?.map((value) => (
                                <Link className="font-bold" href={`https://www.google.com${value.url}`} prefetch={false} >
                                    {value.value}
                                </Link>
                            ))}
                            </div>
                           
                        </div>
                    ))}

                </div>
             ))}
        </div>

        <div>
            {results.map((pageResult, i) => (
                <div key={pageResult.job_id} className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="md:col-span-2 lg:col-span-3 xl:col-span-4">
                        <div className=" flex gap-2 items-center divide-x-2">
                            <h1 className="text-lg md:text-xl font-semibold pl-2">Shop on Google here</h1>
                            <h2>Search Results Page {i+1}</h2>
                        </div>
                    </div>
                    <h3>Showing result for "{decodeURIComponent(term)}"  </h3>

                </div>
            ))}
        </div>
    </div>
  )
}
