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
                        <div key={i} className="border rounded-r-xl md:rounded-xl p-4">
                            <h1 className="font-extrabold">{filter.name}</h1>
                            <div className="flex flex-col">
                            {filter.values?.map((value) => (
                                <Link className="" href={`https://www.google.com${value.url}`} prefetch={false} >
                                    {value.value}
                                </Link>
                            ))}
                            </div>
                           
                        </div>
                    ))}

                </div>
             ))}
        </div>
    </div>
  )
}
