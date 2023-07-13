"use client"
import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function Nav() {
  return (
    <header className="">
        <div className="bg-red-950">
            <h1>Web Srapper</h1>
        </div>
        <div className="w-full md:max-w-3xl">
            <form action="">
                <div className="w-full">
                    <div className="flex items-center gap-2 shadow-xl rounded-full p-3 md:max-w-4xl bg-gray-500">
                        <MagnifyingGlassIcon className="h-5 w-5 text-blue-600"/>
                        <input className="outline-none border-none " type="text" name='searching' placeholder="search product ..." />

                    </div>
                </div>
            </form>
        </div>

    </header>
  )
}

export default Nav