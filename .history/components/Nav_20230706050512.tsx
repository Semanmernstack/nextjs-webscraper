"use client"
import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import ButonS from './ButonS'
import { SearchSelect, SearchSelectItem, Select, SelectItem  } from "@tremor/react";
const SORT_BY_MAP = {
    r: "Default",
    rv: "By review",
    p: "By price (low to high)",
    pd: "By price (high to low)",
}

function Nav() {
  return (
    <header className="p-5">
        <div className="bg-red-950">
            <h1>Web Srapper</h1>
        </div>
        <div className="w-full flex flex-col md:max-w-3xl">
            <form action="">
                <div className="w-full p-2 ">
                    <div className="flex items-center gap-4  rounded-full p-3 md:max-w-4xl shadow-2xl">
                        <MagnifyingGlassIcon className="h-5 w-5 text-blue-600"/>
                        <input className="outline-none rounded-full border-none p-2 w-full flex-1 " type="text" name='searching' placeholder="search product ..." />
                        

                    </div>
                    <div>
                    <ButonS/>
                    </div>
                </div>
                <div className=" grid grid-cols-2 md:grid-cols-4   gap-2 p-4">
                    <SearchSelect className="min-w-4" placeholder="pages">
                        {[...Array(100)].map((_, i) => (
                            <SearchSelectItem key={i} value={(i+1).toString()}>
                                {(i+1).toString()} pages

                            </SearchSelectItem>

                        ))}

                    </SearchSelect>

                    <Select  className='min-w-4' placeholder='sort' >
                        {Object.entries(SORT_BY_MAP).map(([key, value]) => (
                            <SelectItem key={key} value={key}>
                                {value}
                            </SelectItem>
                        ))}

                    </Select>

                    <SearchSelect className="min-w-4 " placeholder='Min price'>
                        {["", "100", "300", "500", "800", "1000"].map((_, i )=> (
                            <SearchSelectItem key={i} value={_.toString()}>
                                {i === 0 ? "No Minimum" : `$${_.toString()}`}
                            </SearchSelectItem>
                        ))}
                    </SearchSelect>

                    <SearchSelect  className="min-w-4 " placeholder='Max price'     >
                        {["", "100", "300", "500", "800", "1000+"].map((_, i )=> (
                            <SearchSelectItem key={i} value={_.toString()}>
                                {i === 0 ? "No Maximum" : `$${_.toString()}`}
                            </SearchSelectItem>
                        ))}
                    </SearchSelect>


                </div>
            </form>
        </div>

    </header>
  )
}

export default Nav