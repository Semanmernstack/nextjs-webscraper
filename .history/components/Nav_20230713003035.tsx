"use client"
import React, { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import ButonS from './ButonS'
import { SearchSelect, SearchSelectItem, Select, SelectItem  } from "@tremor/react";
import { useRouter } from 'next/navigation';
const SORT_BY_MAP = {
    r: "Default",
    rv: "By review",
    p: "By price (low to high)",
    pd: "By price (high to low)",
}

function Nav() {
    const [pages, setPages] = useState("")
    const [sor, setSor] = useState("r")
    const [min_Price, setMin_Price] = useState("")
    const [max_Price, setMax_Price] = useState("")
    const router = useRouter()
  return (
    <header className="p-5">
        <div className="bg-red-950">
            <h1>Web Srapper</h1>
        </div>
        <div className="w-full flex flex-col md:max-w-3xl">
            <form action={formData => {
                const searcTerm = formData.get("searching")
                if(!formData.get("searching")) return
                const params = new URLSearchParams()
                if(pages) params.set("pages", pages.toString())
                if(sor) params.set("sor", sor.toString())
                if(min_Price) params.set("min_price", min_Price.toString())
                if(max_Price) params.set("max_price", max_Price.toString())
                router.push(`/search/${searcTerm}?${params.toString()}`)
            }}>
                <div className="w-full p-2 ">
                    <div className="flex items-center gap-4  rounded-full p-3 md:max-w-4xl shadow-2xl">
                        <MagnifyingGlassIcon className="h-5 w-5 text-blue-600"/>
                        <input className="outline-none rounded-full border-none p-2 w-full flex-1 " type="text" name='searching' placeholder="search product ..." />
                        
                        <ButonS/>
                    </div>
                    
                </div>
                <div className=" grid grid-cols-2 md:grid-cols-4 max-w-lg md:max-w-none mx-auto   gap-2 p-4">
                    <SearchSelect onValueChange={(value) => setPages(value)}    className="min-w-4" placeholder="pages">
                        {[...Array(100)].map((_, i) => (
                            <SearchSelectItem key={i} value={(i+1).toString()}>
                                {(i+1).toString()} pages

                            </SearchSelectItem>

                        ))}

                    </SearchSelect>

                    <Select onValueChange={(value) => setSor(value)} className='min-w-4' placeholder='sort' >
                        {Object.entries(SORT_BY_MAP).map(([key, value]) => (
                            <SelectItem key={key} value={key}>
                                {value}
                            </SelectItem>
                        ))}

                    </Select>

                    <SearchSelect onValueChange={(value) => setMin_Price(value)} className="min-w-4 " placeholder='Min price'>
                        {["", "100", "300", "500", "800", "1000"].map((_, i )=> (
                            <SearchSelectItem key={i} value={_.toString()}>
                                {i === 0 ? "No Minimum" : `$${_.toString()}`}
                            </SearchSelectItem>
                        ))}
                    </SearchSelect>

                    <SearchSelect onValueChange={(value) => setMax_Price(value)}  className="min-w-4 " placeholder='Max price'     >
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