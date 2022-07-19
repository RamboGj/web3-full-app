import React, { ReactElement, ReactNode } from "react"

export default function CustomCard(children: any) {
    return (
        <div className='w-full h-full bg-slate-400 rounded-xl drop-shadow-md'>
            {children}
        </div>
    )
}