import { PageResult } from '@/typing'
import Link from 'next/link'

import React from 'react'
type Props = {
    results: PageResult[]
    term: string
    
}

export default function Lists({ results, term}: Props) {
  return (
    <div>
        <div>
            <h1>

            </h1>
        </div>
        <div>
            {results?.map((PageResult) => (
                <div key={PageResult.job_id}>
                    {PageResult.content.results.filters?.map((filter, i) => (
                        <div key={i}>
                            <h1>{filter.name}</h1>
                            {filter.values.map((value) => (
                                <Link href={`https://www.google.com/${value.url}`}  >
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
