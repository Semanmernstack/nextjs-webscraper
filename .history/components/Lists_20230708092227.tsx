import { PageResult } from '@/typing'
import Link from 'next/link'

import React from 'react'
type Props = {
    results: PageResult[]
    term: string
    
}

export default function Lists({ results, term }: Props) {
  return (
    <div className="flex">
       
        <div>
            {results.map((pageResult) => (  
                <div key={pageResult.job_id} className="space-y-2">
                    {pageResult.content.results.filters?.map((filter, i) => (  
                        <div key={i}>
                            <h1>{filter.name}</h1>
                            {filter.values?.map((value) => (
                                <Link href={`https://www.google.com/${value.url}`} prefetch={false} >
                                    {value.value}
                                </Link>
                            ))}
                           
                        </div>
                    ))}

                </div>
             ))}
        </div>
    </div>
  )
}
