import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { experimental_useFormStatus as useformStatus } from 'react-dom'

function ButonS() {
    const { pending } = useformStatus()
  return (
    <div>
        <button className="bg-blue-800 hover:bg-slate-500 p-2 rounded-full">
            {pending && "searching..."}</button>
            {!pending && <MagnifyingGlassIcon className="h-5 w-5" />}
    </div>
  )
}

export default ButonS