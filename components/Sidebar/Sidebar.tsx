import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Sidebar = () => {
    const sidebarmenu = [
        {
            title:"Video",
            value:"#home"
        },
        {
            title:"Description",
            value:"#description"
        },
        {
            title:"Question Arrays",
            value:"#queries"
        },
        {
            title:"Notes",
            value:"#notes"
        },
        {
            title:"Notes",
            value:"#notes"
        }
    ]
    return (
        <aside className="lg:h-screen lg:w-1/4 bg-white shadow-lg px-[30px] py-5 hidden lg:block">
            <Image src="/images/skilline.png" alt="Skilline" width={1383} height={263} className="w-52 pt-5 h-auto mb-4" />
            <ul className="space-y-2">
                {sidebarmenu.map((item, index)=>(
                <li key={index}><Link href={item.value} className="text-lg font-medium ">{item.title}</Link></li>
                ))}
               
            </ul>
        </aside>
    )
}
