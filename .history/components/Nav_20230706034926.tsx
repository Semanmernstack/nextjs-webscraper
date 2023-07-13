"use client"
import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function Nav() {
  return (
    <header className="p-5">
        <div className="bg-red-950">
            <h1>Web Srapper</h1>
        </div>
        <div className="w-full md:max-w-3xl">
            <form action="">
                <div className="w-full p-4">
                    <div className="flex items-center gap-2  rounded-full p-3 md:max-w-4xl shadow-2xl">
                        <MagnifyingGlassIcon className="h-5 w-5 text-blue-600"/>
                        <input className="outline-none rounded-full border-none p-2 w-full flex-1 " type="text" name='searching' placeholder="search product ..." />

                    </div>
                </div>
            </form>
        </div>

    </header>
  )
}

export default Nav